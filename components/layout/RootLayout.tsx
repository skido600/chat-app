import React from "react";
import Nav from "../Nav";
import ChatBoard from "../ChatBoard";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <main className="grid grid-cols-3">
      <section className="w-[20%]">
        <Nav />
      </section>
      <section className="w-[30%] border border-red-600">
        <ChatBoard />
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default RootLayout;
