import logoImg from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../services/navigationService";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(NavbarContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mb-10 pt-7 sticky top-0 z-10 bg-white" id="navbar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between flex-wrap md:flex-nowrap">
          <a
            onClick={() => handleNavigation(navigate, "home")}
            className="flex items-center space-x-2 cursor-pointer shrink-0"
          >
            <img
              src={logoImg}
              alt="logo"
              className="h-16 md:h-20"
              loading="lazy"
            />
          </a>

          <div className="hidden lg:flex justify-between align-center my-auto gap-2 lg:gap-5">
            <NavLinks screen={"normal"} />
          </div>

          <div className="lg:hidden flex text-2xl">
            <button onClick={toggleNavbar}>
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div
            className="lg:hidden h-[85vh] bg-white flex flex-col basis-full items-center gap-16 py-10 text-2xl
          "
          >
            <NavLinks screen={"small"} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
