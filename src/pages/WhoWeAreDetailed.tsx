import ContactUs from "@/components/ContactUs";
import IndustriesWeCover from "@/components/IndustriesWeCover";
import { classNames } from "@/utils/stringManipulation";

const WhoWeAreDetailed = () => {
  const textContainer = "max-w-5xl mx-auto";

  return (
    <>
      <div className="container mx-auto px-4 py-8" id="who-we-are-detailed">
        <h1 className="text-4xl font-bold text-center">
          Who We Are: S<span className="text-caribbeangreen-400">olution</span>{" "}
          E<span className="text-caribbeangreen-400">dge</span>
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto"></div>

        <div
          className={classNames(
            "bg-white rounded-lg p-6 mb-8 text-justify",
            textContainer
          )}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Our Commitment
          </h2>
          <p className="text-pure-greys-700 mb-6">
            Our customers have depended on Solution Edge to help ensure the
            quality and safety of their products, processes, and systems.
          </p>
          <p className="text-pure-greys-700 mb-2">
            We go beyond testing, inspecting, and certifications; we are a Total
            Quality Assurance provider to industries across different sectors.
            Through our network and industry-leading technical expertise, we
            provide innovative and bespoke Assurance, Testing, Inspection,
            Certification, trainings, and Advisory services to customers. We
            provide a systemic approach to supporting our customers’ Quality
            Assurance efforts in each of the areas of their operations.
          </p>
          <p className="text-pure-greys-700">
            Solution Edge is committed to delivering Total Quality Assurance
            expertise 24 hours a day, 7 days a week with our industry-winning
            processes and customer-centric culture. Whether your business is
            local or global, we can help ensure that your products meet quality,
            health, environmental, safety, and social accountability standards
            for any market around the world. We hold extensive global
            accreditations, recognitions, and agreements, and our knowledge of
            and expertise in overcoming regulatory, market, and supply chain
            hurdles is unrivaled.
          </p>
          <p className="text-pure-greys-700 mt-2 mb-4 font-bold">
            Solution Edge can sharpen your competitive edge:
          </p>
          <ul className="ml-4 mb-4 list-disc list-inside text-pure-greys-700">
            <li>
              With reliable testing and certification for faster regulatory
              approval
            </li>
            <li>Through rapid, efficient entry to any market in the world</li>
            <li>With Total Quality Assurance across your supply chain</li>
            <li>
              By reducing cost and minimizing health, safety, and security risks
            </li>
            <li>By becoming a TRUSTED BRAND</li>
          </ul>
          <p className="text-pure-greys-700 mb-2">
            We bring our deep knowledge and diverse resources so that Business
            can flourish, moving our world forward.
          </p>
          <p className="text-pure-greys-700 mb-2">
            We innovate relentlessly to create solutions that will deliver
            abundant high-quality food, now and for the future.
          </p>
          <p className="text-pure-greys-700 mb-2">
            We grow by working together, embracing diversity and collaboration
            to build one company and reach out across the food system, creating
            shared value.
          </p>
          <p className="text-pure-greys-700 mb-2">
            We always do what's right, maintaining high ethical standards and
            conducting business safely and transparently.
          </p>
          <p className="text-pure-greys-700 mb-2">
            We embrace safety and the environment in all we do.
          </p>
        </div>

        <div
          className={classNames(
            "bg-white rounded-lg p-6 mb-8 text-justify",
            textContainer
          )}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Corporate Governance
          </h2>
          <p className="text-pure-greys-700">
            The Company believes in responding to the expectations of its
            stakeholders – shareholders, customers, local community, and
            employees – by increasing its corporate value to become a proud
            corporate group committed to social and economic development and
            safeguarding the global environment by conducting fair and upright
            corporate activities in accordance with the spirit grounded in{" "}
            <strong>“Fairness, Innovation, and Harmony.”</strong> To realize
            this, we have been making efforts to enhance corporate governance as
            the platform for ensuring soundness, transparency, and efficiency of
            management.
          </p>
        </div>

        <div
          className={classNames(
            "bg-white rounded-lg p-6 mb-8 text-justify",
            textContainer
          )}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Our Team</h2>
          <p className="text-pure-greys-700">
            Our expert committed team put our shared beliefs into action – every
            day. Together, we combine innovation and collective knowledge to
            create the extraordinary.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8">
          <IndustriesWeCover />
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default WhoWeAreDetailed;
