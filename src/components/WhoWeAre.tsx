import whoWeAreImg from "@/assets/who-we-are.webp";
import { handleNavigation } from "@/services/navigationService";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 flex flex-col-reverse md:flex-row-reverse items-center gap-x-20 gap-y-5"
      id="ourCommitmentsForQuality"
    >
      <img
        className="md:w-2/5 rounded-lg"
        loading="lazy"
        src={whoWeAreImg}
        alt="Who we are?"
      />
      <div className="md:w-3/5 flex flex-col gap-5">
        <h2 className="text-3xl text-pure-greys-700 font-bold pl-3 py-3 border border-y-0 border-r-0 border-l-[0.4rem] border-l-caribbeangreen-400 flex items-center">
          Who We Are?
        </h2>
        <p className="text-pure-greys-500 font-medium text-sm text-justify">
          Our customers have depended on Solution Edge to help ensure the
          quality and safety of their products, processes, and systems.
        </p>
        <p className="text-pure-greys-500 font-medium text-sm text-justify">
          We go beyond testing, inspecting, and certifications; we are a Total
          Quality Assurance provider to industries across different sectors.
          Through our network and industry-leading technical expertise, we
          provide innovative and bespoke Assurance, Testing, Inspection,
          Certification, training, and Advisory services to customers.
        </p>
        <button
          className="self-start px-6 py-2 bg-caribbeangreen-400 text-white rounded hover:bg-caribbeangreen-500"
          onClick={() =>
            handleNavigation(navigate, "who-we-are-detailed", "who-we-are")
          }
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
