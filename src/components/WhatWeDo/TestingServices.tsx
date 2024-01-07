import { classNames } from "../../utils/stringManipulation";

const TestingServices = () => {
  const paraStyles =
    "font-medium text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <section
      id="testing-services"
      className="grid md:grid-cols-2 lg:grid-cols-3 md:items-center mx-auto max-w-7xl"
    >
      {/* left section */}
      <div className="px-4 lg:col-span-2">
        <h1 className="text-3xl font-bold text-center md:text-left">
          TESTING SERVICES
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

        <p className={classNames(paraStyles)}>
          Our testing services provide the data you need to optimize the
          production process and get your product to market quickly and
          economically. Our testing and certification support services support
          the quality, performance, regulatory compliance, safety, benchmarking,
          evaluation, validation, analysis, and other requirements for{" "}
          <span className={classNames(underlinedStyles)}>
            products, components, raw materials, sites, and facilities
          </span>
          .
        </p>

        <p className={classNames(paraStyles)}>
          As regulations change and technology is created or innovated, our
          knowledge and industry expertise ensure your products and business are
          prepared to meet evolving demands.
        </p>

        <p className={classNames(paraStyles)}>
          We help you bring your product to market quickly, responsibly, and
          economically to keep your business continually moving ahead.
        </p>
      </div>

      {/* cards section */}
      <div className="grid gap-4 px-4">
        {/* card */}
        <div className="p-5 bg-yellow-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <h1 className="font-extrabold">QUALITY AND COMPLIANCE</h1>
          <p className="mt-5 text-[0.9rem] font-medium leading-6">
            Quality Assurance & Regulatory Compliance <br /> Our rigorous
            procedures ensure your products not only meet but exceed industry
            standards. We keep you ahead of regulatory changes, guaranteeing
            compliance with evolving global standards.
          </p>
        </div>

        <div className="p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <h1 className="font-extrabold">PERFORMANCE AND SAFETY</h1>
          <p className="mt-5 text-[0.9rem] font-medium leading-6">
            Performance Evaluation & Safety Assurance <br /> Thorough testing is
            conducted to optimize product performance, ensuring functionality
            and durability. Additionally, our rigorous safety analysis mitigates
            risks, upholding the safety of your offerings.
          </p>
        </div>

        <div className="p-5 bg-yellow-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <h1 className="font-extrabold">VALIDATION AND EFFICIENCY</h1>
          <p className="mt-5 text-[0.9rem] font-medium leading-6">
            Benchmarking, Validation & Efficiency <br /> We provide precise
            benchmarking and validation processes, ensuring product efficacy and
            compliance. Our approach focuses on efficiency to streamline the
            validation of your products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestingServices;
