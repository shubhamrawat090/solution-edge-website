import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex gap-x-6 justify-between p-6 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg">
        <div className="-ml-16 flex-1 bg-caribbeangreen-500 py-3 px-6 rounded-lg">
          <h1 className="text-4xl text-white font-normal">Contact Us</h1>
          <div className="mt-6 mb-4 flex gap-x-4 items-center text-white text-md">
            <HiBuildingOffice2 />
            <p>SOLUTION EDGE</p>
          </div>
          <div className="mb-4 flex gap-x-4 items-center text-white text-md">
            <FaMapLocationDot />
            <p>Uttar Pradesh, India</p>
          </div>
          <div className="mb-4 flex gap-x-4 items-center text-white text-md">
            <FaPhone />
            <p>+91-8800556980</p>
          </div>
          <div className="mb-4 flex gap-x-4 items-center text-white text-md">
            <MdEmail />
            <p>solution.edge.info@gmail.com</p>
          </div>
        </div>

        <div className="flex-1 ml-1">
          <h1 className="text-4xl text-caribbeangreen-500">Lets Talk</h1>
          <p className="mt-2 mb-4 text-base font-medium text-pure-greys-600">
            We'd love to hear from you.
          </p>
          <form className="flex flex-col gap-6 items-start">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
            />
            <textarea
              placeholder="You Message"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
            ></textarea>
            <button className="bg-caribbeangreen-500 text-white rounded-lg px-16 py-2 text-base">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
