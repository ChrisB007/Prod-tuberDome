import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { createClient } from "@supabase/supabase-js";
import { Fragment, useState } from "react";

import supabaseClient from "../utils/supabaseClient";

const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

export default function SetChannelId() {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);
  const [platform, setPlatform] = useState("");
  const [channelId, setChannelId] = useState("");
  const [submitted, setSubmitted] = useState([]);

  const allChannels = [
    {
      id: "0",
      label: "Select a platform",
      value: "",
    },
    {
      id: "1",
      label: "YouTube",
      value: "YouTube",
    },
    {
      id: "2",
      label: "Twitch",
      value: "Twitch",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (channelId && platform) {
      const newChannel = { platform, channelId };

      const { data, error } = await supabase.from("creators").insert([newChannel]);
      console.log(data, error);

      if (data) {
        setOpen(false);
      }

      setPlatform("");
      setChannelId("");
    } else {
      alert("One or more fields are empty!");
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Welcome to TuberDome!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      As this is your first time, please use the form below to set your channel ID
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <form id="class-form" className="channelForm" onSubmit={handleSubmit}>
                  <select
                    onChange={(e) => setPlatform(e.target.value)}
                    className="channel-options p-2 flex mt-5 w-11/12 text-center border-2">
                    {allChannels.map((channel) => {
                      return (
                        <option
                          className="mx-auto rounded-md"
                          key={channel.id}
                          value={channel.value}>
                          {channel.label}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    id="channel_id"
                    type="text"
                    name="channel_id"
                    value={channelId}
                    className="mt-5 mb-5 p-2 w-11/12 text-center border-2 rounded-md "
                    onChange={(e) => setChannelId(e.target.value)}
                    placeholder="Enter your Channel Id here"
                    required
                  />
                  <a
                    href={`https://www.youtube.com/account_advanced`}
                    target="_blank"
                    rel="noreferrer">
                    <p className="mb-4 text-center">Click here to find your Channel Id?</p>
                  </a>
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                    Set Channel ID
                  </button>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
