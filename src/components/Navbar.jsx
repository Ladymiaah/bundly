import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-[#141413] shadow-md z-50 relative">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <Link to="/" className="text-white text-xl font-bold">
          Bundly
        </Link>
      </div>

      {/* Right Side: Links */}
      <div className="flex items-center space-x-4">
        <Link
          to="/Login"
          className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors duration-200"
        >
          Log in
        </Link>
        <Link
          to="/Signup"
          className="text-sm sm:text-base rounded-full bg-gradient-to-r from-orange-400 via-white to-blue-500 py-2 px-4 sm:px-6 text-black hover:text-gray-800 transition-colors duration-200"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
