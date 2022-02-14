//import { useState } from "react";

import SlideInfo from "../pages/slideinfo";

//function classNames(...classes) {
//  return classes.filter(Boolean).join(" ");
//}

export default function CreatorsList({ title, description, subscribers, viewCount, image }) {
  const handleClick = () => {
    <SlideInfo />;
  };

  return (
    <>
      {/* LISTINGS BEGINS */}
      <div className="disp-card flex flex-col mx-auto rounded-lg bg-white justify-center items-center pt-5 pb-5">
        <ul className="grid grid-cols-1 text-center p-9 sm:w-full lg:w-full rounded-lg ">
          <li className="flex flex-col">
            <img src={image} alt="creators" className="m-auto object-cover rounded-lg pb-4 w-80 " />
          </li>
          <li className="flex flex-col text-2xl">{title}</li>
          <li className="truncate ... flex flex-wrap flex-col">{description}</li>
          {/*<li>Category: {categories}</li>*/}
          <div className="-mt-px flex divide-x divide-gray-100">
            <div className="-ml-px w-0 flex-1 flex">
              <a
                href=""
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg ">
                <span className="px-8">
                  Subscribers: {String(subscribers).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
                </span>
                <span className="">
                  Views: {String(viewCount).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
                </span>
              </a>
            </div>
          </div>
          <button
            className="hover:text-gray-500 w-8/12 h-8 bg-gray-100 rounded-lg text-gray-700 flex justify-center items-center m-auto"
            onClick={handleClick}>
            <img className="w-4" src="/images/ethereum.png" alt="ethereum logo" /> Get my rates
          </button>
        </ul>
      </div>
    </>
  );
}
