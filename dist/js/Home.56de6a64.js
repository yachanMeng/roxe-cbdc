(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{3516:function(e,t,n){},"65a1":function(e,t,n){"use strict";n("3516")},"7abe":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"flex main"};function r(e,t,n,r,s,a){var i=Object(o["resolveComponent"])("Header"),d=Object(o["resolveComponent"])("Sider"),l=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(i),Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(d),Object(o["createVNode"])(l)])],64)}var s={class:"r-header flex"},a={href:"/"},i={class:"flex"};function d(e,t,n,c,r,d){var l=Object(o["resolveComponent"])("r-icon"),u=Object(o["resolveComponent"])("r-dropdown");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createElementVNode"])("a",a,[Object(o["createVNode"])(l,{class:"icon",icon:"icon"})]),Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(u,{onCommand:e.oncommand,list:["logOut"]},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{class:"avatar",icon:"avatar"})]})),_:1},8,["onCommand"]),Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(e.user),1)])])}var l=n("5502"),u=n("6c02"),b=n("61be"),m=n("6319"),f=Object(o["defineComponent"])({setup:function(){Object(l["b"])();var e=Object(o["ref"])(""),t=Object(u["d"])(),n=function(e){localStorage.removeItem("__token"),localStorage.removeItem("__tokenType"),t.push("/login")};return Object(o["onMounted"])((function(){Object(b["b"])().then((function(t){e.value=t.username})).catch((function(e){Object(m["a"])(e.message,"error")}))})),{user:e,oncommand:n}}}),O=(n("f46d"),n("6b0d")),j=n.n(O);const p=j()(f,[["render",d],["__scopeId","data-v-68a6f264"]]);var v=p,x={class:"r-sider"};function C(e,t,n,c,r,s){var a=Object(o["resolveComponent"])("RMenu");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createVNode"])(a,{items:e.items,onRoutes:e.onRoutes},null,8,["items","onRoutes"])])}var g=Object(o["defineComponent"])({setup:function(e){var t=Object(o["reactive"])([{icon:"transaction",index:"1",title:"Asset Center",subs:[{index:"/asset/wallet",title:"Personal Wallet"},{index:"/asset/cbdc",title:"CBDC Management"}]},{icon:"message",index:"2",title:"Report Center",subs:[{index:"/report/transfer",title:"Transfer Record"},{index:"/report/publish-destroy",title:"Issue Destruction Record"}]},{icon:"manual",index:"3",title:"Personal Center",subs:[{index:"/personal/basic",title:"Basic Information"},{index:"/personal/safe",title:"Security Settings"}]},{icon:"profiles",index:"4",title:"System Administrator",subs:[{index:"/system/account",title:"Account Management"},{index:"/system/transfer",title:"Transfer Record Query"},{index:"/system/publish-destroy",title:"Issue Destruction Record"}]},{icon:"bank",index:"10",title:" RISN global connectivity",subs:[{index:"/transfer/send",title:"Send"},{index:"/transfer/order",title:"History"}]}]),n=Object(u["c"])(),c=Object(o["computed"])((function(){return n.path}));return{items:t,onRoutes:c}}});n("65a1");const y=j()(g,[["render",C],["__scopeId","data-v-6f507c50"]]);var N=y,k=Object(o["defineComponent"])({components:{Header:v,Sider:N}});const R=j()(k,[["render",r]]);t["default"]=R},"8c8a":function(e,t,n){},f46d:function(e,t,n){"use strict";n("8c8a")}}]);