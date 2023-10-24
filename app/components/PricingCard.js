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
    <div className="p-2 lg:items-center flex lg:flex-col border border-neutral-700 justify-between rounded-2xl lg:w-[300px]">
      <div className="lg:p-0 p-2 flex flex-col lg:gap-0 gap-5">
        <h5 className={`text-3xl pt-2 ${titleColor} font-semibold`}>{title}</h5>
        <p className="pt-2 text-sm px-4 text-neutral-300 flex-col flex">
          {caption}
          <span>{bonusCaption}</span>
        </p>
      </div>
      <div className="hidden lg:block border-t lg:w-48 w-72 border-neutral-400 self-center" />
      <ul className="text-left pl-4 pt-4 flex flex-col gap-4 [&>li]:flex [&>li]:gap-2">
        {list.map((item, index) => (
          <li key={index}>
            {item === "Dark mode" && title === "Basic" ? <Cross /> : <Tick />}
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={"/contact"}
        className="p-4 self-center font-semibold text-2xl bg-neutral-200 text-black rounded-xl lg:h-auto lg:w-full w-32 hover:scale-95"
      >
        <button>{price}</button>
      </Link>
    </div>
  );
};

export default PricingCard;
