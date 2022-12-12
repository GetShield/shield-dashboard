"use client";

import { Listbox } from "@headlessui/react";
import React, { useEffect } from "react";
import { IoArrowDownSharp, IoCheckmark } from "react-icons/io5";
import { useUserStore } from "../state/user/useUserStore";

const ChannelSelect = ({ currentChannel }: { currentChannel: string }) => {
  const channels = [
    { id: 1, name: `#${currentChannel}`, unavailable: false },
    { id: 3, name: "#spam", unavailable: false },
    { id: 4, name: "#degen", unavailable: false },
  ];

  const selectedChannel = useUserStore((state) => state.selectedChannel);
  const setSelectedChannel = useUserStore((state) => state.setSelectedChannel);

  useEffect(() => {
    setSelectedChannel(channels[0]);
  }, [currentChannel]);

  return (
    <div className="w-72">
      <Listbox
        value={selectedChannel}
        onChange={(newSelected) => {
          setSelectedChannel(channels[1]);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg border border-white/50 py-2 pl-3 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedChannel.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IoArrowDownSharp
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {channels.map((channel, channelIdx) => (
              <Listbox.Option
                key={channelIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-primary/10 text-primary" : "text-black"
                  }`
                }
                value={channels}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {channel.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                        <IoCheckmark className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default ChannelSelect;
