import { useState } from 'react';

function useCalculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [output, setOutput] = useState('');

  function addition() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    setOutput((a + b).toString());
  }
  function subtraction() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    setOutput((a - b).toString());
  }
  function multiplication() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    setOutput((a * b).toString());
  }
  function division() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    if (b === 0) {
      setOutput('Error: divide by zero');
    } else {
      setOutput((a / b).toString());
    }
  }
  function power() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    let result = 1;
    for (let i = 0; i < Math.abs(b); i++) {
      result *= a;
    }
    if (b < 0) result = 1 / result;
    setOutput(result.toString());
  }
  function sqrt() {
    const a = parseFloat(firstNumber);
    if (a < 0) {
      setOutput('Error: negative input');
    } else {
      setOutput(Math.sqrt(a).toString());
    }
  }
  function clearCalc() {
    setFirstNumber('');
    setSecondNumber('');
    setOutput('');
  }

  return {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    output,
    addition,
    subtraction,
    multiplication,
    division,
    power,
    sqrt,
    clearCalc
  };
}

export default useCalculator; 