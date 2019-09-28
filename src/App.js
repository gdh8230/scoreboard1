import React from 'react';
import logo from './logo.svg';
import './App.css';


const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">ScoreBoard</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

class Counter extends React.Component{
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

const Player = (props) => (
  <div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={ () => {props.removePlayer(props.id)}}> X </button>
      {props.name}
		</span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component{
  state = {
    players : [
      {name: 'ldk', score: 30,id:1},
      {name: 'hong', score: 40,id:2},
      {name: 'kim', score: 50,id:3},
      {name: 'park', score: 60,id:4}
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={11}/>
        {
          this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id} removePlayer={this.handleRemovePlayer}/>
            )
          })
        }
      </div>
    )
  }
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer', id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }
}

export default App;
