const express = require('express');
const router = express.Router();

router.post('/calculate-price', (req, res) => {
  const { followers, engagementRate, niche, contentType } = req.body;

  const baseRate = 50;
  const followerMultiplier = Math.floor(followers / 10000) * 0.1 + 1;
  const engagementMultiplier = engagementRate >= 3 ? 1.5 : engagementRate >= 1 ? 1.2 : 1;
  const nicheMultiplier = { tech: 1.5, finance: 1.3, lifestyle: 1 }[niche];
  const contentTypeMultiplier = { text: 1, image: 1.2, video: 1.5 }[contentType];

  const price = baseRate * followerMultiplier * engagementMultiplier * nicheMultiplier * contentTypeMultiplier;

  res.json({ price, followerMultiplier, engagementMultiplier, nicheMultiplier, contentTypeMultiplier });
});

module.exports = router;