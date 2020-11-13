import React from 'react'
import Cell from '../cell/Cell.js'
class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      previousColor: 'red'
    }
  }

  updateColor = (colorFromRow) => {
    this.setState({previousColor: colorFromRow});
  }
  render(){
    const boxStyle = {
      backgroundColor: '#61dafb',
      display: 'inline-block',
      margin: 'auto',
      padding: '20px'
    };

    const Rows = [0, 1, 2, 3, 4, 5, 6];
    const Cells = [0, 1, 2, 3, 4, 5];
    return (

      <div style = {boxStyle}>
        <div>
          {Rows.map(row =>  <div key = {row}>
              {Cells.map(cell =>  <Cell row = {row} col = {cell} key={`${cell}${row}`} prevColor = {this.state.previousColor} updateColor = {this.updateColor}>
              </Cell>)}
            </div>)}
          </div>
      </div>
    )
  };
}
export default Box;
