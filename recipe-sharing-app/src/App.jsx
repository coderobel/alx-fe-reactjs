import { StrictMode, useState } from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path:"/",element: <RecipeList />},
    { path:"Add Recipe/",element: <AddRecipeForm />},
    { path:"Recipe Details/:recipeId",element: <RecipeDetails />},
  ]);
    return(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
}
export default App;
