class DecisionMaker extends React.Component {
	render() {
		const title = 'Decision Maker App';
		const subTitle = 'Let the Computer take Your Decision';
		let options = [1, 2];
		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subTitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	onMakeDecision() {
		alert('Picked!');
	}
	render() {
		return (
			<div>
				<button onClick={this.onMakeDecision}>What Should I Do ?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.onRemoveAll = this.onRemoveAll.bind(this);
	}

	onRemoveAll() {
		console.log(this.props.options);
		this.props.options = [];
		// console.log(this.props.options);
		// alert('Removed All!')
	}
	render() {
		return (
			<div>
				<button onClick={this.onRemoveAll}>Remove All</button>
				<p>{`There are ${this.props.options.length} options.`}</p>

				{this.props.options.map(option => (
					<Option key={option} optionText={option} />
				))}

				<button>Remove Last</button>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<ol>
					<p>{this.props.optionText}</p>
				</ol>
			</div>
		);
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();

		if (option) {
			console.log(option);
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<DecisionMaker />, document.getElementById('app'));
