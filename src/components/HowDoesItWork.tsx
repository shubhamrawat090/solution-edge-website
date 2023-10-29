const HowDoesItWork = () => {
  return (
    <section
      id="howDoesItWork"
      aria-label="Working process explanation"
      className="relative overflow-hidden bg-caribbeangreen-400 pb-28 pt-20 sm:py-32"
    >
      <div className="max-w-2xl mx-auto text-center xl:max-w-[80%]">
        <h2 className="font-inter font-medium text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          How does it work?
        </h2>
        <p className="mt-6 text-xl tracking-tight text-caribbeangreen-5">
          It’s free and easy to post a request for inspection. Simply fill in a
          title, description and location and competitive bids come within
          minutes. Follow these 4 easy steps to get going.
        </p>

        <div className="max-w-[80%] flex justify-around mt-10 mx-auto">
          <div className="flex flex-col">
            <p className="text-white text-2xl font-semibold">Step 1</p>
            <div className="flex flex-col justify-center items-center border-2 text-white px-8 py-6 w-[200px] mt-5 flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 aspect-square"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl font-medium">
                Create your account free of charge
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-white text-2xl font-semibold">Step 2</p>
            <div className="flex flex-col justify-center items-center border-2 text-white px-8 py-6 w-[200px] mt-5 flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 aspect-square"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-xl font-medium">
                Post your request for inspection
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-white text-2xl font-semibold">Step 3</p>
            <div className="flex flex-col justify-center items-center border-2 text-white px-8 py-6 w-[200px] mt-5 flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 aspect-square"
              >
                <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-xl font-medium">
                View the offers and select the best deal
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-white text-2xl font-semibold">Step 4</p>
            <div className="flex flex-col justify-center items-center border-2 text-white px-8 py-6 w-[200px] mt-5 flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 aspect-square"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-xl font-medium">
                Pay safely online, and view your report
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
