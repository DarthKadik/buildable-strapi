import{d as l,b3 as p,u as x,b4 as u,j as s,b5 as r,B as a,F as t,T as c}from"./strapi-DnnX_AvL.js";import{S as g}from"./SSOProviders-BD7LHrkI-0FirbSBl.js";const d=l(p)`
  flex: 1;
`,h=i=>{const{formatMessage:n}=x(),{isLoading:o,data:e=[]}=u(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!o&&e.length===0?s.jsx(r,{...i}):s.jsx(r,{...i,children:s.jsx(a,{paddingTop:7,children:s.jsxs(t,{direction:"column",alignItems:"stretch",gap:7,children:[s.jsxs(t,{children:[s.jsx(d,{}),s.jsx(a,{paddingLeft:3,paddingRight:3,children:s.jsx(c,{variant:"sigma",textColor:"neutral600",children:n({id:"Auth.login.sso.divider"})})}),s.jsx(d,{})]}),s.jsx(g,{providers:e,displayAllProviders:!1})]})})})};export{h as LoginEE};
