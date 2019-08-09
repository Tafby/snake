import React, { Component } from 'react';

export default class Fruit extends Component {
	render() {
		return (
			<span className="fruit" style={{ gridArea: `${this.props.row} / ${this.props.col} / span 1 / span 1` }} />
		);
	}
}
