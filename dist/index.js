"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(h,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist'),N=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-pow/dist');function y(e,r,a){var i;return u(e)||u(r)||u(a)||a<=0||p(e)>=1/a?NaN:(i=a*e,N(r*e)/(1-x(i,2)))}s.exports=y
});var c=t(function(j,q){
var g=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-special-exp/dist'),l=require('@stdlib/math-base-special-pow/dist');function m(e,r){if(o(e)||o(r)||r<=0)return g(NaN);return a;function a(i){var n;return w(i)>=1/r?NaN:(n=r*i,d(e*i)/(1-l(n,2)))}}q.exports=m
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=v(),O=c();F(f,"factory",O);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
