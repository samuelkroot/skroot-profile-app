import{u as l,r,j as e,W as n,L as c}from"./index-BnWNJqSS.js";const d=()=>{const{id:i}=l(),[s,a]=r.useState(null);return r.useEffect(()=>{fetch(`https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-data-with-id.php?id=${i}`).then(t=>t.json()).then(t=>a(t))},[i]),e.jsx(n,{children:s?e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:s.name}),e.jsx("p",{children:e.jsx("a",{href:`mailto:${s.email}`,children:s.email})}),e.jsx("p",{children:s.bio}),e.jsx("img",{src:s.image_url,alt:s.name}),e.jsx(c,{to:"edit",children:"Edit Profile"})]}):e.jsx("p",{children:"Loading..."})})};export{d as default};
