import { Tick, Cross } from "../components/Icons";

const Services = () => {
  return (
    <div className="text-white text-center">
      <h2 className="text-5xl mb-8 tracking-tight font-bold">Pricing</h2>
      <div className="h-[60vh] flex justify-evenly md:[&>div]:w-[500px] [&>div]:border-slate-500 [&>div]:border [&>div]:rounded-xl [&>div]:flex-col [&>div]:w-1/3 gap-4">
        <div className="ml-8 p-2 lg:hover:scale-110 flex flex-col justify-between">
          <div className="">
            <h5 className="text-2xl pt-2 text-green-500 font-semibold">
              Eco-Friendly
            </h5>
            <p className="text-sm px-4 text-neutral-300">
              Perfect For Small businesses
            </p>
          </div>
          <ul className="text-left pl-2 pt-4 flex flex-col gap-4 [&>li]:flex [&>li]:gap-2">
            <li>{<Tick />} Custom Web Design</li>
            <li>{<Tick />}Contact Form</li>
            <li>{<Tick />}Upto 5 pages</li>
            <li>{<Tick />}Mobile Responsive</li>
            <li>{<Tick />}Google Reviews</li>
            <li>{<Cross />}Dark mode</li>
            <li>{<Tick />}dark mode</li>
          </ul>
          <button className="p-4 font-semibold text-2xl bg-white text-black rounded-xl hover:scale-95">
            Purchase
          </button>
        </div>
        <div className="p-2 lg:hover:scale-110 flex flex-col justify-between">
          <div className="">
            <h5 className="text-2xl pt-2 text-blue-600 font-semibold">
              Normal
            </h5>
            <p className="text-sm text-neutral-300">
              Perfect For Small businesses
            </p>
          </div>
          <ul className="text-left pl-2 pt-4 flex flex-col gap-4 [&>li]:flex [&>li]:gap-2">
            <li>{<Tick />} Custom Web Design</li>
            <li>{<Tick />}Contact Form</li>
            <li>{<Tick />}Upto 5 pages</li>
            <li>{<Tick />}Mobile Responsive</li>
            <li>{<Tick />}Google Reviews</li>
            <li>{<Cross />}Dark mode</li>
            <li>{<Tick />}dark mode</li>
          </ul>
          <button className="p-4 font-semibold text-2xl bg-white text-black rounded-xl hover:scale-95">
            Purchase
          </button>
        </div>
        <div className="mr-8 p-2 lg:hover:scale-110 flex flex-col justify-between">
          <div className="">
            <h5 className="text-2xl pt-2 text-yellow-300 font-semibold">
              Premium
            </h5>
            <p className="text-sm text-neutral-300">
              Perfect For Small businesses
            </p>
          </div>
          <ul className="text-left pl-2 pt-4 flex flex-col gap-4 [&>li]:flex [&>li]:gap-2">
            <li>{<Tick />} Custom Web Design</li>
            <li>{<Tick />}Contact Form</li>
            <li>{<Tick />}Upto 5 pages</li>
            <li>{<Tick />}Mobile Responsive</li>
            <li>{<Tick />}Google Reviews</li>
            <li>{<Cross />}Dark mode</li>
            <li>{<Tick />}dark mode</li>
          </ul>
          <button className="p-4 font-semibold text-2xl bg-white text-black rounded-xl hover:scale-95">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
