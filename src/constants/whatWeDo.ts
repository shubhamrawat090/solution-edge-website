type Paragraph = {
  id: string;
  text?: string;
  subtexts?: Paragraph[];
};

type Subtopic = {
  id: string;
  heading?: string;
  link?: string;
  paragraphs: Paragraph[];
};

type Card = {
  id: string;
  heading?: string;
  text?: string;
  image?: string;
};

type NextPrevLink = {
  title: string;
  to: string;
  id: string;
};

export type WhatWeDoType = {
  id: string;
  heading?: string;
  prev?: NextPrevLink;
  next?: NextPrevLink;
  text?: Paragraph[];
  subtopics: Subtopic[];
  cards?: Card[];
} | null;

const InspectionsAndSupplyChainServices: WhatWeDoType = {
  id: "inspections-and-supply-chain-services",
  heading: "INSPECTIONS AND SUPPLY CHAIN SERVICES",
  next: {
    title: "TESTING AND LABORATORY MANAGEMENT SYSTEM SERVICES",
    to: "what-we-do/testing-and-laboratory-management-system-services",
    id: "testing-and-laboratory-management-system-services",
  },
  subtopics: [
    {
      id: "ISC_1",
      heading: "Inspections",
      paragraphs: [
        {
          id: "ISC_1.1",
          text: "Solution Edge's diverse range of inspection services can provide trusted support for your products, projects and processes.",
        },
        {
          id: "ISC_1.2",
          text: "Independent third-party inspections help clients around the world protect their financial, branding and legal interests throughout the entire supply chain - from raw materials and finished goods to plant facilities and assets. We offer inspection services to manufacturers, retailers, traders, plant operators, governments and other buyers and sellers of materials and products in the world's markets.",
        },
        {
          id: "ISC_1.3",
          text: "Inspections help minimize the risk of defective products by ensuring they meet both customer standards and industry and government regulations. This serves to protect your business interests, help manage your risk and ensure quality products are manufactured and delivered to their final destination at the specifications of the customer.",
        },
        {
          id: "ISC_1.4",
          text: "Experienced inspectors help identify products and shipments which may contain non-standard or non-compliant components and materials.",
        },
        {
          id: "ISC_1.5",
          text: "We also support the life management of plant facilities such as power plants and oil refineries with inspection and testing, ensuring that your assets are operating safely and reliably.",
        },
      ],
    },
    {
      id: "ISC_2",
      heading: "Supply Chain Services",
      link: "https://www.sgs.com/en/our-services/knowledge-solutions/supply-chain-assurance",
      paragraphs: [
        {
          id: "ISC_2.1",
          text: "Drive quality, sustainability, integrity and transparency across your supply chain through customized audits and supply chain assurance services from Solution Edge.",
        },
        {
          id: "ISC_2.2",
          text: "As supply chains become more internationalized, they naturally become more complex, making them increasingly prone to disruptions caused by a lack of supplier visibility. Weak points in your supply chain and undetected issues can impact cost and time, and cause reputational damage and shareholder and stakeholder distrust.",
        },
        {
          id: "ISC_2.3",
          text: "Our supply chain assurance services provide auditing and verification across a multitude of areas and content. Whether using our checklists, customized programs and/or industry-driven initiatives, we are a trusted partner for deploying your program.",
        },
        {
          id: "ISC_2.4",
          text: "We offer you:",
          subtexts: [
            {
              id: "ISC_2.4.1",
              text: "<strong>Brand audits:</strong> ensure that your brand is correctly represented along the full supply and value chains.",
            },
            {
              id: "ISC_2.4.2",
              text: "<strong>Supplier audits:</strong> maintain best practices while minimizing business disruption.",
            },
            {
              id: "ISC_2.4.3",
              text: "<strong>Industry/product stewardship audits:</strong> ensure that member companies adhere to your program's benchmarks.",
            },
          ],
        },
        {
          id: "ISC_2.5",
          text: "We can help you to manage your suppliers, conducting audits to your policies, international standards and legislation. Our customized audits enable you to gain absolute visibility of suppliers' practices, domestic or worldwide.",
        },
        {
          id: "ISC_2.6",
          text: "We develop an audit program to suit your requirements and combine it with our world-leading risk management data and analysis, so you get a thorough audit across your supply chain, especially the most sensitive operations.",
        },
        {
          id: "ISC_2.7",
          text: "Our knowledge and network of experts enable us to leverage large-scale resources for you. With our experience and guidance, you can work quickly and easily towards compliance with local, national and international regulations, reducing errors, increasing consistency and promoting positive values within your company and your suppliers.",
        },
        {
          id: "ISC_2.8",
          text: "As a trusted partner, with experience across all major industries, we are committed to transforming the compliance, transparency and performance of all products, services and supply chains that we audit.",
        },
        {
          id: "ISC_2.9",
          text: "Combining our best-in-class technology and subject matter experts, we can partner with you to help manage your supply chain, ensure compliance and increase supplier visibility, no matter the complexity or international coverage.",
        },
      ],
    },
  ],
};

