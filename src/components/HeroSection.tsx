import { useNavigate } from "react-router-dom";
import { handleNavigation } from "@/services/navigationService";

const HeroSection = () => {
  const subcardContent = [
    {
      id: "heroCard_1",
      heading: "Quality Commitment",
      text: "Elevating your standards through collaborative support.",
    },
    {
      id: "heroCard_2",
      heading: "Your Trusted Partner",
      text: "Committed to delivering excellence in every service.",
    },
    {
      id: "heroCard_3",
      heading: "Comprehensive Solutions",
      text: "Driving your success with our comprehensive approach.",
    },
  ];
  const navigate = useNavigate();
  return (
    <main className="min-h-[85vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 md:pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-pure-greys-900 sm:text-7xl">
          <span className="relative whitespace-nowrap text-caribbeangreen-400">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-caribbeangreen-25/60"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">Quality Assured</span>
          </span>{" "}
          Excellence Delivered
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-xl tracking-tight text-pure-greys-900">
          Through On-Spot Inspections, Professional Testing, and Certification
          Services.
        </p>
        <div className="mt-20 flex flex-col xs:flex-row xs:items-center xs:justify-center gap-6">
          <button
            onClick={() => handleNavigation(navigate, "contact-us")}
            className="transition-all group inline-flex flex-col items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-caribbeangreen-400 text-white hover:bg-caribbeangreen-500"
          >
            <div className="font-semibold">GET IN TOUCH</div>
          </button>
          <button
            onClick={() =>
              handleNavigation(navigate, "ourCommitmentsForQuality")
            }
            className="transition-all group inline-flex flex-col ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-pure-greys-200 text-pure-greys-700 hover:text-pure-greys-900 hover:ring-pure-greys-600 active:bg-pure-greys-25"
          >
            <div className="font-semibold">ABOUT US</div>
          </button>
        </div>

        <div className="mt-20 xs:mt-36 lg:mt-38 flex flex-col gap-10 xs:gap-0 xs:flex-row xs:justify-center">
          {subcardContent.map((item, index) => (
            <div key={item.id} className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-base sm:text-xl lg:text-2xl leading-5 font-bold bg-gradient-to-r from-[#4ca56a] to-[#03587d] bg-clip-text text-transparent">
                  {item.heading}
                </h3>
                <p className="text-sm lg:text-base font-medium text-pure-greys-500 mt-2 leading-4 lg:leading-5 max-w-[30ch] text-center">
                  {item.text}
                </p>
              </div>
              {index < subcardContent.length - 1 && (
                <div className="hidden xs:block w-[2px] h-[5rem] lg:h-[4rem] bg-[#56b35a] flex-grow-0 flex-shrink-0 mx-5 sm:mx-8 lg:mx-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
