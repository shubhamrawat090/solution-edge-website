import { IndustryType } from "./IndustriesWeCover";

const IndustryCard = ({ id, text, heading, img }: IndustryType) => {
  return (
    <>
      <div
        className="w-[25rem] aspect-[3/2] transition-all relative group cursor-pointer hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:rounded-lg overflow-hidden"
        id={id}
      >
        <img
          src={img}
          alt={heading}
          loading="lazy"
          className="h-full w-full transition-all duration-200 group-hover:scale-110 group-hover:-rotate-3"
        />
        <div className="absolute bottom-0 left-0 right-0 text-white bg-[#21212198] group-hover:bg-[#212121c0] h-[2rem] sm:h-[2.5rem] group-hover:h-full overflow-hidden flex flex-col gap-2 items-center group-hover:justify-center transition-height duration-500">
          <h1 className="text-xl sm:text-2xl text-center font-semibold">
            {heading}
          </h1>
          <p className="text-center text-xs sm:text-base">{text}</p>
        </div>
      </div>
    </>
  );
};

export default IndustryCard;
