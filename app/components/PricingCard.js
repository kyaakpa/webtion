"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Tick, Cross } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import loading from "@/public/loading.webp";
import Image from "next/image";

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
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const url = "https://webtion.vercel.app/api/custom";
  const onSubmit = async (data, e) => {
    setIsLoading(true);
    closeModal();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      toast.success("We've received your request.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsLoading(false);
    } else {
      toast.error(
        "Message Send Failed !! Please contact us if you are having this issue",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      setIsLoading(false);
    }
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const selects = [
    {
      name: "Contact Form",
      value: "contactForm",
    },
    { name: "Google Reviews", value: "googleReviews" },
    {
      name: "Dark Mode",
      value: "darkMode",
    },
  ];

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
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="opacity-100 bg-gradient-to-b from-slate-950 to-neutral-800 w-[400px] sm:w-[500px] flex justify-center rounded-2xl text-neutral-100">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl max-sm:px-6 p-3 text-left align-middle shadow-xl transition-all">
                    <div className="flex justify-between mt-6">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-semibold outline-dashed outline-2 leading-6 p-2 text-blue-600"
                      >
                        Build Custom
                      </Dialog.Title>
                      <div
                        onClick={closeModal}
                        className="rounded-full hover:bg-neutral-400 p-2 "
                      >
                        <Cross fill="#444" />
                      </div>
                    </div>
                    <form
                      className="flex flex-col gap-6 w-full mt-8"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      <input
                        type="text"
                        placeholder="Organization Name"
                        {...register("orgName", {
                          required: true,
                          maxLength: 98,
                        })}
                      />
                      <input
                        type="Number"
                        placeholder="Number of Pages"
                        {...register("pages")}
                      />
                      {selects.map((items, index) => {
                        return (
                          <div
                            className="flex justify-between text-base"
                            key={index}
                          >
                            <span>{items.name}</span>

                            <div className="flex gap-4">
                              <select
                                {...register(`${items.value}`)}
                                className="bg-neutral-600 p-2 outline-none rounded-lg flex"
                              >
                                <option>(select one)</option>

                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                              </select>
                            </div>
                          </div>
                        );
                      })}
                      <div className="mt-8 pb-6 flex justify-end">
                        <button
                          type="submit"
                          className="flex gap-4 text-lg justify-center rounded-md border border-transparent bg-neutral-200 px-6 py-2 font-medium text-black hover:text-neutral-200 hover:bg-neutral-600 focus:outline-none"
                          onClick={() => {
                            handleSubmit(onSubmit);
                          }}
                        >
                          <span>Request</span>
                          <div
                            className={isLoading === false ? "hidden" : "block"}
                          >
                            <Image
                              src={loading}
                              width={24}
                              className="animate-spin"
                            />
                          </div>
                        </button>
                      </div>
                    </form>
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
                  <Cross fill="#d00" />
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
