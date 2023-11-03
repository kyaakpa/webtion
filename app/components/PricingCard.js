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
    console.log(data);
    e.preventDefault();
    // try {
    //   const response = await fetch(
    //     "https://webtionbackend.onrender.com/api/contact",
    //     {
    //       method: "POST",
    //       mode: "cors",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   );

    //   const serverResponse = await response.text();

    //   if (serverResponse === "done") {
    //     toast.success("We've received your request.", {
    //       position: toast.POSITION.TOP_RIGHT,
    //     });
    //   } else {
    //     toast.error("Whoops! Somethings not right", {
    //       position: toast.POSITION.TOP_RIGHT,
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="p-1 lg:items-center flex max-lg:flex-col lg:flex-col border  border-neutral-700 justify-between lg:justify-evenly rounded-2xl w-full lg:w-[400px] lg:gap-6">
      <Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="border border-neutral-600 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[420px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-900 [&>*]:opacity-100 opacity-95 text-neutral-200 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium text-blue-500">
              Custom Build Options
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Select features you want in your website here. Click submit when
              you're done.
            </Dialog.Description>

            <form
              className="flex flex-col gap-6 w-full "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Name"
                {...register("Name", { required: true })}
              />
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                type="text"
                placeholder="Organization Name"
                {...register("Organization Name", {
                  required: true,
                  maxLength: 98,
                })}
              />
              <input
                type="number"
                placeholder="Pages"
                {...register("Pages", { required: true, max: 26 })}
              />
              <div className="flex justify-between">
                <span>Contact Form</span>
                <div className="flex gap-4">
                  <span>Yes</span>
                  <input
                    {...register("Contact Form", { required: true })}
                    type="radio"
                    value="Yes"
                  />
                  <span>No</span>
                  <input
                    {...register("Contact Form", { required: true })}
                    type="radio"
                    value="No"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Google Reviews</span>
                <div className="flex gap-4">
                  <span>Yes</span>
                  <input
                    {...register("Google Reviews", { required: true })}
                    type="radio"
                    value="Yes"
                  />
                  <span>No</span>
                  <input
                    {...register("Google Reviews", { required: true })}
                    type="radio"
                    value="No"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Dark Mode</span>
                <div className="flex gap-4">
                  <span>Yes</span>
                  <input
                    {...register("Dark Mode", { required: true })}
                    type="radio"
                    value="Yes"
                  />
                  <span>No</span>
                  <input
                    {...register("Dark Mode", { required: true })}
                    type="radio"
                    value="No"
                  />
                </div>
              </div>

              <Dialog.Close asChild>
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="bg-green-500 text-green-100 text-lg hover:bg-green-600 h-[42px] items-center justify-center rounded-[4px] px-[20px] mt-8 font-semibold "
                  aria-label="Submit"
                >
                  Submit
                </button>
              </Dialog.Close>
            </form>

            <Dialog.Close asChild>
              <button
                className="absolute top-[10px] right-[10px] p-3"
                aria-label="Close"
              >
                <Cross />
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
