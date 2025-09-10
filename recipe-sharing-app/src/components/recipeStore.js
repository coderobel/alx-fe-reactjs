import  { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (index) => set(state => ({recipes: state.recipes.map((recipe,i) => i === index?'':recipe)})),
    updateRecipe: (index, updatedRecipe) => set(state => ({recipes: state.recipes.map((recipe,i) => i === index?updatedRecipe:recipe)})),
}));

export default useRecipeStore;