import React from 'react';

export class Counter extends React.Component{
	state = {
		score: 30,
		num:1
	}

	increment = () => {
		console.log('increment');
		this.setState( (prevState) => ({
			score: prevState.score + 1
		}))
	}

	decrement = () => {
		this.setState( (prevState) => ({
			score: prevState.score - 1
		}))
	}

	render(){
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrement}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> + </button>
			</div>
		)
	}
}
