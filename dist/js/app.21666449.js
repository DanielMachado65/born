(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0188":function(t,e,a){"use strict";var n=a("393c"),r=a.n(n);r.a},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0400":function(t,e,a){"use strict";var n=a("13cf"),r=a.n(n);r.a},"0d71":function(t,e,a){"use strict";var n=a("5fcd"),r=a.n(n);r.a},"0e84":function(t,e,a){"use strict";var n=a("a0f5"),r=a.n(n);r.a},"13cf":function(t,e,a){},"16c5":function(t,e,a){t.exports=a.p+"img/experience-5.788a9e22.png"},1933:function(t,e,a){t.exports=a.p+"img/experience-6.5ac89f81.png"},"2ba1":function(t,e,a){},"393c":function(t,e,a){},"43bb":function(t,e,a){t.exports=a.p+"img/born-negativo.5295daa6.png"},5028:function(t,e,a){t.exports=a.p+"img/experience-1.15d4a164.png"},"544a":function(t,e,a){"use strict";var n=a("2ba1"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("Menu"),a("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"items"},[a("v-icon",{staticClass:"mr-5",attrs:{color:"white",size:"30"}},[t._v("fab fa-facebook")]),a("v-icon",{staticClass:"mr-6",attrs:{color:"white",size:"30"}},[t._v("fab fa-instagram")])],1)])},i=[],c={name:"Footer"},l=c,u=(a("0188"),a("2877")),d=a("6544"),p=a.n(d),m=a("132d"),v=Object(u["a"])(l,s,i,!1,null,"61f85f21",null),f=v.exports;p()(v,{VIcon:m["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"menu"},[a("div",{staticClass:"logo"},[a("v-img",{staticClass:"logo",attrs:{src:t.logo,width:"80",alt:"Logo"},on:{click:function(e){return t.onClick("home")}}})],1),a("div",{staticClass:"menu-itens"},[a("span",{staticClass:"mr-5",on:{click:function(e){return t.onClick("plans")}}},[t._v("Planos")]),a("span",{staticClass:"mr-6",on:{click:function(e){return t.onClick("subscribe")}}},[t._v("Inscrição")]),a("span",{staticClass:"mr-5",on:{click:function(e){return t.onClick("store")}}},[t._v("Loja")])])])},x=[],h=a("43bb"),g=a.n(h),C={name:"Menu",data:function(){return{logo:g.a}},methods:{onClick:function(t){this.$router.push({name:t})}}},_=C,w=(a("873a"),a("adda")),V=Object(u["a"])(_,b,x,!1,null,"43f6a05e",null),j=V.exports;p()(V,{VImg:w["a"]});var k={name:"App",components:{Menu:j}},E=k,I=(a("034f"),a("7496")),y=Object(u["a"])(E,r,o,!1,null,null,null),O=y.exports;p()(y,{VApp:I["a"]});var P=a("660e");n["a"].use(P["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1/0}});a("15f5");var $=a("f309");n["a"].use($["a"]);var F=new $["a"]({icons:{iconfont:"fa"}}),S=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"home"}},[a("div",{staticClass:"header"},[a("v-img",{staticClass:"born-ministerio-logo",attrs:{src:t.born,alt:"Apresentação"}}),a("h2",{staticClass:"button"},[t._v("@bornministerio")])],1),a("div",{staticClass:"lateral-left"},[t._v("Projeto que transforma")]),a("div",{staticClass:"lateral-right"},[t._v("Projeto que transforma")]),a("Footer"),a("About"),a("btn-submit",{attrs:{text:"assinar",onClick:t.routeToSubscribe}}),a("h2",{staticClass:"text-center subtitle"},[t._v("Born II - Maturidade Espirtual")]),a("ExperiencesBornII")],1)},R=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-10"},[a("v-card",{attrs:{dark:""}},[a("v-row",[a("v-col",{attrs:{md:"7"}},[a("v-img",{staticClass:"born-start",attrs:{src:t.start,height:"400",alt:"Apresentação"}})],1),a("v-col",{attrs:{md:"5"}},[a("v-row",[a("v-col",{attrs:{md:"12"}},[a("h3",[t._v("O projeto")]),a("hr"),a("span",[t._v(" O born surgiu da necessidade que encontramos inicialmente nas igrejas de viver uma experiência única e transformadora com Cristo através de novos formatos e realidades do cristianismo ")])])],1)],1)],1)],1)],1)},q=[],M=a("8ad8"),z=a.n(M),D={name:"About",data:function(){return{start:z.a}}},T=D,L=(a("544a"),a("b0af")),J=a("62ad"),N=a("a523"),H=a("0fd9"),Q=Object(u["a"])(T,A,q,!1,null,"05d74636",null),G=Q.exports;p()(Q,{VCard:L["a"],VCol:J["a"],VContainer:N["a"],VImg:w["a"],VRow:H["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{md:"12"}},[a("v-btn",{staticClass:"white--text",attrs:{color:"purple darken-3",disabled:t.disabled},on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[t._v(t._s(t.text))])],1)],1)],1)},U=[],W={name:"BtnSubmit",props:{text:String,disabled:Boolean,onClick:{type:Function}}},X=W,Y=(a("63c9"),a("8336")),Z=Object(u["a"])(X,K,U,!1,null,"56cb126f",null),tt=Z.exports;p()(Z,{VBtn:Y["a"],VCol:J["a"],VContainer:N["a"],VRow:H["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{md:"12"}},[a("v-row",[a("v-col",{attrs:{md:"4 text-center box-center"}},[a("v-img",{staticClass:"experience img-center",attrs:{src:t.experience1,width:"300px",alt:"Foto da Experiencia"}}),a("h3",{staticClass:"mt-2"},[t._v("Espaço")]),a("span",[t._v(" Realizado em Fevereiro de 2019 na cidade de Curitiba a primeira edição do BORN trouxe muita entrega e espiritualidade para nossos participantes, além de acomodar todos em um ambiente confortável e preparado. ")])],1),a("v-col",{attrs:{md:"4 text-center box-center"}},[a("v-img",{staticClass:"experience img-center",attrs:{src:t.experience2,width:"300px",alt:"Foto da Experiencia"}}),a("h3",{staticClass:"mt-2"},[t._v("Evento")]),a("span",[t._v(" Dentre todos os valores aprendidos no evento como colaboração, desenvolvimento pessoal e espiritualidade notamos que muitos jovens saíram impactados a mudar suas vidas. ")])],1),a("v-col",{attrs:{md:"4 text-center box-center"}},[a("v-img",{staticClass:"experience img-center",attrs:{src:t.experience3,width:"300px",alt:"Foto da Experiencia"}}),a("h3",{staticClass:"mt-2"},[t._v("Participantes")]),a("span",[t._v(" Com aproximadamente 70 participantes presentes fora os colaboradores tivemos atividades radicais complementares como o passeio de raft. Jovens de diferentes estados e cidades dos 18 aos 35 anos. ")])],1)],1)],1)],1)],1)},at=[],nt=a("5028"),rt=a.n(nt),ot=a("bd7a"),st=a.n(ot),it=a("e079"),ct=a.n(it),lt={name:"ExperiencesBornI",data:function(){return{experience1:rt.a,experience2:st.a,experience3:ct.a}}},ut=lt,dt=(a("7898"),Object(u["a"])(ut,et,at,!1,null,"22f3df92",null));dt.exports;p()(dt,{VCol:J["a"],VContainer:N["a"],VImg:w["a"],VRow:H["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{md:"12"}},[a("v-row",[a("v-col",{attrs:{md:"4 text-center box-center"}},[a("v-img",{staticClass:"experience img-center",attrs:{src:t.experience4,width:"300px",alt:"Foto da Experiencia"}}),a("h3",{staticClass:"mt-2"},[t._v("Espaço")]),a("span",[t._v(" Realizado em Fevereiro de 2019 na cidade de Curitiba a primeira edição do BORN trouxe muita entrega e espiritualidade para nossos participantes, além de acomodar todos em um ambiente confortável e preparado. ")])],1),a("v-col",{attrs:{md:"4 text-center box-center"}},[a("v-img",{staticClass:"experience img-center",attrs:{src:t.experience5,width:"300px",alt:"Foto da Experiencia"}}),a("h3",{staticClass:"mt-2"},[t._v("Evento")]),a("span",[t._v(" Dentre todos os valores aprendidos no evento como colaboração, desenvolvimento pessoal e espiritualidade notamos que muitos jovens saíram impactados a mudar suas vidas. ")])],1),a("v-col",{attrs:{md:"4 text-center box-center"}},[a("v-img",{staticClass:"experience img-center",attrs:{src:t.experience6,width:"300px",alt:"Foto da Experiencia"}}),a("h3",{staticClass:"mt-2"},[t._v("Participantes")]),a("span",[t._v(" Com aproximadamente 70 participantes presentes fora os colaboradores tivemos atividades radicais complementares como o passeio de raft. Jovens de diferentes estados e cidades dos 18 aos 35 anos. ")])],1)],1)],1)],1)],1)},mt=[],vt=a("e685"),ft=a.n(vt),bt=a("16c5"),xt=a.n(bt),ht=a("1933"),gt=a.n(ht),Ct={name:"ExperiencesBornI",data:function(){return{experience4:ft.a,experience5:xt.a,experience6:gt.a}}},_t=Ct,wt=(a("0400"),Object(u["a"])(_t,pt,mt,!1,null,"148b19e6",null)),Vt=wt.exports;p()(wt,{VCol:J["a"],VContainer:N["a"],VImg:w["a"],VRow:H["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"float-point-white "+t.localtion,style:{background:t.color}})},kt=[],Et={name:"FloatPoint",props:{localtion:String,color:{type:String,default:"white"}}},It=Et,yt=(a("8228"),Object(u["a"])(It,jt,kt,!1,null,"0e532868",null)),Ot=(yt.exports,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"lateral-left"},[t._v("Projeto que transforma")]),a("div",{staticClass:"lateral-right"},[t._v("Projeto que transforma")])])}],$t={name:"Laterals"},Ft=$t,St=(a("db0e"),Object(u["a"])(Ft,Ot,Pt,!1,null,"23a72706",null)),Bt=St.exports,Rt={name:"Home",components:{Footer:f,About:G,BtnSubmit:tt,ExperiencesBornII:Vt},data:function(){return{born:g.a}},methods:{routeToSubscribe:function(){this.$router.push({name:"subscribe"})}}},At=Rt,qt=(a("0e84"),Object(u["a"])(At,B,R,!1,null,"dda96c68",null)),Mt=qt.exports;p()(qt,{VContainer:N["a"],VImg:w["a"]});var zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"plan"}},[a("v-card",{attrs:{dark:""}},[a("v-row",[a("v-col",[a("h1",{staticClass:"text-center"},[t._v("Investimento - Padrinhos")]),a("v-divider",{staticClass:"center",attrs:{dark:"",size:"2px",width:"50%"}})],1)],1),a("v-container",[a("v-row",[a("v-col",{staticClass:"text-center box-select",on:{click:function(e){return t._onChangePlan("basic")}}},[a("v-img",{staticClass:"flower-logo mb-5",attrs:{src:t.florI,width:"150px",height:"150px",alt:"Flor"}}),a("h3",{staticClass:"button mb-4",style:t.isActive("basic")},[t._v("Amarelo - Basic")]),a("span",[t._v("R$ 34,99 mensal, incluso 1 camiseta")])],1),a("v-col",{staticClass:"text-center box-select",on:{click:function(e){return t._onChangePlan("medium")}}},[a("v-img",{staticClass:"flower-logo mb-5",attrs:{src:t.florII,width:"150px",height:"150px",alt:"Flor"}}),a("h3",{staticClass:"button mb-4",style:t.isActive("medium")},[t._v("Vermelho - Medium")]),a("span",[t._v("R$ 99,99 mensal, incluso 1 camiseta + 1 inscrição")])],1),a("v-col",{staticClass:"text-center box-select",on:{click:function(e){return t._onChangePlan("highest")}}},[a("v-img",{staticClass:"flower-logo mb-5",attrs:{src:t.florIII,width:"150px",height:"150px",alt:"Flor"}}),a("h3",{staticClass:"button mb-4",style:t.isActive("highest")},[t._v("Roxo - Big Dreams")]),a("span",[t._v("R$ 199,99 mensal, incluso 1 camiseta + 2 inscrições +1 bíblia comentada por")])],1)],1)],1),a("v-row",[a("v-col",[a("btn-submit",{attrs:{text:"Quero Assinar",disabled:t.readyForSubmit}})],1)],1)],1)],1)},Dt=[],Tt=a("e5bc"),Lt=a.n(Tt),Jt=a("5d9e"),Nt=a.n(Jt),Ht=a("ed21"),Qt=a.n(Ht),Gt={name:"Plan",data:function(){return{florI:Lt.a,florII:Nt.a,florIII:Qt.a,plan:null}},computed:{readyForSubmit:function(){return!this.plan}},components:{BtnSubmit:tt},methods:{isActive:function(t){return console.log(t),this.plan==t?{background:"#6a1b9a",borderColor:"#6a1b9a"}:{}},_onChangePlan:function(t){this.plan=t}}},Kt=Gt,Ut=(a("0d71"),a("ce7e")),Wt=Object(u["a"])(Kt,zt,Dt,!1,null,"b6a5b2da",null),Xt=Wt.exports;p()(Wt,{VCard:L["a"],VCol:J["a"],VContainer:N["a"],VDivider:Ut["a"],VImg:w["a"],VRow:H["a"]});var Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"plan"}},[a("v-row",[a("v-col",[a("h1",{staticClass:"text-center"},[t._v("Em construção")])])],1)],1)},Zt=[],te={name:"Store",data:function(){return{}}},ee=te,ae=(a("81aa"),Object(u["a"])(ee,Yt,Zt,!1,null,"6498514e",null)),ne=ae.exports;p()(ae,{VCol:J["a"],VContainer:N["a"],VRow:H["a"]});var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"subscribe"}},[a("v-card",{attrs:{dark:""}},[a("v-row",[a("v-col",[a("h1",{staticClass:"text-center"},[t._v("Inscrição")]),a("v-divider")],1)],1),a("v-container",[a("v-row",[a("v-col",{attrs:{md:"6"}},[a("v-text-field",{attrs:{type:"text",label:"Nome",color:"purple darken-3",hint:"Preencha com o seu nome completo","persistent-hint":""}})],1),a("v-col",{attrs:{md:"6"}},[a("v-text-field",{attrs:{type:"email",label:"E-mail",hint:"Preencha com o seu e-mail","persistent-hint":""}})],1)],1),a("v-row",[a("v-spacer"),a("v-col",{attrs:{md:"2"}},[a("v-btn",{staticClass:"white--text",attrs:{small:"",color:"purple darken-3 "}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("fas fa-check-square")]),t._v("Finalizar ")],1)],1)],1)],1)],1),"md"===this.$mq||"lg"===this.$mq?a("Laterals"):t._e()],1)},oe=[],se={name:"Subscribe",data:function(){return{}},components:{Laterals:Bt}},ie=se,ce=(a("df55"),a("2fa4")),le=a("8654"),ue=Object(u["a"])(ie,re,oe,!1,null,"5cfcdd8f",null),de=ue.exports;p()(ue,{VBtn:Y["a"],VCard:L["a"],VCol:J["a"],VContainer:N["a"],VDivider:Ut["a"],VIcon:m["a"],VRow:H["a"],VSpacer:ce["a"],VTextField:le["a"]}),n["a"].use(S["a"]);var pe=new S["a"]({mode:"history",base:"/",routes:[{name:"home",path:"/",component:Mt},{name:"plans",path:"/plans",component:Xt},{name:"store",path:"/store",component:ne},{name:"subscribe",path:"/subscribe",component:de}]}),me=a("2f62");n["a"].use(me["a"]);var ve=new me["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("d88a");n["a"].config.productionTip=!1,new n["a"]({vuetify:F,router:pe,store:ve,render:function(t){return t(O)}}).$mount("#app")},"5d9e":function(t,e,a){t.exports=a.p+"img/flor-3.53665c8d.png"},"5fcd":function(t,e,a){},"63c9":function(t,e,a){"use strict";var n=a("6d49"),r=a.n(n);r.a},"6bc6":function(t,e,a){},"6d49":function(t,e,a){},7234:function(t,e,a){},7898:function(t,e,a){"use strict";var n=a("6bc6"),r=a.n(n);r.a},"81aa":function(t,e,a){"use strict";var n=a("e522"),r=a.n(n);r.a},8228:function(t,e,a){"use strict";var n=a("bf18"),r=a.n(n);r.a},"85ec":function(t,e,a){},"873a":function(t,e,a){"use strict";var n=a("d376"),r=a.n(n);r.a},"8ad8":function(t,e,a){t.exports=a.p+"img/start.fd8d5288.png"},a0f5:function(t,e,a){},b5cf:function(t,e,a){},bd7a:function(t,e,a){t.exports=a.p+"img/experience-2.60bc91d8.png"},bf18:function(t,e,a){},d376:function(t,e,a){},d88a:function(t,e,a){},db0e:function(t,e,a){"use strict";var n=a("b5cf"),r=a.n(n);r.a},df55:function(t,e,a){"use strict";var n=a("7234"),r=a.n(n);r.a},e079:function(t,e,a){t.exports=a.p+"img/experience-3.b26a861c.png"},e522:function(t,e,a){},e5bc:function(t,e,a){t.exports=a.p+"img/flor-1.ef87d1b2.png"},e685:function(t,e,a){t.exports=a.p+"img/experience-4.63ca4c80.png"},ed21:function(t,e,a){t.exports=a.p+"img/flor-2.51dbf374.png"}});
//# sourceMappingURL=app.21666449.js.map