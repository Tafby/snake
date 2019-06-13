import React, { Component } from 'react';

class Tile extends Component {
	render() {
		return (
			<span className="tile" style={{ gridArea: `${this.props.row} / ${this.props.column} / span 1 / span 1` }} />
		);
	}
}

export default Tile;
