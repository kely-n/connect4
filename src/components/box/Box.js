import React from 'react'
import Cell from '../cell/Cell.js'
class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      previousColor: 'red',
      board : [
        ['b','b','b','b','b','b'],
        ['b','b','b','b','b','b'],
        ['b','b','b','b','b','b'],
        ['b','b','b','b','b','b'],
        ['b','b','b','b','b','b'],
        ['b','b','b','b','b','b'],
        ['b','b','b','b','b','b']
      ]
    }
  }

  updateColor = (colorFromRow, row, col) => {
    let _board = this.state.board;
    colorFromRow === 'red' ?
      _board[row][col] = 'r':
      _board[row][col] = 'l'//l for black since its initialized to blue, starts with b
    this.setState({
      previousColor: colorFromRow,
      board: _board
    });
    this.findWinner(colorFromRow, row, col);
  }

  findWinner(colorFromRow, row, col){
    console.log('finding winner');
    var cell = {
      cell_col: col,
      cell_row: row,
      color: this.state.board[this.cell_row][this.cell_col]
    }
    var color = colorFromRow === 'red'?  'r' : 'l';

    var currentCell = cell;
    var previousCell = cell;

    var counter = 0;
    //check vertically
    while(currentCell.color === color){
      counter+=1;
      if(counter === 4){
        console.log('winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_row=== 0){
        break;
      }
      previousCell = currentCell;
      currentCell.cell_row-=1;
    }

    //reset counter and assign current cell to previous cell
    counter = 0;
    currentCell = previousCell;
    while(currentCell.color  === color){
      counter+=1;
      if(counter === 4){
        console.log('winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_row === 6){
        break;
      }
      currentCell.cell_row+=1;
    }

    //check horizontally
    //initialize current cell to the original cell
    currentCell = cell;
    counter = 0;
    while(currentCell.color  === color){
      counter+=1;
      if(counter === 4){
        console.log('winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_col=== 0){
        break;
      }
      previousCell = currentCell;
      currentCell.cell_col-=1;
    }

    //reset counter, rewind column ref and check opposite direction
    counter = 0;
    currentCell = previousCell;
    while(currentCell.color === color){
      counter+=1;
      if(counter === 4){
        console.log('winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_col=== 5){
        break;
      }
      currentCell.cell_col+=1;
    }


    //check diagonally
    currentCell = cell;
    counter = 0;
    while(currentCell.color === color){
      counter+=1;
      if(counter === 4){
        console.log('diagonal up winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_col=== 0 || currentCell.cell_row ===0){
        break;
      }
      previousCell = currentCell;
      currentCell.cell_col-=1;
      currentCell.cell_row-=1;
    }
    //reset counter, rewind column ref and check opposite direction
    counter = 0;
    currentCell = previousCell;
    while(currentCell.color === color){
      counter+=1;
      if(counter === 4){
        console.log('diagonal up winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_col=== 5 || currentCell.cell_row ===6){
        break;
      }

      currentCell.cell_col+=1;  currentCell.cell_row+=1;
    }



    //check diagonally
    counter = 0;
    currentCell = cell;
    while(currentCell.color === color){
      counter+=1;
      if(counter === 4){
        console.log('diagonal up winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_col=== 0 || currentCell.cell_row ===0){
        break;
      }
      currentCell.cell_col+=1;
     currentCell.cell_row-=1;
    }
    //reset counter, rewind column ref and check opposite direction
    counter = 0;
    currentCell = previousCell;
    while(currentCell.color === color){
      counter+=1;
      if(counter === 4){
        console.log('diagonal up winner found :' + colorFromRow);
        return;
      }
      console.log('found ' + counter);
      if(currentCell.cell_col=== 5 || currentCell.cell_row ===6){
        break;
      }
      currentCell.cell_col-=1; currentCell.cell_row+=1;
    }
  }

  render(){
    const boxStyle = {
      backgroundColor: '#61dafb',
      display: 'inline-block',
      margin: 'auto',
      padding: '20px'
    };
    return (

      <div style = {boxStyle}>
        <div>
          {this.state.board.map((row, r_index) =>  <div key = {r_index}>
              {this.state.board[r_index].map((cell, c_index) =>  <Cell row = {r_index} col = {c_index} key={`${c_index}${r_index}`}  prevColor = {this.state.previousColor} updateColor = {this.updateColor}>
              </Cell>)}
            </div>)}
          </div>
      </div>
    )
  };
}
export default Box;
