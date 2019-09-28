import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./Header";
import {Player} from "./Player";


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
