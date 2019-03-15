(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(A,g,t){"use strict";t.r(g);var e=t(7),n=t.n(e),a=t(0),o=t.n(a),i=t(157),r=t(360),d=t.n(r),s=(t(225),t(362)),l=t.n(s),c=(t(363),t(35)),p=t.n(c),u=t(193),m=t(148),h=m.a.input.withConfig({displayName:"components__MyInput",componentId:"wpe9bw-0"})(["font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;box-sizing:border-box;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:white;box-shadow:0 1px 3px 0 #e6ebf1;color:black!important;margin 10px auto;"]),b=Object(m.a)(u.CardElement).withConfig({displayName:"components__Card",componentId:"wpe9bw-1"})(["width:55%;border:1px solid;box-sizing:border-box;height:40px;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:white;float:left;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;display:inline-block;vertical-align:top;margin 10px auto;"]),w=Object(m.a)(h).withConfig({displayName:"components__Email",componentId:"wpe9bw-2"})(["width:40%;"]),E=Object(m.a)(h).withConfig({displayName:"components__Date",componentId:"wpe9bw-3"})(["width:15%;"]),x=Object(m.a)(h).withConfig({displayName:"components__Amount",componentId:"wpe9bw-4"})(["width:12%;"]),y=m.a.button.withConfig({displayName:"components__SendAmount",componentId:"wpe9bw-5"})(["font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;width:100px;border:1px solid;box-sizing:border-box;height:40px;border:1px solid transparent;border-radius:4px;background-color:rgb(253,91,2);color:white;display:inline-block;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;vertical-align:top;margin 10px auto;cursor:pointer;float:right;&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.25),0 3px 3px rgba(0,0,0,0.22);transition:all 0.3s;transform:translateZ(10px);}"]),R=m.a.div.withConfig({displayName:"components__FormRow",componentId:"wpe9bw-6"})(["width:100%;height:auto;margin:0 auto;display:flex;flex-direction:row;position:relative;justify-content:space-around;"]),f=m.a.div.withConfig({displayName:"components__FormContainer",componentId:"wpe9bw-7"})(["width:70%!important;margin:0 auto;display:flex;flex-flow:row wrap;background:#e8e8e8;box-sizing:border-box;padding:10px 12px;border:1px solid transparent;border-radius:10px;box-shadow:0 1px 3px 0 #e6ebf1;color:black;"]),M=m.a.div.withConfig({displayName:"components__SentText",componentId:"wpe9bw-8"})(["font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;width:150px;height:40px;color:black;display:inline-block;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;vertical-align:top;margin 10px auto;float:right;"]),O=function(A){function g(g){var t;return(t=A.call(this,g)||this).handleInput=function(A){var g,e=A.target,n=e.value,a=e.name;t.setState(((g={})[a]=n,g.paymentSent=!1,g))},t.submit=t.submit.bind(p()(t)),t.state={email:"",date:"",amount:"",description:"",disabled:!1,paymentSent:!1},t.card=null,t}n()(g,A);var t=g.prototype;return t.resetButton=function(){this.setState({disabled:!1})},t.submit=function(){var A=l()(d.a.mark(function A(g){var t,e,n,a;return d.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return t=this.state.date,e=100*this.state.amount,A.next=4,this.props.stripe.createToken({name:t});case 4:return n=A.sent,a=n.token,A.next=8,fetch("https://ugi3nmc0e1.execute-api.us-east-1.amazonaws.com/dev/checkout",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({token:a,amount:e})});case 8:A.sent.ok?(this.resetButton(),this.setState({paymentSent:!0})):(console.error("Error"),this.setState({paymentSent:!1}));case 11:case"end":return A.stop()}},A,this)}));return function(g){return A.apply(this,arguments)}}(),t.render=function(){var A=this;return o.a.createElement("div",{className:"checkout"},o.a.createElement(f,null,o.a.createElement(R,null,o.a.createElement(w,{placeholder:"Email",type:"text",name:"email",value:this.state.email,onChange:this.handleInput}),o.a.createElement(E,{placeholder:"Date",type:"test",name:"date",value:this.state.date,onChange:this.handleInput}),o.a.createElement(x,{placeholder:"Amount",name:"amount",value:this.state.amount,onChange:this.handleInput})),o.a.createElement(R,null,o.a.createElement(b,{ref:function(g){A.card=g}}),o.a.createElement(y,{onClick:this.submit,disabled:this.state.disabled},"Send")),this.state.paymentSent&&o.a.createElement(R,null,o.a.createElement(M,null,"Money Sent!"))))},g}(o.a.Component),T=(Object(u.injectStripe)(O),function(A){function g(){return A.apply(this,arguments)||this}n()(g,A);var t=g.prototype;return t.componentDidMount=function(){var A=this;window.Stripe?this.setState({stripe:window.Stripe("pk_live_B5jY2Ocf9RcwPrpus0JXIKJh")}):document.querySelector("#stripe-js").addEventListener("load",function(){A.setState({stripe:window.Stripe("pk_live_B5jY2Ocf9RcwPrpus0JXIKJh")})})},t.render=function(){return o.a.createElement(i.b,null,o.a.createElement(u.StripeProvider,{apiKey:"pk_live_B5jY2Ocf9RcwPrpus0JXIKJh"},o.a.createElement(i.a,null,o.a.createElement("h3",null,"ABRAHAM BRUCE VILLAROMAN"),o.a.createElement("h3",null,"BVILLAROMAN@GMAIL.COM"),o.a.createElement("h3",null,"631-871-9578"))))},g}(o.a.Component));g.default=T},147:function(A,g,t){var e;A.exports=(e=t(151))&&e.default||e},150:function(A){A.exports={data:{site:{siteMetadata:{title:"bvillaroman"}}}}},151:function(A,g,t){"use strict";t.r(g);t(33);var e=t(0),n=t.n(e),a=t(4),o=t.n(a),i=t(54),r=t(2),d=function(A){var g=A.location,t=r.default.getResourcesForPathnameSync(g.pathname);return n.a.createElement(i.a,Object.assign({location:g,pageResources:t},t.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},g.default=d},152:function(A,g){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAPlQTFRFAAAA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA////YE3U9gAAAFJ0Uk5TAAArawoBFQcDmesqIqklMczbTYmSApOFmno6wDfCIWizrG0Fm3wz570TRr4dGdhwDnJS8lm0ur/GIA2yXtTfnmooohaB/oS3wwQPd/E4FFtzyKZaO2EAAAABYktHRFINYC2QAAAACXBIWXMAAABIAAAASABGyWs+AAAAo0lEQVQY012P5RKCYBREWRXFLhQFDBQbTGyxE/v9X0ZH4Bt1f565u3cORX2Cd6ivAA6nC7TbY1MwXp8fgWCIgHAkGkOcZSyARJJLpXnBPgDETDaXlwrWMFCUSyhXqjVyUG8oUJst+zPaEtdRuz2WthtaXxkMR7IwtsBkOgOrzxf60uxgtd5gu9vzh6O5ipNB43y54nZ3Ex88nsavnKjRf7bE/gW8NA9r3Ryy4AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0wOFQxNzo1MTozNiswMDowME2AV1UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMTEtMDhUMTc6NTE6MzYrMDA6MDA83e/pAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MTAxNjM0OTaeKXxzAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMTctMTEtMDgvZWRkZDg0ZjJiODIwZjAxMjE3MTQwNTQzMjNjMzdjYzcuaWNvLnBuZ31y/fYAAAAASUVORK5CYII="},153:function(A,g){A.exports="data:image/png;base64,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"},154:function(A,g){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAvpQTFRFAAAA/5gA/1di/58A/1Zk/1dk/wD//6MA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/yyj/4Ej/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA/5gA////5CpvZAAAAPx0Uk5TAAAAAAAAAAAGEQRx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"},156:function(A,g,t){"use strict";var e=t(150),n=t(0),a=t.n(n),o=t(4),i=t.n(o),r=(t(32),t(147),a.a.createContext({})),d=function(A){return a.a.createElement(r.Consumer,null,function(g){return A.data||g[A.query]&&g[A.query].data?(A.render||A.children)(A.data?A.data.data:g[A.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var s=t(162),l=t.n(s),c=t(148),p=(c.a.div.withConfig({displayName:"header__FooterItem",componentId:"sc-15ucens-0"})(["max-width:600px;color:#FD5B03;text-decoration:none;padding:30px;margin:0 auto;"]),c.a.div.withConfig({displayName:"header__AboutContainer",componentId:"sc-15ucens-1"})(["position:relative;top:5vh;height:80vh;font-weight:bold;"]),c.a.div.withConfig({displayName:"header__HFContainer",componentId:"sc-15ucens-2"})(["text-align:center;position:relative;margin:0 auto;maxWidth:100px;padding-bottom:2px;font-weight:bold;margin-bottom:10px;"])),u=function(){return a.a.createElement(p,null,a.a.createElement(void 0,{to:"/"},"HOME"),a.a.createElement(void 0,{to:"/portraits/"},"PORTRAITS"),a.a.createElement(void 0,{to:"/shoots/"},"SHOOTS"),a.a.createElement(void 0,{to:"/about/"},"ABOUT"))},m=(t(163),t(152)),h=t.n(m),b=t(153),w=t.n(b),E=t(154),x=t.n(E),y=function(A){var g=A.children;return a.a.createElement(d,{query:"755544856",render:function(A){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{title:A.site.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+h.a},{rel:"icon",type:"image/png",sizes:"32x32",href:""+w.a},{rel:"shortcut icon",type:"image/png",href:""+x.a}]}),a.a.createElement(u,null),g)},data:e})};y.propTypes={children:i.a.node.isRequired};g.a=y},157:function(A,g,t){"use strict";t.d(g,"b",function(){return i}),t.d(g,"a",function(){return r}),t.d(g,"c",function(){return d}),t.d(g,"d",function(){return s});var e=t(148),n=t(166),a=t.n(n),o=t(156),i=Object(e.a)(o.a).withConfig({displayName:"containers__Container",componentId:"crflub-0"})(["margin:0 auto;padding-bottom:10px;font-weight:900px;justify-content:'center';align-tems:'center'"]),r=e.a.div.withConfig({displayName:"containers__AboutContainer",componentId:"crflub-1"})(["text-align:center;margin:0 auto;padding-bottom:10px;font-weight:900px;justify-content:'center';align-tems:'center'"]),d=Object(e.a)(a.a).withConfig({displayName:"containers__GridContainer",componentId:"crflub-2"})(["position:relative;display:table;margin:0 auto;padding-bottom:10px;justify-content:'center';align-items:'center'"]),s={transitionDuration:"0.8s",isFitWidth:!0};e.a.div.withConfig({displayName:"containers__Background",componentId:"crflub-3"})(["margin:0 auto;text-align:center;background-color:orange;position:fixed;left:10vw;width:80vw;top:30vh;height:10vh;z-index:-99;background-size:80%;background-repeat:no-repeat;background-position:center;"])}}]);
//# sourceMappingURL=component---src-pages-about-js-d0e67633b175f840fb9f.js.map