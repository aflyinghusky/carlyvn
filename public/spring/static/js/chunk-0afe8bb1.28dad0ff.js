(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0afe8bb1"],{1569:function(t,i,a){},"32bb":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"Site PageBox",staticStyle:{"padding-bottom":"44px"}},[a("van-nav-bar",{attrs:{fixed:"",border:!1,title:t.$t("task.show[0]"),"left-arrow":""},on:{"click-left":function(i){return t.$router.go(-1)}}}),t.infoData?a("div",{staticClass:"ScrollBox"},[a("div",{staticClass:"Details"},[a("dl",[a("dt",[a("label",[t._v(t._s(t.infoData.title))]),a("i",[t._v("+"+t._s(t.InitData.currency)+t._s(t.infoData.reward_price))])]),a("dd",{staticStyle:{"padding-top":"0","justify-content":"space-between"}},[a("em",[t._v(t._s(t.infoData.y_surplus_number)+t._s(t.$t("task.show[1]")))]),a("em",[t._v(t._s(t.$t("task.show[2]",{num:t.infoData.surplus_number})))]),a("em",[t._v(t._s(t.$t("task.show[3]")))])]),a("dd",{staticStyle:{"border-top":"1px #2d3446 solid"}},[a("label",[t._v(t._s(t.$t("task.show[4]"))+"：")]),a("span",[t._v(t._s(t.infoData.content))])])]),a("dl",[a("dt",{staticStyle:{"justify-content":"flex-start"}},[a("label",[a("img",{staticStyle:{"border-radius":"100%","vertical-align":"middle","margin-right":"10px"},attrs:{src:"./static/head/"+t.infoData.f_header,height:"40"}})]),a("span",[a("p",[t._v(t._s(t.$t("task.show[5]")))]),t._v(" "+t._s(t.infoData.f_username)+" ")])]),a("dd",{staticStyle:{"border-top":"1px #2d3446 solid"}},[a("label",[t._v(t._s(t.$t("task.show[6]"))+"：")]),a("div",{staticStyle:{flex:"auto"}},[a("van-checkbox-group",{model:{value:t.conditionArr,callback:function(i){t.conditionArr=i},expression:"conditionArr"}},t._l(t.InitData.authenticationList,(function(i,n){return a("van-checkbox",{key:n,attrs:{name:n,disabled:""}},[t._v(t._s(i))])})),1)],1)]),1==t.infoData.is_fx?a("dd",[a("input",{staticClass:"link",staticStyle:{position:"relative","z-index":"9"},attrs:{id:"AppLink",type:"text",readonly:""},domProps:{value:t.infoData.link_info}}),a("span",{staticStyle:{position:"absolute",opacity:"0"},attrs:{id:"IosLink"}},[t._v(t._s(t.infoData.link_info))]),a("div",[a("van-button",{attrs:{block:"",size:"mini",plain:"",round:""},on:{click:function(i){return t.$Util.CopyText("IosLink","AppLink")}}},[t._v(t._s(t.$t("task.show[7]")))]),a("van-button",{staticStyle:{margin:"5px 0 0"},attrs:{block:"",size:"mini",type:"info",round:""},on:{click:function(i){return t.$Util.OpenUrl(t.infoData.link_info)}}},[t._v(t._s(t.$t("task.show[8]")))])],1)]):a("dd",[a("label",[t._v(t._s(t.$t("task.show[17]"))+"：")]),a("textarea",{staticStyle:{width:"100%",flex:"1","margin-right":"5px","border-radius":"10px",padding:"5px 8px",border:"0","background-color":"#f5f5f5",color:"#888",position:"relative","z-index":"9"},attrs:{rows:"3"}},[t._v(t._s(t.infoData.link_info))]),a("input",{staticClass:"link",staticStyle:{position:"absolute",opacity:"0"},attrs:{id:"AppLink",type:"text",readonly:""},domProps:{value:t.infoData.link_info}}),a("span",{staticStyle:{position:"absolute",opacity:"0"},attrs:{id:"IosLink"}},[t._v(t._s(t.infoData.link_info))]),a("div",[a("van-button",{attrs:{block:"",size:"mini",type:"info",round:""},on:{click:function(i){return t.$Util.CopyText("IosLink","AppLink")}}},[t._v(t._s(t.$t("task.show[7]")))]),a("van-button",{staticStyle:{margin:"5px 0 0"},attrs:{block:"",size:"mini",type:"info",round:""},on:{click:function(i){return t.$Util.OpenUrl(t.infoData.link_info)}}},[t._v(t._s(t.$t("task.show[8]")))])],1)])])]),a("van-tabs",{attrs:{border:!1,color:"#4087f1","title-active-color":"#fff",background:"#880a25","title-inactive-color":"#bbb","line-width":"60"}},[a("van-tab",{attrs:{title:t.$t("task.show[9]")}},t._l(t.infoData.task_step,(function(i,n){return a("dl",{key:n},[a("dt",[a("label",[t._v(t._s(t.$t("task.show[10]",{index:n+1}))+"：")]),a("span",[t._v(t._s(i.describe))])]),a("dd",[a("van-image",{attrs:{fit:"cover",src:""+t.ApiUrl+i.img},on:{click:function(a){return t.$ImagePreview([""+t.ApiUrl+i.img])}}})],1)])})),0),a("van-tab",{attrs:{title:t.$t("task.show[11]")}},[t.infoData.examine_demo?a("div",t._l(t.infoData.examine_demo,(function(i,n){return a("van-image",{key:n,attrs:{fit:"cover",src:""+t.ApiUrl+i},on:{click:function(a){return t.$ImagePreview([""+t.InitData.setting.up_url+i])}}})})),1):a("van-empty",{attrs:{image:"error",description:t.$t("task.show[12]")}})],1)],1)],1):t._e(),t.isLoad?a("van-loading",{staticClass:"DataLoad",attrs:{size:"60px",vertical:""}},[t._v(t._s(t.$t("task.show[13]")))]):t._e(),a("div",{staticClass:"Button",staticStyle:{position:"fixed",bottom:"0",width:"100%"}},[t.isLogin?a("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger",loading:t.isSubmit,"loading-text":t.$t("task.show[14]"),disabled:0!=t.infoData.is_l},on:{click:t.onSubmit}},[t._v(t._s(t.$t("task.show[15]")))]):a("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger",to:"/login"}},[t._v(t._s(t.$t("task.show[16]")))])],1)],1)},s=[],o={name:"Show",components:{},props:["taskId"],data(){return{isLoad:!0,infoData:"",conditionArr:[],isLogin:!!localStorage["Token"],isSubmit:!1}},computed:{},watch:{},created(){this.getTaskinfo()},mounted(){},activated(){},destroyed(){},methods:{getTaskinfo(){this.$Model.GetTaskinfo(this.taskId,t=>{this.isLoad=!1,1==t.code&&(this.infoData=t.info,this.conditionArr=t.info.finish_condition||[])})},onSubmit(){this.isSubmit=!0,this.$Model.ReceiveTask(this.taskId,t=>{this.isSubmit=!1,1==t.code&&this.getTaskinfo()})}}},e=o,r=(a("d1a4"),a("2877")),l=Object(r["a"])(e,n,s,!1,null,"77349da2",null);i["default"]=l.exports},d1a4:function(t,i,a){"use strict";var n=a("1569"),s=a.n(n);s.a}}]);