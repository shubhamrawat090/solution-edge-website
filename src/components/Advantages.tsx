import { BsCurrencyDollar } from "react-icons/bs";
import { GiTie } from "react-icons/gi";
import { MdOutlineElectricBolt } from "react-icons/md";

const Advantages = () => {
  return (
    <section id="advantages" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-inter text-3xl tracking-tight text-pure-greys-900 sm:text-4xl">
            Advantages of our service
          </h2>
          <p className="mt-4 text-lg tracking-tight text-pure-greys-700">
            Vetted pros, lightning responses, top value. Expert inspection,
            testing, certification, consultancy—no surprises, just efficient
            solutions.
          </p>
        </div>

        <div className="grid text-center sm:text-left sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 place-content-center">
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md">
            <div className="w-max p-1 rounded-lg bg-caribbeangreen-400 text-white mx-auto sm:ml-0">
              <GiTie className="h-9 w-9" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-caribbeangreen-600">
              Professionals only
            </h3>
            <p className="mt-2 font-display text-md text-pure-greys-900">
              Only professional outfits are registered on our platform. Vetted
              and screened, so you don't get any nasty surprises when selecting
              your quality control provider!
            </p>
          </div>

          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md">
            <div className="w-max p-1 rounded-lg bg-caribbeangreen-400 text-white mx-auto sm:ml-0">
              <MdOutlineElectricBolt className="h-9 w-9" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-caribbeangreen-600">
              Lightning quick
            </h3>
            <p className="mt-2 font-display text-md text-pure-greys-900">
              Save days and hundreds of e-mails! All you need to do is to post
              ONE request for inspection, and you'll get lightning quick
              multiple offers, most often within minutes!
            </p>
          </div>

          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md">
            <div className="w-max p-1 rounded-lg bg-caribbeangreen-400 text-white mx-auto sm:ml-0">
              <BsCurrencyDollar className="h-9 w-9" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-caribbeangreen-600">
              Best value for money
            </h3>
            <p className="mt-2 font-display text-md text-pure-greys-900">
              Get the best value for money with every offer! Pick the closest
              and most competent quality control company to your inspection
              site; why pay for someone else's travel time?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