const TestingAndLaboratoryManagementSystemServices: WhatWeDoType = {
  id: "testing-and-laboratory-management-system-services",
  heading: "TESTING AND LABORATORY MANAGEMENT SYSTEM SERVICES",
  prev: {
    title: "INSPECTIONS AND SUPPLY CHAIN SERVICES",
    to: "what-we-do/inspections-and-supply-chain-services",
    id: "inspections-and-supply-chain-services",
  },
  next: {
    title: "CERTIFICATIONS, TRAINING AND ADVISORY SERVICES",
    to: "what-we-do/certifications-training-and-advisory-services",
    id: "certifications-training-and-advisory-services",
  },
  subtopics: [
    {
      id: "TAMS_1",
      paragraphs: [
        {
          id: "TAMS_1.1",
          text: "We know our clients need more than reliable analytical results; they need {practical and innovative solutions} that will contribute to make the quality products. Adding to analytical testing and consulting, we have broadened our scope of scientific specialties into chemistry, education, certification, research, labeling, and sensory in order to offer a {complete suite of services} to meet our {customers' needs.}",
        },
        {
          id: "TAMS_1.2",
          text: "Today, we offer comprehensive solutions to support our clients at all stages of laboratory which includes {laboratory setup, trainings, accreditations to running the laboratory.}",
        },
        {
          id: "TAMS_1.3",
          text: "We care by asking the right questions and gathering the right team of experts who understand your specific needs, your market, your legal environment, and your chain of value. We care by working alongside you to come up with innovative and practical solutions for your business. We believe that to constantly improve our services, we need to turn every situation into a learning opportunity that will allow us to serve you better.",
        },
        {
          id: "TAMS_1.4",
          text: "From routine testing, to special projects, to consultation and training, our goal is to deliver solutions that can be {trusted} to drive business decisions.",
        },
        {
          id: "TAMS_1.5",
          text: "To give consistent and reliable results, we share the same method all over i.e. Quality management system accredited under the recognized {ISO 17025 standard} and other required approvals and certifications. Full sample-to-result traceability.",
        },
        {
          id: "TAMS_1.6",
          text: "Our testing services provide the data you need to optimize the production process and get your product to market quickly and economically. We help you bring your product to market quickly, responsibly, and economically to keep your business continually moving ahead.",
        },
      ],
    },
  ],
  cards: [
    {
      id: "TAMS_card1",
      heading: "QUALITY AND COMPLIANCE",
      text: "Quality Assurance & Regulatory Compliance our rigorous procedures ensure your products not only meet but exceed industry standards. We keep you ahead of regulatory changes, guaranteeing compliance with evolving global standards.",
    },
    {
      id: "TAMS_card2",
      heading: "PERFORMANCE AND SAFETY",
      text: "Performance Evaluation & Safety Assurance Thorough testing is conducted to optimize product performance, ensuring functionality and durability. Additionally, our rigorous safety analysis mitigates risks, upholding the safety of your offerings.",
    },
    {
      id: "TAMS_card3",
      heading: "VALIDATION AND EFFICIENCY",
      text: "Benchmarking, Validation & Efficiency We provide precise benchmarking and validation processes, ensuring product efficacy and compliance. Our approach focuses on efficiency to streamline the validation of your products.",
    },
  ],
};

