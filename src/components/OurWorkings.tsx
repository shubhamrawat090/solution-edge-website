import whatWeDoImg from "@/assets/what-we-do.webp";
import { handleNavigation } from "@/services/navigationService";
import { useNavigate } from "react-router-dom";

const OurWorkings = () => {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 flex flex-col-reverse md:flex-row items-center md:justify-between gap-x-20 gap-y-5"
      id="ourCommitmentsForQuality"
    >
      <img
        className="md:w-1/2 rounded-lg"
        loading="lazy"
        src={whatWeDoImg}
        alt="Commitment Quality"
      />
      <div className="md:w-1/2 flex flex-col gap-5">
        <h2 className="text-3xl text-pure-greys-700 font-bold pl-3 py-3 border border-y-0 border-r-0 border-l-[0.4rem] border-l-caribbeangreen-400 flex items-center">
          What We Do?
        </h2>
        <ol className="list-decimal ml-5 text-pure-greys-500 font-medium text-sm text-justify">
          <li className="mb-2">Inspections and Supply chain services</li>
          <li className="mb-2">
            Testing and Laboratory Management System Services
          </li>
          <li className="mb-2">
            Certifications, Training, and Advisory Services
          </li>
          <li className="mb-2">Supply of Drones Services</li>
          <li>Business Support</li>
        </ol>
        <button
          className="self-start px-6 py-2 bg-caribbeangreen-400 text-white rounded hover:bg-caribbeangreen-500"
          onClick={() =>
            handleNavigation(
              navigate,
              "inspections-and-supply-chain-services",
              "what-we-do/inspections-and-supply-chain-services"
            )
          }
        >
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default OurWorkings;
