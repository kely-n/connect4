import React from 'react';

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      row: this.props.row,
      col: this.props.col,
      color: '#61dafb',
    };
    this.handleClick = this.handleClick.bind(this);
  }


handleClick(e) {
  e.preventDefault();
  if(this.state.color ==='#61dafb'){
      if(this.props.prevColor === 'red'){
       this.setState({
         color: 'black'
       });
      this.props.updateColor('black');
      }else{
        this.setState({
           color: 'red'
        });
     this.props.updateColor('red');
      }
  }
}
  render() {
    const squareStyle = {
      padding: '5px',
      display: 'inline-block',
      margin: 'auto',
      backgroundColor: '#61dafb',
    }
    const circleStyle = {
      width: '80px',
      height: '80px',
      border: '1px solid gray',
      borderRadius: '50%',
      backgroundColor: this.state.color,
    }
    return (
      <div style = {squareStyle}>
        <div onClick = {this.handleClick} style = {circleStyle}>
          <p> {`${this.state.col}${this.state.row}`}</p>
      </div>

      </div>
    );


}
}

export default Cell;

