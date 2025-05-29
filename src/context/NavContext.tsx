import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface NavContextType {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleMobileNav = () => setShowMobileNav((prev) => !prev);

  return (
    <NavContext.Provider value={{ showMobileNav, toggleMobileNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = (): NavContextType => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
