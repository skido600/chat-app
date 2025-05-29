import React from "react";
import Nav from "../Nav";

import { Outlet } from "react-router-dom";
import { NavProvider } from "../../src/context/NavContext";
import Topnav from "../ui/Topnav";

function RootLayout() {
  return (
    <NavProvider>
      <div className="block md:hidden fixed  left-0 right-0  ">
        <Topnav />
      </div>
      <main className=" flex">
        <section className="md:w-[8%] min-h-screen bg-[#12171D]  ">
          <Nav />
        </section>
        <section className="w-full relative ">
          <Outlet />
        </section>
      </main>
    </NavProvider>
  );
}

export default RootLayout;
