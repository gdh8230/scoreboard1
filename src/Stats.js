import React from 'react';

export const Stats = (props) => {
	let totalPlayers = props.players.length;
	let totalScores = 0;
	props.players.forEach(player => totalScores += player.score)

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalScores}</td>
			</tr>
			</tbody>
		</table>
	)
}