import test from 'ava';
import h from '../src';

test('selector as String', async t => {
	const item = sel => h(sel);
	const html = await item('span');
	t.is(html, '<span></span>');
});

test('selector as Promise<String>', async t => {
	const item = sel => h(sel);
	const html = await item(Promise.resolve('span'));
	t.is(html, '<span></span>');
});

test('attributes as Object', async t => {
	const item = attrs => h('span.item', attrs);
	const html = await item({title: 'Hello world'});
	t.is(html, '<span title="Hello world" class="item"></span>');
});

test('attributes as Promise<Object>', async t => {
	const item = attrs => h('span.item', attrs);
	const html = await item(Promise.resolve({title: 'Hello world'}));
	t.is(html, '<span title="Hello world" class="item"></span>');
});

test('attributes as Object<Promise>', async t => {
	const item = attrs => h('span.item', attrs);
	const html = await item({title: Promise.resolve('Hello world')});
	t.is(html, '<span title="Hello world" class="item"></span>');
});

test('children as String', async t => {
	const item = children => h('div.item', children);
	const html = await item('Hello world!');
	t.is(html, '<div class="item">Hello world!</div>');
});

test('children as Array', async t => {
	const item = children => h('div.item', children);
	const html = await item(['Hello', 'world!']);
	t.is(html, `
<div class="item">
	Hello
	world!
</div>
`.trim());
});

test('children as Promise<String>', async t => {
	const item = children => h('div.item', children);
	const html = await item(Promise.resolve('Hello world!'));
	t.is(html, '<div class="item">Hello world!</div>');
});

test('children as Promise<Array>', async t => {
	const item = children => h('li.item', children);
	const list = (classId, attrs) => {
		const {
			limit,
			...props
		} = attrs;
		const rows = getRows(limit);
		return h(`ul${classId || ''}`, props, map(rows, row => item([row])));
	};
	const html = await list('.list', {limit: 3});
	t.is(html, `
<ul class="list">
	<li class="item">Lorem ipsum 0</li>
	<li class="item">Lorem ipsum 1</li>
	<li class="item">Lorem ipsum 2</li>
</ul>
`.trim());
});

test('children as Array<Promise>', async t => {
	const item = children => h('li.item', children);
	const list = classId => {
		const rows = [
			'Lorem ipsum 0',
			'Lorem ipsum 1',
			'Lorem ipsum 2'
		];
		return h(`ul${classId || ''}`, rows.map(item));
	};
	const html = await list('.list');
	t.is(html, `
<ul class="list">
	<li class="item">Lorem ipsum 0</li>
	<li class="item">Lorem ipsum 1</li>
	<li class="item">Lorem ipsum 2</li>
</ul>
`.trim());
});

function getRows(length) {
	return Promise.resolve(
		Array.from({length})
			.map((_, i) => `Lorem ipsum ${i}`)
	);
}

function map(promise, fn) {
	return promise.then(arr => Promise.all(arr.map(fn)));
}
