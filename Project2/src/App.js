import { Component } from 'react';
import Table from './Table';
import AddEmpForm from './AddEmpForm';
import Timer2 from './timerapp/Timer';
import ToDo from './todolistapp/ToDo';

class App extends Component {
	tableData = [
		{ name: 'Justin', profession: 'Awesome1' },
		{ name: 'Helen', profession: 'Awesome2' },
		{ name: 'Sandra', profession: 'Awesome3' },
		{ name: 'Tina', profession: 'Awesome4' },
	];

	state = {
		tableData: this.tableData,
	};

	handleDelOnClick = (i) => {
		this.setState({
			tableData: this.state.tableData.filter((emp, i2) => i2 !== i),
		});
	};

	handleFormOnSubmit = (emp) => {
		this.setState({
			tableData: [...this.state.tableData, emp],
		});
	};

	render() {
		return (
			<div>
				Hello World 2
				<Table
					td={this.state.tableData}
					handleDelOnClick={this.handleDelOnClick}
				/>
				<AddEmpForm handleFormOnSubmit={this.handleFormOnSubmit} />
				<br />
				<h1>Timer</h1>
				<Timer2 />
				<br />
				<h1>To Do List</h1>
				<ToDo />
			</div>
		);
	}
}

export default App;
