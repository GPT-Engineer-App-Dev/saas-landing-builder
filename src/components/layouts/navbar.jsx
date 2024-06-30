import { Link } from "react-router-dom";

const NavbarLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">SaaS Business</Link>
          <div className="space-x-4">
            <Link to="/" className="text-lg">Home</Link>
            <Link to="/about" className="text-lg">About</Link>
            <Link to="/contact" className="text-lg">Contact</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default NavbarLayout;