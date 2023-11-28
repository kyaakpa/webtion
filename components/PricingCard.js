"use client";
import Link from "next/link";
import { useState } from "react";
import { Tick } from "./Icons";
import CustomModal from "./CustomModal";

const PricingCard = ({
  title,
  titleColor,
  bgColor,
  btnBgColor,
  caption,
  captionColor,
  bonusCaption,
  list,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      className={`${bgColor} p-1 flex max-lg:flex-col lg:flex-col  rounded-2xl h-full lg:justify-between w-full lg:w-[350px] lg:gap-6 shadow-md`}
    >
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`max-lg:flex max-lg:p-8 max-sm:px-2 lg:p-4`}>
        <div className="lg:p-2 max-lg:w-1/2 flex flex-col lg:items-start lg:justify-between max-lg:justify-center lg:h-[8vh]">
          <h5
            className={`text-4xl pt-3 font-bold max-[500px]:text-2xl ${titleColor}`}
          >
            {title}
          </h5>
          <p
            className={`pt-2 lg:h-[5vh] text-sm ${captionColor} flex-col flex`}
          >
            {caption}
            <span className="lg:text-left">{bonusCaption}</span>
          </p>
        </div>
        <div className="flex flex-col w-full max-lg:w-1/2 justify-center lg:pt-16 max-[500px]:text-xs text-white">
          <ul className="flex flex-col gap-2 max-[500px]:text-sm">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 items-center lg:font-medium"
              >
                <Tick fill={"#eaeaea"} className="scale-1/2 opacity-[0.99]" />
                <span className="max-[412px]:text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {price === "Build Now" ? (
        <button
          onClick={openModal}
          className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block text-[#ECF4D6] bg-[#2D9596] rounded-xl self-end lg:w-full w-full hover:bg-[#ECF4D6] hover:text-[#2D9596] transition-colors duration-500"
        >
          {price}
        </button>
      ) : (
        <Link
          href={"/contact"}
          className={`flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block ${btnBgColor} ${titleColor} rounded-xl self-end lg:w-full w-full hover:animate-pulse`}
        >
          <button>{price}</button>
        </Link>
      )}
    </div>
  );
};

export default PricingCard;
