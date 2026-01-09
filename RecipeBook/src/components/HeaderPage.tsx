import React from "react";

function HeaderPage() {
  return (
    <header className="bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-md fixed top-0 flex-0 w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-wide">
          Recipes by Vic
        </a>
        <nav>
          <ul className="flex space-x-6">
            {["Home", "Recipes", "About Me", "Contact"].map(
              (itemsArray, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-black font-bold transition-colors duration-300"
                >
                  {itemsArray}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPage;
