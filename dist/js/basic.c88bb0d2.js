(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basic"],{"0eac":function(e,t,a){"use strict";a("363a")},"1b7f":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-4bdf13c6"),e=e(),Object(c["popScopeId"])(),e},n={class:"page"},r={class:"panel"},l={class:"wallet"},i={key:0,class:"r-form-btn"},s=Object(c["createTextVNode"])("Change Password"),d={key:1,class:"r-form-btn"},u=Object(c["createTextVNode"])("Cancel"),m=Object(c["createTextVNode"])("Save"),p={class:"openBox"},b=o((function(){return Object(c["createElementVNode"])("span",{class:"openText"},"Open/Close 2FA",-1)})),f={class:"qr-code"},v=o((function(){return Object(c["createElementVNode"])("p",null,"Please scan the QR code with your authenticator!",-1)})),h=["src"];function k(e,t,a,o,k,w){var O=Object(c["resolveComponent"])("r-button"),j=Object(c["resolveComponent"])("r-form"),C=Object(c["resolveComponent"])("r-tabs-pane"),y=Object(c["resolveComponent"])("el-switch"),g=Object(c["resolveComponent"])("r-tabs"),B=Object(c["resolveDirective"])("debounce");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(g,{modelValue:e.data.active,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.data.active=t})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{label:"Change password",name:"changePassword"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{ref:"ruleFormRef",model:e.data.passFormData,cols:e.data.passFormItem.cols,data:e.data.passFormItem.data,disabled:e.data.passFormItem.disabled},{default:Object(c["withCtx"])((function(){return[e.showEdit?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(O,{type:"primary"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})),[[B,{func:e.edit},"300",{immediate:!0}]])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",d,[Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(O,{type:"primary"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})),[[B,{func:e.cancel,params:[e.ruleFormRef]},"300",{immediate:!0}]]),Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(O,{type:"primary"},{default:Object(c["withCtx"])((function(){return[m]})),_:1})),[[B,{func:e.save,params:[e.ruleFormRef]},"300",{immediate:!0}]])]))]})),_:1},8,["model","cols","data","disabled"])]})),_:1}),Object(c["createVNode"])(C,{label:"Open/Close 2FA",name:"open2FA"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",p,[b,Object(c["createVNode"])(y,{modelValue:e.enable2FA,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.enable2FA=t}),onChange:e.switchChange},null,8,["modelValue","onChange"]),Object(c["withDirectives"])(Object(c["createElementVNode"])("div",f,[v,Object(c["createElementVNode"])("img",{src:e.qrCodeUrl},null,8,h)],512),[[c["vShow"],!!e.qrCodeUrl]])])]})),_:1})]})),_:1},8,["modelValue"])])])])}var w=a("1da1"),O=(a("96cf"),a("d3b7"),a("159b"),a("b64b"),a("5502")),j=a("61be"),C=a("6b81"),y=a.n(C),g=Object(c["defineComponent"])({components:{ElSwitch:y.a},setup:function(){var e=Object(O["b"])(),t=Object(c["ref"])(""),a=Object(c["getCurrentInstance"])(),o=a.appContext.config.globalProperties.$message,n=Object(c["ref"])(),r=Object(c["ref"])(!1),l=Object(c["reactive"])({active:"changePassword",passFormItem:{cols:1,disabled:!0,data:[{type:"password",placeholder:"",value:"originalPassword",label:"Original Password",cols:1,rules:[{required:!0,message:"Please enter your password",trigger:"blur"}]},{type:"password",placeholder:"",value:"newPassword",label:"New Password",cols:1,rules:[{required:!0,message:"Please enter your new password",trigger:"blur"}]},{type:"password",placeholder:"",value:"confirmedNewPassword",label:"Confirmed New Password",cols:1,rules:[{required:!0,message:"Please enter your new password",trigger:"blur"}]}]},passFormData:{originalPassword:"",newPassword:"",confirmedNewPassword:""},openFormItem:{cols:1,disabled:!0,data:[{type:"checkbox",placeholder:"",value:"openFA",label:"Open 2FA",cols:1}]},openFormData:{openFA:1}}),i=Object(c["ref"])(!0),s=function(){i.value=!1,l.passFormItem.disabled=!1},d=function(e){e.$refs.form.clearValidate(),i.value=!0,l.passFormItem.disabled=!0,Object.keys(l.passFormData).forEach((function(e){l.passFormData[e]=""}))},u=function(e){e.validate((function(t,a){t&&Object(j["e"])(l.passFormData).then((function(t){d(e),o("Success","success")})).catch((function(e){o(e.message,"error")}))}))},m=function(a){var n=Object(c["reactive"])({enable2FA:a});Object(j["o"])(n).then((function(a){a.authFor2FA?t.value=a.authFor2FA.qrCodeUrl:t.value="",e.dispatch("accountInfo/setInfo"),o("Success","success")})).catch((function(e){o(e.message,"error")}))},p=Object(c["computed"])((function(){return e.state.accountInfo.updateData})),b=Object(c["computed"])((function(){return e.state.accountInfo.accountInfo}));return Object(c["onMounted"])(Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(p.value){t.next=3;break}return t.next=3,e.dispatch("accountInfo/setInfo");case 3:r.value=b.value.need2FA;case 4:case"end":return t.stop()}}),t)})))),{ruleFormRef:n,data:l,edit:s,cancel:d,save:u,showEdit:i,enable2FA:r,switchChange:m,qrCodeUrl:t}}}),B=(a("0eac"),a("6b0d")),E=a.n(B);const V=E()(g,[["render",k],["__scopeId","data-v-4bdf13c6"]]);t["default"]=V},"363a":function(e,t,a){},"3b35":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a("876b"),a("25af");var c=a("f7d9"),o=a("8df7"),n=a("0c6b"),r=a("6296"),l=a("2c28"),i=a("9ff4");const s=c.buildProps({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:Number,default:40},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:o.iconPropType,default:""},inactiveIcon:{type:o.iconPropType,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:c.definePropType(Function)},size:{type:String,validator:n.isValidComponentSize}}),d={[r.UPDATE_MODEL_EVENT]:e=>l.isBoolean(e)||i.isString(e)||l.isNumber(e),[r.CHANGE_EVENT]:e=>l.isBoolean(e)||i.isString(e)||l.isNumber(e),[r.INPUT_EVENT]:e=>l.isBoolean(e)||i.isString(e)||l.isNumber(e)};t.switchEmits=d,t.switchProps=s},"4a1f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=a("7a23"),o=a("9ff4");a("876b");var n=a("7e11"),r=a("c848");a("25af"),a("4f6e");var l=a("3b35"),i=a("cb7e"),s=a("e003"),d=a("a515"),u=a("e4ad"),m=a("6296"),p=a("f41e"),b=a("2c28");const f="ElSwitch",v=c.defineComponent({name:f,components:{ElIcon:n.ElIcon,Loading:r.Loading},props:l.switchProps,emits:l.switchEmits,setup(e,{emit:t}){const{formItem:a}=s.useFormItem(),n=d.useDisabled(c.computed(()=>e.loading)),r=u.useNamespace("switch"),l=d.useSize(),i=c.ref(!1!==e.modelValue),v=c.ref(),h=c.ref(),k=c.computed(()=>[r.b(),r.m(l.value),r.is("disabled",n.value),r.is("checked",O.value)]);c.watch(()=>e.modelValue,()=>{i.value=!0}),c.watch(()=>e.value,()=>{i.value=!1});const w=c.computed(()=>i.value?e.modelValue:e.value),O=c.computed(()=>w.value===e.activeValue);[e.activeValue,e.inactiveValue].includes(w.value)||(t(m.UPDATE_MODEL_EVENT,e.inactiveValue),t(m.CHANGE_EVENT,e.inactiveValue),t(m.INPUT_EVENT,e.inactiveValue)),c.watch(O,()=>{var t;v.value.checked=O.value,(e.activeColor||e.inactiveColor)&&y(),e.validateEvent&&(null==(t=null==a?void 0:a.validate)||t.call(a,"change").catch(e=>p.debugWarn(e)))});const j=()=>{const a=O.value?e.inactiveValue:e.activeValue;t(m.UPDATE_MODEL_EVENT,a),t(m.CHANGE_EVENT,a),t(m.INPUT_EVENT,a),c.nextTick(()=>{v.value.checked=O.value})},C=()=>{if(n.value)return;const{beforeChange:t}=e;if(!t)return void j();const a=t(),c=[o.isPromise(a),b.isBoolean(a)].some(e=>e);c||p.throwError(f,"beforeChange must return type `Promise<boolean>` or `boolean`"),o.isPromise(a)?a.then(e=>{e&&j()}).catch(e=>{p.debugWarn(f,"some error occurred: "+e)}):a&&j()},y=()=>{const t=O.value?e.activeColor:e.inactiveColor,a=h.value;e.borderColor?a.style.borderColor=e.borderColor:e.borderColor||(a.style.borderColor=t),a.style.backgroundColor=t,a.children[0].style.color=t},g=()=>{var e,t;null==(t=null==(e=v.value)?void 0:e.focus)||t.call(e)};return c.onMounted(()=>{(e.activeColor||e.inactiveColor||e.borderColor)&&y(),v.value.checked=O.value}),{ns:r,input:v,core:h,switchDisabled:n,checked:O,switchKls:k,handleChange:j,switchValue:C,focus:g}}}),h=["aria-checked","aria-disabled"],k=["id","name","true-value","false-value","disabled"],w=["aria-hidden"],O=["aria-hidden"],j=["aria-hidden"],C=["aria-hidden"];function y(e,t,a,o,n,r){const l=c.resolveComponent("el-icon"),i=c.resolveComponent("loading");return c.openBlock(),c.createElementBlock("div",{class:c.normalizeClass(e.switchKls),role:"switch","aria-checked":e.checked,"aria-disabled":e.switchDisabled,onClick:t[2]||(t[2]=c.withModifiers((...t)=>e.switchValue&&e.switchValue(...t),["prevent"]))},[c.createElementVNode("input",{id:e.id,ref:"input",class:c.normalizeClass(e.ns.e("input")),type:"checkbox",name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.switchDisabled,onChange:t[0]||(t[0]=(...t)=>e.handleChange&&e.handleChange(...t)),onKeydown:t[1]||(t[1]=c.withKeys((...t)=>e.switchValue&&e.switchValue(...t),["enter"]))},null,42,k),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?c.createCommentVNode("v-if",!0):(c.openBlock(),c.createElementBlock("span",{key:0,class:c.normalizeClass([e.ns.e("label"),e.ns.em("label","left"),e.ns.is("active",!e.checked)])},[e.inactiveIcon?(c.openBlock(),c.createBlock(l,{key:0},{default:c.withCtx(()=>[(c.openBlock(),c.createBlock(c.resolveDynamicComponent(e.inactiveIcon)))]),_:1})):c.createCommentVNode("v-if",!0),!e.inactiveIcon&&e.inactiveText?(c.openBlock(),c.createElementBlock("span",{key:1,"aria-hidden":e.checked},c.toDisplayString(e.inactiveText),9,w)):c.createCommentVNode("v-if",!0)],2)),c.createElementVNode("span",{ref:"core",class:c.normalizeClass(e.ns.e("core")),style:c.normalizeStyle({width:(e.width||40)+"px"})},[e.inlinePrompt?(c.openBlock(),c.createElementBlock("div",{key:0,class:c.normalizeClass(e.ns.e("inner"))},[e.activeIcon||e.inactiveIcon?(c.openBlock(),c.createElementBlock(c.Fragment,{key:0},[e.activeIcon?(c.openBlock(),c.createBlock(l,{key:0,class:c.normalizeClass([e.ns.is("icon"),e.checked?e.ns.is("show"):e.ns.is("hide")])},{default:c.withCtx(()=>[(c.openBlock(),c.createBlock(c.resolveDynamicComponent(e.activeIcon)))]),_:1},8,["class"])):c.createCommentVNode("v-if",!0),e.inactiveIcon?(c.openBlock(),c.createBlock(l,{key:1,class:c.normalizeClass([e.ns.is("icon"),e.checked?e.ns.is("hide"):e.ns.is("show")])},{default:c.withCtx(()=>[(c.openBlock(),c.createBlock(c.resolveDynamicComponent(e.inactiveIcon)))]),_:1},8,["class"])):c.createCommentVNode("v-if",!0)],64)):e.activeText||e.inactiveIcon?(c.openBlock(),c.createElementBlock(c.Fragment,{key:1},[e.activeText?(c.openBlock(),c.createElementBlock("span",{key:0,class:c.normalizeClass([e.ns.is("text"),e.checked?e.ns.is("show"):e.ns.is("hide")]),"aria-hidden":!e.checked},c.toDisplayString(e.activeText.substring(0,3)),11,O)):c.createCommentVNode("v-if",!0),e.inactiveText?(c.openBlock(),c.createElementBlock("span",{key:1,class:c.normalizeClass([e.ns.is("text"),e.checked?e.ns.is("hide"):e.ns.is("show")]),"aria-hidden":e.checked},c.toDisplayString(e.inactiveText.substring(0,3)),11,j)):c.createCommentVNode("v-if",!0)],64)):c.createCommentVNode("v-if",!0)],2)):c.createCommentVNode("v-if",!0),c.createElementVNode("div",{class:c.normalizeClass(e.ns.e("action"))},[e.loading?(c.openBlock(),c.createBlock(l,{key:0,class:c.normalizeClass(e.ns.is("loading"))},{default:c.withCtx(()=>[c.createVNode(i)]),_:1},8,["class"])):c.createCommentVNode("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?c.createCommentVNode("v-if",!0):(c.openBlock(),c.createElementBlock("span",{key:1,class:c.normalizeClass([e.ns.e("label"),e.ns.em("label","right"),e.ns.is("active",e.checked)])},[e.activeIcon?(c.openBlock(),c.createBlock(l,{key:0},{default:c.withCtx(()=>[(c.openBlock(),c.createBlock(c.resolveDynamicComponent(e.activeIcon)))]),_:1})):c.createCommentVNode("v-if",!0),!e.activeIcon&&e.activeText?(c.openBlock(),c.createElementBlock("span",{key:1,"aria-hidden":!e.checked},c.toDisplayString(e.activeText),9,C)):c.createCommentVNode("v-if",!0)],2))],10,h)}var g=i["default"](v,[["render",y],["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);t["default"]=g},"6b81":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a("876b");var c=a("4a1f"),o=a("3b35"),n=a("d53c");const r=n.withInstall(c["default"]);t.switchEmits=o.switchEmits,t.switchProps=o.switchProps,t.ElSwitch=r,t["default"]=r},"844d":function(e,t,a){"use strict";a("e5da")},df5f:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o={class:"page"},n={class:"panel"},r={class:"wallet"},l={key:0,class:"r-form-btn"},i=Object(c["createTextVNode"])("Edit"),s={key:1,class:"r-form-btn"},d=Object(c["createTextVNode"])("Cancel"),u=Object(c["createTextVNode"])("Save");function m(e,t,a,m,p,b){var f=Object(c["resolveComponent"])("r-button"),v=Object(c["resolveComponent"])("r-form"),h=Object(c["resolveDirective"])("debounce");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(v,{model:e.data.formData,cols:e.data.formItem.cols,data:e.data.formItem.data,disabled:e.data.formItem.disabled},{default:Object(c["withCtx"])((function(){return[e.showEdit?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(f,{type:"primary"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})),[[h,{func:e.edit},"300",{immediate:!0}]])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(f,{type:"primary"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})),[[h,{func:e.cancel},"300",{immediate:!0}]]),Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(f,{type:"primary"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})),[[h,{func:e.save},"300",{immediate:!0}]])]))]})),_:1},8,["model","cols","data","disabled"])])])])}var p=a("1da1"),b=(a("96cf"),a("d3b7"),a("159b"),a("b64b"),a("61be")),f=a("5502"),v=Object(c["defineComponent"])({setup:function(){var e=Object(f["b"])(),t=Object(c["getCurrentInstance"])(),a=t.appContext.config.globalProperties.$message,o=Object(c["reactive"])({formItem:{cols:1,disabled:!0,data:[{type:"input",placeholder:"",value:"fullName",label:"Full Name",cols:1},{type:"photo",value:"avatar",label:"Avatar",cols:1},{type:"input",placeholder:"",value:"country",label:"Country",cols:1,readonly:!0},{type:"input",placeholder:"",value:"bankName",label:"Bank Name",cols:1},{type:"input",placeholder:"",value:"username",label:"User Name",cols:1,readonly:!0},{type:"checkbox",placeholder:"",value:"need2FA",label:"Need 2FA",cols:1,readonly:!0}]},formData:{fullName:"",avatar:"",country:"",bankName:"",username:"",need2FA:!1},copyFormData:{}}),n=Object(c["computed"])((function(){return e.state.accountInfo.updateData})),r=Object(c["computed"])((function(){return e.state.accountInfo.accountInfo}));Object(c["onMounted"])(Object(p["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.value){t.next=3;break}return t.next=3,e.dispatch("accountInfo/setInfo");case 3:a=o.formData,Object.keys(a).forEach((function(e){a[e]=r.value[e],o.copyFormData[e]=r.value[e]}));case 5:case"end":return t.stop()}}),t)}))));var l=Object(c["ref"])(!0),i=function(){l.value=!1,o.formItem.disabled=!1},s=function(){l.value=!0,Object.keys(o.formData).forEach((function(e){o.formData[e]=o.copyFormData[e]})),o.formItem.disabled=!0},d=function(){Object(b["c"])(o.formData).then((function(t){var c=o.formData;Object.keys(c).forEach((function(e){c[e]=t[e],o.copyFormData[e]=t[e],l.value=!0,o.formItem.disabled=!0})),e.dispatch("accountInfo/setInfo"),a("Success","success")})).catch((function(e){a(e.message,"error")}))};return{data:o,edit:i,cancel:s,save:d,showEdit:l}}}),h=(a("844d"),a("6b0d")),k=a.n(h);const w=k()(v,[["render",m],["__scopeId","data-v-89adfe48"]]);t["default"]=w},e5da:function(e,t,a){}}]);