import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen max-w-[1300px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
