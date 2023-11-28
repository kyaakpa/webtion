"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import humanImage from "@/public/waving.webp";
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

    const url = "https://webtion.vercel.app/api/contact";

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
    <div
      className={`flex h-[85vh] lg:justify-evenly justify-center  lg:rounded-tl-full`}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[800px] top-[100px] left-0 -z-10  lg:block hidden"
      >
        <path
          fill="#fad4fa"
          d="M25.7,-46.1C38.2,-37.3,56.4,-40.2,62.6,-34.5C68.8,-28.8,63,-14.4,63.3,0.2C63.6,14.8,70.2,29.6,67.3,41.1C64.5,52.6,52.2,60.8,39.4,65.1C26.6,69.4,13.3,69.8,-0.7,71C-14.6,72.1,-29.2,74,-35.5,66C-41.8,57.9,-39.9,39.9,-42,27.2C-44.1,14.6,-50.2,7.3,-53.5,-1.9C-56.8,-11,-57.1,-22.1,-54.4,-33.7C-51.7,-45.4,-46,-57.6,-36.5,-68.1C-26.9,-78.6,-13.5,-87.2,-3.4,-81.3C6.6,-75.4,13.3,-54.9,25.7,-46.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <div>
        <Image
          src={humanImage}
          width={500}
          height={500}
          alt="Human Interaction"
          className="lg:block hidden"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-8 max-sm:-mt-20 self-center rounded-2xl p-6 sm:w-[450px]">
        <h1 className="contact text-center text-7xl font-semibold -tracking-[6px]">
          CONTACT
        </h1>
        <form
          className="flex flex-col gap-6 w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <input {...register("fullName")} placeholder="Name" />
            {errors.username && errors.username.message}
          </div>
          <div className="flex flex-col">
            <input
              {...register("companyName")}
              placeholder="Enterprise/Organisation Name"
            />
            {errors.username && errors.username.message}
          </div>
          <div className="flex flex-col">
            <input
              {...register("companyAddress")}
              placeholder="Enterprise/Organisation Address"
            />
            {errors.username && errors.username.message}
          </div>
          <div className="flex flex-col ">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <div className="flex flex-col pt-2">
            <div className="flex justify-end">
              <span className="self-end text-black">
                <span className="font-medium text-lg">{textAreaCount}</span>/500
              </span>
            </div>
            <textarea
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
            className="text-xl mt-3 active:scale-90 bg-black hover:bg-neutral-700 rounded-lg self-end p-2 w-1/2 text-white transition-colors duration-200 ease-in"
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
