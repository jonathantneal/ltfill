# ltfill [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][ltfill]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Tweet About This][soc-img]][soc-url]

[ltfill] lets you use [the speculative `lt` element] in HTML.

The `lt` element would allow web authors to provide titles or captions to lists.

```html
<ul>
  <lt>Important Seussian Characters</lt>
  <li>Thing One</li>
  <li>The Cat in the Hat</li>
  <li>The Lorax</li>
  <li>Sally</li>
</ul>
```

```html
<ol>
  <lt>Days of the week</lt>
  <li>Monday</li>
  <li>Tuesday</li>
  <li>Wednesday</li>
  <li>Thursday</li>
  <li>Friday</li>
  <li>Saturday</li>
  <li>Sunday</li>
</ol>
```

```html
<dl>
  <lt>A few important web technologies</lt>
  <dt>HTML</dt>
  <dd>HTML is the markup language used to give content structure.</dd>
  <dt>CSS</dt>
  <dd>CSS is the language used to add a creative layer on top of HTML.</dd>
</dl>
```

**[Try it right now using CodePen]**

---

**[ltfill] is a [speculative polyfill] which emulates a proposed feature of the
web platform. Therefore, it should only be used in real production situations
as `x-lt` and not `lt`, as the later would otherwise risk creating problems for
the development of the Web if it became widely used prior to standardization
and implementation.**

---

## Usage

Add [ltfill] to your build tool:

```bash
npm install ltfill --save-dev
```

Import [ltfill] as a resource.

```js
import ltfill from 'ltfill';
```

---

### observe

The `observe` method watches list title elements.

```js
ltfill.observe(
  document.documentElement, // where list titles will be observed
  'x-h' // tag name of list titles
);
```

The `observe` method will assign a unique `id` to the list title, if it does
not already have one. It will then assign an `aria-labelledby` to the list
title’s parent, if it does not already have one, referencing the list title.

Example:

```html
<ol aria-labelledby="__ltfill0">
  <x-lt id="__ltfill0">Days of the week</x-lt>
  <li>Monday</li>
  <li>Tuesday</li>
  <li>Wednesday</li>
  <li>Thursday</li>
  <li>Friday</li>
  <li>Saturday</li>
  <li>Sunday</li>
</ol>
```

---

### style

The `style` method adds styles for list title elements.

```js
ltfill.style(
  document.head, // where <style> will be appended
  'x-lt', // tag name of list titles
  'font-style:italic' // optional styles (otherwise display:block;font-weight:bold)
);
```

Example:

```html
<style id="ltfill-style">x-lt{display:block;font-weight:bold}</style>
```

[npm-url]: https://www.npmjs.com/package/ltfill
[npm-img]: https://img.shields.io/npm/v/ltfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/ltfill
[cli-img]: https://img.shields.io/travis/jonathantneal/ltfill.svg
[soc-url]: https://twitter.com/intent/tweet?text=A%20speculative%20polyfill%20to%20use%20the%20lt%20element%20in%20HTML%20https%3A%2F%2Fgithub.com%2Fjonathantneal%2Fltfill
[soc-img]: https://img.shields.io/twitter/url/http/shields.io.svg?style=social

[ltfill]: https://github.com/jonathantneal/ltfill
[the speculative `lt` element]: https://stevefaulkner.github.io/lt-element/
[Try it right now using CodePen]: https://jonathantneal.github.io/ltfill/
[speculative polyfill]: https://w3ctag.github.io/polyfills/#nomenclature-what-is-a-polyfill-
