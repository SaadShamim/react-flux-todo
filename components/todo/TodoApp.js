var React = require('react');
var Header = require('./Header');
var MainSection = require('./MainSection');
var TodoStore = require('../../stores/TodoStore');

function getTodoState() {
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete(),
	};
}

var TodoApp = React.createClass({

	getInitialState: function() {
		return getTodoState()
	},

	_onChange: function() {
		this.setState(getTodoState());
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		TodoStore.removeChangeListener(this._onChange);
	}, 

	render: function() {
		return (
			<div>
				<Header />
				<MainSection 
					allTodos={this.state.allTodos}
					areAllComplete={this.state.allTodos} />
			</div>
		);
	},

})

module.exports = TodoApp;