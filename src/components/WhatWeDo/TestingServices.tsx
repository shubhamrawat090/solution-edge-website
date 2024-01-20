import { classNames } from "../../utils/stringManipulation";
import droneImg1 from "../../assets/drone-img-1.webp";
import droneImg2 from "../../assets/drone-img-2.webp";
import droneImg3 from "../../assets/drone-img-3.webp";

// 1. Inspections and Supply chain services
const InspectionsAndSupplyChainServices = () => {
  const paraStyles =
    "font-medium text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <section
      id="inspections-supply-chain-services"
      className="flex justify-center mx-auto max-w-7xl"
    >
      {/* left section */}
      <div className="px-4 lg:max-w-4xl">
        <h1 className="text-3xl font-bold text-center md:text-left">
          INSPECTIONS AND SUPPLY CHAIN SERVICES
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

        {/* Inspections */}
        <div>
          <h2 className="text-xl font-bold mb-2 mt-4">Inspections</h2>
          <p className={paraStyles}>
            Solution Edge’s diverse range of inspection services can provide
            trusted support for your products, projects, and processes.
          </p>
          <p className={paraStyles}>
            Independent third-party inspections help clients around the world
            protect their financial, branding, and legal interests throughout
            the entire supply chain - from raw materials and finished goods to
            plant facilities and assets.
          </p>
          <p className={paraStyles}>
            Inspections help minimize the risk of defective products by ensuring
            they meet both customer standards and industry and government
            regulations. This serves to protect your business interests, help
            manage your risk, and ensure quality products are manufactured and
            delivered to their final destination at the specifications of the
            customer.
          </p>
          <p className={paraStyles}>
            Experienced inspectors help identify products and shipments which
            may contain non-standard or non- compliant components and materials.
          </p>

          {/* Support for plant facilities */}
          <p className={paraStyles}>
            We also support the life management of plant facilities such as
            power plants and oil refineries with inspection and testing,
            ensuring that your assets are operating safely and reliably.
          </p>
        </div>

        {/* Supply Chain Services */}
        <div>
          <h2 className="text-xl font-bold mb-2 mt-6">Supply Chain Services</h2>
          <p className={paraStyles}>
            Drive quality, sustainability, integrity, and transparency across
            your supply chain through customized audits and supply chain
            assurance services from Solution Edge.
          </p>
          <p className={paraStyles}>
            As supply chains become more internationalized, they naturally
            become more complex, making them increasingly prone to disruptions
            caused by a lack of supplier visibility. Weak points in your supply
            chain and undetected issues can impact cost and time and cause
            reputational damage and shareholder and stakeholder distrust.
          </p>
          <p className={paraStyles}>
            Our supply chain assurance services provide auditing and
            verification across a multitude of areas and content. Whether using
            our checklists, customized programs and/or industry-driven
            initiatives, we are a trusted partner for deploying your program.
          </p>
          <ul className="list-disc ml-6">
            <li className={underlinedStyles}>Brand audits:</li>
            <p className={paraStyles}>
              ensure that your brand is correctly represented along the full
              supply and value chains.
            </p>

            <li className={underlinedStyles}>Supplier audits:</li>
            <p className={paraStyles}>
              maintain best practices while minimizing business disruption.
            </p>

            <li className={underlinedStyles}>
              Industry/product stewardship audits:
            </li>
            <p className={paraStyles}>
              ensure that member companies adhere to your program’s benchmarks.
            </p>
          </ul>
          <p className={paraStyles}>
            We can help you manage your suppliers, conducting audits to your
            policies, international standards, and legislation. Our customized
            audits enable you to gain absolute visibility of suppliers’
            practices, domestic or worldwide.
          </p>
          {/* Additional content for Supply Chain Services */}
          {/* ... (add additional content as needed) */}
        </div>
      </div>

      {/* Right section */}
      {/* Add content for the right section, e.g., images, charts, etc. */}
    </section>
  );
};

