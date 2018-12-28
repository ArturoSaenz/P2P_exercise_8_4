import React, { Component } from 'react';
import logo from '../assets/styles/logo.svg';
import '../assets/styles/App.css';
import Header from './Header.jsx';
import Board from './Board.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      turn : PLAYERX,
      values : [
        [" - ", " - " ," - "],
        [" - ", " - " ," - "],
        [" - ", " - " ," - "]
      ],
      counter : 0,
      iswinner : false,
      iswinnerO : false
    }
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  appClick(rowIndex, columnIndex){
    let newValues = JSON.parse(JSON.stringify(this.state.values));
    newValues[rowIndex][columnIndex] = this.state.turn === PLAYERX ? "x" : "0";
    this.setState({
      turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
      values: newValues,
      counter: this.state.counter +1
    })
  }

  resetClick(){
    this.setState({
      turn : PLAYERX,
      values : [
        [" - ", " - " ," - "],
        [" - ", " - " ," - "],
        [" - ", " - " ," - "]
      ],
      counter : 0
    })
  }

  checkwinner(row,col){
    if (this.state.values[row][col] !== '-'){
      console.log("Estado del tablero",this.state.values);
    }
    if ((this.state.values[row][col] === 'X' && 
        this.state.values[row][0] === 'X' &&
        this.state.values[row][1] === 'X' &&
        this.state.values[row][2] === 'X')
        ||
        (this.state.values[row][col] === 'X' && 
        this.state.values[0][col] === 'X' &&
        this.state.values[1][col] === 'X' &&
        this.state.values[2][col] === 'X')
        ||
        (this.state.values[row][col] === 'X' && 
        this.state.values[0][0] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][2] === 'X')
        ||
        (this.state.values[row][col] === 'X' && 
        this.state.values[0][2] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][0] === 'X')
      )
        {
          console.log("Estado del tablero",this.state.values);
          console.log("Player X won");
          let newTurn = this.state.turn === 'PLAYER X' ? 'PLAYER X WON' : 'PLAYER O WON';
          this.state.winner = 'There is a winner, Player 1 - Xs';
          console.log(this.state.winner);
          this.state.turn = '';
          this.state.iswinner = true;
          console.log("iswinner",this.state.iswinner);
        }

        if ((this.state.values[row][col] === '0' && 
          this.state.values[row][0] === '0' &&
          this.state.values[row][1] === '0' &&
          this.state.values[row][2] === '0')
          ||
          (this.state.values[row][col] === '0' && 
          this.state.values[0][col] === '0' &&
          this.state.values[1][col] === '0' &&
          this.state.values[2][col] === '0')
          ||
          (this.state.values[row][col] === '0' && 
          this.state.values[0][0] === '0' &&
          this.state.values[1][1] === '0' &&
          this.state.values[2][2] === '0')
          ||
          (this.state.values[row][col] === '0' && 
          this.state.values[0][2] === '0' &&
          this.state.values[1][1] === '0' &&
          this.state.values[2][0] === '0')
        )
          {
            console.log("Estado del tablero",this.state.values);
            console.log("Player O won");
            let newTurn = this.state.turn === 'PLAYER O' ? 'PLAYER O WON' : 'PLAYER X WON';
            this.state.winner = 'There is a winner, Player 2 - Os';
            console.log(this.state.winner);
            this.state.turn = '';
            this.state.iswinnerO = true;
            console.log("iswinnerO",this.state.iswinnerO);
          }
  }

  render() {
    let text = "Turn of " + this.state.turn;
    if (this.state.iswinner){
      text = "The winner is X "
    }
    if (this.state.iswinnerO){
      text = "The winner is X "
    }    

    return (
      <div>
        <Header text={text}/>
        <Board appClick={this.appClick} values={this.state.values}/>
        <h4>Number of movements: {this.state.counter}</h4>
        <button onClick={this.resetClick}>Reset Game</button>
      </div>
    );
  }
}

export default App;
