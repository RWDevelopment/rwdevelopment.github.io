$(document).ready(function(){(function(){$.fn.scrollWithEase=function(I){!function(){function A(){if(document.body){var a=document.body,b=document.documentElement,c=window.innerHeight,e=a.scrollHeight;l=0<=document.compatMode.indexOf("CSS")?b:a;p=a;f.keyboardSupport&&window.addEventListener("keydown",J,!1);if(B=!0,top!=self)C=!0;else if(e>c&&(a.offsetHeight<=c||b.offsetHeight<=c)){var d=!1;if(b.style.height="auto",setTimeout(function(){d||b.scrollHeight==document.height||(d=!0,setTimeout(function(){b.style.height=
document.height+"px";d=!1},100))},10),l.offsetHeight<=c)c=document.createElement("div"),c.style.clear="both",a.appendChild(c)}f.fixedBackground||K||(a.style.backgroundAttachment="scroll",b.style.backgroundAttachment="scroll")}}function D(a,b,c,e){if(e||(e=1E3),L(b,c),1!=f.accelerationMax){var d=+new Date-v;d<f.accelerationDelta&&(d=(1+30/d)/2,1<d&&(d=Math.min(d,f.accelerationMax),b*=d,c*=d));v=+new Date}if(q.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!w){var g=a===document.body,
k=function(){for(var d=+new Date,h=0,l=0,t=0;t<q.length;t++){var m=q[t],n=d-m.start,p=n>=f.animationTime,r=p?1:n/f.animationTime;f.pulseAlgorithm&&(n=r,r=1<=n?1:0>=n?0:(1==f.pulseNormalize&&(f.pulseNormalize/=E(1)),E(n)));n=m.x*r-m.lastX>>0;r=m.y*r-m.lastY>>0;h+=n;l+=r;m.lastX+=n;m.lastY+=r;p&&(q.splice(t,1),t--)}g?window.scrollBy(h,l):(h&&(a.scrollLeft+=h),l&&(a.scrollTop+=l));b||c||(q=[]);q.length?F(k,a,e/f.frameRate+1):w=!1};F(k,a,0);w=!0}}function M(a){B||A();var b=a.target,c=G(b);if(!c||a.defaultPrevented||
"embed"===(p.nodeName||"").toLowerCase()||"embed"===(b.nodeName||"").toLowerCase()&&/\.pdf/i.test(b.src))return!0;b=a.wheelDeltaX||0;var e=a.wheelDeltaY||0;b||e||(e=a.wheelDelta||0);var d;if(d=!f.touchpadSupport)if(d=e){d=Math.abs(d);h.push(d);h.shift();clearTimeout(N);d=h[0]==h[1]&&h[1]==h[2];var g=x(h[0],120)&&x(h[1],120)&&x(h[2],120);d=!(d||g)}else d=void 0;return d?!0:(1.2<Math.abs(b)&&(b*=f.stepSize/120),1.2<Math.abs(e)&&(e*=f.stepSize/120),D(c,-b,-e),void a.preventDefault())}function J(a){var b=
a.target,c=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==k.spacebar;if(/input|textarea|select|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||c||"button"===(b.nodeName||"").toLowerCase()&&a.keyCode===k.spacebar)return!0;var e=b=0;c=G(p);var d=c.clientHeight;switch(c==document.body&&(d=window.innerHeight),a.keyCode){case k.up:e=-f.arrowScroll;break;case k.down:e=f.arrowScroll;break;case k.spacebar:e=a.shiftKey?1:-1;e=-e*d*.9;break;case k.pageup:e=.9*-d;break;case k.pagedown:e=
.9*d;break;case k.home:e=-c.scrollTop;break;case k.end:d=c.scrollHeight-c.scrollTop-d;e=0<d?d+10:0;break;case k.left:b=-f.arrowScroll;break;case k.right:b=f.arrowScroll;break;default:return!0}D(c,b,e);a.preventDefault()}function O(a){p=a.target}function y(a,b){for(var c=a.length;c--;)z[H(a[c])]=b;return b}function G(a){var b=[],c=l.scrollHeight;do{var e=z[H(a)];if(e)return y(b,e);if(b.push(a),c===a.scrollHeight){if(!C||l.clientHeight+10<c)return y(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&
(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return y(b,a)}while(a=a.parentNode)}function L(a,b){a=0<a?1:-1;b=0<b?1:-1;(u.x!==a||u.y!==b)&&(u.x=a,u.y=b,q=[],v=0)}function x(a,b){return Math.floor(a/b)==a/b}function E(a){var b,c,e;return a*=f.pulseScale,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),--a,e=1-Math.exp(-a),b=c+e*(1-c)),b*f.pulseNormalize}var g=$.extend({frameRate:60,animationTime:900,stepSize:160,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,
accelerationDelta:40,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0},I),p,f=g={frameRate:g.frameRate,animationTime:g.animationTime,stepSize:g.stepSize,pulseAlgorithm:g.pulseAlgorithm,pulseScale:g.pulseScale,pulseNormalize:g.pulseNormalize,accelerationDelta:g.accelerationDelta,accelerationMax:g.accelerationMax,keyboardSupport:g.keyboardSupport,arrowScroll:g.arrowScroll,touchpadSupport:g.touchpadSupport,fixedBackground:g.fixedBackground,excluded:""},K=!1,C=
!1,u={x:0,y:0},B=!1,l=document.documentElement,h=[120,120,120],k={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};f=g;var q=[],w=!1,v=+new Date,z={};setInterval(function(){z={}},1E4);var N,H=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),F=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1E3/60)}}();g=/chrome|iPad/i.test(window.navigator.userAgent);"onmousewheel"in
document&&g&&(window.addEventListener("mousedown",O,!1),window.addEventListener("mousewheel",M,!1),window.addEventListener("load",A,!1))}()}})();$("body").scrollWithEase()});
