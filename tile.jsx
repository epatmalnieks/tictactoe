import React from 'react';
 
export default class Tile extends React.Component {

	render() {
		return (
				<div className="tile" onClick={this.props.onClick}>
						 {this.props.text}
				</div>
			);
	}
}