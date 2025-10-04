import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
            const foundRecipe = data.find((item) => item.id === Number(id));
            setRecipe(foundRecipe);
        })
    }, [id]);

    if (!recipe) {
    return (
      <div className="p-8">
        <p>Loading recipe details...</p>
      </div>
    );
    }
    return(
        <div className="p-8">
            <h1 className="text-3xl font-bold">Recipe Details</h1>
            <h1 className="text-3xl font-bold mb-4">{recipe.ingredients}</h1>
            <p className="text-gray-600 mb-4">{recipe.instructions}</p>
            <p className="text-gray-800">More details about this recipe coming soon...</p>
        </div>
    );
}