// 2. Testing and Laboratory Management System Services
const TestingServices = () => {
  const paraStyles =
    "font-medium text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <section
      id="testing-services"
      className="flex flex-col md:flex-row justify-center mx-auto max-w-7xl"
    >
      {/* left section */}
      <div className="px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center md:text-left">
          TESTING AND LABORATORY MANAGEMENT SYSTEM SERVICES
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

        <p className={classNames(paraStyles)}>
          We know our clients need more than reliable{" "}
          <span className={underlinedStyles}>analytical results</span>; they
          need practical and innovative solutions that will contribute to making
          quality products. Adding to analytical testing and consulting, we have
          broadened our scope of scientific specialties into chemistry,
          education, certification, research, labeling, and sensory to offer a
          complete suite of services to meet our customers’ needs.
        </p>

        <p className={classNames(paraStyles)}>
          Today, we offer comprehensive solutions to support our clients at all
          stages of the laboratory, including
          <span className={underlinedStyles}>
            {" "}
            laboratory setup, trainings, accreditations
          </span>
          , and running the laboratory.
        </p>

        <p className={classNames(paraStyles)}>
          We care by asking the right questions and gathering the right team of
          experts who understand your specific needs, your market, your legal
          environment, and your chain of value. We care by working alongside you
          to come up with innovative and practical solutions for your business.
          We believe that to constantly improve our services, we need to turn
          every situation into a learning opportunity that will allow us to
          serve you better.
        </p>

        <p className={classNames(paraStyles)}>
          From routine testing to special projects, to consultation and
          training, our goal is to deliver solutions that can be trusted to
          drive business decisions. To give consistent and reliable results, we
          share the same method all over, i.e., Quality Management System
          accredited under the recognized ISO 17025 standard and other required
          approvals and certifications. Full sample-to-result traceability.
        </p>

        <p className={classNames(paraStyles)}>
          Our testing services provide the data you need to optimize the
          production process and get your product to market quickly and
          economically. We help you bring your product to market quickly,
          responsibly, and economically to keep your business continually moving
          ahead.
        </p>
      </div>

      {/* cards section */}
      <div className="flex flex-col gap-4 px-4">
        {/* card 1 */}
        <div className="p-5 bg-yellow-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <h1 className="font-extrabold">QUALITY AND COMPLIANCE</h1>
          <p
            className={`mt-5 text-[0.9rem] font-medium leading-6 ${underlinedStyles}`}
          >
            Quality Assurance & Regulatory Compliance <br /> Our rigorous
            procedures ensure your products not only meet but exceed industry
            standards. We keep you ahead of regulatory changes, guaranteeing
            compliance with evolving global standards.
          </p>
        </div>

        {/* card 2 */}
        <div className="p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <h1 className="font-extrabold">PERFORMANCE AND SAFETY</h1>
          <p className="mt-5 text-[0.9rem] font-medium leading-6">
            Performance Evaluation & Safety Assurance <br /> Thorough testing is
            conducted to optimize product performance, ensuring functionality
            and durability. Additionally, our rigorous safety analysis mitigates
            risks, upholding the safety of your offerings.
          </p>
        </div>

        {/* card 3 */}
        <div className="p-5 bg-yellow-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <h1 className="font-extrabold">VALIDATION AND EFFICIENCY</h1>
          <p
            className={`mt-5 text-[0.9rem] font-medium leading-6 ${underlinedStyles}`}
          >
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

// 3. Certifications, Training and Advisory Services
const CertificationsTrainingAdvisory = () => {
  const paraStyles =
    "font-medium text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <section
      id="certifications-training-advisory"
      className="flex flex-col md:flex-row justify-center mx-auto max-w-7xl"
    >
      {/* left section */}
      <div className="px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center md:text-left">
          Certifications, Training and Advisory Services
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Certifications:
        </h2>

        <p className={classNames(paraStyles)}>
          Certification proves your credibility to the market. To deliver that
          credibility, Solution Edge maintains extensive global accreditations
          and recognitions for our testing and certification services.
        </p>

        <p className={classNames(paraStyles)}>
          As global markets grow and expand, there are more consumers seeking
          safe, reliable, and increasingly eco-conscious products. With both
          international and local proficiency, Solution Edge brings the
          qualifications you need to get your products in front of the right
          eyes. We offer certification support that achieves market entry into a
          variety of global destinations, programs for a more eco-friendly
          environment, and also programs to verify social accountability
          compliance for both you and your suppliers.
        </p>

        {/* Additional content goes here */}

        <h2 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left">
          Why auditing and certification?
        </h2>

        <p className={classNames(paraStyles)}>
          Whichever sector your business operates in, you need the certainty
          that your services, products, and processes have been scrutinized to
          ensure that they deliver optimum performance and quality. With
          certification, you are communicating to consumers and stakeholders
          that you are operating within a proven framework to achieve customer
          satisfaction and meet regulatory requirements, health and safety
          obligations, and more.
        </p>

        {/* Additional content goes here */}

        <h2 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left">
          What are the key benefits of assessment, auditing and certification?
        </h2>

        <ul className="list-disc list-inside mb-6">
          <li>
            <span className={classNames(underlinedStyles)}>
              Continually improve results through discovering and refining
              practices
            </span>
          </li>
          <li>
            <span className={classNames(underlinedStyles)}>
              Improve processes and efficiencies
            </span>
          </li>
          <li>
            <span className={classNames(underlinedStyles)}>
              Manage risks and demonstrate proof of due diligence and compliance
            </span>
          </li>
          {/* Add more items as needed */}
        </ul>

        {/* Additional content goes here */}

        <h2 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left">
          Training
        </h2>

        <p className={classNames(paraStyles)}>
          Solution Edge offers training courses that provide the skills and
          knowledge needed to transform your people and business.
        </p>

        {/* Additional content goes here */}

        <h2 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left">
          Advisory Services
        </h2>

        <p className={classNames(paraStyles)}>
          Are you aiming to reduce costs and improve productivity in your
          operations or supply chain? With decades of audit experience across
          the globe, we understand each sector and industry’s successes and pain
          points. We transform these insights into practice with our consulting
          services, helping you to develop best practices tailored to your
          organization.
        </p>

        {/* Additional content goes here */}
      </div>

      {/* cards section (if applicable) */}
      {/* Add card components here if needed */}
    </section>
  );
};

