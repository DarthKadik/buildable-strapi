import{ct as l,cK as p}from"./strapi-DnnX_AvL.js";const r=l.injectEndpoints({endpoints:s=>({getRelations:s.query({query:({model:a,id:e,targetField:t,params:i})=>({url:`/content-manager/relations/${a}/${e}/${t}`,method:"GET",config:{params:i}}),serializeQueryArgs:a=>{const{endpointName:e,queryArgs:t}=a;return{endpointName:e,model:t.model,id:t.id,targetField:t.targetField,locale:t.params?.locale,status:t.params?.status}},merge:(a,e)=>{a.pagination&&e.pagination&&(a.pagination.page<e.pagination.page?(a.results=[...o(e.results,a.results),...a.results],a.pagination=e.pagination):e.pagination.page===1&&(a.results=o(e.results),a.pagination=e.pagination))},forceRefetch({currentArg:a,previousArg:e}){return!a?.params&&!e?.params?!1:a?.params?.page!==e?.params?.page||a?.params?.pageSize!==e?.params?.pageSize},transformResponse:a=>"results"in a&&a.results?{...a,results:o(a.results.toReversed())}:a,providesTags:["Relations"]}),searchRelations:s.query({query:({model:a,targetField:e,params:t})=>({url:`/content-manager/relations/${a}/${e}`,method:"GET",config:{params:t}}),serializeQueryArgs:a=>{const{endpointName:e,queryArgs:t}=a;return{endpointName:e,model:t.model,targetField:t.targetField,_q:t.params?._q,idsToOmit:t.params?.idsToOmit,idsToInclude:t.params?.idsToInclude}},merge:(a,e)=>{if(a.pagination&&e.pagination)if(a.pagination.page<e.pagination.page){const t=a.results.map(n=>n.documentId),i=e.results.filter(n=>!t.includes(n.documentId));a.results.push(...i),a.pagination=e.pagination}else e.pagination.page===1&&(a.results=e.results,a.pagination=e.pagination)},forceRefetch({currentArg:a,previousArg:e}){return!a?.params&&!e?.params?!1:a?.params?.page!==e?.params?.page||a?.params?.pageSize!==e?.params?.pageSize},transformResponse:a=>a.results?{...a,results:a.results}:a})})}),o=(s,a=[])=>{const[e]=a.slice(0),t=p(null,e?.__temp_key__??null,s.length);return s.map((i,n)=>({...i,__temp_key__:t[n]}))},{useGetRelationsQuery:u,useLazySearchRelationsQuery:m}=r,d=(s,a)=>{const e=a&&s[a.name]?s[a.name]:null;return typeof e=="string"?e:s.documentId};export{m as a,d as g,u};
