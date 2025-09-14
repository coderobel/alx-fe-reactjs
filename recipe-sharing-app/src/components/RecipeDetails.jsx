import  useRecipeStore  from './recipeStore';
import DeleteRecipe from './DeleteRecipeButton';
import EditRecipe from './EditRecipeForm';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <EditRecipe  />
        <DeleteRecipe />
      </div>
    );
  };