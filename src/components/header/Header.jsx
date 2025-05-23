import React from "react";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 h-[80px] flex items-center justify-between sticky top-0 z-50">
      <div className="container mx-auto max-w-[1300px] flex items-center justify-between">
        <h1>Logo</h1>
        <Navbar />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
