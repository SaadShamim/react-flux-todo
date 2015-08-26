var React = require('react');
var TodoTextInput = require('./TodoTextInput');
var TodoActions = require('../../actions/TodoActions');

var Header = React.createClass({
	
	_onSave: function(text) {
		if(text.trim()) {
			TodoActions.create(text)
		}
	},

	/**
	 * @return { object} [returns the header to TodoApp]
	 */

	render: function() {
		return (
			<header id="header">
				<h1>todos</h1>
				<TodoTextInput 
				id="new-todo"
				placeholder="What needs to be done?"
				onSave={this._onSave} />
			</header>
		);
	},
});

module.exports = Header;