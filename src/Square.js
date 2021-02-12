import squareimg from './images/img_square.jpg'
import voltorbimg from './images/voltorb.png'

function Square(props) {
  
  if (props.value == null) {
    return (
      <th className="square">
        <img src={squareimg} alt="square" onClick={props.onClick}/>
      </th>
    );
  } else if (props.value === 0) {
      return (
      <th className="square">
        <img src={voltorbimg} alt="square"/>
      </th>
    );
  } else {
    return (
      <th className="square">
      <div className="number-square">
      {props.value}
      </div>
      </th>
    );
  }
  
}

export default Square;