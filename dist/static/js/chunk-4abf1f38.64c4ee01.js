(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4abf1f38"],{"0dec":function(t,e,s){t.exports=s("f292")},"11e9":function(t,e,s){var a=s("52a7"),n=s("4630"),i=s("6821"),r=s("6a99"),o=s("69a8"),c=s("c69a"),u=Object.getOwnPropertyDescriptor;e.f=s("9e1e")?u:function(t,e){if(t=i(t),e=r(e,!0),c)try{return u(t,e)}catch(s){}if(o(t,e))return n(!a.f.call(t,e),t[e])}},"214f":function(t,e,s){"use strict";s("b0c5");var a=s("2aba"),n=s("32e9"),i=s("79e5"),r=s("be13"),o=s("2b4c"),c=s("520a"),u=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var p=o(t),f=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=f?!i((function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[u]=function(){return s}),s[p](""),!e})):void 0;if(!f||!m||"replace"===t&&!l||"split"===t&&!d){var h=/./[p],g=s(r,p,""[t],(function(t,e,s,a,n){return e.exec===c?f&&!n?{done:!0,value:h.call(e,s,a)}:{done:!0,value:t.call(s,e,a)}:{done:!1}})),_=g[0],v=g[1];a(String.prototype,t,_),n(RegExp.prototype,p,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},3007:function(t,e,s){"use strict";s.d(e,"e",(function(){return n})),s.d(e,"c",(function(){return i})),s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return o})),s.d(e,"d",(function(){return c})),s.d(e,"f",(function(){return u}));var a=s("b775");function n(t,e,s){void 0===t&&(t=""),void 0!==s&&null!=s||(s=1);var n="/images/?query="+t+"&page="+s,i="";return!0===e&&(i="flag",n+="&flag="+i),Object(a["a"])({url:n,method:"get"})}function i(t){return Object(a["a"])({url:"/images/"+t+"/start/",method:"get"})}function r(t){return(void 0===t||null===t||t<1)&&(t=1),Object(a["a"])({url:"/container/?page="+t,method:"get"})}function o(t){return Object(a["a"])({url:"/container/"+t+"/delete/",method:"delete"})}function c(t){return Object(a["a"])({url:"/container/"+t+"/stop/",method:"get"})}function u(t,e){return Object(a["a"])({url:"/container/"+t+"/flag/?flag="+e,method:"get"})}},"386d":function(t,e,s){"use strict";var a=s("cb7c"),n=s("83a1"),i=s("5f1b");s("214f")("search",1,(function(t,e,s,r){return[function(s){var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=r(s,t,this);if(e.done)return e.value;var o=a(t),c=String(this),u=o.lastIndex;n(u,0)||(o.lastIndex=0);var l=i(o,c);return n(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},"520a":function(t,e,s){"use strict";var a=s("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,r=n,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(r=function(t){var e,s,r,l,d=this;return u&&(s=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),c&&(e=d[o]),r=n.call(d,t),c&&r&&(d[o]=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&i.call(r[0],s,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=r},"5dbc":function(t,e,s){var a=s("d3f4"),n=s("8b97").set;t.exports=function(t,e,s){var i,r=e.constructor;return r!==s&&"function"==typeof r&&(i=r.prototype)!==s.prototype&&a(i)&&n&&n(t,i),t}},"5f1b":function(t,e,s){"use strict";var a=s("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var i=s.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"6bac":function(t,e,s){},7874:function(t,e,s){"use strict";s("6bac")},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8b97":function(t,e,s){var a=s("d3f4"),n=s("cb7c"),i=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,s){return i(t,s),e?t.__proto__=s:a(t,s),t}}({},!1):void 0),check:i}},9093:function(t,e,s){var a=s("ce10"),n=s("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},9406:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s("el-dialog",{attrs:{visible:t.centerDialogVisible,title:"镜像信息"},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.startCon,expression:"startCon"}],staticClass:"text item",attrs:{"element-loading-text":"环境启动中"}},[s("div",{staticClass:"text item"},[t._v("\n        访问地址: "+t._s(t.vul_host)+"\n      ")]),t._v(" "),s("div",{staticClass:"text item"},[t._v("\n        映射端口：\n        "),t._l(t.vul_port,(function(e,a){return s("el-tag",{key:a,staticStyle:{"margin-right":"5px"}},[t._v("\n          "+t._s(a)+":"+t._s(e)+"\n        ")])}))],2),t._v(" "),s("div",{staticClass:"text item"},[t._v("\n        名称: "+t._s(t.images_name)+"\n      ")]),t._v(" "),s("div",{staticClass:"text item"},[t._v("\n        描述: "+t._s(t.images_desc)+"\n      ")]),t._v(" "),s("el-form",[s("el-form-item",{attrs:{label:"Flag"}},[s("el-input",{attrs:{placeholder:"请输入Flag：格式flag-{xxxxxxxx}"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",disabled:t.cStatus},on:{click:function(e){t.subFlag(t.container_id,t.input.trim())}}},[t._v("提 交")])],1)],1)],1)]),t._v(" "),s("el-row",{attrs:{gutter:24}},[s("el-col",[s("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),s("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.handleQuery(1)}}},[t._v("\n        查询\n      ")])],1),t._v(" "),t._l(t.listdata,(function(e,a){return s("el-col",{key:a,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[s("el-card",{attrs:{"body-style":{padding:"8px"},shadow:"hover"},nativeOn:{click:function(s){"running"===e.status.status&&t.open(e.image_id,e.image_vul_name,e.image_desc,e.status.status,e.status.container_id,e)}}},[s("div",{staticClass:"clearfix"},[s("div",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px","min-height":"20px","max-height":"20px"}},[s("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"bug"}}),t._v(" "),"stop"!==e.status.status&&"delete"!==e.status.status||!0!==e.status.is_check?"running"===e.status.status?s("el-tooltip",{attrs:{content:"运行中",placement:"top"}},[s("i",{staticClass:"el-icon-loading",staticStyle:{color:"#20a0ff"}})]):"stop"===e.status.status&&!1===e.status.is_check?s("el-tooltip",{attrs:{content:"暂停中",placement:"top"}},[s("svg-icon",{staticStyle:{color:"#20a0ff"},attrs:{"icon-class":"stop"}})],1):t._e():s("el-tooltip",{attrs:{content:"已通过",placement:"top"}},[s("i",{staticClass:"el-icon-check",staticStyle:{color:"#20a0ff"}})]),t._v(" "),"running"===e.status.status&&null!==e.status.start_date&&""!==e.status.start_date&&null!==e.status.end_date&&""!==e.status.end_date&&0!==e.status.end_date?s("div",{staticStyle:{display:"inline-block",margin:"0"}},[s("el-tooltip",{attrs:{content:"容器剩余时间，0 为用不过期",placement:"top"}},[s("i",{staticClass:"el-icon-time"})]),t._v(" "),s("count-down",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px",size:"20px","margin-block-start":"0em","margin-block-end":"0em"},attrs:{currentTime:e.status.now,startTime:e.status.now,endTime:e.status.end_date,secondsTxt:""},on:{end_callback:function(s){return t.stop(e.status.container_id,e)}}})],1):"running"===e.status.status&&null!==e.status.start_date&&""!==e.status.start_date&&null!==e.status.end_date&&""!==e.status.end_date&&0===e.status.end_date?s("div",{staticStyle:{display:"inline-block"}},[s("el-tooltip",{attrs:{content:"容器剩余时间，0 为用不过期",placement:"top"}},[s("i",{staticClass:"el-icon-time"})]),t._v(" "),s("p",{staticStyle:{display:"inline-block"}},[t._v("-1")])],1):s("div",{staticStyle:{display:"inline-block"}},[s("p",{staticStyle:{display:"inline-block","margin-block-start":"1em","margin-block-end":"1em"}})])],1),t._v(" "),s("div",{staticStyle:{"margin-top":"7px"}},[s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.rank,callback:function(s){t.$set(e,"rank",s)},expression:"item.rank"}})],1)]),t._v(" "),s("div",{staticStyle:{padding:"5px"}},[s("div",{staticClass:"container-title"},[s("span",[t._v(t._s(e.image_vul_name))])]),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("div",{staticClass:"time container-title"},[t._v(t._s(e.image_desc))])]),t._v(" "),s("el-row",["running"===e.status.status?s("el-button",{attrs:{type:"primary",disabled:e.status.stop_flag,size:"mini"},on:{click:function(s){return s.stopPropagation(),t.stop(e.status.container_id,e)}}},[t._v("停止")]):s("el-button",{attrs:{type:"primary",disabled:e.status.start_flag,size:"mini"},on:{click:function(s){return s.stopPropagation(),t.open(e.image_id,e.image_vul_name,e.image_desc,e.status.status,e.status.container_id,e)}}},[t._v("启动")]),t._v(" "),"running"===e.status.status||"stop"===e.status.status?s("el-button",{attrs:{type:"primary",disabled:e.status.delete_flag,size:"mini",icon:"el-icon-stopwatch"},on:{click:function(s){return s.stopPropagation(),t.deleteContainer(e.status.container_id,e)}}},[t._v("删除")]):t._e()],1)],1)])],1)}))],2),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total},on:{"current-change":t.handleQuery}})],1)],1)},n=[],i=(s("386d"),s("3007")),r=s("ea7f"),o=s("0dec"),c=s.n(o),u={name:"Dashboard",components:{CountDown:c.a},replace:!0,data:function(){return{page:{total:0,size:20},listdata:[],vul_host:"",centerDialogVisible:!1,startCon:!1,startTime:(new Date).getTime(),input:"",images_id:"",container_id:"",images_name:"",images_desc:"",item_raw_data:"",cStatus:!0,search:"",vul_port:{}}},created:function(){this.listData(1)},methods:{listData:function(){var t=this;Object(i["e"])().then((function(e){t.listdata=e.data.results,t.page.total=e.data.count;for(var s=0;s<t.listdata.length;s++)t.listdata[s].status.start_flag=!1,t.listdata[s].status.stop_flag=!1,t.listdata[s].status.delete_flag=!1}))},open:function(t,e,s,a,n,o){var c=this;this.images_id="",this.images_name="",this.images_desc="",this.container_id="",this.item_raw_data="",this.vul_host="",this.startCon="loading",this.cStatus=!0,this.item_raw_data=o,this.images_id=t,this.images_name=e,this.images_desc=s,this.centerDialogVisible=!0,this.$set(o.status,"start_flag",!0),this.$forceUpdate(),!0===o.status.is_check&&this.$message({message:"该题目已经通过，重复答题分数不会累计",type:"success"}),"running"===o.status.status?(this.vul_host=o.status.host,this.vul_port=JSON.parse(o.status.port),this.container_id=o.status.container_id,this.startCon=!1,this.cStatus=!1):Object(i["c"])(t).then((function(t){var e=t.data["data"],s=window.setInterval((function(){setTimeout((function(){Object(r["b"])(e).then((function(t){var e=t.data["status"],a=t.data;1001===e||(clearInterval(s),o.status.start_flag=!1,200===e?(n=a["data"]["id"],c.container_id=n,c.vul_host=a["data"]["host"],c.vul_port=a["data"]["port"],o.status.now=a["data"]["_now"],o.status.start_date=a["data"]["start_date"],o.status.end_date=a["data"]["end_date"],o.status.status=a["data"]["status"],o.status.container_id=n,c.startCon=!1,c.cStatus=!1):(c.$message({message:t.data["msg"],type:"error"}),c.centerDialogVisible=!1))}))}),1)}),2e3)}))},subFlag:function(t,e){var s=this;Object(i["f"])(t,e).then((function(t){s.input="";var e=t.data;200===e["status"]?(s.$message({message:"恭喜！通过",type:"success"}),s.listData(1)):201===e.status?s.$message({message:e["msg"],type:"info"}):s.$message({message:e["msg"],type:"error"}),s.centerDialogVisible=!1,s.item_raw_data.status.status="stop"}))},stop:function(t,e){var s=this;this.$set(e.status,"stop_flag",!0),this.$forceUpdate(),Object(i["d"])(t).then((function(t){var a=t.data["data"],n=window.setInterval((function(){setTimeout((function(){Object(r["b"])(a).then((function(t){var a=t.data["status"],i=t.data;1001===a||(clearInterval(n),200===a?(s.$message({message:i["msg"],type:"success"}),e.status.status="stop",e.status.start_date="",e.status.stop_flag=!1):s.$message({message:i["msg"],type:"error"}))}))}),1)}),2e3)}))},deleteContainer:function(t,e){var s=this;this.$set(e.status,"delete_flag",!0),this.$forceUpdate(),Object(i["a"])(t).then((function(t){var a=t.data["data"],n=window.setInterval((function(){setTimeout((function(){Object(r["b"])(a).then((function(t){var a=t.data["status"],i=t.data;1001===a||(clearInterval(n),e.status.delete_flag=!1,200===a?(e.status.status="",s.images_id="",s.images_name="",s.images_desc="",s.container_id="",s.item_raw_data="",e.status.container_id="",s.$message({message:i["msg"],type:"success"}),s.listData(1)):s.$message({message:i["msg"],type:"error"}))}))}),1)}),2e3)}))},handleQuery:function(t){var e=this;Object(i["e"])(this.search,!1,t).then((function(t){e.listdata=t.data.results,e.page.total=t.data.count}))}}},l=u,d=(s("7874"),s("2877")),p=Object(d["a"])(l,a,n,!1,null,"5fe32fb8",null);e["default"]=p.exports},aa77:function(t,e,s){var a=s("5ca1"),n=s("be13"),i=s("79e5"),r=s("fdef"),o="["+r+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t,e,s){var n={},o=i((function(){return!!r[t]()||c[t]()!=c})),u=n[t]=o?e(p):r[t];s&&(n[s]=u),a(a.P+a.F*o,"String",n)},p=d.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},b0c5:function(t,e,s){"use strict";var a=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},c5f6:function(t,e,s){"use strict";var a=s("7726"),n=s("69a8"),i=s("2d95"),r=s("5dbc"),o=s("6a99"),c=s("79e5"),u=s("9093").f,l=s("11e9").f,d=s("86cc").f,p=s("aa77").trim,f="Number",m=a[f],h=m,g=m.prototype,_=i(s("2aeb")(g))==f,v="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var s,a,n,i=e.charCodeAt(0);if(43===i||45===i){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var r,c=e.slice(2),u=0,l=c.length;u<l;u++)if(r=c.charCodeAt(u),r<48||r>n)return NaN;return parseInt(c,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof m&&(_?c((function(){g.valueOf.call(s)})):i(s)!=f)?r(new h(b(e)),s,m):b(e)};for(var y,x=s("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;x.length>T;T++)n(h,y=x[T])&&!n(m,y)&&d(m,y,l(h,y));m.prototype=g,g.constructor=m,s("2aba")(a,f,m)}},ea7f:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return r}));var a=s("b775");function n(t){return Object(a["a"])({url:"/tasks/"+t+"/get/",method:"get"})}function i(t){return Object(a["a"])({url:"/tasks/batch/batch/",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/tasks/"+t+"/progress/",method:"get"})}},f292:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.msTime.show?s("p",[t.msTime.day>0?s("span",[s("span",[t._v(t._s(t.msTime.day))]),s("i",[t._v(t._s(t.dayTxt))])]):t._e(),t._v(" "),s("span",[t._v(t._s(t.msTime.hour))]),s("i",[t._v(t._s(t.hourTxt))]),t._v(" "),s("span",[t._v(t._s(t.msTime.minutes))]),s("i",[t._v(t._s(t.minutesTxt))]),t._v(" "),s("span",[t._v(t._s(t.msTime.seconds))]),s("i",[t._v(t._s(t.secondsTxt))])]):t._e()])},n=[],i=(s("6b54"),s("c5f6"),{replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,e){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this),this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,s,a){var n=this,i=this.msTime,r=t-e;if(r>0){this.msTime.show=!0,i.day=Math.floor(r/864e5),r-=864e5*i.day,i.hour=Math.floor(r/36e5),r-=36e5*i.hour,i.minutes=Math.floor(r/6e4),r-=6e4*i.minutes,i.seconds=Math.floor(r/1e3).toFixed(0),r-=1e3*i.seconds,i.hour<10&&(i.hour="0"+i.hour),i.minutes<10&&(i.minutes="0"+i.minutes),i.seconds<10&&(i.seconds="0"+i.seconds);var o=Date.now(),c=Date.now(),u=c-o;setTimeout((function(){a?n.runTime(n.end,e+=1e3,s,!0):n.runTime(n.star,e+=1e3,s)}),1e3-u)}else s()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}}),r=i,o=s("2877"),c=Object(o["a"])(r,a,n,!1,null,null,null);e["default"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-4abf1f38.64c4ee01.js.map