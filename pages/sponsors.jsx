import {
  CalendarIcon,
  CurrencyDollarIcon,
  ChatAltIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const features = [
  {
    name: "Clear Communication",
    icon: ChatAltIcon,
    description:
      "When it comes to getting the word out, communication is king. We provide easy process for you to onboard and educate the sponsored party about your brand, products and services.",
  },
  {
    name: "Budgeting",
    icon: CurrencyDollarIcon,
    description:
      "Search and browse through channels in categories that aligns with your brand, view their rates per subscriber and/or begin negotiations by proposing your own budget.",
  },
  {
    name: "Launch",
    icon: CalendarIcon,
    description:
      "Plan and coordinate campaign / messaging with sponsored party, and set campaign launch date accordingly with useful tools.",
  },
  {
    name: "Measurable Success",
    icon: ChartBarIcon,
    description:
      "Monitor and measure success rate through clicks and user engagement via dashboard.",
  },
];
const checklist = [
  "1",
  "2",
  "3",
  "Search Creators by categories",
  "Find and Onboard Creators",
  "Propose budget & Launch",
];

function sponsors() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/api/auth/signin");
  };

  return (
    <>
      <div className="relative bg-white">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-red-700" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
          <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-red-600 uppercase">
                Get the word out
              </h2>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Everything you need to sponsor a bona fide YouTuber.
              </p>
              <dl className="mt-12 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 flex items-center justify-center bg-red-500 rounded-md">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-red-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
            <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
              <div>
                <p className="relative grid">
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">
                      How it works
                    </span>
                  </span>
                </p>
              </div>
              <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-3">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="bg-red-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white"
                  >
                    <span className="text-center aligntext">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleClick}
                className="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-red-600 hover:bg-red-50 md:px-10"
              >
                Get a free account today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sponsors;
