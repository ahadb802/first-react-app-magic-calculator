import React from 'react';
import '../App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen">0</div>
          <div className="btn">
            AC
          </div>
          <div className="btn">
            +/-
          </div>
          <div className="btn">
            %
          </div>
          <div className="btn orange">
            /
          </div>
          <div className="btn">
            7
          </div>
          <div className="btn">
            8
          </div>
          <div className="btn">
            9
          </div>
          <div className="btn orange">
            X
          </div>
          <div className="btn">
            4
          </div>
          <div className="btn">
            5
          </div>
          <div className="btn">
            6
          </div>
          <div className="btn orange">
            +
          </div>
          <div className="btn">
            1
          </div>
          <div className="btn">
            2
          </div>
          <div className="btn">
            3
          </div>
          <div className="btn orange">
            -
          </div>
          <div className="btn zero">
            0
          </div>
          <div className="btn">
            .
          </div>
          <div className="btn orange">
            =
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
