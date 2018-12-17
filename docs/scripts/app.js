'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionMaker = function (_React$Component) {
	_inherits(DecisionMaker, _React$Component);

	function DecisionMaker(props) {
		_classCallCheck(this, DecisionMaker);

		var _this = _possibleConstructorReturn(this, (DecisionMaker.__proto__ || Object.getPrototypeOf(DecisionMaker)).call(this, props));

		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(DecisionMaker, [{
		key: 'render',
		value: function render() {
			var title = 'Decision Maker App';
			var subTitle = 'Let the Computer take Your Decision';
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subTitle: subTitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
				React.createElement(Options, { options: this.state.options }),
				React.createElement(AddOption, null)
			);
		}
	}]);

	return DecisionMaker;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					this.props.title
				),
				React.createElement(
					'h2',
					null,
					this.props.subTitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: 'onMakeDecision',
		value: function onMakeDecision() {
			alert('Picked!');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.onMakeDecision, disabled: !this.props.hasOptions },
					'What Should I Do ?'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options(props) {
		_classCallCheck(this, Options);

		var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

		_this4.onRemoveAll = _this4.onRemoveAll.bind(_this4);
		return _this4;
	}

	_createClass(Options, [{
		key: 'onRemoveAll',
		value: function onRemoveAll() {
			console.log(this.props.options);
			this.props.options = [];
			// console.log(this.props.options);
			// alert('Removed All!')
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.onRemoveAll },
					'Remove All'
				),
				React.createElement(
					'p',
					null,
					'There are ' + this.props.options.length + ' options.'
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				}),
				React.createElement(
					'button',
					null,
					'Remove Last'
				)
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'ol',
					null,
					React.createElement(
						'p',
						null,
						this.props.optionText
					)
				)
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this6.onFormSubmit = _this6.onFormSubmit.bind(_this6);
		return _this6;
	}

	_createClass(AddOption, [{
		key: 'onFormSubmit',
		value: function onFormSubmit(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();

			if (option) {
				console.log(option);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.onFormSubmit },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(DecisionMaker, null), document.getElementById('app'));
