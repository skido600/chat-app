import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsThree } from "react-icons/pi";
import type { IconType } from "react-icons";
import Logo from "./Logo";
import { NavLink } from "react-router";
type prop = {
  title: string;
  icon: IconType;
  href: string;
};
const navigationItems: prop[] = [
  {
    title: "Home",
    icon: IoMdHome,
    href: "/admin",
  },
  {
    title: "Dms",
    icon: IoChatbubbleEllipsesOutline,
    href: "/admin",
  },
  {
    title: "Settings",
    icon: IoSettingsOutline,
    href: "/admin",
  },
  {
    title: "more",
    icon: PiDotsThree,
    href: "/admin",
  },
];

function Nav() {
  return (
    <>
      <nav className="bg-[#12171d] min-h-screen  md:block hidden  relative overflow-y-auto">
        <section className="flex flex-col items-center justify-between pt-4 gap-y-7 mb-8 w-full">
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
      <MobileNav />
    </>
  );
}

function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-[#12171d] md:hidden">
      <div className="mx-auto flex h-16 max-w-md px-4 pt-4 mb-4">
        <ul className="flex w-full items-center justify-around font-semibold">
          {navigationItems.map((items, index) => (
            <li key={index}>
              <NavLink className="flex flex-col justify-center" to={items.href}>
                <div>
                  <items.icon className="text-white mx-auto" size={20} />
                </div>
                <span className="text-white mt-2 text-sm">{items.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
