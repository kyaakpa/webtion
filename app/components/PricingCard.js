import Link from "next/link";
import CustomForm from "./CustomForm";
import { Tick, Cross } from "./Icons";

const PricingCard = ({
  title,
  titleColor,
  caption,
  bonusCaption,
  list,
  price,
}) => {
  return (
    <div className="p-1 lg:items-center flex lg:flex-col border  border-neutral-700 justify-between lg:justify-evenly rounded-2xl w-full lg:w-[300px] lg:gap-6">
      <div className="lg:p-0 p-2 flex flex-col lg:gap-0 gap-5 ">
        <h5 className={`text-3xl pt-2 ${titleColor} font-semibold`}>{title}</h5>
        <p className="pt-2 h-[5vh] text-sm px-4 text-neutral-300 flex-col flex">
          {caption}
          <span>{bonusCaption}</span>
        </p>
      </div>
      <div className="hidden lg:block border-t lg:w-48 w-72 border-neutral-500 self-center" />
      <div className="flex flex-col w-full lg:items-start items-center justify-between gap-4">
        <ul className="flex flex-col">
          {list.map((item, index) => (
            <li key={index} className="flex gap-2 p-2">
              {item === "Dark mode" && title === "Basic" ? <Cross /> : <Tick />}
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-neutral-200 text-black rounded-xl self-end lg:w-full w-full hover:scale-95"
        >
          <button>{price}</button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
