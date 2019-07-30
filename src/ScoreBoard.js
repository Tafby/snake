import React, { Component } from 'react';

class ScoreBoard extends Component {
	render() {
		return (
			<div className="scoreboard">
				<h2>Score: {this.props.score}</h2>
			</div>
		);
	}
}

export default ScoreBoard;
