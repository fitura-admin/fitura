(() => {
  var e = {};
  ((e.id = 492),
    (e.ids = [492]),
    (e.modules = {
      126: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => _,
            tree: () => d,
          }));
        var n = r(5239),
          o = r(8088),
          i = r(8170),
          s = r.n(i),
          l = r(893),
          a = {};
        for (let e in l)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (a[e] = () => l[e]);
        r.d(t, a);
        let d = {
            children: [
              "",
              {
                children: [
                  "/_not-found",
                  {
                    children: [
                      "__PAGE__",
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(r.t.bind(r, 7398, 23)),
                          "next/dist/client/components/not-found-error",
                        ],
                      },
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(r.bind(r, 4431)),
                  "C:\\next\\futura\\src\\app\\layout.tsx",
                ],
                "not-found": [
                  () => Promise.resolve().then(r.t.bind(r, 7398, 23)),
                  "next/dist/client/components/not-found-error",
                ],
                forbidden: [
                  () => Promise.resolve().then(r.t.bind(r, 9999, 23)),
                  "next/dist/client/components/forbidden-error",
                ],
                unauthorized: [
                  () => Promise.resolve().then(r.t.bind(r, 5284, 23)),
                  "next/dist/client/components/unauthorized-error",
                ],
              },
            ],
          }.children,
          u = [],
          c = { require: r, loadChunk: () => Promise.resolve() },
          _ = new n.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      456: () => {},
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1244: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => _ });
        var n,
          o,
          i,
          s = r(687),
          l = r(3210),
          a = r(6190),
          d = r.n(a);
        function u() {
          return (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        let c = function (e) {
          return l.createElement(
            "svg",
            u(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 466,
                height: 392,
                fill: "none",
              },
              e,
            ),
            n ||
              (n = l.createElement(
                "g",
                { filter: "url(#loading-logo_svg__a)", opacity: 0.5 },
                l.createElement("path", {
                  fill: "url(#loading-logo_svg__b)",
                  d: "M366 202.621C366 275.751 328.399 292 254.945 292S100 275.751 100 202.621 154.891 100 228.345 100 366 129.491 366 202.621",
                }),
              )),
            o ||
              (o = l.createElement("path", {
                fill: "#fff",
                d: "M262.336 179.321c-.892-1.058-2.559-2.321-5.439-2.321-6.786 0-13.704 6.004-18.976 16.474-2.364 4.692-4.317 10.131-5.824 16.107-.202 0-.411.007-.613.007-3.034 0-4.938-1.369-5.663-4.078-1.346-5.002 1.618-14.64 11.695-22.485v-.769h-7.567c-8.319 8.353-11.29 18.132-9.512 24.743 1.332 4.959 5.196 8 10.412 8.226A122 122 0 0 0 229.175 227h5.593c.426-4.402 1.06-8.501 1.856-12.283 15.9-3.245 27.435-20.813 27.435-30.034 0-2.201-.579-4-1.723-5.355zm-24.185 29.159c4.763-16.826 12.811-25.836 18.746-25.836.411 0 .955.057 1.192.339.119.141.384.578.384 1.693 0 6.131-8.418 19.811-20.329 23.804z",
              })),
            i ||
              (i = l.createElement(
                "defs",
                null,
                l.createElement(
                  "linearGradient",
                  {
                    id: "loading-logo_svg__b",
                    x1: 233,
                    x2: 233,
                    y1: 70.207,
                    y2: 335.034,
                    gradientUnits: "userSpaceOnUse",
                  },
                  l.createElement("stop", { stopColor: "#E46A1E" }),
                  l.createElement("stop", { offset: 1, stopColor: "#105D7E" }),
                ),
                l.createElement(
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
                  l.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix",
                  }),
                  l.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  l.createElement("feGaussianBlur", {
                    result: "effect1_foregroundBlur_225_1021",
                    stdDeviation: 50,
                  }),
                ),
              )),
          );
        };
        function _() {
          let [e, t] = (0, l.useState)(!0),
            [r, n] = (0, l.useState)(!1);
          return (
            (0, l.useRef)(null),
            (0, s.jsx)("div", {
              className: `center ${d().container} ${r ? d().none : null} ${!e ? d().hidden : ""} absolute`,
              children: (0, s.jsx)(c, { className: d().logo }),
            })
          );
        }
        r(6208);
      },
      1946: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 7762)),
          Promise.resolve().then(r.bind(r, 9725)),
          Promise.resolve().then(r.bind(r, 3988)));
      },
      2114: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 5860)),
          Promise.resolve().then(r.bind(r, 1244)),
          Promise.resolve().then(r.bind(r, 4102)));
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3283: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 6346, 23)),
          Promise.resolve().then(r.t.bind(r, 7924, 23)),
          Promise.resolve().then(r.t.bind(r, 5656, 23)),
          Promise.resolve().then(r.t.bind(r, 99, 23)),
          Promise.resolve().then(r.t.bind(r, 8243, 23)),
          Promise.resolve().then(r.t.bind(r, 8827, 23)),
          Promise.resolve().then(r.t.bind(r, 2763, 23)),
          Promise.resolve().then(r.t.bind(r, 7173, 23)));
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      3988: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n });
        let n = (0, r(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\shared\\\\ui\\\\keyboard-autoscroll\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\shared\\ui\\keyboard-autoscroll\\ui\\index.tsx",
          "default",
        );
      },
      4102: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => o });
        var n = r(687);
        function o({ children: e }) {
          return (0, n.jsx)(n.Fragment, { children: e });
        }
        r(3210);
      },
      4431: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, { default: () => d, metadata: () => l, viewport: () => a }));
        var n = r(7413);
        (r(456), r(6841), r(6134));
        var o = r(7762),
          i = r(3988),
          s = r(9725);
        let l = {
            title: "Fitura",
            description: "Fintess & SPA. Coming soon",
            icons: ["/icon.svg"],
          },
          a = {
            width: "device-width",
            initialScale: 1,
            maximumScale: 1,
            viewportFit: "cover",
          };
        function d({ children: e }) {
          return (0, n.jsx)("html", {
            lang: "en",
            children: (0, n.jsx)("body", {
              className: "body relative",
              children: (0, n.jsxs)(i.default, {
                children: [
                  (0, n.jsx)(s.default, {}),
                  (0, n.jsx)(o.default, {}),
                  e,
                ],
              }),
            }),
          });
        }
      },
      5860: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => l });
        var n = r(687),
          o = r(3210),
          i = r(9998),
          s = r.n(i);
        function l() {
          let e = (0, o.useRef)(null);
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
      6841: () => {},
      6843: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 6444, 23)),
          Promise.resolve().then(r.t.bind(r, 6042, 23)),
          Promise.resolve().then(r.t.bind(r, 8170, 23)),
          Promise.resolve().then(r.t.bind(r, 9477, 23)),
          Promise.resolve().then(r.t.bind(r, 9345, 23)),
          Promise.resolve().then(r.t.bind(r, 2089, 23)),
          Promise.resolve().then(r.t.bind(r, 6577, 23)),
          Promise.resolve().then(r.t.bind(r, 1307, 23)));
      },
      7762: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n });
        let n = (0, r(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\entities\\\\bg\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\entities\\bg\\ui\\index.tsx",
          "default",
        );
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      9725: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n });
        let n = (0, r(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\next\\\\futura\\\\src\\\\entities\\\\loading\\\\ui\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\next\\futura\\src\\entities\\loading\\ui\\index.tsx",
          "default",
        );
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
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [447, 982], () => r(126));
  module.exports = n;
})();
