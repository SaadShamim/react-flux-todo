var React = require('react');
var ReactPropTypes = React.PropTypes;

var TodoTextInput = React.createClass({

	/**
	 * [propTypes define schema for props]
	 */
	propTypes: {
		className: ReactPropTypes.string,
		id: ReactPropTypes.string,
		placeholder: ReactPropTypes.string,
		value: ReactPropTypes.string,
		onSave: ReactPropTypes.func.isRequired,
	},

	getInitialState: function() {
		return {
			value: this.props.value || ''
		};
	},

	/**
	 * pass up state.value to be saved to Header.js
	 */
	_save: function() {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	},

	/**
	 * update state.value on change
	 */
	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},

	/**
	 * Listen for enter key and call function _save
	 */
	_onKeyDown: function(event) {
		if(event.keyCode === 13) {
			this._save();
		}
	},

	/**
	 * todo: remove class name if not necessary, should id/placeholder be passed down?
	 * @return {object} render input element
	 */
	render: function() {
		return (
			<input 
				className={this.props.className}
				id={this.props.id}
				placeholder={this.props.placeholder}
				onBlur={this._save}
				onChange={this._onChange}
				onKeyDown={this._onKeyDown}
				value={this.state.value}
				autoFocus={true}
			/>
		)
	}
});

module.exports = TodoTextInput;