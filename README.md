<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Laplace][laplace-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Laplace (double exponential)][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{\exp(\mu\,t)}{1-b^2\,t^2}\,\!\text{ for }|t|<1/b" alt="Moment-generating function (MGF) for a Laplace (double exponential) distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{\exp(\mu\,t)}{1-b^2\,t^2}\,\!\text{ for }|t|&lt;1/b" data-equation="eq:laplace_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/mgf/docs/img/equation_laplace_mgf_function.svg" alt="Moment-generating function (MGF) for a Laplace (double exponential) distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b` is the scale parameter. For `|t| >= 1/b`, the [MGF][mgf] is undefined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-laplace-mgf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-laplace-mgf' );
```

#### mgf( t, mu, b )

Evaluates the [moment-generating function][mgf] (MGF) for a [Laplace][laplace-distribution] (double exponential) distribution with parameters `mu` (location) and `b` (scale).

```javascript
var y = mgf( 0.5, 0.0, 1.0 );
// returns ~1.333

y = mgf( 0.0, 0.0, 1.0 );
// returns 1.0

y = mgf( -1.0, 4.0, 0.2 );
// returns ~0.019
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 0.0, NaN );
// returns NaN
```

If `t` is not inside the interval `(-1/b, 1/b)`, the function returns `NaN`.

```javascript
var y = mgf( 1.0, 0.0, 2.0 );
// returns NaN

y = mgf( -0.5, 0.0, 4.0 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 0.0, 0.0 );
// returns NaN

y = mgf( 2.0, 0.0, -1.0 );
// returns NaN
```

#### mgf.factory( mu, b )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [Laplace][laplace-distribution] (double exponential) distribution with parameters `mu` and `b`.

```javascript
var mymgf = mgf.factory( 4.0, 2.0 );

var y = mymgf( 0.2 );
// returns ~2.649

y = mymgf( 0.4 );
// returns ~13.758
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var mgf = require( '@stdlib/stats-base-dists-laplace-mgf' );

var mu;
var b;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    mu = (randu() * 10.0) - 5.0;
    b = randu() * 20.0;
    y = mgf( t, mu, b );
    console.log( 't: %d, µ: %d, b: %d, M_X(t;µ,b): %d', t.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-laplace-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-laplace-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-laplace-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-laplace-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-laplace-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-laplace-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-laplace-mgf/main/LICENSE

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
