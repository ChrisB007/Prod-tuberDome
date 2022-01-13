/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  What is a DAO
                </h2>
                <p className="mt-4 text-base text-gray-500">
                  A decentralized autonomous organization (DAO) is an
                  organization represented by rules encoded as a computer
                  program that is transparent, controlled by the organization
                  members and not influenced by a central government or any
                  board. A DAO's financial transaction record and program rules
                  are maintained on a blockchain. This means they are not
                  controlled by a single institution like a government or
                  central bank, but instead are divided among a variety of
                  computers, networks, and nodes. In many cases, virtual
                  currencies make use of this decentralized status to attain
                  levels of privacy and security that are typically unavailable
                  to standard currencies and their transactions.
                </p>
                <div className="mt-6">
                  <a
                    href="#mission"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Our Mission
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote></blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="images/innovate.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div
          id="mission"
          className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-red-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl mt-4 font-bold  text-gray-500">
                  The Opportunity
                </h2>
                <div>
                  <p className="text-base text-gray-500">
                    There are countless creators on social media platforms with
                    a ridiculous amount of followers. While these platforms
                    monetize the users and their followers, these creators can
                    and are looking for and accepting sponsorship opportunities.
                    The issue is that the sponsors have to approach each creator
                    individually, and don't quite have a way to track tractions,
                    failures/successes on campaigns. That is where we come in.
                  </p>
                </div>
                <h2 className="text-2xl mt-4 font-extrabold text-gray-900">
                  Our Mission
                </h2>
                <p className="mt-4 text-base text-gray-500">
                  Our mission is to build a community-owned decentralized robust
                  marketing platform that connects Brands and Marketers alike
                  with social media content creators.
                </p>
                <div className="mt-6">
                  <a
                    href="#ourdao"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Learn about our DAO
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full smallbiz rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="images/smallbiz.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          id="ourdao"
          className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:grid-flow-col-dense lg:gap-24"
        >
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-red-600">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Our DAO
                </h2>
                <p className="text-base text-gray-500">
                  Our DAO makes it easy for potential investors to participate
                  in our community or investors. Our investor members can find
                  real-time report on daily transactions made via the Dashboard.
                </p>
                <div className="mt-6">
                  <a
                    href="#ourdao"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Investor Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
