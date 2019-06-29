import React, { Component } from 'react';
import Snake from './Snake';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: 1,
			column: 1,
			moveRow: 0,
			moveColumn: 0
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyListener);
		this.intervalID = window.setInterval(this.gameLoop, 400);
	};

	gameLoop = () => {
		this.move();
	};

	move = () => {
		this.setState({
			row: this.state.row + this.state.moveRow,
			column: this.state.column + this.state.moveColumn
		});
	};

	keyListener = (event) => {
		switch (event.key) {
			case 'ArrowLeft':
				this.setState({ moveColumn: -1, moveRow: 0 });
				break;
			case 'ArrowRight':
				this.setState({ moveColumn: 1, moveRow: 0 });
				break;
			case 'ArrowDown':
				this.setState({ moveColumn: 0, moveRow: 1 });
				break;
			case 'ArrowUp':
				this.setState({ moveColumn: 0, moveRow: -1 });
				break;
		}
	};

	render() {
		return (
			<div className="grid">
				<Snake row={this.state.row} column={this.state.column} />
			</div>
		);
	}
}

export default Grid;
