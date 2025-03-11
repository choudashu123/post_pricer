import React, { useState } from 'react';
import Form from '../components/Form';
import { calculatePrice } from '../api';
import { useNavigate } from 'react-router-dom';

const Home = ({ setPrice, setMultipliers }) => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const result = await calculatePrice(data);
      setPrice(result.price);
      setMultipliers({
        followerMultiplier: result.followerMultiplier,
        engagementMultiplier: result.engagementMultiplier,
        nicheMultiplier: result.nicheMultiplier,
        contentTypeMultiplier: result.contentTypeMultiplier,
      });
      navigate('/result'); // Navigate to the Result page
    } catch (error) {
      console.error('Error calculating price:', error);
    }
  };

  return (
    <div>
      <h2>Calculate Your LinkedIn Post Price</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;