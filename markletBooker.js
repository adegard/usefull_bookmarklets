// from https://gist.github.com/webdev23/da95ecaee0618540a9a0200750202765 by WebDev23
let e = "",
        t = "",
        n = "🐙";
    if (console.log(window.getSelection().rangeCount), window.getSelection() && window.getSelection().rangeCount >= 1) {
        console.log(window.getSelection());
        try {
            if (t = "(async () => {\n" + window.getSelection().anchorNode.parentElement.textContent + "\n})();", "javascript" === window.getSelection().anchorNode.textContent.split(":")[0]) return void(t = window.getSelection().anchorNode.textContent);
            if ("javascript" === window.getSelection().anchorNode.parentElement.textContent.split(":")[0]) return void(t = window.getSelection().anchorNode.parentElement.textContent);
            if ("javascript" === window.getSelection().anchorNode.parentElement.textContent.split(":")[0]) return void(t = window.getSelection().anchorNode.parentElement.textContent);
            if ("javascript" === window.getSelection().anchorNode.parentElement.href.split(":")[0]) return void(t = window.getSelection().anchorNode.parentElement.href)
        } catch (e) {
            console.log(e.message)
        }
    }
    document.documentElement.innerHTML = document.implementation.createHTMLDocument().documentElement.outerHTML;

    function o(t) {
        link.style.display = "none", title.style.display = "inline", console.log(t);
        let n = prettier.format(t, {
            parser: "babel",
            plugins: prettierPlugins
        });
        console.log(n);
        let o = n.split(" ");
        "javascript:" === o[0] && (o.shift(), n = o.join(" ")), "void" === o[0] && (o.shift(), n = o.join(" ")), console.log(o), console.log(n), e.setValue(n), depack.style.display = "none", pack.style.display = "unset"
    }
    document.querySelectorAll("[style]").forEach((e => e.removeAttribute("style"))), document.querySelectorAll('link[rel="stylesheet"]').forEach((e => e.parentNode.removeChild(e))), document.querySelectorAll("style").forEach((e => e.parentNode.removeChild(e))), document.querySelectorAll("script").forEach((e => e.parentNode.removeChild(e))), document.body.appendChild(Object.assign(document.createElement("style"), {
        textContent: "\n\n          body {margin:0;background:black;width:99.4%}\n          a:hover { text-decoration-style: wavy !important; z-index:999 !important}\n          button, input, i, select, summary {font-size: large;border:#b70033 solid;z-index: 5;margin: 0px 0.2rem;background:rgba(51, 46, 18, 0.24);color:#fff;border-radius: 0.4rem;padding: 0 1rem 0 1rem;font-weight: 600;letter-spacing: 0.2rem;cursor:pointer; margin: 0.5rem 0.2rem; height: 3rem; max-height: 3rem !important }\n          button:hover, input:hover, select:hover, i:hover { border: rgba(124, 0, 227, 0.93) solid 3px; background: rgba(51, 46, 18, 0.33); filter: invert(1); color:black;}\n          button:hover, select:hover{ height: 3rem;}\n          input { cursor: auto !important; height: 3rem; max-height: 3rem !important; }\n          details[open] { position: fixed; top: 0; transform: translate(calc(50vw - 50%), calc(10rem - 18%)); outline: 10000px #000000a1 solid; background: #b70033; max-height: 87vh; overflow: auto; transition: outline 0.1s ease-in; z-index: 999; width: 80%; }\n          i { font-size: 2.4rem; font-style: inherit; padding: 0.5rem; vertical-align: middle; margin: 0; }\n          input[type=file] {height: 2.4rem;padding: 1rem;width: 14rem;}\n          summary { color:ghostwhite; font-size:2.1rem; padding: 1rem 0 0.5rem 0.5rem; }\n          details[open] summary::after { content: '❌'; float: right; margin: 0.2rem 0.5rem 0 0; text-align: center }\n          details > p { background: #000; color: gainsboro; margin: 0; display: inline-flex; flex-direction: column; font-size: 1.4rem; }\n          @media (max-width:640px) { button, input, select, summary { width:100%} i {display: block;} }\n\n      "
    })), [
        ["i", {
            id: "icon",
            innerHTML: n,
            title: "Choose another icon for your bookmarklet.",
            onclick: "selicon.style.display='block'"
        }],
        ["input", {
            id: "title",
            placeholder: "Title... "
        }],
        ["button", {
            id: "pack",
            innerHTML: "PACK to bookmarklet"
        }],
        ["button", {
            id: "depack",
            innerHTML: "DEPACK the bookmarklet",
            style: "display:none"
        }],
        ["a", {
            id: "link",
            title: "Your bookmarklet.\nDrag in the bookmark toolbar!.\nOr right click, «Bookmark this link».",
            style: "display:none;color:ghostwhite;font-size: xxx-large;padding: 0 1rem;vertical-align: middle;"
        }],
        ["a", {
            id: "linksource",
            title: "Get last revision.",
            href: "https://gist.github.com/webdev23/da95ecaee0618540a9a0200750202765",
            textContent: "Github",
            style: "float:right;color:ghostwhite;font-size: large;padding: 0 1rem;vertical-align: middle;text-decoration-style: dashed;margin: 1rem;"
        }],
        ["div", {
            id: "target",
            style: "width:100%; height: calc(-6.7rem + 100vh);border:1px black solid;margin-top:10px"
        }],
        ["details", {
            id: "selicon",
            open: !1
        }]
    ].forEach((e => {
        document.body.appendChild(Object.assign(document.createElement(e[0]), e[1]))
    })), document.head.appendChild(Object.assign(document.createElement("link"), {
        id: "pageicon",
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' stroke='white' fill='red'>🐙</text></svg>"
    })), await import("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js").catch((e => console.log("Loading failed" + e))), await import("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ext-language_tools.js").catch((e => console.log("Loading failed" + e))), e = await ace.edit("target"), ace.require("ace/ext/language_tools"), ace.config.set("basePath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/"), e.setOptions({
        value: "/* PACK and DEPACK es6+ bookmarklets, valid for Firefox.\n** Please wrap your code in the async function below.\n* And click *PACK bookmarklet*\n\n* Or paste a bookmarklet in the first line in this editor to DEPACK and beautify.*/\n\n(async () => {\n\n})()",
        theme: "ace/theme/gob",
        mode: "ace/mode/javascript",
        enableBasicAutocompletion: !0,
        enableSnippets: !0,
        enableLiveAutocompletion: !0
    }), e.getSession().on("change", (function() {
        console.log(e.getSession().getValue().split(":")[0]), "javascript" === e.getSession().getValue().split(":")[0] ? (pack.style.display = "none", depack.style.display = "unset") : (depack.style.display = "none", pack.style.display = "unset")
    })), pack.onclick = () => async function(t) {
        link.style.display = "inline", title.style.display = "none", await import("https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js").then((() => {
            (async () => {
                let o;
                console.log(Terser);
                try {
                    o = await Terser.minify(t, {
                        sourceMap: !1
                    }), e.setValue("");
                    let i = ";" === o.code.charAt(o.code.length - 1) ? o.code.slice(0, -1) : o.code;
                    console.log(o.code.slice(0, -1)), console.log(i), i = "javascript:void " + i + ";", e.setOptions({
                        value: i
                    }), link.href = i, link.textContent = n + title.value, link.style.display = "inline", pack.style.display = "none", depack.style.display = "unset"
                } catch (e) {
                    const {
                        message: t,
                        filename: n,
                        line: o,
                        col: i,
                        pos: l
                    } = e;
                    console.log(t, n, "Line:" + o, " Col:" + i, "Pos:" - l)
                }
            })()
        }))
    }(e.getSession().getValue()), depack.onclick = () => o(e.getSession().getValue()), icon.onclick = () => {
        selicon.appendChild(Object.assign(document.createElement("summary"), {
            innerHTML: "Change icon"
        })), selicon.style.display = "unset";
        let e = "";
        for (let t = 9729; t < 10193; t++) e += "<p><i>&#x" + t.toString(16) + ";</i></p>";
        for (let t = 127744; t < 129607; t++) e += "<p><i>&#x" + t.toString(16) + ";</i></p>";
        selicon.setAttribute("open", !0), selicon.innerHTML += e, selicon.scrollTop = 0
    }, selicon.addEventListener("mousedown", (e => {
        "I" === e.target.tagName && (n = e.target.textContent, pageicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' stroke='white' fill='red'" + n + "</text></svg>", icon.textContent = n, selicon.open = !1, link.textContent = n + title.value, console.log(e.target.textContent), selicon.style.display = "none", selicon.innerHTML = "")
    })), depack.onclick = () => o(e.getSession().getValue()), import("https://unpkg.com/prettier@2.2.1/standalone.js"), import("https://unpkg.com/prettier@2.2.1/parser-babel.js"), "" !== t && (console.log(window.getSelection()), e.setValue(t))
