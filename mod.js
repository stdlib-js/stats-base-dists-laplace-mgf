// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+I(t):I(t)+r}var N=String.fromCharCode,_=isNaN,E=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,n,t,a,o,f,s,l,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,_(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){return"string"==typeof r}function x(r){var e,n;if(!k(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return F.apply(null,e)}var j=Object.prototype,O=j.toString,G=j.__defineGetter__,P=j.__defineSetter__,$=j.__lookupGetter__,H=j.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,e,n.get),o&&P&&P.call(r,e,n.set),r};function Y(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return r!=r}function L(r){return Math.abs(r)}var R=Math.floor,M=Math.ceil;function Z(r){return r<0?M(r):R(r)}var X=Number,q=X.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY,B=Number.POSITIVE_INFINITY,D=X.NEGATIVE_INFINITY,J=Number.POSITIVE_INFINITY,K=X.NEGATIVE_INFINITY;function Q(r){return r===J||r===K}var rr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var er=Object.prototype.toString;var nr=Object.prototype.hasOwnProperty;var tr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof tr?tr.toStringTag:"";var ar=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return er.call(r);n=r[ir],a=ir,e=null!=(i=r)&&nr.call(i,a);try{r[ir]=void 0}catch(e){return er.call(r)}return t=er.call(r),e?r[ir]=n:delete r[ir],t}:function(r){return er.call(r)},or="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var cr,fr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(or&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var yr,gr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),n=e,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr=yr,dr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var wr,br="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr=wr,Ir="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var Nr,_r="function"==typeof Uint16Array?Uint16Array:void 0;Nr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Ir&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Tr={uint16:Nr,uint8:mr};(Er=new Tr.uint16(1))[0]=4660;var Fr,Sr,Ur=52===new Tr.uint8(Er.buffer)[0];!0===Ur?(Fr=1,Sr=0):(Fr=0,Sr=1);var Vr={HIGH:Fr,LOW:Sr},kr=new vr(1),xr=new sr(kr.buffer),jr=Vr.HIGH,Or=Vr.LOW;function Gr(r,e,n,t){return kr[0]=r,e[t]=xr[jr],e[t+n]=xr[Or],e}function Pr(r){return Gr(r,[0,0],1,0)}Y(Pr,"assign",Gr);var $r,Hr,Wr=!0===Ur?1:0,Yr=new vr(1),Cr=new sr(Yr.buffer);function Lr(r){return Yr[0]=r,Cr[Wr]}!0===Ur?($r=1,Hr=0):($r=0,Hr=1);var Rr={HIGH:$r,LOW:Hr},Mr=new vr(1),Zr=new sr(Mr.buffer),Xr=Rr.HIGH,qr=Rr.LOW;function zr(r,e){return Zr[Xr]=r,Zr[qr]=e,Mr[0]}var Br=[0,0];function Dr(r,e){var n,t;return Pr.assign(r,Br,1,0),n=Br[0],n&=2147483647,t=Lr(e),zr(n|=t&=2147483648,Br[1])}function Jr(r,e,n,t){return C(r)||Q(r)?(e[t]=r,e[t+n]=0,e):0!==r&&L(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Y((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0],Qr=[0,0];function re(r,e){var n,t;return 0===e||0===r||C(r)||Q(r)?r:(Jr(r,Kr,1,0),e+=Kr[1],e+=function(r){var e=Lr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Kr[0]),e<-1074?Dr(0,r):e>1023?r<0?D:B:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Pr.assign(r,Qr,1,0),n=Qr[0],n&=2148532223,t*zr(n|=e+1023<<20,Qr[1])))}function ee(r){var e;return C(r)||r===z?r:r===q?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return re(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Z(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function ne(r){return R(r)===r}function te(r){return ne(r/2)}function ie(r){return te(r>0?r-1:r+1)}var ae=Math.sqrt,oe=!0===Ur?0:1,ue=new vr(1),ce=new sr(ue.buffer);function fe(r,e){return ue[0]=r,ce[oe]=e>>>0,ue[0]}function se(r){return 0|r}var le=X.NEGATIVE_INFINITY,pe=Number.POSITIVE_INFINITY;var ye=!0===Ur?1:0,ge=new vr(1),ve=new sr(ge.buffer);function de(r,e){return ge[0]=r,ve[ye]=e>>>0,ge[0]}var he=[1,1.5],we=[0,.5849624872207642],be=[0,1.350039202129749e-8];var me=1e300,Ie=1e-300,Ae=[0,0],Ne=[0,0];function _e(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,v;if(C(r)||C(e))return NaN;if(Pr.assign(e,Ae,1,0),o=Ae[0],0===Ae[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return ae(r);if(-.5===e)return 1/ae(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Q(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:L(r)<1==(e===pe)?0:pe}(r,e)}if(Pr.assign(r,Ae,1,0),a=Ae[0],0===Ae[1]){if(0===a)return function(r,e){return e===le?pe:e===pe?0:e>0?ie(e)?r:0:ie(e)?Dr(pe,r):pe}(r,e);if(1===r)return 1;if(-1===r&&ie(e))return-1;if(Q(r))return r===le?_e(-0,-e):e<0?0:pe}if(r<0&&!1===ne(e))return(r-r)/(r-r);if(i=L(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&ie(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Lr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*me*me:u*Ie*Ie;if(n>1072693248)return 0===c?u*me*me:u*Ie*Ie;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=fe(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ne,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,v,d,h,w,b,m,I,A,N;return m=0,n<1048576&&(m-=53,n=Lr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(I=1048575&n|0),I<=235662?A=0:I<767610?A=1:(A=0,m+=1,n-=1048576),o=fe(i=(w=(e=de(e,n))-(f=he[A]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=de(0,t+=A<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),c=fe(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=fe(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+be[A])-((g=fe(g=(p=.9617967009544373*l)+y+(s=we[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(Ne,i,n);if(y=(l=(e-(f=fe(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Pr.assign(y,Ae,1,0),g=se(Ae[0]),v=se(Ae[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*me*me;if(l+8008566259537294e-32>y-s)return u*me*me}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*Ie*Ie;if(l<=y-s)return u*Ie*Ie}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=de(0,t)),r=se(r=Lr(f=1-((f=(o=.6931471824645996*(a=fe(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?re(f,s):de(f,r)}(g,s,l),u*y}function Ee(r,e,n){var t;return C(r)||C(e)||C(n)||n<=0||L(r)>=1/n?NaN:(t=n*r,ee(e*r)/(1-_e(t,2)))}function Te(r,e){return C(r)||C(e)||e<=0?(n=NaN,function(){return n}):function(n){var t;if(L(n)>=1/e)return NaN;return t=e*n,ee(r*n)/(1-_e(t,2))};var n}Y(Ee,"factory",Te);export{Ee as default,Te as factory};
//# sourceMappingURL=mod.js.map
