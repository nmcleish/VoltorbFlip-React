
function LegendSquare(props) {
  if (props.value < 5) {
    return (
      <th className="square">
      <div className="legendSquare">
      {props.gameBoard.row_mults[props.value]}
      <br></br>
      {props.gameBoard.row_voltorbs[props.value]}
      </div>
      </th>
    );
  } else {
    return (
      <th className="square">
      <div className="legendSquare">
      {props.gameBoard.col_mults[props.value-5]}
      <br></br>
      {props.gameBoard.col_voltorbs[props.value-5]}
      </div>
      </th>
    );
  }
}

export default LegendSquare;