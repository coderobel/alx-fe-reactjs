import useRecipeStore from "./recipeStore";
import { useState, useEffect } from "react";
const DeleteRecipe = ({recipeId}) => {
    const deleteRecipe = useRecipeStore(state => state.DeleteRecipe);
    const recipeToDelete = useRecipeStore(state => state.recipes.find(recipe =>recipe.id === recipeId));
    
        const handleDelete = (event) => {
            event.preventDefault();
            if(recipeToDelete){
                deleteRecipe(recipeId);
            }
        };
        if(!recipeToDelete) {
            return <p>Recipe not found.</p>;
        }
        return (
            <div>
                <p>
                    Are you sure you want to delete the recipe "
                    <strong>{recipeToDelete.title}</strong>"?
                </p>
                <button onClick={handleDelete}>Confirm Delete</button>
            </div>
        );
};
export default DeleteRecipe;