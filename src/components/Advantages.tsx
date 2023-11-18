import { advantages } from "../constants/advantages";
import AdvantageCard from "./AdvantageCard";

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

        <div className="grid text-center sm:text-left sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 place-content-center">
          {advantages.map((item) => (
            <AdvantageCard
              key={item.id}
              heading={item.heading}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
