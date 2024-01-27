import { advantages } from "../constants/advantages";
import AdvantageCard from "./AdvantageCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Advantages = () => {
  return (
    <section id="advantages" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight text-pure-greys-900 sm:text-4xl">
            Advantages of our service
          </h2>
          <p className="mt-4 text-lg tracking-tight text-pure-greys-700">
            Vetted pros, lightning responses, top value. Expert inspection,
            testing, certification, consultancy—no surprises, just efficient
            solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[70%] sm:w-[80%] md:w-[90%] lg:w-[95%] xl:w-full mx-auto"
        >
          <CarouselContent>
            {advantages.map((item) => (
              <CarouselItem
                key={item.id}
                className="md:basis-1/2 lg:basis-1/3 p-5 mx-auto min-w-[15rem]"
              >
                <AdvantageCard
                  heading={item.heading}
                  text={item.text}
                  icon={item.icon}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="mr-2" />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Advantages;
