// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}function y(r){return Math.abs(r)}var p=Math.floor,v=Math.ceil;function b(r){return r<0?v(r):p(r)}var w=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,s=1023;function A(r){return r===d||r===w}var _,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",j=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return h.call(r);t=r[g],u=g,n=null!=(o=r)&&U.call(o,u);try{r[g]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[g]=t:delete r[g],e}:function(r){return h.call(r)},N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=_,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,L="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,x=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:W,uint8:x};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n){return Q[0]=n,r[0]=R[X],r[1]=R[Z],r}function rr(r,n){return 1===arguments.length?$([0,0],r):$(r,n)}var nr,tr,er=!0===J?1:0,or=new P(1),ur=new E(or.buffer);function ir(r){return or[0]=r,ur[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new P(1),cr=new E(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var vr=[0,0];function br(r,n){var t,e;return rr(vr,r),t=vr[0],t&=2147483647,e=ir(n),pr(t|=e&=2147483648,vr[1])}function wr(r,n,t,e){return l(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&y(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var dr=[0,0],sr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(wr(r,dr,1,0),n+=dr[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-s|0}(r=dr[0]),n<-1074?br(0,r):n>1023?r<0?w:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr(sr,r),t=sr[0],t&=2148532223,e*pr(t|=n+s<<20,sr[1])))}var _r=1.4426950408889634,mr=1/(1<<28);function hr(r){var n;return l(r)||r===d?r:r===w?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<mr?1+r:function(r,n,t){var e,o,u,i;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}function Ur(r){return p(r)===r}function gr(r){return Ur(r/2)}function jr(r){return gr(r>0?r-1:r+1)}var Nr=Math.sqrt,Ir=!0===J?0:1,Or=new P(1),Sr=new E(Or.buffer);function Er(r,n){return Or[0]=r,Sr[Ir]=n>>>0,Or[0]}function Fr(r){return 0|r}var Tr=!0===J?1:0,Hr=new P(1),Gr=new E(Hr.buffer);function Pr(r,n){return Hr[0]=r,Gr[Tr]=n>>>0,Hr[0]}var Lr=1048576,Mr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],xr=2147483647,kr=1048575,Yr=1048576,qr=2147483647,Cr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(r,n){var t,e,o,u,i,f,a,c,p,v,b,_,m,h;if(l(r)||l(n))return NaN;if(rr(Dr,n),i=Dr[0],0===Dr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nr(r);if(-.5===n)return 1/Nr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:y(r)<1==(n===d)?0:d}(r,n)}if(rr(Dr,r),u=Dr[0],0===Dr[1]){if(0===u)return function(r,n){return n===w?d:n===d?0:n>0?jr(n)?r:0:jr(n)?br(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&jr(n))return-1;if(A(r))return r===w?Kr(-0,-n):n<0?0:d}if(r<0&&!1===Ur(n))return(r-r)/(r-r);if(o=y(r),t=u&qr|0,e=i&qr|0,a=i>>>31|0,f=(f=u>>>31|0)&&jr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*zr*zr:f*Br*Br;if(t>1072693248)return 0===a?f*zr*zr:f*Br*Br;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Er(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Jr,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,w,d,A,_,m,h,U,g,j;return h=0,t<Lr&&(h-=53,t=ir(n*=9007199254740992)),h+=(t>>20)-s|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,h+=1,t-=Lr),i=Er(o=(_=(n=Pr(n,t))-(c=Mr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Pr(0,e+=g<<18),A=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Er(a=3+(u=i*i)+(A+=(f=m*(_-i*a-i*(n-(a-c))))*(i+o)),0),w=(v=-7.028461650952758e-9*(y=Er(y=(_=i*a)+(m=f*a+(A-(a-3-u))*o),0))+.9617966939259756*(m-(y-_))+Wr[g])-((b=Er(b=(p=.9617967009544373*y)+v+(l=Vr[g])+(d=h),0))-d-l-p),r[0]=b,r[1]=w,r}(Jr,o,t);if(v=(n-(c=Er(n,0)))*b[0]+n*b[1],p=c*b[0],rr(Dr,_=v+p),m=Fr(Dr[0]),h=Fr(Dr[1]),m>=Cr){if(0!=(m-Cr|h))return f*zr*zr;if(v+8008566259537294e-32>_-p)return f*zr*zr}else if((m&qr)>=1083231232){if(0!=(m-3230714880|h))return f*Br*Br;if(v<=_-p)return f*Br*Br}return _=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&xr|0)>>20)-s|0,c=0,l>1071644672&&(o=Pr(0,((c=r+(Yr>>y+1)>>>0)&~(kr>>(y=((c&xr)>>20)-s|0)))>>>0),c=(c&kr|Yr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Fr(r=ir(a=1-((a=(u=.6931471824645996*(o=Er(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ar(a,c):Pr(a,r)}(m,p,v),f*_}function Qr(r,n,t){var e;return l(r)||l(n)||l(t)||t<=0||y(r)>=1/t?NaN:(e=t*r,hr(n*r)/(1-Kr(e,2)))}return c(Qr,"factory",(function(r,n){return l(r)||l(n)||n<=0?(t=NaN,function(){return t}):function(t){var e;return y(t)>=1/n?NaN:(e=n*t,hr(r*t)/(1-Kr(e,2)))};var t})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=index.js.map
