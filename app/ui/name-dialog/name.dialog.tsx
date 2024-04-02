"use client";
import { useState, FormEvent } from "react";
import { useStores } from "../../store";

export const NameDialog = () => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const { userStore } = useStores();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "") {
      userStore.addUserName(name);
      setIsVisible(false);
    }
  };

  const isSubmitDisabled = !name.trim();
  return (
    <>
      {isVisible && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-95 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-lg font-semibold mb-4 text-black justify-center'>
              Enter Your Name
            </h2>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded mb-4 text-black'
              placeholder='Your Name'
            />
            <button
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
              className={`px-6 py-2 bg-blue-500 text-white rounded ${
                isSubmitDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
