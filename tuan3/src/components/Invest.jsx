import React, { useState } from 'react';

export default function Invest() {
  const [invest, setInvest] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(0);

  const handleOnClick = () => {
    const investValue = parseFloat(invest);
    const rateValue = parseFloat(rate);
    const yearValue = parseFloat(year);

    if (!isNaN(investValue) && !isNaN(rateValue) && !isNaN(yearValue)) {
      const calculatedResult = investValue * Math.pow(1 + rateValue / 100, yearValue);
      setResult(calculatedResult.toFixed(2));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div>
      <div id="input">
        <input
          type="number"
          name="Invest"
          id="invest"
          placeholder="Invest"
          value={invest}
          onChange={(e) => setInvest(e.target.value)}
        />{' '}
        <br />
        <input
          type="number"
          name="Rate"
          id="rate"
          placeholder="Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />{' '}
        <br />
        <input
          type="number"
          name="Year"
          id="year"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />{' '}
        <br />
      </div>

      <button type="button" onClick={handleOnClick}>
        Calc
      </button>
      <br />
      <input type="text" value={result} disabled />
    </div>
  );
}