import React, { Component } from 'react';

class Snake extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: 1,
			column: 1
		};
	}

	move = () => {
		this.setState({
			row: this.state.row + this.props.moveRow,
			column: this.state.column + this.props.moveColumn
		});
	};
	render() {
		return (
			<span
				className="snake"
				style={{
					gridArea: `${this.props.row} / ${this.props.column} / span 1 / span 1`
				}}
				// possibly add the added coord to an array, map through and print out
			/>
		);
	}
}

export default Snake;
