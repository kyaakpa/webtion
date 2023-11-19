"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Tick, Cross } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import loading from "@/public/loading.webp";
import Image from "next/image";

const PricingCard = ({
  title,
  titleColor,
  bgColor,
  btnBgColor,
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

  const [isLoading, setIsLoading] = useState(false);

  const url = "https://webtion.vercel.app/api/custom";
  const url2 = "http://localhost:3000/api/custom";

  const onSubmit = (data, e) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
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

          reset();
          setTotalPrice(1500);
          setTimeout(() => {
            setIsLoading(false);
            closeModal();
          }, 1000);
        } else {
          toast.error(
            "Message Send Failed !! Please contact us if you are having this issue",
            {
              position: toast.POSITION.TOP_RIGHT,
            },
          );
          setTimeout(() => {
            setIsLoading(false);
            closeModal();
          }, 1000);
        }
      } catch (err) {
        console.log(err);
      }
    }, 3000);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [totalPrice, setTotalPrice] = useState(1500);

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
    {
      name: "Google Reviews",
      value: "googleReviews",
    },
    {
      name: "Dark Mode",
      value: "darkMode",
    },
    {
      name: "Animation Effects",
      value: "animationEffects",
    },
    {
      name: "Transition Effects",
      value: "transitionEffects",
    },
  ];

  return (
    <div
      className={`${bgColor} p-1 flex max-lg:flex-col lg:flex-col  rounded-2xl h-full lg:justify-between w-full lg:w-[350px] lg:gap-6`}
    >
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
                <div className="opacity-100 w-[400px] sm:w-[500px] flex justify-center rounded-2xl">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl max-sm:px-6 p-3 text-left align-middle shadow-xl transition-all bg-neutral-50">
                    <div className="flex justify-between mt-1 ml-1">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-semibold outline-dashed outline-2 leading-6 p-2 text-blue-600"
                      >
                        Build Custom
                      </Dialog.Title>
                      <div
                        onClick={closeModal}
                        className="rounded-full hover:bg-neutral-400 p-2"
                      >
                        <Cross fill="#444" />
                      </div>
                    </div>
                    <form
                      className="flex flex-col gap-3 w-full p-2 mt-8"
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
                        max={30}
                        placeholder="Number of Pages"
                        {...register("pages")}
                        onChange={(e) => {
                          const pages = e.target.value;

                          if (pages === null) {
                            setTotalPrice(1500);
                          } else {
                            const additionalPrice =
                              Math.max(0, (pages - 5) / 5) * 500;
                            setTotalPrice(1500 + additionalPrice);
                          }
                        }}
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
                                className="p-2 bg-neutral-200 rounded-lg"
                              >
                                <option>(select one)</option>

                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                              </select>
                            </div>
                          </div>
                        );
                      })}

                      <div className="mt-8 pb-6 flex justify-between">
                        <div>Total Price: ${totalPrice}</div>
                        <button
                          type="submit"
                          className="flex gap-4 text-lg justify-center rounded-md border border-transparent bg-neutral-900 px-6 py-2 font-medium text-white focus:outline-none hover:animate-pulse transition-colors ease-linear duration-300"
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

      <div className={`max-lg:flex max-lg:p-8 max-sm:px-2 lg:p-4`}>
        <div className="lg:p-2 max-lg:w-1/2 flex flex-col lg:items-start lg:justify-between max-lg:justify-center lg:h-[8vh]">
          <h5
            className={`text-3xl pt-3 font-semibold max-[500px]:text-2xl ${titleColor}`}
          >
            {title}
          </h5>
          <p className="pt-2 lg:h-[5vh] text-sm text-neutral-600 flex-col flex">
            {caption}
            <span className="lg:text-left">{bonusCaption}</span>
          </p>
        </div>
        <div className="flex flex-col w-full max-lg:w-1/2 justify-center lg:pt-16 max-[500px]:text-xs text-black">
          <ul className="flex flex-col gap-2 max-[500px]:text-sm">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 items-center lg:font-medium"
              >
                <Tick />
                <span className="max-sm:w-full">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {price === "Build Now" ? (
        <button
          onClick={openModal}
          className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-blue-300 text-blue-900 rounded-xl self-end lg:w-full w-full hover:bg-blue-900 hover:text-blue-300 transition-colors duration-500"
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
