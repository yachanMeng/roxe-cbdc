(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{1429:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"page"},c={class:"panel"},r=Object(n["createElementVNode"])("div",null,"Transer History",-1);function l(e,t,a,l,s,d){var i=Object(n["resolveComponent"])("r-column"),u=Object(n["resolveComponent"])("r-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",c,[r,Object(n["createVNode"])(u,{onHandleCurrentChange:e.pagechange,total:e.query.total,index:e.query.index,pages:e.query.pages,data:e.query.list},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{prop:"txId",label:"ID",width:"300"}),Object(n["createVNode"])(i,{prop:"receiveAddress",label:"Address"}),Object(n["createVNode"])(i,{prop:"sendAmount",label:"Amount"}),Object(n["createVNode"])(i,{prop:"receiveCurrency",label:"Currency"}),Object(n["createVNode"])(i,{prop:"createTime",label:"Create Time"},{default:Object(n["withCtx"])((function(t){return[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.createTime?e.format(t.createDate):"-"),1)]})),_:1}),Object(n["createVNode"])(i,{prop:"txStatus",label:"Status"})]})),_:1},8,["onHandleCurrentChange","total","index","pages","data"])])])}var s=a("61be"),d=a("fd1b"),i=Object(n["defineComponent"])({setup:function(){var e=Object(n["reactive"])({index:1,total:0,pages:0,list:[]});Object(s["w"])(e.index).then((function(t){e.pages=t.totalPages,e.total=t.totalRecords,e.list=t.data,console.log(t)})).catch((function(e){console.log(e.message)}));var t=function(t){e.index=t,Object(s["w"])(e.index).then((function(t){e.pages=t.totalPages,e.total=t.totalRecords,e.list=t.data,console.log(t)})).catch((function(e){console.log(e.message)}))};return{query:e,pagechange:t,format:d["a"]}}}),u=a("6b0d"),p=a.n(u);const b=p()(i,[["render",l]]);t["default"]=b}}]);