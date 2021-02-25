import { Component } from 'react';

class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Profession</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{this.props.td.map((emp, i) => {
						return (
							<tr key={i}>
								<td>{emp.name}</td>
								<td>{emp.profession}</td>
								<td>
									<button onClick={() => this.props.handleDelOnClick(i)}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default Table;
