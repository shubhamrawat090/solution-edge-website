import logoImg from "@/assets/logo.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { handleNavigation } from "@/services/navigationService";
import { email } from "@/constants/contact-info";
import EasyHaatDownloadBtn from "./EasyHaatDownloadBtn";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="w-max mx-auto cursor-pointer">
            <a onClick={() => handleNavigation(navigate, "home")}>
              <img src={logoImg} alt="logo" className="h-16" loading="lazy" />
            </a>
          </div>
          <nav className="mt-5 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-col sm:flex-row justify-center gap-x-6 gap-y-4">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900 cursor-pointer text-center"
                onClick={() => handleNavigation(navigate, "howDoesItWork")}
              >
                How does it work?
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900 cursor-pointer text-center"
                onClick={() => handleNavigation(navigate, "advantages")}
              >
                Advantages of our service
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900 cursor-pointer text-center"
                onClick={() =>
                  handleNavigation(
                    navigate,
                    "terms-and-conditions",
                    "terms-and-conditions"
                  )
                }
              >
                Terms and Conditions
              </a>
            </div>
            <div className="flex justify-center mt-5">
              <EasyHaatDownloadBtn />
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-pure-greys-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              to="https://wa.me/+918800556980"
              target="_blank"
              title="WhatsApp Us"
            >
              <IoLogoWhatsapp className="h-6 w-6 fill-pure-greys-400 hover:fill-[#25D366]" />
            </Link>
            <Link to={`mailto:${email}`} target="_blank" title="Email Us">
              <MdEmail className="h-6 w-6 fill-pure-greys-400 hover:fill-[#C71610]" />
            </Link>
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