// 4. Supply of Drone Services
const SupplyOfDroneServices = () => {
  const paraStyles =
    "font-medium text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <section
      id="supply-of-drone-services"
      className="flex flex-col md:flex-row justify-center mx-auto max-w-7xl"
    >
      {/* left section */}
      <div className="px-4 max-w-4xl flex-shrink-[2]">
        <h1 className="text-3xl font-bold text-center md:text-left">
          SUPPLY OF DRONE SERVICES
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

        <p className={paraStyles}>
          We understand the challenges faced by companies in ensuring quality
          assurance of some of the operations reason being cost, safety,
          accessibility, skilled manpower, and time limitations. Our innovative
          solution involving supply drones can revolutionize your quality of
          process and products.
        </p>

        <p className={paraStyles}>
          We provide services that are specialized in the development and
          deployment of unmanned aerial systems. We have experience in designing
          and implementing drone solutions for various industries, and we
          believe our expertise can be a game-changer.
        </p>

        {/* Why Drone Service */}
        <h2 className="text-xl font-bold mb-2 mt-4">Why Drone Service</h2>
        <ul className="list-disc ml-6">
          <li className={underlinedStyles}>Improved Safety:</li>
          <p className={paraStyles}>
            Supply drones eliminate the need for personnel to handle
            transportation tasks in hazardous areas. They can access
            difficult-to-reach locations, reducing the risk of accidents and
            injuries.
          </p>

          <li className={underlinedStyles}>Increased Efficiency:</li>
          <p className={paraStyles}>
            Drones can transport materials faster and more efficiently, reducing
            downtime and enhancing overall productivity.
          </p>

          <li className={underlinedStyles}>Cost Savings:</li>
          <p className={paraStyles}>
            Our supply drone service can significantly reduce operating costs
            associated with traditional transportation methods.
          </p>

          <li className={underlinedStyles}>Environmental Benefits:</li>
          <p className={paraStyles}>
            Drones are eco-friendly, emitting fewer greenhouse gases compared to
            traditional vehicles, and contributing to your company's
            sustainability goals.
          </p>
        </ul>

        {/* Implementation Plan */}
        <h2 className="text-xl font-bold mb-2 mt-6">Implementation Plan</h2>
        <ol className="list-decimal ml-6">
          <li className={underlinedStyles}>Needs Assessment:</li>
          <p className={paraStyles}>
            A comprehensive analysis of your specific needs and type of
            operations will be conducted to design a customized solution.
          </p>

          <li className={underlinedStyles}>Drone Development:</li>
          <p className={paraStyles}>
            We will develop specialized drones equipped with payload
            capabilities suitable for your operations.
          </p>

          <li className={underlinedStyles}>Supply with Operator:</li>
          <p className={paraStyles}>
            Trained operators will be provided for the safe operation and
            management of the supplied drones.
          </p>

          <li className={underlinedStyles}>Trial Period:</li>
          <p className={paraStyles}>
            A trial period will be initiated to test the service and make any
            necessary adjustments before full-scale deployment.
          </p>

          <li className={underlinedStyles}>Full Deployment:</li>
          <p className={paraStyles}>
            Upon successful completion of the trial, we will implement the
            supply drone service across your operations.
          </p>
        </ol>

        {/* Benefits */}
        <h2 className="text-xl font-bold mb-2 mt-6">Benefits</h2>
        <ul className="list-disc ml-6">
          <li>Enhanced safety for your personnel.</li>
          <li>Improved operational efficiency and productivity.</li>
          <li>Cost savings and reduced environmental impact.</li>
          <li>A competitive edge in the mining industry.</li>
        </ul>

        {/* Closing Statement */}
        <p className={paraStyles}>
          We are committed to providing cutting-edge solutions that can
          transform the way you operate and ensure the safety and success of
          your operations. We would be honored to collaborate with you to
          implement the supply drone service and address the unique challenges
          faced within your operations.
        </p>

        <p className={paraStyles}>
          We look forward to the opportunity to work with you and make your
          operations safer, more efficient, and more sustainable.
        </p>
      </div>

      {/* cards section */}
      <div className="flex flex-col gap-4 px-4 flex-shrink-[1]">
        {/* card 1 */}
        <div className="p-5 bg-yellow-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <img className="w-full" src={droneImg1} alt="Drone image 1" />
        </div>

        {/* card 2 */}
        <div className="p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <img className="w-full" src={droneImg2} alt="Drone image 2" />
        </div>

        {/* card 3 */}
        <div className="p-5 bg-yellow-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center md:text-left">
          <img className="w-full" src={droneImg3} alt="Drone image 3" />
        </div>
      </div>
    </section>
  );
};

