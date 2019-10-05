import React from 'react';

export class AddPlayerForm extends React.Component {

	state = {
		value: ''
	}

	handleValueCahnge = (e) => {
		console.log(e);
		this.setState({value: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault() // e.stopPropagation()
		this.props.addPlayer(this.state.value);
		this.setState({value:''})
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<input className="input" type="text" placeholder="enter a player's name"
						value={this.state.value}
						onChange={this.handleValueCahnge}
				></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}