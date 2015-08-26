var React = require('react')
var ReactPropTypes = React.PropTypes;
var TodoTextInput = require('./TodoTextInput');
var TodoActions = require('../../actions/TodoActions');

var TodoItem = React.createClass({

	propTypes: {
		todo: ReactPropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			isEditing: false
		};
	},

	_onDoubleClick: function() {
		this.setState({isEditing:true});
	},

	_onToggleComplete:function() {
		TodoActions.toggleComplete(this.props.todo)
	},

	_onSave: function(text) {
		TodoActions.updateText(this.props.todo.id, text);
		this.setState({isEditing: false})
	},

	_onDestroyClick: function() {
		TodoActions.destroy(this.props.todo.id);
	},


	/*
	do i need classname require
	what is {todo.text} doing
	 */

	render: function() {
		var todo = this.props.todo;

		var input;
		if (this.state.isEditing) {
			input = 
				<TodoTextInput
					className="edit"
					onSave={this._onSave}
					value={todo.text}
				/>;
		}

		return (
			<li key={todo.id} >
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.complete}
						onChange={this._onToggleComplete}
					/>
					<label onDoubleClick={this._onDoubleClick}>
						{todo.text}
					</label>
					<button className="destroy" onClick={this._onDestroyClick} />
				</div>
				{input}
			</li>
		);
	},
});

module.exports = TodoItem;