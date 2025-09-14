import useRecipeStore from "./recipeStore";
import { useState,useEffect } from "react";
const EditRecipe = ({ recipeId }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const recipeToEdit = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (recipeToEdit){
            setTitle(recipeToEdit.title);
            setDescription(recipeToEdit.description);
        }
    }, [recipeToEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(recipeToEdit){
            updateRecipe(recipeId, { title, description});
        }
    };
    if(!recipeToEdit) {
        return <p>Recipe not found.</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='recipe_title'>Title</label>
            <input type="text" id="recipe_title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor='recipe_description'>Description</label>
            <textarea id="recipe_description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">Update Recipe</button>
        </form>
    );
};
export default EditRecipe;