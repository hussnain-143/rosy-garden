import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Layout = () => {
  return (
    <div className="flex  mx-auto flex-col  min-h-screen ">
      {/* Header */}
      <div className="sticky top-0 z-999">
          <div className=" px-5 bg-white ">
            <Header />
          </div>
          <div className="none md:block border-2 container max-w-[1200px]  mx-auto"></div>
      </div>
      {/* Main Content */}
      <main className="flex-1 h-[80vh] bg-white px-5">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="bg-gray-200 p-5">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
