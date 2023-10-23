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
    <div className="mx-auto lg:mx-0 p-2 flex lg:flex-col border border-neutral-700 justify-between">
      <div>
        <h5 className={`text-3xl pt-2 ${titleColor} font-semibold`}>{title}</h5>
        <p className="pt-2 text-sm px-4 text-neutral-300 flex-col flex">
          {caption}
          <span>{bonusCaption}</span>
        </p>
      </div>
      <div className="hidden lg:block border-t w-48 border-neutral-400 self-center" />
      <ul className="text-left pl-4 pt-4 flex flex-col gap-4 [&>li]:flex [&>li]:gap-2">
        {list.map((item, index) => (
          <li key={index}>
            {item === "Dark mode" && title === "Basic" ? <Cross /> : <Tick />}
            {item}
          </li>
        ))}
      </ul>
      <button className="p-4 font-semibold text-2xl bg-neutral-200 text-black rounded-xl hover:scale-95">
        {price}
      </button>
    </div>
  );
};

export default PricingCard;
