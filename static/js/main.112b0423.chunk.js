(this["webpackJsonpcovid-19-live"]=this["webpackJsonpcovid-19-live"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/fifa-who-step-1.99ee8a3c.png"},function(e,t,a){e.exports=a.p+"static/media/fifa-who-step-2.18b83226.png"},function(e,t,a){e.exports=a.p+"static/media/fifa-who-step-3.c78455a9.png"},function(e,t,a){e.exports=a.p+"static/media/fifa-who-step-4.dea998dd.png"},function(e,t,a){e.exports=a.p+"static/media/fifa-who-step-5.8dd0155f.png"},,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),s=(a(22),a(3)),o=a(25),i=a(26),m=a(6),u=a.n(m),d=a(9),p=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),i=o[0],m=o[1],p=Object(n.useState)(!0),h=Object(s.a)(p,2),v=h[0],f=h[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),m(""),t.prev=2,t.next=5,fetch(e);case 5:return a=t.sent,t.next=8,a.json();case 8:(n=t.sent).error?m(n.error.message):l(n),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),m("Bad request");case 15:return t.prev=15,f(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),[r,v,i]},h=function(e){var t=e.title,a=e.value,n=e.className;return r.a.createElement("div",{className:"StatCard neumorph shadow-neumorph-inset p-4 flex-1 hover:shadow-neumorph-outset ".concat(n)},r.a.createElement("h1",{className:"text-md sm:text-xl md:text-3xl font-bold"},(null===a||void 0===a?void 0:a.toLocaleString())||"Loading.."),r.a.createElement("h2",{className:"md:text-base sm:text-sm text-xs text-accent font-bold uppercase break-normal"},t))},v=function(){var e=p("https://covid19.mathdro.id/api"),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"my-3 text-2xl"},"World Wide Live Update"),!n&&r.a.createElement("div",{className:"flex sx-2 sm:sx-5"},r.a.createElement(h,{title:"Confirmed Cases",value:a.confirmed.value}),r.a.createElement(h,{title:"Recovered Cases",value:null===a||void 0===a?void 0:a.recovered.value}),r.a.createElement(h,{title:"Death Cases",value:a.deaths.value})),r.a.createElement("div",{className:"mt-3 text-center text-muted text-center"},r.a.createElement("span",null,"Last updated: "),(null===a||void 0===a?void 0:a.lastUpdate)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,Object(o.a)(new Date(null===a||void 0===a?void 0:a.lastUpdate),"MM/dd/yyyy @ hh:mma")," "),r.a.createElement("span",null,"(",Object(i.a)(new Date(null===a||void 0===a?void 0:a.lastUpdate)),"}"))))},f=function(e){var t=e.selectedCountry.iso2.toLowerCase(),a=p("https://newsapi.org/v2/top-headlines?country=".concat(t,"&language=en&apiKey=cfb62427f6e64c3289079c33520dffe6")),n=Object(s.a)(a,2),l=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,c?"Loading top headlines ".concat(e.selectedCountry.name):r.a.createElement(r.a.Fragment,null,l&&l.articles.length>0?l.articles.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("a",{className:"underline hover:no-underline",rel:"noopener noreferrer",href:e.url,target:"_blank"},e.title))})):"Headlines are not available at this moment.."))},E=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return t}})),r=Object(s.a)(a,2),l=r[0],c=r[1];return[l,function(t){try{c(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(a){}}]}("country-selected",{name:"India",iso2:"IN",iso3:"IND"}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=p("https://covid19.mathdro.id/api/countries/".concat(a.name)),m=Object(s.a)(c,3),u=m[0],d=m[1],v=m[2],E=p("https://covid19.mathdro.id/api/countries"),x=Object(s.a)(E,1)[0];return console.log(a),r.a.createElement("div",{className:"CountryStats neumorph sm:shadow-neumorph-inset mb-6  p-0"},r.a.createElement("select",{className:"text-gray-900 w-full p-2 md:p-3 rounded-md mb-6 md:text-xl bg-primary text-back",disabled:d,onChange:function(e){l(JSON.parse(e.target.value))},value:JSON.stringify(a)},r.a.createElement("option",{value:"{}"}),x&&x.countries.map((function(e){return r.a.createElement("option",{key:e.name,value:JSON.stringify(e)},e.name)}))),r.a.createElement("div",{className:"flex justify-center sx-2 sm:sx-5"},v.length>0&&r.a.createElement("div",{className:"text-center text-gray-500 "},r.a.createElement("div",{className:"font-sans text-5xl mb-3"},"\xaf\\_(\u30c4)_/\xaf"),r.a.createElement("div",null,v)),0===v.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:"Confirmed Cases",value:d||null===u||void 0===u?void 0:u.confirmed.value}),r.a.createElement(h,{title:"Recovered Cases",value:d||null===u||void 0===u?void 0:u.recovered.value}),r.a.createElement(h,{title:"Deaths Cases",value:d||null===u||void 0===u?void 0:u.deaths.value}))),r.a.createElement("div",{className:"mt-3 text-center text-muted text-center"},r.a.createElement("span",null,"Last updated: "),(null===u||void 0===u?void 0:u.lastUpdate)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,Object(o.a)(new Date(null===u||void 0===u?void 0:u.lastUpdate),"MM/dd/yyyy @ hh:mma")," "),r.a.createElement("span",null,"(",Object(i.a)(new Date(null===u||void 0===u?void 0:u.lastUpdate)),"}"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-justify sx-2 sm:sx-5"},r.a.createElement("h2",{className:"text-2xl flex-1"},"Today's Top Headlines - ",a.name),r.a.createElement("hr",null),r.a.createElement(f,{selectedCountry:a})))},x=function(){return r.a.createElement("div",{className:"header flex items-center "},r.a.createElement("h2",{className:"text-2xl flex-1"},"Coronavirus disease (COVID-19) outbreak situation"))},b=a(10),g=a(11),y=a.n(g),w=a(12),N=a.n(w),O=a(13),k=a.n(O),j=a(14),C=a.n(j),S=a(15),I=a.n(S),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Footer mt-2 text-xs text-muted text-center"},r.a.createElement("div",{className:"flex mb-4"},r.a.createElement("div",{className:"flex-1 h-15 px-2"},r.a.createElement("img",{src:y.a,alt:"precaution 1 by WHO"})),r.a.createElement("div",{className:"flex-1 h-15 px-2"},r.a.createElement("img",{src:N.a,alt:"precaution 2 by WHO"})),r.a.createElement("div",{className:"flex-1 h-15 px-2"},r.a.createElement("img",{src:k.a,alt:"precaution 3 by WHO"})),r.a.createElement("div",{className:"flex-1 h-15 px-2"},r.a.createElement("img",{src:C.a,alt:"precaution 4 by WHO"})),r.a.createElement("div",{className:"flex-1 h-15 px-2"},r.a.createElement("img",{src:I.a,alt:"precaution 5 by WHO"}))),r.a.createElement("div",{className:"flex flex-col md:flex-row justify-center items-center mt-2"},r.a.createElement("div",null,r.a.createElement("a",{className:"underline hover:no-underline",target:"_blank",rel:"noopener noreferrer",href:"https://www.who.int/news-room/detail/23-03-2020-pass-the-message-five-steps-to-kicking-out-coronavirus"},"Five steps to kicking out coronavirus")),r.a.createElement("div",{className:"hidden md:inline-block px-1"},"|"),r.a.createElement("div",null,r.a.createElement("a",{className:"underline hover:no-underline",target:"_blank",rel:"noopener noreferrer",href:"https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"},"Status by WHO")),r.a.createElement("div",{className:"hidden md:inline-block px-1"},"|"),r.a.createElement("div",null,"Powered By ",r.a.createElement("a",{className:"underline hover:no-underline",rel:"noopener noreferrer",href:"https://github.com/mathdroid/covid-19-api"},"COVID-19 API")),r.a.createElement("div",{className:"hidden md:inline-block px-1"},"|"),r.a.createElement("div",null,"In your service by ",r.a.createElement("a",Object(b.a)({className:"underline hover:no-underline",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/abhijit-prakash-gawankar-45107170/",target:"_blank"},"rel","noopener noreferrer"),"Abhijit Pramila Prakash Gawankar"),r.a.createElement("div",{className:"md:hidden inline-block px-1"},"|")))))};var W=function(){return r.a.createElement("div",{className:"App md:flex md:justify-center min-h-screen p-4"},r.a.createElement("div",{className:"md:w-7/12"},r.a.createElement("div",{className:"bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",role:"alert"},r.a.createElement("p",{className:"font-bold"},"About"),r.a.createElement("p",{className:"text-sm"},"Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell."),r.a.createElement("hr",null),r.a.createElement("p",{className:"font-bold"},"HOW IT SPREADS"),r.a.createElement("p",{className:"text-sm"},"Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth."),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank"},"Learn more on who.int"))),r.a.createElement(x,null),r.a.createElement("hr",null),r.a.createElement(v,null),r.a.createElement("hr",null),r.a.createElement(E,null),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.112b0423.chunk.js.map