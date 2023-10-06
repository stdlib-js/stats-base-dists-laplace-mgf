// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function m(s,r,m){var d;return t(s)||t(r)||t(m)||m<=0||e(s)>=1/m?NaN:(d=m*s,n(r*s)/(1-i(d,2)))}function d(s,m){return t(s)||t(m)||m<=0?r(NaN):function(t){var r;if(e(t)>=1/m)return NaN;return r=m*t,n(s*t)/(1-i(r,2))}}s(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