const CertificationsTrainingAndAdvisoryServices: WhatWeDoType = {
  id: "certifications-training-and-advisory-services",
  heading: "CERTIFICATIONS, TRAINING AND ADVISORY SERVICES",
  prev: {
    title: "TESTING AND LABORATORY MANAGEMENT SYSTEM SERVICES",
    to: "what-we-do/testing-and-laboratory-management-system-services",
    id: "testing-and-laboratory-management-system-services",
  },
  next: {
    title: "SUPPLY OF DRONE SERVICES",
    to: "what-we-do/supply-of-drone-services",
    id: "supply-of-drone-services",
  },
  subtopics: [
    {
      id: "CTAS_1",
      heading: "Certifications:",
      paragraphs: [
        {
          id: "CTAS_1.1",
          text: "Certification proves your credibility to the market. To deliver that credibility, solution edge maintains extensive global accreditations and recognitions for our testing and certification services.",
        },
        {
          id: "CTAS_1.2",
          text: "As global markets grow and expand, there are more consumers seeking safe, reliable, and, increasingly, eco-conscious products. With both international and local proficiency, solution Edge brings the qualifications you need to get your products in front of the right eyes. We offer certification support that achieve market entry into a variety of global destinations, programmes for a more eco-friendly environment and also programmes to verify social accountability compliance for both you and your suppliers.",
        },
        {
          id: "CTAS_1.3",
          text: "Our leadership and expertise in regulatory standards and certifications keeps you ahead of changes and challenges, and our capabilities and knowledge of the process from sourcing to market position brings solutions that are efficient, cost-effective, and meet best industry practices.",
        },
      ],
    },
    {
      id: "CTAS_2",
      heading: "Why auditing and certification?",
      paragraphs: [
        {
          id: "CTAS_2.1",
          text: "Whichever sector your business operates in, you need the certainty that your services, products and processes have been scrutinized to ensure that they deliver optimum performance and quality",
        },
        {
          id: "CTAS_2.2",
          text: "With certification, you are communicating to consumers and stakeholders that you are operating within a proven framework to achieve customer satisfaction and meet regulatory requirements, health and safety obligations and more.",
        },
        {
          id: "CTAS_2.3",
          text: "What are the key benefits of assessment, auditing and certification?",
          subtexts: [
            {
              id: "CTAS_2.3.1",
              text: "Continually improve results through discovering and refining practices",
            },
            {
              id: "CTAS_2.3.2",
              text: "Improve processes and efficiencies",
            },
            {
              id: "CTAS_2.3.3",
              text: "Manage risks and demonstrate proof of due diligence and compliance",
            },
            {
              id: "CTAS_2.3.4",
              text: "Reduce costs and save time",
            },
            {
              id: "CTAS_2.3.5",
              text: "Identify greater opportunities for growth and market access",
            },
            {
              id: "CTAS_2.3.6",
              text: "Comply with regulations",
            },
            {
              id: "CTAS_2.3.7",
              text: "Gain a competitive advantage",
            },
            {
              id: "CTAS_2.3.8",
              text: "Enhance your credibility, and the trust and confidence of your customers",
            },
            {
              id: "CTAS_2.3.9",
              text: "Promote an even playing field for all organizations",
            },
          ],
        },
        {
          id: "CTAS_2.4",
          text: "We operate with the utmost competence and trust, delivering the highest quality service at global and local levels. {Transparency}, {independence} and {integrity} are key to delivering our services. We comply with the highest standards to support maintaining your accreditations, so you can be sure of our competence. We have teams of highly skilled, reliable and ethical assessors and technical experts, whose skills and abilities are continually assessed.",
        },
        {
          id: "CTAS_2.5",
          text: "We can support you through the process:",
          subtexts: [
            {
              id: "CTAS_2.5.1",
              text: "<strong>Understand the standard</strong> - we can help you to understand the requirements",
            },
            {
              id: "CTAS_2.5.2",
              text: "<strong>Get in touch</strong> - tell us what standard you are aiming for, and we will provide a detailed proposal and quote.",
            },
            {
              id: "CTAS_2.5.3",
              text: "<strong>Competence</strong> - identify any skill and competence gaps that your staff may have. We can provide training and workshops to support",
            },
            {
              id: "CTAS_2.5.4",
              text: "<strong>Gap assessment</strong> - identify any weaknesses",
            },
            {
              id: "CTAS_2.5.5",
              text: "Confirmation that implementation of the standard is on track",
            },
            {
              id: "CTAS_2.5.6",
              text: "Confirmation that the standard is fully implemented",
            },
            {
              id: "CTAS_2.5.7",
              text: "Achieving certification or accreditation with the scope, after which you can share your achievement with the world.",
            },
            {
              id: "CTAS_2.5.8",
              text: "<strong>Ongoing improvement</strong> - regular surveillance visits to help you maintain and enhance your management system.",
            },
            {
              id: "CTAS_2.5.9",
              text: "<strong>Bespoke learning</strong> - By utilizing your existing audit data or conducting a gap assessment, we can identify issues and develop customized training to eliminate all gaps.",
            },
          ],
        },
      ],
    },
    {
      id: "CTAS_3",
      heading: "Training",
      paragraphs: [
        {
          id: "CTAS_3.1",
          text: "Solution Edge offers training courses that provide the skills and knowledge needed to transform your people and business.",
        },
        {
          id: "CTAS_3.2",
          text: "Increase skills, knowledge and performance while creating future industry leaders and enhancing continuous professional development with ISO and other training courses.",
        },
        {
          id: "CTAS_3.3",
          text: "Quality training will help your organization remain competitive. It enables you to keep up with the latest industry practices and ever-changing technical and ISO standards, as well as comply with legal and regulatory obligations.",
        },
        {
          id: "CTAS_3.4",
          text: "However, maintaining a consistent level of learning across your organization can be a complex task. That is why you need to ensure that all personnel, local and global, receive consistent and high-quality training.",
        },
        {
          id: "CTAS_3.5",
          text: "An organization's greatest asset is its workforce. Unlocking your workforce's full potential is key to creating a successful business. Employees must receive training that promotes continuous personal and professional development.",
        },
        {
          id: "CTAS_3.6",
          text: "We offer {face-to-face (classroom)}, {virtual (remote, online)}, {eLearning (self-paced)} and {blended courses}, as well as {customized training} to meet your evolving needs.",
        },
        {
          id: "CTAS_3.7",
          subtexts: [
            {
              id: "CTAS_3.7.1",
              text: "<strong>Standards-based training:</strong> We provide training for ISO and other standards for various levels of employees, such as introduction, internal auditor/lead auditor and implementation courses. We also offer other technical training subjects to improve business processes.",
            },
            {
              id: "CTAS_3.7.2",
              text: "<strong>Industry-based training:</strong> We offer industry-specific workforce development solutions across many areas, including food, Agriculture, Biological etc.",
            },
            {
              id: "CTAS_3.7.3",
              text: "<strong>Subject area training:</strong> Our training content covers domain knowledge and skills in specific areas, such as sustainability, health and safety, information security, regulatory compliance, personal development and process improvement. <br> People learn in different ways. It makes practical and economic sense to find adaptable, intuitive training solutions that can be customized to meet organizational and individual expectations. Training must focus on relevant and memorable content.",
            },
          ],
        },
        {
          id: "CTAS_3.8",
          text: "Our data-centric approach will meet your needs and includes:",
        },
        {
          id: "CTAS_3.9",
          text: "{Industry training solutions} <br> From an overall industry analysis of our dataset, we know each industry's top pain points and can bundle existing training to solve specific business needs.",
        },
      ],
    },
    {
      id: "CTAS_4",
      heading: "Advisory Services",
      paragraphs: [
        {
          id: "CTAS_4.1",
          text: "Are you aiming to reduce costs and improve productivity in your operations or supply chain? With decades of audit experience across the globe, we understand each sector and industry's successes and pain points. We transform these insights into practice with our consulting services, helping you to develop best practices tailored to your organization.",
        },
        {
          id: "CTAS_4.2",
          text: "From defining the gap to developing leadership, we assess strategy, processes and people throughout your organization. We identify and recommend the next steps and help you to implement them.",
        },
        {
          id: "CTAS_4.3",
          text: "Our consultants analyze the existing potential savings to ensure the project's profitability. The defined improvement plan comes with anticipated savings.",
        },
        {
          id: "CTAS_4.4",
          text: "Tackle challenges and optimize operational processes and strategy with our diverse expert consultants across our network.",
        },
        {
          id: "CTAS_4.5",
          text: "{Supporting your organization's key focus areas}",
        },
        {
          id: "CTAS_4.6",
          text: "As an industry leader, we support many areas of your business through our in-depth expertise, including:",
          subtexts: [
            {
              id: "CTAS_4.6.1",
              text: "<strong>Growth:</strong> grow and compete in competitive markets",
            },
            {
              id: "CTAS_4.6.2",
              text: "<strong>Productivity:</strong> be efficient, productive and constantly increase productivity and quality in any process",
            },
            {
              id: "CTAS_4.6.3",
              text: "<strong>Digitization:</strong> digitize or adopt Industry 4.0 technology",
            },
            {
              id: "CTAS_4.6.4",
              text: "<strong>Sustainability:</strong> be sustainable by defining a strategy",
            },
            {
              id: "CTAS_4.6.5",
              text: "<strong>Supply chain:</strong> understand and customize your supply chain",
            },
          ],
        },
        {
          id: "CTAS_4.7",
          text: "{Reduce costs, and increase growth and efficiency}",
        },
        {
          id: "CTAS_4.8",
          text: "Our expert insights and management tools enable you to:",
          subtexts: [
            {
              id: "CTAS_4.8.1",
              text: "Reduce costs and time",
            },
            {
              id: "CTAS_4.8.2",
              text: "Minimize waste and unnecessary processes",
            },
            {
              id: "CTAS_4.8.3",
              text: "Improve the quality of products and services",
            },
            {
              id: "CTAS_4.8.4",
              text: "Increase Earnings Before Interest, Taxes, Depreciation and Amortization (EBITDA), cash flow and growth",
            },
            {
              id: "CTAS_4.8.5",
              text: "Optimize efficiency",
            },
            {
              id: "CTAS_4.8.6",
              text: "Enhance agility",
            },
          ],
        },
      ],
    },
    {
      id: "CTAS_5",
      heading: "What you Get from Experts:",
      paragraphs: [
        {
          id: "CTAS_5.1",
          text: "Whatever your maturity level, industry focus or need, our comprehensive consulting, training, transformation and support services help you to adopt engaging methodologies which will help you adopt the most engaging and viable approaches to tackle your business challenges and optimize processes for visible, lasting impact.",
        },
        {
          id: "CTAS_5.2",
          text: "Our consulting experts offer diverse industry experience and professional qualifications in numerous sectors and industries. We also work with leading specialist consultants to offer unique insights that cater to your circumstances.",
        },
        {
          id: "CTAS_5.3",
          text: "Talk to our consultants to find out how they can help you to improve your operations and productivity.",
        },
      ],
    },
  ],
};

