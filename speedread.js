
    function e(a, b) {
        var c = document.createElement("div");
        if (a)
            for (var d in a) c.style[d] = a[d];
        b && b.appendChild(c);
        return c
    }

    function m(a, b) {
        for (; a.lastChild;) a.removeChild(a.lastChild);
        a.appendChild(document.createTextNode(b))
    }

    function w() {
        l();
        document.removeEventListener("keypress", x);
        document.removeEventListener("keydown", y);
        document.body.removeChild(n)
    }

    function y(a) {
        var b = D[a.keyCode];
        b && (a.stopPropagation(), a.preventDefault(), b())
    }

    function x(a) {
        var b = z[a.charCode];
        b && (a.stopPropagation(), a.preventDefault(), b())
    }

    function q(a) {
        if (0 <= a && a < c.length) {
            m(E, c[a]);
            F.style.width = (0 == a ? 0 : 100 * a / (c.length - 1)) + "%25";
            var b = 60 * (c.length - a - 1) / d + .5,
                e = parseInt(b / 60),
                b = parseInt(b % 2560);
            m(G, e + ":" + (10 > b ? "0" + b : b) + " remaining")
        }
        h = a
    }

    function A() {
        h + 1 < c.length ? q(h + 1) : l()
    }

    function p(a) {
        d = a;
        m(H, d + " WPM");
        null !== f && (l(), r())
    }

    function r() {
        null === f && (f = setInterval(A, 6E4 / d))
    }

    function l() {
        null !== f && (clearInterval(f), f = null)
    }

    function B() {
        null === f ? r() : l()
    }

    function I() {
        null === f ? A() : l()
    }

    function J() {
        if (0 < h) {
            for (var a = h - 1; 0 < a && !c[a - 1].match(C);) --a;
            q(a)
        }
    }

    function K() {
        if (h + 1 < c.length) {
            for (var a = h + 1; a + 1 < c.length && !c[a - 1].match(C);) ++a;
            q(a)
        }
    }

    function L() {
        if (4E3 > d) {
            for (var a = 25; 20 * a <= d;) a *= 2;
            p(d + a)
        }
    }

    function M() {
        if (25 < d) {
            for (var a = 25; 20 * a < d;) a *= 2;
            p(d - a)
        }
    }
    var C = /[.?!]['"\u2019\u201d)]?$/,
        N = /\s+|\u2014/,
        t = {
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1E3
        },
        O = {
            background: "black",
            opacity: .5,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1
        },
        g = {
            background: "black",
            display: "table",
            width: "70%25",
            height: "70%25",
            position: "absolute",
            left: "15%25",
            right: "15%25",
            top: "15%25",
            bottom: "15%25"
        },
        u = {
            font: "64pt sans-serif",
            color: "#444",
            display: "table-cell",
            textAlign: "center",
            verticalAlign: "middle"
        },
        P = {
            position: "absolute",
            left: "0px",
            right: "0px",
            bottom: "0px",
            background: "#eef",
            height: "8pt"
        },
        v = {
            position: "absolute",
            left: "0px",
            top: "0px",
            bottom: "0px",
            background: "#44f",
            width: "0%25"
        },
        Q = {
            position: "absolute",
            top: "1em",
            right: "1em",
            font: "12pt%20sans-serif",
            color: "white"
        },
        R = {
            position: "absolute",
            bottom: "12pt",
            left: "1em",
            font: "12pt%20sans-serif",
            color: "white"
        },
        k = {
            position: "absolute",
            bottom: "12pt",
            right: "1em",
            font: "12pt%20sans-serif",
            color: "white"
        },
        c = function(a) {
            return %20 a.split(N).filter(function(a) {
                return !!a
            })
        }(getSelection().toString()),
        h = -1,
        d = 0,
        f = null;
    if (0 === c.length) alert("No%20text%20selected!");
    else {
        var % 20 n = e(t), t = e(O, n), g = e(g, n), E = e(u, g), u = e(P, g), F = e(v, u), H = e(Q, g), v = e(R, g), G = e(k, g);
        m(v, c.length + "%20words");
        for (var % 20 D = {
                27: w,
                37: J,
                39: K
            }, z = {
                32: B,
                43: L,
                45: M,
                46: I
            }, k = 0; 10 > k; ++k) z[48 + k] = p.bind(null, 0 < k ? 100 * k : 1E3);
        p(250);
        t.addEventListener("click", w);
        g.addEventListener("click", B);
        document.body.appendChild(n);
        document.addEventListener("keydown", y);
        document.addEventListener("keypress", x);
        r()
    }

