import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = ({ total: newTotal, next: newNext, operation: newOP }) => {
  const [total, setTotal] = useState(newTotal);
  const [next, setNext] = useState(newNext);
  const [operation, setOP] = useState(newOP);

  const keypress = (event) => {
    const buttonPressed = event.target.value;
    const {
      total: newtotal,
      next: newnext,
      operation: newop,
    } = calculate({ total, next, operation }, buttonPressed);
    setTotal(newtotal);
    setNext(newnext);
    setOP(newop);
  };

  return (
    <div className="containers">
      <div className="logo">
        <h3>This is my Magic Calculator</h3>
      </div>
      <div className="wrapper">
        <div className="screen">
          {total}
          {operation}
          {next}
        </div>
        <button className="btn" value="AC" onClick={keypress} type="button">
          AC
        </button>
        <button className="btn" value="+/-" onClick={keypress} type="button">
          +/-
        </button>
        <button className="btn" value="%" onClick={keypress} type="button">
          %
        </button>
        <button className="btn orange" value="/" onClick={keypress} type="button">
          /
        </button>
        <button type="button" className="btn" value="7" onClick={keypress}>
          7
        </button>
        <button className="btn" value="8" onClick={keypress} type="button">
          8
        </button>
        <button className="btn" value="9" onClick={keypress} type="button">
          9
        </button>
        <button className="btn orange" value="*" onClick={keypress} type="button">
          *
        </button>
        <button className="btn" value="4" onClick={keypress} type="button">
          4
        </button>
        <button className="btn" value="5" onClick={keypress} type="button">
          5
        </button>
        <button className="btn" value="6" onClick={keypress} type="button">
          6
        </button>
        <button className="btn orange" value="+" onClick={keypress} type="button">
          +
        </button>
        <button className="btn" value="1" onClick={keypress} type="button">
          1
        </button>
        <button className="btn" value="2" onClick={keypress} type="button">
          2
        </button>
        <button className="btn" value="3" onClick={keypress} type="button">
          3
        </button>
        <button className="btn orange" value="-" onClick={keypress} type="button">
          -
        </button>
        <button className="btn zero" value="0" onClick={keypress} type="button">
          0
        </button>
        <button className="btn" value="." onClick={keypress} type="button">
          .
        </button>
        <button className="btn orange" value="=" onClick={keypress} type="button">
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;

Calculator.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Calculator.defaultProps = {
  total: 0,
  next: null,
  operation: null,
};
