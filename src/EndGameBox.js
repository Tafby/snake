import React, { Component } from 'react';

export default class EndGameBox extends Component {
	render() {
		return (
			<div className="end-game">
				<h2 className="game-over-text">
					Game Over! <br />
					Your score is: {this.props.score}
				</h2>
			</div>
		);
	}
}
