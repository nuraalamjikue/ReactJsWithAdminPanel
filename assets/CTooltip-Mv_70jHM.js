import{r as i,_ as B,R as o,b as a,c as I,P as e,q as $,f as z}from"./index-DaJwKULb.js";import{u as A,q as G,r as J,T as K,s as Q}from"./DefaultLayout-D7MR_y7B.js";import{g as U}from"./getRTLPlacement-K8-ctlnc.js";var k=i.forwardRef(function(t,w){var N=t.children,d=t.animation,C=d===void 0?!0:d,x=t.className,O=t.container,q=t.content,v=t.delay,c=v===void 0?0:v,b=t.fallbackPlacements,F=b===void 0?["top","right","bottom","left"]:b,g=t.offset,H=g===void 0?[0,6]:g,M=t.onHide;t.onShow;var h=t.placement,S=h===void 0?"top":h,y=t.trigger,r=y===void 0?["hover","focus"]:y,u=t.visible,D=B(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),n=i.useRef(null),s=i.useRef(null),L=A(w,n),E=i.useRef("tooltip".concat(Math.floor(Math.random()*1e6))),P=G(),V=P.initPopper,_=P.destroyPopper,R=i.useState(u),f=R[0],m=R[1],T=typeof c=="number"?{show:c,hide:c}:c,j={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:F}},{name:"offset",options:{offset:H}}],placement:U(S,s.current)};i.useEffect(function(){m(u)},[u]);var l=function(p){if(p){setTimeout(function(){return m(!0)},T.show);return}setTimeout(function(){return m(!1)},T.hide)};return o.createElement(o.Fragment,null,o.cloneElement(N,a(a(a(a(a({},f&&{"aria-describedby":E.current}),{ref:s}),(r==="click"||r.includes("click"))&&{onClick:function(){return l(!f)}}),(r==="focus"||r.includes("focus"))&&{onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),(r==="hover"||r.includes("hover"))&&{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}})),o.createElement(J,{container:O,portal:!0},o.createElement(K,{in:f,mountOnEnter:!0,nodeRef:n,onEnter:function(){s.current&&n.current&&V(s.current,n.current,j)},onEntering:function(){s.current&&n.current&&(n.current.style.display="initial")},onExit:M,onExited:function(){_()},timeout:{enter:0,exit:n.current?Q(n.current)+50:200},unmountOnExit:!0},function(p){return o.createElement("div",a({className:I("tooltip","bs-tooltip-auto",{fade:C,show:p==="entered"},x),id:E.current,ref:L,role:"tooltip",style:{display:"none"}},D),o.createElement("div",{className:"tooltip-arrow"}),o.createElement("div",{className:"tooltip-inner"},q))})))});k.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:$,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),trigger:z,visible:e.bool};k.displayName="CTooltip";export{k as C};
