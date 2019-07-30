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
		this.intervalID = window.setInterval(this.gameLoop, 100);
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
		console.log('GAME OVER');
	};

	collisionCheck = () => {
		let currentSnakeHead = this.state.segmentArray[0];
		console.log('Current Snake Head', currentSnakeHead);
		let newSnakeHead = [ currentSnakeHead[0] + this.state.moveRow, currentSnakeHead[1] + this.state.moveColumn ];
		console.log('NewSnakeHead', newSnakeHead);
		this.state.segmentArray.forEach((currentItem) => {
			console.log('CurrentItem', currentItem);
			if (this.state.randomRow === currentItem[0] && this.state.randomCol === currentItem[1]) {
				this.setState({
					segmentArray: [ newSnakeHead ].concat(this.state.segmentArray)
				});
				this.randomFruits();
			} else if (
				currentItem[0] === -1 ||
				currentItem[0] === 30 ||
				currentItem[1] === 31 ||
				currentItem[1] === -1 ||
				(currentItem[0] === currentSnakeHead[0] && currentItem[1] === currentSnakeHead[1])
			) {
				this.gameOver();
			}
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
