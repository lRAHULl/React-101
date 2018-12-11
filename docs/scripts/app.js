'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibiltyToggle = function (_React$Component) {
	_inherits(VisibiltyToggle, _React$Component);

	function VisibiltyToggle(props) {
		_classCallCheck(this, VisibiltyToggle);

		var _this = _possibleConstructorReturn(this, (VisibiltyToggle.__proto__ || Object.getPrototypeOf(VisibiltyToggle)).call(this, props));

		_this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
		_this.state = {
			visibility: false
		};
		return _this;
	}

	_createClass(VisibiltyToggle, [{
		key: 'handleToggleVisibility',
		value: function handleToggleVisibility() {
			this.setState(function (prevState) {
				return {
					visibility: !prevState.visibility
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Visibilty Toggle'
				),
				React.createElement(
					'button',
					{ onClick: this.handleToggleVisibility },
					this.state.visibility ? 'Hide Details' : 'Show Details'
				),
				this.state.visibility && React.createElement(
					'p',
					null,
					'You Have Done a Fabulous Job.'
				)
			);
		}
	}]);

	return VisibiltyToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibiltyToggle, null), document.getElementById('app'));

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
