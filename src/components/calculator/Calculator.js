import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  keypress = (event) => {
    const buttonPressed = event.target.innerHTML;
    this.setState((prevState) => (calculate(prevState, buttonPressed)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen">
            {total}
            {operation}
            {next}
          </div>
          <button className="btn" value="AC" onClick={this.keypress} type="button">
            AC
          </button>
          <button className="btn" value="+/-" onClick={this.keypress} type="button">
            +/-
          </button>
          <button className="btn" value="%" onClick={this.keypress} type="button">
            %
          </button>
          <button className="btn orange" value="/" onClick={this.keypress} type="button">
            /
          </button>
          <button type="button" className="btn" value="7" onClick={this.keypress}>
            7
          </button>
          <button className="btn" value="8" onClick={this.keypress} type="button">
            8
          </button>
          <button className="btn" value="9" onClick={this.keypress} type="button">
            9
          </button>
          <button className="btn orange" value="*" onClick={this.keypress} type="button">
            *
          </button>
          <button className="btn" value="4" onClick={this.keypress} type="button">
            4
          </button>
          <button className="btn" value="5" onClick={this.keypress} type="button">
            5
          </button>
          <button className="btn" value="6" onClick={this.keypress} type="button">
            6
          </button>
          <button className="btn orange" value="+" onClick={this.keypress} type="button">
            +
          </button>
          <button className="btn" value="1" onClick={this.keypress} type="button">
            1
          </button>
          <button className="btn" value="2" onClick={this.keypress} type="button">
            2
          </button>
          <button className="btn" value="3" onClick={this.keypress} type="button">
            3
          </button>
          <button className="btn orange" value="-" onClick={this.keypress} type="button">
            -
          </button>
          <button className="btn zero" value="0" onClick={this.keypress} type="button">
            0
          </button>
          <button className="btn" value="." onClick={this.keypress} type="button">
            .
          </button>
          <button className="btn orange" value="=" onClick={this.keypress} type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
