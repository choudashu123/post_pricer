import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Result from './pages/Result';
import About from './pages/About';

const App = () => {
  const [price, setPrice] = useState(0);
  const [multipliers, setMultipliers] = useState({});

  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home setPrice={setPrice} setMultipliers={setMultipliers} />}
        />
        <Route
          path="/result"
          element={<Result price={price} multipliers={multipliers} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;