// 5. Business Support
const BusinessSupport = () => {
  const paraStyles =
    "font-medium text-richblack-600 text-base mb-4 text-justify";

  const underlinedStyles =
    "underline underline-offset-2 decoration-yellow-5 decoration-[3px]";

  return (
    <section
      id="business-support"
      className="flex flex-col md:flex-row justify-center mx-auto max-w-7xl"
    >
      {/* left section */}
      <div className="px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center md:text-left">
          BUSINESS SUPPORT
        </h1>

        {/* separator */}
        <div className="h-2 w-12 bg-richblack-25 rounded-lg my-4 mx-auto md:mx-0"></div>

        <p className={classNames(paraStyles)}>
          Conscious consumers expect more than convenience. They want quality
          products and products they buy to be ethically and sustainably
          sourced, produced, and distributed. For consumer goods companies, this
          means that, in addition to enabling pervasive commerce, they need to
          tailor their strategies to cater to these preferences. This shift in
          thinking is driving massive technology investments to accelerate
          consumer-first innovation, build resilient and responsible supply
          chains, and personalize experiences.
        </p>

        <p className={classNames(paraStyles)}>
          We cater in facilitating multi-industry sale, purchase, and supply of
          raw materials, finished products, and Manpower.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left">
          Supply Chain Assurance
        </h2>

        <p className={classNames(paraStyles)}>
          Drive quality, sustainability, integrity, and transparency across your
          supply chain through customized audits and supply chain assurance
          services from Solution Edge.
        </p>

        <p className={classNames(paraStyles)}>
          As supply chains become more internationalized, they naturally become
          more complex, making them increasingly prone to disruptions caused by
          a lack of supplier visibility. Weak points in your supply chain and
          undetected issues can impact cost and time and cause reputational
          damage and shareholder and stakeholder distrust.
        </p>

        <p className={classNames(paraStyles)}>
          Our supply chain assurance services provide auditing and verification
          across a multitude of areas and content. Whether using our checklists,
          customized programs and/or industry-driven initiatives, we are a
          trusted partner for deploying your program.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-center md:text-left">
          We offer you:
        </h3>

        <ul className="list-disc list-inside mb-6">
          <li>
            <span className={classNames(underlinedStyles)}>Brand audits:</span>{" "}
            ensure that your brand is correctly represented along the full
            supply and value chains.
          </li>
          <li>
            <span className={classNames(underlinedStyles)}>
              Supplier audits:
            </span>{" "}
            maintain best practices while minimizing business disruption.
          </li>
          <li>
            <span className={classNames(underlinedStyles)}>
              Industry/product stewardship audits:
            </span>{" "}
            ensure that member companies adhere to your program’s benchmarks.
          </li>
        </ul>

        {/* Additional content goes here */}
      </div>

      {/* cards section (if applicable) */}
      {/* Add card components here if needed */}
    </section>
  );
};

// export default InspectionsAndSupplyChainServices;
// export default TestingServices;
// export default CertificationsTrainingAdvisory;
// export default SupplyOfDroneServices;
export default BusinessSupport;
