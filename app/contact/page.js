"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "@/styles/ReactToastify.css";
import { useState } from "react";
import loading from "@/public/loading.webp";
import axios from "axios";

const Contact = () => {
  const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    e.preventDefault();

    const url = "https://webtion.org/api/contact";

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("We've received your request.", {
          position: toast.POSITION.TOP_RIGHT,
        });

        reset();
        setTimeout(() => {
          setIsLoading(false);
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
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`flex justify-center items-center sm:mt-12 max-sm:mb-24`}>
      <div className="flex flex-col gap-8  rounded-2xl p-6 sm:w-[800px] ">
        <div className="">
          <h1 className="text-5xl max-sm:text-4xl font-semibold tracking-tight">
            Love to hear from you,
          </h1>
          <h1 className="text-5xl max-sm:text-4xl font-semibold tracking-tight ">
            Get in touch &#128578;
          </h1>
        </div>
        <form
          className="flex flex-col gap-4 w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-divs">
            <div className="form-divs-inner">
              <span>Name *</span>
              <input
                type="text"
                {...register("fullName", {
                  required: "Required",
                })}
                placeholder="Full Name"
              />

              {errors.fullName && errors.fullName.message}
            </div>
            <div className="form-divs-inner">
              <span>Email *</span>
              <input
                type="email"
                placeholder="Personal/Work Email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>
          </div>
          <div className="form-divs">
            <div className="form-divs-inner">
              <span>Business Name</span>
              <input
                {...register("companyName")}
                placeholder="Enterprise/Organisation Name"
              />
              {errors.companyName && errors.companyName.message}
            </div>
            <div className="form-divs-inner">
              <span>Business Address</span>
              <input
                {...register("companyAddress")}
                placeholder="Enterprise/Organisation Address"
              />
              {errors.companyAddress && errors.companyAddress.message}
            </div>
          </div>

          <div className="flex flex-col pt-2">
            <div className="flex justify-between">
              <span className="py-1">Message</span>
              <span className="self-end py-1 text-black">
                {textAreaCount}/500
              </span>
            </div>
            <textarea
              className="bg-gray-100"
              placeholder="Description"
              {...register("description", {
                required: "Required",
              })}
              rows={7}
              maxLength={500}
              onChange={(e) => ChangeTextAreaCount(e.target.value.length)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="text-xl mt-3 active:scale-90 bg-black hover:bg-neutral-700 p-2 w-[200px] text-white transition-colors duration-200 ease-in"
          >
            <Image
              src={loading}
              width={24}
              alt="loading icon"
              className={
                isLoading === true
                  ? "absolute mt-[2px] ml-3 animate-spin"
                  : "hidden"
              }
            />{" "}
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
