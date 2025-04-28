import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#141413] overflow-hidden">
      {/* Orange "splash" */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#F97316] rounded-full blur-[160px] opacity-60 mix-blend-screen"></div>
      {/* Blue "splash" */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#1E1EF7] rounded-full blur-[160px] opacity-60 mix-blend-screen"></div>

      {/* Main container */}
      <div className="border shadow-lg  md:p-8 mt-5 md:mt-20 mx-auto max-w-7xl w-[95%] rounded-lg bg-[#1a1a19]">
        <Navbar />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mb-5 min-h-[500px]">
          {/* Left (text) */}
          <div className="flex-1 text-white text-center md:text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Manage your Expenses easily with{" "}
              <span className="bg-gradient-to-r from-orange-400 via-black to-blue-500 bg-clip-text text-transparent">
                BundLy
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-base md:text-lg">
              Bundly makes it easy to record expenses, visualize where your
              money goes, and stay on top of your financial goals — all in one
              simple, powerful app. Track your spending, take control of your
              future.
            </p>

            <div className="mt-8">
              <Link
                to="/Signup"
                className="inline-block bg-gradient-to-r from-orange-400 via-white to-blue-500 py-2 px-6 text-black font-semibold rounded-md hover:text-gray-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right (image) */}
          <div className="flex-1  items-left px-10 py-5 shadow-lg ">
            <img
              src="images/avartar.png"
              alt="avatar"
              className="w-full max-w-[400px] h-auto object-contain"
            />
            <img
              src="images/avatar1.jpg"
              alt="avatar"
              className="w-full max-w-[400px] h-auto mt-4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
