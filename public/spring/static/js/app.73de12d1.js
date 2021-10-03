!(function (s) {
    function e(e) {
        for (var a, n, t = e[0], i = e[1], o = e[2], r = 0, l = []; r < t.length; r++) (n = t[r]), Object.prototype.hasOwnProperty.call(h, n) && h[n] && l.push(h[n][0]), (h[n] = 0);
        for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (s[a] = i[a]);
        for (p && p(e); l.length; ) l.shift()();
        return d.push.apply(d, o || []), c();
    }
    function c() {
        for (var e, a = 0; a < d.length; a++) {
            for (var n = d[a], t = !0, i = 1; i < n.length; i++) {
                var o = n[i];
                0 !== h[o] && (t = !1);
            }
            t && (d.splice(a--, 1), (e = m((m.s = n[0]))));
        }
        return e;
    }
    var n = {},
        u = { app: 0 },
        h = { app: 0 },
        d = [];
    function m(e) {
        if (n[e]) return n[e].exports;
        var a = (n[e] = { i: e, l: !1, exports: {} });
        return s[e].call(a.exports, a, a.exports, m), (a.l = !0), a.exports;
    }
    (m.e = function (d) {
        var e = [];
        u[d]
            ? e.push(u[d])
            : 0 !== u[d] &&
              {
                  "chunk-025a12fe": 1,
                  "chunk-02ad8ac8": 1,
                  "chunk-04971649": 1,
                  "chunk-09d568ae": 1,
                  "chunk-0afe8bb1": 1,
                  "chunk-0b3b804e": 1,
                  "chunk-0e463468": 1,
                  "chunk-1244fa68": 1,
                  "chunk-129ed1bb": 1,
                  "chunk-1a4c09d8": 1,
                  "chunk-1fd34ccf": 1,
                  "chunk-22dd5234": 1,
                  "chunk-263711a6": 1,
                  "chunk-4aedb4c8": 1,
                  "chunk-2ece0212": 1,
                  "chunk-35d3d33b": 1,
                  "chunk-37d998fd": 1,
                  "chunk-3bffbb60": 1,
                  "chunk-4ce7385c": 1,
                  "chunk-4e0a8c26": 1,
                  "chunk-5fa78ca5": 1,
                  "chunk-6488c951": 1,
                  "chunk-6c5e4628": 1,
                  "chunk-7111ddf3": 1,
                  "chunk-7b764b50": 1,
                  "chunk-7e1b2c58": 1,
                  "chunk-850b8a0c": 1,
                  "chunk-8f623f66": 1,
                  "chunk-937f6d34": 1,
                  "chunk-954c2efa": 1,
                  "chunk-9979c9f2": 1,
                  "chunk-9a1ce4de": 1,
                  "chunk-9dca46e0": 1,
                  "chunk-b38aec8c": 1,
                  "chunk-bd08e8b4": 1,
                  "chunk-d296175a": 1,
                  "chunk-f1b051bc": 1,
                  "chunk-f74bc16a": 1,
              }[d] &&
              e.push(
                  (u[d] = new Promise(function (e, n) {
                      for (
                          var a =
                                  "static/css/" +
                                  ({}[d] || d) +
                                  "." +
                                  {
                                      "chunk-025a12fe": "831d495d",
                                      "chunk-02ad8ac8": "bffbcb4d",
                                      "chunk-04971649": "177e5be0",
                                      "chunk-09d568ae": "1bcc1bf6",
                                      "chunk-0afe8bb1": "8a0cce30",
                                      "chunk-0b3b804e": "7393e7f8",
                                      "chunk-0c387ff5": "31d6cfe0",
                                      "chunk-0e463468": "1cf60912",
                                      "chunk-1244fa68": "b740d170",
                                      "chunk-129ed1bb": "797fa17b",
                                      "chunk-1a4c09d8": "d6464930",
                                      "chunk-1fd34ccf": "8330fae7",
                                      "chunk-22dd5234": "b9357d92",
                                      "chunk-230112ae": "31d6cfe0",
                                      "chunk-263711a6": "13849353",
                                      "chunk-2d0baa9c": "31d6cfe0",
                                      "chunk-2d0c11c5": "31d6cfe0",
                                      "chunk-2d0cf74f": "31d6cfe0",
                                      "chunk-2d0d09c7": "31d6cfe0",
                                      "chunk-2d216bf6": "31d6cfe0",
                                      "chunk-2d21d0c2": "31d6cfe0",
                                      "chunk-4aedb4c8": "06c0ac1c",
                                      "chunk-6bc6d4c9": "31d6cfe0",
                                      "chunk-2d22188d": "31d6cfe0",
                                      "chunk-2d2244e1": "31d6cfe0",
                                      "chunk-2d228878": "31d6cfe0",
                                      "chunk-2d23790f": "31d6cfe0",
                                      "chunk-2ece0212": "e8f12651",
                                      "chunk-35d3d33b": "2bee072c",
                                      "chunk-37d998fd": "41d850ec",
                                      "chunk-3bffbb60": "34c201bb",
                                      "chunk-4ce7385c": "9ee3d431",
                                      "chunk-4e0a8c26": "a1c575a0",
                                      "chunk-5fa78ca5": "3dfcea7b",
                                      "chunk-6488c951": "c16c18f7",
                                      "chunk-64f40d28": "31d6cfe0",
                                      "chunk-6c5e4628": "e9c57689",
                                      "chunk-7111ddf3": "41131e48",
                                      "chunk-7b764b50": "236033c6",
                                      "chunk-7e1b2c58": "30fe2cf7",
                                      "chunk-850b8a0c": "c67bf3f4",
                                      "chunk-8f623f66": "6b6e39de",
                                      "chunk-937f6d34": "11b1ae78",
                                      "chunk-954c2efa": "a8d2c69a",
                                      "chunk-9979c9f2": "7b8b8c64",
                                      "chunk-9a1ce4de": "108dba41",
                                      "chunk-9dca46e0": "368967cb",
                                      "chunk-b38aec8c": "6a825998",
                                      "chunk-bd08e8b4": "01facc36",
                                      "chunk-d296175a": "967965e6",
                                      "chunk-f1b051bc": "4bcab962",
                                      "chunk-f74bc16a": "91e82c4e",
                                  }[d] +
                                  ".css",
                              t = m.p + a,
                              i = document.getElementsByTagName("link"),
                              o = 0;
                          o < i.length;
                          o++
                      ) {
                          var r = i[o],
                              l = r.getAttribute("data-href") || r.getAttribute("href");
                          if ("stylesheet" === r.rel && (l === a || l === t)) return e();
                      }
                      for (var s = document.getElementsByTagName("style"), o = 0; o < s.length; o++) if ((l = (r = s[o]).getAttribute("data-href")) === a || l === t) return e();
                      var c = document.createElement("link");
                      (c.rel = "stylesheet"),
                          (c.type = "text/css"),
                          (c.onload = e),
                          (c.onerror = function (e) {
                              var a = (e && e.target && e.target.src) || t;
                              ((e = new Error("Loading CSS chunk " + d + " failed.\n(" + a + ")")).code = "CSS_CHUNK_LOAD_FAILED"), (e.request = a), delete u[d], c.parentNode.removeChild(c), n(e);
                          }),
                          (c.href = t),
                          document.getElementsByTagName("head")[0].appendChild(c);
                  }).then(function () {
                      u[d] = 0;
                  }))
              );
        var t,
            i,
            a,
            o,
            n,
            r = h[d];
        return (
            0 !== r &&
                (r
                    ? e.push(r[2])
                    : ((n = new Promise(function (e, a) {
                          r = h[d] = [e, a];
                      })),
                      e.push((r[2] = n)),
                      ((t = document.createElement("script")).charset = "utf-8"),
                      (t.timeout = 120),
                      m.nc && t.setAttribute("nonce", m.nc),
                      (t.src =
                          m.p +
                          "static/js/" +
                          ({}[(n = d)] || n) +
                          "." +
                          {
                              "chunk-025a12fe": "4621e79e",
                              "chunk-02ad8ac8": "7925ac9c",
                              "chunk-04971649": "1dd17b86",
                              "chunk-09d568ae": "b28e103e",
                              "chunk-0afe8bb1": "28dad0ff",
                              "chunk-0b3b804e": "fc9a4e7c",
                              "chunk-0c387ff5": "b8237b05",
                              "chunk-0e463468": "7b1463c8",
                              "chunk-1244fa68": "e101e856",
                              "chunk-129ed1bb": "043052f3",
                              "chunk-1a4c09d8": "4d78264f",
                              "chunk-1fd34ccf": "500947c8",
                              "chunk-22dd5234": "ca769634",
                              "chunk-230112ae": "6f023902",
                              "chunk-263711a6": "c3d6046e",
                              "chunk-2d0baa9c": "8d1c7304",
                              "chunk-2d0c11c5": "283f6569",
                              "chunk-2d0cf74f": "004272f7",
                              "chunk-2d0d09c7": "cbef3832",
                              "chunk-2d216bf6": "395c64d1",
                              "chunk-2d21d0c2": "b51727b1",
                              "chunk-4aedb4c8": "444f78fe",
                              "chunk-6bc6d4c9": "77f30368",
                              "chunk-2d22188d": "eb9ff0d2",
                              "chunk-2d2244e1": "b01da6dd",
                              "chunk-2d228878": "d2f4f72e",
                              "chunk-2d23790f": "decf46ad",
                              "chunk-2ece0212": "3a819cf9",
                              "chunk-35d3d33b": "94be5946",
                              "chunk-37d998fd": "dd4206bb",
                              "chunk-3bffbb60": "3e6142fa",
                              "chunk-4ce7385c": "3201bab3",
                              "chunk-4e0a8c26": "b5c6d8c1",
                              "chunk-5fa78ca5": "51fd6e00",
                              "chunk-6488c951": "b5b85b8e",
                              "chunk-64f40d28": "aef5d477",
                              "chunk-6c5e4628": "ed8a6295",
                              "chunk-7111ddf3": "8928cb83",
                              "chunk-7b764b50": "c411c022",
                              "chunk-7e1b2c58": "5dbcba3a",
                              "chunk-850b8a0c": "2df0f340",
                              "chunk-8f623f66": "6c04cc9b",
                              "chunk-937f6d34": "9f9c7516",
                              "chunk-954c2efa": "999bafa0",
                              "chunk-9979c9f2": "2e9edc03",
                              "chunk-9a1ce4de": "fe6b6bff",
                              "chunk-9dca46e0": "869a3c59",
                              "chunk-b38aec8c": "fd5577c9",
                              "chunk-bd08e8b4": "ceff3ff5",
                              "chunk-d296175a": "a23bbc68",
                              "chunk-f1b051bc": "38c2da38",
                              "chunk-f74bc16a": "b7c9c788",
                          }[n] +
                          ".js"),
                      (i = new Error()),
                      (a = function (e) {
                          (t.onerror = t.onload = null), clearTimeout(o);
                          var a,
                              n = h[d];
                          0 !== n &&
                              (n &&
                                  ((a = e && ("load" === e.type ? "missing" : e.type)),
                                  (e = e && e.target && e.target.src),
                                  (i.message = "Loading chunk " + d + " failed.\n(" + a + ": " + e + ")"),
                                  (i.name = "ChunkLoadError"),
                                  (i.type = a),
                                  (i.request = e),
                                  n[1](i)),
                              (h[d] = void 0));
                      }),
                      (o = setTimeout(function () {
                          a({ type: "timeout", target: t });
                      }, 12e4)),
                      (t.onerror = t.onload = a),
                      document.head.appendChild(t))),
            Promise.all(e)
        );
    }),
        (m.m = s),
        (m.c = n),
        (m.d = function (e, a, n) {
            m.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: n });
        }),
        (m.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (m.t = function (a, e) {
            if ((1 & e && (a = m(a)), 8 & e)) return a;
            if (4 & e && "object" == typeof a && a && a.__esModule) return a;
            var n = Object.create(null);
            if ((m.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: a }), 2 & e && "string" != typeof a))
                for (var t in a)
                    m.d(
                        n,
                        t,
                        function (e) {
                            return a[e];
                        }.bind(null, t)
                    );
            return n;
        }),
        (m.n = function (e) {
            var a =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return m.d(a, "a", a), a;
        }),
        (m.o = function (e, a) {
            return Object.prototype.hasOwnProperty.call(e, a);
        }),
        (m.p = ""),
        (m.oe = function (e) {
            throw (console.error(e), e);
        });
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        t = a.push.bind(a);
    (a.push = e), (a = a.slice());
    for (var i = 0; i < a.length; i++) e(a[i]);
    var p = t;
    d.push([0, "chunk-vendors"]), c();
})({
    0: function (e, a, n) {
        e.exports = n("56d7");
    },
    "080c": function (e, a, n) {
        "use strict";
        var t = n("1f13");
        n.n(t).a;
    },
    "12cb": function (e, a, n) {
        "use strict";
        n.d(a, "a", function () {
            return b;
        });
        var t = n("2b0e"),
            i = n("3c69"),
            o = n("a925"),
            r =
                (n("bc3a"),
                {
                    line: "切换线路",
                    language: "选择语言",
                    common: ["在线客服", "取消悬浮"],
                    home: {
                        broadcast: "恭喜会员{member}推荐一名{vipname}<br>获得IDR{grade}推广奖励!",
                        taskHall: { title: ["任务大厅", "商家发布大厅"] },
                        memberList: { title: "会员榜单", data: ["恭喜:{member}", "今天完成{num}单,赚取IDR{profit}!"] },
                        businessList: { title: "商家榜单", data: ["{member}", "今天发布{num}单任务"] },
                        noticeTitle: "温馨Thông báo",
                        tabBar: ["首页", "任务", "VIP", "收益", "我的"],
                        menu: ["VIP专区", "视频教程", "推广奖励"],
                        msg: "任务未开放",
                        video: "暂无视频教程",
                    },
                    login: { text: ["记住用户名/密码", "正在登录...", "立即登录"], placeholder: ["请输入手机号", "请输入登录密码"], i18n: ["无{title}账号？{a} {line}", "注册"] },
                    register: {
                        text: ["欢迎注册", "短信码发送中...", "获取短信码", "正在注册...", "立即注册", "已有账号，马上下载"],
                        placeholder: ["请输入手机号", "请输入短信验证码", "请输入登录密码", "请确认您的密码", "请输入邀请码", "两次密码不一样", "请输入验证码"],
                        i18n: ["已有账号？{a} {line}", "登录"],
                    },
                    postTask: {
                        navBar: { title: "发布任务", right: "发布规则" },
                        field: [
                            { label: "任务分类" },
                            { label: "任务标题", placeholder: "请输入任务标题", error: "任务标题不能为空" },
                            { label: "任务简介", placeholder: "请输入任务简介" },
                            { label: "任务单价", placeholder: "请输入任务单价", right: "IDR", error: ["任务单价不能为空", "任务单价不能低于1IDR"] },
                            { label: "领取数量", placeholder: "请输入领取数量", error: "领取数量不能为空" },
                            { label: "领取次数", placeholder: "请输入领取次数", right: "次/人", error: "领取次数不能为空" },
                            { label: "任务总价", error: "任务总价未计算" },
                            { label: "链接信息", placeholder: "请输入链接地址", error: "链接信息不能为空" },
                            { label: "任务级别" },
                            { label: "截止日期", placeholder: "点击选择日期", error: "截止日期不能为空" },
                            { label: "完成条件", error: "请选择完成条件" },
                            { label: "审核样例" },
                            { label: "操作步骤", placeholder: "简单易懂的步骤有助于完成!", error: "操作步骤不能为空" },
                        ],
                        button: "提交",
                        step: { title: "操作步骤", right: "完成", placeholder: "请输入步骤描述", button: ["删除", "添加"] },
                        tips: [
                            "平台手续费约 {pump}{br}本次发布需支付约 {price}，请保证账户余额充足 {a}{br}Thông báo: 本平台禁止发布黄赌毒及涉政等一切法律所禁止的内容，如发现扣除积分，封禁账号。",
                            "去充值",
                            "最少保留一项步骤",
                            "最多添加十个步骤",
                        ],
                    },
                    vip: {
                        user: { title: ["您的身份", "游客"], label: "每日任务", value: ["生效日期", "永久有效", "请先登录"] },
                        list: { label: "每日任务:{number}次", button: "立即加入", text: ["每日收益", "月收益", "推荐奖励:每名", "免费", "每单"] },
                        dialog: ["确定花费 {amount} IDR成为{name}吗？", "你当前为{currname}，无法成为{name}", "确定花费 {amount} IDR续费{name}吗？"],
                    },
                    user: {
                        myEarnings: { grid: ["个人余额(IDR)", "昨日收益(IDR)", "今日收益(IDR)", "本周收益(IDR)", "本月收益(IDR)", "上月收益(IDR)", "总收益(IDR)", "今日完成任务(单)", "今日剩余任务(单)"] },
                        default: ["我的上级", "登录账号", "邀请码", "退出登录", "余额", "金币", "我的钱包", "封号", "限制", "良好", "优秀"],
                        menu: ["任务记录", "审核任务", "发布管理", "个人信息", "账号绑定", "日结报表", "账变记录", "邀请好友", "团队报表", "帮助手册", "信用中心", "APP下载"],
                    },
                    userInfo: {
                        default: ["个人信息", "头像", "手机号", "银行卡", "支付宝", "详细信息", "登录密码", "资金密码", "点击设置", "修改头像", "修改登录密码", "修改资金密码", "提交", "清空缓存"],
                        label: ["原登录密码", "新登录密码", "确认密码", "原资金密码", "新资金密码", "确认密码"],
                        placeholder: ["请输入原登录密码", "请输入新登录密码", "请确认登录密码", "请输入原资金密码", "请输入新资金密码", "请确认资金密码"],
                    },
                    bankCard: {
                        default: ["绑定银行卡", "立即认证", "正在提交...", "立即添加", "添加银行卡"],
                        tips: ["请实名认证后再来添加银行卡", "您绑定银行卡的开户名必须与您认证的实名一致，否则将无法成功提现。"],
                        label: ["姓名", "银行名称", "银行户口", "IFSC代码"],
                        placeholder: ["请选择银行名称", "请输入银行户口", "请输入IFSC代码"],
                    },
                    userSet: {
                        default: ["实名认证", "详细信息", "绑定支付宝", "提交"],
                        label: ["真实姓名", "QQ号", "支付宝账号", "支付宝姓名"],
                        placeholder: ["请输入真实姓名(本人姓名提现所用)", "请输入QQ号", "请输入支付宝账号", "请输入支付宝姓名"],
                        tips: "温馨Thông báo：绑定银行卡不可以修改，为您提款使用",
                    },
                    bindAccount: { default: ["绑定账号", "查看教程", "提交"], tabs: ["账号", "账号", "账号"], label: ["操作说明", "添加截图", "账号"], placeholder: "请输入{account}账号" },
                    dayReport: ["日结报表", "总收益", "我完成的任务", "我的任务收益", "下级完成的任务", "下级任务收益", "单", "最近30天", "数量", "任务", "下级", "消费", "日期"],
                    fundRecord: { default: ["支出记录", "Lịch sử nạp tiền", "收入记录", "充", "收", "支"], tabs: ["收入", "支出", "充值"] },
                    vanPull: ["没有更多数据了", "没有数据"],
                    promote: [
                        "你的好友",
                        "邀请你加入{title}",
                        "推荐码",
                        "复制推荐码",
                        "复制邀请链接",
                        "保存二维码",
                        "推广奖励",
                        "保存海报成功",
                        "保存海报失败，请多试几次或截屏保存",
                        "请截图",
                        "保存推广海报",
                        "保存推广海报到手机<br>如不成功请多试几次或截屏保存",
                    ],
                    teamReport: {
                        default: [
                            "搜索",
                            "团队余额",
                            "团队收益",
                            "团队充值",
                            "团队提现",
                            "首充人数",
                            "首推人数",
                            "团队人数",
                            "团队新增",
                            "个",
                            "我",
                            "用户",
                            "充值",
                            "提现",
                            "返点",
                            "提成",
                            "选择年月日",
                            "暂无数据",
                            "充值金额",
                            "充值人数",
                            "充值返佣",
                        ],
                        tabs: ["团队报表", "我的团队"],
                        team: ["一级", "二级", "三级"],
                    },
                    help: ["帮助手册", "暂无内容"],
                    credit: [
                        "信用中心",
                        "信用说明",
                        "信用记录",
                        "<p>1.信用积分每周评估一次</p><p>2.初始用户信用积分:<b>60</b></p><p>3.如果检测到用户做任务上传虚假图片一天扣除:<b>1</b>积分,扣分上限:<b>7</b>积分</p><p>4.如果未检测到用户使用虚假图片增加<b>1</b>积分</p><p>5.信用积分低于<b>50</b>分将被限制提现</p><p>6.信用积分低于<b>30</b>分接任务次数减半</p><p>7.信用积分小于等于<b>0</b>分将被封号</p>",
                        "我的信用",
                        "暂时没有信用记录",
                    ],
                    upload: ["上传中...", "错误格式", "上传成功", "上传失败"],
                    task: {
                        default: ["任务清单", "任务要求", "创建", "审核", "打开链接", "复制链接", "单价", "提交", "放弃"],
                        tabs: ["进行中", "审核中", "Chi tiết", "已失败", "恶意", "已放弃"],
                        msg: "请上传完成任务图片",
                        info: [
                            "任务详情",
                            "任务标题",
                            "任务收益",
                            "任务描述",
                            "上传要求",
                            "提交样例",
                            "用户未提交样例",
                            "审核说明",
                            "审核日期",
                            "需求方",
                            "发布",
                            "复制",
                            "跳转",
                            "任务步骤",
                            "第{index}步",
                            "审核样例",
                            "无审核样例",
                            "数据加载中...",
                            "放弃任务",
                            "提交完成任务",
                            "发布内容",
                        ],
                        index: [
                            "当前身份",
                            '您当前的等级为 <i style="color:#1989fa">{currVip}</i><br>只能领取当前<i style="color:#1989fa">{currVip}</i>等级的任务<br>是否加入 <i style="color:#dd6161">{vip}</i> 等级',
                            "立即加入",
                            "请选择任务类别",
                        ],
                        list: ["任务列表", "需求方", "剩余", "要求", "领取"],
                        show: [
                            "任务详情",
                            "人已赚到",
                            "剩余{num}个名额",
                            "48小时内审核",
                            "任务描述",
                            "需求方",
                            "审核标准",
                            "复制",
                            "跳转",
                            "任务步骤",
                            "第{index}步",
                            "审核样例",
                            "无审核样例",
                            "数据加载中...",
                            "正在提交...",
                            "领取任务",
                            "立即登录",
                            "发布内容",
                        ],
                    },
                    serviceCenter: ["客服中心", "Hi，专属客服", "很高兴为您服务", "自助服务", "在线客服", "充值客服", "Line客服"],
                    audit: {
                        default: ["审核任务", "领取用户", "领取日期", "更新日期", "审核"],
                        tabs: ["进行中", "审核中", "Nạp", "已失败"],
                        info: [
                            "审核详情",
                            "任务标题",
                            "任务金额",
                            "人Nạp",
                            "剩余{num}个名额",
                            "任务描述",
                            "链接信息",
                            "审核样例",
                            "领取用户",
                            "领取",
                            "完成状态",
                            "提交样例",
                            "用户未提交样例",
                            "更新日期",
                            "数据加载中...",
                            "恶意",
                            "重审",
                            "失败",
                            "成功",
                            "审核任务",
                            "审核说明",
                            "请输入审核说明",
                            "提交的任务不合格，需重新提交审核",
                            "恭喜任务完成，再接再厉",
                            "提交的任务页面截图错误，任务失败",
                            "恶意提交任务，任务失败",
                        ],
                    },
                    postRecord: ["发布管理", "发布", "总量", "Chi tiết", "截止日期", "审核", "撤销", "编辑"],
                    wallet: {
                        default: ["我的钱包", "充值", "提现", "Lịch sử nạp tiền", "提现记录", "充", "提", "支付宝"],
                        label: ["提现方式", "提现金额", "资金密码", "提交", "手机号", "邮箱", "IFSC"],
                        placeholder: ["选择提现方式", "请输入提现金额", "请输入资金密码", "请选择提现方式", "请输入收款人手机号", "请输入收款人邮箱", "请输入收款人IFSC"],
                        msg: ["你还未设置资金密码，请先设置", "你还未绑定银行卡，请先绑定"],
                    },
                    recharge: {
                        default: ["充值", "充值详情", "Lịch sử nạp tiền", "可用余额{money}，请选择充值方式", "单笔最低金额为{currency}{min}，最高{currency}{max}，手续费{fee}%", "正在提交...", "立即充值", "返回", "加载中..."],
                        label: ["充值金额", "充值通道", "转账姓名", "付款人姓名", "付款人手机", "付款人UPI账户", "付款人邮箱"],
                        placeholder: [
                            "请输入充值金额",
                            "请选择充值通道",
                            "请输入转账姓名",
                            "单笔最低金额为{currency}{min}",
                            "单笔最高金额为{currency}{max}",
                            "请输入付款人姓名",
                            "请输入付款人手机号，号码前加上国际区号，例如+86",
                            "请输入付款人UPI账户",
                            "请输入付款人邮箱",
                        ],
                        info: ["充值金额", "订单号", "收款银行", "收款账号", "收款人", "复制", "{type}转账", "转账截图", "提交", "IFSC代码", "账户类型", "处理说明"],
                        tips: [
                            "请选择以下方式转账相符的金额以免延误财务查收<br>转账后请上传转账截图作为核对证明",
                            "无需加好友，扫一扫二维码向我转账付钱",
                            "请按照下面信息完成转账",
                            "Thông báo：成功支付后，请联系在线客服，提供您的会员账号、充值金额、订单号、存款人帐号、充值时间；方便财务及时为您添加资金",
                            "注意：会员每笔转账支付请提交一次",
                            "转账后请上传转账截图作为核对证明",
                        ],
                    },
                    dialog: ["Thông báo", "确定", "正在提交...", "复制成功", "IOS系统版本低不支持", "正在注册...", "数据加载中..."],
                    lineList: ["线路选择", "当前线路", "线路"],
                }),
            l = n("91f4"),
            s = n.n(l),
            l = n("b459"),
            c = n.n(l),
            l = n("c6e7"),
            d = n.n(l),
            l = n("e71b"),
            u = n.n(l),
            l = n("9c51"),
            h = n.n(l),
            l = n("788a"),
            m = n.n(l),
            l = n("db49"),
            p = n.n(l);
        let g = "vi-VN";
        switch ("en" == localStorage.Language ? "en-US" : "vi-VN") {
            case "en":
                (g = "en-US"), i.a.use("en-US", s.a);
                break;
            case "cn":
                (g = "zh-CN"), i.a.use("zh-CN", c.a);
                break;
            case "ft":
                (g = "zh-TW"), i.a.use("zh-TW", d.a);
                break;
            case "id":
                (g = "id-ID"), i.a.use("id-ID", u.a);
                break;
            case "vi":
                (g = "vi-VN"), i.a.use("vi-VN", h.a);
                break;
            case "es":
                (g = "es-ES"), i.a.use("es-ES", m.a);
                break;
            case "ja":
                (g = "ja-JP"), i.a.use("ja-JP", p.a);
        }
        t.a.use(o.a);
        r = new o.a({
            locale: g,
            messages: {
                "zh-CN": r,
                "zh-TW": {
                    line: "切換線路",
                    language: "選擇語言",
                    common: ["線上客服", "取消懸浮"],
                    home: {
                        broadcast: "恭喜會員{member}推薦一名{vipname}<br>獲得IDR{grade}推廣獎勵!",
                        taskHall: { title: ["任務大廳", "商家發佈大廳"] },
                        memberList: { title: "會員榜單", data: ["恭喜:{member}", "今天完成{num}單,賺取IDR{profit}!"] },
                        businessList: { title: "商家榜單", data: ["{member}", "今天發佈{num}單任務"] },
                        noticeTitle: "溫馨Thông báo",
                        tabBar: ["首頁", "任務", "VIP", "收益", "我的"],
                        menu: ["VIP專區", "視頻教程", "推廣獎勵"],
                        msg: "任務未開放",
                        video: "暫無視頻教程",
                    },
                    login: { text: ["記住用戶名/密碼", "正在登入…", "立即登入"], placeholder: ["請輸入手機號", "請輸入登入密碼"], i18n: ["無{title}帳號？{a} {line}", "註冊"] },
                    register: {
                        text: ["歡迎註冊", "簡訊碼發送中…", "獲取簡訊碼", "正在註冊…", "立即註冊", "已有帳號，馬上下載"],
                        placeholder: ["請輸入手機號", "請輸入簡訊驗證碼", "請輸入登入密碼", "請確認您的密碼", "請輸入邀請碼", "兩次密碼不一樣", "請輸入驗證碼"],
                        i18n: ["已有帳號？{a} {line}", "登入"],
                    },
                    postTask: {
                        navBar: { title: "發佈任務", right: "發佈規則" },
                        field: [
                            { label: "任務分類" },
                            { label: "任務標題", placeholder: "請輸入任務標題", error: "任務標題不能為空" },
                            { label: "任務簡介", placeholder: "請輸入任務簡介" },
                            { label: "任務單價", placeholder: "請輸入任務單價", right: "IDR", error: ["任務單價不能為空", "任務單價不能低於1IDR"] },
                            { label: "領取數量", placeholder: "請輸入領取數量", error: "領取數量不能為空" },
                            { label: "領取次數", placeholder: "請輸入領取次數", right: "次/人", error: "領取次數不能為空" },
                            { label: "任務總價", error: "任務總價未計算" },
                            { label: "連結資訊", placeholder: "請輸入連結位址", error: "連結資訊不能為空" },
                            { label: "任務級別" },
                            { label: "截止日期", placeholder: "點擊選擇日期", error: "截止日期不能為空" },
                            { label: "完成條件", error: "請選擇完成條件" },
                            { label: "稽核樣例" },
                            { label: "操作步驟", placeholder: "簡單易懂的步驟有助於完成！", error: "操作步驟不能為空" },
                        ],
                        button: "提交",
                        step: { title: "操作步驟", right: "完成", placeholder: "請輸入步驟描述", button: ["删除", "添加"] },
                        tips: [
                            "平臺手續費約 {pump}{br}本次發佈需支付約 {price}，請保證帳戶餘額充足 {a}{br}Thông báo：本平臺禁止發佈黃賭毒及涉政等一切法律所禁止的內容，如發現扣除積分，封禁帳號。",
                            "去充值",
                            "最少保留一項步驟",
                            "最多添加十個步驟",
                        ],
                    },
                    vip: {
                        user: { title: ["您的身份", "遊客"], label: "每日任務", value: ["生效日期", "永久有效", "請先登錄"] },
                        list: { label: "每日任務:{number}次", button: "立即加入", text: ["每日收益", "月收益", "推薦獎勵：每名", "免費", "每單"] },
                        dialog: ["確定花費 {amount} IDR成為{name}嗎？", "你當前為{currname}，無法成為{name}", "確定花費 {amount} IDR續費{name}嗎？"],
                    },
                    user: {
                        myEarnings: { grid: ["個人餘額(IDR)", "昨日收益(IDR)", "今日收益(IDR)", "本周收益(IDR)", "本月收益(IDR)", "上月收益(IDR)", "總收益(IDR)", "今日完成任務(單)", "今日剩餘任務(單)"] },
                        default: ["我的上級", "登入帳號", "邀請碼", "登出", "餘額", "IDR", "我的錢包", "封號", "限制", "良好", "優秀"],
                        menu: ["任務記錄", "稽核任務", "發佈管理", "個人資訊", "帳號綁定", "日結報表", "賬變記錄", "邀請好友", "團隊報表", "幫助手冊", "信用中心", "APP下載"],
                    },
                    userInfo: {
                        default: ["個人資訊", "頭像", "手機號", "銀行卡", "支付寶", "詳細資訊", "登入密碼", "資金密碼", "點擊設定", "修改頭像", "修改登入密碼", "修改資金密碼", "提交", "清空緩存"],
                        label: ["原登入密碼", "新登入密碼", "確認密碼", "原資金密碼", "新資金密碼", "確認密碼"],
                        placeholder: ["請輸入原登入密碼", "請輸入新登入密碼", "請確認登入密碼", "請輸入原資金密碼", "請輸入新資金密碼", "請確認資金密碼"],
                    },
                    bankCard: {
                        default: ["綁定銀行卡", "立即認證", "正在提交…", "立即添加", "添加銀行卡"],
                        tips: ["請實名認證後再來添加銀行卡", "您綁定銀行卡的開戶名必須與您認證的實名一致，否則將無法成功提現。"],
                        label: ["姓名", "銀行名稱", "銀行戶口", "IFSC程式碼"],
                        placeholder: ["請選擇銀行名稱", "請輸入銀行戶口", "請輸入IFSC程式碼"],
                    },
                    userSet: {
                        default: ["實名認證", "詳細資訊", "綁定支付寶", "提交"],
                        label: ["真實姓名", "QQ號", "支付寶帳號", "支付寶姓名"],
                        placeholder: ["請輸入真實姓名(本人姓名提現所用)", "請輸入QQ號", "請輸入支付寶帳號", "請輸入支付寶姓名"],
                        tips: "溫馨Thông báo：綁定銀行卡不可以修改，為您提款使用",
                    },
                    bindAccount: { default: ["綁定帳號", "查看教程", "提交"], tabs: ["帳號", "帳號", "帳號"], label: ["操作說明", "添加截圖", "帳號"], placeholder: "請輸入{account}帳號" },
                    dayReport: ["日結報表", "總收益", "我完成的任務", "我的任務收益", "下級完成的任務", "下級任務收益", "單", "最近30天", "數量", "任務", "下級", "消費", "日期"],
                    fundRecord: { default: ["支出記錄", "充值記錄", "收入記錄", "充", "收", "支"], tabs: ["收入", "支出", "充值"] },
                    vanPull: ["沒有更多數據了", "沒有數據"],
                    promote: [
                        "你的好友",
                        "邀請你加入{title}",
                        "推薦碼",
                        "複製推薦碼",
                        "複製邀請連結",
                        "保存二維碼",
                        "推廣獎勵",
                        "保存海報成功",
                        "保存海報失敗，請多試幾次或截圖保存",
                        "請截圖",
                        "保存推廣海報",
                        "保存推廣海報到手機<br>如不成功請多試幾次或截圖保存",
                    ],
                    teamReport: {
                        default: [
                            "蒐索",
                            "團隊餘額",
                            "團隊收益",
                            "團隊充值",
                            "團隊提現",
                            "首充人數",
                            "首推人數",
                            "團隊人數",
                            "團隊新增",
                            "個",
                            "我",
                            "用戶",
                            "充值",
                            "提現",
                            "返點",
                            "提成",
                            "選擇年月日",
                            "暫無數據",
                            "充值金額",
                            "充值人數",
                            "充值返傭",
                        ],
                        tabs: ["團隊報表", "我的團隊"],
                        team: ["一級", "二級", "三級"],
                    },
                    help: ["幫助手冊", "暫無內容"],
                    credit: [
                        "信用中心",
                        "信用說明",
                        "信用記錄",
                        "<p>1.信用積分每週評估一次</p><p>2.初始用戶信用積分：<b>60</b></p><p>3.如果檢測到用戶做任務上傳虛假圖片一天扣除：<b>1</b>積分，扣分上限：<b>7</b>積分</p><p>4.如果未檢測到用戶使用虛假圖片新增<b>1</b>積分</p><p>5.信用積分低於<b>50</b>分將被限制提現</p><p>6.信用積分低於<b>30</b>分接任務次數减半</p><p>7.信用積分小於等於<b>0< /b>分將被封號</p>",
                        "我的信用",
                        "暫時沒有信用記錄",
                    ],
                    upload: ["上傳中…", "錯誤格式", "上傳成功", "上傳失敗"],
                    task: {
                        default: ["任務清單", "任務要求", "創建", "稽核", "打開連結", "複製連結", "單價", "提交", "放弃"],
                        tabs: ["進行中", "稽核中", "Chi tiết", "已失敗", "惡意", "已放弃"],
                        msg: "請上傳完成任務圖片",
                        info: [
                            "任務詳情",
                            "任務標題",
                            "任務收益",
                            "任務描述",
                            "上傳要求",
                            "提交樣例",
                            "用戶未提交樣例",
                            "稽核說明",
                            "審核日期",
                            "需求方",
                            "發佈",
                            "複製",
                            "跳轉",
                            "任務步驟",
                            "第{index}步",
                            "稽核樣例",
                            "無稽核樣例",
                            "數據加載中…",
                            "放弃任務",
                            "提交完成任務",
                            "發佈內容",
                        ],
                        index: [
                            "當前身份",
                            '您當前的等級為 <i style="color:#1989fa">{currVip}</i><br>只能領取當前<i style="color:#1989fa">{currVip}</i>等級的任務<br>是否加入 <i style="color:#dd6161">{vip}</i> 等級',
                            "立即加入",
                            "請選擇任務類別",
                        ],
                        list: ["任務清單", "需求方", "剩餘", "要求", "領取"],
                        show: [
                            "任務詳情",
                            "人已賺到",
                            "剩餘{num}個名額",
                            "48小時內稽核",
                            "任務描述",
                            "需求方",
                            "稽核標準",
                            "複製",
                            "跳轉",
                            "任務步驟",
                            "第{index}步",
                            "稽核樣例",
                            "無稽核樣例",
                            "數據加載中…",
                            "正在提交…",
                            "領取任務",
                            "立即登入",
                            "發佈內容",
                        ],
                    },
                    serviceCenter: ["客服中心", "Hi，專屬客服", "很高興為您服務", "自助服務", "線上客服", "充值客服", "Line客服"],
                    audit: {
                        default: ["審核任務", "領取用戶", "領取日期", "更新日期", "審核"],
                        tabs: ["進行中", "審核中", "Chi tiết", "已失敗"],
                        info: [
                            "審核詳情",
                            "任務標題",
                            "任務金額",
                            "人Chi tiết",
                            "剩餘{num}個名額",
                            "任務描述",
                            "鏈接信息",
                            "審核樣例",
                            "領取用戶",
                            "領取",
                            "完成狀態",
                            "提交樣例",
                            "用戶未提交樣例",
                            "更新日期",
                            "數據加載中...",
                            "惡意",
                            "重審",
                            "失敗",
                            "成功",
                            "審核任務",
                            "審核說明",
                            "請輸入審核說明",
                            "提交的任務不合格，需重新提交審核",
                            "恭喜任務完成，再接再厲",
                            "提交的任務頁面截圖錯誤，任務失敗",
                            "惡意提交任務，任務失敗",
                        ],
                    },
                    postRecord: ["發布管理", "發布", "總量", "Chi tiết", "截止日期", "審核", "撤銷", "編輯"],
                    wallet: {
                        default: ["我的錢包", "充值", "提現", "充值記錄", "提現記錄", "充", "提", "支付寶"],
                        label: ["提現方式", "提現金額", "資金密碼", "提交", "手機號", "郵箱", "IFSC"],
                        placeholder: ["選擇提現方式", "請輸入提現金額", "請輸入資金密碼", "請選擇提現方式", "請輸入收款人手機號", "請輸入收款人郵箱", "請輸入收款人IFSC"],
                        msg: ["你還未設置資金密碼，請先設置", "你還未綁定銀行卡，請先綁定"],
                    },
                    recharge: {
                        default: ["充值", "充值詳情", "充值記錄", "可用餘額{money}，請選擇充值方式", "單筆最低金額為{currency}{min}，最高{currency}{max}，手續費{fee}%", "正在提交...", "立即充值", "返回", "加載中..."],
                        label: ["充值金額", "充值通道", "轉賬姓名", "付款人姓名", "付款人手機", "付款人UPI賬戶", "付款人郵箱"],
                        placeholder: [
                            "請輸入充值金額",
                            "請選擇充值通道",
                            "請輸入轉賬姓名",
                            "單筆最低金額為{currency}{min}",
                            "單筆最高金額為{currency}{max}",
                            "請輸入付款人姓名",
                            "請輸入付款人手機號，號碼前加上國際區號，例如 86",
                            "請輸入付款人UPI賬戶",
                            "請輸入付款人郵箱",
                        ],
                        info: ["充值金額", "訂單號", "收款銀行", "收款賬號", "收款人", "複製", "{type}轉賬", "轉賬截圖", "提交", "IFSC代碼", "賬戶類型", "處理說明"],
                        tips: [
                            "請選擇以下方式轉賬相符的金額以免延誤財務查收<br>轉賬后請上傳轉賬截圖作為核對證明",
                            "無需加好友，掃一掃二維碼向我轉賬付錢",
                            "請按照下面信息完成轉賬",
                            "Thông báo：成功支付后，請聯繫在線客服，提供您的會員賬號、充值金額、訂單號、存款人帳號、充值時間；方便財務及時為您添加資金",
                            "注意：會員每筆轉賬支付請提交一次",
                            "轉賬后請上傳轉賬截圖作為核對證明",
                        ],
                    },
                    dialog: ["Thông báo", "確定", "正在提交...", "複製成功", "IOS系統版本低不支持", "正在註冊...", "數據加載中..."],
                    lineList: ["線路選擇", "當前線路", "線路"],
                },
                "en-US": {
                    line: "Line",
                    language: "Language",
                    common: ["Service", "Cancel Suspension"],
                    upload: ["Uploading...", "Wrong format", "Uploaded successfully", "Upload failed"],
                    appMsg: [
                        "Ready to download updates...",
                        "The download is complete, whether to install the update package",
                        "Download update failed",
                        "{num}% downloaded",
                        "Updating...",
                        "The update is successful and will restart soon",
                        "Update failed",
                        "Press again to exit the application",
                    ],
                    vanPull: ["No more data", "No data"],
                    login: { text: ["Remember username/password", "Logging...", "Log in now"], placeholder: ["Please enter phone number", "Please enter login password"], i18n: ["No {title} account? {a} {line}", "Register"] },
                    register: {
                        text: ["Welcome to register", "SMS code sending...", "Get SMS code", "Registering...", "Register now", "Have an account,download now"],
                        placeholder: [
                            "Please enter your phone number",
                            "Please enter SMS verification code",
                            "Please enter the login password",
                            "Please confirm your password",
                            "Please enter the invitation code",
                            "Two passwords are different",
                            "Please enter the verification code",
                        ],
                        i18n: ["Have an account? {a} {line}", "Login"],
                    },
                    footer: ["Home", "Task", "Chat", "VIP", "My", "Profit"],
                    home: {
                        broadcast: "Congratulations to {member} for recommending a {vipname} and getting IDR{grade} promotion rewards!",
                        menu: ["VIP area", "Video tutorial", "Promotion rewards"],
                        taskHall: { title: ["Task hall", "Business Hall"] },
                        memberList: { title: "Membership list", data: ["Congratulations {member}", "Complete {num} single task today and earn IDR{profit}!"] },
                        businessList: { title: "Merchant list", data: ["{member}", "Release {num} single task today"] },
                        noticeTitle: "The latest announcement",
                        tabBar: ["Home", "Task", "VIP", "Profit", "My"],
                        msg: "The task is not open",
                        video: "No video tutorial",
                    },
                    postTask: {
                        navBar: { title: "Release mission", right: "Release rules" },
                        field: [
                            { label: "Task classification" },
                            { label: "Task title", placeholder: "Please enter a task title", error: "Task title cannot be empty" },
                            { label: "Task Brief", placeholder: "Please enter a task description" },
                            { label: "Task unit price", placeholder: "Please enter the task unit price", right: "IDR", error: "Task unit price cannot be empty" },
                            { label: "Number received", placeholder: "Please enter the number", error: "The quantity cannot be empty" },
                            { label: "Number of receipts", placeholder: "Please enter the number of receipts", right: "Times/person", error: "The number of receipts cannot be empty" },
                            { label: "Total task price", error: "The total task price is not calculated" },
                            { label: "Link information", placeholder: "Please enter the link address", error: "Link information cannot be empty" },
                            { label: "Task level" },
                            { label: "Deadline", placeholder: "Click to select date", error: "Deadline cannot be empty" },
                            { label: "Conditions of completion", error: "Please select a completion condition" },
                            { label: "Upload requirements", placeholder: "Please enter upload request" },
                            { label: "Sample audit" },
                            { label: "Steps", placeholder: "Easy to understand steps help to complete!", error: "Operation step cannot be empty", img: "Step diagram is not perfect" },
                        ],
                        button: "Submit",
                        step: { title: "Steps", left: "Cancel", right: "Completed", placeholder: "Please enter a step description", button: ["Delete", "Add"] },
                        tips: [
                            "Platform handling fee {pump}{br}This release will require payment of about {price},Please ensure that the balance of the account is sufficient {a}{br}Tip: This platform prohibits the release of pornography, gambling, drugs and all other legal prohibited content, such as deduction points, blocked account.",
                            "To recharge",
                            "Keep at least one step",
                            "Add up to ten steps",
                        ],
                    },
                    vip: {
                        user: { title: ["Your identity", "Visitors"], label: "Daily Tasks", value: ["Effective date", "Permanent validity", "Please log in first"] },
                        list: { label: "Daily Tasks:{number}", button: ["Join now", "Immediate Renewal"], text: ["Daily Profit", "Monthly Income", "Recommendation Reward: Everyone", "Free", "Per order"] },
                        dialog: ["Are you sure to spend IDR {amount} to become {name}?", "You are currently {currname} and cannot be {name}", "Are you sure to spend IDR {amount} to renew {name}?"],
                    },
                    user: {
                        default: ["My superior", "Account", "Invitation code", "Exit login", "Balance", "Gold", "My wallet", "Seal", "Restriction", "Good", "Excellent"],
                        myEarnings: {
                            grid: [
                                "SỐ DƯ (VND)",
                                "THU NHẬP HÔM QUA (VND)",
                                "THU NHẬP HÔM NAY (VND)",
                                "THU NHẬP TRONG TUẦN (VND)",
                                "THU NHẬP THÁNG NÀY (VND)",
                                "THU NHẬP THÁNG TRƯỚC (VND)",
                                "TỔNG THU NHẬP (VND)",
                                "NHIỆM VỤ ĐÃ HOÀN THÀNH HÔM NAY (ĐƠN)",
                                "NHIỆM VỤ CÒN LẠI HÔM NAY (ĐƠN)",
                                "Hoa hồng hôm nay",
                                "Giảm giá hôm nay",
                            ],
                        },
                        grid: [
                            "Balance",
                            "Yesterday's earnings",
                            "Today's earnings",
                            "This week's earnings",
                            "This month's earnings",
                            "Last month's earnings",
                            "Total revenue",
                            "Complete the task today(PCE)",
                            "Today's remaining tasks(PCE)",
                            "Today's commission",
                            "Today's rebate",
                        ],
                        menu: [
                            "Task records",
                            "Audit task",
                            "Release management",
                            "Personal information",
                            "Account binding",
                            "Daily statement",
                            "Accounting records",
                            "Invite friends",
                            "Team Reports",
                            "Helpbook",
                            "Credit centres",
                            "Download APP",
                        ],
                    },
                    userInfo: {
                        default: [
                            "Personal information",
                            "Head portrait",
                            "Mobile number",
                            "Bank card",
                            "Alipay",
                            "Detailed information",
                            "Login password",
                            "Fund password",
                            "Click Settings",
                            "Change head portrait",
                            "Change login password",
                            "Change fund password",
                            "Submit",
                            "Empty the cache",
                        ],
                        label: ["Original login password", "New login password", "Confirming passwords", "Original money code", "New money code", "Confirm password"],
                        placeholder: [
                            "Please enter the original login password",
                            "Please enter a new login password",
                            "Please confirm the login password",
                            "Please enter the original fund password",
                            "Please enter the new funds password",
                            "Please confirm the fund password",
                        ],
                    },
                    userSet: {
                        default: ["Real name certification", "Detailed information", "Bind Alipay", "Submit"],
                        label: ["Real name", "QQ", "Alipay account", "Alipay Name"],
                        placeholder: ["Please enter a real name(My name is used for cash withdrawal)", "Enter QQ number", "Please enter Alipay account", "Please enter Alipay name"],
                        tips: "Reminder: The bound bank card cannot be modified, it is used for your withdrawal",
                    },
                    bindAccount: {
                        default: ["Bind Account", "View the tutorial", "Submit"],
                        tabs: ["Account", "Account", "Account"],
                        label: ["Instructions", "Add screenshot", "Account"],
                        placeholder: "Please enter your {account} account",
                    },
                    bankCard: {
                        default: ["Bind bank card", "Authenticate now", "Submitting ...", "Add it now", "Add bank card"],
                        tips: [
                            "Please add your bank card after real name authentication",
                            "The account opening name of your bound bank card must be the same as your verified real name, otherwise you will not be able to withdraw successfully.",
                        ],
                        label: ["Name", "Bank name", "Bank account", "IFSC code"],
                        placeholder: ["Please select bank name", "Please enter the Bank account", "Please enter the IFSC code"],
                    },
                    wallet: {
                        default: ["My wallet", "Recharge", "Withdrawal", "Recharge record", "Withdrawal record", "R", "W", "Alipay"],
                        label: ["Withdrawal method", "Withdrawal amount", "Fund password", "Submit", "Phone number", "Email", "IFSC"],
                        placeholder: [
                            "Select withdrawal method",
                            "Please input the withdrawal amount",
                            "Please input fund password",
                            "Please select the withdrawal method",
                            "Please enter the payee's mobile phone number",
                            "Please enter the payee's email address",
                            "Please enter the payee IFSC",
                        ],
                        msg: ["You haven't set the money code yet, please set it first", "You haven't tied a bank card, please bind it first"],
                    },
                    recharge: {
                        default: [
                            "Recharge",
                            "Recharge details",
                            "Recharge record",
                            "Available balance {money}, please choose recharge method",
                            "Single minimum amount is IDR {min}, maximum IDR {max}, handling fee {fee}%",
                            "Submitting...",
                            "Recharge now",
                            "Return",
                            "Loading...",
                        ],
                        label: ["Recharge amount", "Recharge channel", "Name of transfer", "Payer's Name", "Payer's Mobile Phone", "Payer UPI Account", "Payer's Email"],
                        placeholder: [
                            "Please enter the recharge amount",
                            "Please select recharge channel",
                            "Please enter the name of the transfer",
                            "Single minimum amount is IDR {min}",
                            "Single maximum amount is IDR {max}",
                            "Please enter the name of the payer",
                            "Please enter the payer's mobile phone number, prefix the number with the international area code, such as +86",
                            "Please enter the UPI account of the payer",
                            "Please enter the payer's email address",
                        ],
                        info: ["Recharge amount", "Order number", "Bank", "Account no", "Name", "Copy", "{type} Transfer", "Transfer screenshot", "Submit", "IFSC Code", "Account type", "Processing instructions"],
                        tips: [
                            "Please select the following method to transfer the matching amount to avoid delay in the financial check.<br>After the transfer, please upload the transfer screenshot as a verification certificate",
                            "No need to add friends, scan the QR code to transfer money to me",
                            "Please complete the transfer according to the information below",
                            "Hint: After successful payment, please contact online service to provide your member account number, recharge amount, order number, depositor account number, recharge time, convenient for financial department to add funds for you in time.",
                            "Note: please submit one payment for each transfer",
                            "After the transfer, please upload the transfer screenshot as a verification certificate",
                        ],
                    },
                    task: {
                        default: ["Task list", "Task requirements", "Create", "Audit", "Open the link", "Copy the link", "Unit Price", "Submit", "Waiver"],
                        tabs: ["Doing", "Audit", "Completed", "Failed", "Malice", "Abandoned"],
                        msg: "Please upload the finished picture",
                        info: [
                            "Task details",
                            "Task title",
                            "Task benefits",
                            "Task description",
                            "Upload requirements",
                            "Submit sample",
                            "The user did not submit the sample",
                            "Audit notes",
                            "Date of audit",
                            "Demand side",
                            "Release",
                            "Copy",
                            "Jump",
                            "Task steps",
                            "Step {index}",
                            "Audit sample",
                            "No audit sample",
                            "Data loading...",
                            "Give up the task",
                            "Submit completed task",
                            "Publish content",
                        ],
                        index: [
                            "Current status",
                            'Your current rating is <i style="color:#1989fa">{currVip}</i><br>can only claim the current <i style="color:#1989fa">{currVip}</i> level task<br>do you want to join <i style="color:#dd6161">{vip}</i> level',
                            "Join now",
                            "Please select task category",
                        ],
                        list: ["Task list", "Demand side", "Remaining", "Request", "Receiving"],
                        show: [
                            "Task details",
                            "Man has earned it",
                            "Remaining {num} places",
                            "Audit within 48 hours",
                            "Task description",
                            "Demand side",
                            "Audit standards",
                            "Copy",
                            "Jump",
                            "Task steps",
                            "Step {index}",
                            "Audit sample",
                            "No audit sample",
                            "Data loading...",
                            "Submitting...",
                            "Collect task",
                            "Log in now",
                            "Publish content",
                        ],
                    },
                    audit: {
                        default: ["Audit task", "Receive users", "Pick up date", "Update date", "Audit"],
                        tabs: ["Doing", "Audit", "Completed", "Failed"],
                        info: [
                            "Audit details",
                            "Task title",
                            "Task amount",
                            "Person completed",
                            "Remaining {num} places",
                            "Task description",
                            "Link information",
                            "Audit sample",
                            "Collect users",
                            "Receive",
                            "Completion status",
                            "Submit sample",
                            "The user did not submit the sample",
                            "Update date",
                            "Data loading...",
                            "Malicious",
                            "Retrial",
                            "Failure",
                            "Success",
                            "Audit task",
                            "Audit instructions",
                            "Please enter audit description",
                            "If the submitted task is unqualified, it needs to be re submitted for review",
                            "Congratulations on the completion of the task",
                            "The submitted task page screenshot error, the task failed",
                            "Malicious submission task, task failed",
                        ],
                    },
                    postRecord: ["Release management", "Release", "Total", "Completed", "Deadline", "Audit", "Rescission", "Editors"],
                    dayReport: [
                        "Daily statement",
                        "Total revenue",
                        "My mission",
                        "My mission benefits",
                        "Tasks completed by subordinates",
                        "Subordinate task benefits",
                        "PCE",
                        "Last 30 days",
                        "Quantity",
                        "Task",
                        "Subordinate",
                        "Consumption",
                        "Date",
                    ],
                    fundRecord: { default: ["Expenditure records", "Recharge record", "Revenue records", "R", "I", "E"], tabs: ["Revenue", "Expenditure", "Recharge"] },
                    promote: [
                        "Your best friend",
                        "Invite you to join the {title}",
                        "Referral code",
                        "Copy recommendation code ",
                        "Copy the invitation link",
                        "Save the QR code",
                        "Promotional incentives",
                        "Save the poster successfully",
                        "Failed to save the poster, please try a few more times or save the screenshot",
                        "Please screenshot",
                        "Save Promotion Poster",
                        "Save the promotion poster to your phone<br>If you are unsuccessful, please try a few more times or save the screenshot",
                    ],
                    teamReport: {
                        default: [
                            "Search",
                            "Team balance",
                            "Team benefits",
                            "Team recharge",
                            "Team withdraw",
                            "Number of first charge",
                            "Number of first push",
                            "Team size",
                            "New team",
                            "PCE",
                            "Me",
                            "User",
                            "Recharge",
                            "Withdrawals",
                            "Rebate",
                            "Commission",
                            "Select date",
                            "No data",
                            "Recharge amount",
                            "Recharge Number",
                            "Recharge Rebate",
                        ],
                        tabs: ["Team Reports", "My team"],
                        team: ["Level 1", "Level 2", "Level 3"],
                    },
                    help: ["Helpbook", "Not available"],
                    credit: [
                        "Credit centres",
                        "Credit note",
                        "Credit records",
                        "<p>1.Credit points are evaluated once a week</p><p>2.Initial user credit score:<b>60</b></p><p>3.If it is detected that the user does a task to upload a false image, it will be deducted one day:<b>1</b>Upper limit of points deduction:<b>7</b>integral</p><p>4.If the user does not detect the use of false images to increase<b>1</b>integral</p><p>5.Credit score below<b>50</b>Cash withdrawal will be restricted</p><p>6.Credit score below<b>30</b>Halve the number of tapping tasks</p><p>7.Credit score less than or equal to<b>0</b>score Will be banned</p>",
                        "My credit",
                        "There is no credit record for the time being",
                    ],
                    appDown: ["App Download", "Scan QR code to download app", "Save QR code", "QR code saved successfully", "Failed to save QR code, please try a few more times or save the screenshot"],
                    dialog: ["Tips", "Confirm", "Submitting...", "Copy succeeded", "IOS system version is low and not supported", "Registering...", "Data loading..."],
                    lineList: ["Line selection", "Current line", "Line"],
                    serviceCenter: ["Customer service", "Hi, exclusive customer service", "Glad to serve you.", "Self service", "Online customer service", "Recharge customer service", "Line customer service"],
                },
                "id-ID": {
                    line: "Ubah rute",
                    language: "Pilih bahasa",
                    common: ["Layanan Online", "Batalkan penangguhan"],
                    upload: ["Mengunggah...", "Format yang salah", "Unggah hasil", "Unggah gagal"],
                    appMsg: [
                        "Bersiap mengunduh pembaruan...",
                        "Unduh berhasil,perlu perbarui paket",
                        "Pembaruan unduh gagal",
                        "Telah unduh{num}%",
                        "Dalam proses pembaruan...",
                        "Pembaruan berhasil.Mohon restart",
                        "Pembaruan gagal",
                        "Mohon tekan sekali lagi untuk keluar",
                    ],
                    vanPull: ["Tidak ada data yang baru lagi", "Tidak ada data"],
                    login: {
                        text: ["Ingat nama pengguna/kata sandi", "Dalam proses masuk...", "Masuk sekarang"],
                        placeholder: ["Mohon mengisi nomor telepon", "Mohon mengisi kata sandi"],
                        i18n: ["Tidak ada {title} akun?{a} {line}", "Daftar"],
                    },
                    register: {
                        text: ["Selamat mendaftar", "Pengiriman kode SMS...", "Dapatkan kode SMS", "Bersiap daftar...", "Daftar segera", "Akun telah wujud, unggah segera"],
                        placeholder: ["Sila isikan nomor telepon", "Sila mengisi kode SMS", "Sila megisi kata sandi", "Sila verifikasi kata sandi anda", "Sila mengisi kode undangan", "Dua kata sandi tidak sama", "Sila mengisi kode SMS "],
                        i18n: ["Sudah ada akun?{a} {line}", "Daftar masuk"],
                    },
                    footer: ["Halaman", "Tugas", "Obrolan", "VIP", "Milikku", "Pendapatan"],
                    home: {
                        broadcast: "Selamat kepada anggota{member}rekomendasi seorang{grade},mendapat{currency}{reward}ganjaran!",
                        menu: ["Ruang VIP", "Video tutorial", "Ganjaran promosi"],
                        taskHall: { title: ["Ruang tugas", "Ruang pedagang"] },
                        memberList: { title: "Daftar anggota", data: ["Selamat:{member}", "Selesai{num}tugas,dan untung{currency}{profit}!"] },
                        businessList: { title: "Daftar pedagang", data: ["{member}", "Hari ini rilis{num}tugas"] },
                        tabBar: ["Halaman", "Tugas", "VIP", "keuntungan", "Milikku"],
                        noticeTitle: "Pengumuman terbaru",
                        msg: "Tugas belum buka",
                        video: "Tidak ada video tutorial",
                    },
                    postTask: {
                        navBar: { title: "Menghantar tugas", right: "Aturan publikasi" },
                        field: [
                            { label: "Jenis tugas" },
                            { label: "Tajuk tugas", placeholder: "Sila mengisi tajuk tugas", error: "Tajuk tugas tidak bisa kosong" },
                            { label: "Pengantar tugas", placeholder: "Sila mengisi pengantar tugas" },
                            { label: "Harga tugas", placeholder: "Sila mengisi harga tugas", error: "Harga tugas tidak bisa kosong" },
                            { label: "Jumlah terima", placeholder: "Sila mengisi jumlah terima", error: "Jumlah tidak bisa kosong" },
                            { label: "Jumlah terima", placeholder: "Sila mengisi jumlah terima", right: "kali/orang", error: "Jumlah terima tidak bisa kosong" },
                            { label: "Harga tugas", error: "Harga tugas belum dikira" },
                            { label: "Detail tautan", placeholder: "Sila mengisi alamattautan", error: "Detail tautan idak bisa kosong" },
                            { label: "Tingkat tugas" },
                            { label: "Tenggat waktu", placeholder: "Sila pilih tanggal", error: "Tanggal tidak bisa kosong" },
                            { label: "Kondisi penyelesaian", error: "Sila pilih kondisi penyelesaian" },
                            { label: "Permintaan unggah", placeholder: "Sila mengisi permintaan unggah" },
                            { label: "Verifikasi sampel" },
                            {
                                label: "Langkah-langkah operasi",
                                placeholder: "Langkah-langkah yang muddy dipahami bisa membantu anda menyelesaikan",
                                error: "Ruang langkah-langkah tidak bisa kosong",
                                img: "Terdapat gambar langkah-langkah tidak selesai",
                            },
                        ],
                        button: "Menghantar",
                        step: { title: "Langkah-langkah operasi", left: "Menghapus", right: "Selesai", placeholder: "Sila mengisi detail langkah-langkah", button: ["Menghapus", "Menambah"] },
                        tips: [
                            "Kos publikasi {pump}{br}kini perlu membayar {price} sila pastikan salso akun mencukupi {a}{br}Perhatian:Platform ini melarang publikasi konten pornografi, perjudian dan politik yang dilarang undang-undang. Jika didapati, akun akan tergantung.",
                            "Menambah uang",
                            "Tinggalkan satu langkah minimum",
                            "Menambah sepuluh langkah maximum",
                        ],
                    },
                    vip: {
                        user: { title: ["Identitas anda", "Wisatawan"], label: "Tugas harian", value: ["Tanggal", "Permanen", "Sila daftar dulu"] },
                        list: { label: "Tugas harian:{number}kali", button: ["Segara ikut serta", "Segera memperbarui"], text: ["Pendapatan harian", "Pendapatan bulanan", "Ganjaran rekomendasi:setiap orang", "Gratis", "Sesuai pesanan"] },
                        dialog: ["Konfirmasi membayar {currency} {amount} menjadi{name}?", "Anda kini ialah{currname},tidak bisa menjadi{name}", "Konfirmasi membayar {currency} {amount} untuk meneruskan{name}?"],
                    },
                    user: {
                        default: ["Atasan saya", "Daftar masuk akun", "Kode undangan", "Keluar akun", "Saldo", "Emas", "Dompetku", "Tergantung", "Pembatasan", "Baik", "Sangat baik"],
                        grid: [
                            "Saldo pribadi",
                            "Pendapatan kemarin",
                            "Pendapatan hari ini",
                            "Pendapatan minggu ini",
                            "Pendapatan bulan ini",
                            "Pendapatan bulan lalu",
                            "Jumlah pendapatan",
                            "Jumlah tugas selesai hari ini",
                            "Jumlah tugas belum selesai hari ini",
                            "Komisi hari ini",
                            "Rabat hari ini",
                        ],
                        menu: ["Rekor tugas", "Verifikasi tugas", "Manajemen rilis", "Informasi pribadi", "Pengikatan akun", "Laporan harian", "Rekor uang", "Ajak teman", "Laporan tim", "Manual bantuan", "Pusat kredit", "Unggah APP"],
                    },
                    userInfo: {
                        default: [
                            "Informasi pribadi",
                            "Gambar",
                            "Nomor telepon",
                            "Rekening Bank",
                            "Alipay",
                            "Detail",
                            "Kata sandi akun",
                            "Kata sandi dana",
                            "Tekan untuk pengaturan",
                            "Menukar gambar",
                            "Menukar kata sandi",
                            "Menukar kata sandi dana",
                            "Hantar",
                            "Kosongkan",
                        ],
                        label: ["Kata sandi lama", "Kata sandi baru", "Konfirm kata sandi", "Kata sandi dana lama", "Kata sandi dana baru", "Konfirm kata sandi dana"],
                        placeholder: ["Sila mengisi kata sandi lama", "Sila mengisi kata sandi baru", "Sila konfirm kata sandi", "Sila mengisi kata sandi dana lama", "Sila mengisi kata sandi dana baru", "Sila konfirm kata sandi dana"],
                    },
                    userSet: {
                        default: ["Verifikasi nama sebenar", "Detail", "Ikat Alipay", "Hantar"],
                        label: ["Nama sebenar", "Nomor QQ", "Akun Alipay", "Nama Alipay"],
                        placeholder: ["Sila mengisi nama sebenar (nama untuk mengeluarkan uang", "Sila mengisi nomor QQ", "Sila mengisi nomor akun Alipay", "Sila mengisi nama akun Alipay"],
                        tips: "Perhatian, anda tidak bisa menukar kartu bank lagi untuk mengeluarkan uang",
                    },
                    bindAccount: { default: ["Mengikat akun", "Lihat tutorial", "Hantar"], tabs: ["Akun", "Akun", "Akun"], label: ["Instruksi", "Menambah screenshot", "Akun"], placeholder: "Sila mengisi{account}akun" },
                    bankCard: {
                        default: ["Rekening Bank", "Segera verifikasi", "Dalam proses menghantar...", "Segera tambah", "Menambah kartu bank"],
                        tips: ["Harap tambahkan rekening bank setelah verifikasi nama asli", "Nama anda dan Nama di renkening bank anda haruslah sama , jika tiday anda tidak bisa mengeluarkan uang"],
                        label: ["Nama", "Nama bank", "Nomor Rekening  Bank", "Kode IFSC"],
                        placeholder: ["Sila mengisi nama bank", "Sila mengisi Nomor Rekening Bank", "Sila mengisi kode IFSC"],
                    },
                    wallet: {
                        default: ["Dompetku", "Penambahan uang", "Pengeluaran uang", "Rekor penambahan", "Rekor pengeluaran", "T", "K", "Alipay"],
                        label: ["Saluran uang pengeluaran", "Jumlah uang pengeluaran", "Kata sandi dana", "Hantar", "Nomor telepon", "Email", "IFSC"],
                        placeholder: [
                            "Sila pilih saluran pengeluaran uang",
                            "Sila mengisi jumlah pengeluaran uang",
                            "Sila mengisi kata sandi dana",
                            "Sila pilih saluran pengeluaran uang",
                            "Sila mengisi nomor telepon penerima",
                            "Sila mengisi email penerima",
                            "Sila mentissi IFSC penerima",
                        ],
                        msg: ["Anda belum membuat kata sandi dana, sila buat dahulu", "Anda belum ikat kartu bank, sila ikat dahulu"],
                    },
                    recharge: {
                        default: [
                            "Penambahan uang",
                            "Detail penambahan uang",
                            "Rekor",
                            "Saldo tersedia{money}, sila pilih saluran isi uang",
                            "Jumlah tunggal minimum{currency}{min},maximum{currency}{max}, biaya penanganan{fee}%",
                            "Dalam proses menghantar...",
                            "Segera isi uang",
                            "Kembali",
                            "Pemuatan data...",
                        ],
                        label: ["Jumlah penambahan uang", "Saluran penambahan uang", "Nama transfer", "Nama pembayar", "Nomor telepon pembayar", "Akun UPI pembayar", "Email pembayar"],
                        placeholder: [
                            "Sila mengisi jumlah penambahan uang",
                            "Sila mengisi saluran penambahan uang",
                            "Sila mengisi nama yang membuat transfer",
                            "Jumlah tunggal minimum{currency}{min}",
                            "Jumlah tunggal maksimum{currency}{max}",
                            "Sila mengisi nama pembayar",
                            "Sila mengisi nomor telepon pembayar, nomor telepon harus menambah kode area internasional, seperti +86",
                            "Sila mengisi akun UPI pembayar",
                            "Sila mengisi email pembayar",
                        ],
                        info: [
                            "Jumlah uang penambahan",
                            "Nomor order",
                            "Nama bank menerima",
                            "Nomor akun bank",
                            "Nama penerima",
                            "Salin",
                            "{type}transfer",
                            "Screenshot resi transfer",
                            "Hantar",
                            "Kode IFSC",
                            "Jenis akun",
                            "Instruksi proses",
                        ],
                        tips: [
                            "Sila pilih saluran transfer yang cocok dengan jumlah uang <br>Sila unggah resi transfer sebagai bukti",
                            "Tidak dibutuhkan menambah teman, hanya pindai kode QR dan transfer uang ke saya",
                            "Sila ikuti detail bawah untuk transfer",
                            "Perhatian: Sila hubungi pelayanan pelanggan selepas transfer uang hasil. Sila berikan nomor akun anggota, jumlah uang, nomor order, nama pembayar dan waktu penambahan uang, agar departemen keuangan bisa menambah uang ke akun anda segera",
                            "Catatan: Sila menghantar resi satu kali saja untuk setiap transaksi penambahan uang",
                            "Sila unggah resi transfer sebagai bukti",
                        ],
                    },
                    task: {
                        default: ["Daftar tugas", "Permintaan tugas", "Membuat", "Verifikasi", "Buka tautan", "Salin tautan", "Harga", "Menghantar", "Meninggalkan"],
                        tabs: ["Dalam pengolahan", "Dalam verifikasi", "Berhasil", "Gagal", "Rusak", "Telah ditinggalkan"],
                        msg: "Sila unggah gambar selesai tugas",
                        info: [
                            "Detail tugas",
                            "Judul pendapatan",
                            "Pendapatan tugas",
                            "Deskripsi tugas",
                            "Pemintaan unggah",
                            "Menghantar sampel",
                            "Pengguna belum menghantar sampel",
                            "Deskripsi verifikasi",
                            "Tanggal verifikasi",
                            "Permintaan",
                            "Publikasi",
                            "Salin",
                            "Lompat",
                            "Langkah-langkah tugas",
                            "Langkah ke {index}",
                            "Sampel dengan verifikasi",
                            "Sampel tanpa verifikasi",
                            "Pemuatan data...",
                            "Meninggalkan tugas",
                            "Penghantaran tugas berhasil",
                            "Konten publikasi",
                        ],
                        index: [
                            "Identitas saat ini",
                            'Kelas anda saat ini <i style="color:#1989fa">{currVip}</i><br>hanya bisa mendapat<i style="color:#1989fa">{currVip}</i>tugas level<br>Adakah anda ingin ikut serta <i style="color:#dd6161">{vip}</i> level',
                            "Segera ikut serta",
                            "Sila pilih datar tugas",
                        ],
                        list: ["Daftar tugas", "Permintaan anggota", "Baki", "Permintaan", "Menerima"],
                        show: [
                            "Detail tugas",
                            "Anggota telah untung",
                            "Baki{num}kuota",
                            "Verifikasi dalam 48 jam",
                            "Detail tugas",
                            "Permintaan",
                            "Standar verifikasi",
                            "Salin",
                            "Lompat",
                            "Langkah-langkah tugas",
                            "Langkah ke {index}",
                            "Sampel dengan verifikasi",
                            "Sampel tanpa verifikasi",
                            "Pemuatan data...",
                            "Dalam proses menghantar...",
                            "Menerima tugas",
                            "Masuk sekarang",
                            "Konten publikasi",
                        ],
                    },
                    audit: {
                        default: ["Verifikasi tugas", "Anggota penerimaan", "Tanggal penerimaan", "Perbarui tanggal", "Verifikasi"],
                        tabs: ["Dalam proses pengolahan", "Dalam proses verifikasi", "Selesai", "Gagal"],
                        info: [
                            "Detail verifikasi",
                            "Judul tugas",
                            "Jumlah harga tugas",
                            "Jumlah orang selesai",
                            "Baki{num} kuota",
                            "Detail tugas",
                            "Link informasi",
                            "Verifikasi sampel",
                            "Pengguna menerima",
                            "Menerima",
                            "Kondisi selesai",
                            "Menghantar sampel",
                            "Pengguna belum menghantar sampel",
                            "Perbarui tanggal",
                            "Pemuatan data...",
                            "Rusak",
                            "Ulang verifikasi",
                            "Gagal",
                            "Berhasil",
                            "Tugas verifikasi",
                            "Instruksi tinjau",
                            "Sila mengisi tinjau instruksi",
                            "Penghantaran tugas gagal, sola kirim ulang untuk memeriksa lagi",
                            "Selamat atas penyelesaian tugas, teruskan usaha",
                            "Tugas dihantar dengan halaman yang salah, tugas gagal",
                            "Tugas dihantar dengan niat jahat, tugas gagal",
                        ],
                    },
                    postRecord: ["Manajemen rilis", "Terbit", "Jumlah", "Selesai", "Tenggat waktu", "Memeriksa", "Batal", "Edit"],
                    dayReport: [
                        "Laporan harian",
                        "Jumlah pendapatan",
                        "Tugas selesai dariku",
                        "Pendapatan dari tugasku",
                        "Tugas selesai dari bawahan",
                        "Pendapatan dari tugas bawahan",
                        "Jumlah",
                        "30 hari terakhir",
                        "Kuantitas",
                        "Tugas",
                        "Bawahan",
                        "Konsumsi",
                        "Tanggal",
                    ],
                    fundRecord: { default: ["Rekor pengeluaran uang", "Rekor penambahan uang", "Rekor pendapatan", "Penambahan", "Pendapatan", "Pengeluaran"], tabs: ["Pendapatan", "Pengeluaran uang", "Penambahan uang"] },
                    promote: [
                        "Teman Anda",
                        "Mengundang anda untuk ikut serta{title}",
                        "Kode rujukan",
                        "Salin kode rujukan",
                        "Salin tautan undangan",
                        "Simpan kode QR",
                        "Ganjaran promosi",
                        "Simpan poster berhasil",
                        "Gagal simpan poster, sila coba beberapa kali lagi",
                        "Sila screenshot untuk simpan",
                        "Simpan poster promosi",
                        "Simpan poster promosi di telepon<br>Sila coba beberapa kali lagi jika gagal",
                    ],
                    teamReport: {
                        default: [
                            "Pencarian",
                            "Saldo tim",
                            "Pendapatan tim",
                            "Penambahan uang tim",
                            "Pengeluaran uang tim",
                            "Jumlah anggota menambah uang pertama kali",
                            "Jumlah rekomendasi pertama",
                            "Jumlah anggota tim",
                            "Penambahan tim",
                            "Satu",
                            "Saya",
                            "Pengguna",
                            "Penambahan uang",
                            "Pengeluaran uang",
                            "Rabat",
                            "Komisi",
                            "Pilih tahun, bulan, hari",
                            "Tidak ada data",
                            "Jumlah uang isi",
                            "Jumlah orang isi uang",
                            "Rabat isi uang",
                        ],
                        tabs: ["Laporan tim", "Tim ku"],
                        team: ["Tingkat pertama", "Tingkat kedua", "Tingkat ketiga"],
                    },
                    help: ["Manual bantuan", "Belum ada konten"],
                    credit: [
                        "Pusat kredit",
                        "Deskripsi kredit",
                        "Rekor kredit",
                        "<p>1.Nilai kredit akan dinilai sekali dalam seminggu </p><p> 2. Pengguna yang baru akan mendapat nilai kredit: <b>60</b></p><p>3.Jika mendapati pengguna unggah gambar palsu semasa membuat tugas, nilai kredit akan ditolak:<b>1</b>,inlay kredit atasan akan ditolak:<b>7</b></p><p>4.Jika pengguna tidak unggah gambar palsu nilai kredit akan tambah <b>1</b></p><p>5.Nilai kredit yang di bawah <b>50</b> akan mempunyai batasan untuk mengeluarkan uang</p><p>6.Nilai kredit yang di bawah <b>30</b> tugasnya akan ditolak separuh</p><p>7.Nilai kredit yang di bawah <b>0</b>akan digantung akun</p>",
                        "Kredit saya",
                        "Belum ada rekor kredit saat ini",
                    ],
                    appDown: ["Unduh APP", "Pindai kode QR unduh APP", "Simpan kode QR", "Simpan kode QR berhasil", "Gagal menyimpan kode QR, sila coba beberapa kali lagi atau simpan"],
                    dialog: ["Perhatian", "Konfirmasi", "Dalam proses menghantar...", "Salin berhasil", "Tidak mendukung sistem IOS versi lama", "Dalam proses mendaftar...", "Pemuatan data..."],
                    lineList: ["Pilih rute", "Rute saat ini", "Rute"],
                    serviceCenter: ["Pelayanan pelanggan", "Hi, pelayanan pelanggan eksklusif", "Senang malayani anda", "Swalayan", "Pelayanan pelanggan online", "Pelayanan pelanggan menambah uang", "Pelayanan pelanggan LINE"],
                },
                "vi-VN": {
                    line: "Ping",
                    language: "Ngôn ngữ",
                    common: ["Dịch vụ trực tuyến", "Không ngờ"],
                    upload: ["Tải lên...", "Sai định dạng", "Tải lên thành công", "Tải lên thất bại"],
                    appMsg: [
                        "Sẵn sàng để tải về bản cập nhật...",
                        "Quá trình tải xuống đã hoàn tất, có cài đặt gói cập nhật hay không",
                        "Không thể tải xuống bản cập nhật",
                        "Đã tải xuống {num}%",
                        "Đang cập nhật ...",
                        "Cập nhật thành công, sẽ khởi động lại sớm",
                        "Cập nhật thất bại",
                        "Nhấn lần nữa để thoát khỏi ứng dụng",
                    ],
                    vanPull: ["Không có thêm dữ liệu", "Không có dữ liệu"],
                    login: { text: ["Ghi nhớ tên tài khoản", "đăng nhập...", "Đăng nhập ngay"], placeholder: ["Vui lòng nhập số điện thoại", "Vui lòng điền mật khẩu"], i18n: ["Chưa có tài khoản? {a} {line}", "Đăng ký ngay"] },
                    register: {
                        text: ["Chào mừng bạn đến đăng ký", "Gửi mã SMS ...", "Nhận mã SMS", "Đăng ký ...", "Đăng ký ngay", "Có tài khoản, Đăng nhập ngay"],
                        placeholder: [
                            "Vui lòng nhập số điện thoại",
                            "Vui lòng nhập mã xác minh SMS",
                            "Xin hãy điền mật khẩu",
                            "Vui lòng xác nhận mật khẩu của bạn",
                            "Vui lòng nhập mã mời",
                            "Hai mật khẩu là khác nhau",
                            "Vui lòng nhập mã xác nhận",
                        ],
                        i18n: ["Đã có tài khoản? {a} {line}", "Đăng nhập"],
                    },
                    footer: ["Trang Chủ", "Công việc", "Trò chuyện bí mật", "Cao cấp", "Của tôi", "Lợi nhuận"],
                    home: {
                        broadcast: "Xin chúc mừng thành viên {member} đã trở thành {grade}",
                        menu: ["Khu vực VIP", "Video hướng dẫn", "Phần thưởng khuyến mãi"],
                        taskHall: { title: ["SẢNH NHIỆM VỤ", "SẢNH PHÁT HÀNH THƯƠNG GIA"] },
                        memberList: { title: "Danh sách thành viên", data: ["Xin chúc mừng: {member}", "Đơn hàng {num} đã hoàn thành hôm nay"] },
                        businessList: { title: "Danh sách thương gia", data: ["{member}", "{num} nhiệm vụ duy nhất được phát hành ngày hôm nay"] },
                        tabBar: ["TRANG CHỦ", "CÔNG VIỆC", "VIP", "LỢI NHUẬN", "CỦA TÔI"],
                        noticeTitle: "Thông báo mới nhất",
                        msg: "Nhiệm vụ không mở",
                        video: "Không có video hướng dẫn",
                    },
                    postTask: {
                        navBar: { title: "Nhiệm vụ bài", right: "Quy tắc xuất bản" },
                        field: [
                            { label: "Phân loại nhiệm vụ" },
                            { label: "Nhiệm vụ", placeholder: "Vui lòng nhập tiêu đề nhiệm vụ", error: "Tiêu đề nhiệm vụ không thể để trống" },
                            { label: "Giới thiệu nhiệm vụ", placeholder: "Vui lòng nhập hồ sơ nhiệm vụ" },
                            { label: "Đơn giá", placeholder: "Vui lòng nhập đơn giá", error: "Đơn giá nhiệm vụ không thể để trống" },
                            { label: "Số lượng nhận vào", placeholder: "Vui lòng nhập số lượng", error: "Số lượng nhận được không thể để trống" },
                            { label: "Số lượng biên lai", placeholder: "Vui lòng nhập số lần", right: "Thời gian / người", error: "Thời gian thu thập không thể để trống" },
                            { label: "Tổng giá nhiệm vụ", error: "Tổng giá nhiệm vụ không được tính" },
                            { label: "Liên kết thông tin", placeholder: "Vui lòng nhập địa chỉ liên kết", error: "Thông tin liên kết không thể để trống" },
                            { label: "Cấp độ nhiệm vụ" },
                            { label: "Hạn chót", placeholder: "Nhấn vào đây để chọn ngày", error: "Hạn chót không thể để trống" },
                            { label: "Điều kiện hoàn thành", error: "Vui lòng chọn điều kiện hoàn thành" },
                            { label: "Yêu cầu tải lên", placeholder: "Vui lòng nhập yêu cầu tải lên" },
                            { label: "Mẫu kiểm toán" },
                            { label: "Các bước", placeholder: "Các bước dễ hiểu giúp hoàn thành!", error: "Bước hoạt động không thể để trống", img: "Sơ đồ bước không hoàn hảo" },
                        ],
                        button: "Gửi đi",
                        step: { title: "Các bước", left: "hủy bỏ", right: "Thực hiện", placeholder: "Vui lòng nhập mô tả bước", button: ["Xóa bỏ", "Thêm vào"] },
                        tips: [
                            "Phí nền tảng là khoảng {pump} {br} Bản phát hành này yêu cầu thanh toán khoảng {price}, vui lòng đảm bảo rằng số dư tài khoản của bạn đủ {a} {br} Nhắc nhở: Nền tảng này cấm xuất bản nội dung khiêu dâm, đánh bạc, ma túy và tất cả các luật liên quan đến chính trị Nội dung bị cấm, chẳng hạn như trừ điểm và cấm tài khoản. ",
                            "Nạp điện",
                            "Giữ ít nhất một bước",
                            "Thêm tối đa mười bước",
                        ],
                    },
                    vip: {
                        user: { title: ["Danh tính của bạn", "Du lịch"], label: "Nhiệm vụ hàng ngày", value: ["Ngày có hiệu lực", "Dài hạn", "vui lòng đăng nhập trước"] },
                        list: { label: "Nhiệm vụ hàng ngày: {number} lần", button: ["Tham gia ngay", "Gia hạn ngay"] },
                        dialog: ["Bạn có chắc chắn sử dụng {amount} {currency} làm {name} không?", "Bạn hiện là {currname} và không thể là {name}", "Bạn có chắc chắn chi {amount} {currency} để gia hạn {name} không?"],
                    },
                    user: {
                        default: ["Cấp trên của tôi", "số tài khoản", "Mã mời", "đăng xuất", "SỐ DƯ", " VND", "Túi của tôi", "Khởi đầu", "Giới hạn", "Tốt", "Xuất sắc"],
                        grid: [
                            "Số dư khả dụng",
                            "Thu nhập của ngày hôm qua",
                            "Thu nhập của ngày hôm nay",
                            "Lợi nhuận trong tuần này",
                            "Thu nhập tháng",
                            "Thu nhập tháng trước",
                            "Tổng doanh thu",
                            "Hoàn thành nhiệm vụ ngày hôm nay (độc thân)",
                            "Nhiệm vụ còn lại của ngày hôm nay (độc thân)",
                            "Hoa hồng hôm nay",
                            "Giảm giá hôm nay",
                        ],
                        menu: [
                            "Bản ghi nhiệm vụ",
                            "Nhiệm vụ kiểm toán",
                            "Quản lý phát hành",
                            "Thông tin cá nhân",
                            "Ràng buộc tài khoản",
                            "Tuyên bố hàng ngày",
                            "Hồ sơ thay đổi tài khoản",
                            "mời bạn bè",
                            "Báo cáo đội",
                            "Hướng dẫn trợ giúp",
                            "Trung tâm tín dụng",
                            "Tải xuống ứng dụng",
                        ],
                    },
                    userInfo: {
                        default: [
                            "Thông tin cá nhân",
                            "Chân dung",
                            "số điện thoại",
                            "Thẻ ngân hàng",
                            "Alipay",
                            "chi tiết",
                            "mật khẩu đăng nhập",
                            "Mật khẩu quỹ",
                            "Bấm để đặt",
                            "Sửa đổi hình đại diện",
                            "Sửa đổi mật khẩu đăng nhập",
                            "Sửa đổi mật khẩu quỹ",
                            "Gửi đi",
                            "Xóa bộ nhớ cache",
                        ],
                        label: ["Mật khẩu đăng nhập gốc", "Mật khẩu đăng nhập mới", "Xác nhận mật khẩu", "Mật khẩu quỹ gốc", "Mật khẩu quỹ mới", "Xác nhận mật khẩu"],
                        placeholder: [
                            "Vui lòng nhập mật khẩu đăng nhập ban đầu",
                            "Vui lòng nhập mật khẩu đăng nhập mới",
                            "Vui lòng xác nhận mật khẩu đăng nhập",
                            "Vui lòng nhập mật khẩu quỹ ban đầu",
                            "Vui lòng nhập mật khẩu quỹ mới",
                            "Vui lòng xác nhận mật khẩu quỹ",
                        ],
                    },
                    userSet: {
                        default: ["Đã xác minh", "chi tiết", "Liên kết với Alipay", "Gửi đi"],
                        label: ["tên thật", "Số QQ", "Tài khoản Alipay", "Tên Alipay"],
                        placeholder: ["vui lòng nhập tên thật của bạn", "Vui lòng nhập số QQ", "Vui lòng nhập tài khoản Alipay của bạn", "Vui lòng nhập tên Alipay của bạn"],
                    },
                    bindAccount: {
                        default: ["Tài khoản ràng buộc", "Xem hướng dẫn", "Gửi đi"],
                        tabs: ["số tài khoản", "số tài khoản", "số tài khoản"],
                        label: ["Hướng dẫn", "Thêm ảnh chụp màn hình", "số tài khoản"],
                        placeholder: "Vui lòng nhập tài khoản {account}",
                    },
                    bankCard: {
                        default: ["Thẻ ngân hàng ràng buộc", "Xác thực ngay", "đang gửi ...", "Thêm nó ngay bây giờ", "Thêm thẻ ngân hàng"],
                        tips: ["Vui lòng thêm thẻ ngân hàng sau khi xác thực tên thật", "Tên mở tài khoản của thẻ ngân hàng bị ràng buộc của bạn phải giống với tên thật đã được xác minh của bạn, nếu không việc rút tiền sẽ thất bại."],
                        label: ["Tên", "Tên Ngân hàng", "Số tài khoản", "Mã IFSC"],
                        placeholder: ["Vui lòng chọn tên ngân hàng", "Vui lòng nhập số tài khoản", "Vui lòng nhập mã IFSC"],
                    },
                    wallet: {
                        default: ["Ví của tôi", "Nạp tiền", "Rút", "Hồ sơ nạp tiền", "Hồ sơ rút tiền", "Sạc điện", "đề cập", "Alipay"],
                        label: ["Phương thức rút tiền", "Số tiền rút", "Mật khẩu quỹ", "Gửi đi", "số điện thoại", "hộp thư", "IFSC"],
                        placeholder: [
                            "Chọn phương thức rút tiền",
                            "Vui lòng nhập số tiền rút",
                            "Vui lòng nhập mật khẩu quỹ",
                            "Vui lòng chọn phương thức rút tiền",
                            "Vui lòng nhập số điện thoại di động của người nhận",
                            "Vui lòng nhập địa chỉ email của người nhận",
                            "Vui lòng nhập IFSC người nhận thanh toán",
                        ],
                        msg: ["Bạn chưa đặt mật khẩu quỹ, vui lòng đặt mật khẩu trước", "Bạn chưa ràng buộc thẻ ngân hàng hoặc Alipay, vui lòng liên kết trước"],
                    },
                    recharge: {
                        default: [
                            "Nạp Tiền",
                            "Chi tiết nạp tiền",
                            "Hồ sơ nạp tiền",
                            "Số dư khả dụng {money}, vui lòng chọn phương thức nạp tiền",
                            "Số tiền tối thiểu cho một giao dịch là {currency}{min} , tối đa là {currency}{max} và phí xử lý là {fee}%",
                            "đang gửi...",
                            "Nạp tiền ngay",
                            "trở về",
                            "Đang tải...",
                        ],
                        label: ["Số tiền nạp lại", "Kênh nạp tiền", "Tên chuyển nhượng", "Tên người trả tiền", "Điện thoại di động của người trả tiền", "Tài khoản UPI của người trả tiền", "Email của người trả tiền"],
                        placeholder: [
                            "Vui lòng nhập số tiền nạp lại",
                            "Vui lòng chọn kênh nạp tiền",
                            "Vui lòng nhập tên chuyển khoản",
                            "Số tiền tối thiểu cho một giao dịch là {currency}{min}",
                            "Số tiền tối đa cho một giao dịch là {currency}{max}",
                            "Vui lòng nhập tên của người trả tiền",
                            "Vui lòng nhập số điện thoại di động của người trả tiền, tiền tố số với mã vùng quốc tế, chẳng hạn như +86",
                            "Vui lòng nhập tài khoản UPI của người trả tiền",
                            "Vui lòng nhập địa chỉ email của người trả tiền",
                        ],
                        info: [
                            "Số tiền nạp lại",
                            "số thứ tự",
                            "Ngân hàng thụ hưởng",
                            "Nhận tài khoản",
                            "Người được trả tiền",
                            "Bản sao",
                            "{type} Chuyển",
                            "Chuyển ảnh chụp màn hình",
                            "Gửi đi",
                            "Mã IFSC",
                            "Kiểu tài khoản",
                            "Hướng dẫn xử lý",
                        ],
                        tips: [
                            "Vui lòng chọn phương thức sau để chuyển số tiền phù hợp để tránh sự chậm trễ trong kiểm tra tài chính. <br> Sau khi chuyển khoản, vui lòng tải lên ảnh chụp màn hình chuyển khoản làm bằng chứng xác minh",
                            "Không cần thêm bạn bè, quét mã QR để chuyển tiền cho tôi",
                            "Vui lòng thực hiện theo thông tin bên dưới để hoàn tất chuyển khoản",
                            "Nhắc nhở: Sau khi thanh toán thành công, vui lòng liên hệ với dịch vụ khách hàng của QQ và cung cấp số tài khoản thành viên, số tiền nạp, số đơn đặt hàng, số tài khoản người gửi và thời gian nạp tiền; thuận tiện cho tài chính để thêm tiền cho bạn kịp thời",
                            "Lưu ý: Thành viên vui lòng gửi từng khoản thanh toán chuyển khoản một lần",
                            "Sau khi chuyển, vui lòng tải lên ảnh chụp màn hình chuyển khoản làm bằng chứng xác minh",
                        ],
                    },
                    task: {
                        default: ["DANH SÁCH CÔNG VIỆC", "Yêu cầu nhiệm vụ", "tạo nên", "Kiểm toán", "Mở liên kết", "sao chép đường dẫn", "đơn giá", "Gửi đi", "bỏ cuộc"],
                        tabs: ["Chế biến", "đang xem xét", "hoàn thành", "Thất bại", "Độc hại", "Bị bỏ rơi"],
                        msg: "Vui lòng tải lên một hình ���nh hoàn thành nhiệm vụ",
                        info: [
                            "Chi tiết nhiệm vụ",
                            "Tiêu đề nhiệm vụ",
                            "Doanh thu nhiệm vụ",
                            "chi tiết nhiệm vụ",
                            "Yêu cầu tải lên",
                            "Gửi mẫu",
                            "Người dùng không gửi mẫu",
                            "Hướng dẫn kiểm toán",
                            "Ngày xem xét",
                            "Phía cầu",
                            "giải phóng",
                            "Bản sao",
                            "Nhảy",
                            "Các bước nhiệm vụ",
                            "Bước {index}",
                            "Mẫu kiểm toán",
                            "Không có mẫu kiểm toán",
                            "Đang tải...",
                            "Bỏ nhiệm vụ",
                            "Trình để hoàn thành nhiệm vụ",
                            "Nội dung bài viết",
                        ],
                        index: [
                            "Danh tính hiện tại",
                            'Cấp độ hiện tại của bạn là <i style="color:#1989fa">{currVip}</i><br>Chỉ có thể nhận hiện tại<i style="color:#1989fa">{currVip}</i>Nhiệm vụ cấp<br>Có tham gia không <i style="color:#dd6161">{vip}</i> cấp',
                            "Tham gia ngay",
                            "Vui lòng chọn loại nhiệm vụ",
                        ],
                        list: ["Danh sách công việc", "Phía cầu", "Còn lại", "Yêu cầu", "nhận được"],
                        show: [
                            "Chi tiết nhiệm vụ",
                            "Mọi người đã kiếm được",
                            "{num} địa điểm còn lại",
                            "Xem lại trong vòng 48 giờ",
                            "chi tiết nhiệm vụ",
                            "Phía cầu",
                            "Chuẩn mực kiểm toán",
                            "Bản sao",
                            "Nhảy",
                            "Các bước nhiệm vụ",
                            "Bước {index}",
                            "Mẫu kiểm toán",
                            "Không có mẫu kiểm toán",
                            "Đang tải...",
                            "Đang gửi ...",
                            "Nhận nhiệm vụ",
                            "Đăng nhập ngay lập tức",
                            "Nội dung bài viết",
                        ],
                    },
                    audit: {
                        default: ["Nhiệm vụ kiểm toán", "Nhận người dùng", "Ngày đón", "Đã cập nhật", "Kiểm toán"],
                        tabs: ["Chế biến", "đang xem xét", "hoàn thành", "Thất bại"],
                        info: [
                            "Chi tiết kiểm toán",
                            "Tiêu đề nhiệm vụ",
                            "Số lượng nhiệm vụ",
                            "Người đã hoàn thành",
                            "{num} địa điểm còn lại",
                            "chi tiết nhiệm vụ",
                            "Thông tin liên kết",
                            "Mẫu kiểm toán",
                            "Nhận người dùng",
                            "nhận được",
                            "điều kiện kết thúc",
                            "Gửi mẫu",
                            "Ngư���i dùng không gửi mẫu",
                            "Đã cập nhật",
                            "Đang tải...",
                            "Độc hại",
                            "Tái thẩm",
                            "sự thất bại",
                            "sự thành công",
                            "Nhiệm vụ kiểm toán",
                            "Hướng dẫn kiểm toán",
                            "Vui lòng nhập mô tả đánh giá",
                            "Nhiệm vụ được gửi không đủ tiêu chuẩn và cần phải được gửi lại để xem xét",
                            "Chúc mừng bạn đã hoàn thành nhiệm vụ, hãy tiếp tục làm việc chăm chỉ",
                            "Ảnh chụp màn hình của trang tác vụ đã gửi là sai, tác vụ không thành công",
                            "Gửi nhiệm vụ độc hại, nhiệm vụ thất bại",
                        ],
                    },
                    postRecord: ["Quản lý phát hành", "giải phóng", "Toàn bộ", "hoàn thành", "hạn chót", "Kiểm toán", "Hủy", "biên tập"],
                    dayReport: [
                        "Tuyên bố hàng ngày",
                        "Tổng doanh thu",
                        "Nhiệm vụ của tôi đã hoàn thành",
                        "Doanh thu sứ mệnh của tôi",
                        "Nhiệm vụ hoàn thành bởi cấp dưới",
                        "Thu nhập nhiệm vụ thấp",
                        "Độc thân",
                        "30 ngày trước",
                        "Định lượng",
                        "bài tập",
                        "Kém hơn",
                        "tiêu thụ",
                        "ngày",
                    ],
                    fundRecord: { default: ["Hồ sơ chi phí", "Hồ sơ nạp tiền", "Hồ sơ thu nhập", "Phí", "Thu", "Chi"], tabs: ["thu nhập", "chi phí", "Nạp tiền"] },
                    promote: [
                        "Bạn của bạn",
                        "Mời bạn tham gia {title}",
                        "Mã khuyến nghị",
                        "Sao chép mã giới thiệu",
                        "Sao chép liên kết lời mời",
                        "Lưu mã QR",
                        "Phần thưởng khuyến mãi",
                        "Lưu poster thành công",
                        "Không thể lưu poster",
                        "Trình duyệt không hỗ trợ, vui lòng chụp ảnh màn hình",
                        "Lưu Poster quảng cáo",
                        "Lưu poster quảng cáo vào điện thoại của bạn <br> Nếu bạn không thành công, vui lòng thử thêm vài lần hoặc lưu ảnh chụp màn hình",
                    ],
                    teamReport: {
                        default: [
                            "tìm kiếm",
                            "Cân bằng nhóm",
                            "Lợi ích của nhóm",
                            "Nạp tiền cho đội",
                            "Rút đội",
                            "Số lần tính phí đầu tiên",
                            "Số lần đẩy đầu tiên",
                            "Số đội",
                            "Nhóm mới",
                            "cá nhân",
                            "TÔI",
                            "người sử dụng",
                            "Nạp tiền",
                            "rút lui",
                            "Giảm giá",
                            "Uỷ ban",
                            "Chọn năm, tháng và ngày",
                            "Không có dữ liệu",
                            "Số tiền nạp",
                            "Số nạp tiền",
                            "Hoàn trả khi nạp tiền",
                        ],
                        tabs: ["Báo cáo đội", "đội của tôi"],
                        team: ["Cấp độ 1", "Cấp độ 2", "Cấp độ 3"],
                    },
                    help: ["Hướng dẫn trợ giúp", "chưa có nội dung"],
                    credit: [
                        "Trung tâm tín dụng",
                        "Báo cáo tín dụng",
                        "Lịch sử tín dụng",
                        "<p> 1. Điểm tín dụng được đánh giá mỗi tuần một lần </p> <p> 2. Điểm tín dụng người dùng ban đầu: <b> 60 </b> </p> <p> 3. Nếu người dùng được phát hiện để thực hiện tải lên tác vụ Ảnh giả bị trừ một ngày: <b> 1 </b> điểm, giới hạn khấu trừ tối đa: <b> 7 </b> điểm </p> <p> 4. Nếu người dùng không bị phát hiện sử dụng ảnh giả, hãy tăng <b> 1 </ b> Điểm </p> <p> 5. Điểm tín dụng dưới <b> 50 </b> điểm sẽ bị hạn chế rút </p> <p> 6. Điểm tín dụng dưới <b> 30 </b> Số lượng tác vụ nhấn được giảm một nửa </p> <p> 7. Điểm tín dụng nhỏ hơn hoặc bằng <b> 0 </b> điểm sẽ bị chặn </p> ",
                        "Tín dụng của tôi",
                        "Không có lịch sử tín dụng tạm thời",
                    ],
                    appDown: ["Tải xuống ứng dụng", "Quét mã QR để tải xuống APP", "Lưu mã QR", "Lưu mã QR thành công", "Không thể lưu mã QR"],
                    dialog: ["lời nhắc", "Xác nhận", "đang gửi ...", "Sao chép thành công", "Phiên bản hệ thống iOS thấp và không hỗ trợ", "Đăng ký ...", "Đang tải..."],
                    lineList: ["Chọn dòng", "Dòng hiện tại", "hàng"],
                    serviceCenter: ["Dịch vụ khách hàng", "Xin chào, dịch vụ khách hàng độc quyền", "rất vui khi được giúp đỡ", "tự phục vụ", "dịch vụ trực tuyến", "Nạp tiền cho dịch vụ khách hàng", "Dịch vụ khách hàng đường dây"],
                },
                "es-ES": {
                    line: "Cambiar la línea",
                    language: "Elige el idioma",
                    common: ["Servicio al cliente en línea", "Cancelar suspensión"],
                    home: {
                        broadcast: "Felicidades, miembro {membol} recomienda un {vipname} < br > para IDR {grae} Premio de promoción! ",
                        taskHall: { title: ["sala de misión", "sala de distribución de negocios"] },
                        memberList: { title: "Lista de miembros", data: ["Felicidades:{member}", "Completar{num}single hoy, ganar IDR{profit}!"] },
                        businessList: { title: "Lista de negocios", data: ["{member}", "Publique {num} una sola tarea hoy"] },
                        noticeTitle: "Consejos cálidos",
                        tabBar: ["Inicio de casa", "Tarea", "VIP", "Ganancia", "mío"],
                        menu: ["Área VIP", "Video tutorial", "Premio de promoción"],
                        msg: "La tarea no está abierta",
                        video: "No hay video tutorial",
                    },
                    login: {
                        text: ["Recuerde nombre de usuario/contraseña", "Iniciando sesión. ..", "Iniciar sesión ahora"],
                        placeholder: ["Por favor ingrese el número de teléfono", "Por favor ingrese la contraseña de inicio de sesión"],
                        i18n: ["Sin cuenta {title}? {a} {line}", "Registrarse"],
                    },
                    register: {
                        text: ["Bienvenido a registrarse", "Código de SMS enviado...", "Obtener código SMS", "Registrarse...", "Regístrese ahora", "Tener una cuenta, descargarla de inmediato"],
                        placeholder: [
                            "Por favor ingrese el número de teléfono",
                            "Por favor ingrese el código de verificación de SMS",
                            "Por favor ingrese la contraseña de inicio de sesión",
                            "Por favor confirme su contraseña",
                            "Por favor ingrese el código de invitación",
                            "Dos contraseñas no son lo mismo",
                            "Por favor ingrese el código de verificación",
                        ],
                        i18n: ["Tener una cuenta？{a} {line}", "Iniciar sesión"],
                    },
                    postTask: {
                        navBar: { title: "Publicar la tarea ", right: "Reglas de publicación" },
                        field: [
                            { label: "Clasificación de tareas" },
                            { label: "Título de la tarea", placeholder: "Por favor ingrese el título de la tarea", error: "El título de la tarea no puede estar vacío" },
                            { label: "Perfil de la misión", placeholder: "Por favor ingrese el perfil de la tarea" },
                            {
                                label: "Precio unitario de la tarea",
                                placeholder: "Por favor ingrese el precio unitario de la tarea",
                                right: "IDR",
                                error: ["El precio unitario de la tarea no puede estar vacío", "El precio unitario de la tarea no puede ser inferior a 1IDR"],
                            },
                            { label: "Recoge la cantidad", placeholder: "Por favor ingrese la cantidad recibida", error: "La cantidad recibida no puede estar vacía" },
                            { label: "Número de recibos", placeholder: "Por favor ingrese el número de recibos", right: "Tiempo/persona", error: "El número de recibos no puede estar vacío" },
                            { label: "Precio total de la misión", error: "El precio total de la tarea no se calcula" },
                            { label: "Información de enlace", placeholder: "Por favor ingrese la dirección del enlace", error: "La información del enlace no puede estar vacía" },
                            { label: "Nivel de tarea" },
                            { label: "Fecha límite", placeholder: "Haga clic para seleccionar la fecha", error: "La fecha límite no puede estar vacía" },
                            { label: "Condiciones de finalización", error: "Seleccione las condiciones de finalización" },
                            { label: "Ejemplo de auditoría" },
                            { label: "Pasos de operación", placeholder: "¡Pasos fáciles de entender ayudan a completar!", error: "Los pasos de operación no pueden estar vacíos" },
                        ],
                        button: "Enviado",
                        step: { title: "Pasos de operación", right: "Completa", placeholder: "Por favor ingrese la descripción del paso", button: ["Eliminar", "Adición"] },
                        tips: [
                            "Tarifas de plataforma {pump}{br}Pago por esta publicación {price}，Asegúrese de que el saldo sea suficiente. {a}{br}Aviso: Esta plataforma prohíbe publicar todo lo prohibido por la ley, como descuentos de puntos, cierre de cuentas, etc.",
                            "Para recargar",
                            "Mantener al menos un paso",
                            "Agregar hasta diez pasos",
                        ],
                    },
                    vip: {
                        user: { title: ["Su identidad.", "Turista"], label: "Tareas diarias", value: ["Fecha de entrada", "Validez permanente", "Por favor."] },
                        list: { label: "Tareas diarias:{number}Vez", button: "立即加入", text: ["Ingresos diarios", "Ingresos mensuales", "Recompensas recomendadas: por nombre", "Gratis", "Cada solo"] },
                        dialog: ["Gasto determinado {amount} IDRSer{name}Sí？", "Por ahora.{currname}，Imposible.{name}", "Gasto determinado {amount} IDRRenovación{name}Sí？"],
                    },
                    user: {
                        myEarnings: {
                            grid: [
                                "Saldo personal(IDR)",
                                "Ganancias de ayer(IDR)",
                                "Ganancias de hoy(IDR)",
                                "Esta semana.(IDR)",
                                "Ingresos del mes(IDR)",
                                "Ingresos mensuales(IDR)",
                                "Producto bruto(IDR)",
                                "Termina hoy.(Uno)",
                                "El resto del día(Uno)",
                            ],
                        },
                        default: ["Mis superiores", "Cuenta de inicio de sesión", "Código de invitación", "Salir de inicio de sesión", "Saldo", "IDR", "Mi billetera", "Título", "Restricción", "Bien", "Excelente"],
                        menu: [
                            "Registro de misión",
                            "Misión de auditoría",
                            "Gestión de lanzamiento",
                            "Información personal",
                            "Enlace de cuenta",
                            "Informe de fin de día",
                            "Registro de cambio de cuenta",
                            "Invita a tus amigos",
                            "Informe del equipo",
                            "Manual de ayuda",
                            "Centro de crédito",
                            "Descarga de APP",
                        ],
                    },
                    userInfo: {
                        default: [
                            "Información personal",
                            "Avatar",
                            "Número de teléfono",
                            "Tarjeta bancaria",
                            "Alipay",
                            "Detalles",
                            "Contraseña de inicio de sesión",
                            "Contraseña de fondos",
                            "Haga clic en Configuración",
                            "Modificar avatar",
                            "Modificar la contraseña de inicio de sesión",
                            "Modificar la contraseña de fondos",
                            "Enviado",
                            "Caché vacío",
                        ],
                        label: ["Contraseña de inicio de sesión original", "Nueva contraseña de inicio de sesión", "Confirmar contraseña", "Contraseña de fondos original", "Nueva contraseña de fondo", "Confirmar contraseña"],
                        placeholder: [
                            "Por favor ingrese la contraseña de inicio de sesión original",
                            "Por favor ingrese una nueva contraseña de inicio de sesión",
                            "Por favor confirme la contraseña de inicio de sesión",
                            "Por favor ingrese la contraseña de capital original",
                            "Por favor ingrese una nueva contraseña de fondo",
                            "Por favor confirme la contraseña de financiación",
                        ],
                    },
                    bankCard: {
                        default: ["Tarjeta bancaria enlazada", "Certificación inmediata", "Enviar...", "Agregar ahora", "Agregar tarjeta bancaria"],
                        tips: [
                            "Por favor, nombre real después de la certificación para agregar una tarjeta bancaria",
                            "El nombre de su cuenta que vincula su tarjeta bancaria debe ser el mismo que su nombre real certificado; de lo contrario, no podrá cobrar con éxito. ",
                        ],
                        label: ["Nombre", "Nombre del banco", "Cuenta bancaria", "Código IFSC"],
                        placeholder: ["Por favor, elija el nombre del banco", "Por favor ingrese la cuenta bancaria", "Por favor ingrese el código IFSC"],
                    },
                    userSet: {
                        default: ["Certificación de nombre real", "Detalles", "Alipay enlazado", "Enviado"],
                        label: ["Nombre real", "Número QQ", "Cuenta Alipay", "Nombre Alipay"],
                        placeholder: ["Por favor ingrese el nombre real (mi nombre es nombre)", "Por favor ingrese el número QQ", "Por favor ingrese la cuenta de Alipay", "Por favor ingrese el nombre de Alipay"],
                        tips: "Consejos: la tarjeta bancaria enlazada no se puede modificar para su retiro",
                    },
                    bindAccount: {
                        default: ["Cuenta enlazada", "Ver tutorial", "Enviado"],
                        tabs: ["Cuenta", "Cuenta", "Cuenta"],
                        label: ["Instrucciones de operación", "Agregar capturas de pantalla", "Cuenta"],
                        placeholder: "Por favor ingrese{account}Cuenta",
                    },
                    dayReport: [
                        "Informe de fin de día",
                        "Ingresos totales",
                        "Completé la tarea",
                        "Mi ingreso de la tarea",
                        "Tareas realizadas por los subordinados",
                        "Ingresos de tareas subordinadas",
                        "Solo",
                        "Los últimos 30 días",
                        "Cantidad",
                        "Misión",
                        "Subordinado",
                        "Consumo",
                        "Fecha",
                    ],
                    fundRecord: { default: ["Registro de gastos", "Registro de recarga", "Registro de ingresos", "Llena", "Recibir", "Rama"], tabs: ["Ingresos", "Gasto", "Recarga"] },
                    vanPull: ["No más datos", "Sin datos"],
                    promote: [
                        "Tu amigo",
                        "Invitarte a unirte{title}",
                        "Código recomendado",
                        "Copiar código recomendado",
                        "Copiar enlace de invitación",
                        "Guardar código bidimensional",
                        "Recompensa promocional",
                        "Guarde el éxito del cartel",
                        "Error al guardar el póster, intente varias veces o guarde la pantalla",
                        "Por favor capturas de pantalla",
                        "Guardar carteles promocionales",
                        "Guarde carteles promocionales en el teléfono<br>Si no tiene éxito, intente varias veces o guarde la captura de pantalla",
                    ],
                    teamReport: {
                        default: [
                            "Búsqueda",
                            "Balance de equipo",
                            "Ingresos del equipo",
                            "Recarga del equipo",
                            "Colección de equipo",
                            "El primer número de llenos",
                            "Número de empuje",
                            "Número de equipos",
                            "Nuevo equipo",
                            "A",
                            "Yo",
                            "Usuario",
                            "Recarga",
                            "Recaudad",
                            "Punto de regreso",
                            "Comisión",
                            "Elige el año, el mes y el día",
                            "Sin datos",
                            "Cantidad de recarga",
                            "Número de recarga",
                            "Reembolso",
                        ],
                        tabs: ["Informe del equipo", "Mi equipo"],
                        team: ["Nivel 1", "Nivel 2", "Tres"],
                    },
                    help: ["Manual de ayuda ", "Sin contenido"],
                    credit: [
                        "Centro de crédito",
                        "Declaración de crédito",
                        "Historial de crédito",
                        "<p>1.Puntos de crédito una vez a la semana</p><p>2.Crédito inicial de usuario:<b>60</b></p><p>3.Si detecta que el usuario está haciendo una tarea para cargar una deducción de imagen falsa:<b>1</b>Integral,Límite de deducción:<b>7</b>Integral</p><p>4.Si no se detecta el uso de una imagen falsa por el usuario<b>1</b>Integral</p><p>5.Puntos de crédito por debajo<b>50</b>Los puntos serán retirados restringidos</p><p>6.Puntos de crédito por debajo<b>30</b>El número de tareas de derivación se reduce a la mitad</p><p>7.Puntos de crédito menores o iguales<b>0</b>Los puntos serán numerados</p>",
                        "Mi crédito",
                        "No hay registro de crédito por el momento",
                    ],
                    upload: ["Cargar. ..", "Formato de error", "Subir exitoso", "La carga falló"],
                    task: {
                        default: ["Lista de tareas", "Requisitos de la misión", "Crear", "Auditoría", "Abra el enlace", "Copiar enlace", "Precio unitario", "Enviado", "Renuncia"],
                        tabs: ["En progreso", "Auditoría", "Completado", "Fallado", "Malicioso", "Se ha dado por vencido"],
                        msg: "Por favor cargue la imagen de la tarea completa",
                        info: [
                            "Detalles de la misión",
                            "Título de la tarea",
                            "Ingresos de la misión",
                            "Descripción de la tarea",
                            "Requisitos de carga",
                            "Presentar muestra",
                            "El usuario no envió la muestra",
                            "Notas de auditoría",
                            "Fecha de auditoría",
                            "Lado de la demanda",
                            "Publicar",
                            "Copiar",
                            "Salto",
                            "Pasos de la misión",
                            "No{index}Paso",
                            "Ejemplo de auditoría",
                            "Sin muestra de auditoría",
                            "Carga de datos. ..",
                            "Renuncia a la tarea",
                            "Enviar para completar la tarea",
                            "Publicar contenido",
                        ],
                        index: [
                            "Identidad actual",
                            'Tu nivel actual es <i style="color:#1989fa">{currVip}</i><br>Solo puede recibir el actual<i style="color:#1989fa">{currVip}</i>Tarea de nivel<br>Si unirse o no <i style="color:#dd6161">{vip}</i> Nivel',
                            "Únete ahora",
                            "Seleccione la categoría de la tarea",
                        ],
                        list: ["Lista de tareas", "Lado de la demanda", "Restante", "Requisitos", "Recibir"],
                        show: [
                            "Detalles de la misión",
                            "La gente ha ganado",
                            "Residual{num}Lugares",
                            "Revisión dentro de las 48 horas",
                            "Descripción de la tarea",
                            "Lado de la demanda",
                            "Estándares de auditoría",
                            "Copiar",
                            "Salto",
                            "Pasos de la misión",
                            "No{index}Paso",
                            "Ejemplo de auditoría",
                            "Sin muestra de auditoría",
                            "Carga de datos. ..",
                            "Enviar...",
                            "Recibir tareas",
                            "Iniciar sesión ahora",
                            "Publicar contenido",
                        ],
                    },
                    serviceCenter: [
                        "Centro de servicio al cliente",
                        "Hi, servicio al cliente exclusivo",
                        "Me complace servirle",
                        "Autoservicio",
                        "Servicio al cliente en línea",
                        "Servicio al cliente recargable",
                        "Servicio al cliente de línea",
                    ],
                    audit: {
                        default: ["Misión de auditoría", "Recibir usuario", "Fecha de recolección", "Fecha de actualización", "Auditoría"],
                        tabs: ["En progreso", "Auditoría", "Completado", "Falló"],
                        info: [
                            "Detalles de la auditoría",
                            "Título de la tarea",
                            "Cantidad de la misión",
                            "La gente ha terminado",
                            "Residual{num}Lugares",
                            "Descripción de la tarea",
                            "Información de enlace",
                            "Ejemplo de auditoría",
                            "Recibir usuario",
                            "Recoger",
                            "Estado completo",
                            "Presentar muestra",
                            "El usuario no envió la muestra",
                            "Fecha de actualización",
                            "Carga de datos. ..",
                            "Malicioso",
                            "Revisión",
                            "Fallo",
                            "Éxito",
                            "Misión de auditoría",
                            "Notas de auditoría",
                            "Por favor ingrese las instrucciones de revisión",
                            "Las tareas enviadas fallaron, la necesidad de volver a presentar la revisión",
                            "Felicidades por la finalización de la misión, redoblar sus esfuerzos",
                            "Error de captura de pantalla de la página de tareas enviada, la tarea falló",
                            "Enviar tareas maliciosamente, la tarea falló",
                        ],
                    },
                    postRecord: ["Gestión de lanzamiento", "Publicar", "Total", "Completado", "Fecha límite", "Auditoría", "Revocado", "Editar"],
                    wallet: {
                        default: ["Mi billetera", "Recarga", "Recaudad", "Registro de recarga", "Registro de recogida", "Llena", "Mencionar", "Alipay"],
                        label: ["Método de recogida", "Cantidad de efectivo", "Contraseña de fondos", "Enviado", "Número de teléfono", "Correo electrónico", "IFSC"],
                        placeholder: [
                            "Elige la forma de cobrar",
                            "Por favor ingrese la cantidad de efectivo",
                            "Por favor ingrese la contraseña de fondos",
                            "Por favor, elija la forma de cobrar",
                            "Por favor ingrese el número de teléfono del beneficiario",
                            "Por favor ingrese el buzón del beneficiario",
                            "Por favor ingrese el IFSC del beneficiario",
                        ],
                        msg: ["No ha establecido una contraseña de capital, por favor configure", "No ha vinculado la tarjeta bancaria, por favor enlace"],
                    },
                    recharge: {
                        default: [
                            "Recarga",
                            "Detalles de recarga",
                            "Registro de recarga",
                            "Saldo disponible{money}，Por favor, elija el método de recarga",
                            "La cantidad mínima única esIDR{min}，El más altoIDR{max}，Tarifa de manejo{fee}%",
                            "Enviado...",
                            "Recarga inmediata",
                            "Regresa",
                            "Carga...",
                        ],
                        label: ["Cantidad de recarga", "Canal de recarga", "Nombre de la transferencia", "Nombre del pagador", "Teléfono móvil pagador", "Cuenta UPI del pagador", "Correo electrónico del pagador"],
                        placeholder: [
                            "Por favor ingrese la cantidad de recarga",
                            "Seleccione el canal de recarga",
                            "Por favor ingrese el nombre de la transferencia",
                            "La cantidad mínima única esIDR{min}",
                            "La cantidad máxima única esIDR{max}",
                            "Por favor ingrese el nombre del pagador",
                            "Ingrese el número de teléfono del pagador, antes del número más un código de área internacional, como 86",
                            "Por favor ingrese la cuenta UPI del pagador",
                            "Por favor ingrese el buzón del pagador",
                        ],
                        info: [
                            "Cantidad de recarga",
                            "Número de pedido",
                            "Banco receptor",
                            "Cuenta de cobro",
                            "Beneficiario",
                            "Copiar",
                            "{type}Transferencia",
                            "Captura de pantalla de transferencia",
                            "Enviado",
                            "Código IFSC",
                            "Tipo de cuenta",
                            "Instrucciones de procesamiento",
                        ],
                        tips: [
                            "Seleccione el siguiente método para transferir la cantidad correspondiente a fin de no retrasar la verificación financiera<br>Después de la transferencia, cargue la captura de pantalla de transferencia como prueba de verificación",
                            "No es necesario agregar amigos, barrer el código bidimensional para pagarme la transferencia",
                            "Por favor, siga la información a continuación para completar la transferencia",
                            "Consejo: Después del pago exitoso, comuníquese con el servicio de atención al cliente en línea para proporcionar su cuenta de miembro, cantidad de recarga, número de pedido, cuenta de depositante, tiempo de recargación; Facilitar los fondos financieros oportunos para usted ",
                            "Nota: los miembros pagan cada transferencia, envíe una vez",
                            "Después de la transferencia, cargue la captura de pantalla de transferencia como prueba de verificación",
                        ],
                    },
                    dialog: ["Consejo", "OK", "Enviado...", "Copiar exitoso", "La versión del sistema IOS no es compatible con bajo", "Registrarse...", "Carga de datos..."],
                    lineList: ["Selección de línea", "Línea actual", "Línea"],
                },
                "ja-JP": {
                    line: "回線をきりかえる",
                    language: "言語の選択",
                    common: ["オンラインカスタマーサービス", "停止解除"],
                    home: {
                        broadcast: "会員様おめでとうございます{member}いちめい推薦する{vipname}<br>獲得IDR{grade}普及奨励!",
                        taskHall: { title: ["ミッションホール", "マーチャンダイズパブリッシングホール"] },
                        memberList: { title: "会員リスト", data: ["おめでとう:{member}", "本日仕上げる{num}単,稼ぐIDR{profit}!"] },
                        businessList: { title: "商店リスト", data: ["{member}", "本日のリリース{num}シングルタスク"] },
                        noticeTitle: "心地よさのヒント",
                        tabBar: ["トップページ", "タスク", "VIP", "収益", "私の"],
                        menu: ["VIPゾーン", "ビデオチュートリアル", "プロモーション奨励"],
                        msg: "タスクがオープンされていません",
                        video: "動画リスト",
                    },
                    login: {
                        text: ["ユーザ名/パスワードを覚えてください。", "ログイン中..", "すぐに登録します"],
                        placeholder: ["携帯の番号を入力してください", "ログインパスワードを入力してください。"],
                        i18n: ["なし{title}アカウント？{a} {line}", "登録する"],
                    },
                    register: {
                        text: ["登録へようこそ", "メッセージ送信中。。。", "メッセージコードを取得する", "登録しています。。。", "今すぐ登録", "アカウントがあります。今すぐダウンロードします"],
                        placeholder: [
                            "携帯電話番号を入力してください",
                            "SMS CAPTCHAを入力してください",
                            "ログインパスワードを入力してください",
                            "パスワードを確認してください",
                            "招待コードを入力してください",
                            "2つのパスワードが違う",
                            "CAPTCHAを入力してください",
                        ],
                        i18n: ["アカウントは既にあります？{a} {line}", "ログイン"],
                    },
                    postTask: {
                        navBar: { title: "タスクの公開", right: "パブリッシング規則" },
                        field: [
                            { label: "タスク分類" },
                            { label: "タスクタイトル", placeholder: "タスクタイトルを入力してください", error: "タスクタイトルを空にすることはできません" },
                            { label: "タスクの概要", placeholder: "タスクの概要を入力してください" },
                            { label: "製造オーダー単価", placeholder: "タスク単価を入力してください", right: "IDR", error: ["製造オーダー単価を空白にすることはできません", "製造オーダー単価は1を下回ることはできませんIDR"] },
                            { label: "受取数量", placeholder: "受取数量を入力してください", error: "受入数量を空白にすることはできません" },
                            { label: "受け取り回数", placeholder: "受け取り回数を入力してください", right: "次/人", error: "受信回数を空にすることはできません" },
                            { label: "タスク合計", error: "製造オーダーの合計金額は計算されません" },
                            { label: "リンク情報", placeholder: "リンク先を入力してください", error: "リンク情報を空にすることはできません" },
                            { label: "タスク・レベル" },
                            { label: "締め切り日", placeholder: "クリックして日付を選択", error: "締め切り日を空白にすることはできません" },
                            { label: "かんりょうじょうけん", error: "完了条件を選択してください" },
                            { label: "サンプルのレビュー" },
                            { label: "操作手順", placeholder: "簡単でわかりやすい手順が完成に役立ちます！", error: "アクションステップを空白にすることはできません" },
                        ],
                        button: "提出",
                        step: { title: "操作手順", right: "仕上げる", placeholder: "手順の説明を入力してください", button: ["削除", "追加"] },
                        tips: [
                            "プラットフォーム手数料契約 {pump}{br}このリリースには契約が必要です {price}，口座残高が十分であることを確認してください {a}{br}本プラットフォームは黄賭博毒及び政治に関わる一切の法律で禁止されている内容を掲載することを禁止します。例えば、ポイントを控除するならば、アカウントを禁止します。",
                            "デチャージ",
                            "1つ以上のステップを保持する",
                            "最大10ステップまで追加可能",
                        ],
                    },
                    vip: {
                        user: { title: ["あなたのID", "観光客"], label: "日課", value: ["効力発生日", "永久に有効である", "まずログインしてください"] },
                        list: { label: "日課:{number}次", button: "今すぐ参加", text: ["日次収益", "月収", "奨励:各名", "無料", "ごとに"] },
                        dialog: ["費用の決定 {amount} IDRなる{name}か？", "あなたは現在{currname}，なり得ない{name}", "費用の決定 {amount} IDR更新料{name}か？"],
                    },
                    user: {
                        myEarnings: { grid: ["個人残高(IDR)", "昨日の収益(IDR)", "本日の収益(IDR)", "今週の収益(IDR)", "今月の収益(IDR)", "先月の収益(IDR)", "総収益(IDR)", "本日任務を完遂する(単)", "今日の残りの任務(単)"] },
                        default: ["私の上司", "アカウント登録", "招待コード", "ログアウト登録", "残高", "IDR", "私の財布", "封号", "制限", "良好", "優秀"],
                        menu: ["タスク記録", "査読タスク", "リリース管理", "個人情報", "アカウントバインディング", "連結財務諸表", "変動記録", "友人を招待する", "チームレポート", "ヘルプデスク", "信用センター", "アプリダウンロード"],
                    },
                    userInfo: {
                        default: [
                            "個人情報",
                            "アバタ",
                            "携帯電話番号",
                            "クレジットカード",
                            "支付宝",
                            "詳細情報",
                            "ログインパスワード",
                            "資金暗号",
                            "設定をクリックする",
                            "アバタの修正",
                            "パスワードの変更",
                            "パスワードの修正",
                            "提出",
                            "キャッシュをクリア",
                        ],
                        label: ["原登録パスワード", "新規登録パスワード", "パスワードを確認する", "元資金暗号", "新規資金暗号", "パスワードを確認する"],
                        placeholder: [
                            "ログインパスワードを入力してください",
                            "新規ログインパスワードを入力してください",
                            "ログインパスワードを確認してください",
                            "元のお金のパスワードを入力してください",
                            "新規資金パスワードを入力してください",
                            "暗証番号を確認してください",
                        ],
                    },
                    bankCard: {
                        default: ["クレジットカードのキャッシュカード", "即時認証", "提出中です…", "すぐに追加", "銀行カードを追加"],
                        tips: ["実名認証の後、カードを追加してください", "クレジットカードの発行者名と認証された実名が一致しなければ、引き出しが成功しない。"],
                        label: ["名前", "銀行名", "銀行戸籍", "IFSCコード"],
                        placeholder: ["銀行名を選択してください", "銀行の戸籍を入力してください", " IFSCコードを入力してください"],
                    },
                    userSet: {
                        default: ["実名認証", "詳細情報", "バインディング決済宝", "提出"],
                        label: ["実名", "QQ号", "支付宝アカウント", "支払宝氏名"],
                        placeholder: ["本当の名前を入力してください", "QQ番号を入力してください", "支付宝アカウントを入力してください", "入力してください"],
                        tips: "暖かさのThông báo:キャッシュカードは修正することができなくて、あなたのためにお金を引き出します",
                    },
                    bindAccount: {
                        default: ["バインディングアカウント", "査看教程", "提出"],
                        tabs: ["アカウント", "アカウント", "アカウント"],
                        label: ["操作説明", "スクリーンショットを追加", "アカウント"],
                        placeholder: "入力してください{account}アカウント",
                    },
                    dayReport: ["連結財務諸表", "総収益", "私が果たした任務", "私の任務収益", "下位の任務", "下位タスク報酬", "単", "ここ30日", "数", "タスク", "下位", "消費", "日付"],
                    fundRecord: { default: ["支出記録", "チャージ記録", "収入記録", "充", "収", "支"], tabs: ["収入", "支出", "チャージ"] },
                    vanPull: ["これ以上のデータはありません", "データなし"],
                    promote: [
                        "あなたの親友",
                        " {title}への誘い",
                        "推薦コード",
                        "複製推奨コード",
                        "複製招待リンク",
                        "二次元コードを保存する",
                        "普及奨励",
                        "セーブポスター成功",
                        "ポスターの保存に失敗したときは、何度も試してみてください",
                        "スクリーンを切りなさい",
                        "保存普及ポスター",
                        "保存普及ポスターから携帯電話",
                        "保存普及ポスターを携帯電話に<br>成功しなければ、何度も試してみたり、息を止めて保管してください",
                    ],
                    teamReport: {
                        default: [
                            "検索",
                            "チーム残高",
                            "チーム収益",
                            "チームチャージ",
                            "チームの提案",
                            "首充人数",
                            "頭数",
                            "チーム数",
                            "チームの追加",
                            "個",
                            "私",
                            "ユーザー",
                            "チャージ",
                            "引き出し",
                            "返点",
                            "歩合",
                            "選択年月日",
                            "仮データ数",
                            "バリュー金額",
                            "チャージ人数",
                            "チャージ返お手伝い",
                        ],
                        tabs: ["チームレポート", "私のチーム"],
                        team: ["一級", "二級", "三級"],
                    },
                    help: ["ヘルプデスク", "仮内容"],
                    credit: [
                        "信用センター",
                        "信用説明",
                        "信用記録",
                        "<p>1.格付けポイントは週に1回評価される</p><p>2.初期ユーザクレジット積分:<b>60</b></p><p>3.ユーザがタスクを行って虚偽の画像を投稿したことを検知すると1日控除される:<b>1</b>ポイント、減点の上限:<b>7</b>勝ち点</p><p>4.ユーザが偽の画像を使用して増加したことが検出されなければ<b>1</b>勝ち点</p><p>5.信用積分が<b>50</b>分割は制限される</p><p>6.信用積分が<b>30</b>ドロップタスク回数が半減する</p><p>7.信用積分は以下のようになる<b>0</b>分は封号される</p>",
                        "私の信用",
                        "信用記録がない",
                    ],
                    upload: ["上伝中…", "誤ったフォーマット", "アップロード成功", "アップロード失敗"],
                    task: {
                        default: ["タスクリスト", "タスク要求", "創建", "査定", "リンクを開く", "コピーリンク", "単価", "提出", "放棄"],
                        tabs: ["進行中", "審査中", "完了しました", "失敗した", "悪意", "あきらめた"],
                        msg: "タスク完了画像をアップロードしてください",
                        info: [
                            "タスク詳細",
                            "タスクタイトル",
                            "タスク収益",
                            "タスク記述",
                            "アップロード要求",
                            "提出サンプル",
                            "ユーザーはサンプルを提出していません。",
                            "査定説明",
                            "査読日",
                            "需要先",
                            "リリース",
                            "複製",
                            "ジャンプ",
                            "タスク手順",
                            "ステップ{index}",
                            "審査例",
                            "無審査サンプル",
                            "データロード中…",
                            "タスク放棄",
                            "提出完了",
                            "リリース内容",
                        ],
                        index: [
                            "現在の身分",
                            'あなたの現在の等級は <i style="color:#1989fa">{currVip}</i><br>現在しか受け取れない<i style="color:#1989fa">{currVip}</i>レベルの任務<br>加入するかどうか <i style="color:#dd6161">{vip}</i> 格付け',
                            "即加入",
                            "タスククラスを選択してください",
                        ],
                        list: ["タスクリスト", "需要先", "余剰", "要求", "受領"],
                        show: [
                            "タスク詳細",
                            "人はすでに稼いでいる",
                            "残り{num}個の定員",
                            "48時間以内に審査する",
                            "タスク記述",
                            "需要先",
                            "審査基準",
                            "複製",
                            "ジャンプ",
                            "タスク手順",
                            "ステップ{index}",
                            "審査例",
                            "無審査サンプル",
                            "データロード中…",
                            "提出中です…",
                            "受領任務",
                            "即時登録",
                            "リリース内容",
                        ],
                    },
                    serviceCenter: ["コンタクトセンター", "Hi、専属のお客様サービス", "喜んでサービスします", "セルフサービス", "オンライン・コンタクト", "チャージ・ゲスト", "Lineコール"],
                    audit: {
                        default: ["査読タスク", "受領ユーザ", "受領日", "更新日時", "査定"],
                        tabs: ["進行中", "審査中", "完了しました", "失敗した"],
                        info: [
                            "詳細を審査する",
                            "タスクタイトル",
                            "タスク金額",
                            "人は終わった",
                            "残り{num}個の定員",
                            "タスク記述",
                            "リンク情報",
                            "審査例",
                            "受領ユーザ",
                            "受領",
                            "完了状態",
                            "提出サンプル",
                            "ユーザーはサンプルを提出していません。",
                            "更新日時",
                            "データロード中…",
                            "悪意",
                            "再審",
                            "失敗",
                            "成功",
                            "査読タスク",
                            "査定説明",
                            "審査説明を入力してください。",
                            "提出したタスクに合格していない場合、再度審査を提出する必要があります。",
                            "ご完成おめでとうございます",
                            "提出したタスクページのスクリーンショットのミス、タスクの失敗",
                            "悪意のあるタスク提出、タスク失敗",
                        ],
                    },
                    postRecord: ["リリース管理", "リリース", "総量", "完了しました", "締め切り", "査定", "取り下げ", "編集"],
                    wallet: {
                        default: ["私の財布", "チャージ", "引き出し", "チャージ記録", "起現記録", "充", "提", "支付宝"],
                        label: ["提案方式", "支払金額", "資金暗号", "提出", "携帯電話番号", "メールボックス", "IFSC"],
                        placeholder: [
                            "提案方式の選択",
                            "支払金額を入力してください",
                            "パスワードを入力してください",
                            "引き出し方を選んでください",
                            "受信者の携帯電話番号を入力してください",
                            "受信者のメールアドレスを入力してください",
                            "受取人IFSCを入力してください",
                        ],
                        msg: ["あなたはまだお金のパスワードを設定していないので、設定してください", "まだキャッシュカードのご入金がございませんので、先にお引きください"],
                    },
                    recharge: {
                        default: ["チャージ", "詳細はチャージ", "チャージ記録", "利用可能残高{money},チャージ方式を選択してください", "単筆最低金額IDR{min},最高IDR{max},手数料{fee}%", "提出中です…", "直ちにチャージ", "戻る", "ロード中…"],
                        label: ["バリュー金額", "チャージチャンネル", "振込先の氏名", "支払人の名前", "支払人の携帯電話", "支払者UPIアカウント", "支払人メールボックス"],
                        placeholder: [
                            "チャージ金額を入力してください",
                            "チャージチャネルを選択してください",
                            "振込先の名前を入力してください",
                            "単筆最低金額IDR{min}",
                            "単筆最高額IDR{max}",
                            "支払人の名前を入力してください",
                            "支払人番号を入力してください。番号の前に国際番号をプラス86",
                            "支払者UPIアカウントを入力してください",
                            "支払人メールアドレスを入力してください",
                        ],
                        info: ["バリュー金額", "注文書番号", "集金銀行", "集金口座", "集金人", "複製", "{type}振替", "口座振替スクリーン", "提出", "IFSCコード", "アカウントタイプ", "処理説明"],
                        tips: [
                            "下記の方法で振込みに応じた金額をお選びください<br>振替後は照合証明として振替スクリーンショットをアップロードしてください",
                            "親友を加える必要はない、二次元コードをスキャンして私にお金を振り込みます",
                            "以下の情報で振替を完了してください",
                            "ヒント:支払いに成功した後、オンライン顧客サービスに連絡して、あなたの会員アカウント、チャージ金額、注文番号、預金者アカウント、チャージ時間を提供してください;財務にタイムリーに資金を追加します",
                            "注意:会員は振替支払いごとに提出してください",
                            "口座振替後、照合証明として口座振替スクリーンをアップロードしてください",
                        ],
                    },
                    dialog: ["ヒント", "確定", "提出中です…", "複製成功", "IOSの低さはサポートしていません", "登録中です…", "データロード中…"],
                    lineList: ["回線選択", "現在回線", "回線"],
                },
            },
        });
        function b(e) {
            let a = "vi-VN";
            switch ("en" == localStorage.Language ? "en-US" : DefaultLanguage) {
                case "en":
                    (a = "en-US"), i.a.use("en-US", s.a);
                    break;
                case "cn":
                    (a = "zh-CN"), i.a.use("zh-CN", c.a);
                    break;
                case "ft":
                    (a = "zh-TW"), i.a.use("zh-TW", d.a);
                    break;
                case "id":
                    (a = "id-ID"), i.a.use("id-ID", u.a);
                    break;
                case "vi":
                    (a = "vi-VN"), i.a.use("vi-VN", h.a);
                    break;
                case "es":
                    (a = "es-ES"), i.a.use("es-ES", m.a);
                    break;
                case "ja":
                    (a = "ja-JP"), i.a.use("ja-JP", p.a);
            }
        }
        a.b = r;
    },
    "1f13": function (e, a, n) {},
    "3d34": function (e, a, n) {
        "use strict";
        var t = n("2241"),
            i = n("d399"),
            n = {
                Confirm: function (e, a, n) {
                    t.a
                        .confirm({ title: n || !1, className: "D-confirm", message: e, confirmButtonText: "确定", closeOnPopstate: !0 })
                        .then(a)
                        .catch(() => {});
                },
                Alert: function (e, a, n) {
                    t.a.alert({ className: "D-confirm", message: e, closeOnPopstate: !0, confirmButtonText: n || "确定" }).then(a);
                },
                Toast: function (e, a) {
                    Object(i.a)({ message: e, position: a || "bottom" });
                },
            };
        a.a = n;
    },
    4360: function (e, a, n) {
        "use strict";
        var t = n("2b0e"),
            n = n("2f62");
        t.a.use(n.a),
            (a.a = new n.a.Store({
                state: {
                    ApiUrl: localStorage.CurrLine || ApiUrl,
                    InitData: localStorage.InitData
                        ? JSON.parse(localStorage.InitData)
                        : { BanksList: [], UserGradeList: [], bannerList: [], projectgrouplist: [], kefu: {}, memberList: [], noticelist: [{ content: "" }], taskclasslist: [], userviplist: [] },
                    UserInfo: localStorage.UserInfo ? JSON.parse(localStorage.UserInfo) : "",
                    BankCardList: localStorage.BankCardList ? JSON.parse(localStorage.BankCardList) : [],
                    MiUserInfo: localStorage.MiUserInfo ? JSON.parse(localStorage.MiUserInfo) : "",
                    ChatData: localStorage.ChatData ? JSON.parse(localStorage.ChatData) : "",
                    FriendInfo: localStorage.FriendInfo ? JSON.parse(localStorage.FriendInfo) : "",
                    SoFriendInfo: localStorage.SoFriendInfo ? JSON.parse(localStorage.SoFriendInfo) : "",
                    GroupInfo: localStorage.GroupInfo ? JSON.parse(localStorage.GroupInfo) : "",
                    SoGroupInfo: localStorage.SoGroupInfo ? JSON.parse(localStorage.SoGroupInfo) : "",
                    FriendList: localStorage.FriendList ? JSON.parse(localStorage.FriendList) : "",
                    GroupList: localStorage.GroupList ? JSON.parse(localStorage.GroupList) : "",
                    GroupMember: localStorage.GroupMember ? JSON.parse(localStorage.GroupMember) : "",
                },
                getters: { VipList: (e) => e.InitData.UserGradeList.filter((e) => 1 != e.grade) },
                mutations: {
                    UpdateApiUrl: function (e, a) {
                        (e.ApiUrl = a.data), (localStorage.ApiUrl = JSON.stringify(a.data));
                    },
                    UpdateInitData: function (e, a) {
                        (e.InitData = a.data), (localStorage.InitData = JSON.stringify(a.data));
                    },
                    UpdateUserInfo: function (e, a) {
                        (e.UserInfo = a.data), (localStorage.UserInfo = JSON.stringify(a.data));
                    },
                    UpdateBankCardList: function (e, a) {
                        (e.BankCardList = a.data), (localStorage.BankCardList = JSON.stringify(a.data));
                    },
                    UpdateMiUserInfo: function (e, a) {
                        (e.MiUserInfo = a.data), (localStorage.MiUserInfo = JSON.stringify(a.data));
                    },
                    UpdateChatData: function (e, a) {
                        (e.ChatData = a.data), (localStorage.ChatData = JSON.stringify(a.data));
                    },
                    UpdateFriendInfo: function (e, a) {
                        (e.FriendInfo = a.data), (localStorage.FriendInfo = JSON.stringify(a.data));
                    },
                    UpdateSoFriendInfo: function (e, a) {
                        (e.SoFriendInfo = a.data), (localStorage.SoFriendInfo = JSON.stringify(a.data));
                    },
                    UpdateGroupInfo: function (e, a) {
                        (e.GroupInfo = a.data), (localStorage.GroupInfo = JSON.stringify(a.data));
                    },
                    UpdateSoGroupInfo: function (e, a) {
                        (e.SoGroupInfo = a.data), (localStorage.SoGroupInfo = JSON.stringify(a.data));
                    },
                    UpdateFriendList: function (e, a) {
                        (e.FriendList = a.data), (localStorage.FriendList = JSON.stringify(a.data));
                    },
                    UpdateGroupList: function (e, a) {
                        (e.GroupList = a.data), (localStorage.GroupList = JSON.stringify(a.data));
                    },
                    UpdateGroupMember: function (e, a) {
                        (e.GroupMember = a.data), (localStorage.GroupMember = JSON.stringify(a.data));
                    },
                },
                actions: {
                    UpdateApiUrl: ({ commit: e }, a) => e("UpdateApiUrl", { data: a }),
                    UpdateInitData: ({ commit: e }, a) => e("UpdateInitData", { data: a }),
                    UpdateUserInfo: ({ commit: e }, a) => e("UpdateUserInfo", { data: a }),
                    UpdateBankCardList: ({ commit: e }, a) => e("UpdateBankCardList", { data: a }),
                    UpdateMiUserInfo: ({ commit: e }, a) => e("UpdateMiUserInfo", { data: a }),
                    UpdateChatData: ({ commit: e }, a) => e("UpdateChatData", { data: a }),
                    UpdateFriendInfo: ({ commit: e }, a) => e("UpdateFriendInfo", { data: a }),
                    UpdateSoFriendInfo: ({ commit: e }, a) => e("UpdateSoFriendInfo", { data: a }),
                    UpdateGroupInfo: ({ commit: e }, a) => e("UpdateGroupInfo", { data: a }),
                    UpdateSoGroupInfo: ({ commit: e }, a) => e("UpdateSoGroupInfo", { data: a }),
                    UpdateFriendList: ({ commit: e }, a) => e("UpdateFriendList", { data: a }),
                    UpdateGroupList: ({ commit: e }, a) => e("UpdateGroupList", { data: a }),
                    UpdateGroupMember: ({ commit: e }, a) => e("UpdateGroupMember", { data: a }),
                },
                modules: {},
            })),
            t.a.mixin({
                computed: {
                    ...Object(n.d)(["ApiUrl", "InitData", "UserInfo", "BankCardList", "MiUserInfo", "ChatData", "FriendInfo", "SoFriendInfo", "GroupInfo", "SoGroupInfo", "FriendList", "GroupList", "GroupMember"]),
                    ...Object(n.c)(["VipList"]),
                },
                methods: {
                    ...Object(n.b)([
                        "UpdateApiUrl",
                        "UpdateInitData",
                        "UpdateUserInfo",
                        "UpdateBankCardList",
                        "UpdateMiUserInfo",
                        "UpdateChatData",
                        "UpdateFriendInfo",
                        "UpdateSoFriendInfo",
                        "UpdateGroupInfo",
                        "UpdateSoGroupInfo",
                        "UpdateFriendList",
                        "UpdateGroupList",
                        "UpdateGroupMember",
                    ]),
                },
            });
    },
    "4d1d": function (e, a, n) {
        "use strict";
        var i = n("5d8f"),
            t = n("4360"),
            o = n("3d34"),
            r = n("d399"),
            n = {
                PhoneLogin: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在登录密聊..." }),
                        i.a.post("User/phonelogin", e, { noLogin: !0 }).then(({ data: e }) => {
                            1 == e.code
                                ? ((localStorage.MiLogin = 1),
                                  (localStorage.userUid = e.info.uid),
                                  (localStorage.userToken = e.info.token),
                                  (localStorage.userMid = e.info.mid),
                                  (localStorage.userNickName = e.info.nickname || "昵称未设置"),
                                  (localStorage.userHeader = e.info.header),
                                  (localStorage.systemVoice = e.info.is_v_d),
                                  (localStorage.userQRCode = e.info.code_url),
                                  (localStorage.userType = e.info.users_type))
                                : Object(r.a)({ message: e.code_dec, position: "bottom" }),
                                a && a(e);
                        });
                },
                Logout: function (t) {
                    i.a.post("User/Logout").then(({ data: e }) => {
                        var a = localStorage.CurrUser,
                            n = localStorage.UserArr;
                        localStorage.clear(), (localStorage.CurrUser = a), (localStorage.UserArr = n), t && t(e), window.parent.postMessage({ close: !0, logout: !0 }, "*");
                    });
                },
                GetUserData: function (a) {
                    i.a.post("User/GetUserData").then(({ data: e }) => {
                        delete e.code, t.a.dispatch("UpdateChatData", e), a && a(e);
                    });
                },
                SoMi: function (e, a) {
                    i.a.post("User/SoMi", { mid: e }).then(({ data: e }) => {
                        1 == e.code && (e.info.nickname = e.info.nickname || "昵称未设置"), a && a(e);
                    });
                },
                GetUserInfo: function (a) {
                    i.a.post("User/GetUserInfo").then(({ data: e }) => {
                        1 == e.code
                            ? ((e.info.nickname = e.info.nickname || "昵称未设置"),
                              (localStorage.userNickName = e.info.nickname),
                              (localStorage.userHeader = e.info.header),
                              (localStorage.userQRCode = e.info.code_url),
                              (localStorage.systemVoice = e.info.is_v_d),
                              t.a.dispatch("UpdateMiUserInfo", e.info))
                            : (e.info = { nickname: "", header: "" }),
                            a && a(e);
                    });
                },
                SetUserInfo: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("User/SetUserInfo", e).then(({ data: e }) => {
                            r.a.clear(), 1 == e.code ? (a && a(e), this.GetUserInfo()) : (a && a(!1), Object(r.a)({ message: e.code_dec, position: "bottom" }));
                        });
                },
                UploadImg: function (e, a) {
                    i.a.post("User/UploadImg", e, { fromData: !0 }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                CreateGroups: function (e, a, n) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("Groups/CreateGroups", { fid: e, password: a }).then(({ data: e }) => {
                            r.a.clear(), 1 == e.code ? n && n(e) : Object(r.a)({ message: e.code_dec, position: "bottom" });
                        });
                },
                GroupsList: function (a) {
                    i.a.post("Groups/GroupsList").then(({ data: e }) => {
                        a && a(e), t.a.dispatch("UpdateGroupList", e.list || []);
                    });
                },
                SoGroups: function (e, a) {
                    i.a.post("Groups/SoGroups", { gid: e }).then(({ data: e }) => {
                        1 == e.code && (e.info.nickname = e.info.nickname || "密群名未设置"), a && a(e);
                    });
                },
                NewGroupsList: function (a) {
                    i.a.post("Groups/GroupsNewList").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                AddGroups: function (e, a) {
                    i.a.post("Groups/ApplyGroups", { gid: e }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetGroupsInfo: function (e, a) {
                    i.a.post("Groups/GetGroupsInfo", { gid: e }).then(({ data: e }) => {
                        1 == e.code && ((e.info.group_name = e.info.group_name || "密群名未设置"), t.a.dispatch("UpdateGroupInfo", e.info), a && a(e));
                    });
                },
                GroupsMember: function (e, a) {
                    i.a.post("Groups/GroupsMember", { gid: e }).then(({ data: e }) => {
                        a && a(e), 1 == e.code && t.a.dispatch("UpdateGroupMember", e.list);
                    });
                },
                SetGroupsInfo: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("Groups/SetGroupsInfo", e).then(({ data: e }) => {
                            r.a.clear(), 1 == e.code ? a && a(e) : (a && a(!1), Object(r.a)({ message: e.code_dec, position: "bottom" }));
                        });
                },
                InvitationJoinGroups: function (e, a, n) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("Groups/InvitationJoinGroups", { gid: e, fid: a }).then(({ data: e }) => {
                            1 == e.code && n && n(e), Object(r.a)({ message: e.code_dec, position: "bottom" });
                        });
                },
                GetGroupsnewInfo: function (e, a) {
                    i.a.post("Groups/GetGroupsnewInfo", { id: e }).then(({ data: e }) => {
                        1 == e.code && ((e.info.nickname = e.info.nickname || "昵称未设置"), a && a(e));
                    });
                },
                SetGroupsnewInfo: function (e, a) {
                    i.a.post("Groups/SetGroupsnewInfo", e).then(({ data: e }) => {
                        a && a(e), 0 == e.code && o.a.Alert(e.code_dec);
                    });
                },
                AddFriends: function (e, a, n) {
                    i.a.post("Friends/AddFriends", { mid: e, content: a }).then(({ data: e }) => {
                        n && n(e);
                    });
                },
                FriendsList: function (a, n) {
                    i.a.post("Friends/FriendsList", a).then(({ data: e }) => {
                        n && n(e), a || t.a.dispatch("UpdateFriendList", e.list || []);
                    });
                },
                NewsFriendsList: function (a) {
                    i.a.post("Friends/NewsFriendsList").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetFriendsInfo: function (e, a) {
                    i.a.post("Friends/GetFriendsInfo", { id: e }).then(({ data: e }) => {
                        1 == e.code && ((e.info.nickname = e.info.nickname || "昵称未设置"), t.a.dispatch("UpdateFriendInfo", e.info), a && a(e));
                    });
                },
                SetFriendsInfo: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("Friends/SetFriendsInfo", e).then(({ data: e }) => {
                            r.a.clear(), 1 == e.code ? a && a(e) : (a && a(!1), Object(r.a)({ message: e.code_dec, position: "bottom" }));
                        });
                },
                GetRecordList: function (a, n) {
                    i.a.post("Record/GetRecordList", a).then(({ data: e }) => {
                        1 == a.chat_type && (e.tit = e.tit || "昵称未设置"), 2 == a.chat_type && (e.tit = e.tit || "密群名未设置"), n && n(e);
                    });
                },
                SendRecord: function (e, a) {
                    i.a.post("Record/SendRecord", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                SoRecord: function (e, a) {
                    i.a.post("Record/SoRecord", { content: e }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                SeeAllRecord: function (e, a) {
                    i.a.post("Record/seeAllRecord", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                DelUserNew: function (e, a) {
                    i.a.post("Record/delUserNew", e).then(({ data: e }) => {
                        1 == e.code ? a && a(e) : Object(r.a)({ message: e.code_dec, position: "bottom" });
                    });
                },
                BindUid: function (e, a) {
                    i.a.post("base/bind_uid", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                NewRegister: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("User/newuserregister", e, { noLogin: !0 }).then(({ data: e }) => {
                            a && a(e), Object(r.a)({ message: e.code_dec, position: "bottom" });
                        });
                },
                GetGroupRecordList: function (e, a) {
                    i.a.post("Record/GetgroupRecordList", e).then(({ data: e }) => {
                        (e.tit = e.tit || "密群名未设置"), a && a(e);
                    });
                },
                DelRecord: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("Record/delRecord", e).then(({ data: e }) => {
                            a && a(e), Object(r.a)({ message: e.code_dec, position: "bottom" });
                        });
                },
                SetAddress: function (e, a) {
                    i.a.post("User/addressbook", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                SmsCode: function (a) {
                    i.a.post("sms/smsCode").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetSMSCode: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在发送..." }),
                        i.a.post("Sms/sendSMSCode", e).then(({ data: e }) => {
                            a && a(e), Object(r.a)({ message: e.code_dec, position: "bottom" });
                        });
                },
                SendBill: function (e, a) {
                    r.a.loading({ mask: !0, duration: 0, message: "正在提交..." }),
                        i.a.post("hongbao/giveOutHongBao", e).then(({ data: e }) => {
                            a && a(e), Object(r.a)({ message: e.code_dec, position: "bottom" }), 1 == e.code && this.GetUserInfo();
                        });
                },
                RobBill: function (e, a) {
                    r.a.loading({ duration: 0, message: "正在领红包..." }),
                        i.a.post("hongbao/grabHongBao", { hb_id: e, sitetoken: localStorage.Token }).then(({ data: e }) => {
                            a && a(e), Object(r.a)({ message: e.code_dec, position: "bottom" }), 1 == e.code && this.GetUserInfo();
                        });
                },
                BillInfo: function (e, a) {
                    r.a.loading({ duration: 0, message: "Đang Tải..." }),
                        i.a.post("hongbao/getHongBaoinfo", { hb_id: e }).then(({ data: e }) => {
                            r.a.clear(), a && a(e);
                        });
                },
                CreateUploadImage: function (a) {
                    i.a.post("Aliyun/CreateUploadImage").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                CreateUploadVideo: function (e, a) {
                    i.a.post("Aliyun/CreateUploadVideo", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                RefreshUploadVideo: function (e, a) {
                    i.a.post("Aliyun/RefreshUploadVideo", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetPlayInfo: function (e, a) {
                    i.a.post("Aliyun/GetPlayInfo", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetVideoPlayAuth: function (e, a) {
                    i.a.post("Aliyun/GetVideoPlayAuth", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetUploadDetails: function (e, a) {
                    i.a.post("Aliyun/GetUploadDetails", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                ListSnapshots: function (e, a) {
                    i.a.post("Aliyun/ListSnapshots", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
            };
        a.a = n;
    },
    "56d7": function (e, a, n) {
        "use strict";
        n.r(a);
        var t = n("2b0e"),
            i = n("79a2").a,
            o = (n("080c"), n("2877")),
            r = Object(o.a)(
                i,
                function () {
                    var e = this,
                        a = e.$createElement;
                    return (a = e._self._c || a)(
                        "div",
                        { staticClass: "Body" },
                        [
                            e.isRouterAlive ? a("router-view") : e._e(),
                            e.showService ? a("router-link", { attrs: { to: "/Service", id: "Service" } }, [a("img", { attrs: { src: "./static/icon/customer.png", width: "55" } }), e._v(" " + e._s(e.$t("common[0]")) + " ")]) : e._e(),
                            e.showMiliao
                                ? a("div", { staticClass: "MiLineBox" }, [
                                      a("div", { directives: [{ name: "show", rawName: "v-show", value: e.minMiliao, expression: "minMiliao" }], staticClass: "MiLine", attrs: { id: "MiLine" } }, [
                                          a("a", { staticClass: "MiLineFixedBtn", attrs: { href: "javascript:;" }, on: { click: e.openMiliao } }, [e._v("密聊")]),
                                      ]),
                                      a("div", { directives: [{ name: "show", rawName: "v-show", value: e.minMiliao, expression: "minMiliao" }], staticClass: "CancelMiLine", attrs: { id: "CancelMiLine" } }, [
                                          a("img", { attrs: { src: "./static/miliao/icon/icon-cancel.svg", height: "30" } }),
                                          e._v(" " + e._s(e.$t("common[1]")) + " "),
                                      ]),
                                  ])
                                : e._e(),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                "3dd50f76",
                null
            ).exports,
            l = n("a18c"),
            s = n("4360"),
            c = n("b970"),
            d = n("28a2"),
            u = n("fa50"),
            p = n("2241"),
            h = n("d399"),
            m = n("12cb"),
            g = {
                Confirm: function (e, a, n, t) {
                    p.a
                        .confirm({ title: t || m.b.t("dialog[0]"), message: e, confirmButtonText: n || m.b.t("dialog[1]"), closeOnPopstate: !0 })
                        .then(a)
                        .catch(() => {});
                },
                Alert: function (e, a, n) {
                    p.a
                        .alert({ title: m.b.t("dialog[0]"), message: e, confirmButtonText: n || m.b.t("dialog[1]"), closeOnPopstate: !0, closeOnClickOverlay: !0 })
                        .then(a)
                        .catch(() => {});
                },
                Toast: function (e, a) {
                    Object(h.a)({ message: e, position: a || "bottom" });
                },
                Loading: function (e, a) {
                    h.a.loading({ message: e || m.b.t("dialog[2]"), duration: 0, forbidClick: !0, getContainer: a || "body" });
                },
                Close: function () {
                    h.a.clear();
                },
            },
            b = {
                GetBackData: function (a) {
                    u.a.post("Common/BackData", "", { noLogin: !0 }).then(({ data: e }) => {
                        s.a.dispatch("UpdateInitData", e.info || ""), a && a(e.info);
                    });
                },
                Login: function (e, a) {
                    u.a.post("User/Login", e, { noLogin: !0 }).then(({ data: e }) => {
                        1 == e.code &&
                            ((localStorage.MiName = e.info.username),
                            (localStorage.Token = e.info.token),
                            (localStorage.UserId = e.info.userid),
                            s.a.dispatch("UpdateUserInfo", e.info),
                            localStorage.FromPage ? (l.a.replace(localStorage.FromPage), localStorage.removeItem("FromPage")) : l.a.replace("/")),
                            a && a(e),
                            g.Toast(e.code_dec);
                    });
                },
                Logout: function (e) {
                    u.a.post("User/Logout").then(({ data: e }) => {
                        1 == e.code && (localStorage.clear(), this.GetBackData(), s.a.dispatch("UpdateUserInfo", ""), s.a.dispatch("UpdateBankCardList", []), l.a.replace("/")), g.Toast(e.code_dec);
                    });
                },
                UserRegister: function (a, n) {
                    g.Loading(m.b.t("dialog[5]")),
                        u.a.post("user/Register", a, { noLogin: !0 }).then(({ data: e }) => {
                            1 == e.code && this.Login({ username: a.username, password: a.password }), n && n(e.info), g.Toast(e.code_dec);
                        });
                },
                SmsCode: function (a) {
                    u.a.post("sms/smsCode", "", { noLogin: !0 }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetSMSCode: function (e, a) {
                    u.a.post("sms/sendSMSCode", e, { noLogin: !0 }).then(({ data: e }) => {
                        a && a(e), g.Toast(e.code_dec);
                    });
                },
                SignIn: function (a) {
                    u.a.post("user/signin").then(({ data: e }) => {
                        1 == e.code && this.GetUserInfo(), a && a(e), g.Toast(e.code_dec);
                    });
                },
                GetUserInfo: function (a) {
                    u.a.post("user/getUserInfo").then(({ data: e }) => {
                        1 == e.code && s.a.dispatch("UpdateUserInfo", e.info), a && a(e);
                    });
                },
                SetUserInfo: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("user/setuserinfo", e).then(({ data: e }) => {
                            1 == e.code && this.GetUserInfo(), a && a(e), g.Toast(e.code_dec);
                        });
                },
                CreateOrder: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("Order/createOrder", e).then(({ data: e }) => {
                            1 == e.code && (l.a.push("/user/invest"), this.GetUserInfo()), a && a(e), g.Toast(e.code_dec);
                        });
                },
                OrderList: function (a) {
                    u.a.post("Order/Orderlist").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                OrderRecordList: function (e, a) {
                    u.a.post("Order/orderRecordList", { orderid: e }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                FundDetails: function (e, a) {
                    u.a.post("Transaction/FundDetails", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetDrawRecord: function (e, a) {
                    u.a.post("Transaction/getDrawRecord", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                Draw: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("Transaction/draw", e).then(({ data: e }) => {
                            1 == e.code && this.GetUserInfo(), a && a(e), g.Toast(e.code_dec);
                        });
                },
                Transfer: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("Transaction/Transfer", e).then(({ data: e }) => {
                            1 == e.code && this.GetUserInfo(), a && a(e), g.Toast(e.code_dec);
                        });
                },
                AddBankCard: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("Account/AddBankCard", e).then(({ data: e }) => {
                            1 == e.code && this.GetBankCardList(), a && a(e), g.Toast(e.code_dec);
                        });
                },
                GetBankCardList: function (a) {
                    u.a.post("Account/getBankCardList").then(({ data: e }) => {
                        s.a.dispatch("UpdateBankCardList", e.data || []), a && a(e);
                    });
                },
                GetRechargeRecord: function (e, a) {
                    u.a.post("Transaction/getRechargeRecord", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetRechargeType: function (a) {
                    u.a.post("Transaction/getRechargetype", { type: "app" }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                RechargeOrder: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("Recharge/newRechargeOrder", e).then(({ data: e }) => {
                            1 == e.code && l.a.push("/user/recharge/" + e.orderNumber), a && a(e), g.Toast(e.code_dec);
                        });
                },
                GetRechargeInfo: function (e, a) {
                    u.a.post("Recharge/getRechargeInfo", { orderNumber: e }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                UploadImg: function (e, a) {
                    u.a.post("User/UploadImg", e, { fromData: !0 }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                BuyVip: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("User/userBuyVip", e).then(({ data: e }) => {
                            a && a(e), g.Toast(e.code_dec);
                        });
                },
                PostTask: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("task/publishTask", e).then(({ data: e }) => {
                            a && a(e), g.Toast(e.code_dec);
                        });
                },
                GetTaskList: function (e, a) {
                    u.a.post("task/getTaskList", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                ReceiveTask: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("task/receiveTask", { id: e }).then(({ data: e }) => {
                            a && a(e), g.Toast(e.code_dec), 1 == e.code && this.GetUserInfo();
                        });
                },
                GetTaskinfo: function (e, a) {
                    u.a.post("task/getTaskinfo", { id: e }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                GetTaskRecord: function (e, a) {
                    u.a.post("task/taskOrderlist", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                SubmitTask: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("task/taskOrderSubmit", e).then(({ data: e }) => {
                            a && a(e), g.Toast(e.code_dec);
                        });
                },
                CancelTask: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("task/revokeTask", { id: e }).then(({ data: e }) => {
                            a && a(e), g.Toast(e.code_dec);
                        });
                },
                TaskOrderInfo: function (e, a) {
                    u.a.post("task/taskorderinfo", { order_id: e }).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                AuditTask: function (e, a) {
                    g.Loading(m.b.t("dialog[2]")),
                        u.a.post("task/taskOrderTrial", e).then(({ data: e }) => {
                            a && a(e), g.Toast(e.code_dec);
                        });
                },
                DailyReport: function (a) {
                    u.a.post("User/dailyReport").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                CreditList: function (a) {
                    u.a.post("user/getUserCreditList").then(({ data: e }) => {
                        a && a(e);
                    });
                },
                TeamReport: function (e, a) {
                    u.a.post("user/teamReport", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                newLc: function (e, a) {
                    u.a.post("Yuebao/getYuebaoList", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                newLcTj: function (e, a) {
                    u.a.post("Yuebao/payYuebao", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                newList: function (e, a) {
                    u.a.post("Yuebaojilu/getYuebaojiluList", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
                yeb: function (e, a) {
                    u.a.post("Yuebao/showMoney", e).then(({ data: e }) => {
                        a && a(e);
                    });
                },
            },
            f = {
                MoneyFormat: function (e) {
                    return (e / 1e4).toLocaleString();
                },
                KeepDecimal: function (e, a) {
                    var n = 1;
                    switch (a) {
                        case 1:
                            n = 10;
                            break;
                        case 2:
                            n = 100;
                            break;
                        case 3:
                            n = 1e3;
                            break;
                        case 4:
                            n = 1e4;
                    }
                    return Math.round(e * n) / n;
                },
                CopyText: function (e, a) {
                    if (window.plus) {
                        var n = document.getElementById(e).innerText;
                        switch (plus.os.name) {
                            case "Android":
                                var t = plus.android.importClass("android.content.Context"),
                                    t = plus.android.runtimeMainActivity().getSystemService(t.CLIPBOARD_SERVICE);
                                plus.android.invoke(t, "setText", n);
                                break;
                            case "iOS":
                                (t = plus.ios.importClass("UIPasteboard").generalPasteboard()).setValueforPasteboardType(n, "public.utf8-plain-text"), t.valueForPasteboardType("public.utf8-plain-text");
                        }
                        g.Toast(m.b.t("dialog[3]"));
                    } else {
                        var i;
                        navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)
                            ? (window.getSelection().removeAllRanges(),
                              (i = document.getElementById(e)),
                              (e = document.createRange()).selectNode(i),
                              window.getSelection().addRange(e),
                              document.execCommand("copy") ? g.Toast(m.b.t("dialog[3]")) : g.Toast(m.b.t("dialog[4]")),
                              window.getSelection().removeAllRanges())
                            : ((i = document.getElementById(a)).select(), document.execCommand("Copy"), g.Toast(m.b.t("dialog[3]")));
                    }
                },
                SortBy: function (e, n, t) {
                    return e.sort(function (e, a) {
                        return n ? (t ? a[n] - e[n] : e[n] - a[n]) : t ? a - e : e - a;
                    });
                },
                DateFormat: function (e, a) {
                    let n,
                        t = {
                            "Y+": (a = new Date(a)).getFullYear().toString(),
                            "M+": (a.getMonth() + 1).toString(),
                            "D+": a.getDate().toString(),
                            "h+": a.getHours().toString(),
                            "m+": a.getMinutes().toString(),
                            "s+": a.getSeconds().toString(),
                            "S+": a.getMilliseconds().toString(),
                        };
                    for (var i in t) (n = new RegExp("(" + i + ")").exec(e)), n && (e = e.replace(n[1], 1 == n[1].length ? t[i] : t[i].padStart(n[1].length, "0")));
                    return e;
                },
                AddSubDate: function (e) {
                    var a = new Date();
                    return a.setDate(a.getDate() + e), a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-" + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate());
                },
                CompressImg: function (s, e, c, d) {
                    var u = new Image();
                    u.src = e;
                    var h = document.createElement("canvas"),
                        m = h.getContext("2d");
                    u.onload = function () {
                        var e = this.width,
                            a = this.height,
                            n = c,
                            t = e,
                            i = a;
                        (c < e || n < a) && (c / n < e / a ? ((t = c), (i = Math.round(c * (a / e)))) : ((i = n), (t = Math.round(n * (e / a))))), (h.width = t), (h.height = i), m.clearRect(0, 0, t, i), m.drawImage(u, 0, 0, t, i);
                        for (var i = h.toDataURL(s).split(","), o = atob(i[1]), r = o.length, l = new Uint8Array(r); r--; ) l[r] = o.charCodeAt(r);
                        d(new File([l], "", { type: s }));
                    };
                },
                OpenUrl: function (e) {
                    window.plus ? plus.runtime.openURL(e) : window.open(e);
                },
            },
            k = (n("157a"), n("6672"), n("1fba")),
            v = n("4d1d"),
            S = n("3d34"),
            y = n("1157"),
            I = n.n(y),
            C = {
                KeepDecimal: function (e, a) {
                    var n = 1;
                    switch (a) {
                        case 1:
                            n = 10;
                            break;
                        case 2:
                            n = 100;
                            break;
                        case 3:
                            n = 1e3;
                            break;
                        case 4:
                            n = 1e4;
                    }
                    return Math.round(e * n) / n;
                },
                CopyText: function (e, a, n) {
                    var t;
                    navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)
                        ? (window.getSelection().removeAllRanges(),
                          (t = document.getElementById(e)),
                          (e = document.createRange()).selectNode(t),
                          window.getSelection().addRange(e),
                          document.execCommand("copy")
                              ? p.a.alert({ className: "D-confirm", message: "复制" + (1 == n ? "密群号" : 2 == n ? "推广链接" : "密聊号") + "成功" })
                              : p.a.alert({ className: "D-confirm", message: "IOS系统不支持，请长按链接自行复制" }),
                          window.getSelection().removeAllRanges())
                        : ((t = document.getElementById(a)).select(), document.execCommand("Copy"), p.a.alert({ className: "D-confirm", message: "复制" + (1 == n ? "密群号" : 2 == n ? "推广链接" : "密聊号") + "成功" }));
                },
                SortBy: function (e, n, t) {
                    return e.sort(function (e, a) {
                        return n ? (t ? a[n] - e[n] : e[n] - a[n]) : t ? a - e : e - a;
                    });
                },
                CompressImg: function (s, e, c, d) {
                    var u, h, m;
                    s.match(/.png|.jpg|.jpeg|.gif/)
                        ? (((u = new Image()).src = e),
                          (h = document.createElement("canvas")),
                          (m = h.getContext("2d")),
                          (u.onload = function () {
                              var e = this.width,
                                  a = this.height,
                                  n = c,
                                  t = e,
                                  i = a;
                              (c < e || n < a) && (c / n < e / a ? ((t = c), (i = Math.round(c * (a / e)))) : ((i = n), (t = Math.round(n * (e / a))))), (h.width = t), (h.height = i), m.clearRect(0, 0, t, i), m.drawImage(u, 0, 0, t, i);
                              for (var i = h.toDataURL(s).split(","), o = atob(i[1]), r = o.length, l = new Uint8Array(r); r--; ) l[r] = o.charCodeAt(r);
                              d(new File([l], "", { type: s }));
                          }))
                        : p.a.alert({ className: "D-confirm", message: "只能上传图片" });
                },
                CompressVideo: function (i, e, o) {
                    var a;
                    i.match(/.mp4|.3GP|.rmvb|.rm|.mov|.AVI/)
                        ? ((a = new FileReader()).readAsDataURL(e),
                          (a.onload = function (e) {
                              for (var e = e.target.result.split(","), a = atob(e[1]), n = a.length, t = new Uint8Array(n); n--; ) t[n] = a.charCodeAt(n);
                              o(new File([t], "", { type: i }));
                          }))
                        : p.a.alert({ className: "D-confirm", message: "只能上传视频" });
                },
                LongTap: function (e, a) {
                    var n = "",
                        t = !1;
                    I()("body").on("touchstart", e, (e) => {
                        clearTimeout(n),
                            (n = setTimeout(() => {
                                t = !0;
                            }, 600));
                    }),
                        I()("body").on("mousedown", e, (e) => {
                            clearTimeout(n),
                                (n = setTimeout(() => {
                                    t = !0;
                                }, 600));
                        }),
                        I()("body").on("touchmove", e, (e) => {
                            clearTimeout(n), (t = !1), (n = ""), e.preventDefault();
                        }),
                        I()("body").on("mousemove", e, (e) => {
                            clearTimeout(n), (t = !1), (n = ""), e.preventDefault();
                        }),
                        I()("body").on("touchend", e, (e) => (a(t ? { state: "long", event: e } : { state: "click", event: e }), (t = !1), clearTimeout(n), !1)),
                        I()("body").on("mouseup", e, (e) => (a(t ? { state: "long", event: e } : { state: "click", event: e }), (t = !1), clearTimeout(n), !1));
                },
                DateFormat: function (e, a) {
                    let n,
                        t = {
                            "Y+": a.getFullYear().toString(),
                            "M+": (a.getMonth() + 1).toString(),
                            "D+": a.getDate().toString(),
                            "h+": a.getHours().toString(),
                            "m+": a.getMinutes().toString(),
                            "s+": a.getSeconds().toString(),
                            "S+": a.getMilliseconds().toString(),
                        };
                    for (var i in t) (n = new RegExp("(" + i + ")").exec(e)), n && (e = e.replace(n[1], 1 == n[1].length ? t[i] : t[i].padStart(n[1].length, "0")));
                    return e;
                },
                TimeFormat: function (e) {
                    var a = Math.floor(e / 3600),
                        n = Math.floor((e % 3600) / 60);
                    return (a ? (9 < a ? a : "0" + a) + ":" : "") + (9 < n ? n : "0" + n) + ":" + (9 < (e = Math.round(e % 60)) ? e : "0" + e);
                },
            },
            P = {
                InitScrollWrap: function (e, a) {
                    (a = document.body.offsetHeight - (I()(e).find(".van-nav-bar").outerHeight() || 0) - (I()(e).find(".SearchBar").outerHeight() || 0) - (I()(e).find(".TabBar").outerHeight() || 0) - (a || 0)),
                        I()(e).find(".Scroll-Wrap").height(a),
                        this.InitScroll(e);
                },
                InitScroll: function (e) {
                    I()(e).find(".Scroll-Con").height("auto");
                    var a = I()(e).find(".Scroll-Wrap").outerHeight();
                    I()(e).find(".Scroll-Con").outerHeight() < a &&
                        I()(e)
                            .find(".Scroll-Con")
                            .height(a + 0.5);
                },
            },
            a = {
                name: "NoContent",
                components: {},
                props: { msg: { type: Array, default: () => ["有朋友，不孤单", "邀请朋友加入密聊"] } },
                data: function () {
                    return {};
                },
                computed: {},
                watch: {},
                created: function () {},
                mounted: function () {},
                activated: function () {},
                destroyed: function () {},
                methods: {},
            },
            i = Object(o.a)(
                a,
                function () {
                    var e = this,
                        a = e.$createElement;
                    return (a = e._self._c || a)("div", { staticClass: "NoContent" }, [a("img", { attrs: { src: "./static/miliao/icon/icon-nofriend.svg" } }), a("h2", [e._v(e._s(e.msg[0]))]), a("p", [e._v(e._s(e.msg[1]))])]);
                },
                [],
                !1,
                null,
                null,
                null
            ).exports,
            y =
                (n("c474"),
                function () {
                    var a = this,
                        e = a.$createElement,
                        n = a._self._c || e;
                    return n(
                        "van-tabbar",
                        {
                            attrs: { "safe-area-inset-bottom": "", border: !1, "inactive-color": "#fff", "z-index": "99", fixed: !1 },
                            model: {
                                value: a.tabbarIndex,
                                callback: function (e) {
                                    a.tabbarIndex = e;
                                },
                                expression: "tabbarIndex",
                            },
                        },
                        [
                            n(
                                "van-tabbar-item",
                                {
                                    attrs: { to: "/", name: "home" },
                                    scopedSlots: a._u([
                                        {
                                            key: "icon",
                                            fn: function (e) {
                                                return n("img", { attrs: { src: e.active ? a.icon_nav1.active : a.icon_nav1.normal, size: "30" } });
                                            },
                                        },
                                    ]),
                                },
                                [a._v(" " + a._s(a.$t("home.tabBar[0]")) + " ")]
                            ),
                            n(
                                "van-tabbar-item",
                                {
                                    attrs: { to: "/mytask", name: "task" },
                                    scopedSlots: a._u([
                                        {
                                            key: "icon",
                                            fn: function (e) {
                                                return n("img", { attrs: { src: e.active ? a.icon_nav2.active : a.icon_nav2.normal } });
                                            },
                                        },
                                    ]),
                                },
                                [a._v(" " + a._s(a.$t("home.tabBar[1]")) + " ")]
                            ),
                            n(
                                "van-tabbar-item",
                                {
                                    attrs: { to: "/vip", name: "vip" },
                                    scopedSlots: a._u([
                                        {
                                            key: "icon",
                                            fn: function (e) {
                                                return n("img", { attrs: { src: e.active ? a.icon_nav4.active : a.icon_nav4.normal } });
                                            },
                                        },
                                    ]),
                                },
                                [a._v(" " + a._s(a.$t("home.tabBar[2]")) + " ")]
                            ),
                            n(
                                "van-tabbar-item",
                                {
                                    attrs: { to: "/profit", name: "profit" },
                                    scopedSlots: a._u([
                                        {
                                            key: "icon",
                                            fn: function (e) {
                                                return n("img", { attrs: { src: e.active ? a.icon_nav3.active : a.icon_nav3.normal } });
                                            },
                                        },
                                    ]),
                                },
                                [a._v(" " + a._s(a.$t("home.tabBar[3]")) + " ")]
                            ),
                            n(
                                "van-tabbar-item",
                                {
                                    attrs: { to: "/user", name: "user" },
                                    scopedSlots: a._u([
                                        {
                                            key: "icon",
                                            fn: function (e) {
                                                return n("img", { attrs: { src: e.active ? a.icon_nav5.active : a.icon_nav5.normal } });
                                            },
                                        },
                                    ]),
                                },
                                [a._v(" " + a._s(a.$t("home.tabBar[4]")) + " ")]
                            ),
                        ],
                        1
                    );
                }),
            a = {
                name: "Footer",
                components: {},
                props: [],
                data: function () {
                    return {
                        tabbarIndex: this.$route.matched[0].meta.active,
                        icon_nav1: { normal: "./static/icon/index.png", active: "./static/icon/index_select.png" },
                        icon_nav2: { normal: "./static/icon/task.png", active: "./static/icon/task_select.png" },
                        icon_nav3: { normal: "./static/icon/profit.png", active: "./static/icon/profit_select.png" },
                        icon_nav4: { normal: "./static/icon/vip.png", active: "./static/icon/vip_select.png" },
                        icon_nav5: { normal: "./static/icon/user.png", active: "./static/icon/user_select.png" },
                    };
                },
                computed: {},
                watch: {},
                created: function () {},
                mounted: function () {},
                activated: function () {},
                destroyed: function () {},
                methods: {},
            },
            y = (n("6fab"), Object(o.a)(a, y, [], !1, null, "11df6033", null).exports);
        (t.a.prototype.$MiBScroll = k.a),
            (t.a.prototype.$MiModel = v.a),
            (t.a.prototype.$MiDialog = S.a),
            (t.a.prototype.$MiUtil = C),
            (t.a.prototype.$MiInitial = P),
            t.a.component("MiNoContent", i),
            t.a.use(c.a),
            (t.a.prototype.$SetLanguage = m.a),
            (t.a.prototype.$ImagePreview = d.a),
            (t.a.prototype.$Model = b),
            (t.a.prototype.$Dialog = g),
            (t.a.prototype.$Util = f),
            (t.a.prototype.$AppInit = !1),
            (t.a.prototype.$domWidth = document.documentElement.clientWidth),
            (t.a.config.productionTip = !1),
            t.a.component("Footer", y),
            l.a.beforeEach((e, a, n) => {
                (document.title = "en-US" == m.b.locale ? "Fun Sharing" : "Lotus98"),
                    "login" != a.name && "register" != a.name ? (localStorage.FromPage = a.fullPath) : localStorage.removeItem("FromPage"),
                    "login" != e.name && !localStorage.Token && e.matched.some((e) => e.meta.requiresAuth) ? n("/login") : n();
            }),
            new t.a({ router: l.a, store: s.a, i18n: m.b, render: (e) => e(r) }).$mount("#app");
    },
    "5d8f": function (e, l, s) {
        "use strict";
        (function (a) {
            var e = s("bc3a"),
                n = s.n(e),
                t = s("a18c"),
                i = s("4d1d"),
                o = s("d399"),
                e = n.a.create({ baseURL: ChatUrl + "/chat/", headers: { "Content-Type": "application/x-www-form-urlencoded" } }),
                r = n.a.CancelToken.source();
            e.interceptors.request.use(
                (e) => ((e.cancelToken = r.token), (e.data = e.data || {}), (e.data.sign = SiteSign), e.noLogin || ((e.data.uid = localStorage.userUid), (e.data.token = localStorage.userToken)), e.fromData || (e.data = a.param(e.data)), e),
                (e) => Promise.reject(e)
            ),
                e.interceptors.response.use(
                    (e) => (
                        e.request.responseURL.slice(e.request.responseURL.lastIndexOf("/")),
                        200 < e.data.code &&
                            e.data.code < 206 &&
                            (("sendMsg" == t.a.history.current.name && 1 != t.a.history.current.query.chat_type) ||
                                (localStorage.removeItem("Home_Active"),
                                i.a.PhoneLogin({ username: localStorage.MiName }, (e) => {
                                    1 == e.code && (i.a.GetUserData(), t.a.push({ name: "miliao" }));
                                }))),
                        e
                    ),
                    (e) => {
                        (e = /<h1>(.*?)<\/h1>/gi.exec(e.response.data)[1]), Object(o.a)({ message: e });
                    }
                ),
                (l.a = e);
        }.call(this, s("1157")));
    },
    6672: function (e, a, n) {},
    "6fab": function (e, a, n) {
        "use strict";
        var t = n("8859");
        n.n(t).a;
    },
    "79a2": function (e, a, n) {
        "use strict";
        (function (h) {
            a.a = {
                name: "App",
                provide: function () {
                    return { reloadHtml: this.reloadHtml };
                },
                components: {},
                props: [],
                data: function () {
                    return {
                        percentNum: 0,
                        showEntrance: !1,
                        networkState: 1,
                        isQuit: !1,
                        isView: !0,
                        isRouterAlive: !0,
                        showNotice: !1,
                        isInit: !1,
                        showMiliao: !1,
                        minMiliao: !1,
                        translateX: "0",
                        translateY: "-150",
                        isCancel: !1,
                        showService: !0,
                    };
                },
                computed: {},
                watch: {
                    $route: function (e, a) {
                        (this.isQuit = !1), "miliao" == e.meta.active ? (this.showService = !1) : ((localStorage.BackUrl = e.name), (this.showService = !0)), "line" == a.name && this.$Model.GetBackData();
                    },
                },
                created: function () {
                    this.$Model.GetBackData(), (this.isInit = !0);
                },
                mounted: function () {
                    h("body").on("click", "#MiLineBtn", () => {
                        this.openMiliao();
                    }),
                        h("body").on("click", "#CloseAlert", () => {
                            this.$dialog.close();
                        }),
                        document.addEventListener("plusready", () => {
                            document.addEventListener(
                                "pause",
                                () => {
                                    (this.isView = !1), console.log("后台");
                                },
                                !1
                            ),
                                document.addEventListener(
                                    "resume",
                                    () => {
                                        (this.isView = !0), console.log("前台");
                                    },
                                    !1
                                ),
                                document.addEventListener(
                                    "newintent",
                                    () => {
                                        var e = plus.runtime.arguments;
                                        e && this.$router.push(e), console.log(e);
                                    },
                                    !1
                                ),
                                (this.winH = document.body.clientHeight),
                                plus.runtime.getProperty(plus.runtime.appid, (e) => {
                                    (localStorage.AppVersion = e.version), r(e.version);
                                }),
                                "iOS" == plus.os.name && e(),
                                plus.key.addEventListener("backbutton", () => {
                                    l();
                                });
                        });
                    let i = 0;
                    var o = UpdateUrl[0];
                    const r = (t) => {
                            h.ajax({
                                url: o,
                                dataType: "json",
                                data: { version: t },
                                timeout: 2e3,
                                success: (e) => {
                                    0 == e.code &&
                                        this.$Dialog.Confirm(e.code_dec, () => {
                                            a(e.url);
                                        });
                                },
                                error: (e, a, n) => {
                                    (i += 1), i < 2 ? r(t) : o != UpdateUrl[1] ? ((i = 0), (o = UpdateUrl[1]), r(t)) : console.log("网络错误，无法更新");
                                },
                            });
                        },
                        a = (e) => {
                            const n = this.$toast.loading({ duration: 0, forbidClick: !0, message: "准备下载更新..." });
                            (e = plus.downloader.createDownload(e, { filename: "_doc/update/" }, (e, a) => {
                                200 == a
                                    ? (console.log("下载更新成功：" + e.filename),
                                      this.$toast.clear(),
                                      this.$Dialog.Confirm("下载完成，是否安装更新包", () => {
                                          t(e.filename);
                                      }))
                                    : (console.log("下载更新失败"), this.$toast.fail("下载更新失败"));
                            })).addEventListener("statechanged", (e, a) => {
                                switch (e.state) {
                                    case 2:
                                        n.message = "已下载0%";
                                    case 3:
                                        (this.percentNum = parseInt((e.downloadedSize / e.totalSize) * 100)), (n.message = "已下载" + this.percentNum + "%");
                                }
                            }),
                                e.start();
                        },
                        t = (e) => {
                            this.$toast.loading({ duration: 0, forbidClick: !0, message: "正在更新..." }),
                                plus.runtime.install(
                                    e,
                                    {},
                                    () => {
                                        console.log("安装更新文件成功"),
                                            localStorage.clear(),
                                            this.$toast.success({
                                                forbidClick: !0,
                                                message: "更新成功，即将重启",
                                                onClose: function () {
                                                    plus.runtime.restart();
                                                },
                                            });
                                    },
                                    (e) => {
                                        console.log("安装更新文件失败[" + e.code + "]：" + e.message), this.$toast.success("更新失败");
                                    }
                                );
                        },
                        e = () => {
                            var a,
                                n = 0;
                            document.addEventListener(
                                "touchstart",
                                (e) => {
                                    1 == e.targetTouches.length && ((e = e.targetTouches[0]), (n = e.screenX));
                                },
                                { passive: !1 }
                            ),
                                document.addEventListener(
                                    "touchend",
                                    (e) => {
                                        1 == e.changedTouches.length && ((e = e.changedTouches[0]), (a = e.screenX), n <= 20 && 80 <= a && l());
                                    },
                                    { passive: !1 }
                                );
                        },
                        l = () => {
                            "home" == this.$route.name
                                ? this.isQuit
                                    ? (plus.runtime.quit(), (this.isReconnect = !1), this.Socket && this.Socket.close())
                                    : (this.$toast({ message: "再按一次退出应用", position: "bottom" }), (this.isQuit = !0))
                                : h(".van-nav-bar__left").length
                                ? h(".van-nav-bar__left").click()
                                : this.$router.go(-1);
                        };
                    var n = document.getElementById("Service"),
                        s = !1,
                        c = document.documentElement.clientHeight,
                        d = document.documentElement.clientWidth,
                        u = d;
                    n.addEventListener("touchstart", (e) => {
                        (s = !0), n.setCapture && n.setCapture(), h("#Service").removeClass("move");
                    }),
                        n.addEventListener("touchmove", (e) => {
                            h("#Service").removeClass("move"),
                                e.preventDefault(),
                                (e = e.touches ? e.touches[0] : event),
                                s &&
                                    (e.pageY < n.clientHeight / 2 ? (n.style.bottom = c - n.clientHeight + "px") : e.pageY > c - 5 - n.clientHeight / 2 ? (n.style.bottom = "5px") : (n.style.bottom = c - e.pageY - n.clientHeight / 2 + "px"),
                                    e.pageX < n.clientWidth / 2 ? (n.style.right = d - n.clientWidth + "px") : e.pageX > d - n.clientWidth / 2 ? (n.style.right = "0px") : (n.style.right = d - e.pageX - n.clientWidth / 2 + "px"),
                                    (u = e.pageX));
                        }),
                        n.addEventListener("touchend", (e) => {
                            (s = !1), h("#Service").addClass("move"), (n.style.right = d / 2 < u ? 0 : d - n.clientWidth + "px");
                        });
                },
                activated: function () {},
                destroyed: function () {},
                methods: {
                    reloadHtml: function () {
                        (this.isRouterAlive = !1),
                            this.$nextTick(function () {
                                this.isRouterAlive = !0;
                            });
                    },
                    dragElement: function () {
                        var a,
                            n,
                            t,
                            i,
                            o,
                            r,
                            l = document.getElementById("MiLine"),
                            s = !1;
                        l.addEventListener("touchstart", (e) => {
                            (e = e.touches ? e.touches[0] : event),
                                (a = h("#MiLine").outerWidth() - h(window).width()),
                                (n = h("#MiLine").outerHeight() - h(window).height()),
                                (t = Number(this.translateX)),
                                (i = Number(this.translateY)),
                                (s = !0),
                                (o = e.clientX),
                                (r = e.clientY),
                                l.setCapture && l.setCapture();
                        }),
                            l.addEventListener("touchmove", (e) => {
                                e.preventDefault(),
                                    (e = e.touches ? e.touches[0] : event),
                                    s &&
                                        (h("#MiLine").addClass("touchmove"),
                                        (this.translateX = t + e.clientX - o),
                                        (this.translateY = i + e.clientY - r),
                                        (this.translateX = this.translateX < a ? a : this.translateX),
                                        (this.translateX = 0 <= this.translateX ? 0 : this.translateX),
                                        (this.translateY = this.translateY < n ? n : this.translateY),
                                        (this.translateY = 0 <= this.translateY ? 0 : this.translateY),
                                        (l.style.transform = "translate3d(" + this.translateX + "px," + this.translateY + "px,0)"),
                                        (l.style.WebkitTransform = "translate3d(" + this.translateX + "px," + this.translateY + "px,0)"),
                                        h("#CancelMiLine").addClass("open"),
                                        (e = Math.abs(this.translateY)),
                                        h("#CancelMiLine").removeClass("on"),
                                        (this.isCancel = !1),
                                        e < h("#CancelMiLine").outerHeight() / 1.5 && (h("#CancelMiLine").addClass("on"), (this.isCancel = !0)));
                            }),
                            document.addEventListener("touchend", (e) => {
                                h("#MiLine").removeClass("touchmove"), h("#CancelMiLine").removeClass("open"), (s = !1), this.isCancel && this.clearMiliao(), l.releaseCapture && l.releaseCapture();
                            });
                    },
                    clearMiliao: function () {
                        (this.showMiliao = !1), (this.minMiliao = !1), (this.translateX = "0"), (this.translateY = "-150"), (this.isCancel = !1), localStorage.removeItem("MiLogin");
                    },
                    openMiliao: function () {
                        this.InitData.setting.chat_url
                            ? this.$Util.OpenUrl(this.InitData.setting.chat_url)
                            : localStorage.Token
                            ? this.showMiliao
                                ? (this.$router.push({ name: "miliao" }), (this.minMiliao = !1))
                                : (localStorage.removeItem("Home_Active"),
                                  this.$MiModel.PhoneLogin({ username: this.UserInfo.username, susername: this.UserInfo.susername || "" }, (e) => {
                                      this.$toast.clear(),
                                          1 == e.code &&
                                              ((this.showMiliao = !0),
                                              (this.minMiliao = !1),
                                              this.$router.push({ name: "miliao" }),
                                              this.$nextTick(() => {
                                                  this.dragElement(),
                                                      h("#MiLine")
                                                          .removeClass("open")
                                                          .css({ transform: "translate3d(" + this.translateX + "px," + this.translateY + "px,0)", webkitTransform: "translate3d(" + this.translateX + "px," + this.translateY + "px,0)" });
                                              }));
                                  }))
                            : (this.clearMiliao(), this.$router.push("/login"));
                    },
                },
            };
        }.call(this, n("1157")));
    },
    8859: function (e, a, n) {},
    "9c51": function (e, a, n) {
        "use strict";
        (a.__esModule = !0),
            (a.default = void 0),
            (a.default = {
                name: "Tên",
                tel: "điện thoại",
                save: "tiết kiệm",
                confirm: "xác nhận",
                cancel: "hủy bỏ",
                delete: "xóa bỏ",
                complete: "thực hiện",
                loading: "Đang tải...",
                telEmpty: "Vui lòng điền vào điện thoại",
                nameEmpty: "Xin vui lòng điền tên của bạn",
                nameInvalid: "Vui lòng nhập đúng tên",
                confirmDelete: "Bạn chắc chắn muốn xóa nó",
                telInvalid: "Xin vui lòng nhập một số điện thoại hợp lệ",
                vanCalendar: {
                    end: "Kết thúc",
                    start: "Khởi đầu",
                    title: "Lựa chọn ngày",
                    confirm: "Xác nhận",
                    startEnd: "bắt đầu kết thúc",
                    weekdays: ["Ngày", "một", "hai", "ba", "bốn", "năm", "sáu"],
                    monthTitle: function (e, a) {
                        return e + "/" + a;
                    },
                    rangePrompt: function (e) {
                        return "Chọn ngày không thể vượt quá " + e + " ngày";
                    },
                },
                vanContactCard: { addText: "Thêm danh bạ" },
                vanContactList: { addText: "Địa chỉ liên lạc mới" },
                vanPagination: { prev: "Trang trước", next: "Trang tiếp theo" },
                vanPullRefresh: { pulling: "Kéo xuống để làm mới...", loosing: "Phát hành để làm mới..." },
                vanSubmitBar: { label: "toàn bộ:" },
                vanCoupon: {
                    unlimited: "Không có ngưỡng sử dụng",
                    discount: function (e) {
                        return e + "% off";
                    },
                    condition: function (e) {
                        return "Có sẵn trên" + e + "nhân dân tệ";
                    },
                },
                vanCouponCell: {
                    title: "phiếu mua hàng",
                    tips: "Không có sẵn",
                    count: function (e) {
                        return e + "ảnh có sẵn";
                    },
                },
                vanCouponList: { empty: "Không có phiếu giảm giá", exchange: "đổi", close: "Không có phiếu giảm giá", enable: "Có sẵn", disabled: "không có sẵn", placeholder: "Vui lòng nhập mã phiếu giảm giá" },
                vanAddressEdit: {
                    area: "khu vực",
                    postal: "mã bưu điện",
                    areaEmpty: "vui lòng chọn khu vực",
                    addressEmpty: "Vui lòng điền địa chỉ chi tiết",
                    postalEmpty: "Định dạng mã bưu chính không chính xác",
                    defaultAddress: "Đặt làm địa chỉ giao hàng mặc định",
                    telPlaceholder: "Số điện thoại di động của người nhận hàng",
                    namePlaceholder: "Tên người nhận hàng",
                    areaPlaceholder: "Chọn tỉnh / thành phố / huyện",
                },
                vanAddressEditDetail: { label: "Địa chỉ", placeholder: "Số đường, số phòng và các thông tin khác" },
                vanAddressList: { add: "Thêm địa chỉ" },
            });
    },
    a18c: function (e, a, n) {
        "use strict";
        var t = n("2b0e"),
            i = n("8c4f");
        t.a.use(i.a);
        const o = i.a.prototype.push;
        (i.a.prototype.push = function (e) {
            return o.call(this, e).catch((e) => e);
        }),
            (i = new i.a({
                routes: [
                    { path: "/help", name: "help", component: () => n.e("chunk-7b764b50").then(n.bind(null, "c3ef")), meta: { title: "帮助手册", active: "help" } },
                    { path: "/article/:articleType/:articleId?", name: "article", component: () => n.e("chunk-22dd5234").then(n.bind(null, "3ad6")), meta: { title: "内容", active: "article" }, props: !0 },
                    { path: "/service", name: "service", component: () => n.e("chunk-5fa78ca5").then(n.bind(null, "e2f8")), meta: { title: "在线客服", active: "service" } },
                    { path: "/line", name: "line", component: () => n.e("chunk-02ad8ac8").then(n.bind(null, "416d")), meta: { title: "切换线路", active: "line" } },
                    { path: "/language", name: "language", component: () => n.e("chunk-37d998fd").then(n.bind(null, "f475")), meta: { title: "切换语言", active: "language" } },
                    { path: "/login", name: "login", component: () => n.e("chunk-850b8a0c").then(n.bind(null, "a55b")), meta: { title: "用户登录", active: "login" } },
                    { path: "/register/:recommendId?", name: "register", component: () => n.e("chunk-d296175a").then(n.bind(null, "73cf")), meta: { title: "用户注册", active: "register" }, props: !0 },
                    { path: "/", name: "home", component: () => n.e("chunk-263711a6").then(n.bind(null, "bb51")), meta: { title: "首页", active: "home" } },
                    { path: "/task/:tabsActive?", name: "task", component: () => n.e("chunk-35d3d33b").then(n.bind(null, "c430")), meta: { title: "任务", active: "task" }, props: !0 },
                    { path: "/taskList/:taskType/:taskGrade", name: "taskList", component: () => n.e("chunk-9979c9f2").then(n.bind(null, "93dc")), meta: { title: "任务列表", active: "task" }, props: !0 },
                    { path: "/taskShow/:taskId", name: "taskShow", component: () => n.e("chunk-0afe8bb1").then(n.bind(null, "32bb")), meta: { title: "任务详情", active: "task" }, props: !0 },
                    { path: "/vip", name: "vip", component: () => n.e("chunk-6488c951").then(n.bind(null, "e690")), meta: { title: "VIP", active: "vip" } },
                    { path: "/profit", name: "profit", component: () => n.e("chunk-2d0c11c5").then(n.bind(null, "453a")), meta: { title: "收益", active: "profit" } },
                    { path: "/myTask/:taskState?", name: "myTask", component: () => n.e("chunk-7e1b2c58").then(n.bind(null, "e29c")), meta: { title: "我的任务", requiresAuth: !0, active: "myTask" }, props: !0 },
                    { path: "/appDown", name: "appDown", component: () => Promise.all([n.e("chunk-2d21d0c2"), n.e("chunk-6bc6d4c9")]).then(n.bind(null, "86f6")), meta: { title: "APP下载", active: "appDown" } },
                    {
                        path: "/user",
                        name: "",
                        component: () => n.e("chunk-2d0cf74f").then(n.bind(null, "6494")),
                        meta: { requiresAuth: !0, title: "会员中心", active: "user" },
                        children: [
                            { path: "", name: "user", component: () => n.e("chunk-129ed1bb").then(n.bind(null, "e382")), meta: { title: "会员中心", active: "user" } },
                            { path: "info", name: "info", component: () => n.e("chunk-1244fa68").then(n.bind(null, "1d46")), meta: { title: "个人信息", active: "user" } },
                            { path: "set/:setType", name: "set", component: () => n.e("chunk-3bffbb60").then(n.bind(null, "26c8")), meta: { title: "用户设置", active: "user" }, props: !0 },
                            { path: "postTask/:taskId?", name: "postTask", component: () => n.e("chunk-9a1ce4de").then(n.bind(null, "6940")), meta: { title: "发布任务" }, props: !0 },
                            { path: "postRecord/:taskType?", name: "postRecord", component: () => n.e("chunk-1fd34ccf").then(n.bind(null, "ec0f")), meta: { title: "发布管理" }, props: !0 },
                            { path: "taskRecord/:taskState?", name: "taskRecord", component: () => n.e("chunk-4ce7385c").then(n.bind(null, "9728")), meta: { title: "任务记录" }, props: !0 },
                            { path: "taskInfo/:taskId", name: "taskInfo", component: () => n.e("chunk-1a4c09d8").then(n.bind(null, "8496")), meta: { title: "任务详情" }, props: !0 },
                            { path: "auditRecord/:taskState?", name: "auditRecord", component: () => n.e("chunk-09d568ae").then(n.bind(null, "5771")), meta: { title: "审核任务" }, props: !0 },
                            { path: "auditInfo/:auditId", name: "auditInfo", component: () => n.e("chunk-6c5e4628").then(n.bind(null, "15d8")), meta: { title: "审核详情" }, props: !0 },
                            { path: "dayReport", name: "dayReport", component: () => n.e("chunk-f74bc16a").then(n.bind(null, "8553")), meta: { title: "日结报表", active: "user" } },
                            { path: "teamReport", name: "teamReport", component: () => n.e("chunk-4e0a8c26").then(n.bind(null, "6bb2")), meta: { title: "团队报表", active: "user" } },
                            { path: "fundRecord/:fundState?", name: "fundRecord", component: () => n.e("chunk-b38aec8c").then(n.bind(null, "f16f")), meta: { title: "账变记录", active: "user" }, props: !0 },
                            { path: "bankCard", name: "bankCard", component: () => n.e("chunk-8f623f66").then(n.bind(null, "4ca0")), meta: { title: "我的银行卡", active: "user" } },
                            { path: "wallet/:walletType?", name: "wallet", component: () => n.e("chunk-0e463468").then(n.bind(null, "968b")), meta: { title: "我的钱包", active: "user" }, props: !0 },
                            { path: "recharge/:rechargeId?", name: "recharge", component: () => n.e("chunk-954c2efa").then(n.bind(null, "6a23")), meta: { title: "我要充值", active: "user" }, props: !0 },
                            { path: "promote", name: "promote", component: () => Promise.all([n.e("chunk-2d21d0c2"), n.e("chunk-4aedb4c8")]).then(n.bind(null, "bb0a")), meta: { title: "我的推广", active: "user" } },
                            { path: "bindAccount", name: "bindAccount", component: () => n.e("chunk-9dca46e0").then(n.bind(null, "4a2a")), meta: { title: "绑定账号", active: "user" } },
                            { path: "credit", name: "credit", component: () => n.e("chunk-04971649").then(n.bind(null, "7657")), meta: { title: "信用中心", active: "user" } },
                            { path: "robot", name: "robot", component: () => n.e("chunk-f1b051bc").then(n.bind(null, "115a")), meta: { title: "云管家", active: "user" } },
                            { path: "newLc", name: "newLc", component: () => n.e("chunk-7111ddf3").then(n.bind(null, "fd16")), meta: { title: "余额理财", active: "user" } },
                            { path: "newlist", name: "newlist", component: () => n.e("chunk-2ece0212").then(n.bind(null, "b267")), meta: { title: "购买记录", active: "user" } },
                        ],
                    },
                    { path: "/404", name: "404" },
                    { path: "*", redirect: "/404" },
                    {
                        path: "/miliao",
                        name: "",
                        component: () => n.e("chunk-2d216bf6").then(n.bind(null, "c47f")),
                        meta: { title: "密聊", active: "miliao" },
                        children: [
                            { path: "", name: "miliao", component: () => n.e("chunk-025a12fe").then(n.bind(null, "91e2")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "scan", name: "scan", component: () => n.e("chunk-0b3b804e").then(n.bind(null, "944d")), meta: { active: "miliao" } },
                            { path: "friendNotice", name: "friendNotice", component: () => n.e("chunk-2d2244e1").then(n.bind(null, "e022")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "addFG", name: "addFG", component: () => n.e("chunk-2d228878").then(n.bind(null, "da27")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "groupNotice", name: "groupNotice", component: () => n.e("chunk-2d23790f").then(n.bind(null, "fc51")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "friendInfo", name: "friendInfo", component: () => n.e("chunk-230112ae").then(n.bind(null, "3f5c")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "groupInfo", name: "groupInfo", component: () => n.e("chunk-2d22188d").then(n.bind(null, "cb80")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "userInfo", name: "userInfo", component: () => n.e("chunk-0c387ff5").then(n.bind(null, "fd00")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "userSetting", name: "userSetting", component: () => n.e("chunk-2d0baa9c").then(n.bind(null, "37bd")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "sendMsg", name: "sendMsg", component: () => n.e("chunk-937f6d34").then(n.bind(null, "bf13")), meta: { active: "miliao" } },
                            { path: "friendChatSet", name: "friendChatSet", component: () => n.e("chunk-2d0d09c7").then(n.bind(null, "695c")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "groupChatSet", name: "groupChatSet", component: () => n.e("chunk-bd08e8b4").then(n.bind(null, "09a0")), meta: { requiresAuth: !0, active: "miliao" } },
                            { path: "setInfo/:setType", name: "setInfo", component: () => n.e("chunk-64f40d28").then(n.bind(null, "06d9")), meta: { requiresAuth: !0, active: "miliao" }, props: !0 },
                        ],
                    },
                ],
            })),
            (a.a = i);
    },
    c474: function (e, a, n) {},
    e71b: function (e, a, n) {
        "use strict";
        (a.__esModule = !0),
            (a.default = void 0),
            (a.default = {
                name: "Nama",
                tel: "Telepon",
                save: "Menyimpan",
                confirm: "Konfirmasi",
                cancel: "Membatalkan",
                delete: "Menghapus",
                complete: "Bawa",
                loading: "Memuat...",
                telEmpty: "Silakan isi telepon",
                nameEmpty: "Tolong isi nama anda",
                nameInvalid: "Harap masukkan nama yang benar",
                confirmDelete: "Anda yakin ingin menghapusnya",
                telInvalid: "silahkan masukkan nomor telepon yang benar",
                vanCalendar: {
                    end: "Akhir",
                    start: "Mulailah",
                    title: "Pemilihan tanggal",
                    confirm: "Menentukan",
                    startEnd: "Mulailah/Akhir",
                    weekdays: ["Hari", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam"],
                    monthTitle: function (e, a) {
                        return e + "Tahun" + a + "Bulan";
                    },
                    rangePrompt: function (e) {
                        return "Pilih hari tidak boleh lebih " + e + " hari";
                    },
                },
                vanContactCard: { addText: "Tambahkan kontak" },
                vanContactList: { addText: "Kontak baru" },
                vanPagination: { prev: "Halaman sebelumnya", next: "Halaman selanjutnya" },
                vanPullRefresh: { pulling: "Tarik ke bawah untuk menyegarkan...", loosing: "Lepaskan untuk menyegarkan..." },
                vanSubmitBar: { label: "Total:" },
                vanCoupon: {
                    unlimited: "Tidak ada ambang batas penggunaan",
                    discount: function (e) {
                        return e + "Melipat";
                    },
                    condition: function (e) {
                        return "Penuh" + e + "Meta tersedia";
                    },
                },
                vanCouponCell: {
                    title: "Kupon",
                    tips: "Tidak tersedia",
                    count: function (e) {
                        return e + "Zhang tersedia";
                    },
                },
                vanCouponList: { empty: "Tidak ada kupon", exchange: "Bertukar", close: "Tidak ada kupon", enable: "Tersedia", disabled: "Tidak tersedia", placeholder: "Harap masukkan kode kupon" },
                vanAddressEdit: {
                    area: "Daerah",
                    postal: "Kode Pos",
                    areaEmpty: "Pilih wilayahnya",
                    addressEmpty: "Harap isi alamat rinci",
                    postalEmpty: "Format kode pos salah",
                    defaultAddress: "Tetapkan sebagai alamat pengiriman default",
                    telPlaceholder: "Nomor ponsel penerima barang",
                    namePlaceholder: "Nama penerima barang",
                    areaPlaceholder: "Pilih Provinsi / Kota / Kabupaten",
                },
                vanAddressEditDetail: { label: "Alamat", placeholder: "Nomor jalan, nomor kamar lantai dan informasi lainnya" },
                vanAddressList: { add: "Tambahkan alamat" },
            });
    },
    fa50: function (e, s, c) {
        "use strict";
        (function (a) {
            var e = c("bc3a"),
                n = c.n(e),
                t = c("4360"),
                i = c("a18c"),
                o = c("d399"),
                r = c("2241"),
                e = (c("12cb"), n.a.create({ baseURL: (localStorage.CurrLine || ApiUrl) + "/api/", headers: { "Content-Type": "application/x-www-form-urlencoded" } })),
                l = n.a.CancelToken.source();
            e.interceptors.request.use(
                (e) => (
                    (e.baseURL = (localStorage.CurrLine || ApiUrl) + "/api/"),
                    (e.cancelToken = l.token),
                    (e.data = e.data || {}),
                    (e.data.lang = localStorage.Language || DefaultLanguage),
                    e.noLogin || (e.data.token = localStorage.Token),
                    e.fromData || (e.data = a.param(e.data)),
                    e
                ),
                (e) => Promise.reject(e)
            ),
                e.interceptors.response.use(
                    (e) => (
                        e.request.responseURL.slice(e.request.responseURL.lastIndexOf("/")),
                        200 < e.data.code &&
                            e.data.code < 206 &&
                            (localStorage.removeItem("Token"),
                            localStorage.removeItem("UserInfo"),
                            localStorage.removeItem("BankCardList"),
                            t.a.dispatch("UpdateUserInfo", ""),
                            t.a.dispatch("UpdateBankCardList", []),
                            o.a.clear(),
                            l.cancel(),
                            r.a
                                .alert({ title: "Thông báo", message: e.data.code_dec, closeOnPopstate: !0 })
                                .then(() => {
                                    i.a.push("/login"), (l = n.a.CancelToken.source());
                                })
                                .catch(() => {
                                    i.a.push("/login"), (l = n.a.CancelToken.source());
                                })),
                        e
                    ),
                    (e) => {
                        (e = /<h1>(.*?)<\/h1>/gi.exec(e.response.data)[1]), Object(o.a)({ message: e });
                    }
                ),
                (s.a = e);
        }.call(this, c("1157")));
    },
});
