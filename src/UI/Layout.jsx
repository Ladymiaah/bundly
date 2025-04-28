import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative min-h-screen w-full bg-[#141413] overflow-hidden">
      {/* Splash Backgrounds */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#F97316] rounded-full blur-[160px] opacity-60 mix-blend-screen"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#1E1EF7] rounded-full blur-[160px] opacity-60 mix-blend-screen"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-[95%]">
        <Outlet />{" "}
        {/* 👈 This will render your pages like Home, Login, Signup */}
      </div>
    </div>
  );
}

export default Layout;
