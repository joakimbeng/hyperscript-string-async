'use strict';
const all = require('promise-all');
const h = require('hyperscript-string');

const ha = (selector, attrs, children) => {
	return all({
		selector: all(selector),
		attrs: all(attrs),
		children: all(children)
	})
	.then(res =>
		h(res.selector, res.attrs, res.children)
	);
};

module.exports = exports = ha;