const SupplyOfDroneServices: WhatWeDoType = {
  id: "supply-of-drone-services",
  heading: "SUPPLY OF DRONE SERVICES",
  prev: {
    title: "CERTIFICATIONS, TRAINING AND ADVISORY SERVICES",
    to: "what-we-do/certifications-training-and-advisory-services",
    id: "certifications-training-and-advisory-services",
  },
  next: {
    title: "BUSINESS SUPPORT",
    to: "what-we-do/business-support",
    id: "business-support",
  },
  subtopics: [
    {
      id: "SODS_1",
      paragraphs: [
        {
          id: "SODS_1.1",
          text: "We understand the challenges faced by companies in ensuring quality assurance of some of the operations reason being cost, safety, accessibility, skilled manpower and time limitations. Our innovative solution involving supply drones can revolutionize your quality of process and products.",
        },
        {
          id: "SODS_1.2",
          text: "We provide services which are specialized in the development and deployment of unmanned aerial systems. We have experience in designing and implementing drone solutions for various industries, and we believe our expertise can be a game-changer.",
        },
      ],
    },
    {
      id: "SODS_2",
      heading: "Why Drone Service?",
      paragraphs: [
        {
          id: "SODS_2.1",
          text: "We propose the implementation of a supply drone service tailored to the specific needs of your mining operations. Here's how it can benefit your business:",
        },
        {
          id: "SODS_2.2",
          text: "<strong>Improved Safety</strong> <br> Supply drones eliminate the need for personnel to handle transportation tasks in hazardous areas. They can access difficult-to-reach locations, reducing the risk of accidents and injuries.",
        },
        {
          id: "SODS_2.3",
          text: "<strong>Increased Efficiency</strong> <br> Drones can transport materials faster and more efficiently, reducing downtime and enhancing overall productivity.",
        },
        {
          id: "SODS_2.4",
          text: "<strong>Cost Savings</strong> <br> Our supply drone service can significantly reduce operating costs associated with traditional transportation method.",
        },
        {
          id: "SODS_2.5",
          text: "<strong>Environmental Benefits</strong> <br> Drones are eco-friendly, emitting fewer greenhouse gases compared to traditional vehicles, and contributing to your company's sustainability goals.",
        },
      ],
    },
    {
      id: "SODS_3",
      heading: "Implementation Plan",
      paragraphs: [
        {
          id: "SODS_3.1",
          text: "Steps to introduce the supply drone service to your operations:",
        },
        {
          id: "SODS_3.2",
          subtexts: [
            {
              id: "SODS_3.2.1",
              text: "<strong>Needs Assessment</strong> <br> A comprehensive analysis of your specific needs and type of operations will be conducted to design a customized solution.",
            },
            {
              id: "SODS_3.2.2",
              text: "<strong>Drone Development</strong> <br> We will develop specialized drones equipped with payload capabilities suitable for your operations.",
            },
            {
              id: "SODS_3.2.3",
              text: "<strong>Supply with Operator</strong> <br> Trained operator will be provided for the safe operation and management of the supplied drones.",
            },
            {
              id: "SODS_3.2.4",
              text: "<strong>Trial Period</strong> <br> A trial period will be initiated to test the service and make any necessary adjustments before full-scale deployment.",
            },
            {
              id: "SODS_3.2.5",
              text: "<strong>Full Deployment</strong> <br> Upon successful completion of the trial, we will implement the supply drone service across your operations.",
            },
          ],
        },
      ],
    },
    {
      id: "SODS_4",
      heading: "Benefits",
      paragraphs: [
        {
          id: "SODS_4.1",
          text: "By adopting our supply drone service, you can expect the following benefits:",
          subtexts: [
            {
              id: "SODS_4.1.1",
              text: "Enhanced safety for your personnel.",
            },
            {
              id: "SODS_4.1.2",
              text: "Improved operational efficiency and productivity.",
            },
            {
              id: "SODS_4.1.3",
              text: "Cost savings and reduced environmental impact.",
            },
            {
              id: "SODS_4.1.4",
              text: "A competitive edge in the mining industry.",
            },
          ],
        },
        {
          id: "SODS_4.2",
          text: "We are committed to providing cutting-edge solutions that can transform the way you operate and ensure the safety and success of your operations. We would be honored to collaborate with you to implement the supply drone service and address the unique challenges faced within your operations.",
        },
        {
          id: "SODS_4.3",
          text: "We look forward to the opportunity to work with you and make your operations safer, more efficient, and more sustainable.",
        },
      ],
    },
  ],
  cards: [
    {
      id: "SODS_card1",
      image: "drone-img-1.webp",
    },
    {
      id: "SODS_card2",
      image: "drone-img-2.webp",
    },
    {
      id: "SODS_card3",
      image: "drone-img-3.webp",
    },
  ],
};

