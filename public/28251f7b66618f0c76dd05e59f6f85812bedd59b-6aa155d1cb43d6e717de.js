(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1PzU":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("q1tI");function r(){function t(){return{width:window.innerWidth,height:window.innerHeight}}var e=Object(i.useState)(t),n=e[0],r=e[1];return Object(i.useEffect)((function(){function e(){r(t())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}},OGtf:function(t,e,n){var i=n("XKFU"),r=n("eeVq"),o=n("vhPU"),a=/"/g,d=function(t,e,n,i){var r=String(o(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),d+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),i(i.P+i.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},PGlZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("dZ+Y"),n("8+KV"),n("0l/t"),n("Vd3H"),n("bWfx"),n("a1Th"),n("h7Nl"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("91GP");var i=n("q1tI");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var o=new Map,a=new Map,d=0;function s(t){return Object.keys(t).filter(Boolean).sort().map((function(e){return e+"_"+("root"===e?(n=t.root)?(a.has(n)||(d+=1,a.set(n,d.toString())),a.get(n)):"0":t[e]);var n})).toString()}function c(t,e,n){if(void 0===n&&(n={}),!t)return function(){};var i=function(t){var e=s(t),n=o.get(e);if(!n){var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n,o=e.isIntersecting&&r.thresholds.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(n=i.get(e.target))||n.forEach((function(t){t(o,e)}))}))}),t);n={id:e,observer:r,elements:i},o.set(e,n)}return n}(n),r=i.id,a=i.observer,d=i.elements,c=d.get(t)||[];return d.has(t)||d.set(t,c),c.push(e),a.observe(t),function(){c.splice(c.indexOf(e),1),0===c.length&&(d.delete(t),a.unobserve(t)),0===d.size&&(a.disconnect(),o.delete(r))}}function l(t){return"function"!=typeof t.children}var p=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).node=null,n._unobserveCb=null,n.handleNode=function(t){n.node&&(n.unobserve(),t||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=t||null,n.observeNode()},n.handleChange=function(t,e){t&&n.props.triggerOnce&&n.unobserve(),l(n.props)||n.setState({inView:t,entry:e}),n.props.onChange&&n.props.onChange(t,e)},n.state={inView:!!e.initialInView,entry:void 0},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=o.prototype;return a.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,e=t.threshold,n=t.root,i=t.rootMargin,r=t.trackVisibility,o=t.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:n,rootMargin:i,trackVisibility:r,delay:o})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!l(this.props)){var t=this.state,e=t.inView,n=t.entry;return this.props.children({inView:e,entry:n,ref:this.handleNode})}var o=this.props,a=o.children,d=o.as,s=o.tag,c=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(d||s||"div",r({ref:this.handleNode},c),a)},o}(i.Component);function u(t){var e=void 0===t?{}:t,n=e.threshold,r=e.delay,o=e.trackVisibility,a=e.rootMargin,d=e.root,s=e.triggerOnce,l=e.skip,p=e.initialInView,u=Object(i.useRef)(),f=Object(i.useState)({inView:!!p}),h=f[0],m=f[1],g=Object(i.useCallback)((function(t){void 0!==u.current&&(u.current(),u.current=void 0),l||t&&(u.current=c(t,(function(t,e){m({inView:t,entry:e}),e.isIntersecting&&s&&u.current&&(u.current(),u.current=void 0)}),{root:d,rootMargin:a,threshold:n,trackVisibility:o,delay:r}))}),[n,d,a,s,l,o,r]);Object(i.useEffect)((function(){u.current||!h.entry||s||l||m({inView:!!p})}));var w=[g,h.inView,h.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},hiXJ:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"u",(function(){return a})),n.d(e,"s",(function(){return d})),n.d(e,"k",(function(){return s})),n.d(e,"w",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"q",(function(){return p})),n.d(e,"o",(function(){return u})),n.d(e,"g",(function(){return f})),n.d(e,"p",(function(){return h})),n.d(e,"e",(function(){return m})),n.d(e,"j",(function(){return g})),n.d(e,"n",(function(){return w})),n.d(e,"t",(function(){return y})),n.d(e,"v",(function(){return b})),n.d(e,"d",(function(){return x})),n.d(e,"y",(function(){return v})),n.d(e,"m",(function(){return j})),n.d(e,"r",(function(){return _})),n.d(e,"l",(function(){return C})),n.d(e,"h",(function(){return I})),n.d(e,"i",(function(){return k})),n.d(e,"x",(function(){return S})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return N}));var i=n("vOnD"),r=n("ZMKu"),o=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__AppContainer",componentId:"ft16yj-0"})(["position:fixed;top:0;left:0;height:100%;width:100%;overflow:hidden;"]),a=i.default.div.withConfig({displayName:"projectStyles__ScrollContainer",componentId:"ft16yj-1"})(["transform:translate3d(0px,0px,0px) skewY(0deg);"]),d=i.default.div.withConfig({displayName:"projectStyles__ReturnButton",componentId:"ft16yj-2"})(["display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:100%;border:1px solid ",";margin:0 auto;position:relative;transition:0.4s;:hover{background:",";border:1px solid ",";svg,polygon{fill:",";color:",";}}svg,polygon{fill:",";color:",";width:50%;}"],(function(t){return t.theme.stateless_border_svg}),(function(t){return t.theme.background_svg}),(function(t){return t.theme.background_svg}),(function(t){return t.theme.color_svg}),(function(t){return t.theme.color_svg}),(function(t){return t.theme.stateless_color_svg}),(function(t){return t.theme.stateless_color_svg})),s=i.default.div.withConfig({displayName:"projectStyles__ContainerProject",componentId:"ft16yj-3"})(["margin:0 auto;width:auto;height:100%;margin-top:5%;text-align:center;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}",""],(function(t){return t.fluid&&Object(i.css)(["padding:0;margin:0;max-width:100%;background-color:blue;"])})),c=Object(i.default)(r.b.h1).withConfig({displayName:"projectStyles__TitleProject",componentId:"ft16yj-4"})(['font-size:8rem;letter-spacing:-0.1rem;font-family:"Roboto",sans-serif;']),l=i.default.div.withConfig({displayName:"projectStyles__ContainerInfoProject",componentId:"ft16yj-5"})(["display:flex;justify-content:space-evenly;margin:0 auto;margin-top:8rem;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}:nth-child(2){white-space:normal;color:red;text-transform:uppercase;}"]),p=i.default.li.withConfig({displayName:"projectStyles__ItemProject",componentId:"ft16yj-6"})([""," img{width:20px;margin-right:0.5rem;}"],(function(t){return t.alignEnd&&Object(i.css)(["align-self:flex-end;"])})),u=i.default.ul.withConfig({displayName:"projectStyles__InfoProject",componentId:"ft16yj-7"})(["display:flex;text-align:center;align-items:center;position:relative;padding-inline-start:0px !important;flex-direction:column;list-style:none;li:first-child{margin-bottom:2rem;font-weight:600;}li:last-child{font-weight:400;}"]),f=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__ContainerIntroProject",componentId:"ft16yj-8"})(["display:flex;justify-content:center;margin:0 auto;margin-top:4rem;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}"]),h=i.default.p.withConfig({displayName:"projectStyles__IntroProject",componentId:"ft16yj-9"})(['font-size:1rem;line-height:200%;width:50%;font-family:"Roboto",sans-serif;text-align:justify;']),m=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__ContainerImage",componentId:"ft16yj-10"})(["margin:0 auto;margin-top:4rem;width:80%;"]),g=i.default.div.withConfig({displayName:"projectStyles__ContainerNextPrevProject",componentId:"ft16yj-11"})(["display:flex;justify-content:space-between;font-size:1.5rem;-webkit-text-stroke-width:1px;-webkit-text-fill-color:transparent;-webkit--webkit-text-stroke-color:",";text-transform:uppercase;margin:0 auto;margin-top:4rem;width:70%;padding-bottom:2rem;"],(function(t){return t.theme.primary_text_color})),w=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__HomePanelBackground",componentId:"ft16yj-12"})(["height:100vh;width:100vw;position:absolute;z-index:1001;background:",";"],(function(t){return t.theme.background})),y=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__RightPanelBackground",componentId:"ft16yj-13"})(["height:100vh;width:100vw;position:absolute;z-index:11;right:0;background:pink;"]),b=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__SeparatorLine",componentId:"ft16yj-14"})(["width:50%;opacity:0.3;height:1px;background:",";position:relative;margin:auto;margin-top:4rem;"],(function(t){return t.theme.primary_text_color})),x=i.default.div.withConfig({displayName:"projectStyles__BigContainerWrapperScrollProgress",componentId:"ft16yj-15"})(["width:100%;position:fixed;transform:translateY(-50%) translateX(-50%);top:50%;left:50%;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}"]),v=i.default.div.withConfig({displayName:"projectStyles__WrapperScrollProgress",componentId:"ft16yj-16"})(["width:1px;height:200px;"]),j=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__ContainerScrollProgress",componentId:"ft16yj-17"})(["width:100%;height:100%;overflow:hidden;background:",";border-radius:30px;"],(function(t){return t.theme.primary_text_color})),_=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__ItemScrollProgress",componentId:"ft16yj-18"})(["width:inherit;height:inherit;background:",";transform-origin:0% 0%;"],(function(t){return t.theme.background})),C=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__ContainerRightSide",componentId:"ft16yj-19"})(["display:flex;justify-content:flex-end;position:fixed;transform:translateY(-50%) translateX(-50%);top:50%;left:50%;position:absolute;z-index:100;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}width:100%;"]),I=i.default.div.withConfig({displayName:"projectStyles__ContainerItemRightSide",componentId:"ft16yj-20"})(["transform:rotate(90deg) translateY(-100%);h4{}"]),k=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__ContainerLeftSideAccordion",componentId:"ft16yj-21"})(["width:100%;position:fixed;display:flex;transform:translateY(-50%) translateX(-50%);top:90%;left:50%;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}z-index:100;"]),S=Object(i.default)(r.b.h4).withConfig({displayName:"projectStyles__TitleRightSide",componentId:"ft16yj-22"})(["transform:translateY(100%);text-transform:uppercase;letter-spacing:0.03rem;width:100px;font-weight:400;"]),O=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__AccordionContent",componentId:"ft16yj-23"})(["overflow:hidden;height:100%;width:0%;a{cursor:pointer;width:100%;margin:0px 8px;font-size:1rem;color:",";font-weight:300;}"],(function(t){return t.theme.background_svg})),N=Object(i.default)(r.b.div).withConfig({displayName:"projectStyles__AccordionIcon",componentId:"ft16yj-24"})(["height:100%;position:relative;top:15%;display:flex;flex-direction:column;cursor:pointer;span{width:16px;height:4px;background:",";}"],(function(t){return t.theme.background_svg}))}}]);
//# sourceMappingURL=28251f7b66618f0c76dd05e59f6f85812bedd59b-6aa155d1cb43d6e717de.js.map