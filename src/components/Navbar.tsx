import logoImg from "@/assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "@/services/navigationService";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import NavLinks from "@/components/NavLinks";
import { useContext } from "react";
import { NavbarContext } from "@/context/NavbarContext";
import EasyHaatDownloadBtn from "./EasyHaatDownloadBtn";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(NavbarContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="mb-10 pt-4 md:pt-7 sticky top-0 z-10 bg-white"
      id="navbar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <nav className="flex justify-between flex-wrap md:flex-nowrap">
          <a
            onClick={() =>
              handleNavigation(navigate, "home", "home", isOpen, setIsOpen)
            }
            className="flex items-center space-x-2 cursor-pointer shrink-0 hideTouchColor"
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

          <div className="hidden lg:flex self-center">
            <EasyHaatDownloadBtn />
          </div>

          <div className="lg:hidden flex text-2xl">
            <button onClick={toggleNavbar} className="hideTouchColor">
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="h-[88vh]">
            <div className="lg:hidden bg-white flex flex-col basis-full items-center gap-16 py-10 text-2xl hiddenScrollbar overflow-x-hidden overflow-y-auto">
              <NavLinks screen={"small"} />
            </div>
            <div className="flex justify-center lg:hidden">
              <EasyHaatDownloadBtn />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
