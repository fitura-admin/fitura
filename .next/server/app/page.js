(() => {
  var e = {};
  ((e.id = 974),
    (e.ids = [974]),
    (e.modules = {
      36: (e, a, i) => {
        "use strict";
        var n = i(1176);
        if (n)
          try {
            n([], "length");
          } catch (e) {
            n = null;
          }
        e.exports = n;
      },
      46: (e, a, i) => {
        "use strict";
        (i.r(a),
          i.d(a, {
            GlobalError: () => s.a,
            __next_app__: () => u,
            pages: () => l,
            routeModule: () => d,
            tree: () => p,
          }));
        var n = i(5239),
          t = i(8088),
          o = i(8170),
          s = i.n(o),
          r = i(893),
          c = {};
        for (let e in r)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (c[e] = () => r[e]);
        i.d(a, c);
        let p = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(i.bind(i, 1204)),
                    "C:\\next\\futura\\src\\app\\page.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(i.bind(i, 4431)),
                "C:\\next\\futura\\src\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(i.t.bind(i, 7398, 23)),
                "next/dist/client/components/not-found-error",
              ],
              forbidden: [
                () => Promise.resolve().then(i.t.bind(i, 9999, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(i.t.bind(i, 5284, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
            },
          ],
          l = ["C:\\next\\futura\\src\\app\\page.tsx"],
          u = { require: i, loadChunk: () => Promise.resolve() },
          d = new n.AppPageRouteModule({
            definition: {
              kind: t.RouteKind.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: p },
          });
      },
      96: (e) => {
        "use strict";
        e.exports = URIError;
      },
      271: (e) => {
        e.exports = function (e, a) {
          var i = !Array.isArray(e),
            n = {
              index: 0,
              keyedList: i || a ? Object.keys(e) : null,
              jobs: {},
              results: i ? {} : [],
              size: i ? Object.keys(e).length : e.length,
            };
          return (
            a &&
              n.keyedList.sort(
                i
                  ? a
                  : function (i, n) {
                      return a(e[i], e[n]);
                    },
              ),
            n
          );
        };
      },
      456: () => {},
      459: (e, a, i) => {
        Promise.resolve().then(i.bind(i, 1204));
      },
      461: (e) => {
        "use strict";
        e.exports = Math.floor;
      },
      512: (e, a, i) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          !(function (e, a) {
            for (var i in a)
              Object.defineProperty(e, i, { enumerable: !0, get: a[i] });
          })(a, {
            default: function () {
              return x;
            },
            defaultHead: function () {
              return u;
            },
          }));
        let n = i(4985),
          t = i(740),
          o = i(687),
          s = t._(i(3210)),
          r = n._(i(7755)),
          c = i(4959),
          p = i(9513),
          l = i(4604);
        function u(e) {
          void 0 === e && (e = !1);
          let a = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
          return (
            e ||
              a.push(
                (0, o.jsx)(
                  "meta",
                  { name: "viewport", content: "width=device-width" },
                  "viewport",
                ),
              ),
            a
          );
        }
        function d(e, a) {
          return "string" == typeof a || "number" == typeof a
            ? e
            : a.type === s.default.Fragment
              ? e.concat(
                  s.default.Children.toArray(a.props.children).reduce(
                    (e, a) =>
                      "string" == typeof a || "number" == typeof a
                        ? e
                        : e.concat(a),
                    [],
                  ),
                )
              : e.concat(a);
        }
        i(148);
        let m = ["name", "httpEquiv", "charSet", "itemProp"];
        function f(e, a) {
          let { inAmpMode: i } = a;
          return e
            .reduce(d, [])
            .reverse()
            .concat(u(i).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  a = new Set(),
                  i = new Set(),
                  n = {};
                return (t) => {
                  let o = !0,
                    s = !1;
                  if (
                    t.key &&
                    "number" != typeof t.key &&
                    t.key.indexOf("$") > 0
                  ) {
                    s = !0;
                    let a = t.key.slice(t.key.indexOf("$") + 1);
                    e.has(a) ? (o = !1) : e.add(a);
                  }
                  switch (t.type) {
                    case "title":
                    case "base":
                      a.has(t.type) ? (o = !1) : a.add(t.type);
                      break;
                    case "meta":
                      for (let e = 0, a = m.length; e < a; e++) {
                        let a = m[e];
                        if (t.props.hasOwnProperty(a))
                          if ("charSet" === a) i.has(a) ? (o = !1) : i.add(a);
                          else {
                            let e = t.props[a],
                              i = n[a] || new Set();
                            ("name" !== a || !s) && i.has(e)
                              ? (o = !1)
                              : (i.add(e), (n[a] = i));
                          }
                      }
                  }
                  return o;
                };
              })(),
            )
            .reverse()
            .map((e, a) => {
              let n = e.key || a;
              if (
                process.env.__NEXT_OPTIMIZE_FONTS &&
                !i &&
                "link" === e.type &&
                e.props.href &&
                [
                  "https://fonts.googleapis.com/css",
                  "https://use.typekit.net/",
                ].some((a) => e.props.href.startsWith(a))
              ) {
                let a = { ...(e.props || {}) };
                return (
                  (a["data-href"] = a.href),
                  (a.href = void 0),
                  (a["data-optimized-fonts"] = !0),
                  s.default.cloneElement(e, a)
                );
              }
              return s.default.cloneElement(e, { key: n });
            });
        }
        let x = function (e) {
          let { children: a } = e,
            i = (0, s.useContext)(c.AmpStateContext),
            n = (0, s.useContext)(p.HeadManagerContext);
          return (0, o.jsx)(r.default, {
            reduceComponentsToState: f,
            headManager: n,
            inAmpMode: (0, l.isInAmpMode)(i),
            children: a,
          });
        };
        ("function" == typeof a.default ||
          ("object" == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, "__esModule", { value: !0 }),
          Object.assign(a.default, a),
          (e.exports = a.default));
      },
      607: (e, a, i) => {
        "use strict";
        var n = i(2482),
          t = i(9088),
          o = i(9819),
          s = i(1105);
        e.exports = function (e) {
          if (e.length < 1 || "function" != typeof e[0])
            throw new t("a function is required");
          return s(n, o, e);
        };
      },
      678: (e, a, i) => {
        let n = i(3997),
          t = i(8354);
        ((a.init = function (e) {
          e.inspectOpts = {};
          let i = Object.keys(a.inspectOpts);
          for (let n = 0; n < i.length; n++)
            e.inspectOpts[i[n]] = a.inspectOpts[i[n]];
        }),
          (a.log = function (...e) {
            return process.stderr.write(
              t.formatWithOptions(a.inspectOpts, ...e) + "\n",
            );
          }),
          (a.formatArgs = function (i) {
            let { namespace: n, useColors: t } = this;
            if (t) {
              let a = this.color,
                t = "\x1b[3" + (a < 8 ? a : "8;5;" + a),
                o = `  ${t};1m${n} \u001B[0m`;
              ((i[0] = o + i[0].split("\n").join("\n" + o)),
                i.push(t + "m+" + e.exports.humanize(this.diff) + "\x1b[0m"));
            } else
              i[0] =
                (a.inspectOpts.hideDate ? "" : new Date().toISOString() + " ") +
                n +
                " " +
                i[0];
          }),
          (a.save = function (e) {
            e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
          }),
          (a.load = function () {
            return process.env.DEBUG;
          }),
          (a.useColors = function () {
            return "colors" in a.inspectOpts
              ? !!a.inspectOpts.colors
              : n.isatty(process.stderr.fd);
          }),
          (a.destroy = t.deprecate(
            () => {},
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          )),
          (a.colors = [6, 2, 3, 4, 5, 1]));
        try {
          let e = i(9228);
          e &&
            (e.stderr || e).level >= 2 &&
            (a.colors = [
              20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57,
              62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99,
              112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164,
              165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185,
              196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
              209, 214, 215, 220, 221,
            ]);
        } catch (e) {}
        ((a.inspectOpts = Object.keys(process.env)
          .filter((e) => /^debug_/i.test(e))
          .reduce((e, a) => {
            let i = a
                .substring(6)
                .toLowerCase()
                .replace(/_([a-z])/g, (e, a) => a.toUpperCase()),
              n = process.env[a];
            return (
              (n =
                !!/^(yes|on|true|enabled)$/i.test(n) ||
                (!/^(no|off|false|disabled)$/i.test(n) &&
                  ("null" === n ? null : Number(n)))),
              (e[i] = n),
              e
            );
          }, {})),
          (e.exports = i(6211)(a)));
        let { formatters: o } = e.exports;
        ((o.o = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            t
              .inspect(e, this.inspectOpts)
              .split("\n")
              .map((e) => e.trim())
              .join(" ")
          );
        }),
          (o.O = function (e) {
            return (
              (this.inspectOpts.colors = this.useColors),
              t.inspect(e, this.inspectOpts)
            );
          }));
      },
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      863: (e) => {
        "use strict";
        e.exports = Math.abs;
      },
      1075: (e, a, i) => {
        Promise.resolve().then(i.bind(i, 1898));
      },
      1105: (e, a, i) => {
        "use strict";
        var n = i(2482),
          t = i(1951),
          o = i(9819);
        e.exports = i(8360) || n.call(o, t);
      },
      1133: (e, a, i) => {
        "use strict";
        var n = i(1422);
        e.exports = function (e) {
          return n(e) || 0 === e ? e : e < 0 ? -1 : 1;
        };
      },
      1176: (e) => {
        "use strict";
        e.exports = Object.getOwnPropertyDescriptor;
      },
      1204: (e, a, i) => {
        "use strict";
        (i.r(a), i.d(a, { default: () => n }));
        let n = (0, i(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\app\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\app\\page.tsx",
          "default",
        );
      },
      1244: (e, a, i) => {
        "use strict";
        i.d(a, { default: () => d });
        var n,
          t,
          o,
          s = i(687),
          r = i(3210),
          c = i(6190),
          p = i.n(c);
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var i = arguments[a];
                  for (var n in i)
                    ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        let u = function (e) {
          return r.createElement(
            "svg",
            l(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 466,
                height: 392,
                fill: "none",
              },
              e,
            ),
            n ||
              (n = r.createElement(
                "g",
                { filter: "url(#loading-logo_svg__a)", opacity: 0.5 },
                r.createElement("path", {
                  fill: "url(#loading-logo_svg__b)",
                  d: "M366 202.621C366 275.751 328.399 292 254.945 292S100 275.751 100 202.621 154.891 100 228.345 100 366 129.491 366 202.621",
                }),
              )),
            t ||
              (t = r.createElement("path", {
                fill: "#fff",
                d: "M262.336 179.321c-.892-1.058-2.559-2.321-5.439-2.321-6.786 0-13.704 6.004-18.976 16.474-2.364 4.692-4.317 10.131-5.824 16.107-.202 0-.411.007-.613.007-3.034 0-4.938-1.369-5.663-4.078-1.346-5.002 1.618-14.64 11.695-22.485v-.769h-7.567c-8.319 8.353-11.29 18.132-9.512 24.743 1.332 4.959 5.196 8 10.412 8.226A122 122 0 0 0 229.175 227h5.593c.426-4.402 1.06-8.501 1.856-12.283 15.9-3.245 27.435-20.813 27.435-30.034 0-2.201-.579-4-1.723-5.355zm-24.185 29.159c4.763-16.826 12.811-25.836 18.746-25.836.411 0 .955.057 1.192.339.119.141.384.578.384 1.693 0 6.131-8.418 19.811-20.329 23.804z",
              })),
            o ||
              (o = r.createElement(
                "defs",
                null,
                r.createElement(
                  "linearGradient",
                  {
                    id: "loading-logo_svg__b",
                    x1: 233,
                    x2: 233,
                    y1: 70.207,
                    y2: 335.034,
                    gradientUnits: "userSpaceOnUse",
                  },
                  r.createElement("stop", { stopColor: "#E46A1E" }),
                  r.createElement("stop", { offset: 1, stopColor: "#105D7E" }),
                ),
                r.createElement(
                  "filter",
                  {
                    id: "loading-logo_svg__a",
                    width: 466,
                    height: 392,
                    x: 0,
                    y: 0,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix",
                  }),
                  r.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  r.createElement("feGaussianBlur", {
                    result: "effect1_foregroundBlur_225_1021",
                    stdDeviation: 50,
                  }),
                ),
              )),
          );
        };
        function d() {
          let [e, a] = (0, r.useState)(!0),
            [i, n] = (0, r.useState)(!1);
          return (
            (0, r.useRef)(null),
            (0, s.jsx)("div", {
              className: `center ${p().container} ${i ? p().none : null} ${!e ? p().hidden : ""} absolute`,
              children: (0, s.jsx)(u, { className: p().logo }),
            })
          );
        }
        i(6208);
      },
      1261: (e, a, i) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          !(function (e, a) {
            for (var i in a)
              Object.defineProperty(e, i, { enumerable: !0, get: a[i] });
          })(a, {
            default: function () {
              return c;
            },
            getImageProps: function () {
              return r;
            },
          }));
        let n = i(4985),
          t = i(4953),
          o = i(6533),
          s = n._(i(1933));
        function r(e) {
          let { props: a } = (0, t.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, i] of Object.entries(a)) void 0 === i && delete a[e];
          return { props: a };
        }
        let c = o.Image;
      },
      1268: (e, a, i) => {
        "undefined" == typeof process ||
        "renderer" === process.type ||
        process.__nwjs
          ? (e.exports = i(6632))
          : (e.exports = i(678));
      },
      1285: (e, a, i) => {
        "use strict";
        e.exports = i(3361).getPrototypeOf || null;
      },
      1422: (e) => {
        "use strict";
        e.exports =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
      },
      1425: (e) => {
        "use strict";
        e.exports = function (e, a) {
          return (
            Object.keys(a).forEach(function (i) {
              e[i] = e[i] || a[i];
            }),
            e
          );
        };
      },
      1480: (e, a) => {
        "use strict";
        function i(e) {
          let {
              widthInt: a,
              heightInt: i,
              blurWidth: n,
              blurHeight: t,
              blurDataURL: o,
              objectFit: s,
            } = e,
            r = n ? 40 * n : a,
            c = t ? 40 * t : i,
            p = r && c ? "viewBox='0 0 " + r + " " + c + "'" : "";
          return (
            "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
            p +
            "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
            (p
              ? "none"
              : "contain" === s
                ? "xMidYMid"
                : "cover" === s
                  ? "xMidYMid slice"
                  : "none") +
            "' style='filter: url(%23b);' href='" +
            o +
            "'/%3E%3C/svg%3E"
          );
        }
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
              return i;
            },
          }));
      },
      1536: (e, a, i) => {
        var n = i(4458),
          t = i(7932);
        e.exports = function (e, a, i, o) {
          var s,
            r,
            c,
            p,
            l,
            u = i.keyedList ? i.keyedList[i.index] : i.index;
          i.jobs[u] =
            ((s = a),
            (r = u),
            (c = e[u]),
            (p = function (e, a) {
              u in i.jobs &&
                (delete i.jobs[u],
                e ? t(i) : (i.results[u] = a),
                o(e, i.results));
            }),
            2 == s.length ? s(c, n(p)) : s(c, r, n(p)));
        };
      },
      1630: (e) => {
        "use strict";
        e.exports = require("http");
      },
      1732: (e) => {
        e.exports = {
          "first-family": "button_first-family__1_g8c",
          "second-family": "button_second-family__K7H_r",
          light: "button_light__115VU",
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
      1820: (e) => {
        "use strict";
        e.exports = require("os");
      },
      1898: (e, a, i) => {
        "use strict";
        let n;
        (i.r(a), i.d(a, { default: () => it }));
        var t,
          o,
          s,
          r = {};
        (i.r(r),
          i.d(r, {
            hasBrowserEnv: () => ew,
            hasStandardBrowserEnv: () => ej,
            hasStandardBrowserWebWorkerEnv: () => ek,
            navigator: () => e_,
            origin: () => eE,
          }));
        var c = i(687),
          p = i(3210),
          l = i(3028),
          u = i.n(l),
          d = i(1261),
          m = i.n(d);
        function f() {
          return (0, c.jsxs)("div", {
            className: "flex-column align-center gap-5",
            children: [
              (0, c.jsxs)("div", {
                className: "flex-column gap-2 align-center",
                children: [
                  (0, c.jsx)("div", {
                    className: `${u().logo} relative`,
                    children: (0, c.jsx)(m(), {
                      src: "/logo.png",
                      width: 220,
                      height: 58,
                      alt: "logo",
                    }),
                  }),
                  (0, c.jsx)("h1", {
                    className: "text-60 white second-family light text-center",
                    children: "Coming soon",
                  }),
                ],
              }),
              (0, c.jsx)("h2", {
                className: `light text-28 white text-center ${u().opacity}`,
                children: "Fitness & SPA",
              }),
            ],
          });
        }
        function x(e, a) {
          return function () {
            return e.apply(a, arguments);
          };
        }
        let { toString: v } = Object.prototype,
          { getPrototypeOf: h } = Object,
          { iterator: b, toStringTag: g } = Symbol,
          y = ((e) => (a) => {
            let i = v.call(a);
            return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
          })(Object.create(null)),
          w = (e) => ((e = e.toLowerCase()), (a) => y(a) === e),
          _ = (e) => (a) => typeof a === e,
          { isArray: j } = Array,
          k = _("undefined"),
          E = w("ArrayBuffer"),
          S = _("string"),
          R = _("function"),
          C = _("number"),
          O = (e) => null !== e && "object" == typeof e,
          A = (e) => {
            if ("object" !== y(e)) return !1;
            let a = h(e);
            return (
              (null === a ||
                a === Object.prototype ||
                null === Object.getPrototypeOf(a)) &&
              !(g in e) &&
              !(b in e)
            );
          },
          T = w("Date"),
          P = w("File"),
          F = w("Blob"),
          z = w("FileList"),
          U = w("URLSearchParams"),
          [L, B, N, q] = [
            "ReadableStream",
            "Request",
            "Response",
            "Headers",
          ].map(w);
        function I(e, a, { allOwnKeys: i = !1 } = {}) {
          let n, t;
          if (null != e)
            if (("object" != typeof e && (e = [e]), j(e)))
              for (n = 0, t = e.length; n < t; n++) a.call(null, e[n], n, e);
            else {
              let t,
                o = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
                s = o.length;
              for (n = 0; n < s; n++) ((t = o[n]), a.call(null, e[t], t, e));
            }
        }
        function D(e, a) {
          let i;
          a = a.toLowerCase();
          let n = Object.keys(e),
            t = n.length;
          for (; t-- > 0; ) if (a === (i = n[t]).toLowerCase()) return i;
          return null;
        }
        let M =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : global,
          $ = (e) => !k(e) && e !== M,
          W = (
            (e) => (a) =>
              e && a instanceof e
          )("undefined" != typeof Uint8Array && h(Uint8Array)),
          G = w("HTMLFormElement"),
          H = (
            ({ hasOwnProperty: e }) =>
            (a, i) =>
              e.call(a, i)
          )(Object.prototype),
          V = w("RegExp"),
          J = (e, a) => {
            let i = Object.getOwnPropertyDescriptors(e),
              n = {};
            (I(i, (i, t) => {
              let o;
              !1 !== (o = a(i, t, e)) && (n[t] = o || i);
            }),
              Object.defineProperties(e, n));
          },
          K = w("AsyncFunction"),
          X =
            ((t = "function" == typeof setImmediate),
            (o = R(M.postMessage)),
            t
              ? setImmediate
              : o
                ? ((e, a) => (
                    M.addEventListener(
                      "message",
                      ({ source: i, data: n }) => {
                        i === M && n === e && a.length && a.shift()();
                      },
                      !1,
                    ),
                    (i) => {
                      (a.push(i), M.postMessage(e, "*"));
                    }
                  ))(`axios@${Math.random()}`, [])
                : (e) => setTimeout(e)),
          Y =
            "undefined" != typeof queueMicrotask
              ? queueMicrotask.bind(M)
              : ("undefined" != typeof process && process.nextTick) || X,
          Z = {
            isArray: j,
            isArrayBuffer: E,
            isBuffer: function (e) {
              return (
                null !== e &&
                !k(e) &&
                null !== e.constructor &&
                !k(e.constructor) &&
                R(e.constructor.isBuffer) &&
                e.constructor.isBuffer(e)
              );
            },
            isFormData: (e) => {
              let a;
              return (
                e &&
                (("function" == typeof FormData && e instanceof FormData) ||
                  (R(e.append) &&
                    ("formdata" === (a = y(e)) ||
                      ("object" === a &&
                        R(e.toString) &&
                        "[object FormData]" === e.toString()))))
              );
            },
            isArrayBufferView: function (e) {
              let a;
              return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && E(e.buffer);
            },
            isString: S,
            isNumber: C,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: O,
            isPlainObject: A,
            isReadableStream: L,
            isRequest: B,
            isResponse: N,
            isHeaders: q,
            isUndefined: k,
            isDate: T,
            isFile: P,
            isBlob: F,
            isRegExp: V,
            isFunction: R,
            isStream: (e) => O(e) && R(e.pipe),
            isURLSearchParams: U,
            isTypedArray: W,
            isFileList: z,
            forEach: I,
            merge: function e() {
              let { caseless: a } = ($(this) && this) || {},
                i = {},
                n = (n, t) => {
                  let o = (a && D(i, t)) || t;
                  A(i[o]) && A(n)
                    ? (i[o] = e(i[o], n))
                    : A(n)
                      ? (i[o] = e({}, n))
                      : j(n)
                        ? (i[o] = n.slice())
                        : (i[o] = n);
                };
              for (let e = 0, a = arguments.length; e < a; e++)
                arguments[e] && I(arguments[e], n);
              return i;
            },
            extend: (e, a, i, { allOwnKeys: n } = {}) => (
              I(
                a,
                (a, n) => {
                  i && R(a) ? (e[n] = x(a, i)) : (e[n] = a);
                },
                { allOwnKeys: n },
              ),
              e
            ),
            trim: (e) =>
              e.trim
                ? e.trim()
                : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, a, i, n) => {
              ((e.prototype = Object.create(a.prototype, n)),
                (e.prototype.constructor = e),
                Object.defineProperty(e, "super", { value: a.prototype }),
                i && Object.assign(e.prototype, i));
            },
            toFlatObject: (e, a, i, n) => {
              let t,
                o,
                s,
                r = {};
              if (((a = a || {}), null == e)) return a;
              do {
                for (o = (t = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                  ((s = t[o]),
                    (!n || n(s, e, a)) &&
                      !r[s] &&
                      ((a[s] = e[s]), (r[s] = !0)));
                e = !1 !== i && h(e);
              } while (e && (!i || i(e, a)) && e !== Object.prototype);
              return a;
            },
            kindOf: y,
            kindOfTest: w,
            endsWith: (e, a, i) => {
              ((e = String(e)),
                (void 0 === i || i > e.length) && (i = e.length),
                (i -= a.length));
              let n = e.indexOf(a, i);
              return -1 !== n && n === i;
            },
            toArray: (e) => {
              if (!e) return null;
              if (j(e)) return e;
              let a = e.length;
              if (!C(a)) return null;
              let i = Array(a);
              for (; a-- > 0; ) i[a] = e[a];
              return i;
            },
            forEachEntry: (e, a) => {
              let i,
                n = (e && e[b]).call(e);
              for (; (i = n.next()) && !i.done; ) {
                let n = i.value;
                a.call(e, n[0], n[1]);
              }
            },
            matchAll: (e, a) => {
              let i,
                n = [];
              for (; null !== (i = e.exec(a)); ) n.push(i);
              return n;
            },
            isHTMLForm: G,
            hasOwnProperty: H,
            hasOwnProp: H,
            reduceDescriptors: J,
            freezeMethods: (e) => {
              J(e, (a, i) => {
                if (R(e) && -1 !== ["arguments", "caller", "callee"].indexOf(i))
                  return !1;
                if (R(e[i])) {
                  if (((a.enumerable = !1), "writable" in a)) {
                    a.writable = !1;
                    return;
                  }
                  a.set ||
                    (a.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + i + "'",
                      );
                    });
                }
              });
            },
            toObjectSet: (e, a) => {
              let i = {};
              return (
                (j(e) ? e : String(e).split(a)).forEach((e) => {
                  i[e] = !0;
                }),
                i
              );
            },
            toCamelCase: (e) =>
              e
                .toLowerCase()
                .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, a, i) {
                  return a.toUpperCase() + i;
                }),
            noop: () => {},
            toFiniteNumber: (e, a) =>
              null != e && Number.isFinite((e *= 1)) ? e : a,
            findKey: D,
            global: M,
            isContextDefined: $,
            isSpecCompliantForm: function (e) {
              return !!(e && R(e.append) && "FormData" === e[g] && e[b]);
            },
            toJSONObject: (e) => {
              let a = Array(10),
                i = (e, n) => {
                  if (O(e)) {
                    if (a.indexOf(e) >= 0) return;
                    if (!("toJSON" in e)) {
                      a[n] = e;
                      let t = j(e) ? [] : {};
                      return (
                        I(e, (e, a) => {
                          let o = i(e, n + 1);
                          k(o) || (t[a] = o);
                        }),
                        (a[n] = void 0),
                        t
                      );
                    }
                  }
                  return e;
                };
              return i(e, 0);
            },
            isAsyncFn: K,
            isThenable: (e) => e && (O(e) || R(e)) && R(e.then) && R(e.catch),
            setImmediate: X,
            asap: Y,
            isIterable: (e) => null != e && R(e[b]),
          };
        function Q(e, a, i, n, t) {
          (Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            a && (this.code = a),
            i && (this.config = i),
            n && (this.request = n),
            t &&
              ((this.response = t),
              (this.status = t.status ? t.status : null)));
        }
        Z.inherits(Q, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: Z.toJSONObject(this.config),
              code: this.code,
              status: this.status,
            };
          },
        });
        let ee = Q.prototype,
          ea = {};
        ([
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((e) => {
          ea[e] = { value: e };
        }),
          Object.defineProperties(Q, ea),
          Object.defineProperty(ee, "isAxiosError", { value: !0 }),
          (Q.from = (e, a, i, n, t, o) => {
            let s = Object.create(ee);
            return (
              Z.toFlatObject(
                e,
                s,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e,
              ),
              Q.call(s, e.message, a, i, n, t),
              (s.cause = e),
              (s.name = e.name),
              o && Object.assign(s, o),
              s
            );
          }));
        var ei = i(5836);
        function en(e) {
          return Z.isPlainObject(e) || Z.isArray(e);
        }
        function et(e) {
          return Z.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function eo(e, a, i) {
          return e
            ? e
                .concat(a)
                .map(function (e, a) {
                  return ((e = et(e)), !i && a ? "[" + e + "]" : e);
                })
                .join(i ? "." : "")
            : a;
        }
        let es = Z.toFlatObject(Z, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
          }),
          er = function (e, a, i) {
            if (!Z.isObject(e)) throw TypeError("target must be an object");
            a = a || new (ei || FormData)();
            let n = (i = Z.toFlatObject(
                i,
                { metaTokens: !0, dots: !1, indexes: !1 },
                !1,
                function (e, a) {
                  return !Z.isUndefined(a[e]);
                },
              )).metaTokens,
              t = i.visitor || p,
              o = i.dots,
              s = i.indexes,
              r =
                (i.Blob || ("undefined" != typeof Blob && Blob)) &&
                Z.isSpecCompliantForm(a);
            if (!Z.isFunction(t)) throw TypeError("visitor must be a function");
            function c(e) {
              if (null === e) return "";
              if (Z.isDate(e)) return e.toISOString();
              if (Z.isBoolean(e)) return e.toString();
              if (!r && Z.isBlob(e))
                throw new Q("Blob is not supported. Use a Buffer instead.");
              return Z.isArrayBuffer(e) || Z.isTypedArray(e)
                ? r && "function" == typeof Blob
                  ? new Blob([e])
                  : Buffer.from(e)
                : e;
            }
            function p(e, i, t) {
              let r = e;
              if (e && !t && "object" == typeof e)
                if (Z.endsWith(i, "{}"))
                  ((i = n ? i : i.slice(0, -2)), (e = JSON.stringify(e)));
                else {
                  var p;
                  if (
                    (Z.isArray(e) && ((p = e), Z.isArray(p) && !p.some(en))) ||
                    ((Z.isFileList(e) || Z.endsWith(i, "[]")) &&
                      (r = Z.toArray(e)))
                  )
                    return (
                      (i = et(i)),
                      r.forEach(function (e, n) {
                        Z.isUndefined(e) ||
                          null === e ||
                          a.append(
                            !0 === s
                              ? eo([i], n, o)
                              : null === s
                                ? i
                                : i + "[]",
                            c(e),
                          );
                      }),
                      !1
                    );
                }
              return !!en(e) || (a.append(eo(t, i, o), c(e)), !1);
            }
            let l = [],
              u = Object.assign(es, {
                defaultVisitor: p,
                convertValue: c,
                isVisitable: en,
              });
            if (!Z.isObject(e)) throw TypeError("data must be an object");
            return (
              !(function e(i, n) {
                if (!Z.isUndefined(i)) {
                  if (-1 !== l.indexOf(i))
                    throw Error(
                      "Circular reference detected in " + n.join("."),
                    );
                  (l.push(i),
                    Z.forEach(i, function (i, o) {
                      !0 ===
                        (!(Z.isUndefined(i) || null === i) &&
                          t.call(a, i, Z.isString(o) ? o.trim() : o, n, u)) &&
                        e(i, n ? n.concat(o) : [o]);
                    }),
                    l.pop());
                }
              })(e),
              a
            );
          };
        function ec(e) {
          let a = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(e).replace(
            /[!'()~]|%20|%00/g,
            function (e) {
              return a[e];
            },
          );
        }
        function ep(e, a) {
          ((this._pairs = []), e && er(e, this, a));
        }
        let el = ep.prototype;
        function eu(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function ed(e, a, i) {
          let n;
          if (!a) return e;
          let t = (i && i.encode) || eu;
          Z.isFunction(i) && (i = { serialize: i });
          let o = i && i.serialize;
          if (
            (n = o
              ? o(a, i)
              : Z.isURLSearchParams(a)
                ? a.toString()
                : new ep(a, i).toString(t))
          ) {
            let a = e.indexOf("#");
            (-1 !== a && (e = e.slice(0, a)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + n));
          }
          return e;
        }
        ((el.append = function (e, a) {
          this._pairs.push([e, a]);
        }),
          (el.toString = function (e) {
            let a = e
              ? function (a) {
                  return e.call(this, a, ec);
                }
              : ec;
            return this._pairs
              .map(function (e) {
                return a(e[0]) + "=" + a(e[1]);
              }, "")
              .join("&");
          }));
        class em {
          constructor() {
            this.handlers = [];
          }
          use(e, a, i) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: a,
                synchronous: !!i && i.synchronous,
                runWhen: i ? i.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            Z.forEach(this.handlers, function (a) {
              null !== a && e(a);
            });
          }
        }
        let ef = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
        var ex = i(5511);
        let ev = i(9551).URLSearchParams,
          eh = "abcdefghijklmnopqrstuvwxyz",
          eb = "0123456789",
          eg = {
            DIGIT: eb,
            ALPHA: eh,
            ALPHA_DIGIT: eh + eh.toUpperCase() + eb,
          },
          ey = {
            isNode: !0,
            classes: {
              URLSearchParams: ev,
              FormData: ei,
              Blob: ("undefined" != typeof Blob && Blob) || null,
            },
            ALPHABET: eg,
            generateString: (e = 16, a = eg.ALPHA_DIGIT) => {
              let i = "",
                { length: n } = a,
                t = new Uint32Array(e);
              ex.randomFillSync(t);
              for (let o = 0; o < e; o++) i += a[t[o] % n];
              return i;
            },
            protocols: ["http", "https", "file", "data"],
          },
          ew = "undefined" != typeof window && "undefined" != typeof document,
          e_ = ("object" == typeof navigator && navigator) || void 0,
          ej =
            ew &&
            (!e_ ||
              0 > ["ReactNative", "NativeScript", "NS"].indexOf(e_.product)),
          ek =
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" == typeof self.importScripts,
          eE = (ew && window.location.href) || "http://localhost",
          eS = { ...r, ...ey },
          eR = function (e) {
            if (Z.isFormData(e) && Z.isFunction(e.entries)) {
              let a = {};
              return (
                Z.forEachEntry(e, (e, i) => {
                  !(function e(a, i, n, t) {
                    let o = a[t++];
                    if ("__proto__" === o) return !0;
                    let s = Number.isFinite(+o),
                      r = t >= a.length;
                    return (
                      ((o = !o && Z.isArray(n) ? n.length : o), r)
                        ? Z.hasOwnProp(n, o)
                          ? (n[o] = [n[o], i])
                          : (n[o] = i)
                        : ((n[o] && Z.isObject(n[o])) || (n[o] = []),
                          e(a, i, n[o], t) &&
                            Z.isArray(n[o]) &&
                            (n[o] = (function (e) {
                              let a,
                                i,
                                n = {},
                                t = Object.keys(e),
                                o = t.length;
                              for (a = 0; a < o; a++) n[(i = t[a])] = e[i];
                              return n;
                            })(n[o]))),
                      !s
                    );
                  })(
                    Z.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                      "[]" === e[0] ? "" : e[1] || e[0],
                    ),
                    i,
                    a,
                    0,
                  );
                }),
                a
              );
            }
            return null;
          },
          eC = {
            transitional: ef,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [
              function (e, a) {
                let i,
                  n = a.getContentType() || "",
                  t = n.indexOf("application/json") > -1,
                  o = Z.isObject(e);
                if (
                  (o && Z.isHTMLForm(e) && (e = new FormData(e)),
                  Z.isFormData(e))
                )
                  return t ? JSON.stringify(eR(e)) : e;
                if (
                  Z.isArrayBuffer(e) ||
                  Z.isBuffer(e) ||
                  Z.isStream(e) ||
                  Z.isFile(e) ||
                  Z.isBlob(e) ||
                  Z.isReadableStream(e)
                )
                  return e;
                if (Z.isArrayBufferView(e)) return e.buffer;
                if (Z.isURLSearchParams(e))
                  return (
                    a.setContentType(
                      "application/x-www-form-urlencoded;charset=utf-8",
                      !1,
                    ),
                    e.toString()
                  );
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                    var s, r;
                    return ((s = e),
                    (r = this.formSerializer),
                    er(
                      s,
                      new eS.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (e, a, i, n) {
                            return eS.isNode && Z.isBuffer(e)
                              ? (this.append(a, e.toString("base64")), !1)
                              : n.defaultVisitor.apply(this, arguments);
                          },
                        },
                        r,
                      ),
                    )).toString();
                  }
                  if (
                    (i = Z.isFileList(e)) ||
                    n.indexOf("multipart/form-data") > -1
                  ) {
                    let a = this.env && this.env.FormData;
                    return er(
                      i ? { "files[]": e } : e,
                      a && new a(),
                      this.formSerializer,
                    );
                  }
                }
                if (o || t) {
                  a.setContentType("application/json", !1);
                  var c = e;
                  if (Z.isString(c))
                    try {
                      return ((0, JSON.parse)(c), Z.trim(c));
                    } catch (e) {
                      if ("SyntaxError" !== e.name) throw e;
                    }
                  return (0, JSON.stringify)(c);
                }
                return e;
              },
            ],
            transformResponse: [
              function (e) {
                let a = this.transitional || eC.transitional,
                  i = a && a.forcedJSONParsing,
                  n = "json" === this.responseType;
                if (Z.isResponse(e) || Z.isReadableStream(e)) return e;
                if (e && Z.isString(e) && ((i && !this.responseType) || n)) {
                  let i = a && a.silentJSONParsing;
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (!i && n) {
                      if ("SyntaxError" === e.name)
                        throw Q.from(
                          e,
                          Q.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response,
                        );
                      throw e;
                    }
                  }
                }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: eS.classes.FormData, Blob: eS.classes.Blob },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0,
              },
            },
          };
        Z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
          eC.headers[e] = {};
        });
        let eO = Z.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          eA = (e) => {
            let a,
              i,
              n,
              t = {};
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  ((n = e.indexOf(":")),
                    (a = e.substring(0, n).trim().toLowerCase()),
                    (i = e.substring(n + 1).trim()),
                    !a ||
                      (t[a] && eO[a]) ||
                      ("set-cookie" === a
                        ? t[a]
                          ? t[a].push(i)
                          : (t[a] = [i])
                        : (t[a] = t[a] ? t[a] + ", " + i : i)));
                }),
              t
            );
          },
          eT = Symbol("internals");
        function eP(e) {
          return e && String(e).trim().toLowerCase();
        }
        function eF(e) {
          return !1 === e || null == e
            ? e
            : Z.isArray(e)
              ? e.map(eF)
              : String(e);
        }
        let ez = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
        function eU(e, a, i, n, t) {
          if (Z.isFunction(n)) return n.call(this, a, i);
          if ((t && (a = i), Z.isString(a))) {
            if (Z.isString(n)) return -1 !== a.indexOf(n);
            if (Z.isRegExp(n)) return n.test(a);
          }
        }
        class eL {
          constructor(e) {
            e && this.set(e);
          }
          set(e, a, i) {
            let n = this;
            function t(e, a, i) {
              let t = eP(a);
              if (!t) throw Error("header name must be a non-empty string");
              let o = Z.findKey(n, t);
              (o &&
                void 0 !== n[o] &&
                !0 !== i &&
                (void 0 !== i || !1 === n[o])) ||
                (n[o || a] = eF(e));
            }
            let o = (e, a) => Z.forEach(e, (e, i) => t(e, i, a));
            if (Z.isPlainObject(e) || e instanceof this.constructor) o(e, a);
            else if (Z.isString(e) && (e = e.trim()) && !ez(e)) o(eA(e), a);
            else if (Z.isObject(e) && Z.isIterable(e)) {
              let i = {},
                n,
                t;
              for (let a of e) {
                if (!Z.isArray(a))
                  throw TypeError(
                    "Object iterator must return a key-value pair",
                  );
                i[(t = a[0])] = (n = i[t])
                  ? Z.isArray(n)
                    ? [...n, a[1]]
                    : [n, a[1]]
                  : a[1];
              }
              o(i, a);
            } else null != e && t(a, e, i);
            return this;
          }
          get(e, a) {
            if ((e = eP(e))) {
              let i = Z.findKey(this, e);
              if (i) {
                let e = this[i];
                if (!a) return e;
                if (!0 === a) {
                  let a,
                    i = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (a = n.exec(e)); ) i[a[1]] = a[2];
                  return i;
                }
                if (Z.isFunction(a)) return a.call(this, e, i);
                if (Z.isRegExp(a)) return a.exec(e);
                throw TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, a) {
            if ((e = eP(e))) {
              let i = Z.findKey(this, e);
              return !!(
                i &&
                void 0 !== this[i] &&
                (!a || eU(this, this[i], i, a))
              );
            }
            return !1;
          }
          delete(e, a) {
            let i = this,
              n = !1;
            function t(e) {
              if ((e = eP(e))) {
                let t = Z.findKey(i, e);
                t && (!a || eU(i, i[t], t, a)) && (delete i[t], (n = !0));
              }
            }
            return (Z.isArray(e) ? e.forEach(t) : t(e), n);
          }
          clear(e) {
            let a = Object.keys(this),
              i = a.length,
              n = !1;
            for (; i--; ) {
              let t = a[i];
              (!e || eU(this, this[t], t, e, !0)) && (delete this[t], (n = !0));
            }
            return n;
          }
          normalize(e) {
            let a = this,
              i = {};
            return (
              Z.forEach(this, (n, t) => {
                let o = Z.findKey(i, t);
                if (o) {
                  ((a[o] = eF(n)), delete a[t]);
                  return;
                }
                let s = e
                  ? t
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, a, i) => a.toUpperCase() + i,
                      )
                  : String(t).trim();
                (s !== t && delete a[t], (a[s] = eF(n)), (i[s] = !0));
              }),
              this
            );
          }
          concat(...e) {
            return this.constructor.concat(this, ...e);
          }
          toJSON(e) {
            let a = Object.create(null);
            return (
              Z.forEach(this, (i, n) => {
                null != i &&
                  !1 !== i &&
                  (a[n] = e && Z.isArray(i) ? i.join(", ") : i);
              }),
              a
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([e, a]) => e + ": " + a)
              .join("\n");
          }
          getSetCookie() {
            return this.get("set-cookie") || [];
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...a) {
            let i = new this(e);
            return (a.forEach((e) => i.set(e)), i);
          }
          static accessor(e) {
            let a = (this[eT] = this[eT] = { accessors: {} }).accessors,
              i = this.prototype;
            function n(e) {
              let n = eP(e);
              if (!a[n]) {
                let t = Z.toCamelCase(" " + e);
                (["get", "set", "has"].forEach((a) => {
                  Object.defineProperty(i, a + t, {
                    value: function (i, n, t) {
                      return this[a].call(this, e, i, n, t);
                    },
                    configurable: !0,
                  });
                }),
                  (a[n] = !0));
              }
            }
            return (Z.isArray(e) ? e.forEach(n) : n(e), this);
          }
        }
        function eB(e, a) {
          let i = this || eC,
            n = a || i,
            t = eL.from(n.headers),
            o = n.data;
          return (
            Z.forEach(e, function (e) {
              o = e.call(i, o, t.normalize(), a ? a.status : void 0);
            }),
            t.normalize(),
            o
          );
        }
        function eN(e) {
          return !!(e && e.__CANCEL__);
        }
        function eq(e, a, i) {
          (Q.call(this, null == e ? "canceled" : e, Q.ERR_CANCELED, a, i),
            (this.name = "CanceledError"));
        }
        function eI(e, a, i) {
          let n = i.config.validateStatus;
          !i.status || !n || n(i.status)
            ? e(i)
            : a(
                new Q(
                  "Request failed with status code " + i.status,
                  [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
                    Math.floor(i.status / 100) - 4
                  ],
                  i.config,
                  i.request,
                  i,
                ),
              );
        }
        function eD(e, a, i) {
          let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
          return e && (n || !1 == i)
            ? a
              ? e.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "")
              : e
            : a;
        }
        (eL.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
          "Authorization",
        ]),
          Z.reduceDescriptors(eL.prototype, ({ value: e }, a) => {
            let i = a[0].toUpperCase() + a.slice(1);
            return {
              get: () => e,
              set(e) {
                this[i] = e;
              },
            };
          }),
          Z.freezeMethods(eL),
          Z.inherits(eq, Q, { __CANCEL__: !0 }));
        var eM = i(9243),
          e$ = i(1630),
          eW = i(5591),
          eG = i(8354),
          eH = i(9491),
          eV = i(4075);
        let eJ = "1.10.0";
        function eK(e) {
          let a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (a && a[1]) || "";
        }
        let eX = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
        var eY = i(7910);
        let eZ = Symbol("internals");
        class eQ extends eY.Transform {
          constructor(e) {
            super({
              readableHighWaterMark: (e = Z.toFlatObject(
                e,
                {
                  maxRate: 0,
                  chunkSize: 65536,
                  minChunkSize: 100,
                  timeWindow: 500,
                  ticksRate: 2,
                  samplesCount: 15,
                },
                null,
                (e, a) => !Z.isUndefined(a[e]),
              )).chunkSize,
            });
            let a = (this[eZ] = {
              timeWindow: e.timeWindow,
              chunkSize: e.chunkSize,
              maxRate: e.maxRate,
              minChunkSize: e.minChunkSize,
              bytesSeen: 0,
              isCaptured: !1,
              notifiedBytesLoaded: 0,
              ts: Date.now(),
              bytes: 0,
              onReadCallback: null,
            });
            this.on("newListener", (e) => {
              "progress" !== e || a.isCaptured || (a.isCaptured = !0);
            });
          }
          _read(e) {
            let a = this[eZ];
            return (a.onReadCallback && a.onReadCallback(), super._read(e));
          }
          _transform(e, a, i) {
            let n = this[eZ],
              t = n.maxRate,
              o = this.readableHighWaterMark,
              s = n.timeWindow,
              r = t / (1e3 / s),
              c =
                !1 !== n.minChunkSize ? Math.max(n.minChunkSize, 0.01 * r) : 0,
              p = (e, a) => {
                let i = Buffer.byteLength(e);
                ((n.bytesSeen += i),
                  (n.bytes += i),
                  n.isCaptured && this.emit("progress", n.bytesSeen),
                  this.push(e)
                    ? process.nextTick(a)
                    : (n.onReadCallback = () => {
                        ((n.onReadCallback = null), process.nextTick(a));
                      }));
              },
              l = (e, a) => {
                let i,
                  l = Buffer.byteLength(e),
                  u = null,
                  d = o,
                  m = 0;
                if (t) {
                  let e = Date.now();
                  ((!n.ts || (m = e - n.ts) >= s) &&
                    ((n.ts = e),
                    (i = r - n.bytes),
                    (n.bytes = i < 0 ? -i : 0),
                    (m = 0)),
                    (i = r - n.bytes));
                }
                if (t) {
                  if (i <= 0)
                    return setTimeout(() => {
                      a(null, e);
                    }, s - m);
                  i < d && (d = i);
                }
                (d &&
                  l > d &&
                  l - d > c &&
                  ((u = e.subarray(d)), (e = e.subarray(0, d))),
                  p(
                    e,
                    u
                      ? () => {
                          process.nextTick(a, null, u);
                        }
                      : a,
                  ));
              };
            l(e, function e(a, n) {
              if (a) return i(a);
              n ? l(n, e) : i(null);
            });
          }
        }
        var e0 = i(4735);
        let { asyncIterator: e1 } = Symbol,
          e2 = async function* (e) {
            e.stream
              ? yield* e.stream()
              : e.arrayBuffer
                ? yield await e.arrayBuffer()
                : e[e1]
                  ? yield* e[e1]()
                  : yield e;
          },
          e3 = eS.ALPHABET.ALPHA_DIGIT + "-_",
          e4 =
            "function" == typeof TextEncoder
              ? new TextEncoder()
              : new eG.TextEncoder(),
          e6 = e4.encode("\r\n");
        class e8 {
          constructor(e, a) {
            let { escapeName: i } = this.constructor,
              n = Z.isString(a),
              t = `Content-Disposition: form-data; name="${i(e)}"${!n && a.name ? `; filename="${i(a.name)}"` : ""}\r
`;
            (n
              ? (a = e4.encode(String(a).replace(/\r?\n|\r\n?/g, "\r\n")))
              : (t += `Content-Type: ${a.type || "application/octet-stream"}\r
`),
              (this.headers = e4.encode(t + "\r\n")),
              (this.contentLength = n ? a.byteLength : a.size),
              (this.size = this.headers.byteLength + this.contentLength + 2),
              (this.name = e),
              (this.value = a));
          }
          async *encode() {
            yield this.headers;
            let { value: e } = this;
            (Z.isTypedArray(e) ? yield e : yield* e2(e), yield e6);
          }
          static escapeName(e) {
            return String(e).replace(
              /[\r\n"]/g,
              (e) => ({ "\r": "%0D", "\n": "%0A", '"': "%22" })[e],
            );
          }
        }
        let e5 = (e, a, i) => {
          let {
            tag: n = "form-data-boundary",
            size: t = 25,
            boundary: o = n + "-" + eS.generateString(t, e3),
          } = i || {};
          if (!Z.isFormData(e)) throw TypeError("FormData instance required");
          if (o.length < 1 || o.length > 70)
            throw Error("boundary must be 10-70 characters long");
          let s = e4.encode("--" + o + "\r\n"),
            r = e4.encode("--" + o + "--\r\n"),
            c = r.byteLength,
            p = Array.from(e.entries()).map(([e, a]) => {
              let i = new e8(e, a);
              return ((c += i.size), i);
            });
          c += s.byteLength * p.length;
          let l = { "Content-Type": `multipart/form-data; boundary=${o}` };
          return (
            Number.isFinite((c = Z.toFiniteNumber(c))) &&
              (l["Content-Length"] = c),
            a && a(l),
            eY.Readable.from(
              (async function* () {
                for (let e of p) (yield s, yield* e.encode());
                yield r;
              })(),
            )
          );
        };
        class e9 extends eY.Transform {
          __transform(e, a, i) {
            (this.push(e), i());
          }
          _transform(e, a, i) {
            if (
              0 !== e.length &&
              ((this._transform = this.__transform), 120 !== e[0])
            ) {
              let e = Buffer.alloc(2);
              ((e[0] = 120), (e[1] = 156), this.push(e, a));
            }
            this.__transform(e, a, i);
          }
        }
        let e7 = (e, a) =>
            Z.isAsyncFn(e)
              ? function (...i) {
                  let n = i.pop();
                  e.apply(this, i).then((e) => {
                    try {
                      a ? n(null, ...a(e)) : n(null, e);
                    } catch (e) {
                      n(e);
                    }
                  }, n);
                }
              : e,
          ae = function (e, a) {
            let i,
              n = Array((e = e || 10)),
              t = Array(e),
              o = 0,
              s = 0;
            return (
              (a = void 0 !== a ? a : 1e3),
              function (r) {
                let c = Date.now(),
                  p = t[s];
                (i || (i = c), (n[o] = r), (t[o] = c));
                let l = s,
                  u = 0;
                for (; l !== o; ) ((u += n[l++]), (l %= e));
                if (((o = (o + 1) % e) === s && (s = (s + 1) % e), c - i < a))
                  return;
                let d = p && c - p;
                return d ? Math.round((1e3 * u) / d) : void 0;
              }
            );
          },
          aa = function (e, a) {
            let i,
              n,
              t = 0,
              o = 1e3 / a,
              s = (a, o = Date.now()) => {
                ((t = o),
                  (i = null),
                  n && (clearTimeout(n), (n = null)),
                  e.apply(null, a));
              };
            return [
              (...e) => {
                let a = Date.now(),
                  r = a - t;
                r >= o
                  ? s(e, a)
                  : ((i = e),
                    n ||
                      (n = setTimeout(() => {
                        ((n = null), s(i));
                      }, o - r)));
              },
              () => i && s(i),
            ];
          },
          ai = (e, a, i = 3) => {
            let n = 0,
              t = ae(50, 250);
            return aa((i) => {
              let o = i.loaded,
                s = i.lengthComputable ? i.total : void 0,
                r = o - n,
                c = t(r);
              ((n = o),
                e({
                  loaded: o,
                  total: s,
                  progress: s ? o / s : void 0,
                  bytes: r,
                  rate: c || void 0,
                  estimated: c && s && o <= s ? (s - o) / c : void 0,
                  event: i,
                  lengthComputable: null != s,
                  [a ? "download" : "upload"]: !0,
                }));
            }, i);
          },
          an = (e, a) => {
            let i = null != e;
            return [
              (n) => a[0]({ lengthComputable: i, total: e, loaded: n }),
              a[1],
            ];
          },
          at =
            (e) =>
            (...a) =>
              Z.asap(() => e(...a)),
          ao = {
            flush: eV.constants.Z_SYNC_FLUSH,
            finishFlush: eV.constants.Z_SYNC_FLUSH,
          },
          as = {
            flush: eV.constants.BROTLI_OPERATION_FLUSH,
            finishFlush: eV.constants.BROTLI_OPERATION_FLUSH,
          },
          ar = Z.isFunction(eV.createBrotliDecompress),
          { http: ac, https: ap } = eH,
          al = /https:?/,
          au = eS.protocols.map((e) => e + ":"),
          ad = (e, [a, i]) => (e.on("end", i).on("error", i), a);
        function am(e, a) {
          (e.beforeRedirects.proxy && e.beforeRedirects.proxy(e),
            e.beforeRedirects.config && e.beforeRedirects.config(e, a));
        }
        let af =
            "undefined" != typeof process && "process" === Z.kindOf(process),
          ax = (e) =>
            new Promise((a, i) => {
              let n,
                t,
                o = (e, a) => {
                  !t && ((t = !0), n && n(e, a));
                },
                s = (e) => {
                  (o(e, !0), i(e));
                };
              e(
                (e) => {
                  (o(e), a(e));
                },
                s,
                (e) => (n = e),
              ).catch(s);
            }),
          av = ({ address: e, family: a }) => {
            if (!Z.isString(e)) throw TypeError("address must be a string");
            return { address: e, family: a || (0 > e.indexOf(".") ? 6 : 4) };
          },
          ah = (e, a) => av(Z.isObject(e) ? e : { address: e, family: a }),
          ab =
            af &&
            function (e) {
              return ax(async function (a, i, n) {
                let t,
                  o,
                  s,
                  r,
                  c,
                  p,
                  l,
                  { data: u, lookup: d, family: m } = e,
                  { responseType: f, responseEncoding: x } = e,
                  v = e.method.toUpperCase(),
                  h = !1;
                if (d) {
                  let e = e7(d, (e) => (Z.isArray(e) ? e : [e]));
                  d = (a, i, n) => {
                    e(a, i, (e, a, t) => {
                      if (e) return n(e);
                      let o = Z.isArray(a) ? a.map((e) => ah(e)) : [ah(a, t)];
                      i.all ? n(e, o) : n(e, o[0].address, o[0].family);
                    });
                  };
                }
                let b = new e0.EventEmitter(),
                  g = () => {
                    (e.cancelToken && e.cancelToken.unsubscribe(y),
                      e.signal && e.signal.removeEventListener("abort", y),
                      b.removeAllListeners());
                  };
                function y(a) {
                  b.emit("abort", !a || a.type ? new eq(null, e, c) : a);
                }
                (n((e, a) => {
                  ((r = !0), a && ((h = !0), g()));
                }),
                  b.once("abort", i),
                  (e.cancelToken || e.signal) &&
                    (e.cancelToken && e.cancelToken.subscribe(y),
                    e.signal &&
                      (e.signal.aborted
                        ? y()
                        : e.signal.addEventListener("abort", y))));
                let w = new URL(
                    eD(e.baseURL, e.url, e.allowAbsoluteUrls),
                    eS.hasBrowserEnv ? eS.origin : void 0,
                  ),
                  _ = w.protocol || au[0];
                if ("data:" === _) {
                  let n;
                  if ("GET" !== v)
                    return eI(a, i, {
                      status: 405,
                      statusText: "method not allowed",
                      headers: {},
                      config: e,
                    });
                  try {
                    n = (function (e, a, i) {
                      let n = (i && i.Blob) || eS.classes.Blob,
                        t = eK(e);
                      if ((void 0 === a && n && (a = !0), "data" === t)) {
                        e = t.length ? e.slice(t.length + 1) : e;
                        let i = eX.exec(e);
                        if (!i) throw new Q("Invalid URL", Q.ERR_INVALID_URL);
                        let o = i[1],
                          s = i[2],
                          r = i[3],
                          c = Buffer.from(
                            decodeURIComponent(r),
                            s ? "base64" : "utf8",
                          );
                        if (a) {
                          if (!n)
                            throw new Q(
                              "Blob is not supported",
                              Q.ERR_NOT_SUPPORT,
                            );
                          return new n([c], { type: o });
                        }
                        return c;
                      }
                      throw new Q(
                        "Unsupported protocol " + t,
                        Q.ERR_NOT_SUPPORT,
                      );
                    })(e.url, "blob" === f, { Blob: e.env && e.env.Blob });
                  } catch (a) {
                    throw Q.from(a, Q.ERR_BAD_REQUEST, e);
                  }
                  return (
                    "text" === f
                      ? ((n = n.toString(x)),
                        (x && "utf8" !== x) || (n = Z.stripBOM(n)))
                      : "stream" === f && (n = eY.Readable.from(n)),
                    eI(a, i, {
                      data: n,
                      status: 200,
                      statusText: "OK",
                      headers: new eL(),
                      config: e,
                    })
                  );
                }
                if (-1 === au.indexOf(_))
                  return i(
                    new Q("Unsupported protocol " + _, Q.ERR_BAD_REQUEST, e),
                  );
                let j = eL.from(e.headers).normalize();
                j.set("User-Agent", "axios/" + eJ, !1);
                let { onUploadProgress: k, onDownloadProgress: E } = e,
                  S = e.maxRate;
                if (Z.isSpecCompliantForm(u)) {
                  let e = j.getContentType(/boundary=([-_\w\d]{10,70})/i);
                  u = e5(
                    u,
                    (e) => {
                      j.set(e);
                    },
                    {
                      tag: `axios-${eJ}-boundary`,
                      boundary: (e && e[1]) || void 0,
                    },
                  );
                } else if (Z.isFormData(u) && Z.isFunction(u.getHeaders)) {
                  if ((j.set(u.getHeaders()), !j.hasContentLength()))
                    try {
                      let e = await eG.promisify(u.getLength).call(u);
                      Number.isFinite(e) && e >= 0 && j.setContentLength(e);
                    } catch (e) {}
                } else if (Z.isBlob(u) || Z.isFile(u))
                  (u.size &&
                    j.setContentType(u.type || "application/octet-stream"),
                    j.setContentLength(u.size || 0),
                    (u = eY.Readable.from(e2(u))));
                else if (u && !Z.isStream(u)) {
                  if (Buffer.isBuffer(u));
                  else if (Z.isArrayBuffer(u))
                    u = Buffer.from(new Uint8Array(u));
                  else {
                    if (!Z.isString(u))
                      return i(
                        new Q(
                          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
                          Q.ERR_BAD_REQUEST,
                          e,
                        ),
                      );
                    u = Buffer.from(u, "utf-8");
                  }
                  if (
                    (j.setContentLength(u.length, !1),
                    e.maxBodyLength > -1 && u.length > e.maxBodyLength)
                  )
                    return i(
                      new Q(
                        "Request body larger than maxBodyLength limit",
                        Q.ERR_BAD_REQUEST,
                        e,
                      ),
                    );
                }
                let R = Z.toFiniteNumber(j.getContentLength());
                (Z.isArray(S) ? ((t = S[0]), (o = S[1])) : (t = o = S),
                  u &&
                    (k || t) &&
                    (Z.isStream(u) ||
                      (u = eY.Readable.from(u, { objectMode: !1 })),
                    (u = eY.pipeline(
                      [u, new eQ({ maxRate: Z.toFiniteNumber(t) })],
                      Z.noop,
                    )),
                    k && u.on("progress", ad(u, an(R, ai(at(k), !1, 3))))),
                  e.auth &&
                    (s =
                      (e.auth.username || "") + ":" + (e.auth.password || "")),
                  !s && w.username && (s = w.username + ":" + w.password),
                  s && j.delete("authorization"));
                try {
                  p = ed(
                    w.pathname + w.search,
                    e.params,
                    e.paramsSerializer,
                  ).replace(/^\?/, "");
                } catch (n) {
                  let a = Error(n.message);
                  return (
                    (a.config = e),
                    (a.url = e.url),
                    (a.exists = !0),
                    i(a)
                  );
                }
                j.set(
                  "Accept-Encoding",
                  "gzip, compress, deflate" + (ar ? ", br" : ""),
                  !1,
                );
                let C = {
                  path: p,
                  method: v,
                  headers: j.toJSON(),
                  agents: { http: e.httpAgent, https: e.httpsAgent },
                  auth: s,
                  protocol: _,
                  family: m,
                  beforeRedirect: am,
                  beforeRedirects: {},
                };
                (Z.isUndefined(d) || (C.lookup = d),
                  e.socketPath
                    ? (C.socketPath = e.socketPath)
                    : ((C.hostname = w.hostname.startsWith("[")
                        ? w.hostname.slice(1, -1)
                        : w.hostname),
                      (C.port = w.port),
                      (function e(a, i, n) {
                        let t = i;
                        if (!t && !1 !== t) {
                          let e = eM.getProxyForUrl(n);
                          e && (t = new URL(e));
                        }
                        if (t) {
                          if (
                            (t.username &&
                              (t.auth =
                                (t.username || "") + ":" + (t.password || "")),
                            t.auth)
                          ) {
                            (t.auth.username || t.auth.password) &&
                              (t.auth =
                                (t.auth.username || "") +
                                ":" +
                                (t.auth.password || ""));
                            let e = Buffer.from(t.auth, "utf8").toString(
                              "base64",
                            );
                            a.headers["Proxy-Authorization"] = "Basic " + e;
                          }
                          a.headers.host =
                            a.hostname + (a.port ? ":" + a.port : "");
                          let e = t.hostname || t.host;
                          ((a.hostname = e),
                            (a.host = e),
                            (a.port = t.port),
                            (a.path = n),
                            t.protocol &&
                              (a.protocol = t.protocol.includes(":")
                                ? t.protocol
                                : `${t.protocol}:`));
                        }
                        a.beforeRedirects.proxy = function (a) {
                          e(a, i, a.href);
                        };
                      })(
                        C,
                        e.proxy,
                        _ +
                          "//" +
                          w.hostname +
                          (w.port ? ":" + w.port : "") +
                          C.path,
                      )));
                let O = al.test(C.protocol);
                if (
                  ((C.agent = O ? e.httpsAgent : e.httpAgent),
                  e.transport
                    ? (l = e.transport)
                    : 0 === e.maxRedirects
                      ? (l = O ? eW : e$)
                      : (e.maxRedirects && (C.maxRedirects = e.maxRedirects),
                        e.beforeRedirect &&
                          (C.beforeRedirects.config = e.beforeRedirect),
                        (l = O ? ap : ac)),
                  e.maxBodyLength > -1
                    ? (C.maxBodyLength = e.maxBodyLength)
                    : (C.maxBodyLength = 1 / 0),
                  e.insecureHTTPParser &&
                    (C.insecureHTTPParser = e.insecureHTTPParser),
                  (c = l.request(C, function (n) {
                    if (c.destroyed) return;
                    let t = [n],
                      s = +n.headers["content-length"];
                    if (E || o) {
                      let e = new eQ({ maxRate: Z.toFiniteNumber(o) });
                      (E && e.on("progress", ad(e, an(s, ai(at(E), !0, 3)))),
                        t.push(e));
                    }
                    let r = n,
                      p = n.req || c;
                    if (!1 !== e.decompress && n.headers["content-encoding"])
                      switch (
                        (("HEAD" === v || 204 === n.statusCode) &&
                          delete n.headers["content-encoding"],
                        (n.headers["content-encoding"] || "").toLowerCase())
                      ) {
                        case "gzip":
                        case "x-gzip":
                        case "compress":
                        case "x-compress":
                          (t.push(eV.createUnzip(ao)),
                            delete n.headers["content-encoding"]);
                          break;
                        case "deflate":
                          (t.push(new e9()),
                            t.push(eV.createUnzip(ao)),
                            delete n.headers["content-encoding"]);
                          break;
                        case "br":
                          ar &&
                            (t.push(eV.createBrotliDecompress(as)),
                            delete n.headers["content-encoding"]);
                      }
                    r = t.length > 1 ? eY.pipeline(t, Z.noop) : t[0];
                    let l = eY.finished(r, () => {
                        (l(), g());
                      }),
                      u = {
                        status: n.statusCode,
                        statusText: n.statusMessage,
                        headers: new eL(n.headers),
                        config: e,
                        request: p,
                      };
                    if ("stream" === f) ((u.data = r), eI(a, i, u));
                    else {
                      let n = [],
                        t = 0;
                      (r.on("data", function (a) {
                        (n.push(a),
                          (t += a.length),
                          e.maxContentLength > -1 &&
                            t > e.maxContentLength &&
                            ((h = !0),
                            r.destroy(),
                            i(
                              new Q(
                                "maxContentLength size of " +
                                  e.maxContentLength +
                                  " exceeded",
                                Q.ERR_BAD_RESPONSE,
                                e,
                                p,
                              ),
                            )));
                      }),
                        r.on("aborted", function () {
                          if (h) return;
                          let a = new Q(
                            "stream has been aborted",
                            Q.ERR_BAD_RESPONSE,
                            e,
                            p,
                          );
                          (r.destroy(a), i(a));
                        }),
                        r.on("error", function (a) {
                          c.destroyed || i(Q.from(a, null, e, p));
                        }),
                        r.on("end", function () {
                          try {
                            let e = 1 === n.length ? n[0] : Buffer.concat(n);
                            ("arraybuffer" !== f &&
                              ((e = e.toString(x)),
                              (x && "utf8" !== x) || (e = Z.stripBOM(e))),
                              (u.data = e));
                          } catch (a) {
                            return i(Q.from(a, null, e, u.request, u));
                          }
                          eI(a, i, u);
                        }));
                    }
                    b.once("abort", (e) => {
                      r.destroyed || (r.emit("error", e), r.destroy());
                    });
                  })),
                  b.once("abort", (e) => {
                    (i(e), c.destroy(e));
                  }),
                  c.on("error", function (a) {
                    i(Q.from(a, null, e, c));
                  }),
                  c.on("socket", function (e) {
                    e.setKeepAlive(!0, 6e4);
                  }),
                  e.timeout)
                ) {
                  let a = parseInt(e.timeout, 10);
                  if (Number.isNaN(a))
                    return void i(
                      new Q(
                        "error trying to parse `config.timeout` to int",
                        Q.ERR_BAD_OPTION_VALUE,
                        e,
                        c,
                      ),
                    );
                  c.setTimeout(a, function () {
                    if (r) return;
                    let a = e.timeout
                        ? "timeout of " + e.timeout + "ms exceeded"
                        : "timeout exceeded",
                      n = e.transitional || ef;
                    (e.timeoutErrorMessage && (a = e.timeoutErrorMessage),
                      i(
                        new Q(
                          a,
                          n.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                          e,
                          c,
                        ),
                      ),
                      y());
                  });
                }
                if (Z.isStream(u)) {
                  let a = !1,
                    i = !1;
                  (u.on("end", () => {
                    a = !0;
                  }),
                    u.once("error", (e) => {
                      ((i = !0), c.destroy(e));
                    }),
                    u.on("close", () => {
                      a ||
                        i ||
                        y(new eq("Request stream has been aborted", e, c));
                    }),
                    u.pipe(c));
                } else c.end(u);
              });
            },
          ag = eS.hasStandardBrowserEnv
            ? ((e, a) => (i) => (
                (i = new URL(i, eS.origin)),
                e.protocol === i.protocol &&
                  e.host === i.host &&
                  (a || e.port === i.port)
              ))(
                new URL(eS.origin),
                eS.navigator && /(msie|trident)/i.test(eS.navigator.userAgent),
              )
            : () => !0,
          ay = eS.hasStandardBrowserEnv
            ? {
                write(e, a, i, n, t, o) {
                  let s = [e + "=" + encodeURIComponent(a)];
                  (Z.isNumber(i) &&
                    s.push("expires=" + new Date(i).toGMTString()),
                    Z.isString(n) && s.push("path=" + n),
                    Z.isString(t) && s.push("domain=" + t),
                    !0 === o && s.push("secure"),
                    (document.cookie = s.join("; ")));
                },
                read(e) {
                  let a = document.cookie.match(
                    RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                  );
                  return a ? decodeURIComponent(a[3]) : null;
                },
                remove(e) {
                  this.write(e, "", Date.now() - 864e5);
                },
              }
            : { write() {}, read: () => null, remove() {} },
          aw = (e) => (e instanceof eL ? { ...e } : e);
        function a_(e, a) {
          a = a || {};
          let i = {};
          function n(e, a, i, n) {
            return Z.isPlainObject(e) && Z.isPlainObject(a)
              ? Z.merge.call({ caseless: n }, e, a)
              : Z.isPlainObject(a)
                ? Z.merge({}, a)
                : Z.isArray(a)
                  ? a.slice()
                  : a;
          }
          function t(e, a, i, t) {
            return Z.isUndefined(a)
              ? Z.isUndefined(e)
                ? void 0
                : n(void 0, e, i, t)
              : n(e, a, i, t);
          }
          function o(e, a) {
            if (!Z.isUndefined(a)) return n(void 0, a);
          }
          function s(e, a) {
            return Z.isUndefined(a)
              ? Z.isUndefined(e)
                ? void 0
                : n(void 0, e)
              : n(void 0, a);
          }
          function r(i, t, o) {
            return o in a ? n(i, t) : o in e ? n(void 0, i) : void 0;
          }
          let c = {
            url: o,
            method: o,
            data: o,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            withXSRFToken: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: r,
            headers: (e, a, i) => t(aw(e), aw(a), i, !0),
          };
          return (
            Z.forEach(Object.keys(Object.assign({}, e, a)), function (n) {
              let o = c[n] || t,
                s = o(e[n], a[n], n);
              (Z.isUndefined(s) && o !== r) || (i[n] = s);
            }),
            i
          );
        }
        let aj = (e) => {
            let a,
              i = a_({}, e),
              {
                data: n,
                withXSRFToken: t,
                xsrfHeaderName: o,
                xsrfCookieName: s,
                headers: r,
                auth: c,
              } = i;
            if (
              ((i.headers = r = eL.from(r)),
              (i.url = ed(
                eD(i.baseURL, i.url, i.allowAbsoluteUrls),
                e.params,
                e.paramsSerializer,
              )),
              c &&
                r.set(
                  "Authorization",
                  "Basic " +
                    btoa(
                      (c.username || "") +
                        ":" +
                        (c.password
                          ? unescape(encodeURIComponent(c.password))
                          : ""),
                    ),
                ),
              Z.isFormData(n))
            ) {
              if (eS.hasStandardBrowserEnv || eS.hasStandardBrowserWebWorkerEnv)
                r.setContentType(void 0);
              else if (!1 !== (a = r.getContentType())) {
                let [e, ...i] = a
                  ? a
                      .split(";")
                      .map((e) => e.trim())
                      .filter(Boolean)
                  : [];
                r.setContentType([e || "multipart/form-data", ...i].join("; "));
              }
            }
            if (
              eS.hasStandardBrowserEnv &&
              (t && Z.isFunction(t) && (t = t(i)), t || (!1 !== t && ag(i.url)))
            ) {
              let e = o && s && ay.read(s);
              e && r.set(o, e);
            }
            return i;
          },
          ak =
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (a, i) {
                let n,
                  t,
                  o,
                  s,
                  r,
                  c = aj(e),
                  p = c.data,
                  l = eL.from(c.headers).normalize(),
                  {
                    responseType: u,
                    onUploadProgress: d,
                    onDownloadProgress: m,
                  } = c;
                function f() {
                  (s && s(),
                    r && r(),
                    c.cancelToken && c.cancelToken.unsubscribe(n),
                    c.signal && c.signal.removeEventListener("abort", n));
                }
                let x = new XMLHttpRequest();
                function v() {
                  if (!x) return;
                  let n = eL.from(
                    "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
                  );
                  (eI(
                    function (e) {
                      (a(e), f());
                    },
                    function (e) {
                      (i(e), f());
                    },
                    {
                      data:
                        u && "text" !== u && "json" !== u
                          ? x.response
                          : x.responseText,
                      status: x.status,
                      statusText: x.statusText,
                      headers: n,
                      config: e,
                      request: x,
                    },
                  ),
                    (x = null));
                }
                (x.open(c.method.toUpperCase(), c.url, !0),
                  (x.timeout = c.timeout),
                  "onloadend" in x
                    ? (x.onloadend = v)
                    : (x.onreadystatechange = function () {
                        x &&
                          4 === x.readyState &&
                          (0 !== x.status ||
                            (x.responseURL &&
                              0 === x.responseURL.indexOf("file:"))) &&
                          setTimeout(v);
                      }),
                  (x.onabort = function () {
                    x &&
                      (i(new Q("Request aborted", Q.ECONNABORTED, e, x)),
                      (x = null));
                  }),
                  (x.onerror = function () {
                    (i(new Q("Network Error", Q.ERR_NETWORK, e, x)),
                      (x = null));
                  }),
                  (x.ontimeout = function () {
                    let a = c.timeout
                        ? "timeout of " + c.timeout + "ms exceeded"
                        : "timeout exceeded",
                      n = c.transitional || ef;
                    (c.timeoutErrorMessage && (a = c.timeoutErrorMessage),
                      i(
                        new Q(
                          a,
                          n.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                          e,
                          x,
                        ),
                      ),
                      (x = null));
                  }),
                  void 0 === p && l.setContentType(null),
                  "setRequestHeader" in x &&
                    Z.forEach(l.toJSON(), function (e, a) {
                      x.setRequestHeader(a, e);
                    }),
                  Z.isUndefined(c.withCredentials) ||
                    (x.withCredentials = !!c.withCredentials),
                  u && "json" !== u && (x.responseType = c.responseType),
                  m &&
                    (([o, r] = ai(m, !0)), x.addEventListener("progress", o)),
                  d &&
                    x.upload &&
                    (([t, s] = ai(d)),
                    x.upload.addEventListener("progress", t),
                    x.upload.addEventListener("loadend", s)),
                  (c.cancelToken || c.signal) &&
                    ((n = (a) => {
                      x &&
                        (i(!a || a.type ? new eq(null, e, x) : a),
                        x.abort(),
                        (x = null));
                    }),
                    c.cancelToken && c.cancelToken.subscribe(n),
                    c.signal &&
                      (c.signal.aborted
                        ? n()
                        : c.signal.addEventListener("abort", n))));
                let h = eK(c.url);
                if (h && -1 === eS.protocols.indexOf(h))
                  return void i(
                    new Q(
                      "Unsupported protocol " + h + ":",
                      Q.ERR_BAD_REQUEST,
                      e,
                    ),
                  );
                x.send(p || null);
              });
            },
          aE = (e, a) => {
            let { length: i } = (e = e ? e.filter(Boolean) : []);
            if (a || i) {
              let i,
                n = new AbortController(),
                t = function (e) {
                  if (!i) {
                    ((i = !0), s());
                    let a = e instanceof Error ? e : this.reason;
                    n.abort(
                      a instanceof Q
                        ? a
                        : new eq(a instanceof Error ? a.message : a),
                    );
                  }
                },
                o =
                  a &&
                  setTimeout(() => {
                    ((o = null),
                      t(new Q(`timeout ${a} of ms exceeded`, Q.ETIMEDOUT)));
                  }, a),
                s = () => {
                  e &&
                    (o && clearTimeout(o),
                    (o = null),
                    e.forEach((e) => {
                      e.unsubscribe
                        ? e.unsubscribe(t)
                        : e.removeEventListener("abort", t);
                    }),
                    (e = null));
                };
              e.forEach((e) => e.addEventListener("abort", t));
              let { signal: r } = n;
              return ((r.unsubscribe = () => Z.asap(s)), r);
            }
          },
          aS = function* (e, a) {
            let i,
              n = e.byteLength;
            if (!a || n < a) return void (yield e);
            let t = 0;
            for (; t < n; ) ((i = t + a), yield e.slice(t, i), (t = i));
          },
          aR = async function* (e, a) {
            for await (let i of aC(e)) yield* aS(i, a);
          },
          aC = async function* (e) {
            if (e[Symbol.asyncIterator]) return void (yield* e);
            let a = e.getReader();
            try {
              for (;;) {
                let { done: e, value: i } = await a.read();
                if (e) break;
                yield i;
              }
            } finally {
              await a.cancel();
            }
          },
          aO = (e, a, i, n) => {
            let t,
              o = aR(e, a),
              s = 0,
              r = (e) => {
                !t && ((t = !0), n && n(e));
              };
            return new ReadableStream(
              {
                async pull(e) {
                  try {
                    let { done: a, value: n } = await o.next();
                    if (a) {
                      (r(), e.close());
                      return;
                    }
                    let t = n.byteLength;
                    if (i) {
                      let e = (s += t);
                      i(e);
                    }
                    e.enqueue(new Uint8Array(n));
                  } catch (e) {
                    throw (r(e), e);
                  }
                },
                cancel: (e) => (r(e), o.return()),
              },
              { highWaterMark: 2 },
            );
          },
          aA =
            "function" == typeof fetch &&
            "function" == typeof Request &&
            "function" == typeof Response,
          aT = aA && "function" == typeof ReadableStream,
          aP =
            aA &&
            ("function" == typeof TextEncoder
              ? ((n = new TextEncoder()), (e) => n.encode(e))
              : async (e) =>
                  new Uint8Array(await new Response(e).arrayBuffer())),
          aF = (e, ...a) => {
            try {
              return !!e(...a);
            } catch (e) {
              return !1;
            }
          },
          az =
            aT &&
            aF(() => {
              let e = !1,
                a = new Request(eS.origin, {
                  body: new ReadableStream(),
                  method: "POST",
                  get duplex() {
                    return ((e = !0), "half");
                  },
                }).headers.has("Content-Type");
              return e && !a;
            }),
          aU = aT && aF(() => Z.isReadableStream(new Response("").body)),
          aL = { stream: aU && ((e) => e.body) };
        aA &&
          ((s = new Response()),
          ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
            aL[e] ||
              (aL[e] = Z.isFunction(s[e])
                ? (a) => a[e]()
                : (a, i) => {
                    throw new Q(
                      `Response type '${e}' is not supported`,
                      Q.ERR_NOT_SUPPORT,
                      i,
                    );
                  });
          }));
        let aB = async (e) => {
            if (null == e) return 0;
            if (Z.isBlob(e)) return e.size;
            if (Z.isSpecCompliantForm(e)) {
              let a = new Request(eS.origin, { method: "POST", body: e });
              return (await a.arrayBuffer()).byteLength;
            }
            return Z.isArrayBufferView(e) || Z.isArrayBuffer(e)
              ? e.byteLength
              : (Z.isURLSearchParams(e) && (e += ""), Z.isString(e))
                ? (await aP(e)).byteLength
                : void 0;
          },
          aN = async (e, a) => {
            let i = Z.toFiniteNumber(e.getContentLength());
            return null == i ? aB(a) : i;
          },
          aq = {
            http: ab,
            xhr: ak,
            fetch:
              aA &&
              (async (e) => {
                let a,
                  i,
                  {
                    url: n,
                    method: t,
                    data: o,
                    signal: s,
                    cancelToken: r,
                    timeout: c,
                    onDownloadProgress: p,
                    onUploadProgress: l,
                    responseType: u,
                    headers: d,
                    withCredentials: m = "same-origin",
                    fetchOptions: f,
                  } = aj(e);
                u = u ? (u + "").toLowerCase() : "text";
                let x = aE([s, r && r.toAbortSignal()], c),
                  v =
                    x &&
                    x.unsubscribe &&
                    (() => {
                      x.unsubscribe();
                    });
                try {
                  if (
                    l &&
                    az &&
                    "get" !== t &&
                    "head" !== t &&
                    0 !== (i = await aN(d, o))
                  ) {
                    let e,
                      a = new Request(n, {
                        method: "POST",
                        body: o,
                        duplex: "half",
                      });
                    if (
                      (Z.isFormData(o) &&
                        (e = a.headers.get("content-type")) &&
                        d.setContentType(e),
                      a.body)
                    ) {
                      let [e, n] = an(i, ai(at(l)));
                      o = aO(a.body, 65536, e, n);
                    }
                  }
                  Z.isString(m) || (m = m ? "include" : "omit");
                  let s = "credentials" in Request.prototype;
                  a = new Request(n, {
                    ...f,
                    signal: x,
                    method: t.toUpperCase(),
                    headers: d.normalize().toJSON(),
                    body: o,
                    duplex: "half",
                    credentials: s ? m : void 0,
                  });
                  let r = await fetch(a, f),
                    c = aU && ("stream" === u || "response" === u);
                  if (aU && (p || (c && v))) {
                    let e = {};
                    ["status", "statusText", "headers"].forEach((a) => {
                      e[a] = r[a];
                    });
                    let a = Z.toFiniteNumber(r.headers.get("content-length")),
                      [i, n] = (p && an(a, ai(at(p), !0))) || [];
                    r = new Response(
                      aO(r.body, 65536, i, () => {
                        (n && n(), v && v());
                      }),
                      e,
                    );
                  }
                  u = u || "text";
                  let h = await aL[Z.findKey(aL, u) || "text"](r, e);
                  return (
                    !c && v && v(),
                    await new Promise((i, n) => {
                      eI(i, n, {
                        data: h,
                        headers: eL.from(r.headers),
                        status: r.status,
                        statusText: r.statusText,
                        config: e,
                        request: a,
                      });
                    })
                  );
                } catch (i) {
                  if (
                    (v && v(),
                    i &&
                      "TypeError" === i.name &&
                      /Load failed|fetch/i.test(i.message))
                  )
                    throw Object.assign(
                      new Q("Network Error", Q.ERR_NETWORK, e, a),
                      { cause: i.cause || i },
                    );
                  throw Q.from(i, i && i.code, e, a);
                }
              }),
          };
        Z.forEach(aq, (e, a) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: a });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: a });
          }
        });
        let aI = (e) => `- ${e}`,
          aD = (e) => Z.isFunction(e) || null === e || !1 === e,
          aM = {
            getAdapter: (e) => {
              let a,
                i,
                { length: n } = (e = Z.isArray(e) ? e : [e]),
                t = {};
              for (let o = 0; o < n; o++) {
                let n;
                if (
                  ((i = a = e[o]),
                  !aD(a) && void 0 === (i = aq[(n = String(a)).toLowerCase()]))
                )
                  throw new Q(`Unknown adapter '${n}'`);
                if (i) break;
                t[n || "#" + o] = i;
              }
              if (!i) {
                let e = Object.entries(t).map(
                  ([e, a]) =>
                    `adapter ${e} ` +
                    (!1 === a
                      ? "is not supported by the environment"
                      : "is not available in the build"),
                );
                throw new Q(
                  "There is no suitable adapter to dispatch the request " +
                    (n
                      ? e.length > 1
                        ? "since :\n" + e.map(aI).join("\n")
                        : " " + aI(e[0])
                      : "as no adapter specified"),
                  "ERR_NOT_SUPPORT",
                );
              }
              return i;
            },
          };
        function a$(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new eq(null, e);
        }
        function aW(e) {
          return (
            a$(e),
            (e.headers = eL.from(e.headers)),
            (e.data = eB.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) &&
              e.headers.setContentType("application/x-www-form-urlencoded", !1),
            aM
              .getAdapter(e.adapter || eC.adapter)(e)
              .then(
                function (a) {
                  return (
                    a$(e),
                    (a.data = eB.call(e, e.transformResponse, a)),
                    (a.headers = eL.from(a.headers)),
                    a
                  );
                },
                function (a) {
                  return (
                    !eN(a) &&
                      (a$(e),
                      a &&
                        a.response &&
                        ((a.response.data = eB.call(
                          e,
                          e.transformResponse,
                          a.response,
                        )),
                        (a.response.headers = eL.from(a.response.headers)))),
                    Promise.reject(a)
                  );
                },
              )
          );
        }
        let aG = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (e, a) => {
            aG[e] = function (i) {
              return typeof i === e || "a" + (a < 1 ? "n " : " ") + e;
            };
          },
        );
        let aH = {};
        ((aG.transitional = function (e, a, i) {
          function n(e, a) {
            return (
              "[Axios v" +
              eJ +
              "] Transitional option '" +
              e +
              "'" +
              a +
              (i ? ". " + i : "")
            );
          }
          return (i, t, o) => {
            if (!1 === e)
              throw new Q(
                n(t, " has been removed" + (a ? " in " + a : "")),
                Q.ERR_DEPRECATED,
              );
            return (
              a &&
                !aH[t] &&
                ((aH[t] = !0),
                console.warn(
                  n(
                    t,
                    " has been deprecated since v" +
                      a +
                      " and will be removed in the near future",
                  ),
                )),
              !e || e(i, t, o)
            );
          };
        }),
          (aG.spelling = function (e) {
            return (a, i) => (
              console.warn(`${i} is likely a misspelling of ${e}`),
              !0
            );
          }));
        let aV = {
            assertOptions: function (e, a, i) {
              if ("object" != typeof e)
                throw new Q(
                  "options must be an object",
                  Q.ERR_BAD_OPTION_VALUE,
                );
              let n = Object.keys(e),
                t = n.length;
              for (; t-- > 0; ) {
                let o = n[t],
                  s = a[o];
                if (s) {
                  let a = e[o],
                    i = void 0 === a || s(a, o, e);
                  if (!0 !== i)
                    throw new Q(
                      "option " + o + " must be " + i,
                      Q.ERR_BAD_OPTION_VALUE,
                    );
                  continue;
                }
                if (!0 !== i)
                  throw new Q("Unknown option " + o, Q.ERR_BAD_OPTION);
              }
            },
            validators: aG,
          },
          aJ = aV.validators;
        class aK {
          constructor(e) {
            ((this.defaults = e || {}),
              (this.interceptors = { request: new em(), response: new em() }));
          }
          async request(e, a) {
            try {
              return await this._request(e, a);
            } catch (e) {
              if (e instanceof Error) {
                let a = {};
                Error.captureStackTrace
                  ? Error.captureStackTrace(a)
                  : (a = Error());
                let i = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                  e.stack
                    ? i &&
                      !String(e.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
                      (e.stack += "\n" + i)
                    : (e.stack = i);
                } catch (e) {}
              }
              throw e;
            }
          }
          _request(e, a) {
            let i, n;
            "string" == typeof e ? ((a = a || {}).url = e) : (a = e || {});
            let {
              transitional: t,
              paramsSerializer: o,
              headers: s,
            } = (a = a_(this.defaults, a));
            (void 0 !== t &&
              aV.assertOptions(
                t,
                {
                  silentJSONParsing: aJ.transitional(aJ.boolean),
                  forcedJSONParsing: aJ.transitional(aJ.boolean),
                  clarifyTimeoutError: aJ.transitional(aJ.boolean),
                },
                !1,
              ),
              null != o &&
                (Z.isFunction(o)
                  ? (a.paramsSerializer = { serialize: o })
                  : aV.assertOptions(
                      o,
                      { encode: aJ.function, serialize: aJ.function },
                      !0,
                    )),
              void 0 !== a.allowAbsoluteUrls ||
                (void 0 !== this.defaults.allowAbsoluteUrls
                  ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                  : (a.allowAbsoluteUrls = !0)),
              aV.assertOptions(
                a,
                {
                  baseUrl: aJ.spelling("baseURL"),
                  withXsrfToken: aJ.spelling("withXSRFToken"),
                },
                !0,
              ),
              (a.method = (
                a.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase()));
            let r = s && Z.merge(s.common, s[a.method]);
            (s &&
              Z.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (e) => {
                  delete s[e];
                },
              ),
              (a.headers = eL.concat(r, s)));
            let c = [],
              p = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" != typeof e.runWhen || !1 !== e.runWhen(a)) &&
                ((p = p && e.synchronous), c.unshift(e.fulfilled, e.rejected));
            });
            let l = [];
            this.interceptors.response.forEach(function (e) {
              l.push(e.fulfilled, e.rejected);
            });
            let u = 0;
            if (!p) {
              let e = [aW.bind(this), void 0];
              for (
                e.unshift.apply(e, c),
                  e.push.apply(e, l),
                  n = e.length,
                  i = Promise.resolve(a);
                u < n;

              )
                i = i.then(e[u++], e[u++]);
              return i;
            }
            n = c.length;
            let d = a;
            for (u = 0; u < n; ) {
              let e = c[u++],
                a = c[u++];
              try {
                d = e(d);
              } catch (e) {
                a.call(this, e);
                break;
              }
            }
            try {
              i = aW.call(this, d);
            } catch (e) {
              return Promise.reject(e);
            }
            for (u = 0, n = l.length; u < n; ) i = i.then(l[u++], l[u++]);
            return i;
          }
          getUri(e) {
            return ed(
              eD(
                (e = a_(this.defaults, e)).baseURL,
                e.url,
                e.allowAbsoluteUrls,
              ),
              e.params,
              e.paramsSerializer,
            );
          }
        }
        (Z.forEach(["delete", "get", "head", "options"], function (e) {
          aK.prototype[e] = function (a, i) {
            return this.request(
              a_(i || {}, { method: e, url: a, data: (i || {}).data }),
            );
          };
        }),
          Z.forEach(["post", "put", "patch"], function (e) {
            function a(a) {
              return function (i, n, t) {
                return this.request(
                  a_(t || {}, {
                    method: e,
                    headers: a ? { "Content-Type": "multipart/form-data" } : {},
                    url: i,
                    data: n,
                  }),
                );
              };
            }
            ((aK.prototype[e] = a()), (aK.prototype[e + "Form"] = a(!0)));
          }));
        class aX {
          constructor(e) {
            let a;
            if ("function" != typeof e)
              throw TypeError("executor must be a function.");
            this.promise = new Promise(function (e) {
              a = e;
            });
            let i = this;
            (this.promise.then((e) => {
              if (!i._listeners) return;
              let a = i._listeners.length;
              for (; a-- > 0; ) i._listeners[a](e);
              i._listeners = null;
            }),
              (this.promise.then = (e) => {
                let a,
                  n = new Promise((e) => {
                    (i.subscribe(e), (a = e));
                  }).then(e);
                return (
                  (n.cancel = function () {
                    i.unsubscribe(a);
                  }),
                  n
                );
              }),
              e(function (e, n, t) {
                i.reason || ((i.reason = new eq(e, n, t)), a(i.reason));
              }));
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            if (this.reason) return void e(this.reason);
            this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            let a = this._listeners.indexOf(e);
            -1 !== a && this._listeners.splice(a, 1);
          }
          toAbortSignal() {
            let e = new AbortController(),
              a = (a) => {
                e.abort(a);
              };
            return (
              this.subscribe(a),
              (e.signal.unsubscribe = () => this.unsubscribe(a)),
              e.signal
            );
          }
          static source() {
            let e;
            return {
              token: new aX(function (a) {
                e = a;
              }),
              cancel: e,
            };
          }
        }
        let aY = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
        Object.entries(aY).forEach(([e, a]) => {
          aY[a] = e;
        });
        let aZ = (function e(a) {
          let i = new aK(a),
            n = x(aK.prototype.request, i);
          return (
            Z.extend(n, aK.prototype, i, { allOwnKeys: !0 }),
            Z.extend(n, i, null, { allOwnKeys: !0 }),
            (n.create = function (i) {
              return e(a_(a, i));
            }),
            n
          );
        })(eC);
        ((aZ.Axios = aK),
          (aZ.CanceledError = eq),
          (aZ.CancelToken = aX),
          (aZ.isCancel = eN),
          (aZ.VERSION = eJ),
          (aZ.toFormData = er),
          (aZ.AxiosError = Q),
          (aZ.Cancel = aZ.CanceledError),
          (aZ.all = function (e) {
            return Promise.all(e);
          }),
          (aZ.spread = function (e) {
            return function (a) {
              return e.apply(null, a);
            };
          }),
          (aZ.isAxiosError = function (e) {
            return Z.isObject(e) && !0 === e.isAxiosError;
          }),
          (aZ.mergeConfig = a_),
          (aZ.AxiosHeaders = eL),
          (aZ.formToJSON = (e) => eR(Z.isHTMLForm(e) ? new FormData(e) : e)),
          (aZ.getAdapter = aM.getAdapter),
          (aZ.HttpStatusCode = aY),
          (aZ.default = aZ));
        let aQ = aZ.create({
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }),
          a0 = async (e) => {
            try {
              return await aQ.post("/api/subscribe", { email: e });
            } catch (e) {
              console.log(e);
            }
          },
          a1 = () => {
            let [e, a] = (0, p.useState)(""),
              [i, n] = (0, p.useState)(!1),
              [t, o] = (0, p.useState)(null),
              [s, r] = (0, p.useState)(!1),
              c = (0, p.useCallback)(() => {
                if (!e.includes("@")) return !1;
                let [a, i] = e.split("@");
                return !!i.includes(".");
              }, [e]),
              l = async () => {
                try {
                  if ((n(!0), !c())) return void o("Invalid email");
                  (await a0(e), o(null), r(!0));
                } catch (e) {
                  (console.error(t), o("Something went wrong. Try again"));
                } finally {
                  n(!1);
                }
              };
            return (
              (0, p.useEffect)(() => {
                t && c();
              }, [e, t]),
              {
                setEmail: a,
                email: e,
                handleSubscribe: l,
                loading: i,
                error: t,
                completed: s,
              }
            );
          };
        var a2 = i(6068),
          a3 = i.n(a2),
          a4 = i(4126),
          a6 = i.n(a4);
        function a8({
          className: e,
          placeholder: a,
          onChange: i,
          value: n,
          type: t,
          name: o,
          disabled: s,
          ref: r,
          ...p
        }) {
          return (0, c.jsx)("label", {
            htmlFor: o,
            className: a6().label,
            children: (0, c.jsx)("input", {
              ...p,
              ref: r,
              name: o ?? "",
              type: t ?? "text",
              disabled: s,
              placeholder: a,
              value: n,
              onChange: i,
              className: `${e} ${a6().input}`,
            }),
          });
        }
        function a5({
          className: e,
          classNameInput: a,
          placeholder: i,
          disabled: n,
          onChange: t,
          value: o,
          name: s,
          onKeyDown: r,
          title: p,
          gap: l,
        }) {
          return (0, c.jsx)("section", {
            className: `flex-row space-between ${e}`,
            style: { gap: `${l}px` },
            children: (0, c.jsx)(a8, {
              className: a,
              placeholder: i,
              disabled: n,
              onChange: t,
              value: o,
              type: "text",
              name: s,
              onKeyDown: r,
              title: p,
            }),
          });
        }
        var a9 = i(1732),
          a7 = i.n(a9);
        function ie({
          type: e,
          size: a,
          radius: i,
          needActiveScale: n = !0,
          onClick: t,
          className: o,
          justifyCenter: s = !0,
          children: r,
          ...p
        }) {
          return (0, c.jsx)("button", {
            onClick: t,
            className: `${o} ${s && "center-element"} ${a7().button} ${n ? a7().activeScale : ""} ${a7()[`size-${a}`]} ${a7()[e]}`,
            ...p,
            style: { borderRadius: i && `${i}px` },
            children: r,
          });
        }
        function ia() {
          let {
            email: e,
            setEmail: a,
            loading: i,
            error: n,
            handleSubscribe: t,
            completed: o,
          } = a1();
          return (0, c.jsxs)("section", {
            className: `flex-row gap-4 align-center ${a3().container}`,
            children: [
              (0, c.jsxs)("div", {
                className: "relative",
                children: [
                  (0, c.jsx)(a5, {
                    onChange: (e) => a(e.target.value.trim()),
                    value: e,
                    placeholder: "Your email",
                    className: `${a3().input} ${n && a3().red_border} padding-20-24 text-18 medium white`,
                    name: "fitura-email",
                  }),
                  n &&
                    (0, c.jsx)("span", {
                      className: `red text-14 absolute ${a3().error}`,
                      children: n,
                    }),
                ],
              }),
              (0, c.jsx)(ie, {
                type: "subscribe",
                size: "20-28",
                onClick: () => {
                  o || t();
                },
                className: `${i ? a3().button : ""} relative`,
                children: i
                  ? (0, c.jsx)("span", { className: a3().loader })
                  : (0, c.jsx)("span", {
                      className: `white text-18 semibold ${a3().button_text}`,
                      children: o ? "Completed" : "Subscribe",
                    }),
              }),
            ],
          });
        }
        function ii() {
          return (0, c.jsxs)("section", {
            className: "flex-column gap-60px align-center",
            children: [(0, c.jsx)(f, {}), (0, c.jsx)(ia, {})],
          });
        }
        function it() {
          return (0, c.jsx)("main", {
            className: "main absolute",
            children: (0, c.jsx)(ii, {}),
          });
        }
      },
      1933: (e, a) => {
        "use strict";
        function i(e) {
          var a;
          let { config: i, src: n, width: t, quality: o } = e,
            s =
              o ||
              (null == (a = i.qualities)
                ? void 0
                : a.reduce((e, a) =>
                    Math.abs(a - 75) < Math.abs(e - 75) ? a : e,
                  )) ||
              75;
          return (
            i.path +
            "?url=" +
            encodeURIComponent(n) +
            "&w=" +
            t +
            "&q=" +
            s +
            (n.startsWith("/_next/static/media/"), "")
          );
        }
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return n;
            },
          }),
          (i.__next_img_default = !0));
        let n = i;
      },
      1946: (e, a, i) => {
        (Promise.resolve().then(i.bind(i, 7762)),
          Promise.resolve().then(i.bind(i, 9725)),
          Promise.resolve().then(i.bind(i, 3988)));
      },
      1951: (e) => {
        "use strict";
        e.exports = Function.prototype.apply;
      },
      2114: (e, a, i) => {
        (Promise.resolve().then(i.bind(i, 5860)),
          Promise.resolve().then(i.bind(i, 1244)),
          Promise.resolve().then(i.bind(i, 4102)));
      },
      2296: (e, a, i) => {
        var n;
        e.exports = function () {
          if (!n) {
            try {
              n = i(1268)("follow-redirects");
            } catch (e) {}
            "function" != typeof n && (n = function () {});
          }
          n.apply(null, arguments);
        };
      },
      2412: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      2427: (e) => {
        "use strict";
        e.exports =
          ("undefined" != typeof Reflect && Reflect.getPrototypeOf) || null;
      },
      2482: (e, a, i) => {
        "use strict";
        var n = i(7530);
        e.exports = Function.prototype.bind || n;
      },
      2756: (e, a) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          !(function (e, a) {
            for (var i in a)
              Object.defineProperty(e, i, { enumerable: !0, get: a[i] });
          })(a, {
            VALID_LOADERS: function () {
              return i;
            },
            imageConfigDefault: function () {
              return n;
            },
          }));
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
          n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy:
              "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1,
          };
      },
      2909: (e, a, i) => {
        "use strict";
        var n = i(4544);
        e.exports = function () {
          return n() && !!Symbol.toStringTag;
        };
      },
      3028: (e) => {
        e.exports = {
          "first-family": "heading_first-family__ULdDf",
          "second-family": "heading_second-family__YaEhA",
          light: "heading_light__Tghle",
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
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3038: (e, a, i) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "useMergedRef", {
            enumerable: !0,
            get: function () {
              return t;
            },
          }));
        let n = i(3210);
        function t(e, a) {
          let i = (0, n.useRef)(null),
            t = (0, n.useRef)(null);
          return (0, n.useCallback)(
            (n) => {
              if (null === n) {
                let e = i.current;
                e && ((i.current = null), e());
                let a = t.current;
                a && ((t.current = null), a());
              } else (e && (i.current = o(e, n)), a && (t.current = o(a, n)));
            },
            [e, a],
          );
        }
        function o(e, a) {
          if ("function" != typeof e)
            return (
              (e.current = a),
              () => {
                e.current = null;
              }
            );
          {
            let i = e(a);
            return "function" == typeof i ? i : () => e(null);
          }
        }
        ("function" == typeof a.default ||
          ("object" == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, "__esModule", { value: !0 }),
          Object.assign(a.default, a),
          (e.exports = a.default));
      },
      3283: (e, a, i) => {
        (Promise.resolve().then(i.t.bind(i, 6346, 23)),
          Promise.resolve().then(i.t.bind(i, 7924, 23)),
          Promise.resolve().then(i.t.bind(i, 5656, 23)),
          Promise.resolve().then(i.t.bind(i, 99, 23)),
          Promise.resolve().then(i.t.bind(i, 8243, 23)),
          Promise.resolve().then(i.t.bind(i, 8827, 23)),
          Promise.resolve().then(i.t.bind(i, 2763, 23)),
          Promise.resolve().then(i.t.bind(i, 7173, 23)));
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      3361: (e) => {
        "use strict";
        e.exports = Object;
      },
      3471: (e, a, i) => {
        "use strict";
        var n,
          t = i(607),
          o = i(36);
        try {
          n = [].__proto__ === Array.prototype;
        } catch (e) {
          if (
            !e ||
            "object" != typeof e ||
            !("code" in e) ||
            "ERR_PROTO_ACCESS" !== e.code
          )
            throw e;
        }
        var s = !!n && o && o(Object.prototype, "__proto__"),
          r = Object,
          c = r.getPrototypeOf;
        e.exports =
          s && "function" == typeof s.get
            ? t([s.get])
            : "function" == typeof c &&
              function (e) {
                return c(null == e ? e : r(e));
              };
      },
      3644: (e, a, i) => {
        var n = i(8354),
          t = i(7910).Stream,
          o = i(9996);
        function s() {
          ((this.writable = !1),
            (this.readable = !0),
            (this.dataSize = 0),
            (this.maxDataSize = 2097152),
            (this.pauseStreams = !0),
            (this._released = !1),
            (this._streams = []),
            (this._currentStream = null),
            (this._insideLoop = !1),
            (this._pendingNext = !1));
        }
        ((e.exports = s),
          n.inherits(s, t),
          (s.create = function (e) {
            var a = new this();
            for (var i in (e = e || {})) a[i] = e[i];
            return a;
          }),
          (s.isStreamLike = function (e) {
            return (
              "function" != typeof e &&
              "string" != typeof e &&
              "boolean" != typeof e &&
              "number" != typeof e &&
              !Buffer.isBuffer(e)
            );
          }),
          (s.prototype.append = function (e) {
            if (s.isStreamLike(e)) {
              if (!(e instanceof o)) {
                var a = o.create(e, {
                  maxDataSize: 1 / 0,
                  pauseStream: this.pauseStreams,
                });
                (e.on("data", this._checkDataSize.bind(this)), (e = a));
              }
              (this._handleErrors(e), this.pauseStreams && e.pause());
            }
            return (this._streams.push(e), this);
          }),
          (s.prototype.pipe = function (e, a) {
            return (t.prototype.pipe.call(this, e, a), this.resume(), e);
          }),
          (s.prototype._getNext = function () {
            if (((this._currentStream = null), this._insideLoop)) {
              this._pendingNext = !0;
              return;
            }
            this._insideLoop = !0;
            try {
              do ((this._pendingNext = !1), this._realGetNext());
              while (this._pendingNext);
            } finally {
              this._insideLoop = !1;
            }
          }),
          (s.prototype._realGetNext = function () {
            var e = this._streams.shift();
            return void 0 === e
              ? void this.end()
              : "function" != typeof e
                ? void this._pipeNext(e)
                : void e(
                    function (e) {
                      (s.isStreamLike(e) &&
                        (e.on("data", this._checkDataSize.bind(this)),
                        this._handleErrors(e)),
                        this._pipeNext(e));
                    }.bind(this),
                  );
          }),
          (s.prototype._pipeNext = function (e) {
            if (((this._currentStream = e), s.isStreamLike(e))) {
              (e.on("end", this._getNext.bind(this)),
                e.pipe(this, { end: !1 }));
              return;
            }
            (this.write(e), this._getNext());
          }),
          (s.prototype._handleErrors = function (e) {
            var a = this;
            e.on("error", function (e) {
              a._emitError(e);
            });
          }),
          (s.prototype.write = function (e) {
            this.emit("data", e);
          }),
          (s.prototype.pause = function () {
            this.pauseStreams &&
              (this.pauseStreams &&
                this._currentStream &&
                "function" == typeof this._currentStream.pause &&
                this._currentStream.pause(),
              this.emit("pause"));
          }),
          (s.prototype.resume = function () {
            (this._released ||
              ((this._released = !0), (this.writable = !0), this._getNext()),
              this.pauseStreams &&
                this._currentStream &&
                "function" == typeof this._currentStream.resume &&
                this._currentStream.resume(),
              this.emit("resume"));
          }),
          (s.prototype.end = function () {
            (this._reset(), this.emit("end"));
          }),
          (s.prototype.destroy = function () {
            (this._reset(), this.emit("close"));
          }),
          (s.prototype._reset = function () {
            ((this.writable = !1),
              (this._streams = []),
              (this._currentStream = null));
          }),
          (s.prototype._checkDataSize = function () {
            if (
              (this._updateDataSize(), !(this.dataSize <= this.maxDataSize))
            ) {
              var e =
                "DelayedStream#maxDataSize of " +
                this.maxDataSize +
                " bytes exceeded.";
              this._emitError(Error(e));
            }
          }),
          (s.prototype._updateDataSize = function () {
            this.dataSize = 0;
            var e = this;
            (this._streams.forEach(function (a) {
              a.dataSize && (e.dataSize += a.dataSize);
            }),
              this._currentStream &&
                this._currentStream.dataSize &&
                (this.dataSize += this._currentStream.dataSize));
          }),
          (s.prototype._emitError = function (e) {
            (this._reset(), this.emit("error", e));
          }));
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      3963: (e, a, i) => {
        var n = i(1536),
          t = i(271),
          o = i(5793);
        e.exports = function (e, a, i) {
          for (var s = t(e); s.index < (s.keyedList || e).length; )
            (n(e, a, s, function (e, a) {
              return e
                ? void i(e, a)
                : 0 === Object.keys(s.jobs).length
                  ? void i(null, s.results)
                  : void 0;
            }),
              s.index++);
          return o.bind(s, i);
        };
      },
      3988: (e, a, i) => {
        "use strict";
        i.d(a, { default: () => n });
        let n = (0, i(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\shared\\\\ui\\\\keyboard-autoscroll\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\shared\\ui\\keyboard-autoscroll\\ui\\index.tsx",
          "default",
        );
      },
      3997: (e) => {
        "use strict";
        e.exports = require("tty");
      },
      4075: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      4102: (e, a, i) => {
        "use strict";
        i.d(a, { default: () => t });
        var n = i(687);
        function t({ children: e }) {
          return (0, n.jsx)(n.Fragment, { children: e });
        }
        i(3210);
      },
      4126: (e) => {
        e.exports = {
          "first-family": "input_first-family__LtkC7",
          "second-family": "input_second-family__IqhMo",
          light: "input_light__zywpH",
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
      4171: (e, a, i) => {
        e.exports = i(4933);
      },
      4431: (e, a, i) => {
        "use strict";
        (i.r(a),
          i.d(a, { default: () => p, metadata: () => r, viewport: () => c }));
        var n = i(7413);
        (i(456), i(6841), i(6134));
        var t = i(7762),
          o = i(3988),
          s = i(9725);
        let r = {
            title: "Fitura",
            description: "Fintess & SPA. Coming soon",
            icons: ["/icon.svg"],
          },
          c = {
            width: "device-width",
            initialScale: 1,
            maximumScale: 1,
            viewportFit: "cover",
          };
        function p({ children: e }) {
          return (0, n.jsx)("html", {
            lang: "en",
            children: (0, n.jsx)("body", {
              className: "body relative",
              children: (0, n.jsxs)(o.default, {
                children: [
                  (0, n.jsx)(s.default, {}),
                  (0, n.jsx)(t.default, {}),
                  e,
                ],
              }),
            }),
          });
        }
      },
      4458: (e, a, i) => {
        var n = i(6338);
        e.exports = function (e) {
          var a = !1;
          return (
            n(function () {
              a = !0;
            }),
            function (i, t) {
              a
                ? e(i, t)
                : n(function () {
                    e(i, t);
                  });
            }
          );
        };
      },
      4544: (e) => {
        "use strict";
        e.exports = function () {
          if (
            "function" != typeof Symbol ||
            "function" != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var e = {},
            a = Symbol("test"),
            i = Object(a);
          if (
            "string" == typeof a ||
            "[object Symbol]" !== Object.prototype.toString.call(a) ||
            "[object Symbol]" !== Object.prototype.toString.call(i)
          )
            return !1;
          for (var n in ((e[a] = 42), e)) return !1;
          if (
            ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
            ("function" == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(e).length)
          )
            return !1;
          var t = Object.getOwnPropertySymbols(e);
          if (
            1 !== t.length ||
            t[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(e, a)
          )
            return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(e, a);
            if (42 !== o.value || !0 !== o.enumerable) return !1;
          }
          return !0;
        };
      },
      4604: (e, a) => {
        "use strict";
        function i(e) {
          let {
            ampFirst: a = !1,
            hybrid: i = !1,
            hasQuery: n = !1,
          } = void 0 === e ? {} : e;
          return a || (i && n);
        }
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "isInAmpMode", {
            enumerable: !0,
            get: function () {
              return i;
            },
          }));
      },
      4735: (e) => {
        "use strict";
        e.exports = require("events");
      },
      4933: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}',
        );
      },
      4953: (e, a, i) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "getImgProps", {
            enumerable: !0,
            get: function () {
              return c;
            },
          }),
          i(148));
        let n = i(1480),
          t = i(2756),
          o = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function s(e) {
          return void 0 !== e.default;
        }
        function r(e) {
          return void 0 === e
            ? e
            : "number" == typeof e
              ? Number.isFinite(e)
                ? e
                : NaN
              : "string" == typeof e && /^[0-9]+$/.test(e)
                ? parseInt(e, 10)
                : NaN;
        }
        function c(e, a) {
          var i, c;
          let p,
            l,
            u,
            {
              src: d,
              sizes: m,
              unoptimized: f = !1,
              priority: x = !1,
              loading: v,
              className: h,
              quality: b,
              width: g,
              height: y,
              fill: w = !1,
              style: _,
              overrideSrc: j,
              onLoad: k,
              onLoadingComplete: E,
              placeholder: S = "empty",
              blurDataURL: R,
              fetchPriority: C,
              decoding: O = "async",
              layout: A,
              objectFit: T,
              objectPosition: P,
              lazyBoundary: F,
              lazyRoot: z,
              ...U
            } = e,
            {
              imgConf: L,
              showAltText: B,
              blurComplete: N,
              defaultLoader: q,
            } = a,
            I = L || t.imageConfigDefault;
          if ("allSizes" in I) p = I;
          else {
            let e = [...I.deviceSizes, ...I.imageSizes].sort((e, a) => e - a),
              a = I.deviceSizes.sort((e, a) => e - a),
              n = null == (i = I.qualities) ? void 0 : i.sort((e, a) => e - a);
            p = { ...I, allSizes: e, deviceSizes: a, qualities: n };
          }
          if (void 0 === q)
            throw Object.defineProperty(
              Error(
                "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
              ),
              "__NEXT_ERROR_CODE",
              { value: "E163", enumerable: !1, configurable: !0 },
            );
          let D = U.loader || q;
          (delete U.loader, delete U.srcSet);
          let M = "__next_img_default" in D;
          if (M) {
            if ("custom" === p.loader)
              throw Object.defineProperty(
                Error(
                  'Image with src "' +
                    d +
                    '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
                ),
                "__NEXT_ERROR_CODE",
                { value: "E252", enumerable: !1, configurable: !0 },
              );
          } else {
            let e = D;
            D = (a) => {
              let { config: i, ...n } = a;
              return e(n);
            };
          }
          if (A) {
            "fill" === A && (w = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[A];
            e && (_ = { ..._, ...e });
            let a = { responsive: "100vw", fill: "100vw" }[A];
            a && !m && (m = a);
          }
          let $ = "",
            W = r(g),
            G = r(y);
          if ((c = d) && "object" == typeof c && (s(c) || void 0 !== c.src)) {
            let e = s(d) ? d.default : d;
            if (!e.src)
              throw Object.defineProperty(
                Error(
                  "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                    JSON.stringify(e),
                ),
                "__NEXT_ERROR_CODE",
                { value: "E460", enumerable: !1, configurable: !0 },
              );
            if (!e.height || !e.width)
              throw Object.defineProperty(
                Error(
                  "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                    JSON.stringify(e),
                ),
                "__NEXT_ERROR_CODE",
                { value: "E48", enumerable: !1, configurable: !0 },
              );
            if (
              ((l = e.blurWidth),
              (u = e.blurHeight),
              (R = R || e.blurDataURL),
              ($ = e.src),
              !w)
            )
              if (W || G) {
                if (W && !G) {
                  let a = W / e.width;
                  G = Math.round(e.height * a);
                } else if (!W && G) {
                  let a = G / e.height;
                  W = Math.round(e.width * a);
                }
              } else ((W = e.width), (G = e.height));
          }
          let H = !x && ("lazy" === v || void 0 === v);
          ((!(d = "string" == typeof d ? d : $) ||
            d.startsWith("data:") ||
            d.startsWith("blob:")) &&
            ((f = !0), (H = !1)),
            p.unoptimized && (f = !0),
            M &&
              !p.dangerouslyAllowSVG &&
              d.split("?", 1)[0].endsWith(".svg") &&
              (f = !0));
          let V = r(b),
            J = Object.assign(
              w
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: T,
                    objectPosition: P,
                  }
                : {},
              B ? {} : { color: "transparent" },
              _,
            ),
            K =
              N || "empty" === S
                ? null
                : "blur" === S
                  ? 'url("data:image/svg+xml;charset=utf-8,' +
                    (0, n.getImageBlurSvg)({
                      widthInt: W,
                      heightInt: G,
                      blurWidth: l,
                      blurHeight: u,
                      blurDataURL: R || "",
                      objectFit: J.objectFit,
                    }) +
                    '")'
                  : 'url("' + S + '")',
            X = o.includes(J.objectFit)
              ? "fill" === J.objectFit
                ? "100% 100%"
                : "cover"
              : J.objectFit,
            Y = K
              ? {
                  backgroundSize: X,
                  backgroundPosition: J.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: K,
                }
              : {},
            Z = (function (e) {
              let {
                config: a,
                src: i,
                unoptimized: n,
                width: t,
                quality: o,
                sizes: s,
                loader: r,
              } = e;
              if (n) return { src: i, srcSet: void 0, sizes: void 0 };
              let { widths: c, kind: p } = (function (e, a, i) {
                  let { deviceSizes: n, allSizes: t } = e;
                  if (i) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      a = [];
                    for (let n; (n = e.exec(i)); ) a.push(parseInt(n[2]));
                    if (a.length) {
                      let e = 0.01 * Math.min(...a);
                      return {
                        widths: t.filter((a) => a >= n[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: t, kind: "w" };
                  }
                  return "number" != typeof a
                    ? { widths: n, kind: "w" }
                    : {
                        widths: [
                          ...new Set(
                            [a, 2 * a].map(
                              (e) => t.find((a) => a >= e) || t[t.length - 1],
                            ),
                          ),
                        ],
                        kind: "x",
                      };
                })(a, t, s),
                l = c.length - 1;
              return {
                sizes: s || "w" !== p ? s : "100vw",
                srcSet: c
                  .map(
                    (e, n) =>
                      r({ config: a, src: i, quality: o, width: e }) +
                      " " +
                      ("w" === p ? e : n + 1) +
                      p,
                  )
                  .join(", "),
                src: r({ config: a, src: i, quality: o, width: c[l] }),
              };
            })({
              config: p,
              src: d,
              unoptimized: f,
              width: W,
              quality: V,
              sizes: m,
              loader: D,
            });
          return {
            props: {
              ...U,
              loading: H ? "lazy" : v,
              fetchPriority: C,
              width: W,
              height: G,
              decoding: O,
              className: h,
              style: { ...J, ...Y },
              sizes: Z.sizes,
              srcSet: Z.srcSet,
              src: j || Z.src,
            },
            meta: { unoptimized: f, priority: x, placeholder: S, fill: w },
          };
        }
      },
      4959: (e, a, i) => {
        "use strict";
        e.exports = i(4041).vendored.contexts.AmpContext;
      },
      5012: (e, a, i) => {
        "use strict";
        var n,
          t = i(3361),
          o = i(6558),
          s = i(8750),
          r = i(7315),
          c = i(7631),
          p = i(5219),
          l = i(9088),
          u = i(96),
          d = i(863),
          m = i(461),
          f = i(5845),
          x = i(5528),
          v = i(8501),
          h = i(5095),
          b = i(1133),
          g = Function,
          y = function (e) {
            try {
              return g('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
          },
          w = i(36),
          _ = i(8720),
          j = function () {
            throw new l();
          },
          k = w
            ? (function () {
                try {
                  return (arguments.callee, j);
                } catch (e) {
                  try {
                    return w(arguments, "callee").get;
                  } catch (e) {
                    return j;
                  }
                }
              })()
            : j,
          E = i(6582)(),
          S = i(9181),
          R = i(1285),
          C = i(2427),
          O = i(1951),
          A = i(9819),
          T = {},
          P = "undefined" != typeof Uint8Array && S ? S(Uint8Array) : n,
          F = {
            __proto__: null,
            "%AggregateError%":
              "undefined" == typeof AggregateError ? n : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%":
              "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
            "%ArrayIteratorPrototype%": E && S ? S([][Symbol.iterator]()) : n,
            "%AsyncFromSyncIteratorPrototype%": n,
            "%AsyncFunction%": T,
            "%AsyncGenerator%": T,
            "%AsyncGeneratorFunction%": T,
            "%AsyncIteratorPrototype%": T,
            "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
            "%BigInt64Array%":
              "undefined" == typeof BigInt64Array ? n : BigInt64Array,
            "%BigUint64Array%":
              "undefined" == typeof BigUint64Array ? n : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? n : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": o,
            "%eval%": eval,
            "%EvalError%": s,
            "%Float16Array%":
              "undefined" == typeof Float16Array ? n : Float16Array,
            "%Float32Array%":
              "undefined" == typeof Float32Array ? n : Float32Array,
            "%Float64Array%":
              "undefined" == typeof Float64Array ? n : Float64Array,
            "%FinalizationRegistry%":
              "undefined" == typeof FinalizationRegistry
                ? n
                : FinalizationRegistry,
            "%Function%": g,
            "%GeneratorFunction%": T,
            "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": E && S ? S(S([][Symbol.iterator]())) : n,
            "%JSON%": "object" == typeof JSON ? JSON : n,
            "%Map%": "undefined" == typeof Map ? n : Map,
            "%MapIteratorPrototype%":
              "undefined" != typeof Map && E && S
                ? S(new Map()[Symbol.iterator]())
                : n,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": t,
            "%Object.getOwnPropertyDescriptor%": w,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? n : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
            "%RangeError%": r,
            "%ReferenceError%": c,
            "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? n : Set,
            "%SetIteratorPrototype%":
              "undefined" != typeof Set && E && S
                ? S(new Set()[Symbol.iterator]())
                : n,
            "%SharedArrayBuffer%":
              "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": E && S ? S(""[Symbol.iterator]()) : n,
            "%Symbol%": E ? Symbol : n,
            "%SyntaxError%": p,
            "%ThrowTypeError%": k,
            "%TypedArray%": P,
            "%TypeError%": l,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
            "%Uint8ClampedArray%":
              "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
            "%Uint16Array%":
              "undefined" == typeof Uint16Array ? n : Uint16Array,
            "%Uint32Array%":
              "undefined" == typeof Uint32Array ? n : Uint32Array,
            "%URIError%": u,
            "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
            "%Function.prototype.call%": A,
            "%Function.prototype.apply%": O,
            "%Object.defineProperty%": _,
            "%Object.getPrototypeOf%": R,
            "%Math.abs%": d,
            "%Math.floor%": m,
            "%Math.max%": f,
            "%Math.min%": x,
            "%Math.pow%": v,
            "%Math.round%": h,
            "%Math.sign%": b,
            "%Reflect.getPrototypeOf%": C,
          };
        if (S)
          try {
            null.error;
          } catch (e) {
            var z = S(S(e));
            F["%Error.prototype%"] = z;
          }
        var U = function e(a) {
            var i;
            if ("%AsyncFunction%" === a) i = y("async function () {}");
            else if ("%GeneratorFunction%" === a) i = y("function* () {}");
            else if ("%AsyncGeneratorFunction%" === a)
              i = y("async function* () {}");
            else if ("%AsyncGenerator%" === a) {
              var n = e("%AsyncGeneratorFunction%");
              n && (i = n.prototype);
            } else if ("%AsyncIteratorPrototype%" === a) {
              var t = e("%AsyncGenerator%");
              t && S && (i = S(t.prototype));
            }
            return ((F[a] = i), i);
          },
          L = {
            __proto__: null,
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          B = i(2482),
          N = i(6786),
          q = B.call(A, Array.prototype.concat),
          I = B.call(O, Array.prototype.splice),
          D = B.call(A, String.prototype.replace),
          M = B.call(A, String.prototype.slice),
          $ = B.call(A, RegExp.prototype.exec),
          W =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          G = /\\(\\)?/g,
          H = function (e) {
            var a = M(e, 0, 1),
              i = M(e, -1);
            if ("%" === a && "%" !== i)
              throw new p("invalid intrinsic syntax, expected closing `%`");
            if ("%" === i && "%" !== a)
              throw new p("invalid intrinsic syntax, expected opening `%`");
            var n = [];
            return (
              D(e, W, function (e, a, i, t) {
                n[n.length] = i ? D(t, G, "$1") : a || e;
              }),
              n
            );
          },
          V = function (e, a) {
            var i,
              n = e;
            if ((N(L, n) && (n = "%" + (i = L[n])[0] + "%"), N(F, n))) {
              var t = F[n];
              if ((t === T && (t = U(n)), void 0 === t && !a))
                throw new l(
                  "intrinsic " +
                    e +
                    " exists, but is not available. Please file an issue!",
                );
              return { alias: i, name: n, value: t };
            }
            throw new p("intrinsic " + e + " does not exist!");
          };
        e.exports = function (e, a) {
          if ("string" != typeof e || 0 === e.length)
            throw new l("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof a)
            throw new l('"allowMissing" argument must be a boolean');
          if (null === $(/^%?[^%]*%?$/, e))
            throw new p(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
            );
          var i = H(e),
            n = i.length > 0 ? i[0] : "",
            t = V("%" + n + "%", a),
            o = t.name,
            s = t.value,
            r = !1,
            c = t.alias;
          c && ((n = c[0]), I(i, q([0, 1], c)));
          for (var u = 1, d = !0; u < i.length; u += 1) {
            var m = i[u],
              f = M(m, 0, 1),
              x = M(m, -1);
            if (
              ('"' === f ||
                "'" === f ||
                "`" === f ||
                '"' === x ||
                "'" === x ||
                "`" === x) &&
              f !== x
            )
              throw new p(
                "property names with quotes must have matching quotes",
              );
            if (
              (("constructor" !== m && d) || (r = !0),
              (n += "." + m),
              N(F, (o = "%" + n + "%")))
            )
              s = F[o];
            else if (null != s) {
              if (!(m in s)) {
                if (!a)
                  throw new l(
                    "base intrinsic for " +
                      e +
                      " exists, but the property is not available.",
                  );
                return;
              }
              if (w && u + 1 >= i.length) {
                var v = w(s, m);
                s =
                  (d = !!v) && "get" in v && !("originalValue" in v.get)
                    ? v.get
                    : s[m];
              } else ((d = N(s, m)), (s = s[m]));
              d && !r && (F[o] = s);
            }
          }
          return s;
        };
      },
      5026: (e, a, i) => {
        e.exports = {
          parallel: i(3963),
          serial: i(6736),
          serialOrdered: i(6271),
        };
      },
      5095: (e) => {
        "use strict";
        e.exports = Math.round;
      },
      5219: (e) => {
        "use strict";
        e.exports = SyntaxError;
      },
      5511: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      5528: (e) => {
        "use strict";
        e.exports = Math.min;
      },
      5591: (e) => {
        "use strict";
        e.exports = require("https");
      },
      5793: (e, a, i) => {
        var n = i(7932),
          t = i(4458);
        e.exports = function (e) {
          Object.keys(this.jobs).length &&
            ((this.index = this.size), n(this), t(e)(null, this.results));
        };
      },
      5836: (e, a, i) => {
        "use strict";
        var n = i(3644),
          t = i(8354),
          o = i(3873),
          s = i(1630),
          r = i(5591),
          c = i(9551).parse,
          p = i(9021),
          l = i(7910).Stream,
          u = i(5930),
          d = i(5026),
          m = i(8002),
          f = i(6786),
          x = i(1425);
        function v(e) {
          if (!(this instanceof v)) return new v(e);
          for (var a in ((this._overheadLength = 0),
          (this._valueLength = 0),
          (this._valuesToMeasure = []),
          n.call(this),
          (e = e || {})))
            this[a] = e[a];
        }
        (t.inherits(v, n),
          (v.LINE_BREAK = "\r\n"),
          (v.DEFAULT_CONTENT_TYPE = "application/octet-stream"),
          (v.prototype.append = function (e, a, i) {
            "string" == typeof (i = i || {}) && (i = { filename: i });
            var t = n.prototype.append.bind(this);
            if (
              (("number" == typeof a || null == a) && (a = String(a)),
              Array.isArray(a))
            )
              return void this._error(Error("Arrays are not supported."));
            var o = this._multiPartHeader(e, a, i),
              s = this._multiPartFooter();
            (t(o), t(a), t(s), this._trackLength(o, a, i));
          }),
          (v.prototype._trackLength = function (e, a, i) {
            var n = 0;
            (null != i.knownLength
              ? (n += Number(i.knownLength))
              : Buffer.isBuffer(a)
                ? (n = a.length)
                : "string" == typeof a && (n = Buffer.byteLength(a)),
              (this._valueLength += n),
              (this._overheadLength +=
                Buffer.byteLength(e) + v.LINE_BREAK.length),
              a &&
                (a.path ||
                  (a.readable && f(a, "httpVersion")) ||
                  a instanceof l) &&
                (i.knownLength || this._valuesToMeasure.push(a)));
          }),
          (v.prototype._lengthRetriever = function (e, a) {
            f(e, "fd")
              ? void 0 != e.end && e.end != 1 / 0 && void 0 != e.start
                ? a(null, e.end + 1 - (e.start ? e.start : 0))
                : p.stat(e.path, function (i, n) {
                    if (i) return void a(i);
                    a(null, n.size - (e.start ? e.start : 0));
                  })
              : f(e, "httpVersion")
                ? a(null, Number(e.headers["content-length"]))
                : f(e, "httpModule")
                  ? (e.on("response", function (i) {
                      (e.pause(), a(null, Number(i.headers["content-length"])));
                    }),
                    e.resume())
                  : a("Unknown stream");
          }),
          (v.prototype._multiPartHeader = function (e, a, i) {
            if ("string" == typeof i.header) return i.header;
            var n,
              t = this._getContentDisposition(a, i),
              o = this._getContentType(a, i),
              s = "",
              r = {
                "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(
                  t || [],
                ),
                "Content-Type": [].concat(o || []),
              };
            for (var c in ("object" == typeof i.header && x(r, i.header), r))
              if (f(r, c)) {
                if (null == (n = r[c])) continue;
                (Array.isArray(n) || (n = [n]),
                  n.length && (s += c + ": " + n.join("; ") + v.LINE_BREAK));
              }
            return "--" + this.getBoundary() + v.LINE_BREAK + s + v.LINE_BREAK;
          }),
          (v.prototype._getContentDisposition = function (e, a) {
            var i;
            if (
              ("string" == typeof a.filepath
                ? (i = o.normalize(a.filepath).replace(/\\/g, "/"))
                : a.filename || (e && (e.name || e.path))
                  ? (i = o.basename(a.filename || (e && (e.name || e.path))))
                  : e &&
                    e.readable &&
                    f(e, "httpVersion") &&
                    (i = o.basename(e.client._httpMessage.path || "")),
              i)
            )
              return 'filename="' + i + '"';
          }),
          (v.prototype._getContentType = function (e, a) {
            var i = a.contentType;
            return (
              !i && e && e.name && (i = u.lookup(e.name)),
              !i && e && e.path && (i = u.lookup(e.path)),
              !i &&
                e &&
                e.readable &&
                f(e, "httpVersion") &&
                (i = e.headers["content-type"]),
              !i &&
                (a.filepath || a.filename) &&
                (i = u.lookup(a.filepath || a.filename)),
              !i && e && "object" == typeof e && (i = v.DEFAULT_CONTENT_TYPE),
              i
            );
          }),
          (v.prototype._multiPartFooter = function () {
            return function (e) {
              var a = v.LINE_BREAK;
              (0 === this._streams.length && (a += this._lastBoundary()), e(a));
            }.bind(this);
          }),
          (v.prototype._lastBoundary = function () {
            return "--" + this.getBoundary() + "--" + v.LINE_BREAK;
          }),
          (v.prototype.getHeaders = function (e) {
            var a,
              i = {
                "content-type":
                  "multipart/form-data; boundary=" + this.getBoundary(),
              };
            for (a in e) f(e, a) && (i[a.toLowerCase()] = e[a]);
            return i;
          }),
          (v.prototype.setBoundary = function (e) {
            if ("string" != typeof e)
              throw TypeError("FormData boundary must be a string");
            this._boundary = e;
          }),
          (v.prototype.getBoundary = function () {
            return (this._boundary || this._generateBoundary(), this._boundary);
          }),
          (v.prototype.getBuffer = function () {
            for (
              var e = new Buffer.alloc(0),
                a = this.getBoundary(),
                i = 0,
                n = this._streams.length;
              i < n;
              i++
            )
              "function" != typeof this._streams[i] &&
                ((e = Buffer.isBuffer(this._streams[i])
                  ? Buffer.concat([e, this._streams[i]])
                  : Buffer.concat([e, Buffer.from(this._streams[i])])),
                ("string" != typeof this._streams[i] ||
                  this._streams[i].substring(2, a.length + 2) !== a) &&
                  (e = Buffer.concat([e, Buffer.from(v.LINE_BREAK)])));
            return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
          }),
          (v.prototype._generateBoundary = function () {
            for (var e = "--------------------------", a = 0; a < 24; a++)
              e += Math.floor(10 * Math.random()).toString(16);
            this._boundary = e;
          }),
          (v.prototype.getLengthSync = function () {
            var e = this._overheadLength + this._valueLength;
            return (
              this._streams.length && (e += this._lastBoundary().length),
              this.hasKnownLength() ||
                this._error(
                  Error("Cannot calculate proper length in synchronous way."),
                ),
              e
            );
          }),
          (v.prototype.hasKnownLength = function () {
            var e = !0;
            return (this._valuesToMeasure.length && (e = !1), e);
          }),
          (v.prototype.getLength = function (e) {
            var a = this._overheadLength + this._valueLength;
            if (
              (this._streams.length && (a += this._lastBoundary().length),
              !this._valuesToMeasure.length)
            )
              return void process.nextTick(e.bind(this, null, a));
            d.parallel(
              this._valuesToMeasure,
              this._lengthRetriever,
              function (i, n) {
                if (i) return void e(i);
                (n.forEach(function (e) {
                  a += e;
                }),
                  e(null, a));
              },
            );
          }),
          (v.prototype.submit = function (e, a) {
            var i,
              n,
              t = { method: "post" };
            return (
              "string" == typeof e
                ? (n = x(
                    {
                      port: (e = c(e)).port,
                      path: e.pathname,
                      host: e.hostname,
                      protocol: e.protocol,
                    },
                    t,
                  ))
                : (n = x(e, t)).port ||
                  (n.port = "https:" === n.protocol ? 443 : 80),
              (n.headers = this.getHeaders(e.headers)),
              (i = "https:" === n.protocol ? r.request(n) : s.request(n)),
              this.getLength(
                function (e, n) {
                  if (e && "Unknown stream" !== e) return void this._error(e);
                  if (
                    (n && i.setHeader("Content-Length", n), this.pipe(i), a)
                  ) {
                    var t,
                      o = function (e, n) {
                        return (
                          i.removeListener("error", o),
                          i.removeListener("response", t),
                          a.call(this, e, n)
                        );
                      };
                    ((t = o.bind(this, null)),
                      i.on("error", o),
                      i.on("response", t));
                  }
                }.bind(this),
              ),
              i
            );
          }),
          (v.prototype._error = function (e) {
            this.error ||
              ((this.error = e), this.pause(), this.emit("error", e));
          }),
          (v.prototype.toString = function () {
            return "[object FormData]";
          }),
          m(v, "FormData"),
          (e.exports = v));
      },
      5845: (e) => {
        "use strict";
        e.exports = Math.max;
      },
      5860: (e, a, i) => {
        "use strict";
        i.d(a, { default: () => r });
        var n = i(687),
          t = i(3210),
          o = i(9998),
          s = i.n(o);
        function r() {
          let e = (0, t.useRef)(null);
          return (0, n.jsx)("div", {
            className: s().container,
            children: (0, n.jsxs)("video", {
              muted: !0,
              loop: !0,
              playsInline: !0,
              preload: "metadata",
              ref: e,
              children: [
                (0, n.jsx)("source", {
                  src: "/bg-video.mp4",
                  type: "video/mp4",
                }),
                "Your browser does not support the video tag.",
              ],
            }),
          });
        }
      },
      5930: (e, a, i) => {
        "use strict";
        var n = i(4171),
          t = i(3873).extname,
          o = /^\s*([^;\s]*)(?:;|\s|$)/,
          s = /^text\//i;
        function r(e) {
          if (!e || "string" != typeof e) return !1;
          var a = o.exec(e),
            i = a && n[a[1].toLowerCase()];
          return i && i.charset ? i.charset : !!(a && s.test(a[1])) && "UTF-8";
        }
        ((a.charset = r),
          (a.charsets = { lookup: r }),
          (a.contentType = function (e) {
            if (!e || "string" != typeof e) return !1;
            var i = -1 === e.indexOf("/") ? a.lookup(e) : e;
            if (!i) return !1;
            if (-1 === i.indexOf("charset")) {
              var n = a.charset(i);
              n && (i += "; charset=" + n.toLowerCase());
            }
            return i;
          }),
          (a.extension = function (e) {
            if (!e || "string" != typeof e) return !1;
            var i = o.exec(e),
              n = i && a.extensions[i[1].toLowerCase()];
            return !!n && !!n.length && n[0];
          }),
          (a.extensions = Object.create(null)),
          (a.lookup = function (e) {
            if (!e || "string" != typeof e) return !1;
            var i = t("x." + e)
              .toLowerCase()
              .substr(1);
            return !!i && (a.types[i] || !1);
          }),
          (a.types = Object.create(null)),
          (function (e, a) {
            var i = ["nginx", "apache", void 0, "iana"];
            Object.keys(n).forEach(function (t) {
              var o = n[t],
                s = o.extensions;
              if (s && s.length) {
                e[t] = s;
                for (var r = 0; r < s.length; r++) {
                  var c = s[r];
                  if (a[c]) {
                    var p = i.indexOf(n[a[c]].source),
                      l = i.indexOf(o.source);
                    if (
                      "application/octet-stream" !== a[c] &&
                      (p > l ||
                        (p === l && "application/" === a[c].substr(0, 12)))
                    )
                      continue;
                  }
                  a[c] = t;
                }
              }
            });
          })(a.extensions, a.types));
      },
      6068: (e) => {
        e.exports = {
          "first-family": "input_first-family__3A_gb",
          "second-family": "input_second-family__7wr4e",
          light: "input_light__syJb7",
          medium: "input_medium__3Givn",
          "text-center": "input_text-center__AhroI",
          "text-60": "input_text-60___PJTe",
          "text-28": "input_text-28__qazTL",
          "text-14": "input_text-14__EYVDG",
          white: "input_white__60npI",
          red: "input_red__cBE4M",
          button_text: "input_button_text__bZKKF",
          input: "input_input__PLghW",
          loader: "input_loader__pSWxX",
          rotate: "input_rotate__iWZtY",
          error: "input_error__3qiqm",
          button: "input_button__outsz",
          container: "input_container__9A0bd",
        };
      },
      6134: () => {},
      6190: (e) => {
        e.exports = {
          "first-family": "loading_first-family__8zh__",
          "second-family": "loading_second-family__W_Gas",
          light: "loading_light__8x9UM",
          medium: "loading_medium__u7fTw",
          "text-center": "loading_text-center__gUKbB",
          "text-60": "loading_text-60__sC7ur",
          "text-28": "loading_text-28__a_iqn",
          "text-14": "loading_text-14__mC0k9",
          white: "loading_white__fT_W8",
          red: "loading_red__UAHVa",
          container: "loading_container__2_LBg",
          hidden: "loading_hidden__EJ0DF",
          none: "loading_none__gS0jI",
          logo: "loading_logo__HL14w",
          draw: "loading_draw__8lwyD",
        };
      },
      6211: (e, a, i) => {
        e.exports = function (e) {
          function a(e) {
            let i,
              t,
              o,
              s = null;
            function r(...e) {
              if (!r.enabled) return;
              let n = Number(new Date());
              ((r.diff = n - (i || n)),
                (r.prev = i),
                (r.curr = n),
                (i = n),
                (e[0] = a.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O"));
              let t = 0;
              ((e[0] = e[0].replace(/%([a-zA-Z%])/g, (i, n) => {
                if ("%%" === i) return "%";
                t++;
                let o = a.formatters[n];
                if ("function" == typeof o) {
                  let a = e[t];
                  ((i = o.call(r, a)), e.splice(t, 1), t--);
                }
                return i;
              })),
                a.formatArgs.call(r, e),
                (r.log || a.log).apply(r, e));
            }
            return (
              (r.namespace = e),
              (r.useColors = a.useColors()),
              (r.color = a.selectColor(e)),
              (r.extend = n),
              (r.destroy = a.destroy),
              Object.defineProperty(r, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== s
                    ? s
                    : (t !== a.namespaces &&
                        ((t = a.namespaces), (o = a.enabled(e))),
                      o),
                set: (e) => {
                  s = e;
                },
              }),
              "function" == typeof a.init && a.init(r),
              r
            );
          }
          function n(e, i) {
            let n = a(this.namespace + (void 0 === i ? ":" : i) + e);
            return ((n.log = this.log), n);
          }
          function t(e, a) {
            let i = 0,
              n = 0,
              t = -1,
              o = 0;
            for (; i < e.length; )
              if (n < a.length && (a[n] === e[i] || "*" === a[n]))
                ("*" === a[n] ? ((t = n), (o = i)) : i++, n++);
              else {
                if (-1 === t) return !1;
                ((n = t + 1), (i = ++o));
              }
            for (; n < a.length && "*" === a[n]; ) n++;
            return n === a.length;
          }
          return (
            (a.debug = a),
            (a.default = a),
            (a.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (a.disable = function () {
              let e = [...a.names, ...a.skips.map((e) => "-" + e)].join(",");
              return (a.enable(""), e);
            }),
            (a.enable = function (e) {
              for (let i of (a.save(e),
              (a.namespaces = e),
              (a.names = []),
              (a.skips = []),
              ("string" == typeof e ? e : "")
                .trim()
                .replace(/\s+/g, ",")
                .split(",")
                .filter(Boolean)))
                "-" === i[0] ? a.skips.push(i.slice(1)) : a.names.push(i);
            }),
            (a.enabled = function (e) {
              for (let i of a.skips) if (t(e, i)) return !1;
              for (let i of a.names) if (t(e, i)) return !0;
              return !1;
            }),
            (a.humanize = i(7802)),
            (a.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(e).forEach((i) => {
              a[i] = e[i];
            }),
            (a.names = []),
            (a.skips = []),
            (a.formatters = {}),
            (a.selectColor = function (e) {
              let i = 0;
              for (let a = 0; a < e.length; a++)
                i = ((i << 5) - i + e.charCodeAt(a)) | 0;
              return a.colors[Math.abs(i) % a.colors.length];
            }),
            a.enable(a.load()),
            a
          );
        };
      },
      6271: (e, a, i) => {
        var n = i(1536),
          t = i(271),
          o = i(5793);
        function s(e, a) {
          return e < a ? -1 : +(e > a);
        }
        ((e.exports = function (e, a, i, s) {
          var r = t(e, i);
          return (
            n(e, a, r, function i(t, o) {
              return t
                ? void s(t, o)
                : (r.index++, r.index < (r.keyedList || e).length)
                  ? void n(e, a, r, i)
                  : void s(null, r.results);
            }),
            o.bind(r, s)
          );
        }),
          (e.exports.ascending = s),
          (e.exports.descending = function (e, a) {
            return -1 * s(e, a);
          }));
      },
      6338: (e) => {
        e.exports = function (e) {
          var a =
            "function" == typeof setImmediate
              ? setImmediate
              : "object" == typeof process &&
                  "function" == typeof process.nextTick
                ? process.nextTick
                : null;
          a ? a(e) : setTimeout(e, 0);
        };
      },
      6533: (e, a, i) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "Image", {
            enumerable: !0,
            get: function () {
              return y;
            },
          }));
        let n = i(4985),
          t = i(740),
          o = i(687),
          s = t._(i(3210)),
          r = n._(i(1215)),
          c = n._(i(512)),
          p = i(4953),
          l = i(2756),
          u = i(7903);
        i(148);
        let d = i(9148),
          m = n._(i(1933)),
          f = i(3038),
          x = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          };
        function v(e, a, i, n, t, o, s) {
          let r = null == e ? void 0 : e.src;
          e &&
            e["data-loaded-src"] !== r &&
            ((e["data-loaded-src"] = r),
            ("decode" in e ? e.decode() : Promise.resolve())
              .catch(() => {})
              .then(() => {
                if (e.parentElement && e.isConnected) {
                  if (
                    ("empty" !== a && t(!0), null == i ? void 0 : i.current)
                  ) {
                    let a = new Event("load");
                    Object.defineProperty(a, "target", {
                      writable: !1,
                      value: e,
                    });
                    let n = !1,
                      t = !1;
                    i.current({
                      ...a,
                      nativeEvent: a,
                      currentTarget: e,
                      target: e,
                      isDefaultPrevented: () => n,
                      isPropagationStopped: () => t,
                      persist: () => {},
                      preventDefault: () => {
                        ((n = !0), a.preventDefault());
                      },
                      stopPropagation: () => {
                        ((t = !0), a.stopPropagation());
                      },
                    });
                  }
                  (null == n ? void 0 : n.current) && n.current(e);
                }
              }));
        }
        function h(e) {
          return s.use ? { fetchPriority: e } : { fetchpriority: e };
        }
        globalThis.__NEXT_IMAGE_IMPORTED = !0;
        let b = (0, s.forwardRef)((e, a) => {
          let {
              src: i,
              srcSet: n,
              sizes: t,
              height: r,
              width: c,
              decoding: p,
              className: l,
              style: u,
              fetchPriority: d,
              placeholder: m,
              loading: x,
              unoptimized: b,
              fill: g,
              onLoadRef: y,
              onLoadingCompleteRef: w,
              setBlurComplete: _,
              setShowAltText: j,
              sizesInput: k,
              onLoad: E,
              onError: S,
              ...R
            } = e,
            C = (0, s.useCallback)(
              (e) => {
                e &&
                  (S && (e.src = e.src), e.complete && v(e, m, y, w, _, b, k));
              },
              [i, m, y, w, _, S, b, k],
            ),
            O = (0, f.useMergedRef)(a, C);
          return (0, o.jsx)("img", {
            ...R,
            ...h(d),
            loading: x,
            width: c,
            height: r,
            decoding: p,
            "data-nimg": g ? "fill" : "1",
            className: l,
            style: u,
            sizes: t,
            srcSet: n,
            src: i,
            ref: O,
            onLoad: (e) => {
              v(e.currentTarget, m, y, w, _, b, k);
            },
            onError: (e) => {
              (j(!0), "empty" !== m && _(!0), S && S(e));
            },
          });
        });
        function g(e) {
          let { isAppRouter: a, imgAttributes: i } = e,
            n = {
              as: "image",
              imageSrcSet: i.srcSet,
              imageSizes: i.sizes,
              crossOrigin: i.crossOrigin,
              referrerPolicy: i.referrerPolicy,
              ...h(i.fetchPriority),
            };
          return a && r.default.preload
            ? (r.default.preload(i.src, n), null)
            : (0, o.jsx)(c.default, {
                children: (0, o.jsx)(
                  "link",
                  { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                  "__nimg-" + i.src + i.srcSet + i.sizes,
                ),
              });
        }
        let y = (0, s.forwardRef)((e, a) => {
          let i = (0, s.useContext)(d.RouterContext),
            n = (0, s.useContext)(u.ImageConfigContext),
            t = (0, s.useMemo)(() => {
              var e;
              let a = x || n || l.imageConfigDefault,
                i = [...a.deviceSizes, ...a.imageSizes].sort((e, a) => e - a),
                t = a.deviceSizes.sort((e, a) => e - a),
                o =
                  null == (e = a.qualities) ? void 0 : e.sort((e, a) => e - a);
              return { ...a, allSizes: i, deviceSizes: t, qualities: o };
            }, [n]),
            { onLoad: r, onLoadingComplete: c } = e,
            f = (0, s.useRef)(r);
          (0, s.useEffect)(() => {
            f.current = r;
          }, [r]);
          let v = (0, s.useRef)(c);
          (0, s.useEffect)(() => {
            v.current = c;
          }, [c]);
          let [h, y] = (0, s.useState)(!1),
            [w, _] = (0, s.useState)(!1),
            { props: j, meta: k } = (0, p.getImgProps)(e, {
              defaultLoader: m.default,
              imgConf: t,
              blurComplete: h,
              showAltText: w,
            });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(b, {
                ...j,
                unoptimized: k.unoptimized,
                placeholder: k.placeholder,
                fill: k.fill,
                onLoadRef: f,
                onLoadingCompleteRef: v,
                setBlurComplete: y,
                setShowAltText: _,
                sizesInput: e.sizes,
                ref: a,
              }),
              k.priority
                ? (0, o.jsx)(g, { isAppRouter: !i, imgAttributes: j })
                : null,
            ],
          });
        });
        ("function" == typeof a.default ||
          ("object" == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, "__esModule", { value: !0 }),
          Object.assign(a.default, a),
          (e.exports = a.default));
      },
      6558: (e) => {
        "use strict";
        e.exports = Error;
      },
      6582: (e, a, i) => {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol,
          t = i(4544);
        e.exports = function () {
          return (
            "function" == typeof n &&
            "function" == typeof Symbol &&
            "symbol" == typeof n("foo") &&
            "symbol" == typeof Symbol("bar") &&
            t()
          );
        };
      },
      6632: (e, a, i) => {
        ((a.formatArgs = function (a) {
          if (
            ((a[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              a[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          let i = "color: " + this.color;
          a.splice(1, 0, i, "color: inherit");
          let n = 0,
            t = 0;
          (a[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (t = n));
          }),
            a.splice(t, 0, i));
        }),
          (a.save = function (e) {
            try {
              e ? a.storage.setItem("debug", e) : a.storage.removeItem("debug");
            } catch (e) {}
          }),
          (a.load = function () {
            let e;
            try {
              e = a.storage.getItem("debug") || a.storage.getItem("DEBUG");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (a.useColors = function () {
            let e;
            return (
              ("undefined" != typeof window &&
                !!window.process &&
                ("renderer" === window.process.type ||
                  !!window.process.__nwjs)) ||
              (!(
                "undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
              ) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    (e = navigator.userAgent
                      .toLowerCase()
                      .match(/firefox\/(\d+)/)) &&
                    parseInt(e[1], 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (a.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (a.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (a.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (a.log = console.debug || console.log || (() => {})),
          (e.exports = i(6211)(a)));
        let { formatters: n } = e.exports;
        n.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      6736: (e, a, i) => {
        var n = i(6271);
        e.exports = function (e, a, i) {
          return n(e, a, null, i);
        };
      },
      6786: (e, a, i) => {
        "use strict";
        var n = Function.prototype.call,
          t = Object.prototype.hasOwnProperty;
        e.exports = i(2482).call(n, t);
      },
      6841: () => {},
      6843: (e, a, i) => {
        (Promise.resolve().then(i.t.bind(i, 6444, 23)),
          Promise.resolve().then(i.t.bind(i, 6042, 23)),
          Promise.resolve().then(i.t.bind(i, 8170, 23)),
          Promise.resolve().then(i.t.bind(i, 9477, 23)),
          Promise.resolve().then(i.t.bind(i, 9345, 23)),
          Promise.resolve().then(i.t.bind(i, 2089, 23)),
          Promise.resolve().then(i.t.bind(i, 6577, 23)),
          Promise.resolve().then(i.t.bind(i, 1307, 23)));
      },
      7315: (e) => {
        "use strict";
        e.exports = RangeError;
      },
      7530: (e) => {
        "use strict";
        var a = Object.prototype.toString,
          i = Math.max,
          n = function (e, a) {
            for (var i = [], n = 0; n < e.length; n += 1) i[n] = e[n];
            for (var t = 0; t < a.length; t += 1) i[t + e.length] = a[t];
            return i;
          },
          t = function (e, a) {
            for (var i = [], n = a || 0, t = 0; n < e.length; n += 1, t += 1)
              i[t] = e[n];
            return i;
          },
          o = function (e, a) {
            for (var i = "", n = 0; n < e.length; n += 1)
              ((i += e[n]), n + 1 < e.length && (i += a));
            return i;
          };
        e.exports = function (e) {
          var s,
            r = this;
          if ("function" != typeof r || "[object Function]" !== a.apply(r))
            throw TypeError(
              "Function.prototype.bind called on incompatible " + r,
            );
          for (
            var c = t(arguments, 1),
              p = i(0, r.length - c.length),
              l = [],
              u = 0;
            u < p;
            u++
          )
            l[u] = "$" + u;
          if (
            ((s = Function(
              "binder",
              "return function (" +
                o(l, ",") +
                "){ return binder.apply(this,arguments); }",
            )(function () {
              if (this instanceof s) {
                var a = r.apply(this, n(c, arguments));
                return Object(a) === a ? a : this;
              }
              return r.apply(e, n(c, arguments));
            })),
            r.prototype)
          ) {
            var d = function () {};
            ((d.prototype = r.prototype),
              (s.prototype = new d()),
              (d.prototype = null));
          }
          return s;
        };
      },
      7631: (e) => {
        "use strict";
        e.exports = ReferenceError;
      },
      7755: (e, a, i) => {
        "use strict";
        (Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          }));
        let n = i(3210),
          t = () => {},
          o = () => {};
        function s(e) {
          var a;
          let { headManager: i, reduceComponentsToState: s } = e;
          function r() {
            if (i && i.mountedInstances) {
              let a = n.Children.toArray(
                Array.from(i.mountedInstances).filter(Boolean),
              );
              i.updateHead(s(a, e));
            }
          }
          return (
            null == i || null == (a = i.mountedInstances) || a.add(e.children),
            r(),
            t(() => {
              var a;
              return (
                null == i ||
                  null == (a = i.mountedInstances) ||
                  a.add(e.children),
                () => {
                  var a;
                  null == i ||
                    null == (a = i.mountedInstances) ||
                    a.delete(e.children);
                }
              );
            }),
            t(
              () => (
                i && (i._pendingUpdate = r),
                () => {
                  i && (i._pendingUpdate = r);
                }
              ),
            ),
            o(
              () => (
                i &&
                  i._pendingUpdate &&
                  (i._pendingUpdate(), (i._pendingUpdate = null)),
                () => {
                  i &&
                    i._pendingUpdate &&
                    (i._pendingUpdate(), (i._pendingUpdate = null));
                }
              ),
            ),
            null
          );
        }
      },
      7762: (e, a, i) => {
        "use strict";
        i.d(a, { default: () => n });
        let n = (0, i(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\entities\\\\bg\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\entities\\bg\\ui\\index.tsx",
          "default",
        );
      },
      7802: (e) => {
        function a(e, a, i, n) {
          return Math.round(e / i) + " " + n + (a >= 1.5 * i ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var n,
            t,
            o,
            s,
            r = typeof e;
          if ("string" === r && e.length > 0) {
            var c = e;
            if (!((c = String(c)).length > 100)) {
              var p =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  c,
                );
              if (p) {
                var l = parseFloat(p[1]);
                switch ((p[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * l;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * l;
                  case "days":
                  case "day":
                  case "d":
                    return 864e5 * l;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return 36e5 * l;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return 6e4 * l;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return 1e3 * l;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return l;
                  default:
                    break;
                }
              }
            }
            return;
          }
          if ("number" === r && isFinite(e)) {
            return i.long
              ? (t = Math.abs((n = e))) >= 864e5
                ? a(n, t, 864e5, "day")
                : t >= 36e5
                  ? a(n, t, 36e5, "hour")
                  : t >= 6e4
                    ? a(n, t, 6e4, "minute")
                    : t >= 1e3
                      ? a(n, t, 1e3, "second")
                      : n + " ms"
              : (s = Math.abs((o = e))) >= 864e5
                ? Math.round(o / 864e5) + "d"
                : s >= 36e5
                  ? Math.round(o / 36e5) + "h"
                  : s >= 6e4
                    ? Math.round(o / 6e4) + "m"
                    : s >= 1e3
                      ? Math.round(o / 1e3) + "s"
                      : o + "ms";
          }
          throw Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e),
          );
        };
      },
      7903: (e, a, i) => {
        "use strict";
        e.exports = i(4041).vendored.contexts.ImageConfigContext;
      },
      7910: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      7932: (e) => {
        e.exports = function (e) {
          (Object.keys(e.jobs).forEach(a.bind(e)), (e.jobs = {}));
        };
        function a(e) {
          "function" == typeof this.jobs[e] && this.jobs[e]();
        }
      },
      8002: (e, a, i) => {
        "use strict";
        var n = i(5012)("%Object.defineProperty%", !0),
          t = i(2909)(),
          o = i(6786),
          s = i(9088),
          r = t ? Symbol.toStringTag : null;
        e.exports = function (e, a) {
          var i = arguments.length > 2 && !!arguments[2] && arguments[2].force,
            t =
              arguments.length > 2 &&
              !!arguments[2] &&
              arguments[2].nonConfigurable;
          if (
            (void 0 !== i && "boolean" != typeof i) ||
            (void 0 !== t && "boolean" != typeof t)
          )
            throw new s(
              "if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans",
            );
          r &&
            (i || !o(e, r)) &&
            (n
              ? n(e, r, {
                  configurable: !t,
                  enumerable: !1,
                  value: a,
                  writable: !1,
                })
              : (e[r] = a));
        };
      },
      8354: (e) => {
        "use strict";
        e.exports = require("util");
      },
      8360: (e) => {
        "use strict";
        e.exports = "undefined" != typeof Reflect && Reflect && Reflect.apply;
      },
      8501: (e) => {
        "use strict";
        e.exports = Math.pow;
      },
      8720: (e) => {
        "use strict";
        var a = Object.defineProperty || !1;
        if (a)
          try {
            a({}, "a", { value: 1 });
          } catch (e) {
            a = !1;
          }
        e.exports = a;
      },
      8750: (e) => {
        "use strict";
        e.exports = EvalError;
      },
      9021: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      9088: (e) => {
        "use strict";
        e.exports = TypeError;
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9148: (e, a, i) => {
        "use strict";
        e.exports = i(4041).vendored.contexts.RouterContext;
      },
      9181: (e, a, i) => {
        "use strict";
        var n = i(2427),
          t = i(1285),
          o = i(3471);
        e.exports = n
          ? function (e) {
              return n(e);
            }
          : t
            ? function (e) {
                if (!e || ("object" != typeof e && "function" != typeof e))
                  throw TypeError("getProto: not an object");
                return t(e);
              }
            : o
              ? function (e) {
                  return o(e);
                }
              : null;
      },
      9207: (e) => {
        "use strict";
        e.exports = (e, a = process.argv) => {
          let i = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
            n = a.indexOf(i + e),
            t = a.indexOf("--");
          return -1 !== n && (-1 === t || n < t);
        };
      },
      9228: (e, a, i) => {
        "use strict";
        let n,
          t = i(1820),
          o = i(3997),
          s = i(9207),
          { env: r } = process;
        function c(e) {
          return (
            0 !== e && {
              level: e,
              hasBasic: !0,
              has256: e >= 2,
              has16m: e >= 3,
            }
          );
        }
        function p(e, a) {
          if (0 === n) return 0;
          if (s("color=16m") || s("color=full") || s("color=truecolor"))
            return 3;
          if (s("color=256")) return 2;
          if (e && !a && void 0 === n) return 0;
          let i = n || 0;
          if ("dumb" === r.TERM) return i;
          if ("win32" === process.platform) {
            let e = t.release().split(".");
            return Number(e[0]) >= 10 && Number(e[2]) >= 10586
              ? Number(e[2]) >= 14931
                ? 3
                : 2
              : 1;
          }
          if ("CI" in r)
            return [
              "TRAVIS",
              "CIRCLECI",
              "APPVEYOR",
              "GITLAB_CI",
              "GITHUB_ACTIONS",
              "BUILDKITE",
            ].some((e) => e in r) || "codeship" === r.CI_NAME
              ? 1
              : i;
          if ("TEAMCITY_VERSION" in r)
            return +!!/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION);
          if ("truecolor" === r.COLORTERM) return 3;
          if ("TERM_PROGRAM" in r) {
            let e = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (r.TERM_PROGRAM) {
              case "iTerm.app":
                return e >= 3 ? 3 : 2;
              case "Apple_Terminal":
                return 2;
            }
          }
          return /-256(color)?$/i.test(r.TERM)
            ? 2
            : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
                  r.TERM,
                ) || "COLORTERM" in r
              ? 1
              : i;
        }
        (s("no-color") || s("no-colors") || s("color=false") || s("color=never")
          ? (n = 0)
          : (s("color") ||
              s("colors") ||
              s("color=true") ||
              s("color=always")) &&
            (n = 1),
          "FORCE_COLOR" in r &&
            (n =
              "true" === r.FORCE_COLOR
                ? 1
                : "false" === r.FORCE_COLOR
                  ? 0
                  : 0 === r.FORCE_COLOR.length
                    ? 1
                    : Math.min(parseInt(r.FORCE_COLOR, 10), 3)),
          (e.exports = {
            supportsColor: function (e) {
              return c(p(e, e && e.isTTY));
            },
            stdout: c(p(!0, o.isatty(1))),
            stderr: c(p(!0, o.isatty(2))),
          }));
      },
      9243: (e, a, i) => {
        "use strict";
        var n = i(9551).parse,
          t = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 },
          o =
            String.prototype.endsWith ||
            function (e) {
              return (
                e.length <= this.length &&
                -1 !== this.indexOf(e, this.length - e.length)
              );
            };
        function s(e) {
          return (
            process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || ""
          );
        }
        a.getProxyForUrl = function (e) {
          var a,
            i,
            r,
            c = "string" == typeof e ? n(e) : e || {},
            p = c.protocol,
            l = c.host,
            u = c.port;
          if ("string" != typeof l || !l || "string" != typeof p) return "";
          if (
            ((p = p.split(":", 1)[0]),
            (a = l = l.replace(/:\d*$/, "")),
            (i = u = parseInt(u) || t[p] || 0),
            !(
              !(r = (
                s("npm_config_no_proxy") || s("no_proxy")
              ).toLowerCase()) ||
              ("*" !== r &&
                r.split(/[,\s]/).every(function (e) {
                  if (!e) return !0;
                  var n = e.match(/^(.+):(\d+)$/),
                    t = n ? n[1] : e,
                    s = n ? parseInt(n[2]) : 0;
                  return (
                    (!!s && s !== i) ||
                    (/^[.*]/.test(t)
                      ? ("*" === t.charAt(0) && (t = t.slice(1)), !o.call(a, t))
                      : a !== t)
                  );
                }))
            ))
          )
            return "";
          var d =
            s("npm_config_" + p + "_proxy") ||
            s(p + "_proxy") ||
            s("npm_config_proxy") ||
            s("all_proxy");
          return (d && -1 === d.indexOf("://") && (d = p + "://" + d), d);
        };
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      9491: (e, a, i) => {
        var n = i(9551),
          t = n.URL,
          o = i(1630),
          s = i(5591),
          r = i(7910).Writable,
          c = i(2412),
          p = i(2296);
        !(function () {
          var e = "undefined" != typeof process,
            a = "undefined" != typeof window && "undefined" != typeof document,
            i = A(Error.captureStackTrace);
          e ||
            (!a && i) ||
            console.warn(
              "The follow-redirects package should be excluded from browser builds.",
            );
        })();
        var l = !1;
        try {
          c(new t(""));
        } catch (e) {
          l = "ERR_INVALID_URL" === e.code;
        }
        var u = [
            "auth",
            "host",
            "hostname",
            "href",
            "path",
            "pathname",
            "port",
            "protocol",
            "query",
            "search",
            "hash",
          ],
          d = ["abort", "aborted", "connect", "error", "socket", "timeout"],
          m = Object.create(null);
        d.forEach(function (e) {
          m[e] = function (a, i, n) {
            this._redirectable.emit(e, a, i, n);
          };
        });
        var f = R("ERR_INVALID_URL", "Invalid URL", TypeError),
          x = R("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
          v = R(
            "ERR_FR_TOO_MANY_REDIRECTS",
            "Maximum number of redirects exceeded",
            x,
          ),
          h = R(
            "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
            "Request body larger than maxBodyLength limit",
          ),
          b = R("ERR_STREAM_WRITE_AFTER_END", "write after end"),
          g = r.prototype.destroy || _;
        function y(e, a) {
          (r.call(this),
            this._sanitizeOptions(e),
            (this._options = e),
            (this._ended = !1),
            (this._ending = !1),
            (this._redirectCount = 0),
            (this._redirects = []),
            (this._requestBodyLength = 0),
            (this._requestBodyBuffers = []),
            a && this.on("response", a));
          var i = this;
          ((this._onNativeResponse = function (e) {
            try {
              i._processResponse(e);
            } catch (e) {
              i.emit("error", e instanceof x ? e : new x({ cause: e }));
            }
          }),
            this._performRequest());
        }
        function w(e) {
          var a = { maxRedirects: 21, maxBodyLength: 0xa00000 },
            i = {};
          return (
            Object.keys(e).forEach(function (n) {
              var o = n + ":",
                s = (i[o] = e[n]),
                r = (a[n] = Object.create(s));
              Object.defineProperties(r, {
                request: {
                  value: function (e, n, s) {
                    var r;
                    return (
                      ((r = e), t && r instanceof t)
                        ? (e = E(e))
                        : O(e)
                          ? (e = E(j(e)))
                          : ((s = n), (n = k(e)), (e = { protocol: o })),
                      A(n) && ((s = n), (n = null)),
                      ((n = Object.assign(
                        {
                          maxRedirects: a.maxRedirects,
                          maxBodyLength: a.maxBodyLength,
                        },
                        e,
                        n,
                      )).nativeProtocols = i),
                      O(n.host) || O(n.hostname) || (n.hostname = "::1"),
                      c.equal(n.protocol, o, "protocol mismatch"),
                      p("options", n),
                      new y(n, s)
                    );
                  },
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                },
                get: {
                  value: function (e, a, i) {
                    var n = r.request(e, a, i);
                    return (n.end(), n);
                  },
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                },
              });
            }),
            a
          );
        }
        function _() {}
        function j(e) {
          var a;
          if (l) a = new t(e);
          else if (!O((a = k(n.parse(e))).protocol)) throw new f({ input: e });
          return a;
        }
        function k(e) {
          if (
            (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname)) ||
            (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
          )
            throw new f({ input: e.href || e });
          return e;
        }
        function E(e, a) {
          var i = a || {};
          for (var n of u) i[n] = e[n];
          return (
            i.hostname.startsWith("[") &&
              (i.hostname = i.hostname.slice(1, -1)),
            "" !== i.port && (i.port = Number(i.port)),
            (i.path = i.search ? i.pathname + i.search : i.pathname),
            i
          );
        }
        function S(e, a) {
          var i;
          for (var n in a) e.test(n) && ((i = a[n]), delete a[n]);
          return null == i ? void 0 : String(i).trim();
        }
        function R(e, a, i) {
          function n(i) {
            (A(Error.captureStackTrace) &&
              Error.captureStackTrace(this, this.constructor),
              Object.assign(this, i || {}),
              (this.code = e),
              (this.message = this.cause ? a + ": " + this.cause.message : a));
          }
          return (
            (n.prototype = new (i || Error)()),
            Object.defineProperties(n.prototype, {
              constructor: { value: n, enumerable: !1 },
              name: { value: "Error [" + e + "]", enumerable: !1 },
            }),
            n
          );
        }
        function C(e, a) {
          for (var i of d) e.removeListener(i, m[i]);
          (e.on("error", _), e.destroy(a));
        }
        function O(e) {
          return "string" == typeof e || e instanceof String;
        }
        function A(e) {
          return "function" == typeof e;
        }
        ((y.prototype = Object.create(r.prototype)),
          (y.prototype.abort = function () {
            (C(this._currentRequest),
              this._currentRequest.abort(),
              this.emit("abort"));
          }),
          (y.prototype.destroy = function (e) {
            return (C(this._currentRequest, e), g.call(this, e), this);
          }),
          (y.prototype.write = function (e, a, i) {
            var n;
            if (this._ending) throw new b();
            if (!O(e) && !("object" == typeof (n = e) && "length" in n))
              throw TypeError("data should be a string, Buffer or Uint8Array");
            if ((A(a) && ((i = a), (a = null)), 0 === e.length)) {
              i && i();
              return;
            }
            this._requestBodyLength + e.length <= this._options.maxBodyLength
              ? ((this._requestBodyLength += e.length),
                this._requestBodyBuffers.push({ data: e, encoding: a }),
                this._currentRequest.write(e, a, i))
              : (this.emit("error", new h()), this.abort());
          }),
          (y.prototype.end = function (e, a, i) {
            if (
              (A(e) ? ((i = e), (e = a = null)) : A(a) && ((i = a), (a = null)),
              e)
            ) {
              var n = this,
                t = this._currentRequest;
              (this.write(e, a, function () {
                ((n._ended = !0), t.end(null, null, i));
              }),
                (this._ending = !0));
            } else
              ((this._ended = this._ending = !0),
                this._currentRequest.end(null, null, i));
          }),
          (y.prototype.setHeader = function (e, a) {
            ((this._options.headers[e] = a),
              this._currentRequest.setHeader(e, a));
          }),
          (y.prototype.removeHeader = function (e) {
            (delete this._options.headers[e],
              this._currentRequest.removeHeader(e));
          }),
          (y.prototype.setTimeout = function (e, a) {
            var i = this;
            function n(a) {
              (a.setTimeout(e),
                a.removeListener("timeout", a.destroy),
                a.addListener("timeout", a.destroy));
            }
            function t(a) {
              (i._timeout && clearTimeout(i._timeout),
                (i._timeout = setTimeout(function () {
                  (i.emit("timeout"), o());
                }, e)),
                n(a));
            }
            function o() {
              (i._timeout && (clearTimeout(i._timeout), (i._timeout = null)),
                i.removeListener("abort", o),
                i.removeListener("error", o),
                i.removeListener("response", o),
                i.removeListener("close", o),
                a && i.removeListener("timeout", a),
                i.socket || i._currentRequest.removeListener("socket", t));
            }
            return (
              a && this.on("timeout", a),
              this.socket
                ? t(this.socket)
                : this._currentRequest.once("socket", t),
              this.on("socket", n),
              this.on("abort", o),
              this.on("error", o),
              this.on("response", o),
              this.on("close", o),
              this
            );
          }),
          [
            "flushHeaders",
            "getHeader",
            "setNoDelay",
            "setSocketKeepAlive",
          ].forEach(function (e) {
            y.prototype[e] = function (a, i) {
              return this._currentRequest[e](a, i);
            };
          }),
          ["aborted", "connection", "socket"].forEach(function (e) {
            Object.defineProperty(y.prototype, e, {
              get: function () {
                return this._currentRequest[e];
              },
            });
          }),
          (y.prototype._sanitizeOptions = function (e) {
            if (
              (e.headers || (e.headers = {}),
              e.host && (e.hostname || (e.hostname = e.host), delete e.host),
              !e.pathname && e.path)
            ) {
              var a = e.path.indexOf("?");
              a < 0
                ? (e.pathname = e.path)
                : ((e.pathname = e.path.substring(0, a)),
                  (e.search = e.path.substring(a)));
            }
          }),
          (y.prototype._performRequest = function () {
            var e = this._options.protocol,
              a = this._options.nativeProtocols[e];
            if (!a) throw TypeError("Unsupported protocol " + e);
            if (this._options.agents) {
              var i = e.slice(0, -1);
              this._options.agent = this._options.agents[i];
            }
            var t = (this._currentRequest = a.request(
              this._options,
              this._onNativeResponse,
            ));
            for (var o of ((t._redirectable = this), d)) t.on(o, m[o]);
            if (
              ((this._currentUrl = /^\//.test(this._options.path)
                ? n.format(this._options)
                : this._options.path),
              this._isRedirect)
            ) {
              var s = 0,
                r = this,
                c = this._requestBodyBuffers;
              !(function e(a) {
                if (t === r._currentRequest)
                  if (a) r.emit("error", a);
                  else if (s < c.length) {
                    var i = c[s++];
                    t.finished || t.write(i.data, i.encoding, e);
                  } else r._ended && t.end();
              })();
            }
          }),
          (y.prototype._processResponse = function (e) {
            var a,
              i,
              o,
              s,
              r,
              u,
              d = e.statusCode;
            this._options.trackRedirects &&
              this._redirects.push({
                url: this._currentUrl,
                headers: e.headers,
                statusCode: d,
              });
            var m = e.headers.location;
            if (
              !m ||
              !1 === this._options.followRedirects ||
              d < 300 ||
              d >= 400
            ) {
              ((e.responseUrl = this._currentUrl),
                (e.redirects = this._redirects),
                this.emit("response", e),
                (this._requestBodyBuffers = []));
              return;
            }
            if (
              (C(this._currentRequest),
              e.destroy(),
              ++this._redirectCount > this._options.maxRedirects)
            )
              throw new v();
            var f = this._options.beforeRedirect;
            f &&
              (u = Object.assign(
                { Host: e.req.getHeader("host") },
                this._options.headers,
              ));
            var x = this._options.method;
            (((301 !== d && 302 !== d) || "POST" !== this._options.method) &&
              (303 !== d || /^(?:GET|HEAD)$/.test(this._options.method))) ||
              ((this._options.method = "GET"),
              (this._requestBodyBuffers = []),
              S(/^content-/i, this._options.headers));
            var h = S(/^host$/i, this._options.headers),
              b = j(this._currentUrl),
              g = h || b.host,
              y = /^\w+:/.test(m)
                ? this._currentUrl
                : n.format(Object.assign(b, { host: g })),
              w = ((a = m), (i = y), l ? new t(a, i) : j(n.resolve(i, a)));
            if (
              (p("redirecting to", w.href),
              (this._isRedirect = !0),
              E(w, this._options),
              ((w.protocol === b.protocol || "https:" === w.protocol) &&
                (w.host === g ||
                  ((o = w.host),
                  (s = g),
                  c(O(o) && O(s)),
                  (r = o.length - s.length - 1) > 0 &&
                    "." === o[r] &&
                    o.endsWith(s)))) ||
                S(
                  /^(?:(?:proxy-)?authorization|cookie)$/i,
                  this._options.headers,
                ),
              A(f))
            ) {
              var _ = { headers: e.headers, statusCode: d },
                k = { url: y, method: x, headers: u };
              (f(this._options, _, k), this._sanitizeOptions(this._options));
            }
            this._performRequest();
          }),
          (e.exports = w({ http: o, https: s })),
          (e.exports.wrap = w));
      },
      9513: (e, a, i) => {
        "use strict";
        e.exports = i(4041).vendored.contexts.HeadManagerContext;
      },
      9551: (e) => {
        "use strict";
        e.exports = require("url");
      },
      9725: (e, a, i) => {
        "use strict";
        i.d(a, { default: () => n });
        let n = (0, i(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\entities\\\\loading\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\entities\\loading\\ui\\index.tsx",
          "default",
        );
      },
      9819: (e) => {
        "use strict";
        e.exports = Function.prototype.call;
      },
      9996: (e, a, i) => {
        var n = i(7910).Stream,
          t = i(8354);
        function o() {
          ((this.source = null),
            (this.dataSize = 0),
            (this.maxDataSize = 1048576),
            (this.pauseStream = !0),
            (this._maxDataSizeExceeded = !1),
            (this._released = !1),
            (this._bufferedEvents = []));
        }
        ((e.exports = o),
          t.inherits(o, n),
          (o.create = function (e, a) {
            var i = new this();
            for (var n in (a = a || {})) i[n] = a[n];
            i.source = e;
            var t = e.emit;
            return (
              (e.emit = function () {
                return (i._handleEmit(arguments), t.apply(e, arguments));
              }),
              e.on("error", function () {}),
              i.pauseStream && e.pause(),
              i
            );
          }),
          Object.defineProperty(o.prototype, "readable", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return this.source.readable;
            },
          }),
          (o.prototype.setEncoding = function () {
            return this.source.setEncoding.apply(this.source, arguments);
          }),
          (o.prototype.resume = function () {
            (this._released || this.release(), this.source.resume());
          }),
          (o.prototype.pause = function () {
            this.source.pause();
          }),
          (o.prototype.release = function () {
            ((this._released = !0),
              this._bufferedEvents.forEach(
                function (e) {
                  this.emit.apply(this, e);
                }.bind(this),
              ),
              (this._bufferedEvents = []));
          }),
          (o.prototype.pipe = function () {
            var e = n.prototype.pipe.apply(this, arguments);
            return (this.resume(), e);
          }),
          (o.prototype._handleEmit = function (e) {
            if (this._released) return void this.emit.apply(this, e);
            ("data" === e[0] &&
              ((this.dataSize += e[1].length),
              this._checkIfMaxDataSizeExceeded()),
              this._bufferedEvents.push(e));
          }),
          (o.prototype._checkIfMaxDataSizeExceeded = function () {
            if (
              !this._maxDataSizeExceeded &&
              !(this.dataSize <= this.maxDataSize)
            ) {
              this._maxDataSizeExceeded = !0;
              var e =
                "DelayedStream#maxDataSize of " +
                this.maxDataSize +
                " bytes exceeded.";
              this.emit("error", Error(e));
            }
          }));
      },
      9998: (e) => {
        e.exports = {
          "first-family": "bg_first-family__I0vyA",
          "second-family": "bg_second-family__aA1zu",
          light: "bg_light__rt_Uw",
          medium: "bg_medium__OWkD2",
          "text-center": "bg_text-center__fT7b4",
          "text-60": "bg_text-60__2gTsW",
          "text-28": "bg_text-28__r1cW_",
          "text-14": "bg_text-14__bhA8U",
          white: "bg_white__PJ5Fo",
          red: "bg_red__6qZ_e",
          container: "bg_container__5jRAD",
        };
      },
    }));
  var a = require("../webpack-runtime.js");
  a.C(e);
  var i = (e) => a((a.s = e)),
    n = a.X(0, [447, 982], () => i(46));
  module.exports = n;
})();
