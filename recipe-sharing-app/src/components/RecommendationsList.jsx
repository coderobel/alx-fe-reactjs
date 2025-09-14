import useRecipeStore from "./recipeStore";

function ReccomendationList() {
    reccomendations = useRecipeStore(state => state.reccomendations);
    generateReccomendations = useRecipeStore(state => state.generateReccomendations);
    
};

export default ReccomendationList;