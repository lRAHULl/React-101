// JSX - javascript xml
console.log('The App is running!');

// if - statements
// ternary operators
// logical and operators

const app = {
	title: 'React 101',
	subTitle: 'Let me take your Decision.',
	options: []
};

const onFormSubmit = e => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		console.log(app.options);
	}
	renderTemplate();
};

const onRemoveAll = () => {
	app.options = [];
	console.log(app.options);
	renderTemplate();
};

const onRemoveLast = () => {
	app.options.pop();
	console.log(app.options);
	renderTemplate();
};

const onMakeDecision = () => {
	const randNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randNum];
	alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
	const template = (
		<div>
			<h1> {app.title} </h1>
			{app.subTitle ? <p> {app.subTitle} </p> : false}
			{app.options.length ? <p>Here are your options</p> : <p>No Options</p>}
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What Should I Do
			</button>
			{app.options.length ? (
				<ol>
					{app.options.map(option => (
						<li key={option}>Option: {option}</li>
					))}
				</ol>
			) : (
				false
			)}
			<button onClick={onRemoveLast}>Remove Last</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderTemplate();
