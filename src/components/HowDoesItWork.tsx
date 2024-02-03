import { useNavigate } from "react-router-dom";
import { processSteps, heading, subHeading } from "@/constants/howDoesItWork";
import Step from "@/components/Step";
import { handleNavigation } from "@/services/navigationService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { classNames } from "@/utils/stringManipulation";
import { howDoesItWorkBgGradient } from "@/constants/colors";

const HowDoesItWork = () => {
  const navigate = useNavigate();

  return (
    <section
      id="howDoesItWork"
      aria-label="Working process explanation"
      className={classNames(
        "relative overflow-hidden pb-28 pt-20 sm:py-32 min-h-screen",
        howDoesItWorkBgGradient
      )}
    >
      <div className="mx-auto text-center max-w-7xl w-[70%] sm:w-[75%]">
        <h2 className="font-medium text-3xl tracking-tight text-center text-white sm:text-4xl md:text-5xl">
          {heading}
        </h2>
        <p className="max-w-[850px] px-2 mx-auto mt-6 text-xl text-center tracking-tight text-caribbeangreen-5">
          {subHeading}
        </p>

        <div className="w-full flex flex-wrap justify-around gap-5 mt-10 mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[70%] sm:w-[80%] md:w-[90%] lg:w-[95%] xl:w-full mx-auto"
          >
            <CarouselContent>
              {processSteps.map((step) => (
                <CarouselItem
                  key={step.id}
                  className="md:basis-1/3 lg:basis-1/4 p-5 mx-auto min-w-[15rem]"
                >
                  <Step title={step.title} icon={step.icon} text={step.text} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <button
            className="group cursor-pointer inline-flex items-center justify-center rounded-full py-4 px-8 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-caribbeangreen-5 active:bg-caribbeangreen-25 active:text-slate-600 focus-visible:outline-white mt-20"
            onClick={() => handleNavigation(navigate, "contact-us")}
          >
            Need an inspection quote?
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
