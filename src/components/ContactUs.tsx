import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { classNames } from "@/utils/stringManipulation";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const env = import.meta.env;
const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_COMPANY_EMAIL,
  VITE_COMPANY_NAME,
} = env;

const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Minimum length should be 10" })
    .max(13, { message: "Maximum length should be 13" }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  message: z.string().min(1, { message: "Message is required." }),
});

type Inputs = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    toast.loading("Sending your message. Please wait.");
    const emailObj = {
      sender_phone: data.phoneNumber,
      sender_name: data.name,
      sender_email: data.email,
      sender_message: data.message,
      reply_to: data.email,
      receiver_email: VITE_COMPANY_EMAIL,
      receiver_name: VITE_COMPANY_NAME,
    };
    const serviceID = VITE_EMAILJS_SERVICE_ID;
    const templateID = VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceID, templateID, emailObj, publicKey);
      toast.dismiss();
      toast.success(
        `Your message has been sent succesfully. 
      We will get back to you soon.`
      );
    } catch (error: unknown) {
      console.error("error: ", error);
      toast.dismiss();
      toast.error(
        `Sorry your message was not sent successfully. 
          Please click the icons on the bottom of the website to contact us instead.`
      );
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(
        {
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
        },
        { keepDefaultValues: true }
      );
    }
  }, [formState, reset]);

  return (
    <section id="contact-us">
      <Toaster />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 p-6">
        <h1 className="text-center text-pure-greys-600 text-4xl font-bold">
          Get In Touch
        </h1>
        <p className="mt-3 text-center text-base font-medium text-pure-greys-300">
          We make Global Quality Possible: Our assurance services exceed
          standards, ensuring your products thrive in diverse markets, meeting
          regulatory and industry demands.
        </p>
      </div>

      <div className="mx-auto mt-12 w-[90%] max-w-5xl p-3 flex flex-col md:flex-row justify-between shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg">
        <div className="md:w-1/3 bg-caribbeangreen-500 pt-6 rounded-lg">
          <h1 className="text-2xl text-white px-6 font-semibold text-center md:text-left">
            Contact Information
          </h1>
          <p className="px-6 pt-2 text-pure-greys-50 text-[0.8rem] font-medium leading-7 tracking-wide text-center md:text-left">
            We ensure Global Standards: Empowering Diverse Markets with Superior
            Assurance.
          </p>
          <div className="mt-6 mb-6 px-6 flex gap-x-4 relative ml-0 xs:ml-[20%] sm:ml-[30%] md:ml-0 text-white text-[0.9rem]">
            <HiBuildingOffice2 className="h-6 w-6" />
            <p>SOLUTION EDGE</p>
          </div>
          <div className="mb-6 px-6 flex gap-x-4 relative ml-0 xs:ml-[20%] sm:ml-[30%] md:ml-0 text-white text-[0.9rem]">
            <FaLocationDot className="h-6 w-6" />
            <p>Uttar Pradesh, India</p>
          </div>
          <div className="mb-6 px-6 flex gap-x-4 relative ml-0 xs:ml-[20%] sm:ml-[30%] md:ml-0 text-white text-[0.9rem]">
            <FaPhone className="h-6 w-6" />
            <p>+918800556980</p>
          </div>
          <div className="mb-6 px-6 flex gap-x-4 relative ml-0 xs:ml-[20%] sm:ml-[30%] md:ml-0 text-white text-[0.9rem]">
            <MdEmail className="h-6 w-6" />
            <p className="text-wrap break-all">solution.edge.info@gmail.com</p>
          </div>
        </div>

        <div className="md:w-2/3 py-6 px-8 md:px-[4rem]">
          <h1 className="text-2xl text-caribbeangreen-500 font-semibold text-center md:text-left">
            Lets Talk
          </h1>
          <p className="mt-2 mb-4 text-sm font-medium text-pure-greys-600 leading-7 tracking-wide text-center md:text-left">
            We'd love to hear from you.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start"
          >
            <input
              type="text"
              placeholder="Your Name"
              className={classNames(
                "w-full bg-pure-greys-10 rounded-lg px-4 py-2 outline outline-1",
                `${
                  errors.name
                    ? "bg-red-100 outline-red-300"
                    : "outline-pure-greys-50"
                }`
              )}
              {...register("name")}
            />
            <p className="min-h-[1rem] text-sm text-red-500 font-semibold">
              {errors.name?.message}
            </p>

            <input
              type="text"
              placeholder="Your Phone Number"
              className={classNames(
                "w-full bg-pure-greys-10 rounded-lg px-4 py-2 mt-4 outline outline-1",
                `${
                  errors.phoneNumber
                    ? "bg-red-100 outline-red-300"
                    : "outline-pure-greys-50"
                }`
              )}
              {...register("phoneNumber")}
            />
            <p className="min-h-[1rem] text-sm text-red-500 font-semibold">
              {errors.phoneNumber?.message}
            </p>

            <input
              type="email"
              placeholder="Your Email Address"
              className={classNames(
                "w-full bg-pure-greys-10 rounded-lg px-4 py-2 mt-4 outline outline-1",
                `${
                  errors.email
                    ? "bg-red-100 outline-red-300"
                    : "outline-pure-greys-50"
                }`
              )}
              {...register("email")}
            />
            <p className="min-h-[1rem] text-sm text-red-500 font-semibold">
              {errors.email?.message}
            </p>

            <textarea
              placeholder="You Message"
              className={classNames(
                "w-full bg-pure-greys-10 rounded-lg px-4 py-2 mt-4 outline outline-1",
                `${
                  errors.message
                    ? "bg-red-100 outline-red-300"
                    : "outline-pure-greys-50"
                }`
              )}
              {...register("message")}
            ></textarea>
            <p className="min-h-[1rem] text-sm text-red-500 font-semibold">
              {errors.message?.message}
            </p>

            <button
              type="submit"
              className="bg-caribbeangreen-500 text-white rounded-lg px-16 py-2 text-base mt-6 mx-auto md:mx-0"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
