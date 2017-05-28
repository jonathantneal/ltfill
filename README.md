# ltfill [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][ltfill]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Tweet About This][soc-img]][soc-url]

[ltfill] lets you use [the speculative `lt` element] in HTML.

The `lt` element would allow web authors to provide titles or captions to lists.

---

**[ltfill] is a [speculative polyfill] which emulates a proposed feature of the
web platform. Therefore, it should not be used in real production situations,
as it would otherwise risk creating problems for the development of the Web if
it became widely used prior to standardization and implementation.**

---

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

Use the `observe` method to watch for list titles and assign them their parent
list the appropriate aria label.

```js
ltfill.observe(
  document.documentElement // where list titles will be observed
);
```

The default behavior is to assign an `id` attribute to the list title if it
does not already have one, and then to assign an `aria-labelledby` attribute 
to the list title’s parent linking to that list title if they do not already
have one.

Example:

```html
<ol aria-labelledby="__ltfill0">
  <lt id="__ltfill0">Days of the week</lt>
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

Use the `style` method to include styles for list titles.

```js
ltfill.style(
  document.head, // where the list title <style> will be appended
  'font-style:italic' // optional list title styles (otherwise display:block;font-weight:bold)
);
```

Example:

```html
<style id="ltfill-style">lt{display:block;font-weight:bold}</style>
```

[npm-url]: https://www.npmjs.com/package/ltfill
[npm-img]: https://img.shields.io/npm/v/ltfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/ltfill
[cli-img]: https://img.shields.io/travis/jonathantneal/ltfill.svg
[soc-url]: https://twitter.com/intent/tweet?text=A%20speculative%20polyfill%20to%20use%20the%20lt%20element%20in%20HTML%20https%3A%2F%2Fjonathantneal.github.io%2Fltfill%2F
[soc-img]: https://img.shields.io/twitter/url/http/shields.io.svg?style=social

[ltfill]: https://github.com/jonathantneal/ltfill
[the speculative `lt` element]: https://stevefaulkner.github.io/lt-element/
[Try it right now using CodePen]: https://jonathantneal.github.io/ltfill/
[speculative polyfill]: https://w3ctag.github.io/polyfills/#nomenclature-what-is-a-polyfill-
