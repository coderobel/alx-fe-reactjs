import { StrictMode, useState } from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="Add Recipe/" element={<AddRecipeForm />} />
            <Route path="Recipe Details/:recipeId" element={<RecipeDetails />} /> 
          </Routes>
        </BrowserRouter>
      </>
    );
}
export default App;
