import{m as Se,u as we,V as xe,a as Ce,b as Ie}from"./VSelect-e5c25370.js";import{i as Me,j as pe,V as te}from"./VTextField-d53f6a8a.js";import{p as re,r as R,e as w,x as E,aU as Ae,bf as q,as as Pe,o as Ke,g as _e,be as De,E as j,b as Z,ap as Le,w as $,ax as ae,aK as Re,u as Oe,c,K as Q,f as L,V as ue,bn as Te,a3 as Ee,I as je,bo as Be,aY as ne}from"./index-d8570b98.js";import{f as Ne}from"./forwardRefs-49923578.js";import{u as Ue,V as ze,a as He,b as oe}from"./VMenu-f39875ea.js";import{m as $e,V as Qe}from"./VGrid-aa4a8c47.js";const We=(e,s,l)=>e==null||s==null?-1:e.toString().toLocaleLowerCase().indexOf(s.toString().toLocaleLowerCase()),Ye=re({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Ge(e,s,l){var C;const y=[],d=(l==null?void 0:l.default)??We,V=l!=null&&l.filterKeys?q(l.filterKeys):!1,b=Object.keys((l==null?void 0:l.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return y;e:for(let m=0;m<e.length;m++){const[S,M=S]=q(e[m]),r={},n={};let F=-1;if(s&&!(l!=null&&l.noFilter)){if(typeof S=="object"){const O=V||Object.keys(M);for(const I of O){const B=Pe(M,I),T=(C=l==null?void 0:l.customKeyFilter)==null?void 0:C[I];if(F=T?T(B,s,S):d(B,s,S),F!==-1&&F!==!1)T?r[I]=F:n[I]=F;else if((l==null?void 0:l.filterMode)==="every")continue e}}else F=d(S,s,S),F!==-1&&F!==!1&&(n.title=F);const p=Object.keys(n).length,A=Object.keys(r).length;if(!p&&!A||(l==null?void 0:l.filterMode)==="union"&&A!==b&&!p||(l==null?void 0:l.filterMode)==="intersection"&&(A!==b||!p))continue}y.push({index:m,matches:{...n,...r}})}return y}function Je(e,s,l,y){const d=R([]),V=R(new Map),b=w(()=>y!=null&&y.transform?E(s).map(m=>[m,y.transform(m)]):E(s));Ae(()=>{const m=typeof l=="function"?l():E(l),S=typeof m!="string"&&typeof m!="number"?"":String(m),M=Ge(b.value,S,{customKeyFilter:{...e.customKeyFilter,...E(y==null?void 0:y.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),r=E(s),n=[],F=new Map;M.forEach(p=>{let{index:A,matches:O}=p;const I=r[A];n.push(I),F.set(I.value,O)}),d.value=n,V.value=F});function C(m){return V.value.get(m.value)}return{filteredItems:d,filteredMatches:V,getMatches:C}}function Xe(e,s,l){if(s==null)return e;if(Array.isArray(s))throw new Error("Multiple matches is not implemented");return typeof s=="number"&&~s?c(Q,null,[c("span",{class:"v-autocomplete__unmask"},[e.substr(0,s)]),c("span",{class:"v-autocomplete__mask"},[e.substr(s,l)]),c("span",{class:"v-autocomplete__unmask"},[e.substr(s+l)])]):e}const Ze=re({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Ye({filterKeys:["title"]}),...Se(),...Ke(Me({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:!1})},"VAutocomplete"),nl=_e()({name:"VAutocomplete",props:Ze(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:l}=s;const{t:y}=De(),d=R(),V=j(!1),b=j(!0),C=j(!1),m=R(),S=R(),M=Z(e,"menu"),r=w({get:()=>M.value,set:t=>{var a;M.value&&!t&&((a=m.value)!=null&&a.ΨopenChildren)||(M.value=t)}}),n=j(-1),F=w(()=>{var t;return(t=d.value)==null?void 0:t.color}),p=w(()=>r.value?e.closeText:e.openText),{items:A,transformIn:O,transformOut:I}=Ue(e),{textColorClasses:B,textColorStyles:T}=Le(F),h=Z(e,"search",""),o=Z(e,"modelValue",[],t=>O(t===null?[null]:q(t)),t=>{const a=I(t);return e.multiple?a:a[0]??null}),ce=w(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:o.value.length),D=pe(),{filteredItems:W,getMatches:se}=Je(e,A,()=>b.value?"":h.value),x=w(()=>e.hideSelected?W.value.filter(t=>!o.value.some(a=>a.value===t.value)):W.value),N=w(()=>!!(e.chips||l.chip)),Y=w(()=>N.value||!!l.selection),ie=w(()=>o.value.map(t=>t.props.value)),U=w(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&h.value===((a=x.value[0])==null?void 0:a.title))&&x.value.length>0&&!b.value&&!C.value}),G=w(()=>e.hideNoData&&!x.value.length||e.readonly||(D==null?void 0:D.isReadonly.value)),J=R(),{onListScroll:ve,onListKeydown:fe}=we(J,d);function de(t){e.openOnClear&&(r.value=!0),h.value=""}function me(){G.value||(r.value=!0)}function he(t){G.value||(V.value&&(t.preventDefault(),t.stopPropagation()),r.value=!r.value)}function ge(t){var u,i,k;if(e.readonly||D!=null&&D.isReadonly.value)return;const a=d.value.selectionStart,v=o.value.length;if((n.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(r.value=!0),["Escape"].includes(t.key)&&(r.value=!1),U.value&&["Enter","Tab"].includes(t.key)&&P(x.value[0]),t.key==="ArrowDown"&&U.value&&((u=J.value)==null||u.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(t.key)){if(n.value<0){t.key==="Backspace"&&!h.value&&(n.value=v-1);return}const g=n.value,f=o.value[n.value];f&&!f.props.disabled&&P(f,!1),n.value=g>=v-1?v-2:g}if(t.key==="ArrowLeft"){if(n.value<0&&a>0)return;const g=n.value>-1?n.value-1:v-1;o.value[g]?n.value=g:(n.value=-1,d.value.setSelectionRange((i=h.value)==null?void 0:i.length,(k=h.value)==null?void 0:k.length))}if(t.key==="ArrowRight"){if(n.value<0)return;const g=n.value+1;o.value[g]?n.value=g:(n.value=-1,d.value.setSelectionRange(0,0))}}}function ye(t){if(ne(d.value,":autofill")||ne(d.value,":-webkit-autofill")){const a=A.value.find(v=>v.title===t.target.value);a&&P(a)}}function Ve(){var t;V.value&&(b.value=!0,(t=d.value)==null||t.focus())}function Fe(t){V.value=!0,setTimeout(()=>{C.value=!0})}function be(t){C.value=!1}function ke(t){(t==null||t===""&&!e.multiple)&&(o.value=[])}const X=j(!1);function P(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const v=o.value.findIndex(i=>e.valueComparator(i.value,t.value)),u=a??!~v;if(~v){const i=u?[...o.value,t]:[...o.value];i.splice(v,1),o.value=i}else u&&(o.value=[...o.value,t]);e.clearOnSelect&&(h.value="")}else{const v=a!==!1;o.value=v?[t]:[],h.value=v&&!Y.value?t.title:"",ae(()=>{r.value=!1,b.value=!0})}}return $(V,(t,a)=>{var v;t!==a&&(t?(X.value=!0,h.value=e.multiple||Y.value?"":String(((v=o.value.at(-1))==null?void 0:v.props.title)??""),b.value=!0,ae(()=>X.value=!1)):(!e.multiple&&h.value==null?o.value=[]:U.value&&!C.value&&!o.value.some(u=>{let{value:i}=u;return i===x.value[0].value})&&P(x.value[0]),r.value=!1,h.value="",n.value=-1))}),$(h,t=>{!V.value||X.value||(t&&(r.value=!0),b.value=!t)}),$(r,()=>{if(!e.hideSelected&&r.value&&o.value.length){const t=x.value.findIndex(a=>o.value.some(v=>a.value===v.value));Re&&window.requestAnimationFrame(()=>{var a;t>=0&&((a=S.value)==null||a.scrollToIndex(t))})}}),$(()=>e.items,(t,a)=>{r.value||V.value&&!a.length&&t.length&&(r.value=!0)}),Oe(()=>{const t=!!(!e.hideNoData||x.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),a=o.value.length>0,v=te.filterProps(e);return c(te,L({ref:d},v,{modelValue:h.value,"onUpdate:modelValue":[u=>h.value=u,ke],focused:V.value,"onUpdate:focused":u=>V.value=u,validationValue:o.externalValue,counterValue:ce.value,dirty:a,onChange:ye,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":r.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!Y.value,"v-autocomplete--selecting-index":n.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":de,"onMousedown:control":me,onKeydown:ge}),{...l,default:()=>c(Q,null,[c(ze,L({ref:m,modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ve},e.menuProps),{default:()=>[t&&c(He,L({ref:J,selected:ie.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:fe,onFocusin:Fe,onFocusout:be,onScrollPassive:ve,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var u,i,k;return[(u=l["prepend-item"])==null?void 0:u.call(l),!x.value.length&&!e.hideNoData&&(((i=l["no-data"])==null?void 0:i.call(l))??c(oe,{title:y(e.noDataText)},null)),c(xe,{ref:S,renderless:!0,items:x.value},{default:g=>{var le;let{item:f,index:K,itemRef:_}=g;const ee=L(f.props,{ref:_,key:K,active:U.value&&K===0?!0:void 0,onClick:()=>P(f,null)});return((le=l.item)==null?void 0:le.call(l,{item:f,index:K,props:ee}))??c(oe,L(ee,{role:"option"}),{prepend:z=>{let{isSelected:H}=z;return c(Q,null,[e.multiple&&!e.hideSelected?c(Ce,{key:f.value,modelValue:H,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&c(Qe,{image:f.props.prependAvatar},null),f.props.prependIcon&&c(ue,{icon:f.props.prependIcon},null)])},title:()=>{var z,H;return b.value?f.title:Xe(f.title,(z=se(f))==null?void 0:z.title,((H=h.value)==null?void 0:H.length)??0)}})}}),(k=l["append-item"])==null?void 0:k.call(l)]}})]}),o.value.map((u,i)=>{function k(_){_.stopPropagation(),_.preventDefault(),P(u,!1)}const g={"onClick:close":k,onMousedown(_){_.preventDefault(),_.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=N.value?!!l.chip:!!l.selection,K=f?Te(N.value?l.chip({item:u,index:i,props:g}):l.selection({item:u,index:i})):void 0;if(!(f&&!K))return c("div",{key:u.value,class:["v-autocomplete__selection",i===n.value&&["v-autocomplete__selection--selected",B.value]],style:i===n.value?T.value:{}},[N.value?l.chip?c(Ee,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[K]}):c(Ie,L({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},g),null):K??c("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&i<o.value.length-1&&c("span",{class:"v-autocomplete__selection-comma"},[je(",")])])])})]),"append-inner":function(){var g;for(var u=arguments.length,i=new Array(u),k=0;k<u;k++)i[k]=arguments[k];return c(Q,null,[(g=l["append-inner"])==null?void 0:g.call(l,...i),e.menuIcon?c(ue,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:he,onClick:Be,"aria-label":y(p.value),title:y(p.value)},null):void 0])}})}),Ne({isFocused:V,isPristine:b,menu:r,search:h,filteredItems:W,select:P},d)}});export{nl as V};