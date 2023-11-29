"use client";
import PricingCard from "../../components/PricingCard";
import { cardData } from "./cardData";
import { ToastContainer } from "react-toastify";
import "@/styles/ReactToastify.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="text-center max-lg:mb-20">
      <ToastContainer />
      <div className="mb-12">
        <div className="text-5xl p-3 tracking-tighter font-bold">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.1 }}
            animate="visible"
          >
            Growing your business with us
          </motion.h2>
          <div className="relative animate-textSlide -z-10 left-1/2 max-md:hidden -top-7 transform -translate-x-1/2 w-[550px] h-8 bg-blue-200 " />
        </div>
        <p className="p-3 text-neutral-800 md:-mt-8">
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
