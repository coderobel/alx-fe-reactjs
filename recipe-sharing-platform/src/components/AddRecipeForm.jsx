import { useState } from "react";

export default function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target.value;
    setRecipe({ ...recipe, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };
  };


 const validate = () => {
    const newErrors = {};
    if (!recipe.title.trim()) newErrors.title = "Title is required.";
    if (!recipe.ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!recipe.steps.trim()) newErrors.steps = "Steps are required.";
    return newErrors;
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // ❌ Stop if there are errors
    }

    // ✅ If valid
    console.log("Recipe submitted:", recipe);
    setRecipe({ title: "", ingredients: "", steps: "" });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>

      <div>
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={recipe.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
      </div>

      <div>
        <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-1">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="preparation" className="block text-gray-700 font-medium mb-1">
          Steps
        </label>
        <textarea
          id="preparation"
          value={recipe.steps}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          rows="4"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 text-white py-2 rounded-md font-semibold hover:bg-amber-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
