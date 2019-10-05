import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {Header} from "./Header";
import {Player} from "./Player";
import {AddPlayerForm} from "./AddPlayerForm";



class App extends React.Component{
	maxId = 4;
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
        <Header title="My scoreboard" totalPlayers={11} players={this.state.players}/>

        {
          this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id}
                      removePlayer={this.handleRemovePlayer}
                      changeScore={this.handleChangeScore} />
            )
          })
        }

        <AddPlayerForm addPlayer={this.handlePlayer}/>
      </div>
    )
  }
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer', id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState( prevState => {
    	// const player = prevState.players.find(player => player.id === id);
    	// player.score += delta;
    	return {
    		player: prevState.players.map(player => {
    			if ( player.id === id ) {
    				player.score += delta;
					}
    			return player;
				})
			}
		})
  }

	handlePlayer = (name) => {
  	console.log('handlePlayer:', name);
  	this.setState(prevState => {
  		// 방식1
  		// prevState.players.push({name: name, score:0, id: ++this.maxId}); // push는 기존 배열을 오염시킴
  		// return {
  		// 	players:[ ...prevState.players ] // 새 배열에 펼치는 코드
			// }

			// 방식2
			// const players = [ ...prevState.players ];
			// players.push({name: name, score:0, id: ++this.maxId});
			// return {
			// 	players: players
			// }
			const players = [ ...prevState.players ];
			players.push({name, score:0, id: ++this.maxId});
			return {
				players
			}
		})
	}

}

export default App;
