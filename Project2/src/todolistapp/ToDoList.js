import { Component } from 'react';

class ToDoList extends Component {
	render() {
		return (
			<ol>
				{this.props.items.map((item) => (
					<li>{item}</li>
				))}
			</ol>
		);
	}
}

export default ToDoList;
