import React, { Component } from 'react';

export default class EndGameBox extends Component {
	render() {
		return (
			<div className="end-game">
				<h1>You lose! Your score is: {this.props.score}</h1>
			</div>
		);
	}
}
