(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b38aec8c"],{"0fd6":function(t,s,a){},"6db0":function(t,s,a){"use strict";var e=a("0fd6"),i=a.n(e);i.a},f16f:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"PageBox"},[a("div",{staticClass:"ScrollBox"},[a("van-tabs",{attrs:{ellipsis:!1,border:!1,color:"#4087f1","title-active-color":"#4087f1",background:"#151d31","title-inactive-color":"#bbb","line-width":"60"},on:{change:t.changeTabs},model:{value:t.tabsIndex,callback:function(s){t.tabsIndex=s},expression:"tabsIndex"}},t._l(t.taskTabs,(function(s){return a("van-tab",{key:s.state,staticStyle:{padding:"0 12px"},attrs:{title:s.text}},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[a("van-list",{class:{Empty:!t.listData[t.tabsIndex].length},attrs:{finished:t.isFinished,"finished-text":t.listData[t.tabsIndex].length?t.$t("vanPull[0]"):t.$t("vanPull[1]")},on:{load:t.onLoad},model:{value:t.isLoad,callback:function(s){t.isLoad=s},expression:"isLoad"}},[2==t.tabsIndex?a("div",t._l(t.listData[t.tabsIndex],(function(s,e){return a("van-cell",{key:s.dan,staticClass:"FundItem",attrs:{border:!1,to:"/user/recharge/"+s.dan},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",[a("span",[t._v(t._s(s.dan))]),a("span",[t._v(t._s(s.adddate))])]),a("div",[a("span",{staticClass:"money"},[t._v("+"+t._s(Number(s.money)))]),a("span",[t._v(t._s(s.status_desc))])])]},proxy:!0}],null,!0)},[a("div",{class:"icon tag"+t.tabsIndex,attrs:{slot:"icon"},slot:"icon"},[t._v(" "+t._s(t.$t("fundRecord.default[3]"))+" ")])])})),1):a("div",t._l(t.listData[t.tabsIndex],(function(s,e){return a("van-cell",{key:s.order_id,staticClass:"FundItem",attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",[a("span",[t._v(t._s(s.trade_number))]),a("span",[t._v(t._s(s.trade_time))])]),a("div",[a("span",{staticClass:"money"},[t._v(t._s(s.jj)+t._s(s.trade_amount))]),a("span",[t._v(t._s(s.remarks))])])]},proxy:!0}],null,!0)},[a("div",{class:"icon tag"+t.tabsIndex,attrs:{slot:"icon"},slot:"icon"},[t._v(" "+t._s(0==t.tabsIndex?t.$t("fundRecord.default[4]"):t.$t("fundRecord.default[5]"))+" ")])])})),1)])],1)],1)})),1)],1)])},i=[],n={name:"FundRecord",components:{},props:["fundState"],data(){return{listData:"",isLoad:!1,isFinished:!1,isRefresh:!1,pageNo:1,tabsState:4,tabsIndex:0,taskTabs:[{state:4,text:this.$t("fundRecord.tabs[0]")},{state:3,text:this.$t("fundRecord.tabs[1]")},{state:1,text:this.$t("fundRecord.tabs[2]")}]}},computed:{},watch:{$route(){this.fundState?(this.tabsIndex=this.taskTabs.findIndex(t=>t.state==this.fundState),this.tabsState=this.fundState):(this.tabsState=4,this.tabsIndex=0),this.getListData("init")}},created(){switch(this.listData=this.taskTabs.flatMap(t=>[""]),this.fundState&&(this.tabsIndex=this.taskTabs.findIndex(t=>t.state==this.fundState),this.tabsState=this.fundState),this.fundState){case"3":this.$parent.navBarTitle=this.$t("fundRecord.default[0]");break;case"1":this.$parent.navBarTitle=this.$t("fundRecord.default[1]");break;default:this.$parent.navBarTitle=this.$t("fundRecord.default[2]")}this.getListData("init")},mounted(){},activated(){},destroyed(){},methods:{onLoad(){this.getListData("load")},changeTabs(t){switch(this.tabsState=this.taskTabs[t].state,this.getListData("init"),this.tabsState){case 3:this.$parent.navBarTitle=this.$t("fundRecord.default[0]");break;case 1:this.$parent.navBarTitle=this.$t("fundRecord.default[1]");break;default:this.$parent.navBarTitle=this.$t("fundRecord.default[2]")}},getListData(t){this.isLoad=!0,this.isRefresh=!1,"load"==t?this.pageNo+=1:(this.pageNo=1,this.isFinished=!1),2==this.tabsIndex?this.$Model.GetRechargeRecord({state:0,page_no:this.pageNo},s=>{this.isLoad=!1,1==s.code?(this.listData[this.tabsIndex]="load"==t?this.listData[this.tabsIndex].concat(s.info):s.info,this.pageNo==s.data_total_page?this.isFinished=!0:this.isFinished=!1):(this.listData[this.tabsIndex]="",this.isFinished=!0)}):this.$Model.FundDetails({trade_type:this.tabsState,page_no:this.pageNo},s=>{this.isLoad=!1,1==s.code?(this.listData[this.tabsIndex]="load"==t?this.listData[this.tabsIndex].concat(s.list):s.list,this.pageNo==s.data_total_page?this.isFinished=!0:this.isFinished=!1):(this.listData[this.tabsIndex]="",this.isFinished=!0)})},onRefresh(){this.getListData("init")}}},d=n,o=(a("6db0"),a("2877")),l=Object(o["a"])(d,e,i,!1,null,"16585f19",null);s["default"]=l.exports}}]);