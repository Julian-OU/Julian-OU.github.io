function Util() { }

function resetFocusTabsStyle() {
    window.dispatchEvent(new CustomEvent("initFocusTabs"))
}

function cdSetCookie(e, t) {
    document.cookie = e + "=" + (t || "") + "; path=/"
}

function cdSetCookieWithExpiration(e, t, n) {
    var i = new Date(Date.now() + 1e3 * n).toUTCString();
    document.cookie = e + "=" + (t || "") + "; expires=" + i + ";path=/"
}

function cdGetCookie(e) {
    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
        for (var s = n[i];
            " " == s.charAt(0);) s = s.substring(1, s.length);
        if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
    }
    return null
}

function cdDeleteCookie(e) {
    document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function proRequiredModalStart(e) {
    document.getElementById("modal-pro-required").dispatchEvent(new Event("openModal"))
}

function getFramework() {
    var e = "codyframe",
        t = cdGetCookie("cd-framework");
    return "tailwind" == t ? e = "tailwind" : "no-framework" == t && (e = "no-framework"), e
}

function getTeamPrice(e) {
    var t = parseInt(PRICE_UNL);
    return e > 5 ? t = parseInt(PRICE_UNL) + 4 * parseInt(PRICE_UNL) * parseFloat(PRICE_MULT_1) + (e - 5) * parseInt(PRICE_UNL) * parseFloat(PRICE_MULT_2) : e > 1 && (t = parseInt(PRICE_UNL) + (e - 1) * parseInt(PRICE_UNL) * parseFloat(PRICE_MULT_1)), Math.round(100 * t) / 100
}

function getTeamFullPrice(e) {
    var t = 199;
    return e > 5 ? t = 199 + 796 * parseFloat(PRICE_MULT_1) + 199 * (e - 5) * parseFloat(PRICE_MULT_2) : e > 1 && (t = 199 + 199 * (e - 1) * parseFloat(PRICE_MULT_1)), Math.round(100 * t) / 100
}

function getTeamMembershipPrice(e) {
    var t = 89;
    return e > 10 ? t = t + 9 * 71.2 + 66.75 * (e - 10) : t += 71.2 * (e - 1), Math.round(100 * t) / 100
}

function openSiteSearch() {
    var e = document.getElementById("adv-search-modal");
    e && e.dispatchEvent(new Event("openModal"))
}

function getCssVar(e, t) {
    return getComputedStyle(e).getPropertyValue(t)
}

function logInModalStart(e) {
    var t = document.getElementById("modal-registration-required");
    t && t.dispatchEvent(new Event("openModal"))
}

function logInModalClose(e) {
    var t = document.getElementById("modal-registration-required");
    t && t.dispatchEvent(new Event("closeModal"))
}

function resetLoggedInAppearance() {
    $("body").removeClass("user--not-logged-in"), "1" == IS_FREE ? $("body").addClass("user--free") : ($("body").removeClass("user--free"), $(".js-project-breadcrumb").text(PROJECT.label).attr("href", "account/edit-project/" + PROJECT.id))
} ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        i = e.document,
        s = Object.getPrototypeOf,
        o = n.slice,
        r = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        f = d.toString,
        p = f.call(Object),
        m = {};

    function h(e, t) {
        var n = (t = t || i).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }
    var g = "3.0.0",
        v = function (e, t) {
            return new v.fn.init(e, t)
        },
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        y = /^-ms-/,
        w = /-([a-z])/g,
        C = function (e, t) {
            return t.toUpperCase()
        };

    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = v.type(e);
        return "function" !== n && !v.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    v.fn = v.prototype = {
        jquery: g,
        constructor: v,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this)
        },
        pushStack: function (e) {
            var t = v.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return v.each(this, e)
        },
        map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, v.extend = v.fn.extend = function () {
        var e, t, n, i, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || v.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = r[t], r !== (i = e[t]) && (c && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = n && v.isArray(n) ? n : []) : o = n && v.isPlainObject(n) ? n : {}, r[t] = v.extend(c, o, i)) : void 0 !== i && (r[t] = i));
        return r
    }, v.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === v.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e)) && (!(t = s(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && f.call(n) === p)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            h(e)
        },
        camelCase: function (e) {
            return e.replace(y, "ms-").replace(w, C)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var n, i = 0;
            if (E(e))
                for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(b, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, s = e.length; n > i; i++) e[s++] = t[i];
            return e.length = s, e
        },
        grep: function (e, t, n) {
            for (var i = [], s = 0, o = e.length, r = !n; o > s; s++) !t(e[s], s) !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var i, s, o = 0,
                a = [];
            if (E(e))
                for (i = e.length; i > o; o++) null != (s = t(e[o], o, n)) && a.push(s);
            else
                for (o in e) null != (s = t(e[o], o, n)) && a.push(s);
            return r.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, s;
            return "string" == typeof t && (n = e[t], t = e, e = n), v.isFunction(e) ? (i = o.call(arguments, 2), (s = function () {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || v.guid++, s) : void 0
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function (e) {
        var t, n, i, s, o, r, a, l, c, u, d, f, p, m, h, g, v, b, y, w = "sizzle" + 1 * new Date,
            C = e.document,
            E = 0,
            x = 0,
            j = re(),
            _ = re(),
            k = re(),
            S = function (e, t) {
                return e === t && (d = !0), 0
            },
            N = {}.hasOwnProperty,
            T = [],
            A = T.pop,
            I = T.push,
            L = T.push,
            B = T.slice,
            M = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            U = "\\[" + O + "*(" + F + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + O + "*\\]",
            R = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
            P = new RegExp(O + "+", "g"),
            q = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            H = new RegExp("^" + O + "*," + O + "*"),
            $ = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            W = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            z = new RegExp(R),
            V = new RegExp("^" + F + "$"),
            G = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + D + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            Y = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\0" === e ? "???" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function () {
                f()
            },
            se = be(function (e) {
                return !0 === e.disabled
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(T = B.call(C.childNodes), C.childNodes), T[C.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: T.length ? function (e, t) {
                    I.apply(e, B.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, s) {
            var o, a, c, u, d, m, v, b = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
            if (!s && ((t ? t.ownerDocument || t : C) !== p && f(t), t = t || p, h)) {
                if (11 !== E && (d = Q.exec(e)))
                    if (o = d[1]) {
                        if (9 === E) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (b && (c = b.getElementById(o)) && y(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                    } if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
                        if (1 !== E) b = t, v = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (m = r(e)).length; a--;) m[a] = "#" + u + " " + ve(m[a]);
                            v = m.join(","), b = Z.test(e) && he(t.parentNode) || t
                        }
                        if (v) try {
                            return L.apply(i, b.querySelectorAll(v)), i
                        } catch (e) { } finally {
                                u === w && t.removeAttribute("id")
                            }
                    }
            }
            return l(e.replace(q, "$1"), t, i, s)
        }

        function re() {
            var e = [];
            return function t(n, s) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = s
            }
        }

        function ae(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && !1 === t.disabled && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !se(t)) !== e)
            }
        }

        function me(e) {
            return ae(function (t) {
                return t = +t, ae(function (n, i) {
                    for (var s, o = e([], n.length, t), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
                })
            })
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, f = oe.setDocument = function (e) {
            var t, s, r = e ? e.ownerDocument || e : C;
            return r !== p && 9 === r.nodeType && r.documentElement ? (m = (p = r).documentElement, h = !o(p), C !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ie, !1) : s.attachEvent && s.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = le(function (e) {
                return m.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
            }), n.getById ? (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && h) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(Y, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete i.find.ID, i.filter.ID = function (e) {
                var t = e.replace(Y, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    s = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                return void 0 !== t.getElementsByClassName && h ? t.getElementsByClassName(e) : void 0
            }, v = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (le(function (e) {
                m.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + D + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), m.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (n.matchesSelector = K.test(b = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", R)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(m.compareDocumentPosition), y = t || K.test(m.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, S = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === C && y(C, e) ? -1 : t === p || t.ownerDocument === C && y(C, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var n, i = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    r = [e],
                    a = [t];
                if (!s || !o) return e === p ? -1 : t === p ? 1 : s ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                if (s === o) return ue(e, t);
                for (n = e; n = n.parentNode;) r.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; r[i] === a[i];) i++;
                return i ? ue(r[i], a[i]) : r[i] === C ? -1 : a[i] === C ? 1 : 0
            }, p) : p
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && f(e), t = t.replace(W, "='$1']"), n.matchesSelector && h && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                var i = b.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) { }
            return oe(t, p, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && f(e), y(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var s = i.attrHandle[t.toLowerCase()],
                o = s && N.call(i.attrHandle, t.toLowerCase()) ? s(e, t, !h) : void 0;
            return void 0 !== o ? o : n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, i = [],
                s = 0,
                o = 0;
            if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
                for (; t = e[o++];) t === e[o] && (s = i.push(o));
                for (; s--;) e.splice(i[s], 1)
            }
            return u = null, e
        }, s = oe.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += s(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Y, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Y, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = j[e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && j(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (i) {
                        var s = oe.attr(i, e);
                        return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? (" " + s.replace(P, " ") + " ").indexOf(n) > -1 : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, i, s) {
                    var o = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === s ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, p, m, h = o !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            b = !l && !a,
                            y = !1;
                        if (g) {
                            if (o) {
                                for (; h;) {
                                    for (f = t; f = f[h];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    m = h = "only" === e && !m && "nextSibling"
                                }
                                return !0
                            }
                            if (m = [r ? g.firstChild : g.lastChild], r && b) {
                                for (y = (p = (c = (u = (d = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], f = p && g.childNodes[p]; f = ++p && f && f[h] || (y = p = 0) || m.pop();)
                                    if (1 === f.nodeType && ++y && f === t) {
                                        u[e] = [E, p, y];
                                        break
                                    }
                            } else if (b && (y = p = (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === y)
                                for (;
                                    (f = ++p && f && f[h] || (y = p = 0) || m.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [E, y]), f !== t)););
                            return (y -= s) === i || y % i == 0 && y / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, s = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[w] ? s(t) : s.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
                        for (var i, o = s(e, t), r = o.length; r--;) e[i = M(e, o[r])] = !(n[i] = o[r])
                    }) : function (e) {
                        return s(e, 0, n)
                    }) : s
                }
            },
            pseudos: {
                not: ae(function (e) {
                    var t = [],
                        n = [],
                        i = a(e.replace(q, "$1"));
                    return i[w] ? ae(function (e, t, n, s) {
                        for (var o, r = i(e, null, s, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, s, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: ae(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: ae(function (e) {
                    return e = e.replace(Y, ee),
                        function (t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                }),
                lang: ae(function (e) {
                    return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Y, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === m
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                header: function (e) {
                    return J.test(e.nodeName)
                },
                input: function (e) {
                    return X.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me(function () {
                    return [0]
                }),
                last: me(function (e, t) {
                    return [t - 1]
                }),
                eq: me(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: me(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: me(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: me(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: me(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        }) i.pseudos[t] = fe(t);

        function ge() { }

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function be(e, t, n) {
            var i = t.dir,
                s = t.next,
                o = s || i,
                r = n && "parentNode" === o,
                a = x++;
            return t.first ? function (t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, s)
            } : function (t, n, l) {
                var c, u, d, f = [E, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === E && c[1] === a) return f[2] = c[2];
                                if (u[o] = f, f[2] = e(t, n, l)) return !0
                            }
            }
        }

        function ye(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var s = e.length; s--;)
                    if (!e[s](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, i, s) {
            for (var o, r = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (n && !n(o, i, s) || (r.push(o), c && t.push(a)));
            return r
        }

        function Ce(e, t, n, i, s, o) {
            return i && !i[w] && (i = Ce(i)), s && !s[w] && (s = Ce(s, o)), ae(function (o, r, a, l) {
                var c, u, d, f = [],
                    p = [],
                    m = r.length,
                    h = o || function (e, t, n) {
                        for (var i = 0, s = t.length; s > i; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !o && t ? h : we(h, f, e, a, l),
                    v = n ? s || (o ? e : m || i) ? [] : r : g;
                if (n && n(g, v, a, l), i)
                    for (c = we(v, p), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                if (o) {
                    if (s || e) {
                        if (s) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                            s(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && (c = s ? M(o, d) : f[u]) > -1 && (o[c] = !(r[c] = d))
                    }
                } else v = we(v === r ? v.splice(m, v.length) : v), s ? s(null, r, v, l) : L.apply(r, v)
            })
        }

        function Ee(e) {
            for (var t, n, s, o = e.length, r = i.relative[e[0].type], a = r || i.relative[" "], l = r ? 1 : 0, u = be(function (e) {
                return e === t
            }, a, !0), d = be(function (e) {
                return M(t, e) > -1
            }, a, !0), f = [function (e, n, i) {
                var s = !r && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null, s
            }]; o > l; l++)
                if (n = i.relative[e[l].type]) f = [be(ye(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (s = ++l; o > s && !i.relative[e[s].type]; s++);
                        return Ce(l > 1 && ye(f), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, s > l && Ee(e.slice(l, s)), o > s && Ee(e = e.slice(s)), o > s && ve(e))
                    }
                    f.push(n)
                } return ye(f)
        }

        function xe(e, t) {
            var n = t.length > 0,
                s = e.length > 0,
                o = function (o, r, a, l, u) {
                    var d, m, g, v = 0,
                        b = "0",
                        y = o && [],
                        w = [],
                        C = c,
                        x = o || s && i.find.TAG("*", u),
                        j = E += null == C ? 1 : Math.random() || .1,
                        _ = x.length;
                    for (u && (c = r === p || r || u); b !== _ && null != (d = x[b]); b++) {
                        if (s && d) {
                            for (m = 0, r || d.ownerDocument === p || (f(d), a = !h); g = e[m++];)
                                if (g(d, r || p, a)) {
                                    l.push(d);
                                    break
                                } u && (E = j)
                        }
                        n && ((d = !g && d) && v--, o && y.push(d))
                    }
                    if (v += b, n && b !== v) {
                        for (m = 0; g = t[m++];) g(y, w, r, a);
                        if (o) {
                            if (v > 0)
                                for (; b--;) y[b] || w[b] || (w[b] = A.call(l));
                            w = we(w)
                        }
                        L.apply(l, w), u && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                    }
                    return u && (E = j, c = C), y
                };
            return n ? ae(o) : o
        }
        return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, r = oe.tokenize = function (e, t) {
            var n, s, o, r, a, l, c, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (r in n && !(s = H.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = $.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(q, " ")
                }), a = a.slice(n.length)), i.filter) !(s = G[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : _(e, l).slice(0)
        }, a = oe.compile = function (e, t) {
            var n, i = [],
                s = [],
                o = k[e + " "];
            if (!o) {
                for (t || (t = r(e)), n = t.length; n--;)(o = Ee(t[n]))[w] ? i.push(o) : s.push(o);
                (o = k(e, xe(s, i))).selector = e
            }
            return o
        }, l = oe.select = function (e, t, s, o) {
            var l, c, u, d, f, p = "function" == typeof e && e,
                m = !o && r(e = p.selector || e);
            if (s = s || [], 1 === m.length) {
                if ((c = m[0] = m[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && h && i.relative[c[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(Y, ee), t) || [])[0])) return s;
                    p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = G.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                    if ((f = i.find[d]) && (o = f(u.matches[0].replace(Y, ee), Z.test(c[0].type) && he(t.parentNode) || t))) {
                        if (c.splice(l, 1), !(e = o.length && ve(c))) return L.apply(s, o), s;
                        break
                    }
            }
            return (p || a(e, m))(o, t, !h, s, !t || Z.test(e) && he(t.parentNode) || t), s
        }, n.sortStable = w.split("").sort(S).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(D, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    v.find = x, v.expr = x.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = x.uniqueSort, v.text = x.getText, v.isXMLDoc = x.isXML, v.contains = x.contains, v.escapeSelector = x.escape;
    var j = function (e, t, n) {
        for (var i = [], s = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (s && v(e).is(n)) break;
                i.push(e)
            } return i
    },
        _ = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = v.expr.match.needsContext,
        S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        N = /^.[^:#\[\.,]*$/;

    function T(e, t, n) {
        if (v.isFunction(t)) return v.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return v.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (N.test(t)) return v.filter(t, e, n);
            t = v.filter(t, e)
        }
        return v.grep(e, function (e) {
            return l.call(t, e) > -1 !== n && 1 === e.nodeType
        })
    }
    v.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? v.find.matchesSelector(i, e) ? [i] : [] : v.find.matches(e, v.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, v.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                s = this;
            if ("string" != typeof e) return this.pushStack(v(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (v.contains(s[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; i > t; t++) v.find(e, s[t], n);
            return i > 1 ? v.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function (e) {
            return !!T(this, "string" == typeof e && k.test(e) ? v(e) : e || [], !1).length
        }
    });
    var A, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function (e, t, n) {
        var s, o;
        if (!e) return this;
        if (n = n || A, "string" == typeof e) {
            if (!(s = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !s[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (s[1]) {
                if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(s[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), S.test(s[1]) && v.isPlainObject(t))
                    for (s in t) v.isFunction(this[s]) ? this[s](t[s]) : this.attr(s, t[s]);
                return this
            }
            return (o = i.getElementById(s[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : v.makeArray(e, this)
    }).prototype = v.fn, A = v(i);
    var L = /^(?:parents|prev(?:Until|All))/,
        B = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function M(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    v.fn.extend({
        has: function (e) {
            var t = v(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (v.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                s = this.length,
                o = [],
                r = "string" != typeof e && v(e);
            if (!k.test(e))
                for (; s > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return j(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return j(e, "parentNode", n)
        },
        next: function (e) {
            return M(e, "nextSibling")
        },
        prev: function (e) {
            return M(e, "previousSibling")
        },
        nextAll: function (e) {
            return j(e, "nextSibling")
        },
        prevAll: function (e) {
            return j(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return j(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return j(e, "previousSibling", n)
        },
        siblings: function (e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return _(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, i) {
            var s = v.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = v.filter(i, s)), this.length > 1 && (B[e] || v.uniqueSort(s), L.test(e) && s.reverse()), this.pushStack(s)
        }
    });
    var D = /\S+/g;

    function O(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function U(e, t, n) {
        var i;
        try {
            e && v.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && v.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    v.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return v.each(e.match(D) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : v.extend({}, e);
        var t, n, i, s, o = [],
            r = [],
            a = -1,
            l = function () {
                for (s = e.once, i = t = !0; r.length; a = -1)
                    for (n = r.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, s && (o = n ? [] : "")
            },
            c = {
                add: function () {
                    return o && (n && !t && (a = o.length - 1, r.push(n)), function t(n) {
                        v.each(n, function (n, i) {
                            v.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== v.type(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function () {
                    return v.each(arguments, function (e, t) {
                        for (var n;
                            (n = v.inArray(t, o, n)) > -1;) o.splice(n, 1), a >= n && a--
                    }), this
                },
                has: function (e) {
                    return e ? v.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return s = r = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return s = r = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, n) {
                    return s || (n = [e, (n = n || []).slice ? n.slice() : n], r.push(n), t || l()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, v.extend({
        Deferred: function (t) {
            var n = [
                ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
            ],
                i = "pending",
                s = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return s.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return v.Deferred(function (t) {
                            v.each(n, function (n, i) {
                                var s = v.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, s) {
                        var o = 0;

                        function r(t, n, i, s) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(o > t)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, v.isFunction(c) ? s ? c.call(e, r(o, n, O, s), r(o, n, F, s)) : (o++, c.call(e, r(o, n, O, s), r(o, n, F, s), r(o, n, O, n.notifyWith))) : (i !== O && (a = void 0, l = [e]), (s || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = s ? c : function () {
                                        try {
                                            c()
                                        } catch (e) {
                                            v.Deferred.exceptionHook && v.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== F && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return v.Deferred(function (e) {
                            n[0][3].add(r(0, e, v.isFunction(s) ? s : O, e.notifyWith)), n[1][3].add(r(0, e, v.isFunction(t) ? t : O)), n[2][3].add(r(0, e, v.isFunction(i) ? i : F))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? v.extend(e, s) : s
                    }
                },
                o = {};
            return v.each(n, function (e, t) {
                var r = t[2],
                    a = t[5];
                s[t[1]] = r.add, a && r.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), r.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = r.fireWith
            }), s.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                s = o.call(arguments),
                r = v.Deferred(),
                a = function (e) {
                    return function (n) {
                        i[e] = this, s[e] = arguments.length > 1 ? o.call(arguments) : n, --t || r.resolveWith(i, s)
                    }
                };
            if (1 >= t && (U(e, r.done(a(n)).resolve, r.reject), "pending" === r.state() || v.isFunction(s[n] && s[n].then))) return r.then();
            for (; n--;) U(s[n], a(n), r.reject);
            return r.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    };
    var P = v.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), v.ready()
    }
    v.fn.ready = function (e) {
        return P.then(e), this
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || P.resolveWith(i, [v]))
        }
    }), v.ready.then = P.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
    var H = function (e, t, n, i, s, o, r) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === v.type(n))
            for (a in s = !0, n) H(e, t, a, n[a], !0, o, r);
        else if (void 0 !== i && (s = !0, v.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(v(e), n)
        })), t))
            for (; l > a; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
        return s ? e : c ? t.call(e) : l ? t(e[0], n) : o
    },
        $ = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function W() {
        this.expando = v.expando + W.uid++
    }
    W.uid = 1, W.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, s = this.cache(e);
            if ("string" == typeof t) s[v.camelCase(t)] = n;
            else
                for (i in t) s[v.camelCase(i)] = t[i];
            return s
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    v.isArray(t) ? t = t.map(v.camelCase) : t = (t = v.camelCase(t)) in i ? [t] : t.match(D) || [], n = t.length;
                    for (; n--;) delete i[t[n]]
                } (void 0 === t || v.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !v.isEmptyObject(t)
        }
    };
    var z = new W,
        V = new W,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        X = /[A-Z]/g;

    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(X, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : G.test(n) ? JSON.parse(n) : n)
                } catch (e) { }
                V.set(e, t, n)
            } else n = void 0;
        return n
    }
    v.extend({
        hasData: function (e) {
            return V.hasData(e) || z.hasData(e)
        },
        data: function (e, t, n) {
            return V.access(e, t, n)
        },
        removeData: function (e, t) {
            V.remove(e, t)
        },
        _data: function (e, t, n) {
            return z.access(e, t, n)
        },
        _removeData: function (e, t) {
            z.remove(e, t)
        }
    }), v.fn.extend({
        data: function (e, t) {
            var n, i, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (s = V.get(o), 1 === o.nodeType && !z.get(o, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && (0 === (i = r[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)), J(o, i, s[i])));
                    z.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                V.set(this, e)
            }) : H(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = V.get(o, e))) return n;
                    if (void 0 !== (n = J(o, e))) return n
                } else this.each(function () {
                    V.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                V.remove(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = z.get(e, t), n && (!i || v.isArray(n) ? i = z.access(e, t, v.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                i = n.length,
                s = n.shift(),
                o = v._queueHooks(e, t);
            "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, function () {
                v.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return z.get(e, n) || z.access(e, n, {
                empty: v.Callbacks("once memory").add(function () {
                    z.remove(e, [t + "queue", n])
                })
            })
        }
    }), v.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = v.queue(this, e, t);
                v._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                s = v.Deferred(),
                o = this,
                r = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = z.get(o[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), s.promise(t)
        }
    });
    var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Q = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"],
        Y = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
        },
        ee = function (e, t, n, i) {
            var s, o, r = {};
            for (o in t) r[o] = e.style[o], e.style[o] = t[o];
            for (o in s = n.apply(e, i || []), t) e.style[o] = r[o];
            return s
        };

    function te(e, t, n, i) {
        var s, o = 1,
            r = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return v.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (v.cssNumber[t] ? "" : "px"),
            u = (v.cssNumber[t] || "px" !== c && +l) && Q.exec(v.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                u /= o = o || ".5", v.style(e, t, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --r)
        }
        return n && (u = +u || +l || 0, s = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = s)), s
    }
    var ne = {};

    function ie(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            s = ne[i];
        return s || (t = n.body.appendChild(n.createElement(i)), s = v.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), ne[i] = s, s)
    }

    function se(e, t) {
        for (var n, i, s = [], o = 0, r = e.length; r > o; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (s[o] = z.get(i, "display") || null, s[o] || (i.style.display = "")), "" === i.style.display && Y(i) && (s[o] = ie(i))) : "none" !== n && (s[o] = "none", z.set(i, "display", n)));
        for (o = 0; r > o; o++) null != s[o] && (e[o].style.display = s[o]);
        return e
    }
    v.fn.extend({
        show: function () {
            return se(this, !0)
        },
        hide: function () {
            return se(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Y(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var oe = /^(?:checkbox|radio)$/i,
        re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ce(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && v.nodeName(e, t) ? v.merge([e], n) : n
    }

    function ue(e, t) {
        for (var n = 0, i = e.length; i > n; n++) z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var de = /<|&#?\w+;/;

    function fe(e, t, n, i, s) {
        for (var o, r, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, m = e.length; m > p; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === v.type(o)) v.merge(f, o.nodeType ? [o] : o);
                else if (de.test(o)) {
                    for (r = r || d.appendChild(t.createElement("div")), a = (re.exec(o) || ["", ""])[1].toLowerCase(), l = le[a] || le._default, r.innerHTML = l[1] + v.htmlPrefilter(o) + l[2], u = l[0]; u--;) r = r.lastChild;
                    v.merge(f, r.childNodes), (r = d.firstChild).textContent = ""
                } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];)
            if (i && v.inArray(o, i) > -1) s && s.push(o);
            else if (c = v.contains(o.ownerDocument, o), r = ce(d.appendChild(o), "script"), c && ue(r), n)
                for (u = 0; o = r[u++];) ae.test(o.type || "") && n.push(o);
        return d
    } ! function () {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), m.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var pe = i.documentElement,
        me = /^key/,
        he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ge = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function be() {
        return !1
    }

    function ye() {
        try {
            return i.activeElement
        } catch (e) { }
    }

    function we(e, t, n, i, s, o) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) we(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = be;
        else if (!s) return e;
        return 1 === o && (r = s, (s = function (e) {
            return v().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = v.guid++)), e.each(function () {
            v.event.add(this, t, s, i, n)
        })
    }
    v.event = {
        global: {},
        add: function (e, t, n, i, s) {
            var o, r, a, l, c, u, d, f, p, m, h, g = z.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler, s = o.selector), s && v.find.matchesSelector(pe, s), n.guid || (n.guid = v.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (t) {
                    return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(D) || [""]).length; c--;) p = h = (a = ge.exec(t[c]) || [])[1], m = (a[2] || "").split(".").sort(), p && (d = v.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = v.event.special[p] || {}, u = v.extend({
                    type: p,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: m.join(".")
                }, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, m, r) || e.addEventListener && e.addEventListener(p, r)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), s ? f.splice(f.delegateCount++, 0, u) : f.push(u), v.event.global[p] = !0)
        },
        remove: function (e, t, n, i, s) {
            var o, r, a, l, c, u, d, f, p, m, h, g = z.hasData(e) && z.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(D) || [""]).length; c--;)
                    if (p = h = (a = ge.exec(t[c]) || [])[1], m = (a[2] || "").split(".").sort(), p) {
                        for (d = v.event.special[p] || {}, f = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = f.length; o--;) u = f[o], !s && h !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        r && !f.length && (d.teardown && !1 !== d.teardown.call(e, m, g.handle) || v.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) v.event.remove(e, p + t[c], n, i, !0);
                v.isEmptyObject(l) && z.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, s, o, r, a = v.event.fix(e),
                l = new Array(arguments.length),
                c = (z.get(this, "events") || {})[a.type] || [],
                u = v.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (r = v.event.handlers.call(this, a, c), t = 0;
                    (s = r[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = s.elem, n = 0;
                        (o = s.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((v.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, s, o, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; a > n; n++) void 0 === i[s = (o = t[n]).selector + " "] && (i[s] = o.needsContext ? v(s, this).index(l) > -1 : v.find(s, this, null, [l]).length), i[s] && i.push(o);
                        i.length && r.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && r.push({
                        elem: this,
                        handlers: t.slice(a)
                    }), r
        },
        addProp: function (e, t) {
            Object.defineProperty(v.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(t) ? function () {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                } : function () {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[v.expando] ? e : new v.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== ye() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ye() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && v.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return v.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, v.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, v.Event = function (e, t) {
        return this instanceof v.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), void (this[v.expando] = !0)) : new v.Event(e, t)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && he.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    s = e.handleObj;
                return i && (i === this || v.contains(this, i)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), v.fn.extend({
        on: function (e, t, n, i) {
            return we(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return we(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function () {
                v.event.remove(this, e, n, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^true\/(.*)/,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) {
        return v.nodeName(e, "table") && v.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function Se(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        var t = je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Te(e, t) {
        var n, i, s, o, r, a, l, c;
        if (1 === t.nodeType) {
            if (z.hasData(e) && (o = z.access(e), r = z.set(t, o), c = o.events))
                for (s in delete r.handle, r.events = {}, c)
                    for (n = 0, i = c[s].length; i > n; n++) v.event.add(t, s, c[s][n]);
            V.hasData(e) && (a = V.access(e), l = v.extend({}, a), V.set(t, l))
        }
    }

    function Ae(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && oe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Ie(e, t, n, i) {
        t = r.apply([], t);
        var s, o, a, l, c, u, d = 0,
            f = e.length,
            p = f - 1,
            g = t[0],
            b = v.isFunction(g);
        if (b || f > 1 && "string" == typeof g && !m.checkClone && xe.test(g)) return e.each(function (s) {
            var o = e.eq(s);
            b && (t[0] = g.call(this, s, o.html())), Ie(o, t, n, i)
        });
        if (f && (o = (s = fe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === s.childNodes.length && (s = o), o || i)) {
            for (l = (a = v.map(ce(s, "script"), Se)).length; f > d; d++) c = s, d !== p && (c = v.clone(c, !0, !0), l && v.merge(a, ce(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, v.map(a, Ne), d = 0; l > d; d++) c = a[d], ae.test(c.type || "") && !z.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : h(c.textContent.replace(_e, ""), u))
        }
        return e
    }

    function Le(e, t, n) {
        for (var i, s = t ? v.filter(t, e) : e, o = 0; null != (i = s[o]); o++) n || 1 !== i.nodeType || v.cleanData(ce(i)), i.parentNode && (n && v.contains(i.ownerDocument, i) && ue(ce(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    v.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, s, o, r, a = e.cloneNode(!0),
                l = v.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                for (r = ce(a), i = 0, s = (o = ce(e)).length; s > i; i++) Ae(o[i], r[i]);
            if (t)
                if (n)
                    for (o = o || ce(e), r = r || ce(a), i = 0, s = o.length; s > i; i++) Te(o[i], r[i]);
                else Te(e, a);
            return (r = ce(a, "script")).length > 0 && ue(r, !l && ce(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, s = v.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[z.expando]) {
                        if (t.events)
                            for (i in t.events) s[i] ? v.event.remove(n, i) : v.removeEvent(n, i, t.handle);
                        n[z.expando] = void 0
                    }
                    n[V.expando] && (n[V.expando] = void 0)
                }
        }
    }), v.fn.extend({
        detach: function (e) {
            return Le(this, e, !0)
        },
        remove: function (e) {
            return Le(this, e)
        },
        text: function (e) {
            return H(this, function (e) {
                return void 0 === e ? v.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Ie(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Ie(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(ce(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        },
        html: function (e) {
            return H(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !le[(re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = v.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(ce(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ie(this, arguments, function (t) {
                var n = this.parentNode;
                v.inArray(this, e) < 0 && (v.cleanData(ce(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (e) {
            for (var n, i = [], s = v(e), o = s.length - 1, r = 0; o >= r; r++) n = r === o ? this : this.clone(!0), v(s[r])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Be = /^margin/,
        Me = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
        De = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };

    function Oe(e, t, n) {
        var i, s, o, r, a = e.style;
        return (n = n || De(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || v.contains(e.ownerDocument, e) || (r = v.style(e, t)), !m.pixelMarginRight() && Me.test(r) && Be.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }

    function Fe(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    } ! function () {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", pe.appendChild(a);
                var t = e.getComputedStyle(l);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, s = "4px" === t.width, l.style.marginRight = "50%", o = "4px" === t.marginRight, pe.removeChild(a), l = null
            }
        }
        var n, s, o, r, a = i.createElement("div"),
            l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), v.extend(m, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), s
            },
            pixelMarginRight: function () {
                return t(), o
            },
            reliableMarginLeft: function () {
                return t(), r
            }
        }))
    }();
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Re = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Pe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        qe = ["Webkit", "Moz", "ms"],
        He = i.createElement("div").style;

    function $e(e) {
        if (e in He) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = qe.length; n--;)
            if ((e = qe[n] + t) in He) return e
    }

    function We(e, t, n) {
        var i = Q.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ze(e, t, n, i, s) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += v.css(e, n + Z[o], !0, s)), i ? ("content" === n && (r -= v.css(e, "padding" + Z[o], !0, s)), "margin" !== n && (r -= v.css(e, "border" + Z[o] + "Width", !0, s))) : (r += v.css(e, "padding" + Z[o], !0, s), "padding" !== n && (r += v.css(e, "border" + Z[o] + "Width", !0, s)));
        return r
    }

    function Ve(e, t, n) {
        var i, s = !0,
            o = De(e),
            r = "border-box" === v.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), 0 >= i || null == i) {
            if ((0 > (i = Oe(e, t, o)) || null == i) && (i = e.style[t]), Me.test(i)) return i;
            s = r && (m.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + ze(e, t, n || (r ? "border" : "content"), s, o) + "px"
    }

    function Ge(e, t, n, i, s) {
        return new Ge.prototype.init(e, t, n, i, s)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Oe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, r, a = v.camelCase(t),
                    l = e.style;
                return t = v.cssProps[a] || (v.cssProps[a] = $e(a) || a), r = v.cssHooks[t] || v.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : l[t] : ("string" === (o = typeof n) && (s = Q.exec(n)) && s[1] && (n = te(e, t, s), o = "number"), void (null != n && n == n && ("number" === o && (n += s && s[3] || (v.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var s, o, r, a = v.camelCase(t);
            return t = v.cssProps[a] || (v.cssProps[a] = $e(a) || a), (r = v.cssHooks[t] || v.cssHooks[a]) && "get" in r && (s = r.get(e, !0, n)), void 0 === s && (s = Oe(e, t, i)), "normal" === s && t in Pe && (s = Pe[t]), "" === n || n ? (o = parseFloat(s), !0 === n || isFinite(o) ? o || 0 : s) : s
        }
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? !Ue.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, t, i) : ee(e, Re, function () {
                    return Ve(e, t, i)
                }) : void 0
            },
            set: function (e, n, i) {
                var s, o = i && De(e),
                    r = i && ze(e, t, i, "border-box" === v.css(e, "boxSizing", !1, o), o);
                return r && (s = Q.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = v.css(e, t)), We(0, n, r)
            }
        }
    }), v.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + Z[i] + t] = o[i] || o[i - 2] || o[0];
                return s
            }
        }, Be.test(e) || (v.cssHooks[e + t].set = We)
    }), v.fn.extend({
        css: function (e, t) {
            return H(this, function (e, t, n) {
                var i, s, o = {},
                    r = 0;
                if (v.isArray(t)) {
                    for (i = De(e), s = t.length; s > r; r++) o[t[r]] = v.css(e, t[r], !1, i);
                    return o
                }
                return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), v.Tween = Ge, Ge.prototype = {
        constructor: Ge,
        init: function (e, t, n, i, s, o) {
            this.elem = e, this.prop = n, this.easing = s || v.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
        }
    }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, v.fx = Ge.prototype.init, v.fx.step = {};
    var Xe, Je, Ke = /^(?:toggle|show|hide)$/,
        Qe = /queueHooks$/;

    function Ze() {
        Je && (e.requestAnimationFrame(Ze), v.fx.tick())
    }

    function Ye() {
        return e.setTimeout(function () {
            Xe = void 0
        }), Xe = v.now()
    }

    function et(e, t) {
        var n, i = 0,
            s = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) s["margin" + (n = Z[i])] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s
    }

    function tt(e, t, n) {
        for (var i, s = (nt.tweeners[t] || []).concat(nt.tweeners["*"]), o = 0, r = s.length; r > o; o++)
            if (i = s[o].call(n, t, e)) return i
    }

    function nt(e, t, n) {
        var i, s, o = 0,
            r = nt.prefilters.length,
            a = v.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var t = Xe || Ye(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, r = c.tweens.length; r > o; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), 1 > i && r ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xe || Ye(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = v.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
            var n, i, s, o, r;
            for (n in e)
                if (s = t[i = v.camelCase(n)], o = e[n], v.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (r = v.cssHooks[i]) && "expand" in r)
                    for (n in o = r.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = s);
                else t[i] = s
        }(u, c.opts.specialEasing); r > o; o++)
            if (i = nt.prefilters[o].call(c, e, u, c.opts)) return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)), i;
        return v.map(u, tt, c), v.isFunction(c.opts.start) && c.opts.start.call(e, c), v.fx.timer(v.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    v.Animation = v.extend(nt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Q.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(D);
            for (var n, i = 0, s = e.length; s > i; i++) n = e[i], nt.tweeners[n] = nt.tweeners[n] || [], nt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var i, s, o, r, a, l, c, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                m = e.style,
                h = e.nodeType && Y(e),
                g = z.get(e, "fxshow");
            for (i in n.queue || (null == (r = v._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                r.unqueued || a()
            }), r.unqueued++, f.always(function () {
                f.always(function () {
                    r.unqueued--, v.queue(e, "fx").length || r.empty.fire()
                })
            })), t)
                if (s = t[i], Ke.test(s)) {
                    if (delete t[i], o = o || "toggle" === s, s === (h ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    p[i] = g && g[i] || v.style(e, i)
                } if ((l = !v.isEmptyObject(t)) || !v.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [m.overflow, m.overflowX, m.overflowY], null == (c = g && g.display) && (c = z.get(e, "display")), "none" === (u = v.css(e, "display")) && (c ? u = c : (se([e], !0), c = e.style.display || c, u = v.css(e, "display"), se([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(e, "float") && (l || (f.done(function () {
                    m.display = c
                }), null == c && (u = m.display, c = "none" === u ? "" : u)), m.display = "inline-block")), n.overflow && (m.overflow = "hidden", f.always(function () {
                    m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]
                })), l = !1, p) l || (g ? "hidden" in g && (h = g.hidden) : g = z.access(e, "fxshow", {
                    display: c
                }), o && (g.hidden = !h), h && se([e], !0), f.done(function () {
                    for (i in h || se([e]), z.remove(e, "fxshow"), p) v.style(e, i, p[i])
                })), l = tt(h ? g[i] : 0, i, f), i in g || (g[i] = l.start, h && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? nt.prefilters.unshift(e) : nt.prefilters.push(e)
        }
    }), v.speed = function (e, t, n) {
        var s = e && "object" == typeof e ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        return v.fx.off || i.hidden ? s.duration = 0 : s.duration = "number" == typeof s.duration ? s.duration : s.duration in v.fx.speeds ? v.fx.speeds[s.duration] : v.fx.speeds._default, null != s.queue && !0 !== s.queue || (s.queue = "fx"), s.old = s.complete, s.complete = function () {
            v.isFunction(s.old) && s.old.call(this), s.queue && v.dequeue(this, s.queue)
        }, s
    }, v.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Y).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var s = v.isEmptyObject(e),
                o = v.speed(t, n, i),
                r = function () {
                    var t = nt(this, v.extend({}, e), o);
                    (s || z.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    s = null != e && e + "queueHooks",
                    o = v.timers,
                    r = z.get(this);
                if (s) r[s] && r[s].stop && i(r[s]);
                else
                    for (s in r) r[s] && r[s].stop && Qe.test(s) && i(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(n), t = !1, o.splice(s, 1));
                !t && n || v.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = z.get(this),
                    i = n[e + "queue"],
                    s = n[e + "queueHooks"],
                    o = v.timers,
                    r = i ? i.length : 0;
                for (n.finish = !0, v.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (e, i, s) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(et(t, !0), e, i, s)
        }
    }), v.each({
        slideDown: et("show"),
        slideUp: et("hide"),
        slideToggle: et("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        v.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), v.timers = [], v.fx.tick = function () {
        var e, t = 0,
            n = v.timers;
        for (Xe = v.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || v.fx.stop(), Xe = void 0
    }, v.fx.timer = function (e) {
        v.timers.push(e), e() ? v.fx.start() : v.timers.pop()
    }, v.fx.interval = 13, v.fx.start = function () {
        Je || (Je = e.requestAnimationFrame ? e.requestAnimationFrame(Ze) : e.setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.stop = function () {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(Je) : e.clearInterval(Je), Je = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fn.delay = function (t, n) {
        return t = v.fx && v.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var s = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(s)
            }
        })
    },
        function () {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
        }();
    var it, st = v.expr.attrHandle;
    v.fn.extend({
        attr: function (e, t) {
            return H(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        }
    }), v.extend({
        attr: function (e, t, n) {
            var i, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === o && v.isXMLDoc(e) || (s = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? it : void 0)), void 0 !== n ? null === n ? void v.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : s && "get" in s && null !== (i = s.get(e, t)) ? i : null == (i = v.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!m.radioValue && "radio" === t && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                s = t && t.match(D);
            if (s && 1 === e.nodeType)
                for (; n = s[i++];) e.removeAttribute(n)
        }
    }), it = {
        set: function (e, t, n) {
            return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = st[t] || v.find.attr;
        st[t] = function (e, t, i) {
            var s, o, r = t.toLowerCase();
            return i || (o = st[r], st[r] = s, s = null != n(e, t, i) ? r : null, st[r] = o), s
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i,
        rt = /^(?:a|area)$/i;
    v.fn.extend({
        prop: function (e, t) {
            return H(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[v.propFix[e] || e]
            })
        }
    }), v.extend({
        prop: function (e, t, n) {
            var i, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(e) || (t = v.propFix[t] || t, s = v.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = v.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (v.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        v.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;

    function lt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    v.fn.extend({
        addClass: function (e) {
            var t, n, i, s, o, r, a, l = 0;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).addClass(e.call(this, t, lt(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(D) || []; n = this[l++];)
                    if (s = lt(n), i = 1 === n.nodeType && (" " + s + " ").replace(at, " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (a = v.trim(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, s, o, r, a, l = 0;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).removeClass(e.call(this, t, lt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(D) || []; n = this[l++];)
                    if (s = lt(n), i = 1 === n.nodeType && (" " + s + " ").replace(at, " ")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s !== (a = v.trim(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, lt(this), t), t)
            }) : this.each(function () {
                var t, i, s, o;
                if ("string" === n)
                    for (i = 0, s = v(this), o = e.match(D) || []; t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = lt(this)) && z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : z.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + lt(n) + " ").replace(at, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ct = /\r/g,
        ut = /[\x20\t\r\n\f]+/g;
    v.fn.extend({
        val: function (e) {
            var t, n, i, s = this[0];
            return arguments.length ? (i = v.isFunction(e), this.each(function (n) {
                var s;
                1 === this.nodeType && (null == (s = i ? e.call(this, n, v(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            })) : s ? (t = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof (n = s.value) ? n.replace(ct, "") : null == n ? "" : n : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = v.find.attr(e, "value");
                    return null != t ? t : v.trim(v.text(e)).replace(ut, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, s = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                        if (((n = i[l]).selected || l === s) && !n.disabled && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            if (t = v(n).val(), o) return t;
                            r.push(t)
                        } return r
                },
                set: function (e, t) {
                    for (var n, i, s = e.options, o = v.makeArray(t), r = s.length; r--;)((i = s[r]).selected = v.inArray(v.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            set: function (e, t) {
                return v.isArray(t) ? e.checked = v.inArray(v(e).val(), t) > -1 : void 0
            }
        }, m.checkOn || (v.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dt = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function (t, n, s, o) {
            var r, a, l, c, u, f, p, m = [s || i],
                h = d.call(t, "type") ? t.type : t,
                g = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = s = s || i, 3 !== s.nodeType && 8 !== s.nodeType && !dt.test(h + v.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), u = h.indexOf(":") < 0 && "on" + h, (t = t[v.expando] ? t : new v.Event(h, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = s), n = null == n ? [t] : v.makeArray(n, [t]), p = v.event.special[h] || {}, o || !p.trigger || !1 !== p.trigger.apply(s, n))) {
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    for (c = p.delegateType || h, dt.test(c + h) || (a = a.parentNode); a; a = a.parentNode) m.push(a), l = a;
                    l === (s.ownerDocument || i) && m.push(l.defaultView || l.parentWindow || e)
                }
                for (r = 0;
                    (a = m[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? c : p.bindType || h, (f = (z.get(a, "events") || {})[t.type] && z.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && $(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), n) || !$(s) || u && v.isFunction(s[h]) && !v.isWindow(s) && ((l = s[u]) && (s[u] = null), v.event.triggered = h, s[h](), v.event.triggered = void 0, l && (s[u] = l)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0
            });
            v.event.trigger(i, null, t)
        }
    }), v.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? v.event.trigger(e, t, n, !0) : void 0
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), v.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), m.focusin = "onfocusin" in e, m.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            v.event.simulate(t, e.target, v.event.fix(e))
        };
        v.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    s = z.access(i, t);
                s || i.addEventListener(e, n, !0), z.access(i, t, (s || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    s = z.access(i, t) - 1;
                s ? z.access(i, t, s) : (i.removeEventListener(e, n, !0), z.remove(i, t))
            }
        }
    });
    var ft = e.location,
        pt = v.now(),
        mt = /\?/;
    v.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t), n
    };
    var ht = /\[\]$/,
        gt = /\r?\n/g,
        vt = /^(?:submit|button|image|reset|file)$/i,
        bt = /^(?:input|select|textarea|keygen)/i;

    function yt(e, t, n, i) {
        var s;
        if (v.isArray(t)) v.each(t, function (t, s) {
            n || ht.test(e) ? i(e, s) : yt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, i)
        });
        else if (n || "object" !== v.type(t)) i(e, t);
        else
            for (s in t) yt(e + "[" + s + "]", t[s], n, i)
    }
    v.param = function (e, t) {
        var n, i = [],
            s = function (e, t) {
                var n = v.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (n in e) yt(n, e[n], t, s);
        return i.join("&")
    }, v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = v.prop(this, "elements");
                return e ? v.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !v(this).is(":disabled") && bt.test(this.nodeName) && !vt.test(e) && (this.checked || !oe.test(e))
            }).map(function (e, t) {
                var n = v(this).val();
                return null == n ? null : v.isArray(n) ? v.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            }).get()
        }
    });
    var wt = /%20/g,
        Ct = /#.*$/,
        Et = /([?&])_=[^&]*/,
        xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        kt = {},
        St = {},
        Nt = "*/".concat("*"),
        Tt = i.createElement("a");

    function At(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, s = 0,
                o = t.toLowerCase().match(D) || [];
            if (v.isFunction(n))
                for (; i = o[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function It(e, t, n, i) {
        var s = {},
            o = e === St;

        function r(a) {
            var l;
            return s[a] = !0, v.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        return r(t.dataTypes[0]) || !s["*"] && r("*")
    }

    function Lt(e, t) {
        var n, i, s = v.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
        return i && v.extend(!0, e, i), e
    }
    Tt.href = ft.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ft.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Lt(Lt(e, v.ajaxSettings), t) : Lt(v.ajaxSettings, e)
        },
        ajaxPrefilter: At(kt),
        ajaxTransport: At(St),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var s, o, r, a, l, c, u, d, f, p, m = v.ajaxSetup({}, n),
                h = m.context || m,
                g = m.context && (h.nodeType || h.jquery) ? v(h) : v.event,
                b = v.Deferred(),
                y = v.Callbacks("once memory"),
                w = m.statusCode || {},
                C = {},
                E = {},
                x = "canceled",
                j = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = xt.exec(r);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return u ? r : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, C[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) j.always(e[j.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return s && s.abort(t), _(0, t), this
                    }
                };
            if (b.promise(j), m.url = ((t || m.url || ft.href) + "").replace(_t, ft.protocol + "//"), m.type = n.method || n.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(D) || [""], null == m.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = m.url, c.href = c.href, m.crossDomain = Tt.protocol + "//" + Tt.host != c.protocol + "//" + c.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = v.param(m.data, m.traditional)), It(kt, m, n, j), u) return j;
            for (f in (d = v.event && m.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !jt.test(m.type), o = m.url.replace(Ct, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(wt, "+")) : (p = m.url.slice(o.length), m.data && (o += (mt.test(o) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (o = o.replace(Et, ""), p = (mt.test(o) ? "&" : "?") + "_=" + pt++ + p), m.url = o + p), m.ifModified && (v.lastModified[o] && j.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && j.setRequestHeader("If-None-Match", v.etag[o])), (m.data && m.hasContent && !1 !== m.contentType || n.contentType) && j.setRequestHeader("Content-Type", m.contentType), j.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : m.accepts["*"]), m.headers) j.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (!1 === m.beforeSend.call(h, j, m) || u)) return j.abort();
            if (x = "abort", y.add(m.complete), j.done(m.success), j.fail(m.error), s = It(St, m, n, j)) {
                if (j.readyState = 1, d && g.trigger("ajaxSend", [j, m]), u) return j;
                m.async && m.timeout > 0 && (l = e.setTimeout(function () {
                    j.abort("timeout")
                }, m.timeout));
                try {
                    u = !1, s.send(C, _)
                } catch (e) {
                    if (u) throw e;
                    _(-1, e)
                }
            } else _(-1, "No Transport");

            function _(t, n, i, a) {
                var c, f, p, C, E, x = n;
                u || (u = !0, l && e.clearTimeout(l), s = void 0, r = a || "", j.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (C = function (e, t, n) {
                    for (var i, s, o, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (s in a)
                            if (a[s] && a[s].test(i)) {
                                l.unshift(s);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            r || (r = s)
                        }
                        o = o || r
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                }(m, j, i)), C = function (e, t, n, i) {
                    var s, o, r, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(r = c[l + " " + o] || c["* " + o]))
                                    for (s in c)
                                        if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], u.unshift(a[1]));
                                            break
                                        } if (!0 !== r)
                                    if (r && e.throws) t = r(t);
                                    else try {
                                        t = r(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: r ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, C, j, c), c ? (m.ifModified && ((E = j.getResponseHeader("Last-Modified")) && (v.lastModified[o] = E), (E = j.getResponseHeader("etag")) && (v.etag[o] = E)), 204 === t || "HEAD" === m.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = C.state, f = C.data, c = !(p = C.error))) : (p = x, !t && x || (x = "error", 0 > t && (t = 0))), j.status = t, j.statusText = (n || x) + "", c ? b.resolveWith(h, [f, x, j]) : b.rejectWith(h, [j, x, p]), j.statusCode(w), w = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [j, m, c ? f : p]), y.fireWith(h, [j, x]), d && (g.trigger("ajaxComplete", [j, m]), --v.active || v.event.trigger("ajaxStop")))
            }
            return j
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return v.get(e, void 0, t, "script")
        }
    }), v.each(["get", "post"], function (e, t) {
        v[t] = function (e, n, i, s) {
            return v.isFunction(n) && (s = s || i, i = n, n = void 0), v.ajax(v.extend({
                url: e,
                type: t,
                dataType: s,
                data: n,
                success: i
            }, v.isPlainObject(e) && e))
        }
    }), v._evalUrl = function (e) {
        return v.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, v.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (v.isFunction(e) && (e = e.call(this[0])), t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function (e) {
        return !v.expr.pseudos.visible(e)
    }, v.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, v.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) { }
    };
    var Bt = {
        0: 200,
        1223: 204
    },
        Mt = v.ajaxSettings.xhr();
    m.cors = !!Mt && "withCredentials" in Mt, m.ajax = Mt = !!Mt, v.ajaxTransport(function (t) {
        var n, i;
        return m.cors || Mt && !t.crossDomain ? {
            send: function (s, o) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), v.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), v.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (s, o) {
                t = v("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    });
    var Dt = [],
        Ot = /(=)\?(?=&|$)|\?\?/;

    function Ft(e) {
        return v.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Dt.pop() || v.expando + "_" + pt++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (t, n, i) {
        var s, o, r, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = v.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + s) : !1 !== t.jsonp && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
            return r || v.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = e[s], e[s] = function () {
            r = arguments
        }, i.always(function () {
            void 0 === o ? v(e).removeProp(s) : e[s] = o, t[s] && (t.jsonpCallback = n.jsonpCallback, Dt.push(s)), r && v.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), m.createHTMLDocument = function () {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), v.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((s = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(s)) : t = i), r = !n && [], (o = S.exec(e)) ? [t.createElement(o[1])] : (o = fe([e], t, r), r && r.length && v(r).remove(), v.merge([], o.childNodes)));
        var s, o, r
    }, v.fn.load = function (e, t, n) {
        var i, s, o, r = this,
            a = e.indexOf(" ");
        return a > -1 && (i = v.trim(e.slice(a)), e = e.slice(0, a)), v.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && v.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, r.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            r.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.expr.pseudos.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    }, v.offset = {
        setOffset: function (e, t, n) {
            var i, s, o, r, a, l, c = v.css(e, "position"),
                u = v(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = v.css(e, "top"), l = v.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (i = u.position()).top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), v.isFunction(t) && (t = t.call(e, n, v.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + s), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, v.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                v.offset.setOffset(this, e, t)
            });
            var t, n, i, s, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect()).width || i.height ? (n = Ft(s = o.ownerDocument), t = s.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === v.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), v.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + v.css(e[0], "borderTopWidth", !0),
                    left: i.left + v.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - v.css(n, "marginTop", !0),
                    left: t.left - i.left - v.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
                return e || pe
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        v.fn[e] = function (i) {
            return H(this, function (e, i, s) {
                var o = Ft(e);
                return void 0 === s ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : s, n ? s : o.pageYOffset) : e[i] = s)
            }, e, i, arguments.length)
        }
    }), v.each(["top", "left"], function (e, t) {
        v.cssHooks[t] = Fe(m.pixelPosition, function (e, n) {
            return n ? (n = Oe(e, t), Me.test(n) ? v(e).position()[t] + "px" : n) : void 0
        })
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        v.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            v.fn[i] = function (s, o) {
                var r = arguments.length && (n || "boolean" != typeof s),
                    a = n || (!0 === s || !0 === o ? "margin" : "border");
                return H(this, function (t, n, s) {
                    var o;
                    return v.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === s ? v.css(t, n, a) : v.style(t, n, s, a)
                }, t, r ? s : void 0, r)
            }
        })
    }), v.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), v.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return v
    });
    var Ut = e.jQuery,
        Rt = e.$;
    return v.noConflict = function (t) {
        return e.$ === v && (e.$ = Rt), t && e.jQuery === v && (e.jQuery = Ut), v
    }, t || (e.jQuery = e.$ = v), v
}),
    function (e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
    }(this, function () {
        return function (e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var s = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(s.exports, s, s.exports, t), s.l = !0, s.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.i = function (e) {
                return e
            }, t.d = function (e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, t.n = function (e) {
                var n = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 3)
        }([function (e, t, n) {
            var i, s, o;
            s = [e, n(7)], i = function (e, t) {
                "use strict";
                var n = function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(t),
                    i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    s = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    o = function () {
                        function e(t) {
                            (function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return s(e, [{
                            key: "resolveOptions",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function () {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function () {
                                var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function () {
                                    return e.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var i = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = i + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function () {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function () {
                                this.selectedText = (0, n.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function () {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function (e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function () {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function () {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function (e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function () {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = o
            }, void 0 !== (o = "function" == typeof i ? i.apply(t, s) : i) && (e.exports = o)
        }, function (e, t, n) {
            var i = n(6),
                s = n(5);
            e.exports = function (e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!i.string(t)) throw new TypeError("Second argument must be a String");
                if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
                if (i.node(e)) return function (e, t, n) {
                    return e.addEventListener(t, n), {
                        destroy: function () {
                            e.removeEventListener(t, n)
                        }
                    }
                }(e, t, n);
                if (i.nodeList(e)) return function (e, t, n) {
                    return Array.prototype.forEach.call(e, function (e) {
                        e.addEventListener(t, n)
                    }), {
                        destroy: function () {
                            Array.prototype.forEach.call(e, function (e) {
                                e.removeEventListener(t, n)
                            })
                        }
                    }
                }(e, t, n);
                if (i.string(e)) return function (e, t, n) {
                    return s(document.body, e, t, n)
                }(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, function (e, t) {
            function n() { }
            n.prototype = {
                on: function (e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function (e, t, n) {
                    function i() {
                        s.off(e, i), t.apply(n, arguments)
                    }
                    var s = this;
                    return i._ = t, this.on(e, i, n)
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, s = n.length; i < s; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                },
                off: function (e, t) {
                    var n = this.e || (this.e = {}),
                        i = n[e],
                        s = [];
                    if (i && t)
                        for (var o = 0, r = i.length; o < r; o++) i[o].fn !== t && i[o].fn._ !== t && s.push(i[o]);
                    return s.length ? n[e] = s : delete n[e], this
                }
            }, e.exports = n
        }, function (e, t, n) {
            var i, s, o;
            s = [e, n(0), n(2), n(1)], void 0 !== (o = "function" == typeof (i = function (e, t, n, i) {
                "use strict";

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function o(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var r = s(t),
                    a = s(n),
                    l = s(i),
                    c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    u = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    d = function (e) {
                        function t(e, n) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var i = function (e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return i.resolveOptions(n), i.listenClick(e), i
                        }
                        return function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), u(t, [{
                            key: "resolveOptions",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === c(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function (e) {
                                var t = this;
                                this.listener = (0, l.default)(e, "click", function (e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function (e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new r.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function (e) {
                                return o("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function (e) {
                                var t = o("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function (e) {
                                return o("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e,
                                    n = !!document.queryCommandSupported;
                                return t.forEach(function (e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), t
                    }(a.default);
                e.exports = d
            }) ? i.apply(t, s) : i) && (e.exports = o)
        }, function (e, t) {
            var n = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            e.exports = function (e, t) {
                for (; e && e.nodeType !== n;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }, function (e, t, n) {
            function i(e, t, n, i, o) {
                var r = s.apply(this, arguments);
                return e.addEventListener(n, r, o), {
                    destroy: function () {
                        e.removeEventListener(n, r, o)
                    }
                }
            }

            function s(e, t, n, i) {
                return function (n) {
                    n.delegateTarget = o(n.target, t), n.delegateTarget && i.call(e, n)
                }
            }
            var o = n(4);
            e.exports = function (e, t, n, s, o) {
                return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
                    return i(e, t, n, s, o)
                }))
            }
        }, function (e, t) {
            t.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, t.nodeList = function (e) {
                var n = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
            }, t.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, t.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, function (e, t) {
            e.exports = function (e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var i = window.getSelection(),
                        s = document.createRange();
                    s.selectNodeContents(e), i.removeAllRanges(), i.addRange(s), t = i.toString()
                }
                return t
            }
        }])
    }),
    function (e) {
        var t = "object" == typeof window && window || "object" == typeof self && self;
        "undefined" == typeof exports || exports.nodeType ? t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
            return t.hljs
        })) : e(exports)
    }(function (e) {
        var t = [],
            n = Object.keys,
            i = {},
            s = {},
            o = /^(no-?highlight|plain|text)$/i,
            r = /\blang(?:uage)?-([\w-]+)\b/i,
            a = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            l = {
                case_insensitive: "cI",
                lexemes: "l",
                contains: "c",
                keywords: "k",
                subLanguage: "sL",
                className: "cN",
                begin: "b",
                beginKeywords: "bK",
                end: "e",
                endsWithParent: "eW",
                illegal: "i",
                excludeBegin: "eB",
                excludeEnd: "eE",
                returnBegin: "rB",
                returnEnd: "rE",
                variants: "v",
                IDENT_RE: "IR",
                UNDERSCORE_IDENT_RE: "UIR",
                NUMBER_RE: "NR",
                C_NUMBER_RE: "CNR",
                BINARY_NUMBER_RE: "BNR",
                RE_STARTERS_RE: "RSR",
                BACKSLASH_ESCAPE: "BE",
                APOS_STRING_MODE: "ASM",
                QUOTE_STRING_MODE: "QSM",
                PHRASAL_WORDS_MODE: "PWM",
                C_LINE_COMMENT_MODE: "CLCM",
                C_BLOCK_COMMENT_MODE: "CBCM",
                HASH_COMMENT_MODE: "HCM",
                NUMBER_MODE: "NM",
                C_NUMBER_MODE: "CNM",
                BINARY_NUMBER_MODE: "BNM",
                CSS_NUMBER_MODE: "CSSNM",
                REGEXP_MODE: "RM",
                TITLE_MODE: "TM",
                UNDERSCORE_TITLE_MODE: "UTM",
                COMMENT: "C",
                beginRe: "bR",
                endRe: "eR",
                illegalRe: "iR",
                lexemesRe: "lR",
                terminators: "t",
                terminator_end: "tE"
            },
            c = "</span>",
            u = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            },
            d = "of and for in not or if then".split(" ");

        function f(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function p(e) {
            return e.nodeName.toLowerCase()
        }

        function m(e) {
            return o.test(e)
        }

        function h(e) {
            var t, n = {},
                i = Array.prototype.slice.call(arguments, 1);
            for (t in e) n[t] = e[t];
            return i.forEach(function (e) {
                for (t in e) n[t] = e[t]
            }), n
        }

        function g(e) {
            var t = [];
            return function e(n, i) {
                for (var s = n.firstChild; s; s = s.nextSibling) 3 === s.nodeType ? i += s.nodeValue.length : 1 === s.nodeType && (t.push({
                    event: "start",
                    offset: i,
                    node: s
                }), i = e(s, i), p(s).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: i,
                    node: s
                }));
                return i
            }(e, 0), t
        }

        function v(e) {
            return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function (t) {
                return h(e, {
                    v: null
                }, t)
            })), e.cached_variants ? e.cached_variants : function e(t) {
                return !!t && (t.eW || e(t.starts))
            }(e) ? [h(e, {
                starts: e.starts ? h(e.starts) : null
            })] : [e]
        }

        function b(e) {
            if (l && !e.langApiRestored) {
                for (var t in e.langApiRestored = !0, l) e[t] && (e[l[t]] = e[t]);
                (e.c || []).concat(e.v || []).forEach(b)
            }
        }

        function y(e) {
            function t(e) {
                return e && e.source || e
            }

            function i(n, i) {
                return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (i ? "g" : ""))
            } ! function s(o, r) {
                o.compiled || (o.compiled = !0, o.k = o.k || o.bK, o.k && (o.k = function (e, t) {
                    var i = {};
                    return "string" == typeof e ? s("keyword", e) : n(e).forEach(function (t) {
                        s(t, e[t])
                    }), i;

                    function s(e, n) {
                        t && (n = n.toLowerCase()), n.split(" ").forEach(function (t) {
                            var n = t.split("|");
                            i[n[0]] = [e, function (e, t) {
                                return t ? Number(t) : function (e) {
                                    return -1 != d.indexOf(e.toLowerCase())
                                }(e) ? 0 : 1
                            }(n[0], n[1])]
                        })
                    }
                }(o.k, e.cI)), o.lR = i(o.l || /\w+/, !0), r && (o.bK && (o.b = "\\b(" + o.bK.split(" ").join("|") + ")\\b"), o.b || (o.b = /\B|\b/), o.bR = i(o.b), o.endSameAsBegin && (o.e = o.b), o.e || o.eW || (o.e = /\B|\b/), o.e && (o.eR = i(o.e)), o.tE = t(o.e) || "", o.eW && r.tE && (o.tE += (o.e ? "|" : "") + r.tE)), o.i && (o.iR = i(o.i)), null == o.relevance && (o.relevance = 1), o.c || (o.c = []), o.c = Array.prototype.concat.apply([], o.c.map(function (e) {
                    return v("self" === e ? o : e)
                })), o.c.forEach(function (e) {
                    s(e, o)
                }), o.starts && s(o.starts, r), o.t = function (e) {
                    var n, s, o = {},
                        r = [],
                        a = {},
                        l = 1;

                    function c(e, t) {
                        o[l] = e, r.push([e, t]), l += new RegExp(t.toString() + "|").exec("").length - 1 + 1
                    }
                    for (var u = 0; u < e.c.length; u++) c(s = e.c[u], s.bK ? "\\.?(?:" + s.b + ")\\.?" : s.b);
                    e.tE && c("end", e.tE), e.i && c("illegal", e.i);
                    var d = r.map(function (e) {
                        return e[1]
                    });
                    return n = i(function (e, n) {
                        for (var i = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, s = 0, o = "", r = 0; r < e.length; r++) {
                            var a = s += 1,
                                l = t(e[r]);
                            for (0 < r && (o += "|"), o += "("; 0 < l.length;) {
                                var c = i.exec(l);
                                if (null == c) {
                                    o += l;
                                    break
                                }
                                o += l.substring(0, c.index), l = l.substring(c.index + c[0].length), "\\" == c[0][0] && c[1] ? o += "\\" + String(Number(c[1]) + a) : (o += c[0], "(" == c[0] && s++)
                            }
                            o += ")"
                        }
                        return o
                    }(d), !0), a.lastIndex = 0, a.exec = function (t) {
                        var i;
                        if (0 === r.length) return null;
                        n.lastIndex = a.lastIndex;
                        var s = n.exec(t);
                        if (!s) return null;
                        for (var l = 0; l < s.length; l++)
                            if (null != s[l] && null != o["" + l]) {
                                i = o["" + l];
                                break
                            } return "string" == typeof i ? (s.type = i, s.extra = [e.i, e.tE]) : (s.type = "begin", s.rule = i), s
                    }, a
                }(o))
            }(e)
        }

        function w(e, t, n, s) {
            function o(e, t, n, i) {
                if (!n && "" === t) return "";
                if (!e) return t;
                var s = '<span class="' + (i ? "" : u.classPrefix);
                return (s += e + '">') + t + (n ? "" : c)
            }

            function r() {
                v += null != h.sL ? function () {
                    var e = "string" == typeof h.sL;
                    if (e && !i[h.sL]) return f(b);
                    var t = e ? w(h.sL, b, !0, g[h.sL]) : C(b, h.sL.length ? h.sL : void 0);
                    return 0 < h.relevance && (E += t.relevance), e && (g[h.sL] = t.top), o(t.language, t.value, !1, !0)
                }() : function () {
                    var e, t, n, i, s, r, a;
                    if (!h.k) return f(b);
                    for (i = "", t = 0, h.lR.lastIndex = 0, n = h.lR.exec(b); n;) i += f(b.substring(t, n.index)), s = h, r = n, a = p.cI ? r[0].toLowerCase() : r[0], (e = s.k.hasOwnProperty(a) && s.k[a]) ? (E += e[1], i += o(e[0], f(n[0]))) : i += f(n[0]), t = h.lR.lastIndex, n = h.lR.exec(b);
                    return i + f(b.substr(t))
                }(), b = ""
            }

            function a(e) {
                v += e.cN ? o(e.cN, "", !0) : "", h = Object.create(e, {
                    parent: {
                        value: h
                    }
                })
            }
            var l = {};

            function d(e, i) {
                var s = i && i[0];
                if (b += e, null == s) return r(), 0;
                if ("begin" == l.type && "end" == i.type && l.index == i.index && "" === s) return b += t.slice(i.index, i.index + 1), 1;
                if ("begin" === (l = i).type) return function (e) {
                    var t = e[0],
                        n = e.rule;
                    return n && n.endSameAsBegin && (n.eR = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), n.skip ? b += t : (n.eB && (b += t), r(), n.rB || n.eB || (b = t)), a(n), n.rB ? 0 : t.length
                }(i);
                if ("illegal" === i.type && !n) throw new Error('Illegal lexeme "' + s + '" for mode "' + (h.cN || "<unnamed>") + '"');
                if ("end" === i.type) {
                    var o = function (e) {
                        var t = e[0],
                            n = function e(t, n) {
                                if (function (e, t) {
                                    var n = e && e.exec(t);
                                    return n && 0 === n.index
                                }(t.eR, n)) {
                                    for (; t.endsParent && t.parent;) t = t.parent;
                                    return t
                                }
                                if (t.eW) return e(t.parent, n)
                            }(h, t);
                        if (n) {
                            var i = h;
                            for (i.skip ? b += t : (i.rE || i.eE || (b += t), r(), i.eE && (b = t)); h.cN && (v += c), h.skip || h.sL || (E += h.relevance), (h = h.parent) !== n.parent;);
                            return n.starts && (n.endSameAsBegin && (n.starts.eR = n.eR), a(n.starts)), i.rE ? 0 : t.length
                        }
                    }(i);
                    if (null != o) return o
                }
                return b += s, s.length
            }
            var p = _(e);
            if (!p) throw new Error('Unknown language: "' + e + '"');
            y(p);
            var m, h = s || p,
                g = {},
                v = "";
            for (m = h; m !== p; m = m.parent) m.cN && (v = o(m.cN, "", !0) + v);
            var b = "",
                E = 0;
            try {
                for (var x, j, k = 0; h.t.lastIndex = k, x = h.t.exec(t);) j = d(t.substring(k, x.index), x), k = x.index + j;
                for (d(t.substr(k)), m = h; m.parent; m = m.parent) m.cN && (v += c);
                return {
                    relevance: E,
                    value: v,
                    i: !1,
                    language: e,
                    top: h
                }
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                    i: !0,
                    relevance: 0,
                    value: f(t)
                };
                throw e
            }
        }

        function C(e, t) {
            t = t || u.languages || n(i);
            var s = {
                relevance: 0,
                value: f(e)
            },
                o = s;
            return t.filter(_).filter(k).forEach(function (t) {
                var n = w(t, e, !1);
                n.language = t, n.relevance > o.relevance && (o = n), n.relevance > s.relevance && (o = s, s = n)
            }), o.language && (s.second_best = o), s
        }

        function E(e) {
            return u.tabReplace || u.useBR ? e.replace(a, function (e, t) {
                return u.useBR && "\n" === e ? "<br>" : u.tabReplace ? t.replace(/\t/g, u.tabReplace) : ""
            }) : e
        }

        function x(e) {
            var n, i, o, a, l, c = function (e) {
                var t, n, i, s, o = e.className + " ";
                if (o += e.parentNode ? e.parentNode.className : "", n = r.exec(o)) return _(n[1]) ? n[1] : "no-highlight";
                for (t = 0, i = (o = o.split(/\s+/)).length; t < i; t++)
                    if (m(s = o[t]) || _(s)) return s
            }(e);
            m(c) || (u.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, l = n.textContent, o = c ? w(c, l, !0) : C(l), (i = g(n)).length && ((a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = o.value, o.value = function (e, n, i) {
                var s = 0,
                    o = "",
                    r = [];

                function a() {
                    return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
                }

                function l(e) {
                    o += "<" + p(e) + t.map.call(e.attributes, function (e) {
                        return " " + e.nodeName + '="' + f(e.value).replace('"', "&quot;") + '"'
                    }).join("") + ">"
                }

                function c(e) {
                    o += "</" + p(e) + ">"
                }

                function u(e) {
                    ("start" === e.event ? l : c)(e.node)
                }
                for (; e.length || n.length;) {
                    var d = a();
                    if (o += f(i.substring(s, d[0].offset)), s = d[0].offset, d === e) {
                        for (r.reverse().forEach(c); u(d.splice(0, 1)[0]), (d = a()) === e && d.length && d[0].offset === s;);
                        r.reverse().forEach(l)
                    } else "start" === d[0].event ? r.push(d[0].node) : r.pop(), u(d.splice(0, 1)[0])
                }
                return o + f(i.substr(s))
            }(i, g(a), l)), o.value = E(o.value), e.innerHTML = o.value, e.className = function (e, t, n) {
                var i = t ? s[t] : n,
                    o = [e.trim()];
                return e.match(/\bhljs\b/) || o.push("hljs"), -1 === e.indexOf(i) && o.push(i), o.join(" ").trim()
            }(e.className, c, o.language), e.result = {
                language: o.language,
                re: o.relevance
            }, o.second_best && (e.second_best = {
                language: o.second_best.language,
                re: o.second_best.relevance
            }))
        }

        function j() {
            if (!j.called) {
                j.called = !0;
                var e = document.querySelectorAll("pre code");
                t.forEach.call(e, x)
            }
        }

        function _(e) {
            return e = (e || "").toLowerCase(), i[e] || i[s[e]]
        }

        function k(e) {
            var t = _(e);
            return t && !t.disableAutodetect
        }
        return e.highlight = w, e.highlightAuto = C, e.fixMarkup = E, e.highlightBlock = x, e.configure = function (e) {
            u = h(u, e)
        }, e.initHighlighting = j, e.initHighlightingOnLoad = function () {
            addEventListener("DOMContentLoaded", j, !1), addEventListener("load", j, !1)
        }, e.registerLanguage = function (t, n) {
            var o = i[t] = n(e);
            b(o), o.rawDefinition = n.bind(null, e), o.aliases && o.aliases.forEach(function (e) {
                s[e] = t
            })
        }, e.listLanguages = function () {
            return n(i)
        }, e.getLanguage = _, e.autoDetection = k, e.inherit = h, e.IR = e.IDENT_RE = "[a-zA-Z]\\w*", e.UIR = e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", e.NR = e.NUMBER_RE = "\\b\\d+(\\.\\d+)?", e.CNR = e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = e.BINARY_NUMBER_RE = "\\b(0b[01]+)", e.RSR = e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = e.BACKSLASH_ESCAPE = {
            b: "\\\\[\\s\\S]",
            relevance: 0
        }, e.ASM = e.APOS_STRING_MODE = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE]
        }, e.QSM = e.QUOTE_STRING_MODE = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, e.PWM = e.PHRASAL_WORDS_MODE = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }, e.C = e.COMMENT = function (t, n, i) {
            var s = e.inherit({
                cN: "comment",
                b: t,
                e: n,
                c: []
            }, i || {});
            return s.c.push(e.PWM), s.c.push({
                cN: "doctag",
                b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                relevance: 0
            }), s
        }, e.CLCM = e.C_LINE_COMMENT_MODE = e.C("//", "$"), e.CBCM = e.C_BLOCK_COMMENT_MODE = e.C("/\\*", "\\*/"), e.HCM = e.HASH_COMMENT_MODE = e.C("#", "$"), e.NM = e.NUMBER_MODE = {
            cN: "number",
            b: e.NR,
            relevance: 0
        }, e.CNM = e.C_NUMBER_MODE = {
            cN: "number",
            b: e.CNR,
            relevance: 0
        }, e.BNM = e.BINARY_NUMBER_MODE = {
            cN: "number",
            b: e.BNR,
            relevance: 0
        }, e.CSSNM = e.CSS_NUMBER_MODE = {
            cN: "number",
            b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }, e.RM = e.REGEXP_MODE = {
            cN: "regexp",
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE, {
                b: /\[/,
                e: /\]/,
                relevance: 0,
                c: [e.BE]
            }]
        }, e.TM = e.TITLE_MODE = {
            cN: "title",
            b: e.IR,
            relevance: 0
        }, e.UTM = e.UNDERSCORE_TITLE_MODE = {
            cN: "title",
            b: e.UIR,
            relevance: 0
        }, e.METHOD_GUARD = {
            b: "\\.\\s*" + e.UIR,
            relevance: 0
        }, e
    }), hljs.registerLanguage("javascript", function (e) {
        var t = "[A-Za-z$_][0-9A-Za-z$_]*",
            n = {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            i = {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)n?"
                }, {
                    b: "\\b(0[oO][0-7]+)n?"
                }, {
                    b: e.CNR + "n?"
                }],
                relevance: 0
            },
            s = {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}",
                k: n,
                c: []
            },
            o = {
                b: "html`",
                e: "",
                starts: {
                    e: "`",
                    rE: !1,
                    c: [e.BE, s],
                    sL: "xml"
                }
            },
            r = {
                b: "css`",
                e: "",
                starts: {
                    e: "`",
                    rE: !1,
                    c: [e.BE, s],
                    sL: "css"
                }
            },
            a = {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, s]
            };
        s.c = [e.ASM, e.QSM, o, r, a, i, e.RM];
        var l = s.c.concat([e.CBCM, e.CLCM]);
        return {
            aliases: ["js", "jsx"],
            k: n,
            c: [{
                cN: "meta",
                relevance: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, {
                cN: "meta",
                b: /^#!/,
                e: /$/
            }, e.ASM, e.QSM, o, r, a, e.CLCM, e.CBCM, i, {
                b: /[{,\n]\s*/,
                relevance: 0,
                c: [{
                    b: t + "\\s*:",
                    rB: !0,
                    relevance: 0,
                    c: [{
                        cN: "attr",
                        b: t,
                        relevance: 0
                    }]
                }]
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    cN: "function",
                    b: "(\\(.*?\\)|" + t + ")\\s*=>",
                    rB: !0,
                    e: "\\s*=>",
                    c: [{
                        cN: "params",
                        v: [{
                            b: t
                        }, {
                            b: /\(\s*\)/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            eB: !0,
                            eE: !0,
                            k: n,
                            c: l
                        }]
                    }]
                }, {
                    cN: "",
                    b: /\s/,
                    e: /\s*/,
                    skip: !0
                }, {
                    b: /</,
                    e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                    sL: "xml",
                    c: [{
                        b: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                        skip: !0
                    }, {
                        b: /<[A-Za-z0-9\\._:-]+/,
                        e: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                        skip: !0,
                        c: [{
                            b: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                            skip: !0
                        }, "self"]
                    }]
                }],
                relevance: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: t
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: l
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, e.METHOD_GUARD, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }, {
                bK: "constructor get set",
                e: /\{/,
                eE: !0
            }],
            i: /#(?!!)/
        }
    }), hljs.registerLanguage("css", function (e) {
        var t = {
            b: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
            rB: !0,
            e: ";",
            eW: !0,
            c: [{
                cN: "attribute",
                b: /\S/,
                e: ":",
                eE: !0,
                starts: {
                    eW: !0,
                    eE: !0,
                    c: [{
                        b: /[\w-]+\(/,
                        rB: !0,
                        c: [{
                            cN: "built_in",
                            b: /[\w-]+/
                        }, {
                            b: /\(/,
                            e: /\)/,
                            c: [e.ASM, e.QSM]
                        }]
                    }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                        cN: "number",
                        b: "#[0-9A-Fa-f]+"
                    }, {
                        cN: "meta",
                        b: "!important"
                    }]
                }
            }]
        };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "selector-id",
                b: /#[A-Za-z0-9_-]+/
            }, {
                cN: "selector-class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "selector-attr",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "selector-pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                b: "@",
                e: "[{;]",
                i: /:/,
                c: [{
                    cN: "keyword",
                    b: /\w+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    relevance: 0,
                    c: [e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "selector-tag",
                b: "[a-zA-Z-][a-zA-Z0-9_-]*",
                relevance: 0
            }, {
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, t]
            }]
        }
    }), hljs.registerLanguage("scss", function (e) {
        var t = {
            cN: "variable",
            b: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
        },
            n = {
                cN: "number",
                b: "#[0-9A-Fa-f]+"
            };
        return e.CSSNM, e.QSM, e.ASM, e.CBCM, {
            cI: !0,
            i: "[=/|']",
            c: [e.CLCM, e.CBCM, {
                cN: "selector-id",
                b: "\\#[A-Za-z0-9_-]+",
                relevance: 0
            }, {
                cN: "selector-class",
                b: "\\.[A-Za-z0-9_-]+",
                relevance: 0
            }, {
                cN: "selector-attr",
                b: "\\[",
                e: "\\]",
                i: "$"
            }, {
                cN: "selector-tag",
                b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
                relevance: 0
            }, {
                b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
            }, {
                b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
            }, t, {
                cN: "attribute",
                b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
                i: "[^\\s]"
            }, {
                b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
            }, {
                b: ":",
                e: ";",
                c: [t, n, e.CSSNM, e.QSM, e.ASM, {
                    cN: "meta",
                    b: "!important"
                }]
            }, {
                b: "@",
                e: "[{;]",
                k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
                c: [t, e.QSM, e.ASM, n, e.CSSNM, {
                    b: "\\s[A-Za-z0-9_.-]+",
                    relevance: 0
                }]
            }]
        }
    }), hljs.registerLanguage("bash", function (e) {
        var t = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)}/
            }]
        },
            n = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            };
        return {
            aliases: ["sh", "zsh"],
            l: /\b-?[a-z\._]+\b/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                _: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "meta",
                b: /^#![^\n]+sh\s*$/,
                relevance: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                relevance: 0
            }, e.HCM, n, {
                cN: "",
                b: /\\"/
            }, {
                cN: "string",
                b: /'/,
                e: /'/
            }, t]
        }
    }), hljs.registerLanguage("shell", function (e) {
        return {
            aliases: ["console"],
            c: [{
                cN: "meta",
                b: "^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",
                starts: {
                    e: "$",
                    sL: "bash"
                }
            }]
        }
    }), hljs.registerLanguage("xml", function (e) {
        var t = {
            eW: !0,
            i: /</,
            relevance: 0,
            c: [{
                cN: "attr",
                b: "[A-Za-z0-9\\._:-]+",
                relevance: 0
            }, {
                b: /=\s*/,
                relevance: 0,
                c: [{
                    cN: "string",
                    endsParent: !0,
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }, {
                        b: /[^\s"'=<>`]+/
                    }]
                }]
            }]
        };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
            cI: !0,
            c: [{
                cN: "meta",
                b: "<!DOCTYPE",
                e: ">",
                relevance: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("\x3c!--", "--\x3e", {
                relevance: 10
            }), {
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                relevance: 10
            }, {
                cN: "meta",
                b: /<\?xml/,
                e: /\?>/,
                relevance: 10
            }, {
                b: /<\?(php)?/,
                e: /\?>/,
                sL: "php",
                c: [{
                    b: "/\\*",
                    e: "\\*/",
                    skip: !0
                }, {
                    b: 'b"',
                    e: '"',
                    skip: !0
                }, {
                    b: "b'",
                    e: "'",
                    skip: !0
                }, e.inherit(e.ASM, {
                    i: null,
                    cN: null,
                    c: null,
                    skip: !0
                }), e.inherit(e.QSM, {
                    i: null,
                    cN: null,
                    c: null,
                    skip: !0
                })]
            }, {
                cN: "tag",
                b: "<style(?=\\s|>)",
                e: ">",
                k: {
                    name: "style"
                },
                c: [t],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: ["css", "xml"]
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>)",
                e: ">",
                k: {
                    name: "script"
                },
                c: [t],
                starts: {
                    e: "<\/script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "name",
                    b: /[^\/><\s]+/,
                    relevance: 0
                }, t]
            }]
        }
    }), Util.hasClass = function (e, t) {
        return e.classList.contains(t)
    }, Util.addClass = function (e, t) {
        var n = t.split(" ");
        e.classList.add(n[0]), n.length > 1 && Util.addClass(e, n.slice(1).join(" "))
    }, Util.removeClass = function (e, t) {
        var n = t.split(" ");
        e.classList.remove(n[0]), n.length > 1 && Util.removeClass(e, n.slice(1).join(" "))
    }, Util.toggleClass = function (e, t, n) {
        n ? Util.addClass(e, t) : Util.removeClass(e, t)
    }, Util.setAttributes = function (e, t) {
        for (var n in t) e.setAttribute(n, t[n])
    }, Util.getChildrenByClassName = function (e, t) {
        for (var n = e.children, i = [], s = 0; s < n.length; s++) Util.hasClass(n[s], t) && i.push(n[s]);
        return i
    }, Util.is = function (e, t) {
        if (t.nodeType) return e === t;
        for (var n = "string" == typeof t ? document.querySelectorAll(t) : t, i = n.length; i--;)
            if (n[i] === e) return !0;
        return !1
    }, Util.setHeight = function (e, t, n, i, s, o) {
        var r = t - e,
            a = null,
            l = function (c) {
                a || (a = c);
                var u = c - a;
                u > i && (u = i);
                var d = parseInt(u / i * r + e);
                o && (d = Math[o](u, e, t - e, i)), n.style.height = d + "px", u < i ? window.requestAnimationFrame(l) : s && s()
            };
        n.style.height = e + "px", window.requestAnimationFrame(l)
    }, Util.scrollTo = function (e, t, n, i) {
        var s = i || window,
            o = s.scrollTop || document.documentElement.scrollTop,
            r = null;
        i || (o = window.scrollY || document.documentElement.scrollTop);
        var a = function (i) {
            r || (r = i);
            var l = i - r;
            l > t && (l = t);
            var c = Math.easeInOutQuad(l, o, e - o, t);
            s.scrollTo(0, c), l < t ? window.requestAnimationFrame(a) : n && n()
        };
        window.requestAnimationFrame(a)
    }, Util.moveFocus = function (e) {
        e || (e = document.getElementsByTagName("body")[0]), e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus())
    }, Util.getIndexInArray = function (e, t) {
        return Array.prototype.indexOf.call(e, t)
    }, Util.cssSupports = function (e, t) {
        return CSS.supports(e, t)
    }, Util.extend = function () {
        var e = {},
            t = !1,
            n = 0,
            i = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
        for (var s = function (n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t && "[object Object]" === Object.prototype.toString.call(n[i]) ? e[i] = extend(!0, e[i], n[i]) : e[i] = n[i])
        }; n < i; n++) {
            s(arguments[n])
        }
        return e
    }, Util.osHasReducedMotion = function () {
        if (!window.matchMedia) return !1;
        var e = window.matchMedia("(prefers-reduced-motion: reduce)");
        return !!e && e.matches
    }, Math.easeInOutQuad = function (e, t, n, i) {
        return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
    }, Math.easeInQuart = function (e, t, n, i) {
        return n * (e /= i) * e * e * e + t
    }, Math.easeOutQuart = function (e, t, n, i) {
        return e /= i, -n * (--e * e * e * e - 1) + t
    }, Math.easeInOutQuart = function (e, t, n, i) {
        return (e /= i / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
    }, Math.easeOutElastic = function (e, t, n, i) {
        var s = 1.70158,
            o = .7 * i,
            r = n;
        if (0 == e) return t;
        if (1 == (e /= i)) return t + n;
        if (o || (o = .3 * i), r < Math.abs(n)) {
            r = n;
            s = o / 4
        } else s = o / (2 * Math.PI) * Math.asin(n / r);
        return r * Math.pow(2, -10 * e) * Math.sin((e * i - s) * (2 * Math.PI) / o) + n + t
    },
    function () {
        var e = document.getElementsByClassName("js-tab-focus"),
            t = !1,
            n = !1,
            i = !1;

        function s() {
            e.length > 0 && (r(!1), window.addEventListener("keydown", o)), window.removeEventListener("mousedown", s), n = !1, i = !0
        }

        function o(e) {
            9 === e.keyCode && (r(!0), window.removeEventListener("keydown", o), window.addEventListener("mousedown", s), n = !0)
        }

        function r(t) {
            for (var n = t ? "" : "none", i = 0; i < e.length; i++) e[i].style.setProperty("outline", n)
        }

        function a() {
            t ? i && r(n) : (t = e.length > 0, window.addEventListener("mousedown", s))
        }
        a(), window.addEventListener("initFocusTabs", a)
    }(),
    function () {
        var e = document.getElementsByClassName("js-ld-switch");
        if (!(e.length < 1)) {
            var t = localStorage.getItem("ldSwitch");
            if (null !== t) {
                var n = 0;
                "system" == t ? n = 2 : "dark" == t && (n = 1);
                var i = e[0].querySelector("select");
                if (!i) return;
                i.selectedIndex = n
            }
        }
    }(),
    function () {
        var e = document.getElementsByClassName("js-main-header");
        if (e.length > 0) {
            var t = e[0].getElementsByClassName("js-main-header__trigger");
            t.length > 0 && t[0].addEventListener("click", function (t) {
                t.preventDefault(), Util.toggleClass(e[0], "main-header--expanded", !Util.hasClass(e[0], "main-header--expanded"))
            });
            var n = e[0].getElementsByClassName("js-main-header__overlay");
            n.length > 0 && n[0].addEventListener("click", function (t) {
                t.preventDefault(), Util.removeClass(e[0], "main-header--expanded")
            }), a() && r();
            var i = !1,
                s = !1;

            function o() {
                r(), a() ? window.addEventListener("scroll", l) : window.removeEventListener("scroll", l)
            }

            function r() {
                Util.toggleClass(e[0], "main-header--on-scroll", window.scrollY > 2)
            }

            function a() {
                return 1 == getCssVar(e[0], "--main-header-on-scroll")
            }

            function l() {
                s || window.requestAnimationFrame(function () {
                    r(), s = !1
                })
            }
            o(), window.addEventListener("resize", function () {
                clearTimeout(i), i = setTimeout(o, 500)
            })
        }
    }(),
    function () {
        var e = document.getElementsByClassName("js-free-components");
        e.length > 0 && e[0].addEventListener("change", function (e) {
            const t = new URLSearchParams(window.location.search);
            e.target.checked ? t.set("free", "true") : t.delete("free"), window.location.search = t
        })
    }(),
    function () {
        var e = function (e) {
            var n;
            this.element = e, this.delta = [!1, !1], this.dragging = !1, this.intervalId = !1, (n = this).element.addEventListener("mousedown", t.bind(n)), n.element.addEventListener("touchstart", t.bind(n), {
                passive: !0
            })
        };

        function t(e) {
            switch (e.type) {
                case "mousedown":
                case "touchstart":
                    ! function (e, n) {
                        e.dragging = !0,
                            function (e) {
                                e.element.addEventListener("mousemove", t.bind(e)), e.element.addEventListener("touchmove", t.bind(e), {
                                    passive: !0
                                }), e.element.addEventListener("mouseup", t.bind(e)), e.element.addEventListener("mouseleave", t.bind(e)), e.element.addEventListener("touchend", t.bind(e))
                            }(e), e.delta = [parseInt(i(n).clientX), parseInt(i(n).clientY)], s(e, "dragStart", e.delta, n.target)
                    }(this, e);
                    break;
                case "mousemove":
                case "touchmove":
                    ! function (e, t) {
                        if (!e.dragging) return;
                        window.requestAnimationFrame ? e.intervalId = window.requestAnimationFrame(n.bind(e, t)) : e.intervalId = setTimeout(function () {
                            n.bind(e, t)
                        }, 250)
                    }(this, e);
                    break;
                case "mouseup":
                case "mouseleave":
                case "touchend":
                    ! function (e, n) {
                        ! function (e) {
                            e.intervalId && (window.requestAnimationFrame ? window.cancelAnimationFrame(e.intervalId) : clearInterval(e.intervalId), e.intervalId = !1), e.element.removeEventListener("mousemove", t.bind(e)), e.element.removeEventListener("touchmove", t.bind(e)), e.element.removeEventListener("mouseup", t.bind(e)), e.element.removeEventListener("mouseleave", t.bind(e)), e.element.removeEventListener("touchend", t.bind(e))
                        }(e);
                        var r = parseInt(i(n).clientX),
                            a = parseInt(i(n).clientY);
                        if (e.delta && (e.delta[0] || 0 === e.delta[0])) {
                            var l = o(r - e.delta[0]);
                            Math.abs(r - e.delta[0]) > 30 && s(e, l < 0 ? "swipeLeft" : "swipeRight", [r, a]), e.delta[0] = !1
                        }
                        if (e.delta && (e.delta[1] || 0 === e.delta[1])) {
                            var c = o(a - e.delta[1]);
                            Math.abs(a - e.delta[1]) > 30 && s(e, c < 0 ? "swipeUp" : "swipeDown", [r, a]), e.delta[1] = !1
                        }
                        s(e, "dragEnd", [r, a]), e.dragging = !1
                    }(this, e)
            }
        }

        function n(e) {
            s(this, "dragging", [parseInt(i(e).clientX), parseInt(i(e).clientY)])
        }

        function i(e) {
            return e.changedTouches ? e.changedTouches[0] : e
        }

        function s(e, t, n, i) {
            var s = !1;
            i && (s = i);
            var o = new CustomEvent(t, {
                detail: {
                    x: n[0],
                    y: n[1],
                    origin: s
                }
            });
            e.element.dispatchEvent(o)
        }

        function o(e) {
            return Math.sign ? Math.sign(e) : (e > 0) - (e < 0) || +e
        }
        window.SwipeContent = e;
        var r = document.getElementsByClassName("js-swipe-content");
        if (r.length > 0)
            for (var a = 0; a < r.length; a++) ! function (t) {
                new e(r[t])
            }(a)
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.select = this.element.getElementsByTagName("select")[0], this.optGroups = this.select.getElementsByTagName("optgroup"), this.options = this.select.getElementsByTagName("option"), this.selectedOption = function (e) {
                var t = "";
                if ("selectedIndex" in e.select) {
                    var n = e.select.selectedIndex;
                    n < 0 && (n = 0), t = e.options[n].text
                } else t = e.select.querySelector("option[selected]").text;
                return t
            }(this), this.selectId = this.select.getAttribute("id"), this.trigger = !1, this.dropdown = !1, this.customOptions = !1, this.arrowIcon = this.element.getElementsByTagName("svg"), this.label = document.querySelector('[for="' + this.selectId + '"]'), this.labelContent = "", this.label && (this.labelContent = ", " + this.label.textContent), this.optionIndex = 0,
                function (e) {
                    e.element.insertAdjacentHTML("beforeend", function (e) {
                        var t = e.element.getAttribute("data-trigger-class") ? " " + e.element.getAttribute("data-trigger-class") : "",
                            n = e.select.selectedIndex;
                        n < 0 && (n = 0);
                        var i = e.options[n].innerHTML + e.labelContent,
                            s = '<button type="button" class="js-select__button select__button' + t + '" aria-label="' + i + '" aria-expanded="false" aria-controls="' + e.selectId + '-dropdown"><span aria-hidden="true" class="js-select__label select__label">' + e.selectedOption + "</span>";
                        if (e.arrowIcon.length > 0 && e.arrowIcon[0].outerHTML) {
                            var o = e.arrowIcon[0].cloneNode(!0);
                            Util.removeClass(o, "select__icon hide"), s += o.outerHTML
                        }
                        return s + "</button>"
                    }(e) + s(e)), e.dropdown = e.element.getElementsByClassName("js-select__dropdown")[0], e.trigger = e.element.getElementsByClassName("js-select__button")[0], e.customOptions = e.dropdown.getElementsByClassName("js-select__item"), Util.addClass(e.select, "is-hidden"), e.arrowIcon.length > 0 && (e.arrowIcon[0].style.display = "none");
                    e.minWidth = parseInt(getComputedStyle(e.dropdown).getPropertyValue("min-width")), n(e)
                }(this),
                function (e) {
                    (function (e) {
                        e.dropdown.addEventListener("click", function (t) {
                            var n = t.target.closest(".js-select__item");
                            n && function (e, t) {
                                if (t.hasAttribute("aria-selected") && "true" == t.getAttribute("aria-selected")) e.trigger.setAttribute("aria-expanded", "false");
                                else {
                                    var n = e.dropdown.querySelector('[aria-selected="true"]');
                                    n && n.setAttribute("aria-selected", "false"), t.setAttribute("aria-selected", "true"), e.trigger.getElementsByClassName("js-select__label")[0].textContent = t.textContent, e.trigger.setAttribute("aria-expanded", "false"),
                                        function (e, t) {
                                            e.select.selectedIndex = t, e.select.dispatchEvent(new CustomEvent("change", {
                                                bubbles: !0
                                            })), e.select.dispatchEvent(new CustomEvent("input", {
                                                bubbles: !0
                                            }))
                                        }(e, t.getAttribute("data-index"))
                                }
                                e.trigger.focus()
                            }(e, n)
                        })
                    })(e), e.trigger.addEventListener("click", function () {
                        t(e, !1)
                    }), e.label && e.label.addEventListener("click", function () {
                        Util.moveFocus(e.trigger)
                    });
                    e.dropdown.addEventListener("keydown", function (t) {
                        t.keyCode && 38 == t.keyCode || t.key && "arrowup" == t.key.toLowerCase() ? i(e, "prev", t) : (t.keyCode && 40 == t.keyCode || t.key && "arrowdown" == t.key.toLowerCase()) && i(e, "next", t)
                    }), e.element.addEventListener("select-updated", function (t) {
                        ! function (e) {
                            var t = e.dropdown.querySelector('[aria-selected="true"]');
                            t && t.setAttribute("aria-selected", "false");
                            var n = e.dropdown.querySelector('.js-select__item[data-value="' + e.select.value + '"]');
                            n || (n = e.dropdown.querySelector(".js-select__item"));
                            n.setAttribute("aria-selected", "true"), e.trigger.getElementsByClassName("js-select__label")[0].textContent = n.textContent, e.trigger.setAttribute("aria-expanded", "false")
                        }(e)
                    }), e.select.addEventListener("select-options-updated", function (t) {
                        ! function (e) {
                            e.optionIndex = 0;
                            var t = "<ul" + s(e).split("<ul")[1];
                            e.element.querySelector(".js-select__list").remove(), e.element.querySelector(".js-select__dropdown").insertAdjacentHTML("beforeend", t)
                        }(e)
                    })
                }(this)
        };

        function t(e, t) {
            var i;
            if (i = t || ("true" == e.trigger.getAttribute("aria-expanded") ? "false" : "true"), e.trigger.setAttribute("aria-expanded", i), "true" == i) {
                var s = function (e) {
                    var t = e.dropdown.querySelector('[aria-selected="true"]');
                    return t || e.dropdown.getElementsByClassName("js-select__item")[0]
                }(e);
                Util.moveFocus(s), e.dropdown.addEventListener("transitionend", function t() {
                    Util.moveFocus(s), e.dropdown.removeEventListener("transitionend", t)
                }), n(e)
            }
        }

        function n(e) {
            Util.removeClass(e.dropdown, "select__dropdown--right select__dropdown--up");
            var t = e.trigger.getBoundingClientRect();
            Util.toggleClass(e.dropdown, "select__dropdown--right", document.documentElement.clientWidth - 5 < t.left + e.dropdown.offsetWidth);
            var n = window.innerHeight - t.bottom - 5 < t.top;
            Util.toggleClass(e.dropdown, "select__dropdown--up", n);
            var i = n ? t.top - 20 : window.innerHeight - t.bottom - 20;
            e.minWidth < t.width ? e.dropdown.setAttribute("style", "max-height: " + i + "px; min-width: " + t.width + "px;") : e.dropdown.setAttribute("style", "max-height: " + i + "px;")
        }

        function i(e, t, n) {
            n.preventDefault();
            var i = Util.getIndexInArray(e.customOptions, document.activeElement);
            (i = "next" == t ? i + 1 : i - 1) < 0 && (i = e.customOptions.length - 1), i >= e.customOptions.length && (i = 0), Util.moveFocus(e.customOptions[i])
        }

        function s(e) {
            var t = '<div class="js-select__dropdown select__dropdown" aria-describedby="' + e.selectId + '-description" id="' + e.selectId + '-dropdown">';
            if (t += function (e) {
                return e.label ? '<p class="sr-only" id="' + e.selectId + '-description">' + e.label.textContent + "</p>" : ""
            }(e), e.optGroups.length > 0)
                for (var n = 0; n < e.optGroups.length; n++) {
                    var i = e.optGroups[n].getElementsByTagName("option");
                    t = t + '<ul class="select__list" role="listbox">' + ('<li><span class="select__item select__item--optgroup">' + e.optGroups[n].getAttribute("label") + "</span></li>") + o(e, i) + "</ul>"
                } else t = t + '<ul class="select__list js-select__list" role="listbox">' + o(e, e.options) + "</ul>";
            return t
        }

        function o(e, t) {
            for (var n = "", i = 0; i < t.length; i++) {
                var s = t[i].hasAttribute("selected") ? ' aria-selected="true"' : ' aria-selected="false"',
                    o = t[i].hasAttribute("disabled") ? " disabled" : "";
                n = n + '<li><button type="button" class="reset js-select__item select__item select__item--option" role="option" data-value="' + t[i].value + '" ' + s + o + ' data-index="' + e.optionIndex + '">' + t[i].text + "</button></li>", e.optionIndex = e.optionIndex + 1
            }
            return n
        }
        window.CustomSelect = e;
        var r = document.getElementsByClassName("js-select");
        if (r.length > 0) {
            for (var a = [], l = 0; l < r.length; l++) ! function (t) {
                a.push(new e(r[t]))
            }(l);
            window.addEventListener("keyup", function (e) {
                (e.keyCode && 27 == e.keyCode || e.key && "escape" == e.key.toLowerCase()) && a.forEach(function (e) {
                    var n;
                    n = e, document.activeElement.closest(".js-select") && n.trigger.focus(), t(e, "false")
                })
            }), window.addEventListener("click", function (e) {
                a.forEach(function (n) {
                    var i, s;
                    i = n, s = e.target, i.element.contains(s) || t(i, "false")
                })
            }), window.addEventListener("iframeClicked", function (e) {
                a.forEach(function (e) {
                    t(e, "false")
                })
            })
        }
    }(),
    function () {
        var e = function (e) {
            var n;
            this.element = e, this.elementId = this.element.getAttribute("id"), this.trigger = document.querySelectorAll('[aria-controls="' + this.elementId + '"]'), this.selectedTrigger = !1, this.popoverVisibleClass = "popover--is-visible", this.selectedTriggerClass = "popover-control--active", this.popoverIsOpen = !1, this.firstFocusable = !1, this.lastFocusable = !1, this.positionTarget = !!(n = this.element.getAttribute("data-position-target")) && document.querySelector(n), this.viewportGap = parseInt(getComputedStyle(this.element).getPropertyValue("--popover-viewport-gap")) || 20,
                function (e) {
                    for (var t = 0; t < e.trigger.length; t++) Util.setAttributes(e.trigger[t], {
                        "aria-expanded": "false",
                        "aria-haspopup": "true"
                    })
                }(this),
                function (e) {
                    for (var n = 0; n < e.trigger.length; n++) ! function (n) {
                        e.trigger[n].addEventListener("click", function (i) {
                            i.preventDefault(), Util.hasClass(e.element, e.popoverVisibleClass) && e.selectedTrigger != e.trigger[n] && t(e, !1, !1), e.selectedTrigger = e.trigger[n], t(e, !Util.hasClass(e.element, e.popoverVisibleClass), !0)
                        })
                    }(n);
                    e.element.addEventListener("keydown", function (t) {
                        (t.keyCode && 9 == t.keyCode || t.key && "Tab" == t.key) && function (e, t) {
                            e.firstFocusable == document.activeElement && t.shiftKey && (t.preventDefault(), e.lastFocusable.focus());
                            e.lastFocusable != document.activeElement || t.shiftKey || (t.preventDefault(), e.firstFocusable.focus())
                        }(e, t)
                    }), e.element.addEventListener("openPopover", function (n) {
                        n.detail && (e.selectedTrigger = n.detail, function (e) {
                            var t = e.selectedTrigger.getAttribute("data-prj-id");
                            if (!t) return;
                            e.element.setAttribute("data-prj-id", t), e.element.setAttribute("data-prj-label", e.selectedTrigger.getAttribute("data-prj-label"))
                        }(e)), "project-menu" == e.elementId && function () {
                            var e = document.querySelector('.js-ds-btn-menu-actions[aria-expanded="true"]');
                            if (!e) return;
                            e.removeAttribute("aria-expanded"), Util.removeClass(e, "popover-control--active")
                        }(), t(e, !0)
                    }), e.element.addEventListener("closePopover", function (n) {
                        t(e, !1, n.detail)
                    })
                }(this)
        };

        function t(e, t, s) {
            Util.toggleClass(e.element, e.popoverVisibleClass, t), e.popoverIsOpen = t, t ? (e.selectedTrigger.setAttribute("aria-expanded", "true"), function (e) {
                var t = e.element.querySelectorAll(o);
                (function (e, t) {
                    for (var n = 0; n < t.length; n++)
                        if (i(t[n])) {
                            e.firstFocusable = t[n];
                            break
                        }
                })(e, t),
                    function (e, t) {
                        for (var n = t.length - 1; n >= 0; n--)
                            if (i(t[n])) {
                                e.lastFocusable = t[n];
                                break
                            }
                    }(e, t)
            }(e), n(e), e.element.addEventListener("transitionend", function (t) {
                n(e)
            }, {
                once: !0
            }), function (e) {
                ! function (e) {
                    e.element.style.maxHeight = "", e.element.style.top = "", e.element.style.bottom = "", e.element.style.left = "", e.element.style.right = ""
                }(e);
                var t = e.positionTarget ? e.positionTarget.getBoundingClientRect() : e.selectedTrigger.getBoundingClientRect(),
                    n = window.innerHeight - t.bottom < t.top,
                    i = t.left,
                    s = window.innerWidth - t.right,
                    o = window.innerWidth < t.left + e.element.offsetWidth,
                    r = o ? "right: " + s + "px;" : "left: " + i + "px;",
                    a = n ? "bottom: " + (window.innerHeight - t.top) + "px;" : "top: " + t.bottom + "px;";
                o && s + e.element.offsetWidth > window.innerWidth && (r = "left: " + parseInt((window.innerWidth - e.element.offsetWidth) / 2) + "px;");
                var l = n ? t.top - e.viewportGap : window.innerHeight - t.bottom - e.viewportGap,
                    c = e.element.getAttribute("style");
                c || (c = "");
                e.element.setAttribute("style", c + r + a + "max-height:" + Math.floor(l) + "px;")
            }(e), Util.addClass(e.selectedTrigger, e.selectedTriggerClass)) : e.selectedTrigger && (e.selectedTrigger.setAttribute("aria-expanded", "false"), s && Util.moveFocus(e.selectedTrigger), Util.removeClass(e.selectedTrigger, e.selectedTriggerClass), e.selectedTrigger = !1)
        }

        function n(e) {
            e.firstFocusable ? e.firstFocusable.focus() : Util.moveFocus(e.element)
        }

        function i(e) {
            return e.offsetWidth || e.offsetHeight || e.getClientRects().length
        }
        e.prototype.togglePopover = function (e, n) {
            t(this, e, n)
        }, e.prototype.checkPopoverClick = function (e) {
            ! function (e, n) {
                if (!e.popoverIsOpen) return;
                if (n.closest(".js-ds-btn-menu-actions")) return;
                e.element.contains(n) || n.closest('[aria-controls="' + e.elementId + '"]') || t(e, !1)
            }(this, e)
        }, e.prototype.checkPopoverFocus = function () {
            ! function (e) {
                if (!e.popoverIsOpen) return;
                var n = document.activeElement.closest(".js-popover");
                t(e, !1, n)
            }(this)
        }, window.Popover = e;
        var s = document.getElementsByClassName("js-popover"),
            o = '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
        if (s.length > 0) {
            for (var r = [], a = [], l = 0; l < s.length; l++) ! function (t) {
                r.push(new e(s[t]));
                var n = s[t].getAttribute("data-scrollable-element");
                n && !a.includes(n) && a.push(n)
            }(l);
            window.addEventListener("keyup", function (e) {
                (e.keyCode && 27 == e.keyCode || e.key && "escape" == e.key.toLowerCase()) && r.forEach(function (e) {
                    e.checkPopoverFocus()
                })
            }), window.addEventListener("click", function (e) {
                r.forEach(function (t) {
                    t.checkPopoverClick(e.target)
                })
            }), window.addEventListener("resize", function (e) {
                r.forEach(function (e) {
                    e.togglePopover(!1, !1)
                })
            }), window.addEventListener("scroll", function (e) {
                r.forEach(function (e) {
                    e.popoverIsOpen && e.togglePopover(!1, !1)
                })
            });
            for (var c = 0; c < a.length; c++) {
                var u = document.querySelector(a[c]);
                u && u.addEventListener("scroll", function (e) {
                    r.forEach(function (e) {
                        e.popoverIsOpen && e.togglePopover(!1, !1)
                    })
                })
            }
        }
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute("id") + '"]'), this.firstFocusable = null, this.lastFocusable = null, this.selectedTrigger = null, this.showClass = "sidebar--is-visible", this.staticClass = "sidebar--static", this.customStaticClass = "", this.readyClass = "sidebar--loaded", this.contentReadyClass = "sidebar-loaded:show", this.layout = !1, this.preventScrollEl = function (e) {
                var t = !1,
                    n = e.element.getAttribute("data-sidebar-prevent-scroll");
                n && (t = document.querySelector(n));
                return t
            }(this),
                function (e) {
                    var t = e.element.getAttribute("data-static-class");
                    t && (e.customStaticClass = " " + t)
                }(this),
                function (e) {
                    if (function (e) {
                        var t = getComputedStyle(e.element, ":before").getPropertyValue("content");
                        t && "" != t && "none" != t && (s(e), e.element.addEventListener("update-sidebar", function (t) {
                            s(e)
                        }));
                        var n = document.getElementsByClassName(e.contentReadyClass);
                        n.length > 0 && Util.removeClass(n[0], e.contentReadyClass), Util.addClass(e.element, e.readyClass)
                    }(e), e.triggers)
                        for (var n = 0; n < e.triggers.length; n++) e.triggers[n].addEventListener("click", function (n) {
                            n.preventDefault(), t(e, n.target)
                        });
                    e.element.addEventListener("openSidebar", function (n) {
                        t(e, n.detail)
                    })
                }(this)
        };

        function t(e, t) {
            if (Util.hasClass(e.element, e.showClass)) return e.selectedTrigger = t, void n(e);
            e.selectedTrigger = t,
                function (e) {
                    Util.addClass(e.element, e.showClass),
                        function (e) {
                            var t = e.element.querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
                            (function (e, t) {
                                for (var n = 0; n < t.length; n++)
                                    if (t[n].offsetWidth || t[n].offsetHeight || t[n].getClientRects().length) return e.firstFocusable = t[n], !0
                            })(e, t),
                                function (e, t) {
                                    for (var n = t.length - 1; n >= 0; n--)
                                        if (t[n].offsetWidth || t[n].offsetHeight || t[n].getClientRects().length) return e.lastFocusable = t[n], !0
                                }(e, t)
                        }(e), Util.moveFocus(e.element), e.preventScrollEl && (e.preventScrollEl.style.overflow = "hidden")
                }(e),
                function (e) {
                    e.element.addEventListener("keydown", i.bind(e)), e.element.addEventListener("click", i.bind(e))
                }(e)
        }

        function n(e) {
            Util.removeClass(e.element, e.showClass), e.firstFocusable = null, e.lastFocusable = null, e.selectedTrigger && e.selectedTrigger.focus(), e.element.removeAttribute("tabindex"),
                function (e) {
                    e.element.removeEventListener("keydown", i.bind(e)), e.element.removeEventListener("click", i.bind(e))
                }(e), e.preventScrollEl && (e.preventScrollEl.style.overflow = "")
        }

        function i(e) {
            switch (e.type) {
                case "click":
                    ! function (e, t) {
                        if (!t.target.closest(".js-sidebar__close-btn") && !Util.hasClass(t.target, "js-sidebar")) return;
                        t.preventDefault(), n(e)
                    }(this, e);
                case "keydown":
                    ! function (e, t) {
                        t.keyCode && 27 == t.keyCode || t.key && "Escape" == t.key ? n(e) : (t.keyCode && 9 == t.keyCode || t.key && "Tab" == t.key) && function (e, t) {
                            e.firstFocusable == document.activeElement && t.shiftKey && (t.preventDefault(), e.lastFocusable.focus());
                            e.lastFocusable != document.activeElement || t.shiftKey || (t.preventDefault(), e.firstFocusable.focus())
                        }(e, t)
                    }(this, e)
            }
        }

        function s(e) {
            var t = getComputedStyle(e.element, ":before").getPropertyValue("content").replace(/\'|"/g, "");
            t != e.layout && (e.layout = t, "static" != t && Util.addClass(e.element, "is-hidden"), Util.toggleClass(e.element, e.staticClass + e.customStaticClass, "static" == t), "static" != t && setTimeout(function () {
                Util.removeClass(e.element, "is-hidden")
            }), "static" == t ? e.element.removeAttribute("role", "alertdialog") : e.element.setAttribute("role", "alertdialog"), "static" == t && Util.hasClass(e.element, e.showClass) && n(e))
        }
        window.Sidebar = e;
        var o = document.getElementsByClassName("js-sidebar");
        if (o.length > 0) {
            for (var r = 0; r < o.length; r++) ! function (t) {
                new e(o[t])
            }(r);
            var a = new CustomEvent("update-sidebar");

            function l() {
                for (var e = 0; e < o.length; e++) ! function (e) {
                    o[e].dispatchEvent(a)
                }(e)
            }
            window.addEventListener("resize", function (e) {
                window.requestAnimationFrame ? window.requestAnimationFrame(l) : setTimeout(function () {
                    l()
                }, 250)
            }), window.requestAnimationFrame ? window.requestAnimationFrame(l) : l()
        }
    }(),
    function () {
        var e = document.getElementsByClassName("js-sidenav");
        if (e.length > 0)
            for (var t = 0; t < e.length; t++) ! function (t) {
                e[t].addEventListener("click", function (e) {
                    var t = e.target.closest(".js-sidenav__sublist-control");
                    if (t) {
                        var n = t.parentElement,
                            i = Util.hasClass(n, "sidenav__item--expanded");
                        t.setAttribute("aria-expanded", !i), Util.toggleClass(n, "sidenav__item--expanded", !i)
                    }
                })
            }(t)
    }(),
    function () {
        var e = function (e) {
            var n, i, s;
            this.element = e, this.tooltip = !1, this.tooltipIntervalId = !1, this.tooltipContent = this.element.getAttribute("title"), this.tooltipPosition = this.element.getAttribute("data-tooltip-position") ? this.element.getAttribute("data-tooltip-position") : "top", this.tooltipClasses = !!this.element.getAttribute("data-tooltip-class") && this.element.getAttribute("data-tooltip-class"), this.tooltipId = "js-tooltip-element", this.tooltipDescription = !this.element.getAttribute("data-tooltip-describedby") || "false" != this.element.getAttribute("data-tooltip-describedby"), this.tooltipDelay = this.element.getAttribute("data-tooltip-delay"), this.tooltipDelay || (this.tooltipDelay = 300), this.tooltipDelta = parseInt(this.element.getAttribute("data-tooltip-gap")), isNaN(this.tooltipDelta) && (this.tooltipDelta = 10), this.tooltipTriggerHover = !1, this.tooltipSticky = this.tooltipClasses && this.tooltipClasses.indexOf("tooltip--sticky") > -1, this.tooltipHover = !1, this.tooltipSticky && (this.tooltipHoverInterval = !1), this.tooltipTriangleVar = "--tooltip-triangle-translate", (i = (n = this).element.getAttribute("data-tooltip-title")) && (n.tooltipContent = i), (s = this).element.removeAttribute("title"), s.element.setAttribute("tabindex", "0"), s.element.addEventListener("mouseenter", t.bind(s)), s.element.addEventListener("focus", t.bind(s))
        };

        function t(e) {
            switch (e.type) {
                case "mouseenter":
                case "focus":
                    ! function (e, s) {
                        if (e.tooltipIntervalId) return;
                        e.tooltipTriggerHover = !0, e.element.addEventListener("mouseleave", t.bind(e)), e.element.addEventListener("blur", t.bind(e)), e.element.addEventListener("newContent", t.bind(e)), e.tooltipIntervalId = setTimeout(function () {
                            ! function (e) {
                                e.tooltip = document.getElementById(e.tooltipId), e.tooltip || (e.tooltip = document.createElement("div"), document.body.appendChild(e.tooltip));
                                e.tooltip.removeAttribute("data-reset"), Util.setAttributes(e.tooltip, {
                                    id: e.tooltipId,
                                    class: "tooltip tooltip--is-hidden js-tooltip",
                                    role: "tooltip"
                                }), e.tooltip.innerHTML = e.tooltipContent, e.tooltipDescription && e.element.setAttribute("aria-describedby", e.tooltipId);
                                e.tooltipClasses && Util.addClass(e.tooltip, e.tooltipClasses);
                                e.tooltipSticky && Util.addClass(e.tooltip, "tooltip--sticky");
                                if (n(e), Util.removeClass(e.tooltip, "tooltip--is-hidden"), !e.tooltipSticky) return;
                                e.tooltip.addEventListener("mouseenter", function t() {
                                    e.tooltipHover = !0, e.tooltipHoverInterval && (clearInterval(e.tooltipHoverInterval), e.tooltipHoverInterval = !1), e.tooltip.removeEventListener("mouseenter", t),
                                        function (e) {
                                            e.tooltip.addEventListener("mouseleave", function t() {
                                                e.tooltipHover = !1, e.tooltip.removeEventListener("mouseleave", t), i(e)
                                            })
                                        }(e)
                                })
                            }(e)
                        }, e.tooltipDelay)
                    }(this);
                    break;
                case "mouseleave":
                case "blur":
                    ! function (e) {
                        if (e.tooltipTriggerHover = !1, e.tooltipSticky) {
                            if (e.tooltipHover) return;
                            if (e.tooltipHoverInterval) return;
                            e.tooltipHoverInterval = setTimeout(function () {
                                i(e), e.tooltipHoverInterval = !1
                            }, 300)
                        } else i(e)
                    }(this);
                    break;
                case "newContent":
                    ! function (e, t) {
                        e.tooltip && e.tooltipTriggerHover && t.detail && (e.tooltip.innerHTML = t.detail, e.tooltip.setAttribute("data-reset", "on"), n(e))
                    }(this, e)
            }
        }

        function n(e) {
            var t = [e.tooltip.offsetHeight, e.tooltip.offsetWidth],
                n = e.element.getBoundingClientRect(),
                i = [],
                s = window.scrollY || window.pageYOffset;
            i.top = [n.top - t[0] - e.tooltipDelta + s, n.right / 2 + n.left / 2 - t[1] / 2], i.bottom = [n.bottom + e.tooltipDelta + s, n.right / 2 + n.left / 2 - t[1] / 2], i.left = [n.top / 2 + n.bottom / 2 - t[0] / 2 + s, n.left - t[1] - e.tooltipDelta], i.right = [n.top / 2 + n.bottom / 2 - t[0] / 2 + s, n.right + e.tooltipDelta];
            var o = e.tooltipPosition;
            if ("top" == o && i.top[0] < s ? o = "bottom" : "bottom" == o && i.bottom[0] + e.tooltipDelta + t[0] > s + window.innerHeight ? o = "top" : "left" == o && i.left[1] < 0 ? o = "right" : "right" == o && i.right[1] + t[1] > window.innerWidth && (o = "left"), e.tooltip.style.setProperty(e.tooltipTriangleVar, "0px"), "top" == o || "bottom" == o) {
                i[o][1] < 0 && (i[o][1] = 5, e.tooltip.style.setProperty(e.tooltipTriangleVar, n.left + .5 * n.width - .5 * t[1] - 5 + "px")), i[o][1] + t[1] > window.innerWidth && (i[o][1] = window.innerWidth - t[1] - 5, e.tooltip.style.setProperty(e.tooltipTriangleVar, .5 * t[1] - (window.innerWidth - n.right) - .5 * n.width + 5 + "px"))
            }
            e.tooltip.style.top = i[o][0] + "px", e.tooltip.style.left = i[o][1] + "px", Util.addClass(e.tooltip, "tooltip--" + o)
        }

        function i(e) {
            e.tooltipHover || e.tooltipTriggerHover || (clearInterval(e.tooltipIntervalId), e.tooltipHoverInterval && (clearInterval(e.tooltipHoverInterval), e.tooltipHoverInterval = !1), e.tooltipIntervalId = !1, e.tooltip && (function (e) {
                e.tooltipContent != e.tooltip.innerHTML && "on" != e.tooltip.getAttribute("data-reset") || (Util.addClass(e.tooltip, "tooltip--is-hidden"), e.tooltip.removeAttribute("data-reset"));
                e.tooltipDescription && e.element.removeAttribute("aria-describedby")
            }(e), function (e) {
                e.element.removeEventListener("mouseleave", t.bind(e)), e.element.removeEventListener("blur", t.bind(e))
            }(e)))
        }
        window.Tooltip = e;
        var s = document.getElementsByClassName("js-tooltip-trigger");
        if (s.length > 0)
            for (var o = 0; o < s.length; o++) ! function (t) {
                new e(s[t])
            }(o)
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute("id") + '"]'), this.firstFocusable = null, this.lastFocusable = null, this.moveFocusEl = null, this.modalFocus = this.element.getAttribute("data-modal-first-focus") ? this.element.querySelector(this.element.getAttribute("data-modal-first-focus")) : null, this.selectedTrigger = null, this.preventScrollEl = this.getPreventScrollEl(), this.showClass = "modal--is-visible", this.initModal()
        };

        function t(e) {
            return e.offsetWidth || e.offsetHeight || e.getClientRects().length
        }
        e.prototype.getPreventScrollEl = function () {
            var e = !1,
                t = this.element.getAttribute("data-modal-prevent-scroll");
            return t && (e = document.querySelector(t)), e
        }, e.prototype.initModal = function () {
            var e = this;
            if (this.triggers)
                for (var t = 0; t < this.triggers.length; t++) this.triggers[t].addEventListener("click", function (t) {
                    t.preventDefault(), Util.hasClass(e.element, e.showClass) ? e.closeModal() : (e.selectedTrigger = t.currentTarget, e.showModal(), e.initModalEvents())
                });
            this.element.addEventListener("openModal", function (t) {
                t.detail && (e.selectedTrigger = t.detail), e.showModal(), e.initModalEvents()
            }), this.element.addEventListener("closeModal", function (t) {
                t.detail && (e.selectedTrigger = t.detail), e.closeModal()
            }), Util.hasClass(this.element, this.showClass) && this.initModalEvents()
        }, e.prototype.showModal = function () {
            var e = this;
            Util.addClass(this.element, this.showClass), this.getFocusableElements(), this.moveFocusEl && (this.moveFocusEl.focus(), this.element.addEventListener("transitionend", function t(n) {
                e.moveFocusEl && e.moveFocusEl.focus(), e.element.removeEventListener("transitionend", t)
            })), this.emitModalEvents("modalIsOpen"), this.preventScrollEl && (this.preventScrollEl.style.overflow = "hidden")
        }, e.prototype.closeModal = function () {
            Util.hasClass(this.element, this.showClass) && (Util.removeClass(this.element, this.showClass), this.firstFocusable = null, this.lastFocusable = null, this.moveFocusEl = null, this.selectedTrigger && this.selectedTrigger.focus(), this.cancelModalEvents(), this.emitModalEvents("modalIsClose"), this.preventScrollEl && (this.preventScrollEl.style.overflow = ""))
        }, e.prototype.initModalEvents = function () {
            this.element.addEventListener("keydown", this), this.element.addEventListener("click", this)
        }, e.prototype.cancelModalEvents = function () {
            this.element.removeEventListener("keydown", this), this.element.removeEventListener("click", this)
        }, e.prototype.handleEvent = function (e) {
            switch (e.type) {
                case "click":
                    this.initClick(e);
                case "keydown":
                    this.initKeyDown(e)
            }
        }, e.prototype.initKeyDown = function (e) {
            e.keyCode && 9 == e.keyCode || e.key && "Tab" == e.key ? this.trapFocus(e) : (e.keyCode && 13 == e.keyCode || e.key && "Enter" == e.key) && e.target.closest(".js-modal__close") && (e.preventDefault(), this.closeModal())
        }, e.prototype.initClick = function (e) {
            (e.target.closest(".js-modal__close") || Util.hasClass(e.target, "js-modal")) && (e.preventDefault(), this.closeModal())
        }, e.prototype.trapFocus = function (e) {
            this.firstFocusable == document.activeElement && e.shiftKey && (e.preventDefault(), this.lastFocusable.focus()), this.lastFocusable != document.activeElement || e.shiftKey || (e.preventDefault(), this.firstFocusable.focus())
        }, e.prototype.getFocusableElements = function () {
            var e = this.element.querySelectorAll(i);
            this.getFirstVisible(e), this.getLastVisible(e), this.getFirstFocusable()
        }, e.prototype.getFirstVisible = function (e) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) {
                    this.firstFocusable = e[n];
                    break
                }
        }, e.prototype.getLastVisible = function (e) {
            for (var n = e.length - 1; n >= 0; n--)
                if (t(e[n])) {
                    this.lastFocusable = e[n];
                    break
                }
        }, e.prototype.getFirstFocusable = function () {
            if (this.modalFocus && Element.prototype.matches)
                if (this.modalFocus.matches(i)) this.moveFocusEl = this.modalFocus;
                else {
                    this.moveFocusEl = !1;
                    for (var e = this.modalFocus.querySelectorAll(i), n = 0; n < e.length; n++)
                        if (t(e[n])) {
                            this.moveFocusEl = e[n];
                            break
                        } this.moveFocusEl || (this.moveFocusEl = this.firstFocusable)
                }
            else this.moveFocusEl = this.firstFocusable
        }, e.prototype.emitModalEvents = function (e) {
            var t = new CustomEvent(e, {
                detail: this.selectedTrigger
            });
            this.element.dispatchEvent(t)
        }, window.Modal = e;
        var n = document.getElementsByClassName("js-modal"),
            i = '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
        if (n.length > 0) {
            for (var s = [], o = 0; o < n.length; o++) ! function (t) {
                s.push(new e(n[t]))
            }(o);
            window.addEventListener("keydown", function (e) {
                if (e.keyCode && 27 == e.keyCode || e.key && "escape" == e.key.toLowerCase())
                    for (var t = 0; t < s.length; t++) ! function (e) {
                        s[e].closeModal()
                    }(t)
            })
        }
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.password = this.element.getElementsByClassName("js-password__input")[0], this.visibilityBtn = this.element.getElementsByClassName("js-password__btn")[0], this.visibilityClass = "password--text-is-visible", this.initPassword()
        };
        e.prototype.initPassword = function () {
            var e = this;
            this.visibilityBtn.addEventListener("click", function (t) {
                document.activeElement !== e.password && (t.preventDefault(), e.togglePasswordVisibility())
            })
        }, e.prototype.togglePasswordVisibility = function () {
            var e = !Util.hasClass(this.element, this.visibilityClass);
            Util.toggleClass(this.element, this.visibilityClass, e), e ? this.password.setAttribute("type", "text") : this.password.setAttribute("type", "password")
        };
        var t = document.getElementsByClassName("js-password");
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) ! function (n) {
                new e(t[n])
            }(n)
    }(),
    function () {
        var e = document.getElementsByClassName("js-notice");
        if (e.length > 0)
            for (var t = 0; t < e.length; t++) ! function (t) {
                var n;
                (n = e[t]).addEventListener("click", function (e) {
                    e.target.closest(".js-notice__hide-control") && (e.preventDefault(), Util.addClass(n, "notice--hide"))
                })
            }(t)
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.search = this.element.getElementsByClassName("js-list-filter__search"), this.searchCancel = this.element.getElementsByClassName("js-list-filter__search-cancel-btn"), this.list = this.element.getElementsByClassName("js-list-filter__list")[0], this.items = this.list.getElementsByClassName("js-list-filter__item"), this.noResults = this.element.getElementsByClassName("js-list-filter__no-results-msg"), this.searchTags = [], this.resultsNr = this.element.getElementsByClassName("js-list-filter__results-nr"), this.visibleItemsNr = 0,
                function (e) {
                    for (var n = 0; n < e.items.length; n++) {
                        var s = "",
                            o = e.items[n].getElementsByClassName("js-list-filter__label");
                        o.length > 0 && (s = o[0].textContent);
                        var r = e.items[n].getAttribute("data-filter-tags");
                        r && (s = s + " " + r), e.searchTags.push(s)
                    }
                    t(e, e.search[0].value.trim()), e.search[0].addEventListener("input", function () {
                        t(e, e.search[0].value.trim())
                    }), e.searchCancel.length > 0 && e.searchCancel[0].addEventListener("click", function () {
                        e.search[0].value = "", e.search[0].dispatchEvent(new Event("input"))
                    });
                    e.list.addEventListener("click", function (t) {
                        var n = t.target.closest(".js-list-filter__action-btn--remove");
                        n && (t.preventDefault(), function (e, t) {
                            var n = t.closest(".js-list-filter__item");
                            if (!n) return;
                            var s = Util.getIndexInArray(e.items, n);
                            n.remove(), e.searchTags.splice(s, 1), e.visibleItemsNr = e.visibleItemsNr - 1, i(e)
                        }(e, n))
                    })
                }(this)
        };

        function t(e, t) {
            for (var s = [], o = t.toLowerCase().split(" "), r = 0; r < e.items.length; r++) "" == t ? s.push(!1) : s.push(n(e, r, o));
            ! function (e, t) {
                e.visibleItemsNr = 0;
                for (var n = 0; n < t.length; n++) t[n] || (e.visibleItemsNr = e.visibleItemsNr + 1), Util.toggleClass(e.items[n], "is-hidden", t[n]);
                e.noResults.length > 0 && Util.toggleClass(e.noResults[0], "is-hidden", e.visibleItemsNr > 0);
                i(e)
            }(e, s)
        }

        function n(e, t, n) {
            for (var i = !0, s = 0; s < n.length; s++)
                if ("" != n[s] && " " != n[s] && e.searchTags[t].toLowerCase().indexOf(n[s]) < 0) {
                    i = !1;
                    break
                } return !i
        }

        function i(e) {
            e.resultsNr.length > 0 && (e.resultsNr[0].innerHTML = e.visibleItemsNr)
        }
        var s = document.getElementsByClassName("js-list-filter");
        if (s.length > 0)
            for (var o = 0; o < s.length; o++) ! function (t) {
                new e(s[t])
            }(o)
    }(),
    function () {
        var e = function (e) {
            var s;
            this.element = e, this.list = this.element.getElementsByClassName("js-toc__list")[0], this.anchors = this.list.querySelectorAll('a[href^="#"]'), this.sections = function (e) {
                for (var t = [], n = 0; n < e.anchors.length; n++) {
                    var i = document.getElementById(e.anchors[n].getAttribute("href").replace("#", ""));
                    i && t.push(i)
                }
                return t
            }(this), this.controller = this.element.getElementsByClassName("js-toc__control"), this.controllerLabel = this.element.getElementsByClassName("js-toc__control-label"), this.content = !((s = this).sections.length < 1) && s.sections[0].closest(".js-toc-content"), this.clickScrolling = !1, this.intervalID = !1, this.staticLayoutClass = "toc--static", this.contentStaticLayoutClass = "toc-content--toc-static", this.expandedClass = "toc--expanded", this.isStatic = Util.hasClass(this.element, this.staticLayoutClass), this.layout = "static",
                function (e) {
                    if (n(e), e.sections.length > 0) {
                        e.list.addEventListener("click", function (n) {
                            var s = n.target.closest('a[href^="#"]');
                            s && (e.clickScrolling = !0, t(e, s), i(e, !0))
                        });
                        var s = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
                        if (s)
                            for (var o = new IntersectionObserver(function (n, i) {
                                n.forEach(function (n) {
                                    e.clickScrolling || function (e) {
                                        e.intervalID && clearInterval(e.intervalID);
                                        e.intervalID = setTimeout(function () {
                                            for (var n = window.innerHeight / 2, i = -1, s = 0; s < e.sections.length; s++) {
                                                var o = e.sections[s].getBoundingClientRect().top;
                                                o < n && (i = s)
                                            }
                                            i > -1 && t(e, e.anchors[i]), e.intervalID = !1
                                        }, 100)
                                    }(e)
                                })
                            }, {
                                threshold: [0, .1],
                                rootMargin: "0px 0px -70% 0px"
                            }), r = 0; r < e.sections.length; r++) o.observe(e.sections[r]);
                        e.element.addEventListener("toc-scroll", function (t) {
                            e.clickScrolling = !1
                        })
                    }
                    e.element.addEventListener("toc-resize", function (t) {
                        n(e)
                    }),
                        function (e) {
                            if (e.controller.length < 1) return;
                            e.controller[0].addEventListener("click", function (t) {
                                var n = Util.hasClass(e.element, e.expandedClass);
                                i(e, n)
                            }), e.element.addEventListener("keydown", function (t) {
                                "static" != e.layout && (t.keyCode && 27 == t.keyCode || t.key && "escape" == t.key.toLowerCase()) && (i(e, !0), e.controller[0].focus())
                            })
                        }(e)
                }(this)
        };

        function t(e, t) {
            if (t) {
                for (var n = 0; n < e.anchors.length; n++) Util.removeClass(e.anchors[n], "toc__link--selected");
                Util.addClass(t, "toc__link--selected")
            }
        }

        function n(e) {
            e.isStatic || (e.layout = getComputedStyle(e.element, ":before").getPropertyValue("content").replace(/\'|"/g, ""), Util.toggleClass(e.element, e.staticLayoutClass, "static" == e.layout), e.content && Util.toggleClass(e.content, e.contentStaticLayoutClass, "static" == e.layout))
        }

        function i(e, t) {
            e.controller.length < 1 || (Util.toggleClass(e.element, e.expandedClass, !t), t ? e.controller[0].removeAttribute("aria-expanded") : e.controller[0].setAttribute("aria-expanded", "true"), !t && e.anchors.length > 0 && e.anchors[0].focus())
        }
        var s = document.getElementsByClassName("js-toc"),
            o = [];
        if (s.length > 0) {
            for (var r = 0; r < s.length; r++) ! function (t) {
                o.push(new e(s[t]))
            }(r);
            var a = !1,
                l = new CustomEvent("toc-scroll"),
                c = new CustomEvent("toc-resize");

            function u() {
                for (var e = 0; e < o.length; e++) ! function (e) {
                    o[e].element.dispatchEvent(l)
                }(e)
            }

            function d() {
                for (var e = 0; e < o.length; e++) ! function (e) {
                    o[e].element.dispatchEvent(c)
                }(e)
            }
            window.addEventListener("scroll", function () {
                clearTimeout(a), a = setTimeout(u, 100)
            }), window.addEventListener("resize", function () {
                clearTimeout(!1), a = setTimeout(d, 100)
            })
        }
    }(),
    function () {
        var e = document.getElementsByClassName("reveal-fx"),
            t = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
        if (e.length > 0) {
            if (Util.osHasReducedMotion() || !t) return void
                function () {
                    for (; e[0];) {
                        var t = e[0].getAttribute("class").split(" ").filter(function (e) {
                            return 0 !== e.lastIndexOf("reveal-fx--", 0)
                        });
                        e[0].setAttribute("class", t.join(" ").trim()), Util.removeClass(e[0], "reveal-fx")
                    }
                }();
            if (h(e[0])) return void
                function () {
                    for (var t = 0; t < e.length; t++) Util.addClass(e[t], "reveal-fx--is-visible")
                }();
            var n = 120,
                i = window.innerHeight,
                s = !1,
                o = [],
                r = function () {
                    for (var t = [], n = 0; n < e.length; n++) t.push(e[n].getAttribute("data-reveal-fx-delay") ? parseInt(e[n].getAttribute("data-reveal-fx-delay")) : 0);
                    return t
                }(),
                a = function () {
                    for (var t = [], i = 0; i < e.length; i++) t.push(e[i].getAttribute("data-reveal-fx-delta") ? parseInt(e[i].getAttribute("data-reveal-fx-delta")) : n);
                    return t
                }();
            window.addEventListener("load", f), window.addEventListener("resize", u), window.addEventListener("restartAll", function () {
                if (Util.osHasReducedMotion() || !t || h(e[0])) return;
                e.length <= o.length && (window.addEventListener("load", f), window.addEventListener("resize", u));
                for (var n = 0; n < l.length; n++) l[n] && l[n].disconnect();
                l = [];
                for (var n = 0; n < e.length; n++) Util.removeClass(e[n], "reveal-fx--is-visible");
                o = [], c()
            });
            var l = [];

            function c() {
                for (var t = 0; t < e.length; t++) l[t] = new IntersectionObserver(function (e, t) {
                    e[0].isIntersecting && (m(e[0].target), t.unobserve(e[0].target))
                }, {
                    rootMargin: "0px 0px -" + a[t] + "px 0px"
                }), l[t].observe(e[t])
            }

            function u() {
                s || (s = !0, window.requestAnimationFrame ? window.requestAnimationFrame(d) : setTimeout(function () {
                    d()
                }, 250))
            }

            function d() {
                i = window.innerHeight, f()
            }

            function f() {
                for (var t = 0; t < e.length; t++) ! function (t) {
                    -1 == o.indexOf(t) && g(e[t], t) && (p(t), o.push(t))
                }(t);
                v(), s = !1
            }

            function p(t) {
                r[t] && 0 != r[t] ? setTimeout(function () {
                    Util.addClass(e[t], "reveal-fx--is-visible")
                }, r[t]) : Util.addClass(e[t], "reveal-fx--is-visible")
            }

            function m(t) {
                var n = Util.getIndexInArray(e, t); - 1 == o.indexOf(n) && (p(n), o.push(n), v(), s = !1)
            }

            function h(e) {
                return !("reveal-fx" == window.getComputedStyle(e, "::before").getPropertyValue("content").replace(/'|"/g, ""))
            }

            function g(e, t) {
                return function (e) {
                    return e.getBoundingClientRect().top
                }(e) <= i - a[t]
            }

            function v() {
                e.length > o.length || (window.removeEventListener("load", f), window.removeEventListener("resize", u))
            }
            c()
        }
    }(),
    function () {
        var e = function (s) {
            var u;
            "CSS" in window && CSS.supports("color", "var(--color-var)") && (this.options = Util.extend(e.defaults, s), this.element = this.options.element, this.input = this.element.getElementsByClassName("js-autocomplete__input")[0], this.results = this.element.getElementsByClassName("js-autocomplete__results")[0], this.resultsList = this.results.getElementsByClassName("js-autocomplete__list")[0], this.ariaResult = this.element.getElementsByClassName("js-autocomplete__aria-results"), this.resultClassName = this.element.getElementsByClassName("js-autocomplete__item").length > 0 ? "js-autocomplete__item" : "js-autocomplete__result", this.inputVal = "", this.typeId = !1, this.searching = !1, this.searchingClass = this.element.getAttribute("data-autocomplete-searching-class") || "autocomplete--searching", this.dropdownActiveClass = this.element.getAttribute("data-autocomplete-dropdown-visible-class") || this.element.getAttribute("data-dropdown-active-class"), this.truncateDropdown = !(!this.element.getAttribute("data-autocomplete-dropdown-truncate") || "on" != this.element.getAttribute("data-autocomplete-dropdown-truncate")), function (e) {
                Util.setAttributes(e.input, {
                    role: "combobox",
                    "aria-autocomplete": "list"
                });
                var t = e.resultsList.getAttribute("id");
                t && e.input.setAttribute("aria-owns", t), e.resultsList.setAttribute("role", "list")
            }(u = this), function (e) {
                e.templateItems = e.resultsList.querySelectorAll("." + e.resultClassName + "[data-autocomplete-template]"), e.templateItems.length < 1 && (e.templateItems = e.resultsList.querySelectorAll("." + e.resultClassName)), e.templates = [];
                for (var t = 0; t < e.templateItems.length; t++) e.templates[t] = e.templateItems[t].getAttribute("data-autocomplete-template")
            }(u), function (e) {
                e.input.addEventListener("keyup", function (t) {
                    ! function (e, t) {
                        "arrowdown" == t.key.toLowerCase() || "40" == t.keyCode ? function (e) {
                            if (Util.hasClass(e.element, e.dropdownActiveClass)) {
                                o(e);
                                var t = 0;
                                a(e.resultsItems[t]) || (t = r(e, t, !0)), l(e.resultsItems[t]).focus()
                            }
                        }(e) : n(e)
                    }(e, t)
                }), e.input.addEventListener("search", function (t) {
                    n(e)
                }), e.input.addEventListener("click", function (t) {
                    var i = !0;
                    e.options.resultsVisible && (i = !1), n(e, i)
                }), e.input.addEventListener("focus", function (t) {
                    if (e.autocompleteClosed) e.autocompleteClosed = !1;
                    else {
                        var i = !0;
                        e.options.resultsVisible && "" != e.input.value && (i = !1), n(e, i)
                    }
                }), e.input.addEventListener("filter", function (t) {
                    n(e, !0)
                }), e.input.addEventListener("blur", function (n) {
                    t(e, n)
                }), e.resultsList.addEventListener("keydown", function (t) {
                    ! function (e, t) {
                        var n = "arrowdown" == t.key.toLowerCase() || "40" == t.keyCode,
                            i = "arrowup" == t.key.toLowerCase() || "38" == t.keyCode;
                        if (n || i) {
                            t.preventDefault();
                            var s = document.activeElement.closest("." + e.resultClassName) || document.activeElement,
                                o = Util.getIndexInArray(e.resultsItems, s),
                                a = r(e, o, n);
                            l(e.resultsItems[a]).focus()
                        }
                    }(e, t)
                }), e.resultsList.addEventListener("focusout", function (n) {
                    t(e, n)
                }), window.addEventListener("keyup", function (t) {
                    t.keyCode && 27 == t.keyCode || t.key && "escape" == t.key.toLowerCase() ? i(e, !1) : (t.keyCode && 13 == t.keyCode || t.key && "enter" == t.key.toLowerCase()) && c(e, document.activeElement.closest("." + e.resultClassName), t)
                }), e.resultsList.addEventListener("click", function (t) {
                    c(e, t.target.closest("." + e.resultClassName), t)
                })
            }(u), this.autocompleteClosed = !1)
        };

        function t(e, t) {
            e.element.contains(t.relatedTarget) || i(e, !1)
        }

        function n(e, t) {
            var n = e.input.value;
            (n != e.inputVal || t) && (e.inputVal = n, e.typeId && clearInterval(e.typeId), e.inputVal.length < e.options.characters ? i(e, !1) : t ? s(e, "focus") : e.typeId = setTimeout(function () {
                s(e, "type")
            }, e.options.debounce))
        }

        function i(e, t) {
            if (t) {
                if (Util.hasClass(e.element, e.dropdownActiveClass)) return;
                Util.addClass(e.element, e.dropdownActiveClass), e.input.setAttribute("aria-expanded", !0),
                    function (e) {
                        if (!e.truncateDropdown) return;
                        e.resultsList.style.maxHeight = "";
                        var t = window.innerHeight - e.input.getBoundingClientRect().bottom - 10;
                        parseInt(getComputedStyle(e.resultsList).maxHeight) > t ? e.resultsList.style.maxHeight = t + "px" : e.resultsList.style.maxHeight = ""
                    }(e)
            } else {
                if (!Util.hasClass(e.element, e.dropdownActiveClass)) return;
                e.resultsList.contains(document.activeElement) && (e.autocompleteClosed = !0, e.input.focus()), Util.removeClass(e.element, e.dropdownActiveClass), e.input.removeAttribute("aria-expanded"), o(e)
            }
        }

        function s(e, t) {
            e.searching || (e.searching = !0, Util.addClass(e.element, e.searchingClass), e.options.searchData(e.inputVal, function (t, n) {
                ! function (e, t, n) {
                    for (var i = "", s = 0; s < t.length; s++) i += u(e, t[s]);
                    e.options.populate ? e.resultsList.innerHTML = i : n && n(i)
                }(e, t, n), Util.removeClass(e.element, e.searchingClass), i(e, !0),
                    function (e) {
                        if (e.resultsItems = e.resultsList.querySelectorAll("." + e.resultClassName + '[tabindex="-1"]'), 0 == e.ariaResult.length) return;
                        e.ariaResult[0].textContent = e.resultsItems.length
                    }(e), e.searching = !1
            }, t))
        }

        function o(e) {
            e.typeId && clearInterval(e.typeId), e.typeId = !1
        }

        function r(e, t, n) {
            var i = n ? t + 1 : t - 1;
            return i < 0 && (i = e.resultsItems.length - 1), i >= e.resultsItems.length && (i = 0), a(e.resultsItems[i]) ? i : r(e, i, n)
        }

        function a(e) {
            var t = e.getAttribute("role");
            return !t || "presentation" != t
        }

        function l(e) {
            var t = e,
                n = t.querySelectorAll("button:not([disabled]), [href]");
            return n.length > 0 && (t = n[0]), t
        }

        function c(e, t, n) {
            t && (e.options.onClick ? e.options.onClick(t, e, n, function () {
                i(e, !1)
            }) : (e.input.value = function (e) {
                var t = e.querySelector("[data-autocomplete-label]");
                return t ? t.textContent : e.textContent
            }(t), i(e, !1)), e.inputVal = e.input.value)
        }

        function u(e, t) {
            var n = function (e, t) {
                var n = !1;
                if (1 != e.templateItems.length && t.template) {
                    for (var i = 0; i < e.templateItems.length; i++) t.template == e.templates[i] && (n = e.templateItems[i]);
                    n || (n = e.templateItems[0])
                } else n = e.templateItems[0];
                return n.cloneNode(!0)
            }(e, t);
            for (var i in Util.removeClass(n, "is-hidden"), n.setAttribute("tabindex", "-1"), t) t.hasOwnProperty(i) && ("label" == i ? d(n, t[i]) : "class" == i ? f(n, t[i]) : "url" == i ? p(n, t[i]) : "src" == i ? m(n, t[i], "src") : "src1" == i ? m(n, t[i], "src1") : "src2" == i ? m(n, t[i], "src2") : h(n, i, t[i]));
            return n.outerHTML
        }

        function d(e, t) {
            var n = e.querySelector("[data-autocomplete-label]");
            n ? n.textContent = t : e.textContent = t
        }

        function f(e, t) {
            Util.addClass(e, t)
        }

        function p(e, t) {
            var n = e.querySelector("[data-autocomplete-url]");
            n && n.setAttribute("href", t)
        }

        function m(e, t, n) {
            var i = e.querySelector("[data-autocomplete-" + n + "]");
            i && i.setAttribute("src", t)
        }

        function h(e, t, n) {
            var i = e.querySelector("[data-autocomplete-" + t + "]");
            i && (i.hasAttribute("data-autocomplete-html") ? i.innerHTML = n : i.textContent = n)
        }
        e.defaults = {
            element: "",
            debounce: 200,
            characters: 2,
            populate: !0,
            resultsVisible: !1,
            searchData: !1,
            onClick: !1
        }, window.Autocomplete = e
    }(),
    function () {
        var e = function (l) {
            this.options = Util.extend(e.defaults, l), this.element = this.options.element, this.listWrapper = this.element.getElementsByClassName("carousel__wrapper")[0], this.list = this.element.getElementsByClassName("carousel__list")[0], this.items = this.element.getElementsByClassName("carousel__item"), this.initItems = [], this.itemsNb = this.items.length, this.visibItemsNb = 1, this.itemsWidth = 1, this.itemOriginalWidth = !1, this.selectedItem = 0, this.translateContainer = 0, this.containerWidth = 0, this.ariaLive = !1, this.controls = this.element.getElementsByClassName("js-carousel__control"), this.animating = !1, this.autoplayId = !1, this.autoplayPaused = !1, this.dragStart = !1, this.resizeId = !1, this.cloneList = [], this.itemAutoSize = !1, this.totTranslate = 0, this.options.nav && (this.options.loop = !1), this.counter = this.element.getElementsByClassName("js-carousel__counter"), this.counterTor = this.element.getElementsByClassName("js-carousel__counter-tot"), t(this), n(this, !0), c(this, this.visibItemsNb), i(this), f(this),
                function (e) {
                    if (!e.options.ariaLive) return;
                    var t = document.createElement("div");
                    Util.setAttributes(t, {
                        class: "sr-only js-carousel__aria-live",
                        "aria-live": "polite",
                        "aria-atomic": "true"
                    }), e.element.appendChild(t), e.ariaLive = t
                }(this),
                function (e) {
                    e.options.nav && (w(e), C(e));
                    e.controls.length > 0 && (e.controls[0].addEventListener("click", function (t) {
                        t.preventDefault(), s(e), h(e)
                    }), e.controls[1].addEventListener("click", function (t) {
                        t.preventDefault(), o(e), h(e)
                    }), b(e), k(e));
                    e.options.autoplay && (p(e), e.options.autoplayOnHover || (e.element.addEventListener("mouseenter", function (t) {
                        m(e), e.autoplayPaused = !0
                    }), e.element.addEventListener("mouseleave", function (t) {
                        e.autoplayPaused = !1, p(e)
                    })), e.options.autoplayOnFocus || (e.element.addEventListener("focusin", function (t) {
                        m(e), e.autoplayPaused = !0
                    }), e.element.addEventListener("focusout", function (t) {
                        e.autoplayPaused = !1, p(e)
                    })));
                    e.options.drag && window.requestAnimationFrame && (new SwipeContent(e.element), e.element.addEventListener("dragStart", function (t) {
                        t.detail.origin && t.detail.origin.closest(".js-carousel__control") || t.detail.origin && t.detail.origin.closest(".js-carousel__navigation") || t.detail.origin && !t.detail.origin.closest(".carousel__wrapper") || (Util.addClass(e.element, "carousel--is-dragging"), m(e), e.dragStart = t.detail.x, function (e) {
                            e.element.addEventListener("dragEnd", function t(n) {
                                if (e.element.removeEventListener("dragEnd", t), Util.removeClass(e.element, "carousel--is-dragging"), n.detail.x - e.dragStart < -40) e.animating = !1, o(e);
                                else if (n.detail.x - e.dragStart > 40) e.animating = !1, s(e);
                                else {
                                    if (n.detail.x - e.dragStart == 0) return;
                                    e.animating = !0, r(e, e.translateContainer + "px", !1)
                                }
                                e.dragStart = !1
                            })
                        }(e))
                    }), e.element.addEventListener("dragging", function (t) {
                        if (e.dragStart && !(e.animating || Math.abs(t.detail.x - e.dragStart) < 10)) {
                            var n = t.detail.x - e.dragStart + e.translateContainer;
                            e.options.loop || (n = t.detail.x - e.dragStart + e.totTranslate), v(e, "translateX(" + n + "px)")
                        }
                    }));
                    window.addEventListener("resize", function (s) {
                        m(e), clearTimeout(e.resizeId), e.resizeId = setTimeout(function () {
                            ! function (e) {
                                var s = e.visibItemsNb;
                                if (function (e) {
                                    I && (e.items[0].removeAttribute("style"), e.itemAutoSize = getComputedStyle(e.items[0]).getPropertyValue("width"))
                                }(e), t(e), n(e, !1), function (e) {
                                    for (var t = 0; t < e.initItems.length; t++) e.initItems[t].style.width = e.itemsWidth + "px"
                                }(e), e.options.loop) s > e.visibItemsNb ? d(e, 0, s - e.visibItemsNb) : s < e.visibItemsNb && c(e, e.visibItemsNb, s), i(e);
                                else {
                                    var o = a(e);
                                    v(e, "translateX(" + o + ")")
                                }
                                f(e)
                            }(e),
                                function (e) {
                                    if (!e.options.nav) return;
                                    (function (e) {
                                        e.navigation && e.element.removeChild(e.navigation);
                                        e.navIdEvent && e.navigation.removeEventListener("click", e.navIdEvent)
                                    })(e), w(e), C(e)
                                }(e), b(e), x(e), p(e), j(e), _(e), k(e)
                        }, 250)
                    }), e.element.addEventListener("keydown", function (t) {
                        t.keyCode && 39 == t.keyCode || t.key && "arrowright" == t.key.toLowerCase() ? e.showNext() : (t.keyCode && 37 == t.keyCode || t.key && "arrowleft" == t.key.toLowerCase()) && e.showPrev()
                    })
                }(this),
                function (e) {
                    e.counterTor.length > 0 && (e.counterTor[0].textContent = e.itemsNb);
                    x(e)
                }(this), Util.addClass(this.element, "carousel--loaded")
        };

        function t(e) {
            var t = window.getComputedStyle(e.items[0]),
                n = window.getComputedStyle(e.listWrapper),
                i = parseFloat(t.getPropertyValue("width")),
                s = parseFloat(t.getPropertyValue("margin-right")),
                o = parseFloat(n.getPropertyValue("padding-left")),
                r = parseFloat(n.getPropertyValue("width"));
            e.itemAutoSize || (e.itemAutoSize = i), r = function (e, t) {
                var n = e.listWrapper.closest(".sr-only");
                n ? (Util.removeClass(n, "sr-only"), t = e.listWrapper.offsetWidth, Util.addClass(n, "sr-only")) : isNaN(t) && (t = function e(t, n) {
                    var i = t.parentElement;
                    if ("html" == i.tagName.toLowerCase()) return 0;
                    var s = window.getComputedStyle(i);
                    if ("none" == s.display || "hidden" == s.visibility) {
                        i.setAttribute("style", "display: block!important; visibility: visible!important;");
                        var o = n.listWrapper.offsetWidth;
                        return i.style.display = "", i.style.visibility = "", o
                    }
                    return e(i, n)
                }(e.element, e));
                return t
            }(e, r), e.itemOriginalWidth ? i = e.itemOriginalWidth : e.itemOriginalWidth = i, e.itemAutoSize && (e.itemOriginalWidth = parseInt(e.itemAutoSize), i = e.itemOriginalWidth), r < i && (e.itemOriginalWidth = r, i = e.itemOriginalWidth), e.visibItemsNb = parseInt((r - 2 * o + s) / (i + s)), e.itemsWidth = parseFloat(((r - 2 * o + s) / e.visibItemsNb - s).toFixed(1)), e.containerWidth = (e.itemsWidth + s) * e.items.length, e.translateContainer = 0 - (e.itemsWidth + s) * e.visibItemsNb, T || (e.list.style.width = (e.itemsWidth + s) * e.visibItemsNb * 3 + "px"), e.totTranslate = 0 - e.selectedItem * (e.itemsWidth + s), e.items.length <= e.visibItemsNb && (e.totTranslate = 0), j(e), _(e)
        }

        function n(e, t) {
            for (var n = 0; n < e.items.length; n++) e.items[n].style.width = e.itemsWidth + "px", t && e.initItems.push(e.items[n])
        }

        function i(e) {
            e.options.loop && (e.items.length < 3 * e.visibItemsNb ? u(e, 3 * e.visibItemsNb - e.items.length, e.items.length - 2 * e.visibItemsNb) : e.items.length > 3 * e.visibItemsNb && d(e, 3 * e.visibItemsNb, e.items.length - 3 * e.visibItemsNb), v(e, "translateX(" + e.translateContainer + "px)"))
        }

        function s(e) {
            e.animating || (e.animating = !0, e.selectedItem = g(e, e.selectedItem - e.visibItemsNb), r(e, "0", "prev"))
        }

        function o(e) {
            e.animating || (e.animating = !0, e.selectedItem = g(e, e.selectedItem + e.visibItemsNb), r(e, 2 * e.translateContainer + "px", "next"))
        }

        function r(e, t, n) {
            m(e), Util.addClass(e.list, "carousel__list--animating");
            var i = e.totTranslate;
            e.options.loop || (t = a(e, n)), setTimeout(function () {
                v(e, "translateX(" + t + ")")
            }), A ? e.list.addEventListener("transitionend", function t(i) {
                i.propertyName && "transform" != i.propertyName || (Util.removeClass(e.list, "carousel__list--animating"), e.list.removeEventListener("transitionend", t), l(e, n))
            }) : l(e, n), e.options.loop || i != e.totTranslate || e.list.dispatchEvent(new CustomEvent("transitionend")), b(e), x(e), k(e)
        }

        function a(e, t) {
            var n = e.totTranslate;
            return "next" == t ? n = e.totTranslate + e.translateContainer : "prev" == t ? n = e.totTranslate - e.translateContainer : "click" == t && (n = e.selectedDotIndex * e.translateContainer), n > 0 && (n = 0, e.selectedItem = 0), n < -e.translateContainer - e.containerWidth && (n = -e.translateContainer - e.containerWidth, e.selectedItem = e.items.length - e.visibItemsNb), e.visibItemsNb > e.items.length && (n = 0), e.totTranslate = n, n + "px"
        }

        function l(e, t) {
            t && function (e, t) {
                if (!e.options.loop) return;
                var n = "next" == t ? 0 : e.items.length - e.visibItemsNb;
                d(e, n, !1), "next" == t ? u(e, e.visibItemsNb, 0) : c(e, e.visibItemsNb), v(e, "translateX(" + e.translateContainer + "px)")
            }(e, t), e.animating = !1, p(e), f(e)
        }

        function c(e, t, n) {
            if (e.options.loop) {
                var i = document.createDocumentFragment(),
                    s = 0;
                n && (s = n);
                for (var o = s; o < t; o++) {
                    var r = g(e, e.selectedItem - o - 1),
                        a = e.initItems[r].cloneNode(!0);
                    Util.addClass(a, "js-clone"), i.insertBefore(a, i.firstChild)
                }
                e.list.insertBefore(i, e.list.firstChild), y(e)
            }
        }

        function u(e, t, n) {
            if (e.options.loop) {
                for (var i = document.createDocumentFragment(), s = n; s < t + n; s++) {
                    var o = g(e, e.selectedItem + e.visibItemsNb + s),
                        r = e.initItems[o].cloneNode(!0);
                    Util.addClass(r, "js-clone"), i.appendChild(r)
                }
                e.list.appendChild(i), y(e)
            }
        }

        function d(e, t, n) {
            if (e.options.loop) {
                n || (n = e.visibItemsNb);
                for (var i = 0; i < n; i++) e.items[t] && e.list.removeChild(e.items[t])
            }
        }

        function f(e) {
            for (var t = e.items.length > e.visibItemsNb, n = e.items.length, i = 0; i < e.items.length; i++) e.options.loop ? i < e.visibItemsNb || i >= 2 * e.visibItemsNb ? e.items[i].setAttribute("tabindex", "-1") : (i < n && (n = i), e.items[i].removeAttribute("tabindex")) : (i < e.selectedItem || i >= e.selectedItem + e.visibItemsNb) && t ? e.items[i].setAttribute("tabindex", "-1") : (i < n && (n = i), e.items[i].removeAttribute("tabindex"));
            ! function (e, t) {
                if (!e.options.overflowItems) return;
                for (var n = e.containerWidth / e.items.length, i = (window.innerWidth - n * e.visibItemsNb) / 2, s = Math.ceil(i / n), o = 0; o < s; o++) {
                    var r = t - 1 - o;
                    r >= 0 && e.items[r].removeAttribute("tabindex");
                    var a = t + e.visibItemsNb + o;
                    a < e.items.length && e.items[a].removeAttribute("tabindex")
                }
            }(e, n)
        }

        function p(e) {
            !e.options.autoplay || e.autoplayId || e.autoplayPaused || (e.autoplayId = setInterval(function () {
                o(e)
            }, e.options.autoplayInterval))
        }

        function m(e) {
            e.options.autoplay && (clearInterval(e.autoplayId), e.autoplayId = !1)
        }

        function h(e) {
            e.options.ariaLive && (e.ariaLive.innerHTML = "Item " + (e.selectedItem + 1) + " selected. " + e.visibItemsNb + " items of " + e.initItems.length + " visible")
        }

        function g(e, t) {
            return t < 0 && (t = function e(t, n) {
                t += n;
                return t > 0 ? t : e(t, n)
            }(t, e.itemsNb)), t >= e.itemsNb && (t %= e.itemsNb), t
        }

        function v(e, t) {
            e.list.style.transform = t, e.list.style.msTransform = t
        }

        function b(e) {
            if (!e.options.loop) {
                if (e.controls.length > 0 && (0 == e.totTranslate ? e.controls[0].setAttribute("disabled", !0) : e.controls[0].removeAttribute("disabled"), e.totTranslate == -e.translateContainer - e.containerWidth || e.items.length <= e.visibItemsNb ? e.controls[1].setAttribute("disabled", !0) : e.controls[1].removeAttribute("disabled")), e.options.nav) {
                    var t = e.navigation.getElementsByClassName(e.options.navigationItemClass + "--selected");
                    t.length > 0 && Util.removeClass(t[0], e.options.navigationItemClass + "--selected");
                    var n = E(e);
                    e.totTranslate == -e.translateContainer - e.containerWidth && (n = e.navDots.length - 1), Util.addClass(e.navDots[n], e.options.navigationItemClass + "--selected")
                }
                0 == e.totTranslate && (e.totTranslate == -e.translateContainer - e.containerWidth || e.items.length <= e.visibItemsNb) ? Util.addClass(e.element, "carousel--hide-controls") : Util.removeClass(e.element, "carousel--hide-controls")
            }
        }

        function y(e) {
            e.cloneList = [];
            for (var t = e.element.querySelectorAll(".js-clone"), n = 0; n < t.length; n++) Util.removeClass(t[n], "js-clone"), e.cloneList.push(t[n]);
            S(e, "carousel-updated", e.cloneList)
        }

        function w(e) {
            if (!(e.element.getElementsByClassName("js-carousel__navigation").length > 0)) {
                var t = document.createElement("ol"),
                    n = "",
                    i = e.options.navigationClass + " js-carousel__navigation";
                e.items.length <= e.visibItemsNb && (i += " hide"), t.setAttribute("class", i);
                for (var s = Math.ceil(e.items.length / e.visibItemsNb), o = E(e), r = e.options.navigationPagination ? "" : "sr-only", a = 0; a < s; a++) {
                    n = n + "<li " + (a == o ? 'class="' + e.options.navigationItemClass + " " + e.options.navigationItemClass + '--selected js-carousel__nav-item"' : 'class="' + e.options.navigationItemClass + ' js-carousel__nav-item"') + '><button class="reset js-tab-focus" style="outline: none;"><span class="' + r + '">' + (a + 1) + "</span></button></li>"
                }
                t.innerHTML = n, e.element.appendChild(t)
            }
        }

        function C(e) {
            e.navigation = e.element.getElementsByClassName("js-carousel__navigation")[0], e.navDots = e.element.getElementsByClassName("js-carousel__nav-item"), e.navIdEvent = function (e) {
                var t = e.target.closest(".js-carousel__nav-item");
                if (!t) return;
                if (this.animating) return;
                this.animating = !0;
                var n = Util.getIndexInArray(this.navDots, t);
                this.selectedDotIndex = n, this.selectedItem = n * this.visibItemsNb, r(this, !1, "click")
            }.bind(e), e.navigation.addEventListener("click", e.navIdEvent)
        }

        function E(e) {
            return Math.ceil(e.selectedItem / e.visibItemsNb)
        }

        function x(e) {
            if (0 != e.counter.length) {
                var t = e.selectedItem + e.visibItemsNb;
                t > e.items.length && (t = e.items.length), e.counter[0].textContent = t
            }
        }

        function j(e) {
            e.options.justifyContent && Util.toggleClass(e.list, "justify-center", e.items.length < e.visibItemsNb)
        }

        function _(e) {
            if (!(e.controls.length < 1) && e.options.alignControls && (e.controlsAlignEl || (e.controlsAlignEl = e.element.querySelector(e.options.alignControls)), e.controlsAlignEl))
                for (var t = e.element.offsetHeight - e.controlsAlignEl.offsetHeight, n = 0; n < e.controls.length; n++) e.controls[n].style.marginBottom = t + "px"
        }

        function k(e) {
            S(e, "carousel-active-items", {
                firstSelectedItem: e.selectedItem,
                visibleItemsNb: e.visibItemsNb
            })
        }

        function S(e, t, n) {
            var i = new CustomEvent(t, {
                detail: n
            });
            e.element.dispatchEvent(i)
        }
        e.prototype.showNext = function () {
            o(this)
        }, e.prototype.showPrev = function () {
            s(this)
        }, e.prototype.startAutoplay = function () {
            p(this)
        }, e.prototype.pauseAutoplay = function () {
            m(this)
        }, e.defaults = {
            element: "",
            autoplay: !1,
            autoplayOnHover: !1,
            autoplayOnFocus: !1,
            autoplayInterval: 5e3,
            loop: !0,
            nav: !1,
            navigationItemClass: "carousel__nav-item",
            navigationClass: "carousel__navigation",
            navigationPagination: !1,
            drag: !1,
            justifyContent: !1,
            alignControls: !1,
            overflowItems: !1
        }, window.Carousel = e;
        var N = document.getElementsByClassName("js-carousel"),
            T = Util.cssSupports("align-items", "stretch"),
            A = Util.cssSupports("transition"),
            I = "CSS" in window && CSS.supports("color", "var(--color-var)");
        if (N.length > 0)
            for (var L = 0; L < N.length; L++) ! function (t) {
                var n = !(!N[t].getAttribute("data-autoplay") || "on" != N[t].getAttribute("data-autoplay")),
                    i = N[t].getAttribute("data-autoplay-interval") ? N[t].getAttribute("data-autoplay-interval") : 5e3,
                    s = !(!N[t].getAttribute("data-autoplay-hover") || "on" != N[t].getAttribute("data-autoplay-hover")),
                    o = !(!N[t].getAttribute("data-autoplay-focus") || "on" != N[t].getAttribute("data-autoplay-focus")),
                    r = !(!N[t].getAttribute("data-drag") || "on" != N[t].getAttribute("data-drag")),
                    a = !N[t].getAttribute("data-loop") || "off" != N[t].getAttribute("data-loop"),
                    l = !(!N[t].getAttribute("data-navigation") || "on" != N[t].getAttribute("data-navigation")),
                    c = N[t].getAttribute("data-navigation-item-class") ? N[t].getAttribute("data-navigation-item-class") : "carousel__nav-item",
                    u = N[t].getAttribute("data-navigation-class") ? N[t].getAttribute("data-navigation-class") : "carousel__navigation",
                    d = !(!N[t].getAttribute("data-navigation-pagination") || "on" != N[t].getAttribute("data-navigation-pagination")),
                    f = !(!N[t].getAttribute("data-overflow-items") || "on" != N[t].getAttribute("data-overflow-items")),
                    p = !!N[t].getAttribute("data-align-controls") && N[t].getAttribute("data-align-controls"),
                    m = !(!N[t].getAttribute("data-justify-content") || "on" != N[t].getAttribute("data-justify-content"));
                new e({
                    element: N[t],
                    autoplay: n,
                    autoplayOnHover: s,
                    autoplayOnFocus: o,
                    autoplayInterval: i,
                    drag: r,
                    ariaLive: !0,
                    loop: a,
                    nav: l,
                    navigationItemClass: c,
                    navigationPagination: d,
                    navigationClass: u,
                    overflowItems: f,
                    justifyContent: m,
                    alignControls: p
                })
            }(L)
    }(),
    function () {
        var e = function (e) {
            var r;
            this.element = e, this.select = this.element.getElementsByTagName("select")[0], this.optGroups = this.select.getElementsByTagName("optgroup"), this.options = this.select.getElementsByTagName("option"), this.optionData = function (e) {
                var t = [],
                    n = e.options[0].dataset;
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t.push(i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
                return t
            }(this), this.selectId = this.select.getAttribute("id"), this.selectLabel = document.querySelector("[for=" + this.selectId + "]"), this.trigger = this.element.getElementsByClassName("js-adv-select__control")[0], this.triggerLabel = this.trigger.getElementsByClassName("js-adv-select__value")[0], this.dropdown = document.getElementById(this.trigger.getAttribute("aria-controls")),
                function (e) {
                    var i = e.dropdown.querySelector('[role="group"]'),
                        s = e.dropdown.querySelector('[role="option"]'),
                        o = !1,
                        r = !1,
                        a = !1;
                    i && (o = i.cloneNode(), r = document.getElementById(o.getAttribute("describedby"))), s && (a = s.cloneNode(!0));
                    var l = "";
                    if (e.optGroups.length > 0)
                        for (var c = 0; c < e.optGroups.length; c++) l += t(e, e.optGroups[c], o, a, r, c);
                    else
                        for (var c = 0; c < e.options.length; c++) l += n(e, e.options[c], a);
                    e.dropdown.innerHTML = l
                }(r = this), i(r), Util.addClass(r.select, "hide"), Util.removeClass(r.trigger, "hide"), Util.removeClass(r.dropdown, "hide"),
                function (e) {
                    e.selectLabel && e.selectLabel.addEventListener("click", function () {
                        e.trigger.focus()
                    });
                    e.dropdown.addEventListener("click", function (t) {
                        s(e, t.target)
                    }), e.dropdown.addEventListener("keydown", function (t) {
                        t.keyCode && 38 == t.keyCode || t.key && "arrowup" == t.key.toLowerCase() ? o(e, "prev") : t.keyCode && 40 == t.keyCode || t.key && "arrowdown" == t.key.toLowerCase() ? o(e, "next") : (t.keyCode && 13 == t.keyCode || t.key && "enter" == t.key.toLowerCase()) && s(e, document.activeElement)
                    })
                }(this)
        };

        function t(e, t, i, s, o, r) {
            if (!i || !s) return "";
            for (var a = "", l = t.getElementsByTagName("option"), c = 0; c < l.length; c++) a += n(e, l[c], s);
            if (o) {
                var u = o.cloneNode(!0),
                    d = u.getAttribute("id") + "-" + r;
                u.setAttribute("id", d), i.setAttribute("describedby", d), a = u.outerHTML.replace("{optgroup-label}", t.getAttribute("label")) + a
            }
            return i.innerHTML = a, i.outerHTML
        }

        function n(e, t, n) {
            n.setAttribute("data-value", t.value), t.selected ? (n.setAttribute("aria-selected", "true"), n.setAttribute("tabindex", "0")) : (n.removeAttribute("aria-selected"), n.removeAttribute("tabindex"));
            var i = n.outerHTML;
            i = i.replace("{option-label}", t.text);
            for (var s = 0; s < e.optionData.length; s++) i = i.replace("{" + e.optionData[s] + "}", t.getAttribute("data-" + e.optionData[s]));
            return i
        }

        function i(e) {
            e.triggerLabel.innerHTML = e.dropdown.querySelector('[aria-selected="true"]').innerHTML
        }

        function s(e, t) {
            var n = t.closest('[role="option"]');
            n && function (e, t) {
                if (t.hasAttribute("aria-selected") && "true" == t.getAttribute("aria-selected"));
                else {
                    var n = e.dropdown.querySelector('[aria-selected="true"]');
                    n && (n.removeAttribute("aria-selected"), n.removeAttribute("tabindex")), t.setAttribute("aria-selected", "true"), t.setAttribute("tabindex", "0"),
                        function (e, t) {
                            var n = e.select.querySelector('[value="' + t + '"');
                            e.select.selectedIndex = Util.getIndexInArray(e.options, n), e.select.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            }))
                        }(e, t.getAttribute("data-value")), i(e)
                }
                setTimeout(function () {
                    e.trigger.click()
                })
            }(e, n)
        }

        function o(e, t) {
            var n = e.select.querySelector('[value="' + document.activeElement.getAttribute("data-value") + '"]');
            if (n) {
                var i = Util.getIndexInArray(e.options, n);
                if (!((i = "next" == t ? i + 1 : i - 1) < 0 || i >= e.options.length)) {
                    var s = e.dropdown.querySelector('[data-value="' + e.options[i].getAttribute("value") + '"]');
                    s && Util.moveFocus(s)
                }
            }
        }
        var r = document.getElementsByClassName("js-adv-select");
        if (r.length > 0)
            for (var a = 0; a < r.length; a++) ! function (t) {
                new e(r[t])
            }(a)
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.modalContent = this.element.getElementsByClassName("js-modal-video__content")[0], this.media = this.element.getElementsByClassName("js-modal-video__media")[0], this.contentIsIframe = "iframe" == this.media.tagName.toLowerCase(), this.modalIsOpen = !1, this.initModalVideo()
        };
        e.prototype.initModalVideo = function () {
            var e = this;
            this.addLoadListener(), this.element.addEventListener("modalIsOpen", function (t) {
                e.modalIsOpen = !0, e.media.setAttribute("src", t.detail.closest("[aria-controls]").getAttribute("data-url"))
            }), this.element.addEventListener("modalIsClose", function (t) {
                e.modalIsOpen = !1, Util.addClass(e.element, "modal--is-loading"), e.media.setAttribute("src", "")
            })
        }, e.prototype.addLoadListener = function () {
            var e = this;
            this.contentIsIframe ? this.media.onload = function () {
                e.revealContent()
            } : this.media.addEventListener("loadedmetadata", function () {
                e.revealContent()
            })
        }, e.prototype.revealContent = function () {
            this.modalIsOpen && (Util.removeClass(this.element, "modal--is-loading"), this.contentIsIframe ? this.media.contentWindow.focus() : this.media.focus())
        };
        var t = document.getElementsByClassName("js-modal-video__media");
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) ! function (n) {
                new e(t[n].closest(".js-modal"))
            }(n)
    }(),
    function () {
        var e = document.getElementsByClassName("js-prj-actions-wrapper"),
            t = document.getElementById("project-menu");
        0 != e.length && t && e[0].addEventListener("click", function (e) {
            var n = e.target.closest(".js-ds-btn-menu-actions");
            n && t.dispatchEvent(new CustomEvent("openPopover", {
                detail: n
            }))
        })
    }(),
    function () {
        var e = function (o) {
            var f;
            this.options = Util.extend(e.defaults, o), this.element = this.options.element, this.list = this.element.getElementsByClassName("js-slideshow-pm__list")[0], this.items = this.list.getElementsByClassName("js-slideshow-pm__item"), this.controls = this.element.getElementsByClassName("js-slideshow-pm__control"), this.selectedSlide = 0, this.autoplayId = !1, this.autoplayPaused = !1, this.navigation = !1, this.navCurrentLabel = !1, this.ariaLive = !1, this.moveFocus = !1, this.animating = !1, this.supportAnimation = Util.cssSupports("transition"), this.itemWidth = !1, this.itemMargin = !1, this.containerWidth = !1, this.resizeId = !1, this.firstFocusable = !1, this.lastFocusable = !1,
                function (e) {
                    e.element.getElementsByClassName("slideshow-pm__item--selected").length < 1 && Util.addClass(e.items[0], "slideshow-pm__item--selected");
                    e.selectedSlide = Util.getIndexInArray(e.items, e.element.getElementsByClassName("slideshow-pm__item--selected")[0]), a(e), l(e), c(e, 0, e.selectedSlide), u(e), d || function (e) {
                        e.list.style.width = (e.items.length + 1) * (e.itemMargin + e.itemWidth) + "px";
                        for (var t = 0; t < e.items.length; t++) e.items[t].style.width = e.itemWidth + "px"
                    }(e);
                    setTimeout(function () {
                        Util.addClass(e.list, "slideshow-pm__list--has-transition")
                    }, 50);
                    for (var t = 0; t < e.items.length; t++) t == e.selectedSlide ? e.items[t].removeAttribute("aria-hidden") : e.items[t].setAttribute("aria-hidden", "true");
                    var n = document.createElement("div");
                    Util.setAttributes(n, {
                        class: "sr-only js-slideshow-pm__aria-live",
                        "aria-live": "polite",
                        "aria-atomic": "true"
                    }), e.element.appendChild(n), e.ariaLive = n
                }(this),
                function (e) {
                    if (e.options.navigation) {
                        var i = document.createElement("ol"),
                            o = "";
                        i.setAttribute("class", "slideshow-pm__navigation");
                        for (var c = 0; c < e.items.length; c++) {
                            var u = c == e.selectedSlide ? 'class="slideshow-pm__nav-item slideshow-pm__nav-item--selected js-slideshow-pm__nav-item"' : 'class="slideshow-pm__nav-item js-slideshow-pm__nav-item"',
                                d = c == e.selectedSlide ? '<span class="sr-only js-slideshow-pm__nav-current-label">Current Item</span>' : "";
                            o = o + "<li " + u + '><button class="reset"><span class="sr-only">' + (c + 1) + "</span>" + d + "</button></li>"
                        }
                        i.innerHTML = o, e.navCurrentLabel = i.getElementsByClassName("js-slideshow-pm__nav-current-label")[0], e.element.appendChild(i), e.navigation = e.element.getElementsByClassName("js-slideshow-pm__nav-item"), i.addEventListener("click", function (t) {
                            s(e, t, !0)
                        }), i.addEventListener("keyup", function (t) {
                            s(e, t, "enter" == t.key.toLowerCase())
                        })
                    }
                    e.controls.length > 0 && (e.controls[0].addEventListener("click", function (t) {
                        t.preventDefault(), e.showPrev(), r(e)
                    }), e.controls[1].addEventListener("click", function (t) {
                        t.preventDefault(), e.showNext(!1), r(e)
                    }));
                    e.options.prewNav && e.element.addEventListener("click", function (t) {
                        var n = t.target.closest(".js-slideshow-pm__item");
                        n && !Util.hasClass(n, "slideshow-pm__item--selected") && e.showItem(Util.getIndexInArray(e.items, n))
                    });
                    e.options.swipe && (new SwipeContent(e.element), e.element.addEventListener("swipeLeft", function (t) {
                        e.showNext(!1)
                    }), e.element.addEventListener("swipeRight", function (t) {
                        e.showPrev()
                    }));
                    e.options.autoplay && (e.startAutoplay(), e.element.addEventListener("mouseenter", function (t) {
                        e.pauseAutoplay(), e.autoplayPaused = !0
                    }), e.element.addEventListener("focusin", function (t) {
                        e.pauseAutoplay(), e.autoplayPaused = !0
                    }), e.element.addEventListener("mouseleave", function (t) {
                        e.autoplayPaused = !1, e.startAutoplay()
                    }), e.element.addEventListener("focusout", function (t) {
                        e.autoplayPaused = !1, e.startAutoplay()
                    }));
                    (function (e) {
                        e.controls.length > 0 && (e.controls[0].addEventListener("keydown", function (n) {
                            (n.keyCode && 9 == n.keyCode || n.key && "Tab" == n.key) && n.shiftKey && t(e)
                        }), e.controls[1].addEventListener("keydown", function (n) {
                            (n.keyCode && 9 == n.keyCode || n.key && "Tab" == n.key) && n.shiftKey && 0 == e.selectedSlide && t(e)
                        }));
                        e.element.addEventListener("keydown", function (t) {
                            if (t.keyCode && 9 == t.keyCode || t.key && "Tab" == t.key) {
                                var i = t.target.closest(".js-slideshow-pm__item");
                                i && Util.hasClass(i, "slideshow-pm__item--selected") ? function (e, t) {
                                    t.shiftKey && e.firstFocusable && t.target == e.firstFocusable ? (t.preventDefault(), Util.moveFocus(e.element)) : !t.shiftKey && e.lastFocusable && t.target == e.lastFocusable && (t.preventDefault(), 0 != e.selectedSlide ? e.controls[0].getElementsByTagName("button")[0].focus() : e.controls[1].getElementsByTagName("button")[0].focus())
                                }(e, t) : (i || Util.hasClass(t.target, "js-slideshow-pm") && !t.shiftKey) && n(e)
                            }
                        }), window.addEventListener("keyup", function (t) {
                            if (t.keyCode && 9 == t.keyCode || t.key && "Tab" == t.key) {
                                var i = t.target.closest(".js-slideshow-prew__item");
                                (i || Util.hasClass(t.target, "js-slideshow-prew") && !t.shiftKey) && n(e)
                            }
                        })
                    })(e), window.addEventListener("resize", function (t) {
                        e.pauseAutoplay(), clearTimeout(e.resizeId), e.resizeId = setTimeout(function () {
                            ! function (e) {
                                Util.removeClass(e.list, "slideshow-pm__list--has-transition"), setTimeout(function () {
                                    a(e), l(e), Util.addClass(e.list, "slideshow-pm__list--has-transition")
                                }, 30)
                            }(e), setTimeout(function () {
                                e.startAutoplay()
                            }, 60)
                        }, 250)
                    })
                }(this), (f = this).list.addEventListener("transitionend", function () {
                    setTimeout(function () {
                        i(f)
                    }, 100)
                }), Util.addClass(this.element, "slideshow-pm--js-loaded")
        };

        function t(e) {
            event.preventDefault(), e.lastFocusable ? e.lastFocusable.focus() : Util.moveFocus(e.element)
        }

        function n(e) {
            event.preventDefault(), e.firstFocusable ? e.firstFocusable.focus() : e.controls.length > 0 ? 0 == e.selectedSlide ? e.controls[1].getElementsByTagName("button")[0].focus() : e.controls[0].getElementsByTagName("button")[0].focus() : e.options.navigation && e.navigation.getElementsByClassName("js-slideshow-pm__nav-item")[0].getElementsByTagName("button")[0].focus()
        }

        function i(e) {
            e.moveFocus && Util.moveFocus(e.items[e.selectedSlide]), e.items[e.selectedSlide].removeAttribute("aria-hidden"), e.animating = !1, e.moveFocus = !1, e.startAutoplay()
        }

        function s(e, t, n) {
            var i = t.target.closest(".js-slideshow-pm__nav-item");
            n && i && !Util.hasClass(i, "slideshow-pm__nav-item--selected") && (e.showItem(Util.getIndexInArray(e.navigation, i)), e.moveFocus = !0, r(e))
        }

        function o(e, t, n, s) {
            e.animating && e.supportAnimation || (s && (t < 0 ? t = e.items.length - 1 : t >= e.items.length && (t = 0)), t < 0 || t >= e.items.length || (e.animating = !0, Util.removeClass(e.items[e.selectedSlide], "slideshow-pm__item--selected"), e.items[e.selectedSlide].setAttribute("aria-hidden", "true"), Util.addClass(e.items[t], "slideshow-pm__item--selected"), c(e, t, e.selectedSlide), e.selectedSlide = t, l(e), e.pauseAutoplay(), u(e), f || i(e), function (e, t) {
                if ("newSlide" == t) var n = e.selectedSlide;
                e.element.dispatchEvent(new CustomEvent(t, {
                    detail: n
                }))
            }(e, "newSlide")))
        }

        function r(e) {
            e.ariaLive.innerHTML = "Item " + (e.selectedSlide + 1) + " of " + e.items.length
        }

        function a(e) {
            var t = window.getComputedStyle(e.items[e.selectedSlide]);
            e.itemWidth = parseFloat(t.getPropertyValue("width")), e.itemMargin = parseFloat(t.getPropertyValue("margin-right")), e.containerWidth = parseFloat(window.getComputedStyle(e.element).getPropertyValue("width"))
        }

        function l(e) {
            var t = parseInt((e.itemWidth + e.itemMargin) * e.selectedSlide * -1 + .5 * (e.containerWidth - e.itemWidth));
            e.list.style.transform = "translateX(" + t + "px)", e.list.style.msTransform = "translateX(" + t + "px)"
        }

        function c(e, t, n) {
            e.navigation && (Util.removeClass(e.navigation[n], "slideshow-pm__nav-item--selected"), Util.addClass(e.navigation[t], "slideshow-pm__nav-item--selected"), e.navCurrentLabel.parentElement.removeChild(e.navCurrentLabel), e.navigation[t].getElementsByTagName("button")[0].appendChild(e.navCurrentLabel)), e.controls.length > 0 && (Util.toggleClass(e.controls[0], "slideshow-pm__control--active", 0 != t), Util.toggleClass(e.controls[1], "slideshow-pm__control--active", t != e.items.length - 1))
        }

        function u(e) {
            var t = e.items[e.selectedSlide].querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
            ! function (e, t) {
                e.firstFocusable = !1;
                for (var n = 0; n < t.length; n++)
                    if (t[n].offsetWidth || t[n].offsetHeight || t[n].getClientRects().length) return e.firstFocusable = t[n], !0
            }(e, t),
                function (e, t) {
                    e.lastFocusable = !1;
                    for (var n = t.length - 1; n >= 0; n--)
                        if (t[n].offsetWidth || t[n].offsetHeight || t[n].getClientRects().length) return e.lastFocusable = t[n], !0
                }(e, t)
        }
        e.prototype.showNext = function (e) {
            o(this, this.selectedSlide + 1, "next", e)
        }, e.prototype.showPrev = function () {
            o(this, this.selectedSlide - 1, "prev")
        }, e.prototype.showItem = function (e) {
            o(this, e, !1)
        }, e.prototype.startAutoplay = function () {
            var e = this;
            !this.options.autoplay || this.autoplayId || this.autoplayPaused || (e.autoplayId = setInterval(function () {
                e.showNext(!0)
            }, e.options.autoplayInterval))
        }, e.prototype.pauseAutoplay = function () {
            this.options.autoplay && (clearInterval(this.autoplayId), this.autoplayId = !1)
        }, e.defaults = {
            element: "",
            navigation: !0,
            autoplay: !1,
            autoplayInterval: 5e3,
            prewNav: !1,
            swipe: !1
        }, window.SlideshowPrew = e;
        document.getElementsByClassName("js-slideshow-pm");
        var d = Util.cssSupports("align-items", "stretch"),
            f = Util.cssSupports("transition")
    }(),
    function () {
        var e = function (e) {
            var n;
            this.element = e, this.element && (this.icons = this.element.getElementsByClassName("js-ld-switch-icon")), this.selectedIcon = 0, this.isSystem = !1, this.iconClassIn = "ld-switch-btn__icon-wrapper--in", this.iconClassOut = "ld-switch-btn__icon-wrapper--out", this.mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)"), this.eventBind = !1, this.stripeCard = document.getElementsByClassName("js-stripe-element"),
                function (e) {
                    if (e.themes = ["light", "dark", "system"], e.element) {
                        e.options = e.element.querySelectorAll("option");
                        var t = e.options[0].getAttribute("data-option-theme"),
                            n = e.options[1].getAttribute("data-option-theme");
                        t && (e.themes[0] = t), n && (e.themes[1] = n)
                    }
                }(this), this.element && (function (e) {
                    var n = e.element.querySelector("select").selectedIndex;
                    0 !== n && t(e, n, !0)
                }(n = this), n.element.addEventListener("change", function (e) {
                    t(n, e.target.value)
                }))
        };

        function t(e, t, s) {
            var o = e.themes[0],
                r = t;
            if (localStorage.setItem("ldSwitch", e.themes[t]), 1 == t) o = e.themes[1];
            else if (2 == t) {
                window.matchMedia("(prefers-color-scheme: dark)").matches && (r = 3, o = e.themes[1])
            }
            i(o), n(e, r, e.selectedIcon, s),
                function (e, t, s) {
                    t ? (e.eventBind = function () {
                        var e = window.matchMedia("(prefers-color-scheme: dark)").matches,
                            t = e ? this.themes[1] : this.themes[0];
                        n(this, e ? 3 : 2, e ? 2 : 3), i(t)
                    }.bind(e), e.mediaQueryList.addEventListener("change", e.eventBind)) : s && e.mediaQueryList.removeEventListener("change", e.eventBind)
                }(e, 2 == t, e.isSystem), e.isSystem = 2 == t, e.stripeCard.length > 0 && e.stripeCard[0].dispatchEvent(new CustomEvent("themeChanged", {
                    detail: o
                }))
        }

        function n(e, t, n, i) {
            if (e.element) {
                if (i) return Util.removeClass(e.icons[n], e.iconClassIn), Util.addClass(e.icons[t], e.iconClassIn), void (e.selectedIcon = t);
                Util.removeClass(e.icons[n], e.iconClassIn), Util.addClass(e.icons[n], e.iconClassOut), Util.addClass(e.icons[t], e.iconClassIn), e.icons[t].addEventListener("transitionend", function i() {
                    Util.removeClass(e.icons[n], e.iconClassOut), e.icons[t].removeEventListener("transitionend", i), e.selectedIcon = t
                })
            }
        }

        function i(e) {
            document.getElementsByTagName("html")[0].setAttribute("data-theme", e)
        }
        e.prototype.setTheme = function (e) {
            t(this, e, !1)
        }, window.LdSwitch = e;
        var s = document.getElementsByClassName("js-ld-switch");
        if (s.length > 0)
            for (var o = 0; o < s.length; o++) new e(s[o])
    }(),
    function () {
        var e = [{
            label: "Components",
            url: "ds/components",
            template: "quick-link"
        }, {
            label: "Documentation",
            url: "ds/get-started",
            template: "quick-link"
        }, {
            label: "Export",
            url: "ds/export",
            template: "quick-link"
        }, {
            label: "Globals",
            url: "ds/globals",
            template: "quick-link"
        }, {
            label: "Projects",
            url: "ds/all-projects",
            template: "quick-link"
        }],
            t = function (t) {
                this.element = t, this.modal = this.element.closest(".js-modal"), this.input = this.element.getElementsByClassName("js-autocomplete__input"), this.filters = this.element.getElementsByClassName("js-adv-search__filters"), this.filter = "all", this.categories = this.element.getElementsByClassName("js-adv-search__category"), this.categoryResults = this.element.getElementsByClassName("js-adv-search__category-results"), this.categoryHtml = [], this.searchDb = [], this.searchDbTypes = ["components", "documentations", "globals", "projects"], this.subcategories = [],
                    function (e) {
                        e.templates = [];
                        for (var t = 0; t < e.categoryResults.length; t++) {
                            var n = e.categoryResults[t].querySelector("[data-autocomplete-template]");
                            e.templates.push(n.getAttribute("data-autocomplete-template"))
                        }
                    }(this),
                    function (t) {
                        new Autocomplete({
                            element: t.element,
                            characters: 0,
                            searchData: function (s, o) {
                                ! function (t, s, o) {
                                    "" != s ? 0 == t.searchDb.length ? function (e, t) {
                                        l("components", function (n) {
                                            e.searchDb[0] = n, l("documentations", function (n) {
                                                e.searchDb[1] = n, l("globals", function (n) {
                                                    e.searchDb[2] = n,
                                                        function (e) {
                                                            $.ajax({
                                                                url: "post/selectAllProjectsForSearch",
                                                                type: "POST",
                                                                dataType: "json",
                                                                cache: "false"
                                                            }).done(function (t) {
                                                                for (var n = 0; n < t.response.length; n++) t.response[n].tags = "prj", t.response[n].categories = "", t.response[n].title = t.response[n].label, t.response[n].url = t.response[n].id;
                                                                e(t.response)
                                                            }).fail(function (t) {
                                                                e()
                                                            })
                                                        }(function (n) {
                                                            e.searchDb[3] = n, l("subcategories", function (n) {
                                                                e.subcategories = function (e) {
                                                                    var t = [];
                                                                    t[0] = "";
                                                                    for (var n = 0; n < e.length; n++) t[e[n].id] = e[n].title;
                                                                    return t
                                                                }(n), t()
                                                            })
                                                        })
                                                })
                                            })
                                        })
                                    }(t, function () {
                                        i(t, s, o)
                                    }) : i(t, s, o) : o(e, function (e) {
                                        n(t, e)
                                    })
                                }(t, s, o)
                            },
                            onClick: function (e, t, n, i) {
                                setTimeout(function () {
                                    i()
                                }, 1e4)
                            },
                            populate: !1,
                            resultsVisible: !0
                        }), t.filters.length > 0 && t.filters[0].addEventListener("change", function (e) {
                            t.filter = e.target.value, t.input.length > 0 && t.input[0].dispatchEvent(new Event("filter"))
                        });
                        t.modal && (t.modal.addEventListener("modalIsClose", function (e) {
                            t.modal.addEventListener("transitionend", function e(n) {
                                "visibility" == n.propertyName && (t.input.length > 0 && (t.input[0].value = ""), function (e) {
                                    for (var t = 0; t < e.categories.length; t++) Util.addClass(e.categories[t], "hide")
                                }(t), t.modal.removeEventListener("transitionend", e))
                            })
                        }), t.modal.addEventListener("modalIsOpen", function (e) {
                            Util.removeClass(t.categories[0], "hide")
                        }));
                        t.element.addEventListener("click", function (e) {
                            var t = e.target.closest(".js-adv-search__project");
                            if (t) {
                                e.preventDefault();
                                var n = parseInt(t.getAttribute("href")),
                                    i = location.href;
                                i.indexOf("ds/all-projects") > -1 && (i = i.replace("ds/all-projects", "ds/components")), window.selectProjectFn(n, i)
                            }
                        })
                    }(this)
            };

        function n(e, t) {
            var n = document.createElement("div");
            n.innerHTML = t;
            var i = n.getElementsByClassName("js-autocomplete__item");
            ! function (e) {
                for (var t = 0; t < e.templates.length; t++) e.categoryHtml[t] = ""
            }(e);
            for (var s = 0; s < i.length; s++) {
                var o = e.templates.indexOf(i[s].getAttribute("data-autocomplete-template"));
                e.categoryHtml[o] = e.categoryHtml[o] + i[s].outerHTML
            } ! function (e) {
                for (var t = 0; t < e.templates.length; t++) Util.toggleClass(e.categories[t], "hide", "" == e.categoryHtml[t]), e.categoryResults[t].innerHTML = e.categoryHtml[t]
            }(e)
        }

        function i(e, t, i) {
            for (var o = [], r = e.searchDb.length, a = 0; a < r; a++) {
                var l = c(e.searchDbTypes[a]);
                o[a] = s(e, e.searchDb[a], t, l)
            }
            var u, d, f = [];
            if ("all" == e.filter || "components" == e.filter)
                for (a = 0; a < o[0].length; a++) {
                    f[a] = [], f[a].label = o[0][a].title, f[a].url = "ds/components/app/" + o[0][a].url, f[a].template = "component";
                    var p = (u = o[0][a].preview, d = void 0, [(d = u.split("."))[0] + ".png", d[0] + "-dark.png"]);
                    f[a].src1 = "assets/img/ds/components/preview/" + p[0], f[a].src2 = "assets/img/ds/components/preview/" + p[1], o[0][a].pro && "on" == o[0][a].pro && (f[a].class = "comp-preview-pro")
                }
            var m = f.length;
            if ("all" == e.filter || "docs" == e.filter)
                for (a = 0; a < o[1].length; a++) {
                    f[m + a] = [];
                    var h = o[1][a]["search-prefix"];
                    h || (h = ""), f[m + a].label = h + o[1][a].title, f[m + a].url = "ds/docs/" + o[1][a].url, f[m + a].template = "docs"
                }
            if (m = f.length, "all" == e.filter || "globals" == e.filter)
                for (a = 0; a < o[2].length; a++) f[m + a] = [], f[m + a].label = o[2][a].title, f[m + a].url = "ds/globals/" + o[2][a].url, f[m + a].template = "globals";
            if (m = f.length, "all" == e.filter || "projects" == e.filter)
                for (a = 0; a < o[3].length; a++) f[m + a] = [], f[m + a].label = o[3][a].label, f[m + a].url = o[3][a].url, f[m + a].template = "project";
            0 == f.length && (f = [{
                label: "No results",
                template: "no-results"
            }]), i(f, function (t) {
                n(e, t)
            })
        }

        function s(e, t, n, i) {
            for (var s = [], l = i ? " " + i : "", c = 0; c < t.length; c++) {
                var u = "";
                t[c].subcategories && (u = o(e, t[c].subcategories));
                var d = (t[c].tags + " " + t[c].title + " " + t[c].categories + " " + u + " " + l).toLowerCase();
                r(d, n.toLowerCase()) && (a(d, n.toLowerCase()) ? s.unshift(t[c]) : s.push(t[c]))
            }
            return s
        }

        function o(e, t) {
            for (var n = t.split(","), i = "", s = 0; s < n.length; s++) i = i + e.subcategories[parseInt(n[s])] + " ";
            return i
        }

        function r(e, t) {
            for (var n = t.split(" "), i = !0, s = 0; s < n.length; s++) e.indexOf(n[s]) < 0 && (i = !1);
            return i
        }

        function a(e, t) {
            return e.indexOf(t) > -1
        }

        function l(e, t) {
            var n = COMPNUM || parseInt(10 * Math.random() + 1);
            "documentations" == e && DOCTIME && (n = DOCTIME), $.ajax({
                type: "GET",
                dataType: "json",
                url: "json/" + e + "/database-" + e + ".json?ver=" + n,
                success: function (e) {
                    t(e)
                },
                error: function (e, n, i) {
                    t([])
                }
            })
        }

        function c(e) {
            return "documentations" == e ? "docs documentations" : "components" == e ? "components" : "globals" == e ? "globals" : "projects" == e ? "project" : void 0
        }
        var u = document.getElementsByClassName("js-adv-search");
        if (u.length > 0)
            for (var d = 0; d < u.length; d++) ! function (e) {
                new t(u[e])
            }(d)
    }(),
    function () {
        var e = document.getElementById("adv-search-modal");
        e && window.addEventListener("keydown", function (t) {
            t.key && "e" == t.key.toLowerCase() && (t.ctrlKey || t.metaKey) && e.dispatchEvent(new Event("openModal"))
        })
    }(),
    function () {
        var e = document.getElementsByClassName("js-app-header");
        if (e.length > 0) {
            var t = e[0].getElementsByClassName("js-code-action-wrapper");
            if (t.length < 1) return;
            var n = t[0].getElementsByClassName("js-actions__codyframe"),
                i = t[0].getElementsByClassName("js-actions__tailwind"),
                s = t[0].getElementsByClassName("js-actions__no-framework")
        }
        var o = document.getElementById("modal-code"),
            r = !1,
            a = !1;
        o && (r = o.getElementsByClassName("js-actions__codyframe"), a = o.getElementsByClassName("js-actions__tailwind"), modalFf = o.getElementsByClassName("js-actions__no-framework"));
        var l = document.getElementsByClassName("js-export-component"),
            c = document.getElementsByClassName("js-disable-glob-modal");
        c.length > 0 && c[0].addEventListener("click", function (e) {
            e.target.closest(".js-switch-cd") && (b("codyframe"), function (e) {
                if (!u) return;
                u.selectedIndex = e, u.closest(".js-select").dispatchEvent(new Event("select-updated"))
            }(0))
        });
        var u = document.getElementById("select-framework");
        u && u.addEventListener("change", function (e) {
            b(e.target.value)
        });
        var d = window.frames[0],
            f = document.getElementsByClassName("js-app-content__group"),
            p = document.getElementsByClassName("js-app-sidebar--globals"),
            m = document.getElementsByClassName("js-app--tabs"),
            h = document.getElementById("app-menu-color"),
            g = document.getElementsByClassName("js-app-sidebar--typography"),
            v = document.getElementsByClassName("js-app-canvas--typography");

        function b(e) {
            cdSetCookie("cd-framework", e), n && n.length > 0 && n[0].classList.toggle("hide", "codyframe" != e), i && i.length > 0 && i[0].classList.toggle("hide", "tailwind" != e), s && s.length > 0 && s[0].classList.toggle("hide", "no-framework" != e), r && r.length > 0 && r[0].classList.toggle("hide", "codyframe" != e), a && a.length > 0 && a[0].classList.toggle("hide", "tailwind" != e), modalFf && modalFf.length > 0 && modalFf[0].classList.toggle("hide", "no-framework" != e), o && o.setAttribute("data-framework", e), l && l.length > 0 && l[0].setAttribute("data-framework", e), c.length > 0 && Util.toggleClass(c[0], "modal--is-visible", "tailwind" == e), d && d.setFramework && d.setFramework(e), f.length > 0 && f[0].dispatchEvent(new CustomEvent("framework-selection", {
                detail: e
            })), p.length > 0 && p[0].dispatchEvent(new CustomEvent("framework-selection", {
                detail: e
            })), m.length > 0 && m[0].dispatchEvent(new CustomEvent("framework-selection", {
                detail: e
            })), h && h.dispatchEvent(new CustomEvent("framework-selection", {
                detail: e
            }));
            for (var t = 0; t < g.length; t++) g[t].classList.toggle("app-sidebar--tabs-is-visible", "codyframe" == e);
            v.length > 0 && v[0].classList.toggle("app-canvas--tabs-is-visible", "codyframe" == e)
        }
    }(),
    function () {
        var e = document.getElementById("modal-code");
        if (e) {
            var t = Util.hasClass(e, "js-modal-code--global"),
                n = document.getElementById("notice-dependencies"),
                i = e.getElementsByClassName("js-actions__codyframe"),
                s = e.getElementsByClassName("js-actions__tailwind"),
                o = e.getElementsByClassName("js-actions__no-framework"),
                r = e.getElementsByClassName("js-modal__code"),
                a = e.getElementsByClassName("js-modal__copy-text"),
                l = document.getElementsByClassName("js-code-action-wrapper");
            hljs.configure({
                tabReplace: "  "
            }), e.addEventListener("modalIsOpen", function (n) {
                t ? document.getElementById("radio-t-css").checked = !0 : c(function () {
                    var t;
                    t = "no-framework" == e.getAttribute("data-framework") ? o[0].querySelector("input:checked") : "tailwind" == e.getAttribute("data-framework") ? s[0].querySelector("input:checked") : i[0].querySelector("input:checked");
                    return t.getAttribute("data-type")
                }())
            }), e.addEventListener("updateGlobalCode", function (e) {
                var t, n;
                t = e.detail.content, n = e.detail.type, r[0].textContent = t, u(n), d(n)
            }), e.addEventListener("modalIsClose", function (e) {
                n && n.classList.add("notice--hide")
            }), i[0].addEventListener("change", function (e) {
                c(e.target.getAttribute("data-type"))
            }), s[0].addEventListener("change", function (e) {
                c(e.target.getAttribute("data-type"))
            }), o[0].addEventListener("change", function (e) {
                c(e.target.getAttribute("data-type"))
            })
        }

        function c(e) {
            if ("t-config" == e) {
                var t = new CustomEvent("get-config", {
                    detail: {
                        callback: function (e) {
                            r[0].textContent = e
                        }
                    }
                }),
                    n = document.getElementsByClassName("js-app-sidebar--globals");
                n.length > 0 && n[0].dispatchEvent(t)
            } else r[0].textContent = l[0].getAttribute("data-" + e);
            u(e), d(e)
        }

        function u(e) {
            var t = function (e) {
                if (e.indexOf("html") > -1) return "html";
                if (e.indexOf("scss") > -1) return "scss";
                if (e.indexOf("css") > -1) return "css";
                if (e.indexOf("config") > -1) return "json";
                return "javascript"
            }(e);
            r[0].classList.remove("html", "scss", "css", "javascript", "xml", "json"), r[0].classList.add(t), hljs.highlightBlock(r[0])
        }

        function d(e) {
            var t = "Copy JS",
                n = "js";
            e.indexOf("html") > -1 ? (t = "Copy HTML", n = "html") : e.indexOf("scss") > -1 ? (t = "Copy SCSS", n = "scss") : e.indexOf("css") > -1 ? (t = "Copy CSS", n = "css") : e.indexOf("config") > -1 && (t = "Copy Config", n = "config"), a[0].innerText = t, a[0].setAttribute("data-copy", n)
        }
    }(),
    function () {
        var e = document.getElementsByClassName("js-slideshow-pm");
        if (!(e.length < 1)) {
            var t = new SlideshowPrew({
                element: e[0]
            }),
                n = e[0].querySelectorAll("video"),
                i = !1,
                s = e[0].getElementsByClassName("js-slideshow-pm__loader");
            e[0].addEventListener("newSlide", function (e) {
                clearTimeout(i), o(e.detail)
            }), new IntersectionObserver(function (e, s) {
                clearTimeout(i), i = !1, e[0].isIntersecting ? o(t.selectedSlide) : n[t.selectedSlide].pause()
            }).observe(e[0])
        }

        function o(e) {
            for (var t = 0; t < n.length; t++) t == e ? (n[t].pause(), n[t].currentTime = 0, n[t].play(), r(n[t].duration % 60, t)) : n[t].pause()
        }

        function r(e, o) {
            if (isNaN(e)) return setTimeout(function () {
                r(n[o].duration % 60, o)
            }, 100);
            i = setTimeout(function () {
                2 == t.selectedSlide ? t.showItem(0) : t.showNext()
            }, 1e3 * e), s.length < 1 || (s[0].style.transitionDuration = "0s", s[0].classList.remove("slideshow-pm__loader--full"), setTimeout(function () {
                s[0].style.transitionDuration = Math.ceil(e) + "s", s[0].classList.add("slideshow-pm__loader--full")
            }, 20))
        }
    }(), jQuery(document).ready(function (e) {
        var t = e(".js-item-gallery");
        if (t.length > 0) {
            var n = e(".js-item-pagination"),
                i = [],
                s = 0,
                o = 0,
                r = 12,
                a = !1,
                l = !1,
                c = g("page"),
                u = g("s"),
                d = g("saved");
            c && (s = c - 1), u && (l = u), n.on("click", ".js-btn", function (c) {
                var p = this;
                a || (a = !0, e(p).addClass("btn-states--state-b"), function (n, i) {
                    if (n.length > 0 && !t.hasClass("js-item-gallery--prj")) return void i(n);
                    if (GEM_DB) return void i(GEM_DB);
                    if (t.hasClass("js-item-gallery--prj")) {
                        var o = "";
                        l && (o = l), e.ajax({
                            url: AJAX_URL + "getProjects",
                            data: "start=" + (s + 1) * r + "&tot=" + (r + 1) + "&search=" + o,
                            type: "POST",
                            dataType: "json",
                            cache: "false",
                            success: function (e) {
                                0 == e.status && i(e.response)
                            }
                        })
                    } else e.ajax({
                        type: "GET",
                        dataType: "json",
                        url: "json/gem/database-gem.json",
                        beforeSend: function () { },
                        success: function (e) {
                            i(e)
                        },
                        error: function (e, t, n) {
                            i([])
                        }
                    })
                }(i, function (l) {
                    i = l, o = Math.ceil(i.length / r), s += 1, t.hasClass("js-gem-gallery") ? function (e) {
                        for (var n = r * e, s = n + r, o = "", a = n; a < s; a++) a < i.length && (o = o + '<li class="col-6@sm col-4@md col-3@lg"><a href="' + i[a].url + '" class="block card-2 radius-md overflow-hidden"><figure class="media-wrapper-3:2"><img src="assets/img/gems/previews/' + i[a].previewImg + '" alt="' + i[a].title + '" class="block width-100%"></figure><p class="padding-sm border-top border-alpha text-1rem@md">' + i[a].title + "</p></a></li>");
                        t.append(o)
                    }(s) : t.hasClass("js-blog-gallery") ? function (e) {
                        var n = r * e,
                            s = n + r,
                            o = "",
                            a = t.children("section").eq(0).clone();
                        a.removeClass("blog-article--featured");
                        for (var l = n; l < s; l++) l < i.length && (a.find(".js-blog-item__link").attr("href", "blog/post/" + i[l].url).text(i[l].title), a.find(".js-blog-item__desc").text(i[l].description), a.find(".js-blog-item__date").text(i[l]["publish-date"]), o += a[0].outerHTML);
                        t.append(o)
                    }(s) : t.hasClass("js-item-gallery--prj") ? function (n) {
                        var s = t.children("li").eq(1).clone(),
                            o = !!i[0] && i[0].id;
                        content = "";
                        for (var a = 0; a < r && i[a]; a++) {
                            var l = v(i[a].colors);
                            s.attr("data-id", i[a].id), s.find(".js-select-project").attr("data-project-id", i[a].id).eq(0).attr("style", "background-color: " + l[4] + ";").attr("data-label", "Explore " + i[a].label), s.find(".project__overlay").attr("style", "background-color: " + l[2] + ";"), s.find(".project__overlay-msg").attr("style", "background-color: " + l[2] + "; color: " + l[4] + ";"), s.find(".js-project__item-dot").eq(0).attr("style", "background-color: " + l[0] + ";").end().eq(1).attr("style", "background-color: " + l[1] + ";").end().eq(2).attr("style", "background-color: " + l[2] + ";").end().eq(3).attr("style", "background-color: " + l[3] + ";"), s.find(".js-projects-gallery__title").children("span").text(i[a].label).attr("id", "project-label-" + i[a].id), s.find("[data-project-id]").attr("data-project-id", i[a].id);
                            var c = s.find(".js-ds-btn-menu-actions");
                            c.attr("data-menu", "js-menu-popup--prj-" + i[a].id).attr("data-prj-id", i[a].id).attr("data-prj-label", i[a].label).removeAttr("aria-expanded"), content += s[0].outerHTML
                        }
                        if (e(content).appendTo(t), o) {
                            var u = t.find("li.js-prj-wrapper[data-id=" + o + "]").prev().nextAll();
                            ! function (e) {
                                for (var t = 0; t < e.length; t++) {
                                    var n = e.eq(t)[0].getElementsByClassName("js-select-project");
                                    h(n)
                                }
                            }(u)
                        }
                    }() : t.hasClass("js-item-gallery__tutorials") ? function (e) {
                        for (var n = r * e, s = n + r, o = "", a = t.children(".js-tutorial-card").eq(0).clone(), l = n; l < s; l++) l < i.length && (a.attr("href", "tutorials/" + i[l].url), a.find("img").attr("src", "assets/img/tutorials/previews/" + i[l].preview).attr("alt", i[l].title), a.find("time").text(i[l].date), a.find(".js-title").text(i[l].title), o += a[0].outerHTML);
                        t.append(o)
                    }(s) : t.hasClass("js-nugget-gallery") ? function (e) {
                        for (var n = r * e, s = n + r, o = "", a = t.children(".js-nugget-card").eq(0).clone(), l = n; l < s; l++) l < i.length && (a.find(".js-nugget-link").attr("href", "nuggets/" + i[l].url), a.find("img").attr("src", "web/assets/img/nuggets/preview/" + i[l].preview).attr("alt", i[l].title), a.find(".js-nugget-date").text(i[l].release), a.find(".js-nugget-title").text(i[l].title), o += a[0].outerHTML);
                        t.append(o)
                    }(s) : function (n) {
                        var s = r * n,
                            o = s + r,
                            a = "",
                            l = t.children("li").eq(0).clone();
                        l.find(".js-preview-image").children("svg").eq(0).remove();
                        for (var c = s; c < o; c++)
                            if (c < i.length) {
                                l.toggleClass("js-ds-comp-preview--pro", "on" == i[c].pro), l.attr("data-code", i[c].demo);
                                var u = (p = i[c].preview, m = void 0, [(m = p.split("."))[0] + ".png", m[0] + "-dark.png"]);
                                l.find(".js-preview-light").attr("src", "web/assets/img/ds/components/preview/" + u[0]).attr("alt", i[c].title), l.find(".js-preview-dark").attr("src", "web/assets/img/ds/components/preview/" + u[1]).attr("alt", i[c].title), l.find(".js-preview-image").attr("href", "ds/components/app/" + i[c].url), l.find(".js-preview-title").text(i[c].title), l.find(".js-bookmark__btn").attr("data-comp", i[c].id);
                                var d = l.find(".js-ds-comp-preview__card");
                                d.toggleClass("card--pro", "on" == i[c].pro), d.removeClass("card--new"), d.toggleClass("card--saved", f.includes(i[c].id.toString())), a += l[0].outerHTML
                            } var p, m;
                        e(a).appendTo(t)
                    }(s), t.hasClass("js-item-gallery--prj") ? function (e, t, n) {
                        t.length > n ? e.removeClass("hide") : e.addClass("hide")
                    }(n, i, r) : function (e, t, n) {
                        t < n - 1 ? e.removeClass("hide") : e.addClass("hide")
                    }(n, s, o),
                        function (e, t, n) {
                            var i = location.pathname + "?page=" + e + "&show=all";
                            t && (i = i + "&s=" + t);
                            n && (i += "&saved=true");
                            window.history.replaceState({
                                path: i
                            }, "", i)
                        }(s + 1, u, d), a = !1, e(p).removeClass("btn-states--state-b")
                }))
            })
        }
        var f = PROJECT && PROJECT.favs ? JSON.parse(PROJECT.favs) : [],
            p = e(".js-ds-sub-nav__fav-list-counter");

        function m(e, t) {
            for (var n = t.split(" "), i = !0, s = 0; s < n.length; s++) e.indexOf(n[s]) < 0 && (i = !1);
            return i
        }

        function h(e) {
            for (var t = 0; t < e.length; t++) ! function (t) {
                window.initSelectProject(e[t])
            }(t)
        }

        function g(e) {
            for (var t = null, n = [], i = location.search.substr(1).split("&"), s = 0; s < i.length; s++)(n = i[s].split("="))[0] === e && (t = decodeURIComponent(n[1]));
            return t
        }

        function v(e) {
            var t = [];
            return e && "" != e ? (arrayColors = JSON.parse(e), t = [b(arrayColors.primary[0][2]), b(arrayColors.contrastColors[0][1]), b(arrayColors.contrastColors[0][4]), b(arrayColors.accent[0][2]), b(arrayColors.contrastColors[0][0])]) : t = ["hsl(220, 90%, 56%)", "hsl(240, 1%, 83%)", "hsl(240, 8%, 12%)", "hsl(349, 75%, 51%)", "hsl(0, 0%, 100%)"], t
        }

        function b(e) {
            return color1 = e[0], color2 = Math.round(100 * e[1]), color3 = Math.round(100 * e[2]), "hsl(" + color1 + ", " + color2 + "%, " + color3 + "%)"
        }
        p.length > 0 && p.text(f.length).removeAttr("data-display"), p.on("updateCount", function (e, t) {
            p.text(t)
        });
        var y = e(".js-ds-comp-gallery");
        if (y.length > 0) {
            function w(t) {
                e(t.currentTarget).parents(".js-ds-comp-preview").addClass("ds-comp-preview--is-focused")
            }

            function C(t) {
                e(document.activeElement).parents(".js-ds-comp-preview").is(e(t.currentTarget).parents(".js-ds-comp-preview")) || e(t.currentTarget).parents(".js-ds-comp-preview").removeClass("ds-comp-preview--is-focused")
            }
            y.on("click", ".js-ds-comp-actions", function (e) {
                E(e, !1)
            }), x(), y.on("focus", ".js-preview-image", function (e) {
                w(e)
            }), y.on("focus", ".js-preview-title", function (e) {
                w(e)
            }), y.on("focusout", ".js-preview-image", function (e) {
                C(e)
            }), y.on("focusout", ".js-preview-title", function (e) {
                C(e)
            })
        }

        function E(t, n) {
            var i;
            t.preventDefault(), (i = n ? e(n) : e(t.currentTarget).parent().siblings(".js-menu-popup")).hasClass("menu-popup--is-visible") ? i.removeClass("menu-popup--is-visible") : (e(".js-menu-popup.menu-popup--is-visible").removeClass("menu-popup--is-visible"), i.addClass("menu-popup--is-visible"))
        }

        function x() {
            e(document).on("click", function (t) {
                0 == e(t.target).parents(".js-menu-popup").addBack(".js-menu-popup").length && 0 == e(t.target).parents(".js-ds-btn-menu-actions").addBack(".js-ds-btn-menu-actions").length && e(".js-menu-popup.menu-popup--is-visible").removeClass("menu-popup--is-visible")
            }), e(window).on("keyup", function (t) {
                (t.keyCode && 27 == t.keyCode || t.key && "Escape" == t.key) && e(".js-menu-popup.menu-popup--is-visible").removeClass("menu-popup--is-visible")
            })
        }
        if (function (e) {
            if (e.length > 0)
                for (var t = 0; t < e.length; t++) ! function (t) {
                    var n, i, s;
                    n = e[t], i = document.getElementsByClassName(n.getAttribute("data-menu")), s = i.length > 0 && i[0], n.addEventListener("click", function (e) {
                        E(e, s)
                    }), x()
                }(t)
        }(document.getElementsByClassName("js-ds-trigger-menu-popup")), e(".js-highlight").length > 0) {
            var j = e(".js-hljs");
            hljs.configure({
                tabReplace: "  "
            }), j.each(function (t) {
                var n = "snippet-code-" + t;
                e(this).attr("id", n), e(this).parent("pre").attr("class", "position-relative"), hljs.highlightBlock(e(this).get(0));
                var i = '<button class="reset copy-to-clip js-copy-to-clip" type="button" title="Click to copy" aria-controls="' + n + '"><svg class="icon icon--xs" width="16" height="16" viewBox="0 0 16 16"><title>Click to copy</title><path d="M12,2h.5A1.5,1.5,0,0,1,14,3.5v10A1.5,1.5,0,0,1,12.5,15h-9A1.5,1.5,0,0,1,2,13.5V3.5A1.5,1.5,0,0,1,3.5,2H4" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"/><rect x="6" y="1" width="4" height="2" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline class="copy-to-clip__icon-check" points="5 9 7 11 11 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg></button>';
                this.insertAdjacentHTML("beforebegin", i), new CopyClipboard
            })
        }
        var _ = e(".js-globals__list");
        if (_.length > 0) {
            var k = _.attr("data-search") ? _.attr("data-search").toLowerCase() : "",
                S = _.children("li"),
                N = e(".js-search-results-none");
            k && function (e, t, n) {
                for (var i = 0, s = 0; s < e.length; s++) {
                    var o = e.eq(s).find(".js-ds-global-item__title").text().toLowerCase();
                    m(o, t) ? (e.eq(s).removeClass("ds-global-item--is-hidden"), i += 1) : e.eq(s).addClass("ds-global-item--is-hidden")
                }
                0 == i ? n.removeClass("search-results-none--is-hidden") : n.addClass("search-results-none--is-hidden")
            }(S, k, N), _.removeClass("ds-globals__list--is-hidden")
        }
        var T = e(".js-newsletter");
        if (T.length > 0) {
            var A = T.find(".js-newsletter-form"),
                I = !1,
                L = T.find(".js-response-message"),
                B = T.find(".js-email"),
                M = T.find(".js-btn");

            function D() {
                L.addClass("hide")
            }
            A.on("submit", function (t) {
                return t.preventDefault(), !I && (I = !0, L.addClass("newsletter__response--is-hidden").removeClass("newsletter__response--text-red newsletter__response--text-green"), M.removeClass("btn-states--state-c").addClass("btn-states--state-b"), e.ajax({
                    url: "post/subscribeNewsletter",
                    data: A.serialize(),
                    type: "POST",
                    dataType: "json",
                    cache: "false"
                }).done(function (e) {
                    var t = JSON.parse(e.response);
                    D(), t.status && "pending" == t.status.toLowerCase() ? (L.eq(2).removeClass("hide"), M.addClass("btn-states--state-c").removeClass("newsletter__btn--email-is-valid")) : t.error && "member_exists_with_email_address" == t.error.code.toLowerCase() ? L.eq(0).removeClass("hide") : L.eq(1).removeClass("hide")
                }).fail(function (e) {
                    D(), L.eq(1).removeClass("hide")
                }).always(function (e) {
                    I = !1, M.removeClass("btn-states--state-b")
                }), !1)
            }), B.on("input", function (e) {
                var t = B.val(),
                    n = t.indexOf("@");
                dotPosition = t.lastIndexOf("."), n < 1 || dotPosition < n + 2 ? M.removeClass("newsletter__btn--email-is-valid") : M.addClass("newsletter__btn--email-is-valid"), M.removeClass("btn-states--state-c")
            })
        }
        var O = e(".js-ds-sub-nav");
        O.length > 0 && (e(".js-ds-sub-nav__btn").on("click", function (e) {
            e.preventDefault(), O.addClass("ds-sub-nav__list--is-visible")
        }), O.on("click", ".js-ds-sub-nav__close", function (e) {
            e.preventDefault(), O.removeClass("ds-sub-nav__list--is-visible")
        }));
        if (e(".js-app-header-menu").length > 0) {
            var F = e(".js-sidebar-desk-trigger");
            if (F.length > 0) {
                var U = e(".js-app-sidebar--toggle"),
                    R = e(".js-app-canvas");
                F.on("click", function (e) {
                    e.preventDefault(), U.toggleClass("app-sidebar--hide"), R.toggleClass("app-canvas--sidebars-visible")
                })
            }
        }
        var P = e(".js-app-dark-mode");
        if (P.length > 0) {
            var q = new LdSwitch(!1);
            P.on("click", function (e) {
                e.preventDefault();
                var t = "dark" == document.getElementsByTagName("html")[0].getAttribute("data-theme") ? 0 : 1;
                q.setTheme(t)
            })
        }
        var H = e(".js-back-to-top"),
            $ = !1,
            W = 600;

        function z() {
            window.scrollY > W ? H.addClass("back-to-top--is-visible") : H.removeClass("back-to-top--is-visible"), $ = !1
        }
        H && (window.addEventListener("scroll", function (e) {
            $ || ($ = !0, window.requestAnimationFrame ? window.requestAnimationFrame(z) : setTimeout(z, 250))
        }), H.on("click", function (t) {
            t.preventDefault(), e("body,html").animate({
                scrollTop: 0
            }, 300)
        }));
        var V = e(".js-animate-hover");
        V.length > 0 && V.each(function () {
            e(this).on("mouseenter", function () {
                var t = this;
                e(t).addClass("hover"), setTimeout(function () {
                    e(t).removeClass("hover")
                }, Number(e(t).attr("data-duration")))
            })
        });
        var G = e(".js-privacy-policy-alert");
        G.length > 0 && ROUTE.indexOf("ds_components_app_") < 0 && ROUTE.indexOf("ds_globals_") < 0 && null == localStorage.getItem("cd-cookies-alert") && (G.removeClass("hide"), localStorage.setItem("cd-cookies-alert", "seen"));
        var X = e(".js-cf3-alert");
        X.length > 0 && X.on("click", ".js-cf3-alert__close", function (e) {
            e.preventDefault(), X.addClass("is-hidden"), cdSetCookie("cd-cf3-alert", "seen")
        });
        var J, K = e(".js-free-discount-alert");
        K.length > 0 && K.on("click", ".js-free-discount-alert__close", function (e) {
            e.preventDefault(), K.addClass("is-hidden"), cdSetCookieWithExpiration("cd-free-discount-alert", "seen", 86400)
        }), e(".js-max-login-notice").length > 0 && (J = "SHOW_MAX_NOTICE", document.cookie = J + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
        var Q = e(".js-app-more-info");
        if (Q.length > 0) {
            var Z = Q.attr("data-info");
            null == localStorage.getItem(Z) && (Q.removeClass("notice--hide"), Q.on("click", ".js-notice__hide-control", function (e) {
                e.preventDefault(), localStorage.setItem(Z, "seen")
            }))
        }
        var Y = e(".js-smooth-scroll");
        Y.length > 0 && Y.on("click", function (t) {
            t.preventDefault();
            var n = e(this).attr("href");
            e("body,html").animate({
                scrollTop: e(n).offset().top
            }, 300, function () {
                window.location.hash = n
            })
        });
        var ee = e(".js-main-nav__account");
        if (ee.length > 0) {
            var te = e(".js-main-nav__menu");
            ee.on("click", function (e) {
                e.preventDefault(), te.toggleClass("main-nav__menu--is-visible")
            })
        }
        var ne = document.getElementsByClassName("js-redirect-link");
        ne.length > 0 && ne[0].addEventListener("click", function (e) {
            e.preventDefault(), localStorage.setItem("download-tutorial", ne[0].getAttribute("data-tutorial")), window.location.href = ne[0].getAttribute("href")
        });
        var ie = document.getElementsByClassName("js-direct-link");
        if (ie.length > 0) {
            var se = localStorage.getItem("download-tutorial");
            if (null != se) {
                var oe = (ue = ie[0].getElementsByTagName("a")[0]).getAttribute("href").replace("{tutorial}", se);
                ue.setAttribute("href", oe), ue.click()
            } else Util.addClass(ie[0], "is-hidden")
        }
        var re = document.getElementsByClassName("js-tutorial-media");
        if (re.length > 0) {
            window.requestAnimationFrame(function () {
                var e = lottie.loadAnimation({
                    container: this,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    path: "assets/bodymovin/tutorials/data-" + this.getAttribute("data-bodymovin") + ".json"
                });
                if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) return;
                new IntersectionObserver(function (e, t, n) {
                    t[0].intersectionRatio > .7 && e.play()
                }.bind(this, e), {
                    threshold: [0, .8, 1]
                }).observe(this)
            }.bind(re[0]))
        }
        var ae = document.getElementsByClassName("js-download-experiment");
        ae.length > 0 && ae[0].addEventListener("click", function (e) {
            e.preventDefault(), localStorage.setItem("download-experiment", ae[0].getAttribute("data-experiment")), window.location.href = ae[0].getAttribute("href")
        });
        var le = document.getElementsByClassName("js-direct-exp-link");
        if (le.length > 0) {
            var ce = localStorage.getItem("download-experiment");
            if (null != ce) {
                var ue;
                oe = (ue = le[0].getElementsByTagName("a")[0]).getAttribute("href").replace("{experiment}", ce);
                ue.setAttribute("href", oe), ue.click()
            } else Util.addClass(le[0], "is-hidden")
        }
    }),
    function () {
        this.FlashMessage = function (e) {
            this.element = e, this.hideClass = "hide", this.messageDuration = parseInt(this.element.getAttribute("data-duration")) || 3e3, this.triggers = document.querySelectorAll('[data-message="' + this.element.getAttribute("data-message-trigger") + '"]'), this.temeoutId = null, this.isVisible = !1, this.initFlashMessage()
        }, FlashMessage.prototype.initFlashMessage = function () {
            var e = this;
            if (e.triggers)
                for (var t = 0; t < e.triggers.length; t++) e.triggers[t].addEventListener("click", function (t) {
                    t.preventDefault(), e.showFlashMessage()
                });
            $(this.element).on("showFlashMessage", function () {
                e.showFlashMessage()
            })
        }, FlashMessage.prototype.showFlashMessage = function () {
            var e = this;
            Util.removeClass(e.element, e.hideClass), e.isVisible = !0, e.hideOtherFlashMessages(), e.messageDuration > 0 && (e.temeoutId = setTimeout(function () {
                e.hideFlashMessage()
            }, e.messageDuration))
        }, FlashMessage.prototype.hideFlashMessage = function () {
            Util.addClass(this.element, this.hideClass), this.isVisible = !1, clearTimeout(this.temeoutId), this.temeoutId = null
        }, FlashMessage.prototype.hideOtherFlashMessages = function () {
            var e = new CustomEvent("flashMessageShown", {
                detail: this.element
            });
            window.dispatchEvent(e)
        }, FlashMessage.prototype.checkFlashMessage = function (e) {
            this.isVisible && this.element != e && this.hideFlashMessage()
        };
        var e = document.getElementsByClassName("js-flash-message");
        if (e.length > 0) {
            for (var t = [], n = 0; n < e.length; n++) ! function (n) {
                t.push(new FlashMessage(e[n]))
            }(n);
            window.addEventListener("flashMessageShown", function (e) {
                t.forEach(function (t) {
                    t.checkFlashMessage(e.detail)
                })
            })
        }
    }(),
    function () {
        var e = document.getElementsByClassName("js-quote__form");
        if (e.length > 0) {
            var t = document.getElementsByClassName("js-quote--one")[0],
                n = document.getElementsByClassName("js-quote--two")[0],
                i = document.getElementsByClassName("js-quote__total")[0],
                s = document.getElementById("quoteUsersNumber"),
                o = document.getElementById("quoteBillingInfo"),
                r = document.getElementsByClassName("js-quote__billing-info")[0],
                a = document.getElementsByClassName("js-quote__tot")[0],
                l = document.getElementsByClassName("js-quote__plan")[0],
                c = n.getElementsByClassName("js-quote__back-link")[0];

            function u(e) {
                Util.toggleClass(t, "is-hidden", e), Util.toggleClass(n, "is-hidden", !e)
            }

            function d() {
                r.textContent = o.value;
                var e = isNaN(parseInt(s.value)) ? 1 : parseInt(s.value),
                    t = e > 1 ? "Team (" + e + " Users)" : "Pro";
                l.textContent = t, a.textContent = getTeamPrice(s.value)
            }
            e[0].addEventListener("submit", function (e) {
                e.preventDefault(), d(), u(!0)
            }), c.addEventListener("click", function (e) {
                e.preventDefault(), u(!1)
            }), s.addEventListener("input", function (e) {
                i.textContent = getTeamPrice(s.value)
            }), s.addEventListener("change", function (e) {
                i.textContent = getTeamPrice(s.value)
            })
        }
    }(),
    function () {
        var e = function (e) {
            var r;
            this.element = e, this.fill = this.element.getElementsByClassName("progress-bar__fill")[0], this.label = this.element.getElementsByClassName("progress-bar__value"), this.value = t(this), r = this, a && r.element.removeAttribute("data-animation"), this.animate = this.element.hasAttribute("data-animation") && "on" == this.element.getAttribute("data-animation"), this.animationDuration = this.element.hasAttribute("data-duration") ? this.element.getAttribute("data-duration") : 1e3, this.canAnimate = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype, this.ariaLabel = this.element.getElementsByClassName("js-progress-bar__aria-value"), this.changeColor = Util.hasClass(this.element, "progress-bar--color-update") && Util.cssSupports("color", "var(--color-value)"), this.changeColor && (this.colorThresholds = function (e) {
                var t = [],
                    n = 1;
                for (; !isNaN(parseInt(getComputedStyle(e.element).getPropertyValue("--progress-bar-color-" + n)));) t.push(parseInt(getComputedStyle(e.element).getPropertyValue("--progress-bar-color-" + n))), n += 1;
                return t
            }(this)),
                function (e) {
                    e.changeColor && s(e, e.value);
                    e.animate && e.canAnimate && function (e) {
                        i(e, 0), new IntersectionObserver(function (e, t) {
                            var i = this;
                            e[0].intersectionRatio.toFixed(1) > 0 && !this.animationTriggered && n(this, 0, this.value, this.animationDuration, function () {
                                o(i, "progressCompleted", i.value + "%")
                            })
                        }.bind(e), {
                            threshold: [0, .1]
                        }).observe(e.element)
                    }(e);
                    setTimeout(function () {
                        Util.addClass(e.element, "progress-bar--init")
                    }, 30), e.element.addEventListener("updateProgress", function (i) {
                        e.animationId && window.cancelAnimationFrame(e.animationId);
                        var s = i.detail.value,
                            r = i.detail.duration ? i.detail.duration : e.animationDuration,
                            a = t(e);
                        n(e, a, s, r, function () {
                            o(e, "progressCompleted", e.value + "%"), e.ariaLabel.length > 0 && (e.ariaLabel[0].textContent = s + "%")
                        })
                    })
                }(this), this.animationId = !1
        };

        function t(e) {
            return parseInt(100 * e.fill.offsetWidth / e.element.getElementsByClassName("progress-bar__bg")[0].offsetWidth)
        }

        function n(e, t, n, s, o) {
            var r = n - t,
                l = null,
                c = function (a) {
                    l || (l = a);
                    var u = a - l,
                        d = Math.easeInOutQuad(u, t, n - t, s);
                    r > 0 && d > n && (d = n), r < 0 && d < n && (d = n), i(e, d), u < s ? e.animationId = window.requestAnimationFrame(c) : (e.animationId = !1, o())
                };
            window.requestAnimationFrame && !a ? e.animationId = window.requestAnimationFrame(c) : (i(e, n), o())
        }

        function i(e, t) {
            e.fill.style.width = t + "%", e.label.length > 0 && (e.label[0].textContent = t + "%"), e.changeColor && s(e, t)
        }

        function s(e, t) {
            for (var n = "progress-bar--fill-color-" + e.colorThresholds.length, i = e.colorThresholds.length; i > 0; i--) !isNaN(e.colorThresholds[i - 1]) && t <= e.colorThresholds[i - 1] && (n = "progress-bar--fill-color-" + i);
            ! function (e) {
                var t = e.element.className.split(" ").filter(function (e) {
                    return 0 !== e.lastIndexOf("progress-bar--fill-color-", 0)
                });
                e.element.className = t.join(" ").trim()
            }(e), Util.addClass(e.element, n)
        }

        function o(e, t, n) {
            e.element.dispatchEvent(new CustomEvent(t, {
                detail: n
            }))
        }
        window.ProgressBar = e;
        var r = document.getElementsByClassName("js-progress-bar"),
            a = Util.osHasReducedMotion();
        if (r.length > 0)
            for (var l = 0; l < r.length; l++) ! function (t) {
                new e(r[t])
            }(l)
    }(),
    function () {
        var e = function (e) {
            var t;
            this.element = e, this.all = this.element.getElementsByClassName("js-checkbox-list__all")[0], this.inputs = this.element.getElementsByClassName("js-checkbox-list__input"), (t = this).element.addEventListener("change", function (e) {
                Util.is(e.target, t.all) && function (e) {
                    for (var t = e.all.checked, n = 0; n < e.inputs.length; n++) e.inputs[n].checked = t
                }(t), e.target.checked || (t.all.checked = !1)
            })
        };
        var t = document.getElementsByClassName("js-checkbox-list");
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) ! function (n) {
                new e(t[n])
            }(n)
    }(),
    function () {
        var e = function (e) {
            this.element = e, this.offsetIn = 0, this.offsetOut = 0, this.targetIn = !!this.element.getAttribute("data-target-in") && document.querySelector(this.element.getAttribute("data-target-in")), this.targetOut = !!this.element.getAttribute("data-target-out") && document.querySelector(this.element.getAttribute("data-target-out")), this.reset = 0, t(this),
                function (e) {
                    n(e), e.element.addEventListener("resize-banner", function () {
                        t(e), n(e)
                    }), e.element.addEventListener("scroll-banner", function () {
                        e.reset < 10 && (t(e), e.reset = e.reset + 1), n(e)
                    })
                }(this)
        };

        function t(e) {
            if (e.offsetIn = 0, e.targetIn) {
                var t = e.targetIn.getBoundingClientRect();
                e.offsetIn = t.top + document.documentElement.scrollTop + t.height
            }
            var n = e.element.getAttribute("data-offset-in");
            if (n && (e.offsetIn = e.offsetIn + parseInt(n)), e.offsetOut = 0, e.targetOut) {
                t = e.targetOut.getBoundingClientRect();
                e.offsetOut = t.top + document.documentElement.scrollTop - window.innerHeight
            }
            var i = e.element.getAttribute("data-offset-out");
            i && (e.offsetOut = e.offsetOut + parseInt(i))
        }

        function n(e) {
            var t = document.documentElement.scrollTop,
                n = !1,
                i = !1;
            e.offsetIn < t && (n = !0), (0 == e.offsetOut || t < e.offsetOut) && (i = !0), Util.toggleClass(e.element, "sticky-banner--visible", i && n)
        }
        var i = document.getElementsByClassName("js-sticky-banner");
        if (i.length > 0) {
            for (var s = 0; s < i.length; s++) ! function (t) {
                new e(i[t])
            }(s);
            var o = !1,
                r = !1,
                a = new CustomEvent("resize-banner"),
                l = new CustomEvent("scroll-banner");

            function c(e) {
                for (var t = 0; t < i.length; t++) ! function (t) {
                    i[t].dispatchEvent(e)
                }(t)
            }
            window.addEventListener("resize", function (e) {
                clearTimeout(o), o = setTimeout(function () {
                    c(a)
                }, 300)
            }), window.addEventListener("scroll", function (e) {
                r || (r = !0, window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                    c(l), r = !1
                }) : setTimeout(function () {
                    c(l), r = !1
                }, 200), o = setTimeout(function () {
                    c(a)
                }, 300))
            })
        }
    }(),
    function () {
        var e = document.getElementsByClassName("js-components-banner-adv");
        e.length > 0 && function (e) {
            if (COMP_NUM) {
                var t = e.innerHTML;
                t = t.replace("COMP_NUM", COMP_NUM), e.innerHTML = t
            }
        }(e[0])
    }(),
    function () {
        var e = document.getElementsByClassName("js-github-button");
        e.length > 0 && setTimeout(function () {
            Util.removeClass(e[0], "opacity-0")
        }, 300)
    }(),
    function () {
        var e, t, n = document.getElementsByClassName("js-modal--discount-login");
        n.length > 0 && (e = n[0], t = new CustomEvent("openModal"), e.dispatchEvent(t))
    }(),
    function () {
        var e = function () {
            var e;
            this.copyTargetClass = "js-copy-to-clip", this.copyStatusClass = "copy-to-clip--copied", this.resetDelay = 2e3, e = this, document.addEventListener("click", function (t) {
                var n = t.target.closest("." + e.copyTargetClass);
                n && function (e, t) {
                    navigator.clipboard.writeText(function (e) {
                        var t = e.innerHTML,
                            n = document.getElementById(e.getAttribute("aria-controls")),
                            i = e.getAttribute("data-clipboard-content");
                        return n ? t = n.innerText : i && "" != i && (t = i), t
                    }(t)).then(function () {
                        Util.addClass(t, e.copyStatusClass), setTimeout(function () {
                            Util.removeClass(t, e.copyStatusClass)
                        }, e.resetDelay);
                        var n = t.getAttribute("data-success-title");
                        n && "" != n && t.dispatchEvent(new CustomEvent("newContent", {
                            detail: n
                        })), t.dispatchEvent(new CustomEvent("contentCopied"))
                    }, function () {
                        t.dispatchEvent(new CustomEvent("contentNotCopied"))
                    })
                }(e, n)
            })
        };
        window.CopyClipboard = e, document.getElementsByClassName("js-copy-to-clip").length > 0 && new e
    }(),
    function () {
        this.SignUp = function (e) {
            this.element = e, this.form = this.element.find(".js-signup-form"), this.submitBtn = this.element.find(".js-signup-form__submit"), this.submitBtnFree = this.element.find(".js-signup-form__submit--free"), this.submitBtnPro = this.element.find(".js-signup-form__submit--pro"), this.planSelection = this.element.find(".js-signup-form__plan-selection"), this.planSelected = this.planSelection.find('.js-account-select__item[aria-checked="true"]').attr("data-plan"), this.proSections = this.element.find(".js-signup-form__pro-details"), this.freeSections = this.element.find(".js-signup-form_newsletter"), this.teamSeats = this.planSelection.find(".js-signup-form__team-seats"), this.teamPrice = this.element.find(".js-signup-form__account-price"), this.teamPriceDiscounted = this.element.find(".js-signup-form__account-price-discounted"), this.unlimitedPlan = this.element.find('.js-account-select__item[data-plan="unlimited"]'), this.unlimitedTeamSeats = this.unlimitedPlan.find(".js-signup-form__team-seats"), this.unlimitedTeamPrice = this.unlimitedPlan.find(".js-signup-form__unlimited-price"), this.priceDetails = [this.element.find(".js-signup-form__price--basic"), this.element.find(".js-signup-form__price--vat"), this.element.find(".js-signup-form__price--total")], this.labelSeats = this.element.find(".js-signup-form__label-seats"), this.requiredFields = this.element.find(".js-signup-form__required"), this.vatSections = this.element.find(".js-signup-form__vat-details"), this.vat = 0, this.vatId = "", this.addVat = !1, this.vatPercField = this.element.find(".js-signup-form__vat-precentage"), this.vatValidationButton = this.element.find(".js-signup-form__vat-validate"), this.vatValidationSuccess = !1, this.italySection = this.element.find(".js-it-fields"), this.userEmail = this.element.find("#accountEmail"), this.userPassword = this.element.find("#inputPassword"), this.userCountry = this.element.find("#accountCountry"), this.userBilling = this.element.find("#accountBillingInfo"), this.userVat = this.element.find("#vatNumber"), this.stripeToken = this.element.find("#stripeToken"), this.stripeCountry = this.element.find("#stripeCountry"), this.userNewsletter = this.element.find("#newsletterCheck"), this.frontToken = this.element.find("#frontToken"), this.codiceFiscale = this.element.find("#codiceFiscale"), this.codiceDestinatario = this.element.find("#codiceDestinatario"), this.fullName = this.element.find("#fullName"), this.companyName = this.element.find("#companyName"), this.address = this.element.find("#address"), this.zipCode = this.element.find("#zipCode"), this.freeUpgrade = this.element.find("#freeUpgrade"), this.paymentErrorMessage = this.element.find(".js-alert--payment-error"), this.accountErrorMessage = this.element.find(".js-alert--account-error"), this.cardErrorMessage = this.element.find(".js-alert--card-error"), this.stripeElement = this.element.find(".js-stripe-element"), this.alertMessage = this.element.find(".js-form-alert"), this.submitting = !1, this.refundMessage = this.element.find(".js-refund-message"), this.initSignUp(), this.initSignEvents(), this.form.hasClass("js-signup-form--become-pro") && this.planSelection.find('.js-account-select__item[data-plan="unlimited-individual"]').trigger("click")
        }, SignUp.prototype.initSignUp = function () {
            this.resetFormFields(), this.resetPrice(), this.resetTeamPrice(!1)
        }, SignUp.prototype.initSignEvents = function () {
            var e = this;
            this.planSelection.on("click", function (t) {
                t.preventDefault();
                var n = $(t.target).closest(".js-account-select__item");
                0 != n.length && (e.planSelected = n.attr("data-plan"), e.resetUi(n), e.resetPrice(), e.resetFormFields())
            }), this.unlimitedTeamSeats.on("change", function (t) {
                var n = e.unlimitedTeamSeats.val();
                (isNaN(n) || n < 1) && e.unlimitedTeamSeats.val(1), e.resetPrice(), e.labelSeats.toggleClass("is-hidden", n < 2)
            }), this.userEmail.on("change", function (t) {
                var n = e.userEmail.val();
                if (! function (e) {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
                }(n)) return pe(e.userEmail, 3, !0), !1;
                ! function (e, t) {
                    ge("checkEmailAvailability", {
                        email: e
                    }, function () {
                        t(!0)
                    }, function () {
                        t(!1)
                    })
                }(n, function (t) {
                    pe(e.userEmail, 1, !t)
                })
            }), this.userPassword.on("change", function (t) {
                pe(e.userPassword, 1, !me(e.userPassword.val()))
            }), this.requiredFields.on("focus", function (e) {
                be($(this))
            }), this.form.on("submit", function (t) {
                t.preventDefault(), e.submitForm()
            }), this.form.on("submitForm", function (t) {
                e.paymentProcess("complete")
            }), this.form.on("actionRequiredSuccess", function (t) {
                e.paymentProcess("completed")
            }), this.form.on("showCardError", function (t) {
                he(e.paymentErrorMessage, !0), e.submitBtn.removeClass("btn-states--state-b"), he(e.cardErrorMessage, !0)
            }), this.userCountry.on("change", function (t) {
                e.resetVat(), e.resetCountryField()
            }), this.vatValidationButton.on("click", function (t) {
                e.vatValidationSuccess || e.validateVatNumber()
            }), this.userVat.on("input", function (t) {
                e.vatValidationSuccess && e.resetVat()
            })
        }, SignUp.prototype.resetUi = function (e) {
            e.attr({
                "aria-checked": "true",
                tabindex: "0"
            }), e.siblings().attr({
                "aria-checked": "false",
                tabindex: "-1"
            })
        }, SignUp.prototype.resetFormFields = function () {
            var e = "free" == this.planSelected;
            this.proSections.toggleClass("is-hidden", e), this.submitBtnPro.toggleClass("is-hidden", e), this.freeSections.toggleClass("is-hidden", !e), this.submitBtnFree.toggleClass("is-hidden", !e), this.refundMessage.toggleClass("is-hidden", e)
        }, SignUp.prototype.resetPrice = function () {
            var e = this.planSelected,
                t = 0;
            "free" == e ? t = 0 : "unlimited-individual" == e ? t = getTeamPrice(1) : (t = getTeamPrice(this.unlimitedTeamSeats.val()), this.resetTeamPrice(t));
            var n = this.getVat(),
                i = parseFloat((Math.round(t * n) / 100).toFixed(2));
            this.priceDetails[0].text((1 * t).toFixed(2)), this.priceDetails[1].text((1 * i).toFixed(2)), this.priceDetails[2].text((1 * (t + i)).toFixed(2))
        }, SignUp.prototype.resetTeamPrice = function (e) {
            var t = e || getTeamPrice(this.unlimitedTeamSeats.val());
            this.unlimitedTeamPrice.text(t)
        }, SignUp.prototype.checkVatCountry = function () {
            VAT_RATES[this.userCountry.val()] ? (this.setVat(), this.toggleValidateBtn()) : this.removeVat()
        }, SignUp.prototype.setVat = function () {
            this.vat = parseInt(VAT_RATES[this.userCountry.val()].percentage), this.vatId = VAT_RATES[this.userCountry.val()].id, this.addVat = !0, this.resetVatAppearance()
        }, SignUp.prototype.removeVat = function () {
            this.vat = 0, this.vatId = "", this.addVat = !1, this.resetVatAppearance()
        }, SignUp.prototype.validateVatNumber = function () {
            var e = this;
            this.resetValidateVatBtn(!1), this.vatValidationButton.addClass("btn-states--state-b"), pe(this.userVat, 1, !1), ge("validateVat", "vat=" + e.userVat.val(), function (t) {
                t.response ? (e.vatValidationButton.removeClass("btn-states--state-b"), e.resetValidateVatBtn(!0), e.deduceVat(), e.vatValidationSuccess = !0) : (e.vatValidationButton.removeClass("btn-states--state-b"), pe(e.userVat, 1, !0))
            }, function (t) {
                e.vatValidationButton.removeClass("btn-states--state-b"), pe(e.userVat, 1, !0)
            })
        }, SignUp.prototype.deduceVat = function () {
            this.vat = 0, this.vatId = "", this.addVat = !0, this.resetVatAppearance()
        }, SignUp.prototype.resetVat = function () {
            this.vatValidationSuccess = !1, this.resetValidateVatBtn(!1), this.checkVatCountry()
        }, SignUp.prototype.resetValidateVatBtn = function (e) {
            this.vatValidationButton.toggleClass("btn-states--state-c color-white bg-success", e)
        }, SignUp.prototype.resetVatAppearance = function () {
            this.vatSections.toggleClass("is-hidden", !this.addVat), this.vatPercField.text(this.vat), this.resetPrice()
        }, SignUp.prototype.toggleValidateBtn = function () {
            this.vatValidationButton.toggleClass("is-hidden", COMPANY_CN == this.userCountry.val())
        }, SignUp.prototype.getVat = function () {
            return this.vat
        }, SignUp.prototype.resetCountryField = function () {
            this.italySection.toggleClass("is-hidden", "it" != this.userCountry.val().toLowerCase())
        }, SignUp.prototype.submitForm = function () {
            if (!this.submitting) {
                this.submitting = !0;
                he(this.paymentErrorMessage, !1), he(this.accountErrorMessage, !1), he(this.cardErrorMessage, !1), this.submitBtn.addClass("btn-states--state-b"), this.alertMessage.removeClass("alert--is-visible"), "free" == (this.planSelected ? this.planSelected : "free") ? this.paymentProcess(!1) : this.stripeElement.trigger("createCardToken")
            }
        }, SignUp.prototype.paymentProcess = function (e) {
            var t = this,
                n = t.planSelected ? t.planSelected : "free",
                i = "unlimited-individual" == n ? 1 : t.unlimitedTeamSeats.val();
            ge("signupUnlimited", {
                user_email: t.userEmail.val(),
                user_password: t.userPassword.val(),
                user_country: t.userCountry.val(),
                user_billing: t.userBilling.val(),
                user_vat: t.userVat.val(),
                stripe_token: t.stripeToken.val(),
                stripe_country: t.stripeCountry.val(),
                team_seats: i,
                plan: n,
                discount: !1,
                frontToken: t.frontToken.val(),
                vat_id: t.vatId,
                codice_fiscale: t.codiceFiscale.val(),
                codice_destinatario: t.codiceDestinatario.val(),
                full_name: t.fullName.val(),
                company_name: t.companyName.val(),
                address: t.address.val(),
                zip_code: t.zipCode.val(),
                free_upgrade: t.freeUpgrade.val(),
                status_process: e,
                newsletter: t.userNewsletter.is(":checked")
            }, function (e) {
                location.href = e.response, t.submitting = !1
            }, function (e) {
                if (console.log("payment submitted, status ", e.status), console.log(e), 1 == e.status) {
                    var n, i = e.response,
                        s = -1 != i.indexOf("user_email_1"),
                        o = -1 != i.indexOf("user_email_2"),
                        r = -1 != i.indexOf("user_email_3");
                    if (s || o || r) s ? n = 1 : o ? n = 2 : r && (n = 3), pe(t.userEmail, n, !0);
                    else pe(t.userEmail, 1, !1);
                    var a = -1 != i.indexOf("user_password_1"),
                        l = -1 != i.indexOf("user_password_2");
                    a || l ? (a ? n = 1 : l && (n = 2), pe(t.userPassword, n, !0)) : pe(t.userPassword, 1, !1), pe(t.userCountry, 1, -1 != i.indexOf("user_country")), pe(t.codiceFiscale, 1, -1 != i.indexOf("codice_fiscale")), pe(t.fullName, 1, -1 != i.indexOf("full_name")), pe(t.zipCode, 1, -1 != i.indexOf("zip_code")), pe(t.address, 1, -1 != i.indexOf("address")), t.alertMessage.addClass("alert--is-visible"), ve(t.alertMessage.offset().top - 10), t.submitBtn.removeClass("btn-states--state-b")
                } else 3 == e.status ? t.stripeElement.trigger("requireAction", [e.response]) : ("free" == t.planSelected ? he(t.accountErrorMessage, !0) : he(t.paymentErrorMessage, !0), t.submitBtn.removeClass("btn-states--state-b"));
                t.submitting = !1
            })
        };
        var e, t = $(".js-signup-form-wrapper");
        t.length > 0 && (e = new SignUp(t.eq(0)));
        var n, i = $(".js-signup-form__country");
        if (i.length > 0) {
            var s = !1;
            i.on("change", function (e) {
                s = !0
            }), n = function (e) {
                !s && i.find('option[value="' + e + '"]') && (i.val(e), i.trigger("change"))
            }, ge("detectLocation", "", function (e) {
                e.response && n(e.response.toUpperCase())
            }, function (e) { })
        }
        var o = document.getElementsByClassName("js-stripe-element");
        if (o.length > 0) {
            var r = {
                base: {
                    color: "#14151a",
                    fontSize: "20px",
                    fontWeight: "400",
                    fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, sans-serif",
                    "::placeholder": {
                        color: "#a2a2a9"
                    }
                },
                invalid: {
                    color: "#e70d4f"
                }
            },
                a = {
                    base: {
                        color: "#cfcfd3",
                        fontSize: "20px",
                        fontWeight: "400",
                        fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, sans-serif",
                        "::placeholder": {
                            color: "#65656c"
                        }
                    },
                    invalid: {
                        color: "#f61e5f"
                    }
                },
                l = Stripe(STRIPE_PB);
            if (O = document.getElementById("card-element")) {
                var c = l.elements();
                if (document.querySelector('html[data-theme="dark"]')) var u = c.create("card", {
                    hidePostalCode: !0,
                    style: a
                });
                else u = c.create("card", {
                    hidePostalCode: !0,
                    style: r
                });
                u.mount("#card-element"), o[0].addEventListener("themeChanged", function (e) {
                    "light" == e.detail ? u.update({
                        style: r
                    }) : u.update({
                        style: a
                    })
                })
            }
            $(o[0]).on("createCardToken", function (t) {
                l.createToken(u).then(function (t) {
                    t.token ? function (e) {
                        console.log(e.id);
                        var t = document.getElementById("stripeToken");
                        t.value = e.id, document.getElementById("stripeCountry").value = e.card.country, $(t.closest("form")).trigger("submitForm")
                    }(t.token) : ($(o[0].closest("form")).trigger("showCardError"), e && (e.submitting = !1))
                })
            }), $(o[0]).on("requireAction", function (e, t) {
                l.handleCardPayment(t).then(function (e) {
                    e.error ? (console.log("card required action; result ", e.error), $(o[0].closest("form")).trigger("showCardError")) : $(document.getElementById("stripeToken").closest("form")).trigger("actionRequiredSuccess")
                })
            }), $(o[0]).on("updateCard", function (e, t) {
                l.handleCardSetup(t, u).then(function (e) {
                    e.error ? $(o[0].closest(".js-update-card-form")).trigger("showError") : $(o[0].closest(".js-update-card-form")).trigger("showSuccess", [e.setupIntent.payment_method])
                })
            })
        }
        this.AccountUpdate = function (e) {
            this.element = e, this.alerts = this.element.siblings(".js-account-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.userName = this.element.find("#accountName"), this.userEmail = this.element.find("#accountEmail"), this.userOldPassword = this.element.find("#oldPassword"), this.userNewPassword = this.element.find("#newPassword"), this.submitButton = this.element.find(".js-account-form__submit"), this.accountForm = this.userName.length > 0, this.initEvents()
        }, AccountUpdate.prototype.initEvents = function () {
            var e = this;
            this.element.on("submit", function (t) {
                t.preventDefault(), he(e.alertSuccess, !1), he(e.alertError, !1), e.submitButton.addClass("btn-states--state-b"), e.accountForm ? e.updateDetails() : e.updatePassword()
            }), this.element.on("focus", "input", function (e) {
                be($(e.target))
            }), this.element.on("change", "input", function (e) {
                we.yes()
            })
        }, AccountUpdate.prototype.updateDetails = function () {
            var e = this;
            ge("saveAccount", e.element.serialize(), function (t) {
                p(e)
            }, function (t) {
                var n, i = -1 != t.response.indexOf("email_1"),
                    s = -1 != t.response.indexOf("email_2"),
                    o = -1 != t.response.indexOf("email_3");
                i || s || o ? (i ? n = 1 : s ? n = 2 : o && (n = 3), pe(e.userEmail, n, !0)) : pe(e.userEmail, 1, !1);
                pe(e.userName, 1, -1 != t.response.indexOf("name_1")), m(e)
            })
        }, AccountUpdate.prototype.updatePassword = function () {
            var e = this;
            ge("savePassword", e.element.serialize(), function (t) {
                p(e)
            }, function (t) {
                var n = -1 != t.response.indexOf("old_pass_1"),
                    i = -1 != t.response.indexOf("old_pass_2");
                pe(e.userOldPassword, 1, !(!n && !i));
                var s = -1 != t.response.indexOf("new_pass_1"),
                    o = -1 != t.response.indexOf("new_pass_2");
                pe(e.userNewPassword, 1, !(!s && !o)), m(e)
            })
        };
        var d = $(".js-account-form");
        d.length > 0 && new AccountUpdate(d.eq(0));
        var f = $(".js-billing-email-form");

        function p(e) {
            ve(), he(e.alertSuccess, !0), we.no(), e.submitButton.removeClass("btn-states--state-b")
        }

        function m(e) {
            ve(), he(e.alertError, !0), e.submitButton.removeClass("btn-states--state-b")
        }
        f.length > 0 && new function (e) {
            this.element = e, this.alerts = $(".js-account-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.submitButton = this.element.find(".js-billing-form__submit"), this.userEmail = this.element.find("#billingEmail"), this.billingInfo = this.element.find("#billingInfo"), this.fullName = this.element.find("#accountFullName"), this.companyName = this.element.find("#accountCompanyName"), this.zipCode = this.element.find("#accountZip"), this.address = this.element.find("#accountAddress"), t = this, t.element.on("submit", function () {
                event.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), t.userEmail.length > 0 ? function (e) {
                    pe(e.userEmail, 1, !1), ge("saveBillingEmail", e.element.serialize(), function (t) {
                        p(e)
                    }, function (t) {
                        var n, i = -1 != t.response.indexOf("email_1"),
                            s = -1 != t.response.indexOf("email_2");
                        i || s ? (i ? n = 1 : s && (n = 2), pe(e.userEmail, n, !0)) : pe(e.userEmail, 1, !1), m(e)
                    })
                }(t) : function (e) {
                    ge("saveBillingInfo", e.element.serialize(), function (t) {
                        p(e)
                    }, function (t) {
                        pe(e.fullName, 1, -1 != errors.indexOf("full_name")), pe(e.zipCode, 1, -1 != errors.indexOf("zipCode")), pe(e.address, 1, -1 != errors.indexOf("address")), m(e)
                    })
                }(t)
            }), t.userEmail.length > 0 && t.userEmail.on("change", function (e) {
                we.yes()
            }), t.billingInfo.length > 0 && t.billingInfo.on("change", function (e) {
                we.yes()
            });
            var t
        }(f.eq(0)), this.Login = function (e) {
            this.element = e, this.errorMessage = this.element.siblings(".js-alert--error"), this.userEmail = this.element.find("#loginEmail"), this.userPassword = this.element.find("#loginPassword"), this.submitButton = this.element.find(".js-login-form__submit"), this.isModal = this.element.parents(".js-modal").length > 0, this.redirectInput = this.element.find(".js-login-redirect"), this.callbackType = !1, this.loginInit()
        }, Login.prototype.loginInit = function () {
            var e = this;
            this.element.on("submit", function (t) {
                t.preventDefault(), he(e.errorMessage, !1), e.submitButton.addClass("btn-states--state-b"), e.login()
            }), this.element.on("focus", "input", function (e) {
                be($(e.target))
            }), this.element.on("loginModal", function (t, n) {
                e.callbackType = n
            })
        }, Login.prototype.login = function () {
            var e = this;
            return ge("login", e.element.serialize(), function (t) {
                e.callbackType ? $(e.callbackType).is(".js-bookmark__btn") ? location.reload() : $(e.callbackType).is(".js-globals-save-code") && location.reload() : e.redirectInput && "" != e.redirectInput.val() ? location.href = e.redirectInput.val() : location.href = "ds/components"
            }, function (t) {
                1 == t.status && (-1 != t.response.indexOf("email") && pe(e.userEmail, 1, !0), -1 != t.response.indexOf("password") && pe(e.userPassword, 1, !0)), 2 != t.status && 3 != t.status || (ve(), he(e.errorMessage, !0)), 4 == t.status && (location.href = "log-in?logged-out=true"), e.submitButton.removeClass("btn-states--state-b")
            }), !1
        };
        var h = $(".js-login-form");
        h.length > 0 && new Login(h.eq(0)), this.ResetPassword = function (e) {
            this.element = e, this.alerts = this.element.siblings(".js-reset-password-form-alert"), this.successMessage = this.alerts.find(".js-alert--success"), this.errorMessage = this.alerts.find(".js-alert--error"), this.userEmail = this.element.find("#loginEmail"), this.submitButton = this.element.find(".js-reset-password-form__submit"), this.resetInit()
        }, ResetPassword.prototype.resetInit = function () {
            var e = this;
            this.element.on("submit", function (t) {
                t.preventDefault(), he(e.errorMessage, !1), he(e.successMessage, !1), pe(e.userEmail, 1, !1), e.submitButton.addClass("btn-states--state-b"), e.reset()
            })
        }, ResetPassword.prototype.reset = function () {
            var e = this;
            return ge("resetPassword", e.element.serialize(), function (t) {
                ve(), he(e.successMessage, !0), e.submitButton.removeClass("btn-states--state-b")
            }, function (t) {
                1 == t.status && pe(e.userEmail, 1, !0), 2 == t.status && pe(e.userEmail, 2, !0), 3 == t.status && (ve(), he(e.errorMessage, !0)), e.submitButton.removeClass("btn-states--state-b")
            }), !1
        };
        var g = $(".js-reset-password-form");
        g.length > 0 && new ResetPassword(g.eq(0)), this.ResetPasswordConfirm = function (e) {
            this.element = e, this.errorMessage = this.element.siblings(".js-alert--error"), this.newPassword = this.element.find("#newPassword"), this.submitButton = this.element.find(".js-reset-pass-confirm-form__submit"), this.resetConfirmInit()
        }, ResetPasswordConfirm.prototype.resetConfirmInit = function () {
            var e = this;
            this.element.on("submit", function (t) {
                t.preventDefault(), he(e.errorMessage, !1), pe(e.newPassword, 1, !1), e.submitButton.addClass("btn-states--state-b"), e.savePassword()
            })
        }, ResetPasswordConfirm.prototype.savePassword = function () {
            var e = this;
            return ge("resetPasswordConfirm", e.element.serialize(), function (e) {
                location.href = "account/account-settings?reset_password_success"
            }, function (t) {
                2 == t.status && pe(e.newPassword, 1, !0), 3 == t.status && (ve(), he(e.errorMessage, !0)), e.submitButton.removeClass("btn-states--state-b")
            }), !1
        };
        var v = $(".js-reset-pass-confirm-form");
        v.length > 0 && new ResetPasswordConfirm(v.eq(0));
        var b = document.getElementsByClassName("js-account-teams-form");
        if (b.length > 0) {
            new function (e) {
                var t;
                this.element = e, this.alerts = this.element.siblings(".js-account-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.teamName = this.element.find("#teamName"), this.submitButton = this.element.find(".js-team-form__submit"), (t = this).element.on("submit", function (e) {
                    e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"),
                        function (e) {
                            ge("saveTeamInfo", e.element.serialize(), function (t) {
                                p(e)
                            }, function (t) {
                                pe(e.teamName, 1, -1 != t.response.indexOf("name_1")), m(e)
                            })
                        }(t)
                }), t.teamName.on("change", function (e) {
                    we.yes()
                })
            }($(b[0]));
            var y = document.getElementById("searchUser"),
                w = $(b[0]).find(".js-team-members__member");

            function C() {
                var e = y.value.toLowerCase();
                "" != e ? (w.addClass("is-hidden"), w.filter(function () {
                    return -1 != $(this).attr("data-name").toLowerCase().indexOf(e) || -1 != $(this).attr("data-email").toLowerCase().indexOf(e)
                }).removeClass("is-hidden")) : w.removeClass("is-hidden")
            }
            y.addEventListener("keyup", function (e) {
                C()
            }), y.addEventListener("search", function (e) {
                C()
            }), $(b).on("click", ".js-delete-user", function (e) {
                e.preventDefault(), e.currentTarget.closest(".js-team-members__member").remove(), we.yes()
            })
        }
        var E = document.getElementsByClassName("js-downgrade-form");
        E.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = this.element.siblings(".js-downgrade-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.alertNeedUpgrade = this.element.find(".js-alert--upgrade-error"), this.alertNeedRemove = this.element.find(".js-alert--account-error"), this.teamSeats = this.element.find("#teamSeats"), this.teamMinSeats = parseInt(this.teamSeats.attr("min")), this.teamMaxSeats = parseInt(this.teamSeats.attr("max")), this.recapPlan = this.element.find(".js-recap__seats"), this.recapPrice = this.element.find(".js-recap__price"), this.submitButton = this.element.find(".js-downgrade-form__submit"), (t = this).teamSeats.on("input", function (e) {
                var n = t.teamSeats.val();
                ("" == n || isNaN(n)) && (n = t.teamMaxSeats, t.teamSeats.val(n));
                var i = (n = parseInt(n)) < t.teamMinSeats,
                    s = n > t.teamMaxSeats;
                t.alertNeedUpgrade.toggleClass("alert--is-visible", s), t.alertNeedRemove.toggleClass("alert--is-visible", i), t.alertNeedRemove.find(".js-remove-members").text(t.teamMinSeats - n).end().find(".js-final-members").text(n), i || s || function (e) {
                    var t = e.teamSeats.val();
                    e.recapPlan.text(t), e.recapPrice.text(getTeamMembershipPrice(t))
                }(t), we.yes()
            }), t.element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b");
                var n = t.teamSeats.val();
                n <= t.teamMaxSeats && n >= t.teamMinSeats ? function (e) {
                    ge("downgradeTeam", e.element.serialize(), function (t) {
                        p(e), we.no()
                    }, function (t) {
                        ve(), m(e), we.no()
                    })
                }(t) : (t.submitButton.removeClass("btn-states--state-b"), ve(t.teamSeats.offset().top), we.no())
            })
        }($(E[0]));
        var x = $(".js-remove-team-downgrade");
        if (x.length > 0) {
            var j = x.parents(".js-dynamic-content");
            x.on("click", function (e) {
                e.preventDefault(), j.addClass("dynamic-content--is-loading"), ge("cancelDowngradeTeam", "", function (e) {
                    location.reload()
                }, function (e) {
                    ve(), j.removeClass("dynamic-content--is-loading"), he($(".js-alert--error"), !0)
                })
            })
        }

        function _(e, t) {
            var n = t ? "&3dver=verified" : "";
            ge("upgradeTeamUnlimited", e.element.serialize() + n, function (t) {
                p(e), we.no()
            }, function (t) {
                2 == t.status ? e.stripeElement.trigger("requireAction", [t.response]) : (ve(), m(e)), we.no()
            })
        }
        var k = document.getElementsByClassName("js-upgrade-form");
        k.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = this.element.siblings(".js-upgrade-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.unlimitedTeamSeats = this.element.find("#teamSeats"), this.teamMinSeats = parseInt(START_SEATS) + 1, this.recapTot = this.element.find(".js-recap__tot"), this.stripeElement = this.element.find(".js-stripe-element"), this.submitButton = this.element.find(".js-upgrade-form__submit"), (t = this).unlimitedTeamSeats.on("input", function (e) {
                var n = t.unlimitedTeamSeats.val();
                ("" == n || isNaN(n)) && (n = t.teamMinSeats, t.unlimitedTeamSeats.val(n));
                var i = (n = parseInt(n)) < t.teamMinSeats - 1;
                i || function (e) {
                    var t = e.unlimitedTeamSeats.val(),
                        n = Math.round(100 * (getTeamPrice(t) - getTeamPrice(START_SEATS))) / 100;
                    e.recapTot.text(n)
                }(t), we.yes()
            }), t.element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b");
                var n = t.unlimitedTeamSeats.val();
                n >= t.teamMinSeats ? t.stripeElement.trigger("createCardToken") : (t.submitButton.removeClass("btn-states--state-b"), ve(t.unlimitedTeamSeats.offset().top), we.no())
            }), t.element.on("showCardError", function (e) {
                t.submitButton.removeClass("btn-states--state-b"), ve(), m(t)
            }), t.element.on("actionRequiredSuccess", function (e) {
                _(t, !0)
            }), t.element.on("submitForm", function (e) {
                _(t, !1)
            })
        }($(k[0]));

        function S(e, t) {
            var n = t ? "&3dver=verified" : "";
            ge("purchaseExtLicense", e.element.serialize() + n, function (e) {
                location.href = "account/account-settings?extended-license=success"
            }, function (t) {
                2 == t.status ? $(".js-stripe-element").trigger("requireAction", [t.response]) : (ve(), m(e)), we.no()
            })
        }
        var N = document.getElementsByClassName("js-extended-license-form");
        N.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = this.element.siblings(".js-license-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.product = this.element.find("#product"), this.typesList = this.element.find(".js-extended-options"), this.recapTot = this.element.find(".js-recap__tot"), this.stripeElement = this.element.find(".js-stripe-element"), this.submitButton = this.element.find(".js-extended-license-form__submit"), (t = this).typesList.on("change", function (e) {
                t.recapTot.text(JSON.parse(EXTENDED_TYPE)[e.target.value].price)
            }), t.element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), t.stripeElement.trigger("createCardToken")
            }), t.element.on("showCardError", function (e) {
                ve(), m(t)
            }), t.element.on("actionRequiredSuccess", function (e) {
                S(t, !0)
            }), t.element.on("submitForm", function (e) {
                S(t, !1)
            })
        }($(N[0]));

        function T(e, t) {
            var n = t ? "&3dver=verified" : "";
            ge("upgradeUnlimited", e.element.serialize() + n, function (e) {
                location.href = "account/account-settings?unlimited-account=success"
            }, function (t) {
                2 == t.status ? $(".js-stripe-element").trigger("requireAction", [t.response]) : (ve(), m(e)), we.no()
            })
        }
        var A = document.getElementsByClassName("js-upgrade-unlimited-form");
        A.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = $(".js-upgrade-unlimited-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.submitButton = this.element.find(".js-upgrade-unlimited-form__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), T(t, !1)
            }), t.element.on("showCardError", function (e) {
                ve(), m(t)
            }), t.element.on("actionRequiredSuccess", function (e) {
                T(t, !0)
            })
        }($(A[0]));
        var I = document.getElementsByClassName("js-invite-members");
        I.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = this.element.siblings(".js-account-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.members = this.element.find("#teamEmails"), this.submitButton = this.element.find(".js-invite-members__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"),
                    function (e) {
                        ge("inviteTeamMembers", e.element.serialize(), function (t) {
                            p(e)
                        }, function (t) {
                            pe(e.teamName, 1, -1 != t.response.indexOf("name_1")), m(e)
                        })
                    }(t)
            }), t.members.on("change", function (e) {
                we.yes()
            })
        }($(I[0]));
        var L = document.getElementsByClassName("js-join-team");
        L.length > 0 && new function (e) {
            var t;
            this.element = e, this.alertError = $(".js-join-team-alert"), this.password = this.element.find("#inputPassword"), this.submitButton = this.element.find(".js-join-team__submit"), (t = this).password.on("change", function (e) {
                pe(t.password, 1, !me(t.password.val()))
            }), t.element.on("submit", function (e) {
                e.preventDefault(), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), ge("joinTeam", t.element.serialize(), function (e) {
                    location.href = e.response
                }, function (e) {
                    -1 != e.response.indexOf("user_password_1") ? pe(t.password, 1, !0) : -1 != e.response.indexOf("user_password_2") && pe(t.password, 2, !0), m(t)
                })
            })
        }($(L[0]));
        var B = document.getElementsByClassName("js-leave-team");
        if (B.length > 0)
            for (var M = 0; M < B.length; M++) ! function (e) {
                var t;
                (t = B[e]).addEventListener("click", function (e) {
                    e.preventDefault(), window.confirm("Are you sure you want to leave " + t.getAttribute("data-label") + "?") && ge("leaveTeam", "teamID=" + t.getAttribute("data-team"), function (e) {
                        location.href = "account/account-settings"
                    }, function (e) {
                        ve(), he($(".js-alert--error"), !0)
                    })
                })
            }(M);
        var D = document.getElementsByClassName("js-show-card-info");
        if (D.length > 0) {
            Util.addClass(D[0], "btn-states--state-b");
            var O = document.getElementsByClassName("js-card-info-wrapper")[0];
            ge("showCreditCard", "", function (e) {
                Util.removeClass(O, "is-hidden"), Util.addClass(D[0], "is-hidden"), O.innerHTML = "**** **** **** " + e.response.last4 + " <br>Expires " + e.response.exp_month + "/" + e.response.exp_year + " <br>"
            }, function (e) {
                Util.removeClass(O, "is-hidden"), Util.removeClass(D[0], "btn-states--state-b"), Util.addClass(D[0], "is-hidden"), O.innerHTML = "<p>We were not able to retrieve your card info. Please contact us at help@codyhouse.co if the problem persists.</p>"
            })
        }
        var F = document.getElementsByClassName("js-cancel-form");
        F.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = $(".js-cancel-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.submitButton = this.element.find(".js-cancel-form__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), ge("cancelAccount", "", function (e) {
                    p(t)
                }, function (e) {
                    m(t)
                })
            })
        }($(F[0]));
        var U = document.getElementsByClassName("js-reactivate-form");
        U.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = $(".js-reactivate-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.submitButton = this.element.find(".js-reactivate-form__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), ge("reactivateAccount", "", function (e) {
                    p(t)
                }, function (e) {
                    m(t)
                })
            })
        }($(U[0]));
        var R = document.getElementsByClassName("js-update-card-form");
        R.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = $(".js-update-card-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.alertCardError = this.element.find(".js-alert--card-error"), this.stripeElement = this.element.find(".js-stripe-element"), this.stripeIntent = this.element.find("#intent"), this.submitButton = this.element.find(".js-update-card-form__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault(), he(t.alertSuccess, !1), he(t.alertError, !1), he(t.alertCardError, !1), t.submitButton.addClass("btn-states--state-b"), t.stripeElement.trigger("updateCard", [t.stripeIntent.attr("data-secret")])
            }), t.element.on("showError", function (e) {
                m(t), he(t.alertCardError, !0)
            }), t.element.on("showSuccess", function (e, n) {
                ! function (e, t) {
                    ge("updateCard", "intent=" + t, function (t) {
                        p(e)
                    }, function (t) {
                        m(e)
                    })
                }(t, n)
            })
        }($(R[0]));
        var P = function (e) {
            this.element = e, this.popup = this.element.closest(".js-popover"), this.renameModal = document.getElementById("modal-rename-project"), this.renameModal && (this.form = this.renameModal.getElementsByClassName("js-rename-project"), this.input = document.getElementById("update-project-name"), this.submitBtn = this.renameModal.getElementsByClassName("js-rename-project__submit"), this.alertError = this.renameModal.getElementsByClassName("js-alert--error")[0], function (e) {
                if (e.form.length < 1) return;
                e.element.addEventListener("click", function (t) {
                    t.preventDefault(),
                        function (e) {
                            e.id = e.popup.getAttribute("data-prj-id"), e.label = e.popup.getAttribute("data-prj-label"), e.input.value = e.label
                        }(e), e.renameModal.dispatchEvent(new Event("openModal")), e.input.select(), e.popup.dispatchEvent(new Event("closePopover"))
                }), e.form[0].addEventListener("submit", function (t) {
                    t.preventDefault(),
                        function (e) {
                            var t = e.input.value.trim();
                            "" == t && (t = "Untitled");
                            e.submitBtn[0].classList.add("btn-states--state-b"), he($(e.alertError), !1), ge("editProject", "projectName=" + t + "&project_id=" + e.id, function (e) {
                                location.reload()
                            }, function (t) {
                                e.submitBtn[0].classList.remove("btn-states--state-b"), he($(e.alertError), !0)
                            })
                        }(e)
                })
            }(this))
        };
        var q = document.getElementsByClassName("js-project-modify");
        if (q.length > 0)
            for (M = 0; M < q.length; M++) ! function (e) {
                new P(q[e])
            }(M);
        window.EditProject = P;
        var H = function (e) {
            var t;
            this.element = e, this.alerts = this.element.siblings(".js-account-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.label = this.element.find("#project-name"), this.submitButton = this.element.find(".js-create-prj-form__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault();
                var n = t.label.val();
                "" == n && (n = "Untitled"), he(t.alertError, !1), t.submitButton.addClass("btn-states--state-b"), ge("createProject", "new-label=" + n, function (e) {
                    cdSetCookie("projectCreated", "created"), location.href = "ds/components"
                }, function (e) {
                    m(t)
                })
            })
        };
        var W = document.getElementsByClassName("js-create-project");
        if (W.length > 0)
            for (M = 0; M < W.length; M++) ! function (e) {
                new H($(W[e]))
            }(M);

        function z(e) {
            e.addEventListener("click", function (t) {
                t.preventDefault(), 1 == IS_FREE ? proRequiredModalStart(t.currentTarget) : window.confirm("Are you sure you want to delete the project " + e.getAttribute("data-label") + "?") && function (e) {
                    ge("deleteProject", "project_id=" + e.closest(".js-popover").getAttribute("data-prj-id"), function (e) {
                        location.href = "ds/all-projects"
                    }, function (e) {
                        location.href = "ds/all-projects"
                    })
                }(e)
            })
        }
        cdGetCookie("projectCreated") && ($(".js-flash-message--create-prj").trigger("showFlashMessage"), cdDeleteCookie("projectCreated"));
        var V = document.getElementsByClassName("js-delete-project");
        if (V.length > 0)
            for (M = 0; M < V.length; M++) ! function (e) {
                z(V[e])
            }(M);

        function G(e) {
            e.addEventListener("click", function (t) {
                if (t.preventDefault(), !e.closest('li[aria-controls="modal-pro-required"]')) {
                    var n = t.currentTarget.getAttribute("href");
                    console.log(e.getAttribute("data-project-id"), e), X(e.getAttribute("data-project-id"), n)
                }
            })
        }

        function X(e, t) {
            console.log(e, t), ge("selectProject", "project_id=" + e, function (e) {
                location.href = t
            }, function (e) {
                location.href = t
            })
        }
        window.initDeleteProject = z, window.selectProjectFn = X;
        var J = document.getElementsByClassName("js-select-project");
        if (J.length > 0)
            for (M = 0; M < J.length; M++) ! function (e) {
                G(J[e])
            }(M);

        function K(e) {
            var t = e.getAttribute("data-url"),
                n = e.closest(".js-popover");
            n && (e.addEventListener("click", function (e) {
                if (e.preventDefault(), 1 == IS_FREE) proRequiredModalStart(e.currentTarget);
                else {
                    var i = n.getAttribute("data-prj-id");
                    console.log(i), ge("duplicateProject", "project_id=" + i, function (e) {
                        cdSetCookie("projectDuplicated", "duplicated"), console.log("data response", e), X(e.response, "ds/components")
                    }, function (e) {
                        location.href = t
                    })
                }
            }), cdGetCookie("projectDuplicated") && ($(".js-flash-message--duplicate-prj").trigger("showFlashMessage"), $(".js-item-gallery--prj").find(".js-prj-wrapper").eq(0).addClass("project-gallery__item--focus"), cdDeleteCookie("projectDuplicated")))
        }
        window.initSelectProject = G;
        var Q = document.getElementsByClassName("js-duplicate-project");
        if (Q.length > 0)
            for (M = 0; M < Q.length; M++) ! function (e) {
                K(Q[e])
            }(M);

        function Z(e) {
            e.addEventListener("click", function (t) {
                t.preventDefault(), 1 == IS_FREE ? proRequiredModalStart(t.currentTarget) : ge("exportGlobals", "project_id=" + e.getAttribute("data-project"), function (e) {
                    location.href = e.response
                })
            })
        }
        window.initDuplicateProject = K;
        var Y = document.getElementsByClassName("js-export-globals");
        if (Y.length > 0)
            for (M = 0; M < Y.length; M++) ! function (e) {
                Z(Y[e])
            }(M);

        function ee(e) {
            e.addEventListener("click", function (e) {
                1 == IS_FREE && (e.preventDefault(), proRequiredModalStart(e.currentTarget))
            }), e.addEventListener("change", function (t) {
                if (1 != IS_FREE) {
                    var n = t.target.files[0];
                    if (n) {
                        var i = new FileReader;
                        i.readAsText(n, "UTF-8"), i.onload = function (t) {
                            var n, i, s;
                            n = t.target.result, i = e.getAttribute("data-project"), s = e.getAttribute("data-url"), ge("importGlobals", "project=" + encodeURIComponent(n) + "&project_id=" + i, function (e) {
                                cdSetCookie("importGlobals", "duplicated"), location.href = s
                            }, function (e) {
                                location.href = s
                            })
                        }
                    }
                }
            }), cdGetCookie("importGlobals") && ($(".js-flash-message--import-glbs").trigger("showFlashMessage"), cdDeleteCookie("importGlobals"))
        }
        window.initExportGlobals = Z;
        var te = document.getElementsByClassName("js-import-globals");
        if (te.length > 0)
            for (M = 0; M < te.length; M++) ! function (e) {
                ee(te[e])
            }(M);

        function ne(e) {
            var t = e.closest(".js-popover");
            t && e.addEventListener("click", function (n) {
                if (n.preventDefault(), t.dispatchEvent(new Event("closePopover")), e.setAttribute("data-project", t.getAttribute("data-prj-id")), 1 == IS_FREE) proRequiredModalStart(n.currentTarget);
                else {
                    var i = getFramework();
                    "codyframe" == i && (i = "codyframe-3"), ie(e, !1, ["colors", "buttons", "forms", "spacing", "typography", "shared_styles"], !1, getFramework(), function () {
                        $(".js-flash-message--project-export").trigger("showFlashMessage")
                    }, function () { })
                }
            })
        }

        function ie(e, t, n, i, s, o, r) {
            var a = document.getElementsByClassName("js-progress-bar--export")[0];
            Util.removeClass(a, "hide");
            var l = function (e) {
                var t = 90,
                    n = new CustomEvent("updateProgress", {
                        detail: {
                            value: t,
                            duration: 2e3
                        }
                    });
                e.dispatchEvent(n);
                var i = setInterval(function () {
                    if ((t += 2) < 99) {
                        var n = new CustomEvent("updateProgress", {
                            detail: {
                                value: t,
                                duration: 2e3
                            }
                        });
                        e.dispatchEvent(n)
                    } else clearInterval(i)
                }, 2e3);
                return i
            }(a),
                c = e.getAttribute("data-project"),
                u = "project_id=" + c;
            t && (u = u + "&favs=" + JSON.stringify(t)), i && (u = u + "&config=" + JSON.stringify(i)),
                function (e, t, n, i, s) {
                    ge("getGlobalCode", "component=typography", function (o) {
                        var r = o.response;
                        PROJECT && PROJECT.id == e ? s(se(PROJECT, r, t, n, i)) : ge("getProjectByID", "project_id=" + e, function (e) {
                            s(se(JSON.parse(e.response), r, t, n, i))
                        }, function (e) {
                            $(".js-flash-message--project-export").trigger("showFlashMessage")
                        })
                    }, function (e) {
                        s(!1)
                    })
                }(c, n, i, s, function (e) {
                    !1 !== e ? ge("exportProject", u + e + "&framework=" + s, function (e) {
                        ! function (e, t, n, i) {
                            clearInterval(t);
                            var s = new CustomEvent("updateProgress", {
                                detail: {
                                    value: 100,
                                    duration: 500
                                }
                            }),
                                o = !1;
                            e.dispatchEvent(s);
                            var r = function () {
                                e.getElementsByClassName("progress-bar__fill")[0].style.width = "0%", Util.addClass(e, "hide"), location.href = n, i(), o && (clearInterval(o), o = !1)
                            };
                            e.addEventListener("progressCompleted", r, {
                                once: !0
                            }), o = setTimeout(function () {
                                e.getElementsByClassName("progress-bar__fill")[0].style.width = "0%", Util.addClass(e, "hide"), location.href = n, i(), e.removeEventListener("progressCompleted", r)
                            }, 3e3)
                        }(a, l, e.response, r)
                    }, function (e) {
                        o(), clearInterval(l), Util.addClass(a, "hide")
                    }) : $(".js-flash-message--project-export").trigger("showFlashMessage")
                })
        }

        function se(e, t, n, i, s) {
            var o, r = "",
                a = "",
                l = "",
                c = "",
                u = i && i.includes("style-guide"),
                d = "";
            if (e.colors && "" != e.colors && n.indexOf("colors") > -1) {
                (h = new window.Colors($(".js-colors"), !0)).initColorsFromProject(JSON.parse(e.colors)), h.setBtnColorCustomNiceLabels(), h.setBtnGradientNiceLabels();
                var f = h.updateCopyCode(!1, !1, s);
                if (r = r + "&colors=" + encodeURIComponent(f), "tailwind" == s) {
                    var p = h.updateCopyCode(!1, "t-config", s);
                    r = r + "&colorsConfig=" + encodeURIComponent(p)
                }
                if ("" != (a = (l = h.getCustomColorClasses(!1)) + (c = h.getCustomColorClasses(!0))) && (a = "\n\n//colors\n" + a), u) {
                    var m = h.getCustomGradientClasses();
                    r = r + "&mainCustomColors=" + encodeURIComponent(l) + "&feedbackCustomColors=" + encodeURIComponent(c), "" != m && (r = r + "&customGradients=" + encodeURIComponent(m)), h.themes.length > 1 && (r = r + "&colorThemes=" + JSON.stringify(h.themes)), d += encodeURIComponent(oe(f))
                }
            } else if (u) {
                var h;
                (h = new window.Colors($(".js-colors"), !0)).themes = ["Default"], h.initColors(0);
                f = h.updateCopyCode(!1, !1, s);
                d += encodeURIComponent(oe(f))
            }
            if (n.indexOf("typography") > -1) {
                var g = new window.Typography($(".js-typography"), !0);
                if (e.typography && "" != e.typography ? g.initTypographyFromProject(JSON.parse(ce(e.typography))) : g.initTypography(), e.typography && "" != e.typography || "tailwind" != s) {
                    var v = g.updateCopyCode(t, !1, s);
                    if (r = (r = r + "&typography=" + encodeURIComponent(v)) + "&fontCode=" + encodeURIComponent(g.fontCode), "tailwind" == s) {
                        p = g.updateCopyCode(!1, "t-config", s);
                        r = r + "&typographyConfig=" + encodeURIComponent(p)
                    }
                    u && (g.fontFamilies.length > 0 && (r = r + "&fontFamilies=" + encodeURIComponent(JSON.stringify(g.fontFamilies)) + "&fontFamilyLabels=" + encodeURIComponent(JSON.stringify(g.fontFamilyLabels))), d += encodeURIComponent(function (e) {
                        return e.iframe.loadTypographyCssVarStyleGuide(e) + e.iframe.loadTypographyStyleStyleGuide(e)
                    }(g)))
                }
            }
            if (n.indexOf("buttons") > -1) {
                var b = new window.Buttons($(".js-button"), !0);
                b.initFontList(), e.buttons && "" != e.buttons ? b.initButtonsFromProject(JSON.parse(ce(e.buttons))) : (b.initBtnStyleArray(), b.initDefaultButtons()), (e.buttons && "" != e.buttons || "tailwind" != s) && (r = r + "&buttons=" + encodeURIComponent(b.updateButtonsCopyCode("", s)), b.customBtns && b.customBtns.length > 0 && u && (r = r + "&customButtons=" + JSON.stringify(b.customBtns)), u && (d += encodeURIComponent(function (e) {
                    return e.iframe.loadButtonsStyleStyleGuide(e)
                }(b))))
            }
            if (n.indexOf("forms") > -1) {
                var y = new window.Buttons($(".js-forms"), !0);
                y.initFontList(), e.form && "" != e.form ? y.initFormsFromProject(JSON.parse(ce(e.form))) : (y.initFormsStyleArray(), y.initDefaultForms()), (e.form && "" != e.form || "tailwind" != s) && (r = r + "&forms=" + encodeURIComponent(y.updateFormsCopyCode("", s)), u && (d += encodeURIComponent(function (e) {
                    return e.iframe.loadFormsStyleStyleGuide(e)
                }(y))))
            }
            if (e.spacing && "" != e.spacing && n.indexOf("spacing") > -1) {
                (C = new window.Spacing($(".js-spacing"), !0)).initSpacingFromProject(JSON.parse(ce(e.spacing)));
                var w = C.updateCopyCode();
                r = r + "&spacing=" + encodeURIComponent(w), u && (d += encodeURIComponent(ae(w)))
            } else if (u) {
                var C;
                (C = new window.Spacing($(".js-spacing"), !0)).initSpacing();
                w = C.updateCopyCode();
                d += encodeURIComponent(ae(w))
            }
            if (n.indexOf("shared_styles") > -1) {
                var E = new window.SharedStyle($(".js-shared-styles"), !0);
                E.initFontList(), e.shared_styles && "" != e.shared_styles ? E.initStyleFromProject(JSON.parse(ce(e.shared_styles))) : E.initDefaultStyle(), r = r + "&shared_styles=" + encodeURIComponent(E.updateStyleCopyCode("")), u && (r = r + "&customSharedStyle=" + encodeURIComponent(JSON.stringify(E.customStyles)) + "&customSharedTextStyle=" + encodeURIComponent(JSON.stringify(E.customTextStyles)), d += (o = E).iframe.loadSharedStyleStyleGuide(o))
            }
            return u && (r = r + "&styleGuideCss=" + d), r
        }

        function oe(e) {
            var t = e.split("@include defineColorHSL(");
            e = t[0];
            for (var n = 1; n < t.length; n++)
                if (t[n].indexOf("--color") > -1 || t[n].indexOf("--gradient") > -1) {
                    var i = t[n].split(");", 1),
                        s = re(i[0]);
                    e += t[n].replace(i[0], s)
                } else e += t[n];
            return e = (e = (e = function (e) {
                for (var t = e.split("//"), n = 0; n < t.length; n++)
                    if (0 == n) e = t[0];
                    else {
                        var i = t[n].split(/\r?\n/, 1);
                        e += t[n].replace(i, "")
                    } return e
            }(e)).replace(/alpha\(/g, "")).replace(/, var\(--bg-o, 1\)\)/g, "")
        }

        function re(e) {
            var t = e.replace(",", ": hsl("),
                n = e.split(",");
            return 4 == n.length && (t = n[0] + "-h: " + n[1] + "; " + n[0] + "-s: " + n[2] + "; " + n[0] + "-l: " + n[3] + "; " + t), t
        }

        function ae(e) {
            if (!(e.indexOf("@supports(--css: variables)") < 0)) {
                var t = e.split("@supports(--css: variables)"),
                    n = function (e) {
                        for (var t = ["xs", "sm", "md", "lg", "xl"], n = ["32", "48", "64", "80", "90"], i = "", s = 0; s < t.length; s++) i += le(e, t[s], n[s]);
                        return i
                    }(t[1]);
                return t[0] + n
            }
        }

        function le(e, t, n) {
            return e.indexOf("@include breakpoint(" + t + ")") < 0 ? "" : "@media (min-width:" + n + "rem) " + e.split("@include breakpoint(" + t + ")")[1].split("}")[0] + "}"
        }

        function ce(e) {
            return decodeURIComponent(e.replace(/%"/g, '%25"'))
        }
        window.initImportGlobals = ee;
        var ue = document.getElementsByClassName("js-export-project");
        if (ue.length > 0)
            for (M = 0; M < ue.length; M++) ! function (e) {
                ne(ue[e])
            }(M);
        window.initExportProject = ne;
        var de = document.getElementsByClassName("js-export-form");
        de.length > 0 && new function (e) {
            var t;
            this.element = e, this.alerts = this.element.siblings(".js-form-alert"), this.alertSuccess = this.alerts.find(".js-alert--success"), this.alertError = this.alerts.find(".js-alert--error"), this.submitButton = this.element.find(".js-export-form__submit"), (t = this).element.on("submit", function (e) {
                e.preventDefault(), 1 == IS_FREE ? proRequiredModalStart(e.currentTarget) : function (e, t) {
                    t.preventDefault(), he(e.alertSuccess, !1), he(e.alertError, !1), e.submitButton.addClass("btn-states--state-b");
                    for (var n, i, s = e.element.serializeArray(), o = [], r = [], a = [], l = "codyframe-3", c = 0; c < s.length; c++) "config[]" == s[c].name && a.push(s[c].value), "include-globals" == s[c].name && (i = s[c].value), "include-components" == s[c].name && (n = s[c].value), "radio-css-framework" == s[c].name && (l = s[c].value);
                    n && (r = !1), i && (o = ["colors", "buttons", "forms", "spacing", "typography", "shared_styles"]), ie(e.element[0], r, o, a, l, function () {
                        m(e)
                    }, function () {
                        e.submitButton.removeClass("btn-states--state-b")
                    })
                }(t, e)
            }), t.element.on("change", function (e) {
                var t = !1,
                    n = e.target.value;
                "tailwind" == n ? t = "tailwind" : "no-framework" == n ? t = "no-framework" : n.indexOf("codyframe") > -1 && (t = "codyframe"), t && cdSetCookie("cd-framework", t)
            })
        }($(de[0]));
        var fe = document.getElementsByClassName("js-export-component");

        function pe(e, t, n) {
            n ? e.attr("aria-invalid", "true") : e.removeAttr("aria-invalid");
            var i = e.parents(".js-signup-form__input-wrapper").eq(0).find(".js-form__error");
            i.addClass("hide"), i.eq(t - 1).toggleClass("hide", !n)
        }

        function me(e) {
            return e.length >= PASSWORD_MIN_LENGTH
        }

        function he(e, t) {
            e.toggleClass("alert--is-visible", t)
        }

        function ge(e, t, n, i) {
            null == t && (t = null), null == n && (n = function () { }), null == i && (i = function () { }), $.ajax({
                url: AJAX_URL + e,
                data: t,
                type: "POST",
                dataType: "json",
                cache: "false",
                success: function (e) {
                    0 == e.status ? n(e) : i(e)
                }
            })
        }

        function ve(e) {
            var t = 0;
            e && (t = e), $("html, body").animate({
                scrollTop: t
            }, 300)
        }

        function be(e) {
            e.removeAttr("aria-invalid"), e.parents(".js-signup-form__input-wrapper").find(".form-label__error--is-visible").removeClass("form-label__error--is-visible")
        }
        fe.length > 0 && function (e) {
            this.element = e, this.id = this.element.getAttribute("data-cm-id"), this.label = this.element.getAttribute("data-cm-label"), this.variation = this.element.getAttribute("data-cm-variation"), this.downloading = !1,
                function (e) {
                    this.element.addEventListener("click", function (t) {
                        t.preventDefault(), 1 == IS_FREE ? proRequiredModalStart(t.currentTarget) : function (e) {
                            e.downloading || (e.downloading = !0, Util.addClass(e.element, "btn-states--state-b"), ge("exportComponent", "comp_id=" + e.id + "&comp_label=" + e.label + "&comp_variation=" + e.variation + "&framework=" + e.element.getAttribute("data-framework"), function (t) {
                                Util.removeClass(e.element, "btn-states--state-b"), e.downloading = !1, location.href = t.response
                            }, function (t) {
                                Util.removeClass(e.element, "btn-states--state-b"), e.downloading = !1, $(".js-flash-message--project-update").trigger("showFlashMessage")
                            }))
                        }(e)
                    })
                }(this)
        }(fe[0]);
        var ye, we = {
            yes: function () {
                window.onbeforeunload = function () {
                    return !0
                }
            },
            no: function () {
                window.onbeforeunload = null
            }
        },
            Ce = $(".js-bookmark"),
            Ee = !1;
        Ce.length > 0 && Ce.on("click", ".js-bookmark__btn", function (e) {
            var t, n, i = $(e.currentTarget);
            if (ye = i.attr("data-comp"), 0 == IS_LOGGED) logInModalStart(e.currentTarget);
            else if (ye && !isNaN(ye)) {
                if (Ee) return;
                Ee = !0;
                var s = i.parents(".js-ds-comp-preview");
                ! function (e, t) {
                    (t = e.parents(".js-ds-comp-preview__card")).length > 0 ? t.eq(0).toggleClass("card--saved") : e.toggleClass("selected")
                }(i, s), t = ye, n = function (e, t) {
                    s.length > 0 && $(".js-ds-sub-nav__fav-list-counter").trigger("updateCount", [t])
                }, $.ajax({
                    url: "post/toggleBookmark",
                    data: "compId=" + t + "&projectId=" + parseInt(PROJECT.id),
                    type: "POST",
                    dataType: "json",
                    cache: "false"
                }).done(function (e) {
                    1 == e.status ? $(".js-flash-message--project-update").trigger("showFlashMessage") : n(e.response[0], e.response[1].length)
                }).fail(function (e) {
                    $(".js-flash-message--project-update").trigger("showFlashMessage")
                }).always(function (e) {
                    Ee = !1
                })
            }
        })
    }();