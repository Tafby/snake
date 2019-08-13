import React, { Component } from 'react';

export default class EndGameBox extends Component {
	handleClick = () => {
		this.props.replay();
	};
	render() {
		return (
			<div className="end-game">
				<h2 className="game-over-text">
					Game Over! <br />
					Your score is: {this.props.score} <br />
					<button onClick={this.handleClick}>Replay</button>
				</h2>
			</div>
		);
	}
}
