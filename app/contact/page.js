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
    <div
      className={`flex h-[85vh] lg:justify-evenly justify-center  bg-blue-900 lg:rounded-tl-full`}
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
          className="flex flex-col gap-3 w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <span>Full Name</span>
            <input {...register("fullName")} placeholder="Name" />
            {errors.username && errors.username.message}
          </div>
          <div className="flex flex-col">
            <span>Company Name</span>
            <input
              {...register("companyName")}
              placeholder="Enterprise/Organisation Name"
            />
            {errors.username && errors.username.message}
          </div>
          <div className="flex flex-col ">
            <span>Email</span>
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
            <div className="flex justify-between">
              <span className="pb-2">Description</span>{" "}
              <span className="text-sm self-end">{textAreaCount}/500</span>
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
            className="text-xl  tracking-wide active:scale-90 bg-neutral-200 hover:bg-white rounded-lg self-end p-2 w-1/2 text-black"
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
