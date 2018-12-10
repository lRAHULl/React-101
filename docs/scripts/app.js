'use strict';

// JSX - javascript xml
console.log('The App is running!');

// if - statements
// ternary operators
// logical and operators

var app = {
	title: 'React 101',
	subTitle: 'Let me take your Decision.',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();
	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		console.log(app.options);
	}
	renderTemplate();
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	console.log(app.options);
	renderTemplate();
};

var onRemoveLast = function onRemoveLast() {
	app.options.pop();
	console.log(app.options);
	renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
	var randNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randNum];
	alert(option);
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			' ',
			app.title,
			' '
		),
		app.subTitle ? React.createElement(
			'p',
			null,
			' ',
			app.subTitle,
			' '
		) : false,
		app.options.length ? React.createElement(
			'p',
			null,
			'Here are your options'
		) : React.createElement(
			'p',
			null,
			'No Options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What Should I Do'
		),
		app.options.length ? React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					'Option: ',
					option
				);
			})
		) : false,
		React.createElement(
			'button',
			{ onClick: onRemoveLast },
			'Remove Last'
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

renderTemplate();
