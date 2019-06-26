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
		this.setState({ setKey: 'ArrowRight' });
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
