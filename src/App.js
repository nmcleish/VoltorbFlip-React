import './App.css';
import React from 'react';
import Game from "./Game"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Voltorb Flip
        </p>
          
        
      </header>
      <body>
        <Game> </Game>

        <p className="instructions">
          How to Play: Voltorb Flip is luck-based in the fact that the placement of the ×1, ×2, ×3, and Voltorb cards are random. However, a strategy can be used since the game is grid-based and the player can see how many Voltorb and the sum of the multiplier cards are in each row and column along the bottom and right side.
          <br></br>
          <br></br>
          If the total Voltorb in a row or column is 0, all cards in that row or column are "safe" to flip over. If a row or column meets a certain requirement (shown below), all cards left unturned in that row are either ×1 or Voltorb, and can be left unturned to complete the game. This is considered a "dead" row or column, and the player should make not to flip any cards. If there is a row of only Voltorb, or all multiplier cards have been flipped, then the column contains only multiplier cards, or vice versa.
        </p>
      </body>
    </div>
    
    
  );
}


//ReactDOM.render(<Game />, document.getElementById("root"));

export default App;


    
    

