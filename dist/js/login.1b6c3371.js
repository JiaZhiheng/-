(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["login"], { "0418": function(e, t, n) { "use strict"; var a = n("7a23"),
                r = Object(a["N"])("data-v-1d614253");
            Object(a["A"])("data-v-1d614253"); var i = Object(a["i"])("div", { class: "block" }, null, -1),
                o = Object(a["i"])("i", { class: "iconfont more" }, null, -1);
            Object(a["y"])(); var l = r((function(e, t, n, l, c, u) { var s = Object(a["E"])("van-nav-bar"); return Object(a["x"])(), Object(a["f"])(a["a"], null, [i, Object(a["i"])(s, { class: "header", onClickLeft: l.back, title: n.title, "left-text": "返回", "left-arrow": "" }, { right: r((function() { return [o] })), _: 1 }, 8, ["onClickLeft", "title"])], 64) })),
                c = n("6c02"),
                u = { name: "Header", props: { title: { type: String, default: "" } }, setup: function() { var e = Object(c["d"])(),
                            t = function() { e.back() }; return { back: t } } },
                s = (n("bd9c"), n("d959")),
                d = n.n(s); const b = d()(u, [
                ["render", l],
                ["__scopeId", "data-v-1d614253"]
            ]);
            t["a"] = b }, "373a": function(e, t, n) {}, "5bd0": function(e, t, n) { e.exports = n.p + "img/flower.cdbd1ee3.png" }, 6631: function(e, t, n) {}, "681f": function(e, t, n) { "use strict";
            n("6631") }, "81d5": function(e, t, n) { "use strict"; var a = n("7b0b"),
                r = n("23cb"),
                i = n("50c4");
            e.exports = function(e) { var t = a(this),
                    n = i(t.length),
                    o = arguments.length,
                    l = r(o > 1 ? arguments[1] : void 0, n),
                    c = o > 2 ? arguments[2] : void 0,
                    u = void 0 === c ? n : r(c, n); while (u > l) t[l++] = e; return t } }, 9903: function(e, t, n) { "use strict";
            n("c452") }, a55b: function(e, t, n) { "use strict";
            n.r(t); var a = n("7a23"),
                r = n("5bd0"),
                i = n.n(r),
                o = Object(a["N"])("data-v-7de1f430");
            Object(a["A"])("data-v-7de1f430"); var l = { class: "auth" },
                c = Object(a["i"])("img", { class: "logo", src: i.a, alt: "" }, null, -1),
                u = { class: "form" },
                s = { style: { margin: "16px 0" } },
                d = Object(a["h"])(" 登录 "),
                b = { class: "form" },
                f = { style: { margin: "16px 0" } },
                p = Object(a["h"])(" 注册 ");
            Object(a["y"])(); var m = o((function(e, t, n, r, i, m) { var g = Object(a["E"])("Header"),
                        v = Object(a["E"])("van-field"),
                        h = Object(a["E"])("van-button"),
                        O = Object(a["E"])("van-form"),
                        j = Object(a["E"])("VueImgVerify"); return Object(a["x"])(), Object(a["f"])(a["a"], null, [Object(a["i"])(g, { title: "login" == e.type ? "登录" : "注册" }, null, 8, ["title"]), Object(a["i"])("div", l, [c, "login" == e.type ? (Object(a["x"])(), Object(a["f"])(O, { key: 0, class: "form-wrap", onSubmit: r.onSubmit }, { default: o((function() { return [Object(a["i"])("div", u, [Object(a["i"])(v, { clearable: "", modelValue: e.username, "onUpdate:modelValue": t[1] || (t[1] = function(t) { return e.username = t }), name: "username", label: "账号", placeholder: "请输入账号", rules: [{ required: !0, message: "账号不能为空！" }] }, null, 8, ["modelValue"]), Object(a["i"])(v, { clearable: "", modelValue: e.password, "onUpdate:modelValue": t[2] || (t[2] = function(t) { return e.password = t }), type: "password", name: "password", label: "密码", placeholder: "请输入密码", rules: [{ required: !0, message: "密码不能为空！" }] }, null, 8, ["modelValue"])]), Object(a["i"])("div", s, [Object(a["i"])(h, { round: "", block: "", type: "primary", "native-type": "submit" }, { default: o((function() { return [d] })), _: 1 }), Object(a["i"])("p", { onClick: t[3] || (t[3] = function(e) { return r.chanegType("register") }), class: "change-btn" }, "没有账号，前往注册")])] })), _: 1 }, 8, ["onSubmit"])) : Object(a["g"])("", !0), "register" == e.type ? (Object(a["x"])(), Object(a["f"])(O, { key: 1, class: "form-wrap", onSubmit: r.onSubmit }, { default: o((function() { return [Object(a["i"])("div", b, [Object(a["i"])(v, { clearable: "", modelValue: e.username, "onUpdate:modelValue": t[4] || (t[4] = function(t) { return e.username = t }), name: "username", label: "账号", placeholder: "请输入账号", rules: [{ required: !0, message: "账号不能为空！" }] }, null, 8, ["modelValue"]), Object(a["i"])(v, { clearable: "", modelValue: e.password, "onUpdate:modelValue": t[5] || (t[5] = function(t) { return e.password = t }), type: "password", name: "password", label: "密码", placeholder: "请输入密码", rules: [{ required: !0, message: "密码不能为空！" }] }, null, 8, ["modelValue"]), Object(a["i"])(v, { center: "", clearable: "", label: "验证码", placeholder: "输入验证码", modelValue: e.verify, "onUpdate:modelValue": t[6] || (t[6] = function(t) { return e.verify = t }) }, { button: o((function() { return [Object(a["i"])(j, { ref: "verifyRef" }, null, 512)] })), _: 1 }, 8, ["modelValue"])]), Object(a["i"])("div", f, [Object(a["i"])(h, { round: "", block: "", loading: e.loading, type: "primary", "native-type": "submit" }, { default: o((function() { return [p] })), _: 1 }, 8, ["loading"]), Object(a["i"])("p", { onClick: t[7] || (t[7] = function(e) { return r.chanegType("login") }), class: "change-btn" }, "登录已有账号")])] })), _: 1 }, 8, ["onSubmit"])) : Object(a["g"])("", !0)])], 64) })),
                g = n("5530"),
                v = (n("433b"), n("d399")),
                h = (n("96cf"), n("1da1")),
                O = { class: "img-verify" };

            function j(e, t, n, r, i, o) { return Object(a["x"])(), Object(a["f"])("div", O, [Object(a["i"])("canvas", { ref: "verify", width: e.width, height: e.height, onClick: t[1] || (t[1] = function() { return r.handleDraw && r.handleDraw.apply(r, arguments) }) }, null, 8, ["width", "height"])]) }
            n("99af"), n("cb29"); var y = { setup: function() { var e = Object(a["C"])(null),
                            t = Object(a["B"])({ pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", width: 120, height: 40, imgCode: "" });
                        Object(a["u"])((function() { t.imgCode = o() })); var n = function() { t.imgCode = o() },
                            r = function(e, t) { return parseInt(Math.random() * (t - e) + e) },
                            i = function(e, t) { var n = r(e, t),
                                    a = r(e, t),
                                    i = r(e, t); return "rgb(".concat(n, ",").concat(a, ",").concat(i, ")") },
                            o = function() { var n = e.value.getContext("2d");
                                n.fillStyle = i(180, 230), n.fillRect(0, 0, t.width, t.height); for (var a = "", o = 0; o < 4; o++) { var l = t.pool[r(0, t.pool.length)];
                                    a += l; var c = r(18, 40),
                                        u = r(-30, 30);
                                    n.font = c + "px Simhei", n.textBaseline = "top", n.fillStyle = i(80, 150), n.save(), n.translate(30 * o + 15, 15), n.rotate(u * Math.PI / 180), n.fillText(l, -10, -15), n.restore() } for (var s = 0; s < 5; s++) n.beginPath(), n.moveTo(r(0, t.width), r(0, t.height)), n.lineTo(r(0, t.width), r(0, t.height)), n.strokeStyle = i(180, 230), n.closePath(), n.stroke(); for (var d = 0; d < 40; d++) n.beginPath(), n.arc(r(0, t.width), r(0, t.height), 1, 0, 2 * Math.PI), n.closePath(), n.fillStyle = i(150, 200), n.fill(); return a }; return Object(g["a"])(Object(g["a"])({}, Object(a["H"])(t)), {}, { verify: e, handleDraw: n }) } },
                w = (n("9903"), n("d959")),
                k = n.n(w); const x = k()(y, [
                ["render", j]
            ]); var C = x,
                V = n("0418"),
                S = n("a27e"),
                _ = (n("a18c"), { name: "Login", components: { VueImgVerify: C, Header: V["a"] }, setup: function() { var e = Object(a["C"])(null),
                            t = Object(a["B"])({ username: "Daisy", password: "123456", type: "login", verify: "", imgCode: "", loading: !1 }),
                            n = function() { var n = Object(h["a"])(regeneratorRuntime.mark((function n(a) { var r, i, o; return regeneratorRuntime.wrap((function(n) { while (1) switch (n.prev = n.next) {
                                            case 0:
                                                if (n.prev = 0, "login" != t.type) { n.next = 10; break } return n.next = 4, S["a"].post("/user/login", { username: t.username, password: t.password });
                                            case 4:
                                                r = n.sent, i = r.data, localStorage.setItem("token", i.token), window.location.href = "/", n.next = 23; break;
                                            case 10:
                                                if (t.imgCode = e.value.imgCode || "", e.value.imgCode.toLowerCase() == t.verify.toLowerCase()) { n.next = 15; break } return console.log("verifyRef.value.imgCode", e.value.imgCode), v["a"].fail("验证码错误"), n.abrupt("return");
                                            case 15:
                                                return t.loading = !0, n.next = 18, S["a"].post("/user/register", { username: t.username, password: t.password });
                                            case 18:
                                                o = n.sent, o.data, v["a"].success("注册成功"), t.type = "login", t.loading = !1;
                                            case 23:
                                                n.next = 29; break;
                                            case 25:
                                                n.prev = 25, n.t0 = n["catch"](0), console.log(111), t.loading = !1;
                                            case 29:
                                            case "end":
                                                return n.stop() } }), n, null, [
                                        [0, 25]
                                    ]) }))); return function(e) { return n.apply(this, arguments) } }(),
                            r = function(e) { t.type = e }; return Object(g["a"])(Object(g["a"])({}, Object(a["H"])(t)), {}, { onSubmit: n, chanegType: r, verifyRef: e }) } });
            n("681f"); const I = k()(_, [
                ["render", m],
                ["__scopeId", "data-v-7de1f430"]
            ]);
            t["default"] = I }, bd9c: function(e, t, n) { "use strict";
            n("373a") }, c452: function(e, t, n) {}, cb29: function(e, t, n) { var a = n("23e7"),
                r = n("81d5"),
                i = n("44d2");
            a({ target: "Array", proto: !0 }, { fill: r }), i("fill") } }
]);