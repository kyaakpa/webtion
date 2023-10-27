"use client";
import Link from "next/link";
import { Tick, Cross } from "./Icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

const PricingCard = ({
  title,
  titleColor,
  caption,
  bonusCaption,
  list,
  price,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://webtionbackend.onrender.com/api/contact",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const serverResponse = await response.text();

      if (serverResponse === "done") {
        toast.success("We've received your request.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Whoops! Somethings not right", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-1 lg:items-center flex max-lg:flex-col lg:flex-col border  border-neutral-700 justify-between lg:justify-evenly rounded-2xl w-full lg:w-[400px] lg:gap-6">
      <Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-900 text-neutral-200 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium text-blue-500">
              Custom Build Options
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Select features you want in your website here. Click submit when
              you're done.
            </Dialog.Description>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                defaultValue="Pedro Duarte"
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="focus:text-violet-600 shadow-violet7 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                defaultValue="@peduarte"
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="focus:text-violet-600 shadow-violet7 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                type="checkbox"
                defaultValue="@peduarte"
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button className="bg-green-500 text-green-100 hover:bg-green-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                  Submit
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                x
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>

        <div className="max-lg:flex max-lg:flex-row max-lg:p-3">
          <div className="lg:p-0 p max-lg:w-1/2 flex flex-col max-lg:justify-center lg:h-[13vh]">
            <h5 className={`text-3xl pt-3 ${titleColor} font-semibold`}>
              {title}
            </h5>
            <p className="pt-2 lg:h-[5vh] text-sm px-4 text-neutral-300 flex-col flex">
              {caption}
              <span>{bonusCaption}</span>
            </p>
          </div>
          <div className="hidden lg:block border-t lg:w-48 w-72 border-neutral-500 p-2 self-center" />
          <div className="flex flex-col w-full max-lg:w-1/2 lg:items-start justify-between gap-4">
            <ul className="flex flex-col">
              {list.map((item, index) => (
                <li key={index} className="flex gap-2 p-2">
                  {item === "Dark mode" && title === "Basic" ? (
                    <Cross />
                  ) : (
                    <Tick />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {price === "Build Now" ? (
          <Dialog.Trigger asChild>
            <button className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-neutral-200 text-black rounded-xl self-end lg:w-full w-full hover:scale-95">
              {price}
            </button>
          </Dialog.Trigger>
        ) : (
          <Link
            href={"/contact"}
            className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-neutral-200 text-black rounded-xl self-end lg:w-full w-full hover:scale-95"
          >
            <button>{price}</button>
          </Link>
        )}
      </Dialog.Root>
    </div>
  );
};

export default PricingCard;
