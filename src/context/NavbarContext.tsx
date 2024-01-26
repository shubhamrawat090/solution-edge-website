import { createContext, useState, ReactNode } from "react";

type NavbarContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

type NavbarContextProviderProps = {
  children: ReactNode;
};

export const NavbarContext = createContext<NavbarContextType>(
  {} as NavbarContextType
);

export const NavbarContextProvider = ({
  children,
}: NavbarContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};
