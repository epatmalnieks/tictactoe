import React from 'react';
 
export default class Tile extends React.Component {

	render() {
		return (
				<div className="tile" onClick={()=>{this.tileClicked('a1')}}>
					<span className="innerTile">
						 blah
					</span>
				</div>
			);
	}
}