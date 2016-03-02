# hyperscript-string-async

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> An async/promisified version of hyperscript-string

## Installation

Install `hyperscript-string-async` using [npm](https://www.npmjs.com/):

```bash
npm install --save hyperscript-string-async
```

## Usage

### Module usage

```javascript
const h = require('hyperscript-string-async');

h('ul.list', [
	h('li.item', 'Lorem ipsum'),
	h('li.item', {title: 'Second item'}, 'Dolor sit'),
	h('li.item', 'Amet')
])
.then(html => {
	/*
	<ul class="list">
		<li class="item">Lorem ipsum</li>
		<li title="Second item" class="item">Dolor sit</li>
		<li class="item">Amet</li>
	</ul>
	*/
});
```

## Related packages

* [`hyperscript-string`](https://www.npmjs.com/package/hyperscript-string) - Create HTML strings with JavaScript
* [`hyperscript-normalize-args`](https://www.npmjs.com/package/hyperscript-normalize-args) - A hyperscript helper to normalize component arguments, for easier creation of reusable components
* [`hyperscript-helpers`](https://www.npmjs.com/package/hyperscript-helpers) - Terse syntax for hyperscript
* [`hyperscript`](https://www.npmjs.com/package/hyperscript) - Create HyperText with JavaScript, on client or server.

## API

### `ha(selector[, attrs, children])`

| Name | Type | Description |
|------|------|-------------|
| selector | `String` or `Promise<String>` | Contains at least the HTML tag name |
| attrs | `Object` or `Promise<Object>` or `Object<Promise>` | Attributes for the HTML tag |
| children | `String` or `Array` or `Promise<String>` or `Promise<Array>` or `Array<Promise>` | The children for the HTML tag |

Returns: `Promise<String>`, the generated HTML.

## License

MIT © [Joakim Carlstein](http://joakim.beng.se)

[npm-url]: https://npmjs.org/package/hyperscript-string-async
[npm-image]: https://badge.fury.io/js/hyperscript-string-async.svg
[travis-url]: https://travis-ci.org/joakimbeng/hyperscript-string-async
[travis-image]: https://travis-ci.org/joakimbeng/hyperscript-string-async.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-XO-5ed9c7.svg?style=flat
