import React from 'react';

const Result = ({ price, multipliers }) => {
  return (
    <div>
      <h2>Your Suggested Price per Post: ${price.toFixed(2)}</h2>
      <h3>Breakdown:</h3>
      <ul>
        <li>Follower Multiplier: {multipliers.followerMultiplier}</li>
        <li>Engagement Multiplier: {multipliers.engagementMultiplier}</li>
        <li>Niche Multiplier: {multipliers.nicheMultiplier}</li>
        <li>Content Type Multiplier: {multipliers.contentTypeMultiplier}</li>
      </ul>
    </div>
  );
};

export default Result;