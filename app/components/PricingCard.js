"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Tick, Cross } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
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
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="p-1 lg:items-center flex max-lg:flex-col lg:flex-col border  border-neutral-700 justify-between lg:justify-evenly rounded-2xl w-full lg:w-[400px] lg:gap-6">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="opacity-100 bg-neutral-950 w-[400px] sm:w-[500px] flex justify-center p-8 rounded-2xl text-neutral-100">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl mb-6 font-semibold leading-6 text-blue-600"
                    >
                      Build Custom
                    </Dialog.Title>
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
                        type="Number"
                        placeholder="Pages"
                        {...register("Pages", { required: true, max: 26 })}
                      />
                      <div className="flex justify-between">
                        <span>Contact Forms</span>

                        <div className="flex gap-4">
                          <label htmlFor="yes">Yes</label>
                          <input
                            {...register("Contact Form", { required: true })}
                            type="radio"
                            value="Yes"
                            name="yes"
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
                    </form>

                    <div className="mt-8 -pb-6 flex justify-end">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-neutral-200 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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
                  <Cross fill={"#d00"} />
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
        <button
          onClick={openModal}
          className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-neutral-200 text-black rounded-xl self-end lg:w-full w-full hover:scale-[0.99]"
        >
          {price}
        </button>
      ) : (
        <Link
          href={"/contact"}
          className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-neutral-200 text-black rounded-xl self-end lg:w-full w-full hover:scale-[0.99]"
        >
          <button>{price}</button>
        </Link>
      )}
    </div>
  );
};

export default PricingCard;
