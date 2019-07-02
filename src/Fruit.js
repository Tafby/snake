import React, { Component } from 'react';

export default class Fruit extends Component {
	render() {
		return (
			<span
				className="fruit"
				style={{ gridArea: `${this.props.randomRow} / ${this.props.randomCol} / span 1 / span 1` }}
			/>
		);
	}
}
