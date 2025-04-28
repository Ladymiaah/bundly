import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-15 py-5 bg-[#141413] shadow-md ">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center space-x-2">
        {/* Logo (can be an image or emoji for now) */}
        {/* <div className="text-2xl"></div> */}
        <img src="images/logo.png" alt="logo" className="w-10 h-10" />
        {/* Title */}
        <Link to="/" className="text-white text-xl font-bold">
          Bundly
        </Link>
      </div>

      {/* Right Side: Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/Login"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Log in
        </Link>
        <Link
          to="/Signup"
          className="rounded-full bg-gradient-to-r from-orange-400 via-white to-blue-500 py-2 px-6 text-black hover:text-gray-300 transition-colors duration-200"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
