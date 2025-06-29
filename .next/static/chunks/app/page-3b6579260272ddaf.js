(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1717: (t) => {
      t.exports = {
        "first-family": "input_first-family__LtkC7",
        "second-family": "input_second-family__IqhMo",
        lignt: "input_lignt__o64R8",
        medium: "input_medium__MycEH",
        "text-center": "input_text-center__veRN8",
        "text-60": "input_text-60__dgr_F",
        "text-28": "input_text-28__SPPB2",
        "text-14": "input_text-14__WJt5t",
        white: "input_white__EOnB_",
        red: "input_red__MzZTM",
        input: "input_input__BVGza",
        label: "input_label__pApPz",
      };
    },
    2611: (t) => {
      t.exports = {
        "first-family": "input_first-family__3A_gb",
        "second-family": "input_second-family__7wr4e",
        lignt: "input_lignt__dEYYe",
        medium: "input_medium__3Givn",
        "text-center": "input_text-center__AhroI",
        "text-60": "input_text-60___PJTe",
        "text-28": "input_text-28__qazTL",
        "text-14": "input_text-14__EYVDG",
        white: "input_white__60npI",
        red: "input_red__cBE4M",
        button_text: "input_button_text__bZKKF",
        input: "input_input__PLghW",
        load: "input_load__EHnpM",
        rotate: "input_rotate__iWZtY",
        error: "input_error__3qiqm",
        container: "input_container__9A0bd",
      };
    },
    4635: (t) => {
      t.exports = {
        "first-family": "heading_first-family__ULdDf",
        "second-family": "heading_second-family__YaEhA",
        lignt: "heading_lignt__Luxia",
        medium: "heading_medium__c3NM9",
        "text-center": "heading_text-center__eP9PQ",
        "text-60": "heading_text-60__Wj70v",
        "text-28": "heading_text-28___xDIU",
        "text-14": "heading_text-14__7fUpq",
        white: "heading_white__Z_dUD",
        red: "heading_red__8M68V",
        logo: "heading_logo__Ip8lQ",
        opacity: "heading_opacity__i5STb",
      };
    },
    5295: (t) => {
      t.exports = {
        "first-family": "button_first-family__1_g8c",
        "second-family": "button_second-family__K7H_r",
        lignt: "button_lignt__U2nmn",
        medium: "button_medium__7M1UA",
        "text-center": "button_text-center__0QkvR",
        "text-60": "button_text-60__SuSqj",
        "text-28": "button_text-28___rj_B",
        "text-14": "button_text-14__3LRwr",
        white: "button_white__9a66o",
        red: "button_red__MSar_",
        button: "button_button__aZ_6A",
        activeScale: "button_activeScale__LB_hB",
        ghost: "button_ghost__opZX0",
        subscribe: "button_subscribe___rkjH",
        "size-20-28": "button_size-20-28__7DUaK",
      };
    },
    6977: (t, e, n) => {
      "use strict";
      n.d(e, { default: () => v });
      var i = n(5155),
        _ = n(2115),
        a = n(4635),
        c = n.n(a),
        l = n(6766);
      function s() {
        return (0, i.jsxs)("div", {
          className: "flex-column align-center gap-5",
          children: [
            (0, i.jsxs)("div", {
              className: "flex-column gap-2 align-center",
              children: [
                (0, i.jsx)("div", {
                  className: "".concat(c().logo, " relative"),
                  children: (0, i.jsx)(l.default, {
                    src: "/logo.png",
                    width: 220,
                    height: 58,
                    alt: "logo",
                  }),
                }),
                (0, i.jsx)("h1", {
                  className: "text-60 white second-family light text-center",
                  children: "Coming soon",
                }),
              ],
            }),
            (0, i.jsx)("h2", {
              className: "light text-28 white text-center ".concat(c().opacity),
              children: "Fitness & SPA",
            }),
          ],
        });
      }
      let o = n(3464).A.create({
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        r = async (t) => {
          try {
            return (await o.post("/subscribe-brevo", { email: t })).data;
          } catch (t) {
            console.error(t);
          }
        },
        u = () => {
          let [t, e] = (0, _.useState)(""),
            [n, i] = (0, _.useState)(!1),
            [a, c] = (0, _.useState)(null),
            l = (0, _.useCallback)(() => {
              if (!t.includes("@")) return !1;
              let [e, n] = t.split("@");
              return !!n.includes(".");
            }, [t]),
            s = async () => {
              try {
                if ((i(!0), !l())) return void c("Invalid email");
                (await r(t), c(null));
              } catch (t) {
                (console.error(a), c("Something went wrong. Try again"));
              } finally {
                i(!1);
              }
            };
          return (
            (0, _.useEffect)(() => {
              a && l();
            }, [t, a]),
            { setEmail: e, email: t, handleSubscribe: s, loading: n, error: a }
          );
        };
      var d = n(2611),
        p = n.n(d),
        x = n(1717),
        h = n.n(x);
      function m(t) {
        let {
          className: e,
          placeholder: n,
          onChange: _,
          value: a,
          type: c,
          name: l,
          disabled: s,
          ref: o,
          ...r
        } = t;
        return (0, i.jsx)("label", {
          htmlFor: l,
          className: h().label,
          children: (0, i.jsx)("input", {
            ...r,
            ref: o,
            name: null != l ? l : "",
            type: null != c ? c : "text",
            disabled: s,
            placeholder: n,
            value: a,
            onChange: _,
            className: "".concat(e, " ").concat(h().input),
          }),
        });
      }
      function b(t) {
        let {
          className: e,
          classNameInput: n,
          placeholder: _,
          disabled: a,
          onChange: c,
          value: l,
          name: s,
          onKeyDown: o,
          title: r,
          gap: u,
        } = t;
        return (0, i.jsx)("section", {
          className: "flex-row space-between ".concat(e),
          style: { gap: "".concat(u, "px") },
          children: (0, i.jsx)(m, {
            className: n,
            placeholder: _,
            disabled: a,
            onChange: c,
            value: l,
            type: "text",
            name: s,
            onKeyDown: o,
            title: r,
          }),
        });
      }
      var g = n(5295),
        f = n.n(g);
      function y(t) {
        let {
          type: e,
          size: n,
          radius: _,
          needActiveScale: a = !0,
          onClick: c,
          className: l,
          justifyCenter: s = !0,
          children: o,
          ...r
        } = t;
        return (0, i.jsx)("button", {
          onClick: c,
          className: ""
            .concat(l, " ")
            .concat(s && "center-element", " ")
            .concat(f().button, " ")
            .concat(a ? f().activeScale : "", " ")
            .concat(f()["size-".concat(n)], " ")
            .concat(f()[e]),
          ...r,
          style: { borderRadius: _ && "".concat(_, "px") },
          children: o,
        });
      }
      function j() {
        let {
          email: t,
          setEmail: e,
          loading: n,
          error: _,
          handleSubscribe: a,
        } = u();
        return (0, i.jsxs)("section", {
          className: "flex-row gap-4 align-center ".concat(p().container),
          children: [
            (0, i.jsxs)("div", {
              className: "relative",
              children: [
                (0, i.jsx)(b, {
                  onChange: (t) => e(t.target.value),
                  value: t,
                  placeholder: "Your email",
                  className: ""
                    .concat(p().input, " ")
                    .concat(
                      _ && p().red_border,
                      " padding-20-24 text-18 medium white",
                    ),
                }),
                _ &&
                  (0, i.jsx)("span", {
                    className: "red text-14 absolute ".concat(p().error),
                    children: _,
                  }),
              ],
            }),
            (0, i.jsx)(y, {
              type: "subscribe",
              size: "20-28",
              onClick: () => a(),
              children: n
                ? (0, i.jsx)("span", { className: p().load })
                : (0, i.jsx)("span", {
                    className: "white text-18 semibold ".concat(
                      p().button_text,
                    ),
                    children: "Subscribe",
                  }),
            }),
          ],
        });
      }
      function v() {
        return (0, i.jsxs)("section", {
          className: "flex-column gap-60px align-center",
          children: [(0, i.jsx)(s, {}), (0, i.jsx)(j, {})],
        });
      }
    },
    7038: (t, e, n) => {
      Promise.resolve().then(n.bind(n, 6977));
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    (t.O(0, [433, 209, 441, 684, 358], () => e(7038)), (_N_E = t.O()));
  },
]);
