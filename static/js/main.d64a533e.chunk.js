(this["webpackJsonpdawn-website"] =
  this["webpackJsonpdawn-website"] || []).push([
  [0],
  [
    ,
    ,
    ,
    function (e, t, a) {},
    ,
    ,
    ,
    function (e, t, a) {},
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = a(20);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        s = a.n(n),
        l = a(9),
        c = a.n(l),
        m =
          (a(16),
          a(17),
          a(3),
          function (e) {
            return s.a.createElement(
              "div",
              null,
              s.a.createElement(
                "h1",
                { className: "App-headline" },
                s.a.createElement(
                  "span",
                  {
                    style: { animationDelay: "0ms" },
                    className: "App-headline title-block entry-anim",
                  },
                  "Dawn"
                ),
                s.a.createElement(
                  "span",
                  {
                    style: { animationDelay: "150ms" },
                    className: "App-headline title-block entry-anim",
                  },
                  "Sheedy"
                )
              ),
              s.a.createElement(
                "h1",
                { className: "App-subline" },
                s.a.createElement(
                  "span",
                  {
                    style: { animationDelay: "300ms" },
                    className: "App-subline title-block entry-anim",
                  },
                  "(they/them)"
                )
              ),
              s.a.createElement(
                "span",
                {
                  style: { animationDelay: "450ms" },
                  className: "subtitle entry-anim",
                },
                "Software Engineer // Artist"
              ),
              s.a.createElement(
                "span",
                {
                  style: { animationDelay: "600ms" },
                  className: "subtitle entry-anim",
                },
                "I make (and break) web apps."
              ),
              s.a.createElement("hr", {
                style: { animationDelay: "600ms" },
                className: "expand-anim",
              })
            );
          }),
        r = a(1),
        i = function (e) {
          var t = e.delay;
          return s.a.createElement(
            "div",
            { class: "social-line " + e.className },
            s.a.createElement("div", {
              style: { animationDelay: Math.max(t - 100, 0) + "ms" },
              className: "vl",
            }),
            s.a.createElement("div", {
              style: { animationDelay: Math.max(t - 100, 0) + "ms" },
              className: "vl",
            }),
            s.a.createElement(
              "span",
              {
                className: "entry-anim social-span",
                style: { animationDelay: t + "ms" },
              },
              s.a.createElement("a", { href: e.link }, e.text)
            ),
            e.children
          );
        };
      function o() {
        return 500 * Math.random();
      }
      var p = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(r.a)(t, 2),
            l = a[0],
            c = a[1],
            m = Object(n.useState)(!0),
            p = Object(r.a)(m, 2),
            u = p[0],
            d = p[1];
          return s.a.createElement(
            "div",
            {
              class:
                "social-link-container " + (u ? "" : l ? "open" : "closed"),
            },
            s.a.createElement(
              "div",
              { class: "social-line " + e.className },
              s.a.createElement("div", {
                style: { animationDelay: u ? "900ms" : "0ms" },
                className:
                  "vl no-indent " +
                  (u ? "" : l ? "expanded top" : "collapsed top"),
              }),
              s.a.createElement("div", {
                style: { animationDelay: u ? "900ms" : "0ms" },
                className:
                  "vl no-indent " + (u ? "" : l ? "expanded" : "collapsed"),
              }),
              s.a.createElement(
                "span",
                {
                  className: "social-span no-indent entry-anim",
                  style: { animationDelay: "500ms" },
                },
                s.a.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: function () {
                      c(!l), d(!1);
                    },
                  },
                  l ? "collapse_social_info" : "expand_social_info"
                )
              ),
              l
                ? s.a.createElement(s.a.Fragment, null)
                : s.a.createElement("div", { class: "cursor" })
            ),
            l
              ? s.a.createElement(
                  s.a.Fragment,
                  null,
                  s.a.createElement(i, {
                    link: "mailto:contact@dawnsheedy.com",
                    text: "Contact",
                    delay: o(),
                  }),
                  s.a.createElement(i, {
                    link: "https://www.linkedin.com/in/dawnshee",
                    text: "LinkedIn",
                    delay: o(),
                  }),
                  s.a.createElement(i, {
                    link: "https://github.com/dawnsheedy",
                    text: "GitHub",
                    delay: o(),
                  }),
                  s.a.createElement(i, {
                    link: "https://twitter.com/dawnshee_",
                    text: "Twitter",
                    delay: o(),
                  }),
                  s.a.createElement(i, {
                    link: "https://instagram.com/dawn.shee",
                    text: "Instagram",
                    delay: o(),
                  }),
                  s.a.createElement(
                    i,
                    {
                      link: "/dawn-resume-2022.pdf",
                      text: "Resum\xe9",
                      delay: o(),
                    },
                    s.a.createElement("div", { class: "cursor" })
                  )
                )
              : s.a.createElement(s.a.Fragment, null)
          );
        },
        u =
          (a(18),
          function (e) {
            var t = "corner-element " + e.edge;
            return s.a.createElement(
              "div",
              { class: "entry-anim " + t },
              s.a.createElement(
                "span",
                { class: "corner-text" },
                e.content,
                e.children
              )
            );
          });
      function d() {
        return "v2." + g(2) + "." + g(4);
      }
      function g(e) {
        for (
          var t = "",
            a = "abcdefghijklmnopqrstuvwxyz0123456789",
            n = a.length,
            s = 0;
          s < e;
          s++
        )
          t += a.charAt(Math.floor(Math.random() * n));
        return t;
      }
      var _ = function (e) {
        var t = Object(n.useState)(d()),
          a = Object(r.a)(t, 2),
          l = a[0],
          c = a[1];
        return (
          Object(n.useEffect)(function () {
            var e = setInterval(function () {
              c(d());
            }, 1e3);
            return function () {
              clearInterval(e);
            };
          }),
          s.a.createElement(s.a.Fragment, null, l)
        );
      };
      a(7);
      var E = function (e) {
        var t = Object(n.useState)(1),
          a = Object(r.a)(t, 2),
          l = a[0],
          c = a[1],
          m = Object(n.useState)(!1),
          i = Object(r.a)(m, 2),
          o = i[0],
          p = i[1];
        return (
          Object(n.useEffect)(function () {
            var t = setInterval(function () {
              c(l + 1), l >= 3 && c(1);
            }, 333);
            setTimeout(function () {
              p(!0);
            }, e.timeOut);
            return function () {
              clearInterval(t);
            };
          }),
          o
            ? e.pride
              ? s.a.createElement(
                  "span",
                  null,
                  "[",
                  s.a.createElement(
                    "span",
                    { class: "yellowtext entry-anim" },
                    "n"
                  ),
                  s.a.createElement(
                    "span",
                    { class: "whitetext entry-anim" },
                    "b"
                  ),
                  s.a.createElement(
                    "span",
                    { class: "purpletext entry-anim" },
                    "n"
                  ),
                  s.a.createElement(
                    "span",
                    { class: "blacktext entry-anim" },
                    "b"
                  ),
                  "]"
                )
              : e.fail
              ? s.a.createElement(
                  "span",
                  null,
                  "[",
                  s.a.createElement(
                    "span",
                    { class: "redtext entry-anim" },
                    "error"
                  ),
                  "]"
                )
              : s.a.createElement(
                  "span",
                  null,
                  "[",
                  s.a.createElement(
                    "span",
                    { class: "greentext entry-anim" },
                    e.text
                  ),
                  "]"
                )
            : s.a.createElement(
                "span",
                null,
                "[",
                (function (e) {
                  for (var t = "", a = 0; a < e; a++) t += ".";
                  return t;
                })(l),
                "]"
              )
        );
      };
      var y = function (e) {
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              u,
              { edge: "bl", content: "bl_" },
              s.a.createElement(_, null)
            ),
            s.a.createElement(
              u,
              { edge: "ur", content: "" },
              s.a.createElement(E, { timeOut: 4e3, text: "online" }),
              s.a.createElement("span", null, ":net_stat")
            ),
            s.a.createElement(
              u,
              { edge: "br", content: "" },
              s.a.createElement(E, { timeOut: 1500, pride: !0, text: "" }),
              s.a.createElement("span", null, ":nb_prd")
            )
          );
        },
        v = a(21),
        f = a(22),
        h = a(23);
      a(19);
      function b(e) {
        return Math.random() * e + 1;
      }
      var w = function (e) {
          var t = 100 * e.index + b(500);
          return s.a.createElement(
            "div",
            {
              class: "loading-element entry-anim",
              style: { animationDelay: t + "ms" },
            },
            s.a.createElement(E, {
              fail: b(100) < 5,
              text: e.statusText,
              timeOut: t + 1e3 + b(5e3),
            }),
            s.a.createElement("span", null, ":", e.text)
          );
        },
        k = [
          { msg: "kernel_start", pass: "complete" },
          { msg: "memory_unit", pass: "online" },
          { msg: "initializing_log", pass: "complete" },
          { msg: "loading_geographic_data", pass: "complete" },
          { msg: "sys_vital_diagnostic", pass: "pass" },
          { msg: "black_box_status", pass: "online" },
          { msg: "int_pressure_sensor_status", pass: "online" },
          { msg: "iff_activation", pass: "complete" },
          { msg: "fcs_activation", pass: "complete" },
          { msg: "pod_connection_state", pass: "stable" },
          { msg: "dbu_setup", pass: "complete" },
          { msg: "inertia_control_sys", pass: "online" },
          { msg: "environmental_sensor_activation", pass: "complete" },
          { msg: "equipment_authentication", pass: "complete" },
          { msg: "equipment_status_check", pass: "pass" },
          { msg: "module_check", pass: "pass" },
          { msg: "yorha_connection_test", pass: "pass" },
          { msg: "optical_system_check", pass: "pass" },
          { msg: "audio_system_test", pass: "pass" },
          { msg: "os_boot_pre_tests", pass: "complete" },
          { msg: "os_launch_state", pass: "active" },
          { msg: "gpu_stability_test", pass: "pass" },
          { msg: "deranged_meme_test", pass: "pass" },
          { msg: "socket_connection_test", pass: "pass" },
          { msg: "vector_adjustment_test", pass: "pass" },
          { msg: "io_system", pass: "online" },
          { msg: "os_boot", pass: "complete" },
          { msg: "vibe_check", pass: "pass" },
          { msg: "rng_system_check", pass: 2e4 * Math.random() },
          {
            msg: "system_time_state",
            pass: new Date().toLocaleTimeString().toLocaleLowerCase(),
          },
          {
            msg: "system_date_state",
            pass: new Date().toLocaleDateString().toLocaleLowerCase(),
          },
          { msg: "env_operation_diagnostics", pass: "pass" },
          { msg: "hid_system_init", pass: "complete" },
          { msg: "network_sys", pass: "online" },
          { msg: "server_connection", pass: "online" },
          { msg: "internal_status_diagnostic", pass: "pass" },
          { msg: "backwards_overflow_metrics", pass: "synergized" },
          { msg: "dmail_subsystem", pass: "online" },
          { msg: "phone_wave_link", pass: "established" },
          { msg: "el_psy_congroo", pass: "pass" },
          { msg: "nerve_link_diagnostic", pass: "pass" },
          { msg: "ftl_drive_spooling", pass: "complete" },
          { msg: "web_render_test", pass: "pass" },
          { msg: "tlm_calibration_check", pass: "pass" },
          { msg: "key_validation_system", pass: "online" },
          { msg: "additional_tests", pass: "pass" },
        ],
        x = function (e) {
          e.delay;
          return s.a.createElement(
            "div",
            { class: "loading-cover" },
            s.a.createElement(
              "div",
              { class: "loading-text-vanish" },
              s.a.createElement(
                "span",
                { class: "entry-anim loading-title" },
                "system_initialization:",
                s.a.createElement(E, { text: "complete", timeOut: 1e4 })
              ),
              k.map(function (e, t) {
                return s.a.createElement(w, {
                  statusText: e.pass,
                  index: t,
                  text: e.msg,
                });
              })
            )
          );
        },
        N = function (e) {
          var t = Object(n.useState)("home"),
            a = Object(r.a)(t, 2),
            l = a[0],
            c = a[1];
          return "loading" === l
            ? s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(x, { selector: c })
              )
            : "home" === l
            ? s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(
                  "div",
                  { class: "low-opacity" },
                  s.a.createElement(x, { selector: c })
                ),
                s.a.createElement(y, null),
                s.a.createElement(
                  v.a,
                  { className: "App-center" },
                  s.a.createElement(
                    f.a,
                    { className: "justify-content-md-left" },
                    s.a.createElement(
                      h.a,
                      {
                        sm: { span: 12 },
                        md: { span: 10, offset: 2 },
                        lg: { span: 9, offset: 3 },
                      },
                      s.a.createElement(m, null),
                      s.a.createElement(p, null)
                    )
                  )
                )
              )
            : void 0;
        };
      var O = function () {
        return s.a.createElement(
          "div",
          { className: "App-body" },
          s.a.createElement(
            "div",
            { className: "App-welcome crt crt-abberation" },
            s.a.createElement(N, null)
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        s.a.createElement(s.a.StrictMode, null, s.a.createElement(O, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.d64a533e.chunk.js.map
