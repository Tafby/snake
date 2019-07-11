import React, { Component } from 'react';
import Snake from './Snake';
import Fruit from './Fruit';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: 1,
			column: 1,
			moveRow: 0,
			moveColumn: 0,
			randomRow: 5,
			randomCol: 7,
			spanTwo: 1
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyListener);
		this.intervalID = window.setInterval(this.gameLoop, 200);
		this.randomFruits();

		console.log(this.state.randomCol);
		console.log(this.state.randomRow);
	};

	gameLoop = () => {
		this.collisionCheck();
		this.move();
	};

	move = () => {
		this.setState({
			row: this.state.row + this.state.moveRow,
			column: this.state.column + this.state.moveColumn
		});
	};

	randomFruits = () => {
		let randomRow = Math.floor(Math.random() * 30) + 1;
		let randomCol = Math.floor(Math.random() * 30) + 1;
		this.setState({ randomRow: randomRow });
		this.setState({ randomCol: randomCol });
	};

	gameOver = () => {
		document.removeEventListener('keydown', this.keyListener);
		clearInterval(this.intervalID);
	};

	collisionCheck = () => {
		if (this.state.randomCol === this.state.column && this.state.randomRow === this.state.row) {
			this.setState({ spanTwo: this.state.spanTwo + 1 });
			this.randomFruits();
		}
		if (this.state.row === -1 || this.state.row === 30 || this.state.column === 31 || this.state.column === -1) {
			this.gameOver();
			console.log('GAME OVER');
		}
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
				<Snake row={this.state.row} column={this.state.column} spanTwo={this.state.spanTwo} />
				<Fruit randomRow={this.state.randomRow} randomCol={this.state.randomCol} />
			</div>
		);
	}
}

export default Grid;
