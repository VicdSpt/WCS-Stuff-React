import { Link } from "react-router";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-10 bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold decoration-0 text-white"
            >
              VICTOR dS
            </a>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:block">
            <div className="flex gap-4 lg:gap-6">
              <Link
                to="/"
                className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-2 lg:px-3 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/skills"
                className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-2 lg:px-3 transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-2 lg:px-3 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/hobbies"
                className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-2 lg:px-3 transition-colors"
              >
                Hobbies
              </Link>
              <Link
                to="/contact"
                className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-2 lg:px-3 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-700 rounded cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-white decoration-0 font-bold hover:bg-gray-700 rounded py-2 px-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/skills"
                className="text-white decoration-0 font-bold hover:bg-gray-700 rounded py-2 px-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-white decoration-0 font-bold hover:bg-gray-700 rounded py-2 px-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/hobbies"
                className="text-white decoration-0 font-bold hover:bg-gray-700 rounded py-2 px-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hobbies
              </Link>
              <Link
                to="/contact"
                className="text-white decoration-0 font-bold hover:bg-gray-700 rounded py-2 px-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
