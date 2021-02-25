import { Component } from 'react';
import ToDoList from './ToDoList';

class ToDo extends Component {
	state = {
		task: '',
		items: [],
	};

	handleIOnChange = (event) => {
		this.setState({
			task: event.target.value,
		});
	};

	handleNewItemSubmit = (event) => {
		event.preventDefault();
		if (this.state.task.length === 0) return;
		this.setState({ items: this.state.items.concat(this.state.task) });
		this.setState({ task: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleNewItemSubmit}>
					<label>Next Task</label>
					<br />
					<input
						type='text'
						value={this.state.task}
						onChange={this.handleIOnChange}
					/>
					<br />
					<button>Add Task #{this.state.items.length + 1}</button>
				</form>
				<h3>List of Tasks</h3>
				<ToDoList items={this.state.items} />
			</div>
		);
	}
}

export default ToDo;
