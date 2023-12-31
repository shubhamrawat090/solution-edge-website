import { Link } from "react-router-dom";
import { processSteps, heading, subHeading } from "../constants/howDoesItWork";
import Step from "./Step";
import { email } from "../constants/contact-info";

const HowDoesItWork = () => {
  const handleMailTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <section
      id="howDoesItWork"
      aria-label="Working process explanation"
      className="relative overflow-hidden bg-caribbeangreen-400 pb-28 pt-20 sm:py-32 min-h-screen"
    >
      <div className="max-w-2xl mx-auto text-center xl:max-w-[80%]">
        <h2 className="font-medium text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          {heading}
        </h2>
        <p className="max-w-[850px] px-2 mx-auto mt-6 text-xl text-center tracking-tight text-caribbeangreen-5">
          {subHeading}
        </p>

        <div className="max-w-[80%] flex flex-wrap justify-around gap-5 mt-10 mx-auto">
          {processSteps.map((step) => (
            <Step
              key={step.id}
              title={step.title}
              icon={step.icon}
              text={step.text}
            />
          ))}
        </div>

        <div>
          <Link
            to="#"
            className="group cursor-pointer inline-flex items-center justify-center rounded-full py-4 px-8 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-caribbeangreen-5 active:bg-caribbeangreen-25 active:text-slate-600 focus-visible:outline-white mt-20"
            onClick={handleMailTo}
          >
            Need and inspection quote?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
