import React, { Component, Fragment } from 'react';
import Snake from './Snake';
import Fruit from './Fruit';
import SnakeSegment from './SnakeSegment';
import ScoreBoard from './ScoreBoard';
import EndGameBox from './EndGameBox';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moveRow: 0,
			moveColumn: 0,
			fruitCoords: [ 1, 1 ],
			segmentArray: [ [ 15, 15, 'right' ] ],
			nextDirection: null,
			direction: null,
			score: 0,
			isGameOver: false
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyListener);
		this.intervalID = window.setInterval(this.gameLoop, 100);
		this.generateFruit();
	};

	gameLoop = () => {
		this.setState({ direction: this.state.nextDirection }, this.move);
	};

	replay = () => {
		window.location.reload();
	};

	move = () => {
		let currentSnakeHead = this.state.segmentArray[0];

		let newSnakeHead = [
			currentSnakeHead[0] + this.state.moveRow,
			currentSnakeHead[1] + this.state.moveColumn,
			this.state.direction
		];

		// Boundary check
		if (newSnakeHead[0] <= 0 || newSnakeHead[0] >= 31 || newSnakeHead[1] <= 0 || newSnakeHead[1] >= 31) {
			this.gameOver();
			return;
		}

		// Body collision check
		this.state.segmentArray.forEach((currentItem, index) => {
			if (index != 0 && newSnakeHead[0] === currentItem[0] && newSnakeHead[1] === currentItem[1]) {
				this.gameOver();
			}
		});

		// Fruit check
		let ateFruit = false;
		if (this.state.fruitCoords[0] === newSnakeHead[0] && this.state.fruitCoords[1] === newSnakeHead[1]) {
			ateFruit = true;
			this.generateFruit();
			this.scored();
		}

		let tail = ateFruit ? this.state.segmentArray : this.state.segmentArray.slice(0, -1);
		this.setState({
			segmentArray: [ newSnakeHead ].concat(tail)
		});
	};

	generateFruit = () => {
		let newRow = Math.floor(Math.random() * 30) + 1;
		let newCol = Math.floor(Math.random() * 30) + 1;
		this.setState({ fruitCoords: [ newRow, newCol ] });
	};

	gameOver = () => {
		clearInterval(this.intervalID);
		document.removeEventListener('keydown', this.keyListener);
		this.setState({ isGameOver: true });
	};

	scored = () => {
		this.setState({ score: (this.state.score += 1) });
	};

	keyListener = (event) => {
		switch (event.key) {
			case 'ArrowLeft':
				if (this.state.direction === 'right') {
					break;
				}
				this.setState({ moveColumn: -1, moveRow: 0, nextDirection: 'left' });
				break;
			case 'ArrowRight':
				if (this.state.direction === 'left') {
					break;
				}
				this.setState({ moveColumn: 1, moveRow: 0, nextDirection: 'right' });
				break;
			case 'ArrowDown':
				if (this.state.direction === 'up') {
					break;
				}
				this.setState({ moveColumn: 0, moveRow: 1, nextDirection: 'down' });
				break;
			case 'ArrowUp':
				if (this.state.direction === 'down') {
					break;
				}
				this.setState({ moveColumn: 0, moveRow: -1, nextDirection: 'up' });
				break;
		}
		console.log(this.state.direction);
	};

	render() {
		return (
			<div>
				{this.state.isGameOver ? <EndGameBox replay={this.replay} score={this.state.score} /> : null}
				<div className="grid">
					<Fragment>
						{this.state.segmentArray.map((coord, index) => {
							return (
								<SnakeSegment
									row={coord[0]}
									column={coord[1]}
									head={index === 0}
									orientation={coord[2]}
									key={index}
								/>
							);
						})}
					</Fragment>
					<Fruit row={this.state.fruitCoords[0]} col={this.state.fruitCoords[1]} />

					<ScoreBoard score={this.state.score} />
				</div>
			</div>
		);
	}
}

export default Grid;
