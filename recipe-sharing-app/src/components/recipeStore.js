import  { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (index) => set(state => ({recipes: state.recipes.map((recipe,i) => i === index?'':recipe)})),
    updateRecipe: (index, updatedRecipe) => set(state => ({recipes: state.recipes.map((recipe,i) => i === index?updatedRecipe:recipe)})),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
      filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),
}));

export default useRecipeStore;