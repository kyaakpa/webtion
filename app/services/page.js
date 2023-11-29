import PricingCard from "../../components/PricingCard";
import { cardData } from "./cardData";
import { ToastContainer } from "react-toastify";
import "@/styles/ReactToastify.css";

const Services = () => {
  return (
    <div className="text-center max-lg:mb-20">
      <ToastContainer />
      <div className="mb-12">
        <h2 className="text-5xl p-3 tracking-tighter font-bold">
          Growing your business with us
        </h2>
        <p className="p-3 text-neutral-800">
          We offer various choices as per your requirements
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:h-[60vh] lg:justify-center lg:mx-8 max-lg:mx-16 max-sm:mx-4">
        {cardData.map((data) => (
          <PricingCard
            key={data.title}
            title={data.title}
            titleColor={data.titleColor}
            btnBgColor={data.btnBgColor}
            bgColor={data.bgColor}
            caption={data.caption}
            bonusCaption={data.bonusCaption}
            list={data.list}
            price={data.price}
            captionColor={data.captionColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
