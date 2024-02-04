import IndustryCard from "@/components/IndustryCard";
import foodAndAgriImg from "@/assets/food-and-agriculture.webp";
import infraAndInd from "@/assets/infrastructure-and-industries.webp";
import lifeSciencesImg from "@/assets/life-sciences.webp";
import naturalResourcesImg from "@/assets/natural-resources.webp";
import consumerGoodsImg from "@/assets/consumer-goods.webp";
import testingLabImg from "@/assets/testing-laboratory.webp";

export interface IndustryType {
  id: string;
  heading: string;
  text: string;
  img: string;
}

const industriesWeCover: IndustryType[] = [
  {
    id: "iwc_1",
    heading: "Food and Agriculture",
    text: "Ensuring quality and safety in food production.",
    img: foodAndAgriImg,
  },
  {
    id: "iwc_2",
    heading: "Infrastructure and Industries",
    text: "Guaranteeing standards in construction and manufacturing.",
    img: infraAndInd,
  },
  {
    id: "iwc_3",
    heading: "Life Sciences",
    text: "Ensuring safety and quality in pharmaceuticals and healthcare.",
    img: lifeSciencesImg,
  },
  {
    id: "iwc_4",
    heading: "Natural Resources",
    text: "Sustainable management of natural assets and materials.",
    img: naturalResourcesImg,
  },
  {
    id: "iwc_5",
    heading: "Consumer goods",
    text: "Ensuring safety and quality in everyday products.",
    img: consumerGoodsImg,
  },
  {
    id: "iwc_6",
    heading: "Testing Laboratory",
    text: "Providing comprehensive testing services for various industries.",
    img: testingLabImg,
  },
];

const IndustriesWeCover = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">
        Industries We Cover
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-5 justify-center">
        {industriesWeCover.map((item) => (
          <IndustryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeCover;
