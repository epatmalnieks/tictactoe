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
		//Check all possible winning scenarios after state updates. Check for tie if all tiles are filled.
		if((this.state.a1 === "X" || this.state.a1 === "O") && this.state.a1 === this.state.a2 && this.state.a1 === this.state.a3 && this.state.winner === '')
		{
			this.decideWinner(this.state.a1);
		}
		else if((this.state.b1 === "X" || this.state.b1 === "O") && this.state.b1 === this.state.b2 && this.state.b1 === this.state.b3 && this.state.winner === '')
		{
			this.decideWinner(this.state.b1);
		}
		else if((this.state.c1 === "X" || this.state.c1 === "O") && this.state.c1 === this.state.c2 && this.state.c1 === this.state.c3 && this.state.winner === '')
		{
			this.decideWinner(this.state.c1);
		}
		else if((this.state.a1 === "X" || this.state.a1 === "O") && this.state.a1 === this.state.b1 && this.state.a1 === this.state.c1 && this.state.winner === '')
		{
			this.decideWinner(this.state.a1);
		}
		else if((this.state.a2 === "X" || this.state.a2 === "O") && this.state.a2 === this.state.b2 && this.state.a2 === this.state.c2 && this.state.winner === '')
		{
			this.decideWinner(this.state.a2);
		}
		else if((this.state.a3 === "X" || this.state.a3 === "O") && this.state.a3 === this.state.b3 && this.state.a3 === this.state.c3 && this.state.winner === '')
		{
			this.decideWinner(this.state.a3);
		}
		else if((this.state.a1 === "X" || this.state.a1 === "O") && this.state.a1 === this.state.b2 && this.state.a1 === this.state.c3 && this.state.winner === '')
		{
			this.decideWinner(this.state.a1);
		}
		else if((this.state.c1 === "X" || this.state.c1 === "O") && this.state.c1 === this.state.b2 && this.state.c1 === this.state.a3 && this.state.winner === '')
		{
			this.decideWinner(this.state.c1);
		}
		else if(this.state.a1 && this.state.a2 && this.state.a3 && this.state.b1 && this.state.b2 && this.state.b3 && this.state.c1 && this.state.c2 && this.state.c3 && this.state.winner === '')
		{
			this.decideWinner("tie");
		}
	}

	tileClicked(tile) {
		//If the tile hasn't been clicked yet and a winner has not been
		//declared, update player and tile accordingly
		if(!this.state[tile] && !this.state.winner)
		{
			if(this.state.player === 1)
			{
				this.setState({
					[tile]: "X",
					player: 2
				});

			}
			else if (this.state.player === 2)
			{
				this.setState({
					[tile]: "O",
					player: 1
				});
			}
		}
	}

	newGame() {
		//Reset everything for new game
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
				{	!this.state.winner &&
					<h2>Player {this.state.player}'s turn</h2>
				}
				<h2 className="left winner">{this.state.winner}</h2>
				<div className="clear">
				{	this.state.winner &&
					<button onClick={this.newGame}>New Game</button>
				}
				</div>
				<Tile onClick={()=>{this.tileClicked('a1')}} text={this.state.a1} />
				<Tile onClick={()=>{this.tileClicked('a2')}} text={this.state.a2} />
				<Tile onClick={()=>{this.tileClicked('a3')}} text={this.state.a3} />
				<Tile onClick={()=>{this.tileClicked('b1')}} text={this.state.b1} />
				<Tile onClick={()=>{this.tileClicked('b2')}} text={this.state.b2} />
				<Tile onClick={()=>{this.tileClicked('b3')}} text={this.state.b3} />
				<Tile onClick={()=>{this.tileClicked('c1')}} text={this.state.c1} />
				<Tile onClick={()=>{this.tileClicked('c2')}} text={this.state.c2} />
				<Tile onClick={()=>{this.tileClicked('c3')}} text={this.state.c3} />
			</div>
			);
	}
}
 
ReactDOM.render(<Board />, document.getElementById('board'));