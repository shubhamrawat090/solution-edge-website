import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { navlinkType, navlinks } from "../constants/links";
import { classNames } from "../utils/stringManipulation";
import { handleNavigation } from "../services/navigationService";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../context/NavbarContext";

interface NavLinksProps {
  screen: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ screen }) => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(NavbarContext);

  const handleClick = (id: string, to: string) => {
    // Close the mobile navbar and then redirect
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    handleNavigation(navigate, id, to);
  };

  const [openListId, setOpenListId] = useState<number | null>(null);

  const handleMenuButtonClick = (navlink: navlinkType) => {
    // If the clicked menu button is clicked again then it has to be closed
    if (navlink.id === openListId) {
      setOpenListId(null);
    } else {
      setOpenListId(navlink.id);
    }
  };

  return (
    <>
      {navlinks.map((navlink: navlinkType) => (
        <div
          className="transition-all cursor-pointer text-center"
          key={navlink.id}
        >
          <Menu
            as="div"
            className="select-none inline-block text-left relative"
          >
            <div>
              <Menu.Button
                className="inline-flex w-full justify-center items-center rounded-md px-4 text-md text-pure-greys-500 font-medium hover:text-caribbeangreen-200"
                onClick={() => handleMenuButtonClick(navlink)}
              >
                {navlink.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={classNames(
                    "ml-2 -mr-1 h-5 w-5 transition-transform transform",
                    `${navlink.id === openListId ? "rotate-180" : ""}`
                  )}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={classNames(
                  "left-4 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white ring-black ring-opacity-5 focus:outline-none",
                  `${
                    screen === "normal"
                      ? "absolute shadow-lg ring-1"
                      : "w-[95vw]"
                  }`
                )}
              >
                <div
                  className={classNames(
                    "px-1 py-1 w-full",
                    `${screen === "small" ? "grid gap-4 mt-5" : ""}`
                  )}
                >
                  {navlink.links.map(
                    (menuItem: { id: string; label: string }) => (
                      <Menu.Item key={menuItem.id} as={Fragment}>
                        {({ active }) => (
                          <button
                            onClick={() => handleClick(menuItem.id, navlink.to)}
                            className={classNames(
                              "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                              `${
                                active
                                  ? "bg-caribbeangreen-300 text-white"
                                  : "text-gray-900"
                              }`,
                              `${
                                screen === "small"
                                  ? "justify-center text-xl"
                                  : ""
                              }`
                            )}
                          >
                            {menuItem.label}
                          </button>
                        )}
                      </Menu.Item>
                    )
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
