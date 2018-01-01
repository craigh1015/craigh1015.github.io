webpackJsonp([0],{"/P4m":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container z-depth-3"},[this._m(0),this._v(" "),e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"responsive-img",attrs:{src:"/static/img/obalon_logo.png",alt:"Obalon logo"}})])}]},n=a("VU/8")({name:"app",components:{}},i,!1,null,null,null).exports,r=a("/ocq"),o={name:"step1",data:function(){return{weight:null,height:"68",zipcode:null}},created:function(){this.$formData.weight&&(this.weight=this.$formData.weight),this.$formData.height&&(this.height=this.$formData.height),this.$formData.zipcode&&(this.zipcode=this.$formData.zipcode)},methods:{processStep:function(){this.$formData.weight=this.weight,this.$formData.height=this.height,this.$formData.zipcode=this.zipcode,this.$router.push({name:"step2"})},zipcodeChange:function(){this.lookupZip(this.zipcode)},lookupZip:function(t){var e=this.generateOpenCageDataUrlZip(t),a=this;fetch(e).then(function(t){return t.json()}).then(function(t){a.$formData.city=t.results[0].components.city,a.$formData.state=t.results[0].components.state,a.$formData.country=t.results[0].components["ISO_3166-1_alpha-2"],a.$bus.$emit("zipLookupComplete")})},generateOpenCageDataUrlZip:function(t){return"https://api.opencagedata.com/geocode/v1/json?key=41886799cfe34e87af44a27cf6ab3107&q="+t+"&no_annotations=1&limit=1"}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"step1"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.processStep(e)}}},[a("div",{staticClass:"input-field"},[a("label",{class:{active:this.weight},attrs:{for:"weight"}},[t._v("Enter your weight in lbs")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"validate",attrs:{type:"tel",name:"weight",id:"weight",autofocus:""},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}})]),t._v(" "),a("div",[a("label",[t._v("Select your height")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"browser-default",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.height=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"60"}},[t._v("5' 0\"")]),t._v(" "),a("option",{attrs:{value:"61"}},[t._v("5' 1\"")]),t._v(" "),a("option",{attrs:{value:"62"}},[t._v("5' 2\"")]),t._v(" "),a("option",{attrs:{value:"63"}},[t._v("5' 3\"")]),t._v(" "),a("option",{attrs:{value:"64"}},[t._v("5' 4\"")]),t._v(" "),a("option",{attrs:{value:"65"}},[t._v("5' 5\"")]),t._v(" "),a("option",{attrs:{value:"66"}},[t._v("5' 6\"")]),t._v(" "),a("option",{attrs:{value:"67"}},[t._v("5' 7\"")]),t._v(" "),a("option",{attrs:{value:"68"}},[t._v("5' 8\"")]),t._v(" "),a("option",{attrs:{value:"69"}},[t._v("5' 9\"")]),t._v(" "),a("option",{attrs:{value:"70"}},[t._v("5' 10\"")]),t._v(" "),a("option",{attrs:{value:"71"}},[t._v("5' 11\"")]),t._v(" "),a("option",{attrs:{value:"72"}},[t._v("6' 0\"")]),t._v(" "),a("option",{attrs:{value:"73"}},[t._v("6' 1\"")]),t._v(" "),a("option",{attrs:{value:"74"}},[t._v("6' 2\"")]),t._v(" "),a("option",{attrs:{value:"75"}},[t._v("6' 3\"")]),t._v(" "),a("option",{attrs:{value:"76"}},[t._v("6' 4\"")]),t._v(" "),a("option",{attrs:{value:"77"}},[t._v("6' 5\"")]),t._v(" "),a("option",{attrs:{value:"78"}},[t._v("6' 6\"")])])]),t._v(" "),a("div",{staticClass:"input-field"},[a("label",{class:{active:this.zipcode},attrs:{for:"zipcode"}},[t._v("Enter your zipcode")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.zipcode,expression:"zipcode"}],attrs:{type:"tel",name:"zipcode",id:"zipcode"},domProps:{value:t.zipcode},on:{change:t.zipcodeChange,input:function(e){e.target.composing||(t.zipcode=e.target.value)}}})]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"flow-text center-align"},[this._v("New FDA approved, non surgical weight loss.")]),this._v(" "),e("p",{staticClass:"flow-text center-align"},[this._v("See if you qualify for $1500 off!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"determinate",staticStyle:{width:"33%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field center-align"},[e("button",{staticClass:"btn waves-effect waves-teal",attrs:{type:"submit"}},[this._v("Continue")])])}]},c=a("VU/8")(o,l,!1,function(t){a("nJ8E")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"step2"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.processStep(e)}}},[a("div",{staticClass:"input-field"},[a("label",{class:{active:this.address},attrs:{for:"address"}},[t._v("Street address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"validate",attrs:{type:"text",name:"address",id:"address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-field"},[a("label",{class:{active:this.city},attrs:{for:"city"}},[t._v("City")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"validate",attrs:{type:"text",name:"city",id:"city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-field"},[a("label",{class:{active:this.state},attrs:{for:"state"}},[t._v("State")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"validate",attrs:{type:"text",name:"state",id:"state"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-field"},[a("label",{class:{active:this.zipcode},attrs:{for:"zipcode"}},[t._v("zipcode")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.zipcode,expression:"zipcode"}],attrs:{type:"tel",name:"zipcode",id:"zipcode"},domProps:{value:t.zipcode},on:{input:function(e){e.target.composing||(t.zipcode=e.target.value)}}})]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"flow-text center-align"},[this._v("Lets check for a provider in your area.")]),this._v(" "),e("p",{staticClass:"flow-text center-align"},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"determinate",staticStyle:{width:"66%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field center-align"},[e("button",{staticClass:"btn waves-effect waves-teal",attrs:{type:"submit"}},[this._v("Next")])])}]},p=a("VU/8")({name:"step2",data:function(){return{address:null,city:null,state:null,zipcode:null}},created:function(){this.$bus.$on("zipLookupComplete",this.updateData),this.updateData()},destroy:function(){this.$bus.$off("zipLookupComplete",this.updateData)},methods:{processStep:function(){this.$formData.address=this.address,this.$formData.city=this.city,this.$formData.state=this.state,this.$formData.zipcode=this.zipcode,this.$router.push({name:"step3"})},updateData:function(){this.$formData.address&&(this.address=this.$formData.address),this.$formData.city&&(this.city=this.$formData.city),this.$formData.state&&(this.state=this.$formData.state),this.$formData.zipcode&&(this.zipcode=this.$formData.zipcode)}}},u,!1,function(t){a("TH/v")},null,null).exports,v={name:"step3",data:function(){return{}},mounted:function(){window.Materialize.updateTextFields()},methods:{processStep:function(){this.$router.push({name:"thankyou"})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"step2"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.processStep(e)}}},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"flow-text center-align"},[this._v("Great news! Last step.")]),this._v(" "),e("p",{staticClass:"flow-text center-align"},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"determinate",staticStyle:{width:"100%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field"},[e("label",{attrs:{for:"first-name"}},[this._v("First name")]),this._v(" "),e("input",{staticClass:"validate",attrs:{type:"text",name:"first-name",id:"first-name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field"},[e("label",{attrs:{for:"last-name"}},[this._v("Last name")]),this._v(" "),e("input",{staticClass:"validate",attrs:{type:"text",name:"last-name",id:"last-name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field"},[e("label",{attrs:{for:"email"}},[this._v("Email address")]),this._v(" "),e("input",{staticClass:"validate",attrs:{type:"email",name:"email",id:"email"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field"},[e("label",{attrs:{for:"phone"}},[this._v("Phone number")]),this._v(" "),e("input",{staticClass:"validate",attrs:{type:"tel",name:"phone",id:"phone"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"filled-in",attrs:{type:"checkbox",name:"agree-terms",id:"agree-terms"}}),this._v(" "),e("label",{attrs:{for:"agree-terms"}},[e("span",{staticClass:"flow-text"},[this._v("By submitting this form I agree to be contacted and to HIPPA waiver.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-field center-align"},[e("button",{staticClass:"btn waves-effect waves-teal",attrs:{type:"submit"}},[this._v("I'm ready to start losing")])])}]},h=a("VU/8")(v,d,!1,function(t){a("mPJu")},null,null).exports,m={name:"thankyou",data:function(){return{}},mounted:function(){window.Materialize.updateTextFields()},methods:{}},f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"step2"}},[e("div",[e("p",{staticClass:"flow-text center-align"},[this._v("Thankyou")])])])}]},_=a("VU/8")(m,f,!1,function(t){a("/P4m")},null,null).exports;s.a.use(r.a);var g=new r.a({routes:[{path:"/",name:"step1",component:c},{path:"/step2",name:"step2",component:p},{path:"/step3",name:"step3",component:h},{path:"/thankyou",name:"thankyou",component:_}]});s.a.config.productionTip=!1,s.a.prototype.$bus=new s.a,s.a.prototype.$formData={},new s.a({el:"#app",router:g,template:"<App/>",components:{App:n}})},"TH/v":function(t,e){},mPJu:function(t,e){},nJ8E:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d4cae4a61fd0f513e76f.js.map