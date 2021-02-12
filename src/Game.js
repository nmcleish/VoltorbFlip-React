import Board from "./Board"
import React from 'react';
import calculateBoard from "./Helper"

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      squares: Array(25).fill(null),
      status: "",
      row_voltorbs: Array(5).fill(0),
      col_voltorbs: Array(5).fill(0),
      row_mults: Array(5).fill(0),
      col_mults: Array(5).fill(0),
      level: 1,
      voltorbs: 0,
      multipliers: 0,
      score: 0,
      totalscore: 0,
      selectedmults: 0,
      gameBoard: this.generateBoard(0)
      
    };
    
  }
  

  
  generateBoard(level) {
    let boardDetails = calculateBoard(level);
    const calculatedSpaces = new Map();
        
    var calc_row_voltorbs = Array(5).fill(0);
    var calc_col_voltorbs = Array(5).fill(0);
    var calc_row_mults = Array(5).fill(5);
    var calc_col_mults = Array(5).fill(5);
    
    for (let i = 0; i < boardDetails.length; i++) {
      for (let j = 0; j < boardDetails[i]; j++) {
        var placed = false;
        
        while (!placed) {
          var space = Math.floor(Math.random() * 25)
          if (!calculatedSpaces.has(space)) {
            placed = true;
            
            if (i === 0) {
              calculatedSpaces.set(space, 2);
              calc_row_mults[Math.floor(space/5)] += 1;
              calc_col_mults[space % 5] += 1;
              
            } else if (i === 1) {
              calculatedSpaces.set(space, 3);
              calc_row_mults[Math.floor(space/5)] += 2;
              calc_col_mults[space % 5] += 1;
              
            } else {
              calculatedSpaces.set(space, 0);
              calc_row_voltorbs[Math.floor(space/5)] += 1;
              calc_col_voltorbs[space % 5] += 1;
              calc_row_mults[Math.floor(space/5)] -= 1;
              calc_col_mults[space % 5] -= 1;
            }
          }
          
        }
      }
    }
    
    console.log(calculatedSpaces);
    this.setState({
      multipliers: boardDetails[0] + boardDetails[1],
      voltorbs: boardDetails[2],
      spaces: calculatedSpaces,
      row_mults: calc_row_mults,
      col_mults: calc_col_mults,
      row_voltorbs: calc_row_voltorbs,
      col_voltorbs: calc_col_voltorbs
      
    });
    
    return {spaces: calculatedSpaces, 
      multipliers: boardDetails[0] + boardDetails[1],
      voltorbs: boardDetails[2],
      row_mults: calc_row_mults,
      col_mults: calc_col_mults,
      row_voltorbs: calc_row_voltorbs,
      col_voltorbs: calc_col_voltorbs }
  }
  
  handleClick(i) {
//    const history = this.state.history.slice(0, this.state.stepNumber + 1);
//    const current = history[history.length - 1];
    console.log(this.state.voltorbs);

    const calc_squares = this.state.squares;
//    if (calculateWinner(squares) || squares[i]) {
//      return;
//    }
    var squareValue;
    if (this.state.gameBoard.spaces.has(i)) {
      squareValue = this.state.gameBoard.spaces.get(i);
    } else {
      squareValue = 1;
    }
    
    calc_squares[i] = squareValue;
    
    this.setState({
      squares: calc_squares,
//      history: history.concat([
//        {
//          squares: squares
//        }
//      ]),
//      stepNumber: history.length,
//      xIsNext: !this.state.xIsNext
    });
//  }
//
//  jumpTo(step) {
//    this.setState({
//      stepNumber: step,
//      xIsNext: (step % 2) === 0
//    });
  }
  
  
  render() {
    
    const level = this.state.level;
    const score = this.state.score;
    const totalscore = this.state.totalscore;
    const status = this.state.status;
    
     return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            gameBoard={this.state.gameBoard}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
  
}

export default Game;
