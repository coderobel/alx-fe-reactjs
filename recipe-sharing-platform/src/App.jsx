import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
  );
}

export default App
