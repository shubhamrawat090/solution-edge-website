import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";

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
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section id="contact-us">
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

      <div className="mx-auto mt-12 max-w-5xl p-3 flex justify-between shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg">
        <div className="w-1/3 bg-caribbeangreen-500 pt-6 rounded-lg">
          <h1 className="text-2xl text-white px-6 font-semibold">
            Contact Information
          </h1>
          <p className="px-6 pt-2 text-pure-greys-50 text-[0.8rem] font-medium leading-7 tracking-wide">
            We ensure Global Standards: Empowering Diverse Markets with Superior
            Assurance.
          </p>
          <div className="mt-6 mb-6 px-6 flex gap-x-4 items-center text-white text-[0.9rem]">
            <HiBuildingOffice2 className="h-6 w-6" />
            <p>SOLUTION EDGE</p>
          </div>
          <div className="mb-6 px-6 flex gap-x-4 items-center text-white text-[0.9rem]">
            <FaLocationDot className="h-6 w-6" />
            <p>Uttar Pradesh, India</p>
          </div>
          <div className="mb-6 px-6 flex gap-x-4 items-center text-white text-[0.9rem]">
            <FaPhone className="h-6 w-6" />
            <p>+918800556980</p>
          </div>
          <div className="mb-6 px-6 flex gap-x-4 items-center text-white text-[0.9rem]">
            <MdEmail className="h-6 w-6" />
            <p>solution.edge.info@gmail.com</p>
          </div>
        </div>

        <div className="w-2/3 py-6 px-[4rem]">
          <h1 className="text-2xl text-caribbeangreen-500 font-semibold">
            Lets Talk
          </h1>
          <p className="mt-2 mb-4 text-sm font-medium text-pure-greys-600 leading-7 tracking-wide">
            We'd love to hear from you.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 items-start"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
              {...register("name")}
            />

            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
              {...register("phoneNumber", {
                min: {
                  value: 10,
                  message: "Min length is 10.",
                },
                max: {
                  value: 10,
                  message: "Max length is 10.",
                },
              })}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber?.message}</p>}

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
              {...register("email", { required: "This is required." })}
            />
            {errors.email && <p>{errors.email?.message}</p>}

            <textarea
              placeholder="You Message"
              className="w-full bg-pure-greys-10 rounded-lg px-4 py-2"
              {...register("message")}
            ></textarea>
            <button
              type="submit"
              className="bg-caribbeangreen-500 text-white rounded-lg px-16 py-2 text-base"
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
