(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d296175a"],{"73cf":function(t,e,s){"use strict";s.r(e);var o={name:"Register",components:{},props:["recommendId"],data:function(){return{postData:{dest:86,username:"",password:"",re_password:"",smscode:"",code:"",code_rand:"",recommend:this.recommendId||""},recommendDis:!!this.recommendId,areaList:[{id:"86",name:"CHINA(中国)"}],isSendCode:!1,isSubmit:!1,codeImg:"",showBrowserTips:!1,downUrl:"",isPlus:!1}},computed:{},watch:{},created:function(){this.$Model.SmsCode(t=>{this.areaList=t,this.postData.dest=t[0].id}),this.getCode(),this.checkUserAgent()},mounted:function(){window.plus&&(this.isPlus=!0)},activated:function(){},destroyed:function(){},methods:{getCode:function(){this.postData.code_rand=(new Date).getTime(),this.codeImg=this.ApiUrl+"/api/Account/code?code_rand="+this.postData.code_rand},onSubmit:function(){this.postData.username?this.postData.code||2!=this.InitData.setting.is_sms?this.postData.password?this.postData.re_password?this.postData.password==this.postData.re_password?(this.isSubmit=!0,this.$Model.UserRegister(this.postData,t=>{this.isSubmit=!1,this.getCode()})):this.$Dialog.Toast(this.$t("register.placeholder[5]")):this.$Dialog.Toast(this.$t("register.placeholder[2]")):this.$Dialog.Toast(this.$t("register.placeholder[6]")):this.$Dialog.Toast(this.$t("register.placeholder[1]")):this.$Dialog.Toast(this.$t("register.placeholder[0]"))},getSmsCode:function(){this.postData.username?this.postData.code?(this.isSendCode=!0,this.$Model.GetSMSCode({phone:this.postData.username,dest:this.postData.dest,code:this.postData.code,recommend:this.postData.recommend,code_rand:this.postData.code_rand},t=>{this.isSendCode=!1})):this.$Dialog.Toast(this.$t("register.placeholder[6]")):this.$Dialog.Toast(this.$t("register.placeholder[0]"))},checkUserAgent:function(t){var e=navigator.userAgent;/(MicroMessenger)/.test(e)&&(this.showBrowserTips=!0),/(iPod|iPhone|iPad)/.test(e)?t&&t("IOS"):t&&t("Android")}}},s=(s("b8bd"),s("2877")),o=Object(s.a)(o,function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"Site PageBox"},[o("van-nav-bar",{attrs:{fixed:"",border:!1,"left-arrow":"","right-text":s.$t("language")},on:{"click-left":function(t){return s.$router.go(-1)},"click-right":function(t){return s.$router.push("/language")}}}),o("div",{staticClass:"Login ScrollBox"},[o("h1",[s._v(s._s(s.$t("register.text[0]")))]),o("van-form",{on:{submit:s.onSubmit}},[o("van-field",{staticStyle:{height:"0",width:"0",padding:"0",position:"absolute"},attrs:{type:"text",autocomplete:"off"}}),o("van-field",{staticStyle:{height:"0",width:"0",padding:"0",position:"absolute"},attrs:{type:"password",autocomplete:"off"}}),o("van-field",{attrs:{"left-icon":"manager",clearable:"",border:!1},scopedSlots:s._u([{key:"input",fn:function(){return[o("van-dropdown-menu",[o("van-dropdown-item",{ref:"DropdownItem",attrs:{title:"+"+s.postData.dest}},[[o("ul",s._l(s.areaList,function(e){return o("li",{key:e.id,class:{on:s.postData.dest==e.id},on:{click:function(t){s.postData.dest=e.id,s.$refs.DropdownItem.toggle()}}},[s._v("+"+s._s(e.id)+" "+s._s(e.name))])}),0)]],2)],1),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.postData.username,expression:"postData.username",modifiers:{trim:!0}}],staticStyle:{border:"0",flex:"1",width:"100px","padding-left":"50px",background:"transparent"},attrs:{type:"tel",placeholder:s.$t("register.placeholder[0]")},domProps:{value:s.postData.username},on:{input:function(t){t.target.composing||s.$set(s.postData,"username",t.target.value.trim())},blur:function(t){return s.$forceUpdate()}}})]},proxy:!0}])}),o("van-field",{attrs:{"left-icon":"coupon",autocomplete:"off",type:"digit",placeholder:s.$t("register.placeholder[6]"),clearable:"",border:!1},scopedSlots:s._u([{key:"button",fn:function(){return[o("van-image",{staticStyle:{display:"block",cursor:"pointer"},attrs:{width:"100",height:"34",src:s.codeImg},on:{click:s.getCode}})]},proxy:!0}]),model:{value:s.postData.code,callback:function(t){s.$set(s.postData,"code","string"==typeof t?t.trim():t)},expression:"postData.code"}}),o("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:s.$t("register.placeholder[2]"),clearable:"",autocomplete:"off",border:!1},model:{value:s.postData.password,callback:function(t){s.$set(s.postData,"password","string"==typeof t?t.trim():t)},expression:"postData.password"}}),o("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:s.$t("register.placeholder[3]"),clearable:"",autocomplete:"off",border:!1},model:{value:s.postData.re_password,callback:function(t){s.$set(s.postData,"re_password","string"==typeof t?t.trim():t)},expression:"postData.re_password"}}),o("van-field",{attrs:{"left-icon":"invition",readonly:s.recommendDis,placeholder:s.$t("register.placeholder[4]"),clearable:"",autocomplete:"off",border:!1},model:{value:s.postData.recommend,callback:function(t){s.$set(s.postData,"recommend","string"==typeof t?t.trim():t)},expression:"postData.recommend"}}),o("div",{staticStyle:{padding:"20px 16px"}},[o("van-button",{staticStyle:{"font-size":"18px"},attrs:{size:"large",block:"",type:"danger",round:"",loading:s.isSubmit,"loading-text":s.$t("register.text[3]")}},[s._v(s._s(s.$t("register.text[4]")))]),s.isPlus?s._e():o("van-button",{staticStyle:{"font-size":"18px","margin-top":"10px",background:"transparent"},attrs:{size:"large",block:"",plain:"",type:"info",round:""},on:{click:function(t){return s.$Util.OpenUrl(s.downUrl)}}},[s._v(s._s(s.$t("register.text[5]")))]),s.isPlus?o("i18n",{staticStyle:{"text-align":"left",color:"#fff","margin-top":"30px"},attrs:{path:"register.i18n[0]",tag:"div"}},[o("router-link",{staticClass:"href",attrs:{slot:"a",to:"/login"},slot:"a"},[s._v(s._s(s.$t("register.i18n[1]")))]),o("router-link",{staticClass:"href fr",attrs:{slot:"line",to:"/line"},slot:"line"},[s._v(s._s(s.$t("line")))])],1):o("div",{staticStyle:{"margin-top":"20px"}},[o("router-link",{staticClass:"href",attrs:{slot:"line",to:"/line"},slot:"line"},[s._v(s._s(s.$t("line")))])],1)],1)],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:s.showBrowserTips,expression:"showBrowserTips"}],staticClass:"BrowserTips"},[o("img",{attrs:{src:"./static/images/down-zy.png",width:"80%"}})])],1)},[],!1,null,"c79fa9e6",null);e.default=o.exports},aaab:function(t,e,s){},b8bd:function(t,e,s){"use strict";var o=s("aaab");s.n(o).a}}]);