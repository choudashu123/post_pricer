const express = require('express');
const cors = require('cors');
const pricingRouter = require('./routes/pricing');

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000', // For local development
  'https://your-frontend-url.vercel.app', // For deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Root route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// API routes
app.use('/api', pricingRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));