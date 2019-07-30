import React, { Component } from 'react';

class ScoreBoard extends Component {
	render() {
		return (
			<div className="scoreboard">
				<h1>Score:</h1>
				<h1>{this.props.score}</h1>
			</div>
		);
	}
}

export default ScoreBoard;
