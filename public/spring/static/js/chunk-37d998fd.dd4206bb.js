(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-37d998fd"],
  {
    "051f": function (n, t, a) {
      "use strict";
      var i = a("3030"),
        e = a.n(i);
      e.a;
    },
    3030: function (n, t, a) {},
    f475: function (n, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var n = this,
            t = n.$createElement,
            a = n._self._c || t;
          return a(
            "div",
            { staticClass: "Site PageBox" },
            [
              a("van-nav-bar", {
                attrs: { fixed: "", border: !1, title: n.$t("language"), "left-arrow": "" },
                on: {
                  "click-left": function (t) {
                    return n.$router.go(-1);
                  },
                },
              }),
              a(
                "div",
                { staticClass: "ScrollBox" },
                [
                  a("van-cell", {
                    attrs: { icon: "./static/icon/zh-YN.png", title: "Việt Nam", "is-link": "" },
                    on: {
                      click: function (t) {
                        return n.changeLanguage("vi-VN");
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        e = [],
        c = {
          name: "Language",
          components: {},
          props: {},
          data() {
            return {};
          },
          computed: {},
          watch: {},
          created() {},
          mounted() {},
          activated() {},
          destroyed() {},
          methods: {
            changeLanguage(n) {
              this.$SetLanguage(n), this.$Model.GetBackData(), this.$router.go(-1);
            },
          },
        },
        o = c,
        l = (a("051f"), a("2877")),
        r = Object(l["a"])(o, i, e, !1, null, "1b1791b5", null);
      t["default"] = r.exports;
    },
  },
]);
