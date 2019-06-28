import React, { Component } from 'react';
import Snake from './Snake';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: 1,
			column: 1,
			setKey: 'ArrowRight'
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyListener);
		this.intervalID = setInterval(this.keyListener(), 500);
	};

	gameLoop = () => {};

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
		console.log(this.state.setKey);
	};
	moveLeft = () => {
		this.setState({ setKey: 'ArrowLeft' });
		this.setState({ column: this.state.column - 1 });
		console.log(this.state.setKey);
	};

	moveDown = () => {
		this.setState({ setKey: 'ArrowDown' });
		this.setState({ row: this.state.row + 1 });
	};
	moveUp = () => {
		this.setState({ setKey: 'ArrowUp' });
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
