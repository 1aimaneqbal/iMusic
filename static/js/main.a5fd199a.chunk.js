(this["webpackJsonpi-music"]=this["webpackJsonpi-music"]||[]).push([[0],{46:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(23),r=a.n(c),i=a(9),l=a.n(i),o=a(3),j=(a(46),a(11)),d=a(7),u=a(0);var b=e=>{let{currSong:t,setCurrSong:a,allSongs:n,setAllSongs:c,isplaying:r,setIsplaying:i,audioRef:l,time:b,setTime:g}=e;const O=e=>Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2),x=async e=>{const s=n.findIndex((e=>e._id===t._id));"next"===e&&await a(n[(s+1)%n.length]),"prev"===e&&(s-1===-1?await a(n[n.length-1]):await a(n[(s-1)%n.length])),r&&l.current.play()};Object(s.useEffect)((()=>{const e=n.map((e=>e._id===t._id?Object(o.a)(Object(o.a)({},e),{},{active:!0}):Object(o.a)(Object(o.a)({},e),{},{active:!1})));c(e)}),[t]);const p={width:"".concat(b.animation,"%"),background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")};return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"CurrentSongControls",children:[Object(u.jsxs)("div",{className:"TimeStamp",children:[Object(u.jsx)("p",{children:O(b.current)}),Object(u.jsxs)("div",{className:"track",children:[Object(u.jsx)("input",{min:0,max:b.duration||0,value:b.current,onChange:e=>{l.current.currentTime=e.target.value,g(Object(o.a)(Object(o.a)({},b),{},{current:e.target.value}))},type:"range"}),Object(u.jsx)("div",{style:p,className:"trackAnim"})]}),Object(u.jsx)("p",{children:b.duration?O(b.duration):"0:00"})]}),Object(u.jsxs)("div",{className:"MediaControls",children:[Object(u.jsx)(j.a,{onClick:()=>x("prev"),className:"prev",size:"2x",icon:d.a}),Object(u.jsx)(j.a,{onClick:()=>{r?(l.current.pause(),i(!r)):(l.current.play(),i(!r))},className:"play",size:"2x",icon:r?d.c:d.d}),Object(u.jsx)(j.a,{onClick:()=>x("next"),className:"next",size:"2x",icon:d.b})]})]})})};var g=e=>{let{currSong:t}=e;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"CurrentSongPlayingInfo",children:[Object(u.jsx)("img",{src:t.cover,alt:""}),Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("h3",{children:t.artist})]})})};var O=e=>{let{allSongs:t,setAllSongs:a,currSong:s,setCurrSong:n,isplaying:c,setIsplaying:r,audioRef:i,time:l,setTime:o,libraryUpdater:j,setLibraryUpdater:d,addSongsPane:O,setAddSongsPane:x}=e;const p={background:"linear-gradient(to bottom, #fff, ".concat(s.color[1],")")};return Object(u.jsxs)("div",{className:"AppContainer",children:[Object(u.jsxs)("div",{onClick:()=>{j&&d(!j),O&&x(!O)},className:"App ".concat(j?"maincomponent":""),children:[Object(u.jsx)(g,{currSong:s}),Object(u.jsx)(b,{currSong:s,isplaying:c,setIsplaying:r,audioRef:i,time:l,setTime:o,allSongs:t,setAllSongs:a,setCurrSong:n})]}),Object(u.jsx)("div",{style:p,className:"bgGrad"})]})};var x=e=>{let{song:t,setAllSongs:a,setCurrSong:s,allSongs:n,audioRef:c,isplaying:r,setIsplaying:i,filterStatus:l}=e;return Object(u.jsxs)("div",{onClick:async()=>{const e=t;await s(e);const l=n.map((e=>e._id===t._id?Object(o.a)(Object(o.a)({},e),{},{active:!0}):Object(o.a)(Object(o.a)({},e),{},{active:!1})));a(l),r||i(!r),c.current.play()},className:"librarySong ".concat(t.active?"selectedLibrary":""),children:[Object(u.jsx)("img",{src:t.cover,alt:""}),Object(u.jsxs)("div",{className:"songdesc",children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsx)("h4",{children:t.artist})]})]})};var p=e=>{let{allSongs:t,setAllSongs:a,setCurrSong:s,audioRef:n,isplaying:c,setIsplaying:r,libraryUpdater:i,setFilterStatus:l,filterStatus:o}=e;return Object(u.jsxs)("div",{className:"library ".concat(i?"activelibrary":""),children:[Object(u.jsx)("h2",{children:"Library"}),Object(u.jsx)("div",{className:"select",children:Object(u.jsxs)("select",{onChange:e=>{l(e.target.value)},name:"songSelection",className:"selectionClass",children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"en",children:"English"}),Object(u.jsx)("option",{value:"jp",children:"Japanese"})]})}),Object(u.jsx)("div",{className:"individualLibraryComponent",children:t.map((e=>Object(u.jsx)(x,{song:e,setCurrSong:s,allSongs:t,audioRef:n,isplaying:c,setIsplaying:r,setAllSongs:a},e._id)))})]})},h=a(55),m=a(56);var v=e=>{let{libraryUpdater:t,setLibraryUpdater:a,addSongsPane:s,setAddSongsPane:n}=e;return Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"iMusic"}),Object(u.jsxs)("div",{className:"btn",children:[Object(u.jsx)("button",{onClick:()=>{n(!s)},children:Object(u.jsx)(h.a,{})}),Object(u.jsx)("button",{onClick:()=>{a(!t)},children:Object(u.jsx)(m.a,{})})]})]})};var S=e=>{let{addSongsPane:t}=e;const[a,n]=Object(s.useState)(""),[c,r]=Object(s.useState)(""),[i,o]=Object(s.useState)(""),[j,d]=Object(s.useState)(""),[b,g]=Object(s.useState)(""),[O,x]=Object(s.useState)(""),[p,h]=Object(s.useState)("en"),[m,v]=Object(s.useState)("");return Object(u.jsxs)("div",{className:"container ".concat(t?"containerShow":""),children:[Object(u.jsx)("h2",{children:"Add Songs"}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"pass",required:"required",onChange:e=>{v(e.target.value)},value:m}),Object(u.jsx)("label",{children:"Password"})]}),Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"name",required:"required",onChange:e=>{n(e.target.value)},value:a}),Object(u.jsx)("label",{children:"Song Name"})]}),Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"cover",required:"required",onChange:e=>{r(e.target.value)},value:c}),Object(u.jsx)("label",{children:"Cover Image"})]}),Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"artist",required:"required",onChange:e=>{o(e.target.value)},value:i}),Object(u.jsx)("label",{children:"Artist Name"})]}),Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"audio",required:"required",onChange:e=>{d(e.target.value)},value:j}),Object(u.jsx)("label",{children:"Audio Link"})]}),Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"color1",required:"required",onChange:e=>{g(e.target.value)},value:b}),Object(u.jsx)("label",{children:"Primary Color"})]}),Object(u.jsxs)("div",{className:"inputBox",children:[Object(u.jsx)("input",{type:"text",name:"color2",required:"required",onChange:e=>{x(e.target.value)},value:O}),Object(u.jsx)("label",{children:"Secondary Color"})]}),Object(u.jsxs)("div",{className:"selBox",children:[Object(u.jsx)("label",{children:"Select language: "}),Object(u.jsxs)("select",{name:"lang",id:"currsem",className:"select",onChange:e=>{h(e.target.value)},children:[Object(u.jsx)("option",{value:"en",children:"English"}),Object(u.jsx)("option",{value:"jp",children:"Japanese"})]})]}),Object(u.jsx)("input",{type:"submit",value:"Push to DB",onClick:async e=>{e.preventDefault();const t={name:a,cover:c,artist:i,audio:j,color:[b,O],lang:p};"Qwerty@21"===m?(await l.a.post("https://imusic-rest-api.herokuapp.com/",t),alert("Song Added to DB"),n(""),r(""),o(""),d(""),g(""),x(""),v("")):(alert("You are not authenticated to add Songs."),n(""),r(""),o(""),d(""),g(""),x(""),v(""))}})]})]})};var y=e=>{let{fetchedSongs:t}=e;const a=t,[n,c]=Object(s.useState)(a),[r,i]=Object(s.useState)("all"),[l,j]=Object(s.useState)(n[0]),[d,b]=Object(s.useState)(!1),[g,x]=Object(s.useState)({current:0,duration:0,animation:0}),[h,m]=Object(s.useState)(!1),[y,C]=Object(s.useState)(!1),f=e=>{const t=e.target.currentTime,a=e.target.duration,s=t/a*100;x(Object(o.a)(Object(o.a)({},g),{},{current:t,duration:a,animation:s}))},N=Object(s.useRef)(null);return Object(s.useEffect)((()=>{(()=>{switch(r){case"jp":c(a.filter((e=>"jp"===e.lang)));break;case"en":c(a.filter((e=>"en"===e.lang)));break;default:c(a)}})()}),[r]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{libraryUpdater:h,setLibraryUpdater:m,addSongsPane:y,setAddSongsPane:C}),Object(u.jsx)(O,{allSongs:n,setAllSongs:c,currSong:l,setCurrSong:j,isplaying:d,setIsplaying:b,audioRef:N,time:g,setTime:x,libraryUpdater:h,setLibraryUpdater:m,addSongsPane:y,setAddSongsPane:C}),Object(u.jsx)(p,{allSongs:n,setCurrSong:j,audioRef:N,isplaying:d,setIsplaying:b,setAllSongs:c,libraryUpdater:h,setFilterStatus:i}),Object(u.jsx)("audio",{ref:N,src:l.audio,onTimeUpdate:f,onLoadedMetadata:f,onEnded:async()=>{const e=n.findIndex((e=>e._id===l._id));await j(n[(e+1)%n.length]),d&&N.current.play()}}),Object(u.jsx)(S,{addSongsPane:y})]})};var C=()=>{const[e,t]=Object(s.useState)();Object(s.useEffect)((()=>{a()}),[]);const a=async()=>{try{const e=await l.a.get("https://imusic-rest-api-production.up.railway.app/");t(e.data)}catch(e){console.log(e)}};return Object(u.jsx)(u.Fragment,{children:e&&Object(u.jsx)(y,{fetchedSongs:e})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a5fd199a.chunk.js.map