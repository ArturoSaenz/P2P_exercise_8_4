import React, { Component } from 'react';

const squareStyle = {
    height : "100px",
    width: "100px"
}

export default class Square extends Component {
  constructor(props){
    super(props);
    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(rowIndex, columnIndex){
    this.props.boardClick(rowIndex, columnIndex);
  }

  render() {
    return (<button
              onClick={ () => this.squareClick(this.props.rowIndex, this.props.columnIndex)} 
              style={squareStyle}>
        {this.props.value}
      </button>);
  }
}