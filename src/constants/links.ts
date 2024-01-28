export type navlinkType = {
  id: number;
  label: string;
  to: string;
  links: {
    id: string;
    label: string;
  }[];
};

export const navlinks: navlinkType[] = [
  {
    id: 1,
    label: "Inspection",
    to: "what-we-do/inspections-and-supply-chain-services",
    links: [
      {
        id: "ISC_1",
        label: "Inspections",
      },
      {
        id: "ISC_2",
        label: "Supply Chain Services",
      },
    ],
  },
  {
    id: 2,
    label: "Testing",
    to: "what-we-do/testing-and-laboratory-management-system-services",
    links: [
      {
        id: "testing-and-laboratory-management-system-services",
        label: "Testing Services",
      },
      {
        id: "TAMS_1",
        label: "Laboratory Management",
      },
    ],
  },
  {
    id: 3,
    label: "Certification",
    to: "what-we-do/certifications-training-and-advisory-services",
    links: [
      {
        id: "CTAS_1",
        label: "Certifications",
      },
      {
        id: "CTAS_3",
        label: "Training",
      },
      {
        id: "CTAS_4",
        label: "Advisory Services",
      },
    ],
  },
  {
    id: 4,
    label: "Drone Supply",
    to: "what-we-do/supply-of-drone-services",
    links: [
      {
        id: "supply-of-drone-services",
        label: "Supply of drone services",
      },
      {
        id: "SODS_2",
        label: "Why Drone Service?",
      },
      {
        id: "SODS_3",
        label: "Implementation Plan",
      },
      {
        id: "SODS_4",
        label: "Benefits",
      },
    ],
  },
  {
    id: 5,
    label: "Business Support",
    to: "what-we-do/business-support",
    links: [
      {
        id: "business-support",
        label: "Business Support",
      },
      {
        id: "BS_2",
        label: "Supply Chain Assurance",
      },
      {
        id: "BS_2.4",
        label: "Our Offerings",
      },
    ],
  },
];
