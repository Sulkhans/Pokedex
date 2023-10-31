import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-[4.5rem]">
        <Outlet />
      </div>
    </>
  );
};

export default App;
