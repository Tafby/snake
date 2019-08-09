import React, { Component } from 'react';

export default class SnakeSegment extends Component {
	render() {
		let segmentTypeClassName = this.props.head ? 'snake-head' : 'snake-body';
		let orientationClassName = `orientation-${this.props.orientation}`;

		return (
			<span
				className={`${segmentTypeClassName} ${orientationClassName}`}
				style={{
					gridArea: `${this.props.row} / ${this.props.column} / span 1 / span 1`
				}}
			/>
		);
	}
}
