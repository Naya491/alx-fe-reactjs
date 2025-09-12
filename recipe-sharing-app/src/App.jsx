import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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

      {/* Optional: keep the counter if you want it for testing */}
      <div style={{ marginTop: "20px" }}>
        <h2>Vite + React Demo</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
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
  );
}

export default App;
