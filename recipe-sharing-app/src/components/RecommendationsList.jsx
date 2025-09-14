import useRecipeStore from "./recipeStore";

function ReccomendationList() {
    const recommendations = useRecipeStore(state => state.reccomendations);
    const generateReccomendations = useRecipeStore(state => state.generateReccomendations);
    
    useEffect(() => {
        generateReccomendations();
    },[generateReccomendations]);

    return (
        <div>
            <h2>Recipe Recommendations</h2>
            {recommendations.length > 0 ? (
                <ul>
                    {recommendations.map((recipe, index) => (
                        <li key={index}>
                            {/* Replace with your actual recipe display logic */}
                            {recipe.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
}

export default ReccomendationList;