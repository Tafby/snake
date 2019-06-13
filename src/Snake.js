import React, { Component } from 'react';

class Snake extends Component {
	render() {
		return (
			<span
				className="snake"
				style={{ gridArea: `${this.props.row} / ${this.props.column} / span 1 / span 1` }}
			/>
		);
	}
}

export default Snake;
