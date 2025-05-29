import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
// import { PiDotsThree } from "react-icons/pi";
import { IoMdClose } from "react-icons/io"; // Import close icon
import type { IconType } from "react-icons";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { useNav } from "../src/context/NavContext";

type prop = {
  title: string;
  icon: IconType;
  href: string;
};

const navigationItems: prop[] = [
  { title: "Home", icon: IoMdHome, href: "/admin" },
  { title: "Dms", icon: IoChatbubbleEllipsesOutline, href: "/dms" },
  { title: "Settings", icon: IoSettingsOutline, href: "/admin" },
  //   { title: "more", icon: PiDotsThree, href: "/admin" },
];

function Nav() {
  const { showMobileNav, toggleMobileNav } = useNav();

  return (
    <>
      {/* Desktop Nav */}
      <nav className="bg-[#12171D] h-screen shadow-2xs md:block hidden relative ">
        <section className="flex flex-col  items-center justify-between pt-4 gap-y-7 ">
          <div className="logo">
            <Logo />
          </div>
          <ul className="flex flex-col gap-y-6 items-center">
            {navigationItems.map((items, index) => (
              <li key={index}>
                <NavLink
                  className="flex flex-col justify-center"
                  to={items.href}>
                  <div>
                    <items.icon className="text-white mx-auto" size={20} />
                  </div>
                  <span className="text-white mt-3 text-sm">{items.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>

        <div className="profile absolute bottom-0 w-full flex justify-center pb-4">
          <img
            src="/icons/image_ts.avif"
            alt="user"
            className="rounded-full aspect-auto w-10 h-10 object-cover"
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      {showMobileNav && <MobileNav toggleMobileNav={toggleMobileNav} />}
    </>
  );
}

type MobileNavProps = {
  toggleMobileNav: () => void;
};
function MobileNav({ toggleMobileNav }: MobileNavProps) {
  return (
    // Fixed the self-closing div issue here
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={toggleMobileNav}
      />

      {/* Navigation Drawer */}
      <nav className="relative z-10 w-[50%] h-screen bg-[#12171d]">
        <div className="flex justify-start p-4">
          <IoMdClose
            size={30}
            className="text-white cursor-pointer"
            onClick={toggleMobileNav}
          />
        </div>

        <div className="h-[calc(100%-3.5rem)] flex flex-col justify-between">
          <ul className="space-y-4 pl-4 font-semibold mt-4">
            {navigationItems.map((items, index) => (
              <li key={index} className="">
                <NavLink to={items.href} className="flex items-center gap-x-2">
                  <items.icon className="text-white my-auto" size={24} />
                  <p className="text-white text-sm">{items.title}</p>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <div className="flex justify-center pb-4">
            <img
              src="/icons/image_ts.avif"
              alt="user"
              className="rounded-full aspect-auto w-10 h-10 object-cover"
            />
          </div> */}
        </div>
      </nav>
    </div>
  );
}
export default Nav;
