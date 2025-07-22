import useCalculator from './useCalculator';

function Calculator() {
  const {
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
  } = useCalculator();

  return (
    <div id="calculator">
      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={firstNumber}
        onChange={e => setFirstNumber(e.target.value)}
        placeholder="First number"
      />
      <input
        type="text"
        value={secondNumber}
        onChange={e => setSecondNumber(e.target.value)}
        placeholder="Second number"
      />
      <div>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
        <button onClick={power}>**</button>
        <button onClick={sqrt}>√</button>
        <button onClick={clearCalc}>Clear</button>
      </div>
      <h3 id="output" style={{ color: typeof output === 'number' && output < 0 ? 'red' : undefined }}>{output}</h3>
    </div>
  );
}

export default Calculator; 