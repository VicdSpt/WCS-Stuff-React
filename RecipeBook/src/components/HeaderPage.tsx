import React from "react";

function HeaderPage() {
  return (
    <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md fixed top-0 flex- w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-wide">
          Recipes by Vic
        </a>
        <nav>
          <ul className="flex space-x-6">
            {[
              { name: "Home", href: "#home" },
              { name: "Recipes", href: "#recipes" },
              { name: "About Me", href: "#about" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <li key={index}>
                <a                   
                  href={item.href}
                  className="cursor-pointer hover:text-black font-bold transition-colors duration-300"
                >
                  {item.name}
                </a>                  
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPage;
