import React, { Component, Fragment } from 'react';
import Snake from './Snake';
import Fruit from './Fruit';
import SnakeSegment from './SnakeSegment';

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
			segmentArray: [ [ 1, 1 ] ]
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyListener);
		this.intervalID = window.setInterval(this.gameLoop, 200);
		this.randomFruits();
	};

	gameLoop = () => {
		this.collisionCheck();
		this.move();
	};

	move = () => {
		let currentSnakeHead = this.state.segmentArray[0];
		let newSnakeHead = [ currentSnakeHead[0] + this.state.moveRow, currentSnakeHead[1] + this.state.moveColumn ];
		this.setState({
			segmentArray: [ newSnakeHead ].concat(this.state.segmentArray.slice(0, -1))
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
				<Fragment>
					{this.state.segmentArray.map((coord, index) => {
						return <SnakeSegment row={coord[0]} column={coord[1]} key={index} />;
					})}
				</Fragment>
				<Fruit randomRow={this.state.randomRow} randomCol={this.state.randomCol} />
			</div>
		);
	}
}

export default Grid;
