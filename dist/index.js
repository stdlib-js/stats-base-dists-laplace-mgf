"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=s(function(h,v){
var u=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist'),N=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-pow/dist');function y(e,r,a){var i;return u(e)||u(r)||u(a)||a<=0||p(e)>=1/a?NaN:(i=a*e,N(r*e)/(1-x(i,2)))}v.exports=y
});var c=s(function(j,q){
var g=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-special-exp/dist'),l=require('@stdlib/math-base-special-pow/dist');function m(e,r){if(n(e)||n(r)||r<=0)return g(NaN);return a;function a(i){var t;return n(i)||w(i)>=1/r?NaN:(t=r*i,d(e*i)/(1-l(t,2)))}}q.exports=m
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=o(),O=c();F(f,"factory",O);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
