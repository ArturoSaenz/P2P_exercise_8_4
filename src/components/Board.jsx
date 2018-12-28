import React, { Component } from 'react';
import Square from './Square.jsx';

export default class Board extends Component {
  constructor(props){
    super(props);
    this.boardClick = this.boardClick.bind(this);
  }

  boardClick(rowIndex, columnIndex){
    this.props.appClick(rowIndex, columnIndex);
  }

  render() {

    let board = this.props.values.map((rowValues, rowIndex)=>{
        let row = rowValues.map((value, columnIndex)=>{
          return (<Square
                    boardClick={this.boardClick} 
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    key={""+rowIndex + columnIndex} value={value} />);
        });
        return (<div key={"row"+rowIndex}>{row}</div>);
      });
      return (<div>{board}</div>);



  }
}