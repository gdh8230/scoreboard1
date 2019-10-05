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

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(form.checkValidity());
		console.log(player.validity.valid);

		this.props.addPlayer(this.state.value);
		this.setState({value:''})
	}

	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate >
				<input id="player" className="input" type="text" placeholder="enter a player's name"
						value={this.state.value}
						onChange={this.handleValueCahnge}
				required ></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}