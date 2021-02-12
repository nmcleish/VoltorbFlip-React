import React from 'react';
import Board from "./Board";
import calculateBoard from "./Helper";

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      squares: Array(25).fill(null),
      status: "",
      level: 1,
      nextlevel: 1,
      multipliers: 0,
      score: 0,
      totalscore: 0,
      selectedmults: 0,
      gameBoard: this.generateBoard(1)
      
    };
    
  }
  
  generateBoard(level) {
    let boardDetails = calculateBoard(level);
    console.log(boardDetails);
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
              calc_col_mults[space % 5] += 2;
              
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
  
  
  getSquareValue(i) {
      if (this.state.gameBoard.spaces.has(i)) {
        return this.state.gameBoard.spaces.get(i);
      } else {
        return 1;
      }
    
  }
  
  
  handleClick(i) {
    const calc_squares = this.state.squares;
    var status = this.state.status;
    const gameBoard = this.state.gameBoard;
    var selectedmults = this.state.selectedmults;
    var nextlevel = this.state.level;
    var score = this.state.score;
    
    var squareValue = this.getSquareValue(i);
    calc_squares[i] = squareValue;
    console.log(squareValue);
    console.log(squareValue);
    
    if (squareValue === 0) {
      status = "Game Over"
      
      // determine level
      if (selectedmults < gameBoard.voltorbs) {
        if (selectedmults === 0) {
          nextlevel = 1;
        } else if (selectedmults < nextlevel){
          nextlevel = selectedmults;
        }
      }
    } else {
      selectedmults += 1;
      
      if (squareValue > 1) {
        gameBoard.multipliers -= 1;
        
        if (gameBoard.multipliers === 0) {
          status = "Level Complete";
          if (nextlevel < 8) {
            nextlevel += 1;
          }
        }
      }
      
      if (score === 0) {
        score = squareValue;
      } else {
        score *= squareValue;
      }
         
    }
    
    
    if (status !== "") {
      
      this.setState({
        totalscore: this.state.totalscore + score,
      });
      var square;
      for (square = 0; square < 25; square++) {
        calc_squares[square] = this.getSquareValue(square);
      }
    } 
    
    this.setState({
      squares: calc_squares,
      nextlevel: nextlevel,
      score: score,
      gameBoard: gameBoard,
      selectedmults: selectedmults,
      status: status,
      
    });
    
}
  
  gameOver() {
    const status = this.state.status;
    if (status !== "") {  
      return (
      <div>
        <div>{status}</div>
        <button onClick={i => this.newGame()}> New Game </button>
      </div>
      );
    } 
  }
  
  newGame() {
    const gameBoard = this.generateBoard(this.state.nextlevel);
    
    this.setState({
      gameBoard: gameBoard,
      level: this.state.nextlevel,
      squares: Array(25).fill(null),
      status: "",
      multipliers: 0,
      score: 0,
      selectedmults: 0,
    });
  }
  
  
  render() {
    
    const level = this.state.level;
    const score = this.state.score;
    const totalscore = this.state.totalscore;
        
     return (
      <div className="game">
       <div className="game-info">
          <div>Score: {score}</div>
          <div>Total Score: {totalscore}</div>
          <div>Level: {level}</div>
          <div>{this.gameOver()}</div>
        </div>
        <div className="game-board">
          <Board
            squares={this.state.squares}
            gameBoard={this.state.gameBoard}
            onClick={i => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
  
}

export default Game;
