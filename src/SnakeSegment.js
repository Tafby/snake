import React, { Component } from 'react';

export default class SnakeSegment extends Component {
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
