import { Link } from "react-router";

function Header() {
  return (
    <header className="fixed top-0 w-full z-10 bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <a href="#" className="text-4xl font-bold decoration-0 text-white">VICTOR dS</a>
        </div>
        <nav>
          <div className="flex gap-6">
            <Link to="/" className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-1">Home</Link>
            <Link to="/skills" className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-1">Skills</Link>
            <Link to="/projects" className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-1">Projects</Link>
            <Link to="/hobbies" className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-1">Hobbies</Link>
            <Link to="/contact" className="text-white decoration-0 font-bold hover:bg-gray-500 rounded py-1 px-1">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;