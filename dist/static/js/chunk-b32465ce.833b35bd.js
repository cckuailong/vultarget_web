(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b32465ce"],{2017:function(t,e,n){"use strict";n("b12d")},"39f0":function(t,e,n){},5098:function(t,e,n){"use strict";n("39f0")},"9ed6":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container",staticStyle:{"margin-bottom":"15%"},attrs:{align:"center"}},[n("img",{attrs:{src:"login_icon.png"}})]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),n("div",{attrs:{align:"center"}},[n("el-button",{staticStyle:{width:"40%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登入")]),t._v(" "),n("el-button",{staticStyle:{width:"40%","margin-bottom":"30px"}},[t._v("未开放")])],1)],1)],1)},o=[],r={name:"Login",data:function(){var t=function(t,e,n){e.length<1?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"",password:""},loginRules:{password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{jumpreg:function(){this.$router.push("/register")},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},i=r,a=(n("2017"),n("5098"),n("2877")),l=Object(a["a"])(i,s,o,!1,null,"5db1cccc",null);e["default"]=l.exports},b12d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-b32465ce.833b35bd.js.map