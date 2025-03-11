import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [followers, setFollowers] = useState(0);
  const [engagementRate, setEngagementRate] = useState(0);
  const [niche, setNiche] = useState('tech');
  const [contentType, setContentType] = useState('text');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ followers, engagementRate, niche, contentType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Followers: <input type="number" value={followers} onChange={(e) => setFollowers(e.target.value)} /></label>
      <label>Engagement Rate (%): <input type="number" value={engagementRate} onChange={(e) => setEngagementRate(e.target.value)} /></label>
      <label>Niche: <select value={niche} onChange={(e) => setNiche(e.target.value)}>
        <option value="tech">Tech</option>
        <option value="finance">Finance</option>
        <option value="lifestyle">Lifestyle</option>
      </select></label>
      <label>Content Type: <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
        <option value="text">Text</option>
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select></label>
      <button type="submit">Calculate Price</button>
    </form>
  );
};

export default Form;