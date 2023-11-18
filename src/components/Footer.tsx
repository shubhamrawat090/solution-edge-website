import logoImg from "../assets/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    // Check if home component exists in the DOM
    const homeComponent = document.getElementById("home");
    if (!homeComponent) {
      // If home component doesn't exist, redirect to home first
      navigate("/");
    }
    // Delay navigation to ensure the home component is rendered before navigating to the child div
    setTimeout(() => {
      const childElement = document.getElementById(id);
      if (childElement) {
        childElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the delay time as needed
  };

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="w-max mx-auto">
            <Link to={"/"}>
              <img src={logoImg} alt="logo" className="h-16" />
            </Link>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900 cursor-pointer"
                onClick={() => handleNavigation("howDoesItWork")}
              >
                How does it work?
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900 cursor-pointer"
                onClick={() => handleNavigation("advantages")}
              >
                Advantages of our service
              </a>
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900 cursor-pointer"
                to={"/terms-and-conditions"}
              >
                Terms and Conditions
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-pure-greys-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a href="https://wa.me/+918800556980" target="_blank">
              <IoLogoWhatsapp className="h-6 w-6 fill-pure-greys-400 hover:fill-[#25D366]" />
            </a>
            <a href="mailto:solution.edge.info@gmail.com" target="_blank">
              <MdEmail className="h-6 w-6 fill-pure-greys-400 hover:fill-[#C71610]" />
            </a>
          </div>
          <p className="mt-6 text-sm text-pure-greys-500 sm:mt-0">
            Copyright @ 2023 Solution Edge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
