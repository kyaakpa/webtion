"use client";
import { motion } from "framer-motion";
import loading from "@/public/loading.webp";
import Image from "next/image";
import { Fragment, useEffect, useState, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cross } from "./Icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const CustomModal = ({ isOpen, setIsOpen }) => {
  useEffect(() => {}, [isOpen]);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState(false);

  const url = "https://webtion.vercel.app/api/custom";
  const url2 = "http://localhost:3000/api/custom";

  const onSubmit = (data, e) => {
    setIsLoading(true);
    console.log(data);

    const transformedData = {
      ...data,
      animationEffects: data.animationEffects ? "yes" : "no",
      contactForm: data.contactForm ? "yes" : "no",
      darkMode: data.darkMode ? "yes" : "no",
      googleReviews: data.googleReviews ? "yes" : "no",
      transitionEffects: data.transitionEffects ? "yes" : "no",
      totalPrice: totalPrice,
    };

    setTimeout(async () => {
      try {
        const response = await axios.post(url, transformedData, {
          headers: {
            "Content-Type": "application/json",
          },
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

  const [totalPrice, setTotalPrice] = useState(1500);

  function closeModal() {
    setIsOpen(false);
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

  const handleCheckboxChange = (value) => {
    setCheckedOptions((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [value]: !prevCheckedOptions[value],
    }));
  };

  return (
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
              <div className="opacity-100 max-[500px]:w-[350px] sm:w-[600px] flex justify-center rounded-2xl">
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl max-sm:px-6 p-4 text-left align-middle shadow-xl transition-all bg-neutral-50">
                  <div className="flex justify-between mt-1">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-semibold outline-2 leading-6 p-2 text-blue-600"
                    >
                      Build Custom
                    </Dialog.Title>
                    <div
                      onClick={closeModal}
                      className="rounded hover:bg-neutral-400 self-center mr-1"
                    >
                      <Cross fill="#444" />
                    </div>
                  </div>
                  <form
                    className="flex flex-col gap-3 w-full p-2 mt-8 "
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {!isNext && (
                      <motion.div
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        transition={{ duration: 0.5, delay: 0.2 }}
                        animate="visible"
                        className="[&>input]:border-none flex flex-col gap-4 mb-2 w-full"
                      >
                        <input
                          type="text"
                          className=""
                          id="name"
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
                          type="text"
                          placeholder="Organization Address"
                          {...register("orgAddress", {
                            required: true,
                            maxLength: 120,
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
                      </motion.div>
                    )}

                    {isNext && (
                      <div className="flex flex-col gap-4 mb-2">
                        <button
                          type="button"
                          className="max-sm:text-base gap-4 w-36 text-lg justify-center rounded-md border border-transparent bg-neutral-900 px-6 py-2 font-medium text-white focus:outline-none hover:animate-pulse transition-colors ease-linear duration-300"
                          onClick={() => setIsNext(false)}
                        >
                          <span>{`<- Go Back`}</span>
                        </button>{" "}
                        {selects.map((item, index) => {
                          return (
                            <motion.div
                              variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                              }}
                              initial="hidden"
                              transition={{ duration: 0.5, delay: 0.2 }}
                              animate="visible"
                              key={index}
                            >
                              <label
                                htmlFor={item.value}
                                className={`flex justify-between text-base rounded-xl p-6 ${
                                  checkedOptions[item.value]
                                    ? "bg-green-200 text-green-700"
                                    : "bg-neutral-100"
                                }`}
                              >
                                <span>{item.name}</span>
                                <input
                                  id={item.value}
                                  className="w-6 hidden"
                                  type="checkbox"
                                  {...register(item.value)}
                                  onChange={(e) => {
                                    const priceMap = {
                                      darkMode: 600,
                                      animationEffects: 800,
                                      transitionEffects: 800,
                                      googleReviews: 400,
                                    };

                                    const updateTotalPrice = (
                                      value,
                                      checked,
                                    ) => {
                                      setTotalPrice((prevTotalPrice) =>
                                        checked
                                          ? prevTotalPrice + priceMap[value]
                                          : prevTotalPrice - priceMap[value],
                                      );
                                    };

                                    if (priceMap.hasOwnProperty(item.value)) {
                                      updateTotalPrice(
                                        item.value,
                                        e.target.checked,
                                      );
                                    }

                                    handleCheckboxChange(item.value);

                                    setValue(item.value, e.target.checked);
                                  }}
                                />
                              </label>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    <div className="mt-8 pb-6 flex justify-between">
                      <div className="max-sm:text-base text-lg font-medium">
                        Total Price: ${totalPrice}
                      </div>
                      {!isNext && (
                        <button
                          type="button"
                          className="flex gap-4 max-[500px]:text-base text-lg justify-center rounded-md border border-transparent bg-neutral-900 px-6 py-2 font-medium text-white focus:outline-none hover:animate-pulse transition-colors ease-linear duration-300"
                          onClick={() => setIsNext(true)}
                        >
                          <span>Next Step</span>
                        </button>
                      )}
                      {isNext && (
                        <div className="flex gap-4">
                          <button
                            type="submit"
                            className="flex gap-4 text-lg justify-center rounded-md border border-transparent bg-neutral-900 px-6 py-2 font-medium text-white focus:outline-none hover:animate-pulse transition-colors ease-linear duration-300"
                            onClick={() => {
                              handleSubmit(onSubmit);
                            }}
                          >
                            <span>Request</span>
                            <div
                              className={
                                isLoading === false ? "hidden" : "block"
                              }
                            >
                              <Image
                                src={loading}
                                width={24}
                                className="animate-spin mt-[1px]"
                              />
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomModal;
