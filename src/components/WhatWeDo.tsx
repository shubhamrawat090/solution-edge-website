import { useNavigate, useParams } from "react-router-dom";
import {
  WhatWeDoType,
  getWhatWeDo,
  replaceTextWithSpan,
} from "../constants/whatWeDo";
import { useEffect, useState } from "react";
import { classNames } from "../utils/stringManipulation";
import droneImg1 from "../assets/drone-img-1.webp";
import droneImg2 from "../assets/drone-img-2.webp";
import droneImg3 from "../assets/drone-img-3.webp";
import ContactUs from "./ContactUs";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [data, setData] = useState<WhatWeDoType>(null);
  useEffect(() => {
    const data = getWhatWeDo(type);
    if (!data) {
      navigate("/not-found");
    } else {
      setData(data);
    }
  }, [type, navigate]);

  if (!data) {
    return null;
  }

  const getImage = (imgName: string | undefined): string | undefined => {
    switch (imgName) {
      case "drone-img-1.webp":
        return droneImg1;
      case "drone-img-2.webp":
        return droneImg2;
      case "drone-img-3.webp":
        return droneImg3;
      default:
        return undefined;
    }
  };

  const paraStyles =
    "font-normal leading-[1.7] text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <>
      <section
        id={data.id}
        className={classNames(
          "grid justify-center mx-auto max-w-7xl",
          `${data.cards ? "md:grid-cols-2 lg:grid-cols-3" : null}`
        )}
      >
        {/* left section */}
        <div
          className={classNames(
            "px-4 max-w-4xl",
            `${data.cards ? "lg:col-span-2" : null}`
          )}
        >
          {data.heading && (
            <h1 className="text-3xl font-bold text-center md:text-left">
              {data.heading}
            </h1>
          )}

          {/* separator */}
          <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

          {data.text &&
            data.text
              .filter((text) => text.text)
              .map((text) => (
                <p
                  key={text.id}
                  id={text.id}
                  className={classNames(paraStyles)}
                  dangerouslySetInnerHTML={{
                    __html: replaceTextWithSpan(text.text, underlinedStyles),
                  }}
                ></p>
              ))}

          {data.subtopics &&
            data.subtopics.map((subtopic) => (
              <div key={subtopic.id} id={subtopic.id}>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left">
                  {!subtopic.link && subtopic.heading}
                  {subtopic.link && (
                    <a
                      href={subtopic.link}
                      target="_blank"
                      className="underline underline-offset-4"
                      title={subtopic.link}
                    >
                      {subtopic.heading}
                    </a>
                  )}
                </h2>

                {subtopic.paragraphs.map((subpara) => (
                  <div key={subpara.id} id={subpara.id}>
                    {!subpara.subtexts && (
                      <p
                        className={classNames(paraStyles)}
                        dangerouslySetInnerHTML={{
                          __html: replaceTextWithSpan(
                            subpara.text,
                            classNames(underlinedStyles, "font-bold")
                          ),
                        }}
                      ></p>
                    )}
                    {subpara.subtexts && (
                      <>
                        <h3
                          className="text-xl font-bold mt-6 mb-3 text-center md:text-left"
                          dangerouslySetInnerHTML={{
                            __html: replaceTextWithSpan(
                              subpara.text,
                              underlinedStyles
                            ),
                          }}
                        ></h3>
                        <ul className="list-disc list-inside mb-6">
                          {subpara.subtexts.map((subtext) => (
                            <li
                              className={classNames(
                                paraStyles,
                                "mb-2 font-normal"
                              )}
                              key={subtext.id}
                              id={subtext.id}
                              dangerouslySetInnerHTML={{
                                __html: replaceTextWithSpan(
                                  subtext.text,
                                  classNames(underlinedStyles, "font-bold")
                                ),
                              }}
                            ></li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* cards section */}
        {data.cards && (
          <div className="flex flex-col gap-4 px-4">
            {data.cards.map((card, index) => (
              <div
                key={card.id}
                id={card.id}
                className={classNames(
                  "p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left",
                  `${index % 2 === 0 ? "bg-yellow-5" : ""}`
                )}
              >
                {!card.image && (
                  <>
                    <h1 className="font-extrabold">{card.heading}</h1>
                    <p className={`mt-5 text-[0.9rem] font-medium leading-6`}>
                      {card.text}
                    </p>
                  </>
                )}
                {card.image && (
                  <>
                    <img
                      className="w-full"
                      src={getImage(card.image)}
                      alt={card.image}
                      loading="lazy"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      <ContactUs />
    </>
  );
};

export default WhatWeDo;
