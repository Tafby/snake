import React, { Component } from 'react';

class Snake extends Component {
	render() {
		return (
			<span
				className="snake"
				style={{
					gridArea: `${this.props.row} / ${this.props.column} / span 1 / span ${this.props.spanTwo}`
				}}
				// possibly add the added coord to an array, map through and print out
			/>
		);
	}
}

export default Snake;
