import React, { Component } from 'react';
import Snake from './Snake';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: 1,
			column: 1,
			setKey: null
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyListener);

		// this.intervalID = window.setInterval(this.moveRight, 500);
	};
	keySet = () => {
		if (this.moveRight) {
			// this.intervalID = window.setInterval(this.moveRight, 500);
			this.setState({ setKey: 'ArrowRight' });
		} else if (this.moveLeft) {
			this.intervalID = window.setInterval(this.moveLeft, 500);
		} else if (this.moveDown) {
			this.intervalID = window.setInterval(this.moveDown, 500);
		} else if (this.moveUp) {
			this.intervalID = window.setInterval(this.moveUp, 500);
		}
	};
	keyListener = (event) => {
		switch (event.key) {
			case 'ArrowLeft':
				this.moveLeft();
				break;
			case 'ArrowRight':
				this.moveRight();
				break;
			case 'ArrowDown':
				this.moveDown();
				break;
			case 'ArrowUp':
				this.moveUp();
				break;
			case 'p':
				this.pause();
				break;
		}
	};
	moveRight = () => {
		this.setState({ column: this.state.column + 1 });
	};
	moveLeft = () => {
		this.setState({ column: this.state.column - 1 });
	};

	moveDown = () => {
		this.setState({ row: this.state.row + 1 });
	};
	moveUp = () => {
		this.setState({ row: this.state.row - 1 });
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
