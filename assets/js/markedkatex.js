const renderer = new marked.Renderer();

var options = {
  renderer: renderer,
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
};
marked.setOptions(options);

function htmldecode(text){
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

function mathsExpression(expr) {
  if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
    expr = expr.substr(2, expr.length - 4);
    return katex.renderToString(expr, { displayMode: true });
  } else if (expr.match(/^\$[\s\S]*\$$/)) {
    expr = htmldecode(expr); // temp solution
    expr = expr.substr(1, expr.length - 2);
    return katex.renderToString(expr, { displayMode: false });
  }
}

const unchanged = new marked.Renderer()

renderer.code = function(code, lang, escaped) {
  if (!lang) {
    const math = mathsExpression(code);
    if (math) {
      return math;
    }
  }
  return unchanged.code(code, lang, escaped);
};

renderer.codespan = function(text) {
  const math = mathsExpression(text);
  if (math) {
    return math;
  }
  return unchanged.codespan(text);
};

function markedWithKatex(text) {
    return marked(text, options);
}

console.log(marked("$a+b=c$", { renderer: renderer }));