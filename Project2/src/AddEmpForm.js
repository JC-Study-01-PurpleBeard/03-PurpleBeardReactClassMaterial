import { Component } from 'react';

class AddEmpForm extends Component {
	state = {
		name: '',
		profession: '',
	};

	handleNameForm = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleProfForm = (e) => {
		this.setState({
			profession: e.target.value,
		});
	};

	render() {
		return (
			<>
				<label>Name</label>
				<input
					type='text'
					value={this.state.name}
					onChange={this.handleNameForm}
				/>
				<label>Profession</label>
				<input
					type='text'
					value={this.state.profession}
					onChange={this.handleProfForm}
				/>
				<button
					onClick={(event) => {
						this.props.handleFormOnSubmit(this.state);
					}}
				>
					Submit
				</button>
			</>
		);
	}
}

export default AddEmpForm;
