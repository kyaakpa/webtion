import PricingCard from "../components/PricingCard";
import { cardData } from "./cardData";

const Services = () => {
  return (
    <div className="text-white text-center mt-8">
      <h2 className="text-5xl mb-8 tracking-tight font-bold">Pricing</h2>
      <div className="fixed w-full flex justify-center  -z-20">
        <div className="absolute left-[100px] sm:w-[500px] sm:h-[500px] w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
        <div className="absolute right-[100px] sm:w-[500px] sm:h-[500px] w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute sm:w-[500px] sm:h-[500px] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex lg:h-[60vh] flex-col lg:flex-row gap-4 lg:justify-center mx-12">
        {cardData.map((data) => (
          <PricingCard
            key={data.title}
            title={data.title}
            titleColor={data.titleColor}
            caption={data.caption}
            bonusCaption={data.bonusCaption}
            list={data.list}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
