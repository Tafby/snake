import React, { Component } from 'react';

class Snake extends Component {
	move = () => {
		this.setState({
			row: this.state.row + this.state.moveRow,
			column: this.state.column + this.state.moveColumn
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
