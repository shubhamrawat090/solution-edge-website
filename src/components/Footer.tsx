import logoImg from "../assets/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="w-max mx-auto">
            <a href="/">
              <img src={logoImg} alt="logo" className="h-16" />
            </a>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900"
                href="#howDoesItWork"
              >
                How does it work?
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900"
                href="#advantages"
              >
                Advantages of our service
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-pure-greys-600 hover:bg-pure-greys-10 hover:text-pure-greys-900"
                href="/"
              >
                Some other section
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-pure-greys-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a href="https://wa.me/+918800556980">
              <IoLogoWhatsapp className="h-6 w-6 fill-pure-greys-400 hover:fill-[#25D366]" />
            </a>
            <a href="mailto:solution.edge.info@gmail.com">
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
