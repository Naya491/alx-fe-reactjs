import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />

      {/* Optional demo counter */}
      <div style={{ marginTop: "20px" }}>
        <h2>Demo Counter</h2>
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <header style={{ marginBottom: '12px' }}>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
              Recipe Sharing App
            </Link>
          </h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
