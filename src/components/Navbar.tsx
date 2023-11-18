import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { navlinks } from "../constants/links";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="pb-10 pt-7" id="navbar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="logo" className="h-20" />
          </a>

          <ul className="flex my-auto gap-[3rem]">
            {navlinks.map((navlink) => (
              <li className="transition-all cursor-pointer" key={navlink.id}>
                <Menu
                  as="div"
                  className="select-none inline-block text-left relative"
                >
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center rounded-md px-4 text-md text-pure-greys-500 font-medium hover:text-caribbeangreen-200">
                      {navlink.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 -mr-1 h-5 w-5"
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
                    <Menu.Items className="absolute left-4 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {navlink.links.map(
                          (menuItem: { to: string; label: string }) => (
                            <Menu.Item key={menuItem.to} as={Fragment}>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-caribbeangreen-300 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
