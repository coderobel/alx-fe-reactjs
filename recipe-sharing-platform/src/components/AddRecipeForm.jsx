import { useState } from "react";

export default function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecipe({ ...recipe, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
    // Later: You could save to a backend or localStorage here
    setRecipe({ title: "", ingredients: "", preparation: "" }); // clear form
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
          Preparation
        </label>
        <textarea
          id="preparation"
          value={recipe.preparation}
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
