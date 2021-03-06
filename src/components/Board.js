import React, { Component } from 'react';

export class Board extends Component {
  renderSquare(i) {
    return (<Square value={this.props.squares[i]}
                    onClick={() => {
                      this.props.onClick(i);
                    }}/>);
  }

  render(){
    const status = 'Next player: X';
    return (
      <div className="app-root">
        <h1>Tic-Tac-Toe</h1>
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
