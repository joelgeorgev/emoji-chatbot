(this["webpackJsonpemoji-chatbot"]=this["webpackJsonpemoji-chatbot"]||[]).push([[0],{25:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(9),o=t.n(a),i=t(3),s=t(4),c=t(0),l=t(17),u="!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",f=l.lib;function d(e){var n=function(e){var n=e.trim().toLowerCase();if(!n||""===n||"a"===n||"it"===n||"is"===n)return"";var t="";n.length>2&&"s"===n[n.length-1]&&(t=n.slice(0,n.length-1));var r=1===n.length?"":n+"s",a="",o="",i="";if(-1!==n.indexOf("ing")){var s=n.substr(0,n.length-3);a=s,o=s+"e",i=s.substr(0,s.length-1)}var c=[];if(function(e){return null!==e.match(["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"].join("|"))}(n))return c.push(n),c;for(var l in"i"===n||"you"===n?(c.push("\ud83d\ude00"),c.push("\ud83d\ude0a")):"she"===n?c.push("\ud83d\udc81"):"he"===n?c.push("\ud83d\udc81\u200d\u2642\ufe0f"):"we"===n||"they"===n?c.push("\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"):"am"===n||"is"===n||"are"===n?c.push("\ud83d\udc49"):"thanks"===n&&c.push("\ud83d\ude4c"),f){var u=f[l].keywords;(n===f[l].char||l===n||l===n+"_face"||l===t||l===r||l===a||l===o||l===i||u&&u.indexOf(n)>=0||u&&u.indexOf(t)>=0||u&&u.indexOf(r)>=0||u&&u.indexOf(a)>=0||u&&u.indexOf(o)>=0||u&&u.indexOf(i)>=0)&&(n.length<=3&&"flags"===f[l].category||c.push(f[l].char))}return 0===c.length?"":c}(e);return n[Math.floor(Math.random()*n.length)]}function h(e,n){for(var t="",r=e.split(" "),a=0;a<r.length;a++){for(var o="",i="",s=r[a];-1!==u.indexOf(s[0]);)o+=s[0],s=s.slice(1,s.length);for(;-1!==u.indexOf(s[s.length-1]);)i+=s[s.length-1],s=s.slice(0,s.length-1);n&&(o=i="");var c=d(s);c?t+=o+c+i+" ":n||(t+=o+s+i+" ")}return t}var b,g,m,j,x,O,p,v,y,w,S,B=[{author:"Bot",text:"Write a message and see it translated to emojis!"}],k=t(1),M=i.b.div(b||(b=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 16rem;\n"]))),C=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=Object(c.useState)(e),t=Object(s.a)(n,2),r=t[0],a=t[1];return{messages:r,sendMessage:function(e){var n=[{author:"You",text:e},{author:"Bot",text:h(e,!1)}];a((function(e){return e.concat(n)}))}}}(),n=e.messages,t=e.sendMessage;return Object(k.jsxs)(M,{children:[Object(k.jsx)(F,{messages:n}),Object(k.jsx)(z,{handleSendMessage:t})]})},E=function(e,n,t){var r=document.querySelectorAll(e)[n];r&&r.scrollIntoView(t)},P=i.b.div(g||(g=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 20rem;\n  height: 20rem;\n  border: 1px solid;\n  border-radius: 0.25rem;\n  padding: 1rem;\n  overflow: auto;\n"]))),F=function(e){var n=e.messages,t=e.scrollToNode,r=void 0===t?E:t;return Object(c.useEffect)((function(){n.length&&r(".message",n.length-1,{behavior:"smooth"})})),Object(k.jsx)(P,{children:n.map((function(e,n){return Object(k.jsx)(N,{message:e},n)}))})},I=i.b.form(m||(m=Object(r.a)(["\n  margin-top: 2rem;\n"]))),W=i.b.input(j||(j=Object(r.a)(["\n  border: 1px solid #aaa;\n  padding: 0.5rem;\n"]))),z=function(e){var n=e.handleSendMessage,t=Object(c.useState)(""),r=Object(s.a)(t,2),a=r[0],o=r[1];return Object(k.jsx)(I,{onSubmit:function(e){e.preventDefault();var t=a.trim();t&&(n(t),o(""))},children:Object(k.jsx)(W,{type:"text",placeholder:"Write a message","aria-label":"Write a message",value:a,onChange:function(e){return o(e.target.value)}})})},G=i.b.div(x||(x=Object(r.a)(["\n  display: flex;\n  justify-content: flex-end;\n  ","\n"])),(function(e){return e.isBot&&"\n      justify-content: flex-start;\n    "})),J=i.b.div(O||(O=Object(r.a)(["\n  margin: 0.25rem;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  color: #fff;\n  background-color: #555;\n  ","\n"])),(function(e){return e.isBot&&"\n      color: #000;\n      background-color: #eee;\n    "})),N=function(e){var n=e.message,t=n.author,r=n.text,a="Bot"===t;return Object(k.jsx)(G,{isBot:a,children:Object(k.jsx)(J,{isBot:a,className:"message",children:r})})},R=t.p+"static/media/github.66378707.svg",_=i.b.main(p||(p=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]))),q=i.b.header(v||(v=Object(r.a)(["\n  text-align: center;\n"]))),A=i.b.section(y||(y=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n"]))),D=i.b.footer(w||(w=Object(r.a)(["\n  margin: 2rem;\n"]))),H=function(){return Object(k.jsxs)(_,{children:[Object(k.jsx)(q,{children:Object(k.jsx)("h1",{children:"Emoji Chatbot"})}),Object(k.jsx)(A,{children:Object(k.jsx)("article",{children:Object(k.jsx)(C,{})})}),Object(k.jsx)(D,{children:Object(k.jsx)("a",{href:"https://github.com/joelgeorgev/emoji-chatbot",children:Object(k.jsx)("img",{src:R,alt:"Go to GitHub repository page"})})})]})},L=t.p+"static/media/source-sans-pro-v11-latin-regular.96b15882.woff2",T=t.p+"static/media/source-sans-pro-v11-latin-regular.74ddb2b0.woff",V=Object(i.a)(S||(S=Object(r.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"])),L,T);o.a.render(Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(V,{}),Object(k.jsx)(H,{})]}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.41445e24.chunk.js.map