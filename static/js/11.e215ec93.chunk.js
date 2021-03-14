(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[11],{297:function(e,n,i){"use strict";i.d(n,"a",(function(){return t}));var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},306:function(e,n,i){"use strict";n.a=i.p+"static/media/logo.22754045.svg"},395:function(e,n,i){"use strict";i.r(n);var t,a,l,r,s=i(33),c=i(4),d=i(0),o=i(288),u=i(264),m=i(80),j=(i(161),i(50)),b=i(81),v=i(295),p=i(285),g=i(388),h=i(402),O=i(412),x=i(292),f=i.n(x);!function(e){e.Healthy="healthy",e.Vaccinated="vaccinated",e.Sick="sick",e.Adopted="adopted"}(t||(t={})),function(e){e.Implanted="Implanted",e.Removed="Removed"}(a||(a={})),function(e){e.Active="Active",e.Inactive="Inactive"}(l||(l={})),function(e){e.General="GENERAL",e.Medical="MEDICAL"}(r||(r={}));var k=i(8),y=i(19),N=i(278),S=i(269),q=i(75),D=i(410),C=i(386),V=i(398),w=i(297);function W(e){var n=e.options,i=e.name,t=e.defaultValue,a=e.disabled,l=e.optionsLimit,r=void 0===l?100:l,s=e.label,d=e.required,o=void 0!==d&&d,u=Object(v.d)(),m=u.control,b=u.errors,p=function(e,n){return Object(C.a)()(e,n).slice(0,r)};return Object(c.jsx)(v.a,{defaultValue:null!==t&&void 0!==t?t:null,rules:{required:!!o&&"Required"},render:function(e){var t;return Object(c.jsx)(V.a,Object(j.a)(Object(j.a)({},e),{},{value:null!==(t=e.value)&&void 0!==t?t:null,options:null!==n&&void 0!==n?n:[],filterOptions:p,getOptionLabel:function(e){return"string"===typeof e?e:e.value},getOptionSelected:function(e,n){return"string"===typeof e?e===n:(null===e||void 0===e?void 0:e.id)===(null===n||void 0===n?void 0:n.id)},onChange:function(n,i){e.onChange(i)},disabled:a,renderInput:function(e){var n,t;return Object(c.jsx)(D.a,Object(j.a)(Object(j.a)({},e),{},{variant:"outlined",color:"secondary",margin:"dense",error:!!b[i],label:null!==s&&void 0!==s?s:Object(w.a)(i),helperText:(null!==(n=null===(t=b[i])||void 0===t?void 0:t.message)&&void 0!==n?n:o)?"Required":"Optional"}))}}))},name:i,control:m})}function I(e){var n=e.gqlOptions,i=e.name,t=e.defaultValue,a=e.disabled,l=e.helperText,r=e.required,s=e.label,d=Object(q.useQuery)(n.query,{variables:n.variables,skip:a}).data;return Object(c.jsx)(W,{options:d?d[n.type]:[],name:i,helperText:l,defaultValue:t,disabled:a,required:r,label:s})}function A(e){var n,i=e.label,t=e.id,a=e.name,l=e.placeholder,r=e.defaultValue,s=e.fullWidth,o=void 0!==s&&s,u=e.rightHelperText,j=e.showLettersCount,p=void 0!==j&&j,g=e.maxLength,h=void 0===g?25:g,O=e.required,x=void 0!==O&&O,f=e.type,k=void 0===f?"text":f,y=e.InputLabelProps,N=G(),S=Object(v.d)(),q=S.register,C=S.errors,V=Object(d.useState)(""),w=Object(b.a)(V,2),W=w[0],I=w[1],A=Object(d.useState)(void 0),L=Object(b.a)(A,2),R=L[0],T=L[1];return Object(d.useEffect)((function(){if(a.includes(".")){var e=a.split("."),n=Object(b.a)(e,2),i=n[0],t=n[1];T(C[i]?C[i][t]:void 0)}else T(C[a])}),[C,a]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(D.a,{label:i,id:t,type:k,color:"secondary",placeholder:l,variant:"outlined",fullWidth:o,margin:"dense",name:a,error:!!R,helperText:(null!==(n=null===R||void 0===R?void 0:R.message)&&void 0!==n?n:x)?"Required":"Optional",InputLabelProps:y,value:W,onChange:function(e){var n;(n=e.target.value).length<=h&&I(n.trim())},defaultValue:r,inputRef:q({required:!!x&&"Required"})}),(p||u)&&Object(c.jsx)(m.a,{variant:"caption",color:"textSecondary",className:N.rightHelper,children:null!==u&&void 0!==u?u:"".concat(W.length,"/").concat(h)})]})}var G=f()((function(){return{rightHelper:{position:"absolute",right:12,bottom:12}}})),L={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetSpecies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"species"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetSpecies($language: String!) {\n    species(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},R={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetGenders"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"genders"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetGenders($language: String!) {\n    genders(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},T={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetBreeds"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"species"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"breeds"},arguments:[{kind:"Argument",name:{kind:"Name",value:"species"},value:{kind:"Variable",name:{kind:"Name",value:"species"}}},{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:143,source:{body:"query GetBreeds($species: String!, $language: String!) {\n    breeds(species: $species, language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},E={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetColors"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105,source:{body:"query GetColors($language: String!) {\n    colors(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},F={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetStatuses"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statuses"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:109,source:{body:"query GetStatuses($language: String!) {\n    statuses(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function $(e){var n=e.onNext,i=z(),t=Object(v.d)(),a=t.control,l=t.setValue,r=Object(y.f)(),s=Object(v.e)({control:a,name:"details.specie",defaultValue:void 0});Object(d.useEffect)((function(){l("breed",void 0)}),[s,l]);return Object(c.jsxs)(p.a,{container:!0,spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,container:!0,spacing:2,justify:"center",children:Object(c.jsx)(p.a,{item:!0,xs:12,sm:4,className:Object(k.a)(i.name,i.relative),children:Object(c.jsx)(A,{name:"name",label:"Name",id:"name",fullWidth:!0,showLettersCount:!0})})}),Object(c.jsxs)(p.a,{item:!0,xs:12,container:!0,spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(I,{name:"details.specie",label:"Specie",gqlOptions:{query:L,variables:{language:"lt"},type:"species"}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(I,{name:"details.gender",label:"Gender",gqlOptions:{query:R,variables:{language:"lt"},type:"genders"}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(I,{name:"details.breed",label:"Gender",disabled:!s,gqlOptions:{query:T,variables:{species:null===s||void 0===s?void 0:s.id,language:"lt"},type:"breeds"}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(I,{name:"details.color",label:"Color",gqlOptions:{query:E,variables:{language:"lt"},type:"colors"}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{type:"date",name:"details.birthDate",id:"birthDate",label:"Birth date",fullWidth:!0,InputLabelProps:{shrink:!0}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"imageUrl",label:"Image URL",id:"imageUrl",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,className:i.relative,children:Object(c.jsx)(A,{name:"description",label:"Description",id:"description",fullWidth:!0,showLettersCount:!0,maxLength:200})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(I,{name:"status",gqlOptions:{query:F,variables:{language:"lt"},type:"statuses"}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"details.weight",id:"weight",label:"Weight, kg",type:"number",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"details.allergy",id:"allergy",label:"Allergy",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"details.food",id:"food",label:"Food",fullWidth:!0})})]}),Object(c.jsx)(p.a,{item:!0,container:!0,children:Object(c.jsx)(S.a,{style:{width:"100%"}})}),Object(c.jsxs)(p.a,{item:!0,xs:12,container:!0,spacing:2,justify:"center",children:[Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(N.a,{color:"secondary",variant:"outlined",onClick:function(){r.push("/")},children:"Cancel"})}),Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(N.a,{color:"secondary",variant:"contained",onClick:n,children:"Next"})})]})]})}var P,z=f()((function(){return{form:{maxWidth:800},name:{minWidth:300},relative:{position:"relative"},fullWidth:{width:"100%"}}})),M=Object(d.memo)($),B=i(387),U=i(400),Q=i(411);function H(e){var n=e.onPrev,i=e.onNext,t=Object(v.d)().control;return Object(c.jsxs)(p.a,{container:!0,spacing:2,children:[Object(c.jsxs)(p.a,{item:!0,xs:12,container:!0,spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"chip.id",label:"Microchip ID",id:"chip.id",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"chip.companyId",label:"Microchip company ID",id:"chip.companyId",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{type:"date",name:"chip.installDate",id:"chip.installDate",label:"Microchip installation date",fullWidth:!0,InputLabelProps:{shrink:!0}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{name:"chip.installPrice",label:"Microchip install price",id:"chip.installPrice",fullWidth:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,children:Object(c.jsx)(v.a,{rules:{required:!0},control:t,name:"chip.status",render:function(e){return Object(c.jsxs)(Q.a,{value:e.value,onChange:function(n,i){return e.onChange(i)},children:[Object(c.jsx)(B.a,{value:P.Implanted,control:Object(c.jsx)(U.a,{size:"small"}),label:"Implanted"}),Object(c.jsx)(B.a,{value:P.Removed,control:Object(c.jsx)(U.a,{size:"small"}),label:"Removed"})]})}})})]}),Object(c.jsx)(p.a,{item:!0,container:!0,children:Object(c.jsx)(S.a,{style:{width:"100%"}})}),Object(c.jsxs)(p.a,{item:!0,xs:12,container:!0,spacing:2,justify:"center",children:[Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(N.a,{color:"secondary",variant:"outlined",onClick:n,children:"Back"})}),Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(N.a,{color:"secondary",variant:"contained",onClick:i,children:"Next"})})]})]})}!function(e){e.Implanted="implanted",e.Removed="removed"}(P||(P={}));var _,J=Object(d.memo)(H),Y=i(401);function K(e){var n=e.onPrev,i=Z(),t=Object(v.d)(),a=t.control,r=t.register;return Object(c.jsxs)(p.a,{container:!0,spacing:2,children:[Object(c.jsxs)(p.a,{item:!0,xs:12,container:!0,spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:12,children:Object(c.jsx)(v.a,{rules:{required:!0},control:a,name:"registration.incomingType",render:function(e){return Object(c.jsxs)(Q.a,{value:e.value,onChange:function(n,i){return e.onChange(i)},children:[Object(c.jsx)(B.a,{value:_.RESCUED,control:Object(c.jsx)(U.a,{size:"small"}),label:"Rescued"}),Object(c.jsx)(B.a,{value:_.GIVEN_AWAY,control:Object(c.jsx)(U.a,{size:"small"}),label:"Given away"})]})}})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,className:i.relative,children:Object(c.jsx)(A,{name:"registration.nr",label:"Registration No.",id:"registration.nr",fullWidth:!0,showLettersCount:!0,required:!0})}),Object(c.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(A,{type:"date",name:"registration.date",label:"Registration date",id:"registration.date",fullWidth:!0,InputLabelProps:{shrink:!0}})}),Object(c.jsx)(p.a,{item:!0,xs:12,children:Object(c.jsx)(v.a,{rules:{required:!0},control:a,name:"registration.status",render:function(e){return Object(c.jsxs)(Q.a,{value:e.value,onChange:function(n,i){return e.onChange(i)},children:[Object(c.jsx)(B.a,{value:l.Active,control:Object(c.jsx)(U.a,{size:"small"}),label:"Active"}),Object(c.jsx)(B.a,{value:l.Inactive,control:Object(c.jsx)(U.a,{size:"small"}),label:"Inactive"})]})}})}),Object(c.jsx)(p.a,{item:!0,xs:12,children:Object(c.jsx)(B.a,{control:Object(c.jsx)(Y.a,{size:"small"}),label:"Create rescue event",name:"createEvent",inputRef:r})})]}),Object(c.jsx)(p.a,{item:!0,container:!0,children:Object(c.jsx)(S.a,{style:{width:"100%"}})}),Object(c.jsxs)(p.a,{item:!0,xs:12,container:!0,spacing:2,justify:"center",children:[Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(N.a,{color:"secondary",variant:"outlined",onClick:n,children:"Back"})}),Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(N.a,{type:"submit",color:"secondary",variant:"contained",children:"Submit"})})]})]})}!function(e){e.RESCUED="rescued",e.GIVEN_AWAY="given_away"}(_||(_={}));var X=Object(d.memo)(K),Z=f()((function(){return{relative:{position:"relative"}}})),ee=["Animal details","Microchip details","Registration details"],ne={name:"",registration:{incomingType:_.RESCUED,status:l.Active},createEvent:!1,chip:{status:P.Implanted}};function ie(){var e=te(),n=Object(v.c)({defaultValues:ne}),i=n.handleSubmit,t=Object(d.useState)(1),a=Object(b.a)(t,2),l=a[0],r=a[1],s=Object(d.useRef)(null),u=function(e){var n=Object(d.useCallback)((function(){var n,i;return{width:(null===(n=e.current)||void 0===n?void 0:n.offsetWidth)||0,height:(null===(i=e.current)||void 0===i?void 0:i.offsetHeight)||0}}),[e]),i=Object(d.useState)({width:0,height:0}),t=Object(b.a)(i,2),a=t[0],l=t[1];return Object(d.useEffect)((function(){var i=function(){l(n())};return e.current&&l(n()),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[e,n]),a}(s).width;return Object(c.jsx)(v.b,Object(j.a)(Object(j.a)({},n),{},{children:Object(c.jsxs)(p.a,{container:!0,spacing:2,alignItems:"center",component:"form",className:e.form,onSubmit:i((function(e){console.log("FORM DATA: ",e)})),ref:s,children:[Object(c.jsx)(p.a,{item:!0,xs:12,className:e.fullWidth,children:Object(c.jsx)(O.a,{activeStep:l-1,alternativeLabel:!0,className:e.stepper,children:ee.map((function(e){return Object(c.jsx)(g.a,{children:Object(c.jsx)(h.a,{children:e})},e)}))})}),Object(c.jsx)(p.a,{item:!0,xs:12,className:e.stepsWrapper,children:Object(c.jsxs)(o.a,{style:{width:3*u,transform:"translate3d(".concat(-u*(l-1),"px,0px,0px)")},className:e.steps,children:[Object(c.jsx)(M,{onNext:function(){return r(l+1)}}),Object(c.jsx)(J,{onNext:function(){return r(l+1)},onPrev:function(){return r(l-1)}}),Object(c.jsx)(X,{onPrev:function(){return r(l-1)}})]})})]})}))}var te=f()((function(e){return{form:{maxWidth:800},stepper:{background:"transparent"},fullWidth:{width:"100%"},stepsWrapper:{overflow:"hidden"},steps:{display:"flex",alignItems:"baseline",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})}}})),ae=i(306),le=i(130);function re(){var e=se();return Object(c.jsxs)(o.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(c.jsx)(o.a,{className:e.imageWrapper,children:Object(c.jsx)("img",{src:ae.a,alt:"paw",className:e.image})}),Object(c.jsx)(m.a,{variant:"h5",children:"New Animal"})]})}var se=Object(u.a)((function(e){return{image:{fill:e.palette.primary.dark,width:"100%"},imageWrapper:Object(s.a)({padding:e.spacing(1),marginBottom:e.spacing(1),width:64,height:64,borderRadius:"50%",backgroundColor:e.palette.primary.light},e.breakpoints.up("md"),{padding:e.spacing(2),marginBottom:e.spacing(2),width:100,height:100})}}));n.default=function(){return Object(c.jsx)(le.a,{topSection:Object(c.jsx)(re,{}),children:Object(c.jsx)(ie,{})})}}}]);
//# sourceMappingURL=11.e215ec93.chunk.js.map