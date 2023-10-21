"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import humanImage from "@/public/humanVec.webp";

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="flex lg:justify-evenly justify-center">
      <Image
        src={humanImage}
        width={700}
        height={700}
        alt="Human Interaction"
        className="lg:block hidden"
      />
      <div className="flex flex-col text-white gap-8 w-[400px] self-center ">
        <h1 className="text-7xl font-semibold tracking-tight">Contact Us</h1>
        <form
          // onSubmit={handleSubmit(onSubmit)}
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
          <div className="flex flex-col ">
            <span>Description</span>
            <textarea
              placeholder="Description"
              {...register("description", {
                required: "Required",
              })}
              rows={7}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="text-xl  tracking-wide active:scale-90 bg-neutral-200 hover:bg-white rounded-lg self-end p-2 w-1/2 text-black hover:shadow-inner hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
