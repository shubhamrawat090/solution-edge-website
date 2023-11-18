import { Disclosure } from "@headlessui/react";
import { termsArray } from "../constants/termsAndConditions";
import { FaPlus, FaMinus } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <h1 className="text-center mt-8 mb-10 text-3xl tracking-tight text-pure-greys-900 sm:text-4xl">
        General Terms and Conditions for Services
      </h1>
      {termsArray.map((term) => (
        <Disclosure
          as="div"
          key={term.id}
          className={
            "mb-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] text-justify"
          }
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 w-full flex items-center gap-x-5 bg-pure-greys-25">
                <span className="ml-2">{open ? <FaMinus /> : <FaPlus />}</span>
                <span>
                  {term.id}. {term.heading}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel as="ul" className="text-gray-500 space-y-5 p-4">
                {term.points.map((point, pidx) =>
                  typeof point === "string" ? (
                    // Render string points
                    <li
                      key={pidx}
                      className=" text-sm tracking-tight text-pure-greys-700"
                    >
                      {point}
                    </li>
                  ) : (
                    // Render object points
                    <li
                      key={point.pid}
                      className=" text-sm tracking-tight text-pure-greys-700"
                    >
                      <div className="flex gap-x-3 ">
                        <span>{point.pid}</span> <span>{point.ptext}</span>
                      </div>

                      {point.psubtexts && (
                        <ul className="mt-2 space-y-2">
                          {point.psubtexts.map((subpoint) => (
                            <li
                              key={subpoint.psid}
                              className="ml-6 flex gap-x-2 "
                            >
                              <span>({subpoint.psid})</span>{" "}
                              <span>{subpoint.pstext}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default TermsAndConditions;
