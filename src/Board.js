import React from 'react';
import Square from "./Square"
import LegendSquare from "./LegendSquare"

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  renderLegendSquare(i) {
    return (
      <LegendSquare
        value={i}
        gameBoard={this.props.gameBoard}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div  className="gameboard">
        <table className="gameboard-table">
          <tbody>
            <tr className="board-row-0">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderLegendSquare(0)}
            </tr>
            <tr className="board-row-1">
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
              {this.renderLegendSquare(1)}
            </tr>
            <tr className="board-row-2">
              {this.renderSquare(10)}
              {this.renderSquare(11)}
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
              {this.renderLegendSquare(2)}
            </tr>
            <tr className="board-row-3">
              {this.renderSquare(15)}
              {this.renderSquare(16)}
              {this.renderSquare(17)}
              {this.renderSquare(18)}
              {this.renderSquare(19)}
              {this.renderLegendSquare(3)}
            </tr>
            <tr className="board-row-4">
              {this.renderSquare(20)}
              {this.renderSquare(21)}
              {this.renderSquare(22)}
              {this.renderSquare(23)}
              {this.renderSquare(24)}
              {this.renderLegendSquare(4)}
            </tr>
            <tr className="board-row-5">
              {this.renderLegendSquare(5)}
              {this.renderLegendSquare(6)}
              {this.renderLegendSquare(7)}
              {this.renderLegendSquare(8)}
              {this.renderLegendSquare(9)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;