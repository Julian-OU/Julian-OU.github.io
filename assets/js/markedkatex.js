const renderer = new marked.Renderer()

let i = 0
const next_id = () => `__special_katext_id_${i++}__`
const math_expressions = {}

function replace_math_with_ids(text) {
	// Qllowing newlines inside of `$$...$$`
	text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_match, expression) => {
		const id = next_id()
		math_expressions[id] = {
			type: 'block',
			expression
		}
		return id
	})

	// Not allowing newlines or space inside of `$...$`
	text = text.replace(/\$([^\n]+?)\$/g, (_match, expression) => {
		const id = next_id()
		math_expressions[id] = {
			type: 'inline',
			expression
		}
		return id
	})

	return text
}

const original_listitem = renderer.listitem
renderer.listitem = function (text, task, checked) {
	return original_listitem(replace_math_with_ids(text), task, checked)
}

const original_paragraph = renderer.paragraph
renderer.paragraph = function (text) {
	return original_paragraph(replace_math_with_ids(text))
}

const original_tablecell = renderer.tablecell
renderer.tablecell = function (content, flags) {
	return original_tablecell(replace_math_with_ids(content), flags)
}

const original_text = renderer.text
renderer.text = function (text) {
	return original_text(replace_math_with_ids(text))
}

function markedWithKatex(text) {
	const rendered_md_only = marked.marked(text, {
		renderer: renderer
	});
	return rendered_md_only.replace(/(__special_katext_id_\d+__)/g, (_match, capture) => {
		const {
			type,
			expression
		} = math_expressions[capture]
		return katex.renderToString(expression, {
			displayMode: type == 'block'
		})
	})
}
