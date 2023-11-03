"use client";
import { useForm } from "react-hook-form";

const ModalForm = () => {
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
    <Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-900 [&>*]:opacity-100 opacity-95 text-neutral-200 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium text-blue-500">
              Custom Build Options
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Select features you want in your website here. Click submit when
              you're done.
            </Dialog.Description>

            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="bg-green-500 text-green-100 text-lg hover:bg-green-600 h-[42px] items-center justify-center rounded-[4px] px-[20px] font-semibold "
                  aria-label="Submit"
                >
                  Submit
                </button>
              </Dialog.Close>
            </div>
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
      <div className="flex flex-col">
        <input
          {...register("companyName")}
          placeholder="Enterprise/Organisation Name"
        />
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
          {...register("companyName")}
          placeholder="Enterprise/Organisation Name"
        />
        {errors.username && errors.username.message}
      </div>
      <div className="flex flex-col">
        <input
          {...register("companyName")}
          placeholder="Enterprise/Organisation Name"
        />
        {errors.username && errors.username.message}
      </div>
    </form>
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
      )
    </Dialog.Root>}
  );
};
