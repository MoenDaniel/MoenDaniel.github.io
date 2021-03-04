(this.webpackJsonpretro=this.webpackJsonpretro||[]).push([[0],{109:function(e,a,t){},111:function(e,a,t){},115:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var r=t(0),i=t(1),n=t.n(i),c=t(26),s=t.n(c),m=(t(73),t(123)),o=t(121),O=t(14),y=t(10),d=function(){return Object(r.jsxs)("header",{id:"header",children:[Object(r.jsxs)("h1",{children:["Backward compatibility: ",Object(r.jsx)("br",{})," PlayStation\xae1 games playable on PlayStation\xae5"]}),Object(r.jsx)("h3",{children:"The PS5\u2122 console is backward compatible with the overwhelming majority of PS1\u2122 games. That means an amazing collection of thousands of PS1 games can be played on your PS5 console."})]})},l=t(122),j=function(){return Object(r.jsxs)(l.a,{fade:!0,children:[Object(r.jsxs)(l.a.Item,{interval:5e3,children:[Object(r.jsx)("img",{class:"carousel-img",src:t(43).default,alt:"header"}),Object(r.jsx)(l.a.Caption,{children:Object(r.jsx)("h2",{id:"carousel-header",children:"Crash Bandicoot"})})]}),Object(r.jsxs)(l.a.Item,{interval:5e3,children:[Object(r.jsx)("img",{class:"carousel-img",src:t(44).default,alt:"header"}),Object(r.jsx)(l.a.Caption,{children:Object(r.jsx)("h2",{id:"carousel-header",children:"Rayman"})})]}),Object(r.jsxs)(l.a.Item,{interval:5e3,children:[Object(r.jsx)("img",{class:"carousel-img",src:t(45).default,alt:"header"}),Object(r.jsx)(l.a.Caption,{children:Object(r.jsx)("h2",{id:"carousel-header",children:"Tekken 3"})})]}),Object(r.jsxs)(l.a.Item,{interval:5e3,children:[Object(r.jsx)("img",{class:"carousel-img",src:t(46).default,alt:"header"}),Object(r.jsx)(l.a.Caption,{children:Object(r.jsx)("h2",{id:"carousel-header",children:"Spyro the Dragon"})})]}),Object(r.jsxs)(l.a.Item,{interval:5e3,children:[Object(r.jsx)("img",{class:"carousel-img",src:t(47).default,alt:"header"}),Object(r.jsx)(l.a.Caption,{children:Object(r.jsx)("h2",{id:"carousel-header",children:"Gran Turismo"})})]})]})},h=function(){return Object(r.jsx)("img",{id:"banner",src:t(48).default,alt:"header"})},g=t(24),Y=t(31),b=t(124),u=function(e){return Object(r.jsx)(Y.a,{xs:3,sm:3,md:3,lg:2,xl:2,children:Object(r.jsx)(b.a,{id:"library-card",children:Object(r.jsx)(b.a.Body,{children:Object(r.jsx)(b.a.Img,{src:t(39)("./".concat(e.image)).default})})})})},p=function(e){return Object(r.jsxs)("section",{id:"game-library",children:[Object(r.jsx)("h1",{children:"Explore the game library"}),Object(r.jsx)(g.a,{children:e.librarys.map((function(e,a){return Object(r.jsx)(u,{image:e.image},"ff-".concat(a))}))})]})},f=t(5),A=t(8),x=t.n(A),C=Object(i.createContext)(),k=function(e){var a=Object(i.useState)({id:"",image:"",name:"",year:"",category:"",price:"",Description:""}),t=Object(f.a)(a,2),n=t[0],c=t[1],s=Object(i.useState)([{id:"",image:"",name:"",year:"",category:"",price:"",Description:""}]),m=Object(f.a)(s,2),o=m[0],O=m[1];return Object(i.useEffect)((function(){x.a.get("https://localhost:5001/games").then((function(e){O(e.data)}))}),[]),Object(r.jsx)(C.Provider,{value:{games:[o,O],game:[n,c]},children:e.children})},T=(t(109),function(){return Object(r.jsxs)("div",{id:"home-container",children:[Object(r.jsx)(g.a,{children:Object(r.jsx)(Y.a,{xs:12,children:Object(r.jsx)(d,{})})}),Object(r.jsx)(g.a,{children:Object(r.jsx)(Y.a,{xs:12,children:Object(r.jsx)(j,{})})}),Object(r.jsx)(g.a,{children:Object(r.jsx)(Y.a,{xs:12,children:Object(r.jsx)(h,{})})}),Object(r.jsx)(g.a,{children:Object(r.jsx)(Y.a,{xs:12,children:Object(r.jsx)(k,{children:Object(r.jsx)(p,{librarys:w})})})})]})}),w=[{image:"crash1.jpg"},{image:"crash2.jpg"},{image:"crash3.jpg"},{image:"spyro.jpg"},{image:"pandemonium.jpg"},{image:"tekken3.jpg"},{image:"granturismo.jpg"},{image:"tombraider.jpg"}],B=t(34),E=function(e){return Object(r.jsx)(Y.a,{xs:12,sm:12,md:6,lg:4,xl:4,children:Object(r.jsx)(b.a,{id:"cards",children:Object(r.jsxs)(b.a.Body,{children:[Object(r.jsx)(b.a.Img,{src:t(39)("./".concat(e.image)).default}),Object(r.jsx)(b.a.Title,{children:Object(r.jsx)("h2",{children:e.name})}),Object(r.jsx)(b.a.Text,{children:Object(r.jsxs)("p",{children:["Published: ",e.year]})}),Object(r.jsx)(b.a.Text,{children:Object(r.jsxs)("p",{children:["Category: ",e.category]})}),Object(r.jsx)(b.a.Text,{children:Object(r.jsx)("p",{children:e.description})})]})})})},I=function(e){return Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{children:"Game library"}),Object(r.jsx)(g.a,{children:e.games.map((function(e,a){return Object(r.jsx)(E,{name:e.name,image:e.image,year:e.year,description:e.description,category:e.category},"ff-".concat(a))}))})]})},S=function(){return Object(r.jsx)(B.a,{children:Object(r.jsx)(I,{games:v})})},v=[{name:"Crash Bandicoot 1: Crash Bandicoot",image:"crash1.jpg",year:1996,category:"Platformer",description:"The story follows Crash as he aims to prevent Brio and Cortex's plans for world domination, and rescue his girlfriend Tawna, a female bandicoot also evolved by Brio and Cortex. Crash Bandicoot was released in North America in September 1996, and in Europe in November 1996."},{name:"Crash Bandicoot 2: Cortex Strikes Back",image:"crash2.jpg",year:1997,category:"Platformer",description:"Crash Bandicoot 2: Cortex Strikes Back is a platform game developed by Naughty Dog and released in 1997 by Sony Computer Entertainment for the PlayStation platform. The game became the tenth best-selling game for PlayStation. The game follows Crash Bandicoot, and involves collecting as many crystals as possible."},{name:"Crash Bandicoot 3: Warped",image:"crash3.jpg",year:1997,category:"Platformer",description:"Crash Bandicoot 3: Warped is the sequel to Crash Bandicoot 2. The game was released in December 1998. It sold 5.7 million copies and became number nine on the list of best-selling games on PlayStation 1. The game is made by the company Naughty Dog."},{name:"Spyro The Dragon",image:"spyro.jpg",year:1998,category:"Platformer",description:"Spyro is a series of video games that has the dragon Spyro as the main character. The series began in 1998 with the game Spyro the Dragon, and after this game there have been several sequels. The gaming franchise has been under several developers and publishers."},{name:"Pandemonium!",image:"pandemonium.jpg",year:1996,category:"Platformer",description:"Pandemonium! features Fargus, a joker, and Nikki, a sorceress, who unwittingly casts a spell that destroys the town."},{name:"Tekken 3",image:"tekken3.jpg",year:1998,category:"Fighting",description:"Tekken 3 is a fighting game, the third installment in the Tekken series. It was released in arcades in March 1997, and for the PlayStation in 1998."},{name:"Gran Turismo",image:"granturismo.jpg",year:1997,category:"Racing",description:"Gran Turismo is a racing game. The player must maneuver a car to compete against artificially intelligent drivers on various race tracks. The game uses two different modes: Arcade Mode and Simulation."},{name:"Tomb Raider",image:"tombraider.jpg",year:1996,category:"Action-adventure",description:"Tomb Raider is a 1996 action-adventure video game developed by Core Design and published by Eidos Interactive. It was first released on the Sega Saturn, followed shortly by versions for MS-DOS and the PlayStation."}],F=function(e){return Object(r.jsx)(Y.a,{xs:12,sm:12,md:6,lg:4,xl:4,children:Object(r.jsx)(b.a,{id:"cards",children:Object(r.jsxs)(b.a.Body,{children:[Object(r.jsx)(b.a.Img,{src:t(39)("./".concat(e.image)).default}),Object(r.jsx)(b.a.Title,{children:Object(r.jsx)("h2",{children:e.name})}),Object(r.jsx)(b.a.Text,{children:Object(r.jsxs)("p",{children:["First appearance: ",e.year]})}),Object(r.jsx)(b.a.Text,{children:Object(r.jsx)("p",{children:e.description})})]})})})},R=function(e){return Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{children:"Character library"}),Object(r.jsx)(g.a,{children:e.characters.map((function(e,a){return Object(r.jsx)(F,{name:e.name,image:e.image,year:e.year,description:e.description},"ff-".concat(a))}))})]})},U=function(){return Object(r.jsx)(B.a,{children:Object(r.jsx)(R,{characters:Q})})},Q=[{name:"Crash Bandicoot",image:"crash.gif",year:1996,description:"Crash is a mutant eastern barred bandicoot who was genetically enhanced by the series' main antagonist Doctor Neo Cortex and soon escaped from Cortex's castle after a failed experiment in the Cortex Vortex."},{name:"Spyro",image:"spyro.gif",year:1998,description:"Spyro is a young male purple dragon. He is known for his ability to defeat enemies by breathing fire and charging at them, and his ability to glide to otherwise unreachable areas in the game world. Spyro is often accompanied by his best friend Sparx, a dragonfly."},{name:"Rayman",image:"rayman.gif",year:1995,description:"Rayman is the main protagonist and the titular character of the video game series of the same name, created by video game designer Michel Ancel for Ubisoft. He is depicted as a limbless humanoid with floating appendages, which he can throw at enemies to attack them."},{name:"Lara Croft",image:"laracroft.gif",year:1996,description:"Lara Croft is a fictional character and the main protagonist of the video game franchise Tomb Raider. She is presented as a highly intelligent and athletic English archaeologist who ventures into ancient tombs and hazardous ruins around the world."}],G=(t(9),t(120),t(125),t(119),t(36),t(111),t(63),function(e){return Object(r.jsx)("header",{children:Object(r.jsxs)(O.a,{children:[Object(r.jsxs)(m.a,{expand:"sm",bg:"transparent",variant:"dark",children:[Object(r.jsx)(m.a.Brand,{as:O.b,to:"/",children:Object(r.jsx)("img",{id:"logo",src:t(51).default})}),Object(r.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(o.a,{className:"ml-auto",children:[Object(r.jsx)(o.a.Link,{as:O.b,to:"/",children:"Home"}),Object(r.jsx)(o.a.Link,{as:O.b,to:"/games",children:"Games"}),Object(r.jsx)(o.a.Link,{as:O.b,to:"/characters",children:"Characters"})]})})]}),Object(r.jsxs)(y.c,{children:[Object(r.jsx)(y.a,{exact:!0,path:"/",component:T}),Object(r.jsx)(y.a,{path:"/games",component:S}),Object(r.jsx)(y.a,{path:"/characters",component:U})]})]})})}),N=(t(115),function(){return Object(r.jsx)("footer",{children:Object(r.jsxs)(g.a,{children:[Object(r.jsxs)(Y.a,{xs:12,sm:9,children:[Object(r.jsx)("img",{id:"logo",src:t(50).default,alt:"Footer logo"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:["2020 \xa9 All rights reserved ",Object(r.jsx)("br",{}),"All trademarks are the property of their respective owners."]})]}),Object(r.jsx)(Y.a,{xs:12,sm:3,children:Object(r.jsxs)("article",{children:[Object(r.jsx)("p",{id:"footer-header",children:"Connect"}),Object(r.jsx)("a",{href:"#",children:"Facebook"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"#",children:"Instagram"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"#",children:"Twitter"})]})})]})})});var W=function(){return Object(r.jsxs)("div",{id:"main-container",children:[Object(r.jsx)(G,{}),Object(r.jsx)(N,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,126)).then((function(a){var t=a.getCLS,r=a.getFID,i=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),r(e),i(e),n(e),c(e)}))};t(116);s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root")),J()},39:function(e,a,t){var r={"./admin.gif":76,"./banner.gif":49,"./carousel1.jpg":43,"./carousel2.jpg":44,"./carousel3.jpg":45,"./carousel4.jpg":46,"./carousel5.jpg":47,"./crash.gif":77,"./crash1.jpg":78,"./crash2.jpg":79,"./crash3.jpg":80,"./granturismo.jpg":81,"./laracroft.gif":82,"./logo-footer.png":50,"./logo.png":51,"./pandemonium.jpg":83,"./play.gif":48,"./ps1logo.png":84,"./rayman.gif":85,"./rayman.jpg":86,"./spyro.gif":87,"./spyro.jpg":88,"./tekken3.jpg":89,"./tombraider.jpg":90};function i(e){var a=n(e);return t(a)}function n(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id=39},43:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/carousel1.a91cf647.jpg"},44:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/carousel2.5be53075.jpg"},45:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/carousel3.ced0ae8f.jpg"},46:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/carousel4.a3f8c921.jpg"},47:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/carousel5.a1b45141.jpg"},48:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/play.8d459df7.gif"},49:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.52f63748.gif"},50:function(e,a,t){"use strict";t.r(a),a.default="data:image/png;base64,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"},51:function(e,a,t){"use strict";t.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAA/CAMAAACILZeDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC1lBMVEUAAACYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOyYmOz///9n7r8SAAAA8HRSTlMAYUfdG+rgBMPiiORK/uYd7OjGjE7uH/AFyfKQ9VH3IfkGy/uU/VUj8QEHzsC8t7OuqqaECA0kbaXB+sy1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"},63:function(e,a,t){},73:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/admin.8d459df7.gif"},77:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/crash.e438ea4a.gif"},78:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/crash1.d04364d3.jpg"},79:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/crash2.5c08663b.jpg"},80:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/crash3.9120de90.jpg"},81:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/granturismo.dc5cb069.jpg"},82:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/laracroft.b96b5cfd.gif"},83:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/pandemonium.9564a463.jpg"},84:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/ps1logo.43ee75f7.png"},85:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/rayman.ff4df454.gif"},86:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/rayman.ed722f24.jpg"},87:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/spyro.ca8fb929.gif"},88:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/spyro.1e8d574a.jpg"},89:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/tekken3.17d16545.jpg"},90:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/tombraider.6b213b18.jpg"}},[[117,1,2]]]);
//# sourceMappingURL=main.499fe87e.chunk.js.map