import commitmentQualityImg from "@/assets/quality-commitment.webp";

const OurCommitmentsForQuality = () => {
  return (
    <div
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 flex flex-col-reverse md:flex-row items-center gap-x-20 gap-y-5"
      id="ourCommitmentsForQuality"
    >
      <img
        className="md:w-2/5 rounded-lg"
        loading="lazy"
        src={commitmentQualityImg}
        alt="Commitment Quality"
      />
      <div className="md:w-3/5 flex flex-col gap-5">
        <h2 className="text-3xl text-pure-greys-700 font-bold pl-3 py-3 border border-y-0 border-r-0 border-l-[0.4rem] border-l-caribbeangreen-400 flex items-center">
          Our Commitments for Quality.
        </h2>
        <p className="text-pure-greys-500 font-medium text-sm text-justify">
          The Solution Edge is committed to provide the highest quality
          services, accurate results in time and expert advice by its highly
          qualified staff.
        </p>
        <p className="text-pure-greys-500 font-medium text-sm text-justify">
          The reliability and accuracy of its data help customers make adequate
          decisions and meet their increasingly stringent quality and safety
          standards and the expanding demands of regulatory authorities around
          the world.
        </p>
      </div>
    </div>
  );
};

export default OurCommitmentsForQuality;
