import{p,m as v,g as b,r as F,u as V,c as y}from"./index-d8570b98.js";import{m as h,c as R}from"./VTextField-d53f6a8a.js";import{f as P}from"./forwardRefs-49923578.js";const k=p({...v(),...h()},"VForm"),S=b()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=R(r),s=F();function u(t){t.preventDefault(),a.reset()}function c(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(l=>{var m;let{valid:d}=l;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return V(()=>{var t;return y("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:c},[(t=n.default)==null?void 0:t.call(n,a)])}),P(a,s)}});export{S as V};