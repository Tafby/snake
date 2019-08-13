import React, { Component } from 'react';

class ScoreBoard extends Component {
	render() {
		return <div className="scoreboard">Score: {this.props.score}</div>;
	}
}

export default ScoreBoard;