const BusinessSupport: WhatWeDoType = {
  id: "business-support",
  heading: "BUSINESS SUPPORT",
  prev: {
    title: "SUPPLY OF DRONE SERVICES",
    to: "what-we-do/supply-of-drone-services",
    id: "supply-of-drone-services",
  },
  subtopics: [
    {
      id: "BS_1",
      paragraphs: [
        {
          id: "BS_1.1",
          text: "Conscious consumers expect more than convenience. They want the quality products and the products they buy to be ethically and sustainably sourced, produced, and distributed. For consumer goods companies, this means that, in addition to enabling pervasive commerce, they need to tailor their strategies to cater to these preferences. This shift in thinking is driving massive technology investments to accelerate consumer-first innovation, build resilient and responsible supply chains, and personalize experiences.",
        },
        {
          id: "BS_1.2",
          text: "We cater in facilitating multi-industry sale, purchase and supply of raw materials, finished products and Manpower.",
        },
      ],
    },
    {
      id: "BS_2",
      heading: "Supply Chain Assurance",
      link: "https://www.sgs.com/en/our-services/knowledge-solutions/supply-chain-assurance",
      paragraphs: [
        {
          id: "BS_2.1",
          text: "Drive quality, sustainability, integrity and transparency across your supply chain through customized audits and supply chain assurance services from Solution Edge.",
        },
        {
          id: "BS_2.2",
          text: "As supply chains become more internationalized, they naturally become more complex, making them increasingly prone to disruptions caused by a lack of supplier visibility. Weak points in your supply chain and undetected issues can impact cost and time, and cause reputational damage and shareholder and stakeholder distrust.",
        },
        {
          id: "BS_2.3",
          text: "Our supply chain assurance services provide auditing and verification across a multitude of areas and content. Whether using our checklists, customized programs and/or industry-driven initiatives, we are a trusted partner for deploying your program.",
        },
        {
          id: "BS_2.4",
          text: "We offer you:",
          subtexts: [
            {
              id: "BS_2.4.1",
              text: "<strong>Brand audits:</strong> ensure that your brand is correctly represented along the full supply and value chains.",
            },
            {
              id: "BS_2.4.2",
              text: "<strong>Supplier audits:</strong> maintain best practices while minimizing business disruption.",
            },
            {
              id: "BS_2.4.3",
              text: "<strong>Industry/product stewardship audits:</strong> ensure that member companies adhere to your program's benchmarks.",
            },
          ],
        },
        {
          id: "BS_2.5",
          text: "We can help you to manage your suppliers, conducting audits to your policies, international standards and legislation. Our customized audits enable you to gain absolute visibility of suppliers' practices, domestic or worldwide.",
        },
        {
          id: "BS_2.6",
          text: "We develop an audit program to suit your requirements and combine it with our world-leading risk management data and analysis, so you get a thorough audit across your supply chain, especially the most sensitive operations.",
        },
        {
          id: "BS_2.7",
          text: "Our knowledge and network of experts enable us to leverage large-scale resources for you. With our experience and guidance, you can work quickly and easily towards compliance with local, national and international regulations, reducing errors, increasing consistency and promoting positive values within your company and your suppliers.",
        },
        {
          id: "BS_2.8",
          text: "As a trusted partner, with experience across all major industries, we are committed to transforming the compliance, transparency and performance of all products, services and supply chains that we audit.",
        },
        {
          id: "BS_2.9",
          text: "Combining our best-in-class technology and subject matter experts, we can partner with you to help manage your supply chain, ensure compliance and increase supplier visibility, no matter the complexity or international coverage.",
        },
      ],
    },
  ],
};

export const getWhatWeDo = (type: string | undefined): WhatWeDoType => {
  switch (type) {
    case InspectionsAndSupplyChainServices?.id:
      return InspectionsAndSupplyChainServices;
    case TestingAndLaboratoryManagementSystemServices?.id:
      return TestingAndLaboratoryManagementSystemServices;
    case CertificationsTrainingAndAdvisoryServices?.id:
      return CertificationsTrainingAndAdvisoryServices;
    case SupplyOfDroneServices?.id:
      return SupplyOfDroneServices;
    case BusinessSupport?.id:
      return BusinessSupport;
    default:
      return null;
  }
};

export const replaceTextWithSpan = (
  inputString: string = "",
  className: string = ""
) => {
  const regex = /\{([^}]+)\}/g;

  const replacedString = inputString.replace(regex, (_, group) => {
    return `<span class="${className}">${group}</span>`;
  });

  return replacedString;
};
