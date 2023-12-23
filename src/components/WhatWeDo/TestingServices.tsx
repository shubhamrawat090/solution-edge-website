import { RiCheckboxCircleLine, RiSpeedLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { email } from "../../constants/contact-info";

const TestingServices = () => {
  const btnTransition = "transition ease-in delay-1500";
  return (
    <section id="testing-services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
        <div className="col-span-2 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Testing Services
          </h2>
          <p className="mb-4 text-justify">
            Our testing services provide the data you need to optimize the
            production process and get your product to market quickly and
            economically. We support the quality, performance, regulatory
            compliance, safety, benchmarking, evaluation, validation, analysis,
            and other requirements for products, components, raw materials,
            sites, and facilities.
          </p>
          <p className="mb-4 text-justify">
            As regulations change and technology is created or innovated, our
            knowledge and industry expertise ensure your products and business
            are prepared to meet evolving demands.
          </p>
          <p className="text-justify">
            We help you bring your product to market quickly, responsibly, and
            economically to keep your business continually moving ahead.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <RiCheckboxCircleLine className="text-caribbeangreen-500 text-4xl" />
          <div>
            <h3 className="text-xl font-bold">Quality Testing</h3>
            <p>Ensuring high-quality standards for your products.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RiSpeedLine className="text-caribbeangreen-500 text-4xl" />
          <div>
            <h3 className="text-xl font-bold">Performance Testing</h3>
            <p>Optimizing performance metrics for your products.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center gap-x-6">
        <Link
          to="/contact-us"
          className="transition-all group flex gap-x-1 items-center justify-center rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-caribbeangreen-400 text-white hover:bg-caribbeangreen-500"
        >
          <HiOutlineChatAlt2 className="h-6 w-6" />
          Contact Us
        </Link>

        <Link
          to="https://wa.me/+918800556980"
          target="_blank"
          title="WhatsApp Us"
          className={`${btnTransition} group flex gap-x-1 ring-1 items-center justify-center rounded-md py-2 px-4 text-sm font-medium focus:outline-none ring-pure-greys-200 hover:ring-white text-pure-greys-600 hover:text-white  hover:bg-[#25D366]`}
        >
          <IoLogoWhatsapp
            className={`${btnTransition} h-6 w-6 fill-pure-greys-400 group-hover:fill-white`}
          />
          Whatsapp Us
        </Link>

        <Link
          to={`mailto:${email}`}
          target="_blank"
          title="Email Us"
          className={`${btnTransition} group flex gap-x-1 ring-1 items-center justify-center rounded-md py-2 px-4 text-sm font-medium focus:outline-none ring-pure-greys-200 hover:ring-white text-pure-greys-600 hover:text-white  hover:bg-[#C71610]`}
        >
          <MdEmail
            className={`${btnTransition} h-6 w-6 fill-pure-greys-400 group-hover:fill-white`}
          />
          Email Us
        </Link>
      </div>
    </section>
  );
};

export default TestingServices;
