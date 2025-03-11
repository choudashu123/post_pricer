import React from 'react';
import Result from '../components/Result';

const ResultPage = ({ price, multipliers }) => {
  return (
    <div>
      <h2>Calculation Result</h2>
      <Result price={price} multipliers={multipliers} />
    </div>
  );
};

export default ResultPage;