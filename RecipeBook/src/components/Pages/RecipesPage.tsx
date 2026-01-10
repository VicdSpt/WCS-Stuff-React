import React, { useEffect, useState } from "react";
import RecipeCard from "../Recipes/RecipeCard";
import RecipeModal from "../Recipes/RecipeModal";

function RecipesPage({ recipes }) {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState(null);
  const [searchRecipes, setSearchRecipes] = useState("");
  const [foodCategory, setFoodCategory] = useState("");

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, []);

  useEffect(() => {
    const search = searchRecipes.toLowerCase();
    const showResult = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(search) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(search)
        ) ||
        recipe.foodCategory.toLowerCase().includes(search)
    );
    setFilteredRecipes(
      foodCategory
        ? showResult.filter((recipe) => recipe.foodCategory === foodCategory)
        : showResult
    );
  }, [searchRecipes, foodCategory, recipes]);
  const handleRecipeClick = (recipe) => setSelectedRecipes(recipe);
  const closeModal = () => setSearchRecipes(null);

  const clearSearch = () => {
    setSearchRecipes("");
    setFoodCategory("");
  };

  return (
    <main className="pt-20">
      <section id="recipes" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Discover our Recipes
          </h2>
          <div className="flex flex-col md:flex-row justify-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <input
              value={searchRecipes}
              onChange={(event) => setSearchRecipes(event.target.value)}
              className="w-full md:w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Search for a recipes"
              type="text"
            />
            <select
              onChange={(event) => setFoodCategory(event.target.value)}
              value={foodCategory}
              className="w-full md:w-1/4 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>All Categories</option>
              {[...new Set(recipes.map((recipe) => recipe.foodCategory))].map(
                (cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                )
              )}
            </select>
            <button
              onClick={clearSearch}
              className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-6 rounded-full hover:from-orange-500 hover:to-amber-500 transition-all duration-300"
            >Clear Search</button>
          </div>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                  recipe={recipe}
                  onClick={handleRecipeClick}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <p>No Recipes Found 😭</p>
          )}
        </div>
      </section>
      {selectedRecipes && (
        <RecipeModal recipe={selectedRecipes} onClose={closeModal} />
      )}
    </main>
  );
}
export default RecipesPage;
