"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import humanImage from "@/public/waving.webp";
import { ToastContainer, toast } from "react-toastify";
import "@/styles/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://webtion.vercel.app/api/contact", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const serverResponse = response;

      if (serverResponse.status === 200) {
        toast.success("We've received your request.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(
          "Message Send Failed !! Please contact us if you are having this issue",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex h-[85vh] lg:justify-evenly justify-center bg-gradient-to-t from-teal-600 to-blue-900 lg:rounded-tl-full`}
    >
      <div>
        <Image
          src={humanImage}
          width={500}
          height={500}
          alt="Human Interaction"
          className="lg:block hidden"
          priority
        />
      </div>
      <div className="flex flex-col text-white gap-8 max-sm:-mt-20 self-center ">
        <h1 className="contact text-7xl font-semibold tracking-tight">
          Contact Us
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
              <span className="text-sm self-end text-neutral-300">
                {textAreaCount}/500
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
            className="text-xl mt-3 tracking-wide active:scale-90 bg-neutral-200 hover:bg-white rounded-lg self-end p-2 w-1/2 text-black"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
