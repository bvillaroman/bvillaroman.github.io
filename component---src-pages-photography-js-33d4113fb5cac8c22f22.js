(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(A,t,e){"use strict";e.r(t);var n=e(0),g=e.n(n),o=e(181),a=e(177),i=e(205),r=e(190),d=function(A){var t="https://res.cloudinary.com/dyeerzayu/image/"+A.source.type+"/c_scale,w_600/v"+A.source.version+"/"+A.source.public_id+"."+A.source.format,e="https://res.cloudinary.com/dyeerzayu/image/"+A.source.type+"/v"+A.source.version+"/"+A.source.public_id+"."+A.source.format;return g.a.createElement(a.m,{image:{src:t,alt:A.source.public_id,className:"img",style:{width:"260px",margin:"auto",padding:"20px",cursor:"pointer"}},zoomImage:{src:e,alt:A.source.public_id}})};e.d(t,"query",function(){return p});var c=function(A){var t,e;function n(){for(var t,e=arguments.length,n=new Array(e),g=0;g<e;g++)n[g]=arguments[g];return(t=A.call.apply(A,[this].concat(n))||this).state={home:[],portraits:[],shoots:[],currentTab:0},t.switchSections=function(A){t.setState({currentTab:A})},t}e=A,(t=n).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var c=n.prototype;return c.componentDidMount=function(){var A=this.props.data.bvillaroman.photos,t=A.map(function(A,t){if("home"===A.category)return g.a.createElement(d,{key:t,source:A})}),e=A.map(function(A,t){if("portraits"===A.category)return g.a.createElement(d,{key:t,source:A})}),n=A.map(function(A,t){if("shoots"===A.category)return g.a.createElement(d,{key:t,source:A})});this.setState({home:t,portraits:e,shoots:n})},c.render=function(){var A=this.state,t=A.portraits,e=A.shoots,n=A.home,d=A.currentTab,c=0===d?n:1===d?t:2===d?e:n;return g.a.createElement(r.a,null,g.a.createElement(i.a,{currentTab:d,switchSections:this.switchSections,labels:["Home","Portraits","Shoots"]}),g.a.createElement(o.d,null,g.a.createElement(a.k,{elementType:"ul",options:a.B,disableImagesLoaded:!1,updateOnEachImageLoad:!1},c)))},n}(g.a.Component),p="775679625";t.default=c},177:function(A,t,e){"use strict";e.d(t,"l",function(){return h}),e.d(t,"h",function(){return b}),e.d(t,"b",function(){return y}),e.d(t,"g",function(){return x}),e.d(t,"t",function(){return E}),e.d(t,"c",function(){return R}),e.d(t,"d",function(){return C}),e.d(t,"a",function(){return O}),e.d(t,"x",function(){return M}),e.d(t,"j",function(){return I}),e.d(t,"i",function(){return T}),e.d(t,"y",function(){return N}),e.d(t,"n",function(){return F}),e.d(t,"z",function(){return k}),e.d(t,"A",function(){return v}),e.d(t,"f",function(){return W}),e.d(t,"e",function(){return V}),e.d(t,"q",function(){return j}),e.d(t,"k",function(){return Y}),e.d(t,"B",function(){return B}),e.d(t,"v",function(){return Q}),e.d(t,"w",function(){return Z}),e.d(t,"r",function(){return D}),e.d(t,"p",function(){return U}),e.d(t,"s",function(){return G}),e.d(t,"u",function(){return S}),e.d(t,"o",function(){return L}),e.d(t,"m",function(){return H});e(22);var n=e(0),g=e.n(n),o=e(183),a=e(193),i=e(58),r=e.n(i),d=e(454),c=e(453),p=e(192),l=e(202),s=e.n(l),m=e(204),u=e.n(m),w=e(452),h=Object(o.a)(r.a).withConfig({displayName:"components__HeaderHighlight",componentId:"wpe9bw-0"})(["font-size:2rem;font-weight:350;color:#FF9800;text-decoration:none;@media(max-width:768px){font-size:1.2rem;font-weight:300;}"]),b=o.a.a.withConfig({displayName:"components__EmailHighlight",componentId:"wpe9bw-1"})(["font-size:3rem;font-weight:350;color:#FF9800;text-decoration:none;@media(max-width:768px){font-size:2rem;font-weight:300;}"]),f=o.a.input.withConfig({displayName:"components__MyInput",componentId:"wpe9bw-2"})(["box-sizing:border-box;height:40px;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:white;box-shadow:0 1px 3px 0 #e6ebf1;color:black!important;"]),y=Object(o.a)(a.CardElement).withConfig({displayName:"components__Card",componentId:"wpe9bw-3"})(["width:65%;border:1px solid;box-sizing:border-box;height:40px;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:white;float:left;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;display:inline-block;vertical-align:top;text-align:center;"]),x=Object(o.a)(f).withConfig({displayName:"components__Email",componentId:"wpe9bw-4"})(["width:50%;"]),E=Object(o.a)(f).withConfig({displayName:"components__Name",componentId:"wpe9bw-5"})(["width:30%;"]),R=Object(o.a)(f).withConfig({displayName:"components__Date",componentId:"wpe9bw-6"})(["width:15%;"]),C=o.a.textarea.withConfig({displayName:"components__Description",componentId:"wpe9bw-7"})(["width:100%;height:5rem;box-sizing:border-box;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:white;box-shadow:0 1px 3px 0 #e6ebf1;color:black!important;"]),O=Object(o.a)(f).withConfig({displayName:"components__Amount",componentId:"wpe9bw-8"})(["width:15%;"]),M=o.a.button.withConfig({displayName:"components__SendAmount",componentId:"wpe9bw-9"})(["width:15%;max-width:100px;box-sizing:border-box;height:39px;border:1px solid transparent;border-radius:4px;background-color:rgb(253,91,2);color:white;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;vertical-align:top;cursor:pointer;float:right;font-size:1rem;&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.25),0 3px 3px rgba(0,0,0,0.22);transition:all 0.3s;transform:translateZ(10px);}"]),I=o.a.div.withConfig({displayName:"components__FormRow",componentId:"wpe9bw-10"})(["width:100%;height:auto;margin:1rem auto;display:flex;flex-direction:row;position:relative;justify-content:space-between;"]),T=o.a.div.withConfig({displayName:"components__FormContainer",componentId:"wpe9bw-11"})(["width:100%;margin:0 auto;display:flex;flex-flow:row wrap;background:#e8e8e8;box-sizing:border-box;padding:10px 12px;border:1px solid transparent;border-radius:10px;box-shadow:0 1px 3px 0 #e6ebf1;color:black;"]),N=o.a.div.withConfig({displayName:"components__SentText",componentId:"wpe9bw-12"})(["font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;width:100%;height:40px;color:black;display:inline-block;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;vertical-align:top;text-align:center;"]),F=o.a.div.withConfig({displayName:"components__InfoContainer",componentId:"wpe9bw-13"})(["width:35%;height:100%;display:inline-block;@media(max-width:768px){width:100%;margin:2% auto;text-align:center;}"]),k=o.a.div.withConfig({displayName:"components__ThumbnailContainer",componentId:"wpe9bw-14"})(["width:60%;height:100%;display:inline-block;img{display:inline-block;width:100%;}text-align:center;margin:0;@media(max-width:768px){width:100%;margin-top:15%;}}"]),v=o.a.h1.withConfig({displayName:"components__TitleContainer",componentId:"wpe9bw-15"})(["width:100%;color:#000000;font-weight:450;margin:0 auto 1.5rem auto;"]),W=o.a.div.withConfig({displayName:"components__Divider",componentId:"wpe9bw-16"})(["width:40%;border:0.7px solid rgb(255,152,0);@media(max-width:768px){width:100%;}"]),V=o.a.div.withConfig({displayName:"components__DetailsContainer",componentId:"wpe9bw-17"})(["width:100%;margin-top:1.5rem;font-size:0.8rem;font-weight:350;@media(max-width:768px){text-align:start;}"]),j=Object(o.a)(w.a).withConfig({displayName:"components__Loading",componentId:"wpe9bw-18"})(["&&{color:#FC5B02;}"]),Y=Object(o.a)(s.a).withConfig({displayName:"components__GridContainer",componentId:"wpe9bw-19"})(["position:relative;padding-left:0;display:table;width:100%;margin:0 auto;align:'center';"]),B={transitionDuration:"0.8s",isFitWidth:!0},Q=o.a.div.withConfig({displayName:"components__NavBarContainer",componentId:"wpe9bw-20"})(["width:80%;height:14% !important;margin:0.5rem auto;display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between;"]),Z=Object(o.a)(r.a).withConfig({displayName:"components__NavbarLink",componentId:"wpe9bw-21"})(["color:black;text-decoration:none;font-size:1rem;display:inline-block;font-family:-apple-system  Roboto,Helvetica Neue,sans-serif;&:hover{color:#FF9800;}font-weight:350;padding:0.5rem;"]),D=Object(o.a)(Z).withConfig({displayName:"components__Logo",componentId:"wpe9bw-22"})(["color:black;font-size:2rem;font-weight:bold;&:hover{text-decoration:none;}margin:0 auto;padding:0.5rem 0;"]),U=o.a.div.withConfig({displayName:"components__LinksContainer",componentId:"wpe9bw-23"})(["padding:0 !important;width:350px;display:inline-block;text-align:end;@media(max-width:768px){width:100%;text-align:center;}"]),G=o.a.div.withConfig({displayName:"components__LogoContainer",componentId:"wpe9bw-24"})(["width:240px;display:inline-block;padding:0 !important;@media(max-width:768px){width:100%;text-align:center;}"]),z=Object(p.a)({indicator:{display:"flex","& > div":{width:"100%",backgroundColor:"#FF9800"}}})(function(A){return g.a.createElement(d.a,Object.assign({},A,{TabIndicatorProps:{children:g.a.createElement("div",null)}}))}),S=Object(o.a)(z).withConfig({displayName:"components__NavBar",componentId:"wpe9bw-25"})(["&&{width:80%;margin:0 auto;}"]),L=Object(o.a)(c.a).withConfig({displayName:"components__Item",componentId:"wpe9bw-26"})(["&&{opacity:1;margin:0 auto;text-decoration:none;text-transform:none;}"]),H=Object(o.a)(u.a).withConfig({displayName:"components__ImageItem",componentId:"wpe9bw-27"})(["&&{width:350px!important;}"])},179:function(A,t,e){var n;A.exports=(n=e(185))&&n.default||n},181:function(A,t,e){"use strict";e.d(t,"c",function(){return g}),e.d(t,"b",function(){return o}),e.d(t,"a",function(){return a}),e.d(t,"d",function(){return i}),e.d(t,"e",function(){return r});var n=e(183),g=n.a.div.withConfig({displayName:"containers__LandingContainer",componentId:"crflub-0"})(["    width:80%;h1{font-size:3rem;};h2{font-size:2rem;font-weight:350;};h3{font-size:1.8rem;font-weight:300;color:rgba(0,0,0,0.55)};margin:10% auto;@media(max-width:768px){h1{font-size:2.0rem;};h2{font-size:1.3rem;font-weight:350;};h3{font-size:1.2rem;font-weight:300;color:rgba(0,0,0,0.55)};}"]),o=n.a.div.withConfig({displayName:"containers__Container",componentId:"crflub-1"})(["margin:0 auto;font-family:-apple-system  Roboto,Helvetica Neue,sans-serif;"]),a=Object(n.a)(g).withConfig({displayName:"containers__ContactContainer",componentId:"crflub-2"})(["    margin:5% auto;"]),i=Object(n.a)(o).withConfig({displayName:"containers__PhotographyContainer",componentId:"crflub-3"})(["margin:0 auto;"]),r=Object(n.a)(o).withConfig({displayName:"containers__ProjectsContainer",componentId:"crflub-4"})(["width:80%;margin:2% auto;display:flex;justify-content:space-between;@media(max-width:768px){display:block;}"])},184:function(A){A.exports={data:{site:{siteMetadata:{title:"bvillaroman"}}}}},185:function(A,t,e){"use strict";e.r(t);e(22);var n=e(0),g=e.n(n),o=e(11),a=e.n(o),i=e(83),r=function(A){var t=A.location,e=A.pageResources;return e?g.a.createElement(i.a,Object.assign({location:t,pageResources:e},e.json)):null};r.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=r},187:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAPlQTFRFAAAA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA////YE3U9gAAAFJ0Uk5TAAArawoBFQcDmesqIqklMczbTYmSApOFmno6wDfCIWizrG0Fm3wz570TRr4dGdhwDnJS8lm0ur/GIA2yXtTfnmooohaB/oS3wwQPd/E4FFtzyKZaO2EAAAABYktHRFINYC2QAAAACXBIWXMAAABIAAAASABGyWs+AAAAo0lEQVQY012P5RKCYBREWRXFLhQFDBQbTGyxE/v9X0ZH4Bt1f565u3cORX2Cd6ivAA6nC7TbY1MwXp8fgWCIgHAkGkOcZSyARJJLpXnBPgDETDaXlwrWMFCUSyhXqjVyUG8oUJst+zPaEtdRuz2WthtaXxkMR7IwtsBkOgOrzxf60uxgtd5gu9vzh6O5ipNB43y54nZ3Ex88nsavnKjRf7bE/gW8NA9r3Ryy4AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0wOFQxNzo1MTozNiswMDowME2AV1UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMTEtMDhUMTc6NTE6MzYrMDA6MDA83e/pAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MTAxNjM0OTaeKXxzAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMTctMTEtMDgvZWRkZDg0ZjJiODIwZjAxMjE3MTQwNTQzMjNjMzdjYzcuaWNvLnBuZ31y/fYAAAAASUVORK5CYII="},188:function(A,t){A.exports="data:image/png;base64,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"},189:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAvpQTFRFAAAA/5gA/1di/58A/1Zk/1dk/wD//6MA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/yyj/4Ej/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA////5CpvZAAAAPx0Uk5TAAAAAAAAAAAGEQRx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"},190:function(A,t,e){"use strict";var n=e(184),g=e(0),o=e.n(g),a=e(11),i=e.n(a),r=(e(58),e(179),o.a.createContext({}));function d(A){var t=A.staticQueryData,e=A.data,n=A.query,g=A.render,a=e?e.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,a&&g(a),!a&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(A){var t=A.data,e=A.query,n=A.render,g=A.children;return o.a.createElement(r.Consumer,null,function(A){return o.a.createElement(d,{data:t,query:e,render:n||g,staticQueryData:A})})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var p=e(201),l=e.n(p),s=e(177),m=function(){return o.a.createElement(s.v,null,o.a.createElement(s.s,null,o.a.createElement(s.r,{to:"/",activeStyle:{color:"#FF9800"}},"BVILLAROMAN")),o.a.createElement(s.p,null,o.a.createElement(s.w,{to:"/photography",activeStyle:{color:"#FF9800"}},"PHOTOGRAPHY"),o.a.createElement(s.w,{to:"/projects",activeStyle:{color:"#FF9800"}},"PROJECTS"),o.a.createElement(s.w,{to:"/contact",activeStyle:{color:"#FF9800"}},"CONTACT")))},u=e(181),w=e(187),h=e.n(w),b=e(188),f=e.n(b),y=e(189),x=e.n(y),E=function(A){var t=A.children;return o.a.createElement(c,{query:"755544856",render:function(A){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:A.site.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+h.a},{rel:"icon",type:"image/png",sizes:"32x32",href:""+f.a},{rel:"shortcut icon",type:"image/png",href:""+x.a}]}),o.a.createElement(m,null),o.a.createElement(u.b,null,t))},data:n})};E.propTypes={children:i.a.node.isRequired};t.a=E},205:function(A,t,e){"use strict";var n=e(0),g=e.n(n),o=e(177);t.a=function(A){var t=A.currentTab,e=A.labels,n=A.switchSections;return g.a.createElement(o.u,{centered:!0,value:t,variant:"fullWidth"},e.map(function(A,t){return g.a.createElement(o.o,{label:A,key:t,onClick:function(A){n(t)}})}))}}}]);
//# sourceMappingURL=component---src-pages-photography-js-33d4113fb5cac8c22f22.js.map