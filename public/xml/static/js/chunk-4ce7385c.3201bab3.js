(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce7385c"],{"8c13":function(t,s,a){"use strict";(function(t){s["a"]={name:"TaskRecord",components:{},props:["taskState"],data(){return{listData:"",isLoad:!1,isFinished:!1,isRefresh:!1,pageNo:1,tabsState:1,tabsIndex:0,taskTabs:[{state:1,text:"进行中"},{state:2,text:"审核中"},{state:3,text:"Chi tiết"},{state:4,text:"已失败"},{state:6,text:"已放弃"}],fileList:[]}},computed:{},watch:{$route(){this.taskState?(this.tabsIndex=this.taskTabs.findIndex(t=>t.state==this.taskState),this.tabsState=this.taskState):(this.tabsState=1,this.tabsIndex=0),this.getListData("init")}},created(){this.$parent.navBarTitle="任务记录",this.listData=this.taskTabs.flatMap(t=>[""]),this.taskState&&(this.tabsIndex=this.taskTabs.findIndex(t=>t.state==this.taskState),this.tabsState=this.taskState),this.getListData("init")},mounted(){},activated(){},destroyed(){},methods:{onClickCell(s){t(event.target).hasClass("van-uploader__input")||this.$router.push("/user/taskInfo/"+s)},onLoad(){this.getListData("load")},changeTabs(t){this.tabsState=this.taskTabs[t].state,this.$router.push("/user/taskRecord/"+this.tabsState)},getListData(t){this.isLoad=!0,this.isRefresh=!1,"load"==t?this.pageNo+=1:(this.pageNo=1,this.isFinished=!1),this.$Model.GetTaskRecord({status:this.tabsState,page_no:this.pageNo,is_u:2},s=>{this.isLoad=!1,1==s.code?(this.listData[this.tabsIndex]="load"==t?this.listData[this.tabsIndex].concat(s.info):s.info,this.pageNo==s.data_total_page?this.isFinished=!0:this.isFinished=!1):(this.listData[this.tabsIndex]="",this.isFinished=!0)})},onRefresh(){this.getListData("init")},afterRead(t){t.status="uploading",t.message="上传中...",this.uploadImgs(t)},uploadImgs(t){if(!t.file.type.match(/image/))return t.status="failed",void(t.message="错误格式");this.$Util.CompressImg(t.file.type,t.content,750,s=>{let a=new FormData;a.append("token",localStorage["Token"]),a.append("type",3),a.append("image",s,t.file.name),this.$Model.UploadImg(a,s=>{1==s.code?(t.message="上传成功",t.status="success",t.url=s.url):(t.status="failed",t.message="上传失败")})})},submitTask(t,s){this.fileList[s]?this.$Model.SubmitTask({order_id:t,examine_demo:this.fileList[s][0].url},t=>{1==t.code&&(this.fileList[s]=[],this.getListData("init"))}):this.$Dialog.Toast("请上传完成任务图片")},cancelTask(t,s){this.$Model.SubmitTask({order_id:t,status:6},t=>{1==t.code&&(this.fileList[s]=[],this.getListData("init"))})}}}}).call(this,a("1157"))},"8fa2":function(t,s,a){"use strict";var e=a("c980"),i=a.n(e);i.a},9728:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"PageBox"},[a("div",{staticClass:"ScrollBox"},[a("van-tabs",{attrs:{border:!1,color:"#dd6161","title-active-color":"#dd6161","line-width":"50"},on:{change:t.changeTabs},model:{value:t.tabsIndex,callback:function(s){t.tabsIndex=s},expression:"tabsIndex"}},t._l(t.taskTabs,(function(s){return a("van-tab",{key:s.state,staticStyle:{padding:"0 12px"},attrs:{title:s.text}},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[a("van-list",{class:{Empty:!t.listData[t.tabsIndex].length},attrs:{finished:t.isFinished,"finished-text":t.listData[t.tabsIndex].length?"没有更多数据了":"没有数据"},on:{load:t.onLoad},model:{value:t.isLoad,callback:function(s){t.isLoad=s},expression:"isLoad"}},t._l(t.listData[t.tabsIndex],(function(s,e){return a("van-cell",{key:s.order_id,staticClass:"TaskItem",attrs:{"title-class":"record",border:!1},on:{click:function(a){return t.onClickCell(s.order_id)}},scopedSlots:t._u([{key:"title",fn:function(){return[a("h4",[t._v("要求:"+t._s(s.group_info))]),a("p",[t._v("创建:"+t._s(s.add_time))]),a("p",[t._v("审核:"+t._s(0==t.tabsIndex||4==t.tabsIndex?s.add_time:s.handle_time))]),0==t.tabsIndex?a("a",{attrs:{href:"javascript:;"}},[t._v("点击 图标 打开链接")]):a("a",{attrs:{href:"javascript:;"}},[t._v("点击查看任务详情")])]},proxy:!0}],null,!0)},[a("div",{staticClass:"icon",attrs:{slot:"icon"},slot:"icon"},[a("h4",[t._v(t._s(s.group_name))]),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return a.stopPropagation(),t.$Util.OpenUrl(s.link_info)}}},[a("img",{attrs:{src:s.icon}})]),a("p",{staticClass:"price"},[a("b",[t._v(t._s(Number(s.reward_price)))]),t._v("元")])]),0==t.tabsIndex?a("div",{staticClass:"state"},[a("van-uploader",{attrs:{"after-read":t.afterRead,"max-count":1},model:{value:t.fileList[e],callback:function(s){t.$set(t.fileList,e,s)},expression:"fileList[index]"}}),a("van-button",{attrs:{color:"#dd6161",size:"mini",block:""},on:{click:function(a){return a.stopPropagation(),t.submitTask(s.order_id,e)}}},[t._v("提交")]),a("van-button",{staticStyle:{margin:"5px 0"},attrs:{color:"#aaa",size:"mini",block:""},on:{click:function(a){return a.stopPropagation(),t.cancelTask(s.order_id)}}},[t._v("放弃")])],1):a("div",{staticClass:"state"},[a("img",{attrs:{src:"./static/icon/state"+s.status+".png",height:"50"}}),1==t.tabsIndex?a("van-button",{staticStyle:{margin:"5px 0"},attrs:{color:"#aaa",size:"mini",block:""},on:{click:function(a){return a.stopPropagation(),t.cancelTask(s.order_id,e)}}},[t._v("放弃")]):t._e()],1)])})),1)],1)],1)})),1)],1)])},i=[],n=a("8c13"),o=n["a"],r=(a("8fa2"),a("2877")),l=Object(r["a"])(o,e,i,!1,null,"65c9e0e6",null);s["default"]=l.exports},c980:function(t,s,a){}}]);