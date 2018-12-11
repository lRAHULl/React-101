class VisibiltyToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleToggleVisibility() {
		this.setState(prevState => {
			return {
				visibility: !prevState.visibility
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibilty Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.visibility && <p>You Have Done a Fabulous Job.</p>}
			</div>
		);
	}
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'));

// const app = {
//     title: "Visibilty Toggle",
//     subTitle: "You have Done a Fabulous Job."
// }

// let visibility = false;

// const toggleVisibility = () => {
//     console.log('onClick');
//     visibility = !visibility;
//     renderTemplate();
// }

// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
//             {visibility && <p>{app.subTitle}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById("app");
// renderTemplate();
