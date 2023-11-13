import { useState } from "react";
import FormModal from "./FormModal";

const BuildNowButton = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openModal = () => {
    setIsFormModalOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex p-4 justify-center font-semibold lg:text-2xl text-lg lg:block bg-blue-300 text-blue-900 rounded-xl self-end lg:w-full w-full hover:scale-[0.99]"
      >
        Build Now
      </button>
      {isFormModalOpen && (
        <FormModal closeModal={() => setIsFormModalOpen(false)} />
      )}
    </>
  );
};

export default BuildNowButton;
