import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile.jsx';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.newGame = this.newGame.bind(this);
		this.decideWinner = this.decideWinner.bind(this);
		this.state = {
			a1: '',
			a2: '',
			a3: '',
			b1: '',
			b2: '',
			b3: '',
			c1: '',
			c2: '',
			c3: '',
			player: 1,
			winner: ''
		};
	}

	decideWinner(tileValue){
		if(tileValue === "X")
		{
			this.setState({
				winner: 'Player 1 wins!'
			});
		}
		else if (tileValue === "O")
		{
			this.setState({
				winner: 'Player 2 wins!'
			});
		}
		else
		{
			this.setState({
				winner: `It's a tie!`
			});
		}
	}

	componentDidUpdate(prevProps, prevState){

		if((this.state.a1 == "X" || this.state.a1 == "O") && this.state.a1 == this.state.a2 && this.state.a1 == this.state.a3 && this.state.winner == '')
		{
			this.decideWinner(this.state.a1);
		}
		else if((this.state.b1 == "X" || this.state.b1 == "O") && this.state.b1 == this.state.b2 && this.state.b1 == this.state.b3 && this.state.winner == '')
		{
			this.decideWinner(this.state.b1);
		}
		else if((this.state.c1 == "X" || this.state.c1 == "O") && this.state.c1 == this.state.c2 && this.state.c1 == this.state.c3 && this.state.winner == '')
		{
			this.decideWinner(this.state.c1);
		}
		else if((this.state.a1 == "X" || this.state.a1 == "O") && this.state.a1 == this.state.b1 && this.state.a1 == this.state.c1 && this.state.winner == '')
		{
			this.decideWinner(this.state.a1);
		}
		else if((this.state.a2 == "X" || this.state.a2 == "O") && this.state.a2 == this.state.b2 && this.state.a2 == this.state.c2 && this.state.winner == '')
		{
			this.decideWinner(this.state.a2);
		}
		else if((this.state.a3 == "X" || this.state.a3 == "O") && this.state.a3 == this.state.b3 && this.state.a3 == this.state.c3 && this.state.winner == '')
		{
			this.decideWinner(this.state.a3);
		}
		else if((this.state.a1 == "X" || this.state.a1 == "O") && this.state.a1 == this.state.b2 && this.state.a1 == this.state.c3 && this.state.winner == '')
		{
			this.decideWinner(this.state.a1);
		}
		else if((this.state.c1 == "X" || this.state.c1 == "O") && this.state.c1 == this.state.b2 && this.state.c1 == this.state.a3 && this.state.winner == '')
		{
			this.decideWinner(this.state.c1);
		}
		else if(this.state.a1 && this.state.a2 && this.state.a3 && this.state.b1 && this.state.b2 && this.state.b3 && this.state.c1 && this.state.c2 && this.state.c3 && this.state.winner == '')
		{
			this.decideWinner("tie");
		}
	}

	tileClicked(tile) {

		if(!this.state[tile])
		{
			if(this.state.player == 1)
			{
				this.setState({
					[tile]: "X",
					player: 2
				});

			}
			else if (this.state.player == 2)
			{
				this.setState({
					[tile]: "O",
					player: 1
				});
			}
		}
	}

	newGame() {
		this.setState({
			a1: '',
			a2: '',
			a3: '',
			b1: '',
			b2: '',
			b3: '',
			c1: '',
			c2: '',
			c3: '',
			player: 1,
			winner: ''
		});
	}

	render() {
		return (
			<div>
			<h1>Tic-Tac-Toe</h1>
			<h2>Player {this.state.player}'s turn</h2>
			<h2>{this.state.winner}</h2>
			{	this.state.winner &&
				<button onClick={this.newGame}>New Game</button>
			}
				<div className="tile" onClick={()=>{this.tileClicked('a1')}}>
					<span className="innerTile">
						{this.state.a1}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('a2')}}>
					<span className="innerTile">
							{this.state.a2}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('a3')}}>
					<span className="innerTile">
							{this.state.a3}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('b1')}}>
					<span className="innerTile">
						{this.state.b1}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('b2')}}>
					<span className="innerTile">
						{this.state.b2}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('b3')}}>
					<span className="innerTile">
						{this.state.b3}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('c1')}}>
					<span className="innerTile">
						{this.state.c1}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('c2')}}>
					<span className="innerTile">
						{this.state.c2}
					</span>
				</div>
				<div className="tile" onClick={()=>{this.tileClicked('c3')}}>
					<span className="innerTile">
						{this.state.c3}
					</span>
				</div>
				<Tile />
			</div>
			);
	}
}
 
ReactDOM.render(<Board />, document.getElementById('board'));