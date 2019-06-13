import React, { Component } from 'react';
import Snake from './Snake';

class Grid extends Component {
	render() {
		return (
			<div class="grid">
				<Snake row={1} column={1} />
			</div>
		);
	}
}

export default Grid;
