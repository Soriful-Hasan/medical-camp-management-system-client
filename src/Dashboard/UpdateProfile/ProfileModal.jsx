import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
const ProfileModal = ({ isOpen, close }) => {
  const { user } = useAuth();
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-2xl   rounded-xl bg-gray-50 p-6  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div className="text-center">
              <h1 className="text-2xl dark:text-white">
                Input your profile information
              </h1>
            </div>
            <form className="max-w-sm mx-auto space-y-8 mt-10">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={user?.displayName}
              />
              <div>
                <label htmlFor="image" className="block text-sm font-medium ">
                  Upload Profile Image *
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm text-sm 
              file:bg-blue-100 file:text-black file:border-none 
              file:px-4 file:py-2 file:rounded file:cursor-pointer"
                />
              </div>
              <div className="mt-4  flex ">
                <Button
                  className=" inline-flex items-center gap-2 rounded-md bg-my-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Update Profile
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProfileModal;
