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
                  A decentralized autonomous organization (DAO) is an organization represented by
                  rules encoded as a computer program that is transparent, controlled by the
                  influenced by a central government or any board. A DAO's financial transaction
                  record and program rules are maintained on a blockchain. This means they are not
                  controlled by a single institution like a government or central bank, but instead
                  are divided among a variety of computers, networks, and nodes. In many currencies
                  currencies make use of this decentralized status to attain levels of privacy and
                  security that are typically unavailable to standard currencies and their
                  transactions.
                </p>
                <div className="mt-6">
                  <a
                    href="#mission"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
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
              <svg viewBox="0 0 500 500" width="100%" id="blobSvg">
                <defs>
                  <pattern
                    id="pattern"
                    x="0"
                    y="0"
                    width="28"
                    height="49"
                    patternUnits="userSpaceOnUse"
                    fill="#d1d8e0">
                    <path d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"></path>
                  </pattern>
                </defs>
                <path
                  id="blob"
                  d="M475,287.5Q482,325,454,351.5Q426,378,409,411.5Q392,445,358.5,463Q325,481,287.5,482.5Q250,484,213.5,479.5Q177,475,146,455.5Q115,436,81.5,416Q48,396,37,359.5Q26,323,13,286.5Q0,250,10,212.5Q20,175,41,144.5Q62,114,94,96.5Q126,79,156.5,67Q187,55,218.5,45Q250,35,283,40.5Q316,46,346.5,60.5Q377,75,411,91.5Q445,108,453.5,144.5Q462,181,465,215.5Q468,250,475,287.5Z"
                  fill="url(#pattern)"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div
          id="mission"
          className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-red-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl mt-4 font-bold  text-gray-500">The Opportunity</h2>
                <div>
                  <p className="text-base text-gray-500">
                    There are countless creators on social media platforms with a ridiculous amount
                    of followers. While these platforms monetize users and their followers through
                    advertisements, these creators can accept, and are looking for sponsorship
                    opportunities. One of the big issues is that the sponsors have to approach each
                    one of these creators individually, and don't quite have a way to track
                    tractions, failures/successes on campaigns. That is where we come in
                  </p>
                </div>
                <h2 className="text-2xl mt-4 font-extrabold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-base text-gray-500">
                  Our mission is to build a community-owned decentralized robust marketing platform
                  that connects Brands and Marketers alike with social media content creators.
                </p>
                <div className="mt-6">
                  <a
                    href="#ourdao"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
                    Learn about our DAO
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <svg viewBox="0 0 500 500" width="100%" id="blobSvg">
                <defs>
                  <pattern
                    id="pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    fill="#d1d8e0">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40"></path>
                  </pattern>
                </defs>
                <path
                  id="blob"
                  d="M469.5,288.5Q488,327,453,349.5Q418,372,399.5,401Q381,430,348,440.5Q315,451,282.5,453Q250,455,214,463Q178,471,154.5,442Q131,413,93,402.5Q55,392,34,359.5Q13,327,22,288.5Q31,250,37.5,216.5Q44,183,57,151Q70,119,98.5,100Q127,81,155.5,64Q184,47,217,31.5Q250,16,288,16Q326,16,354,42Q382,68,417,85.5Q452,103,447,145Q442,187,446.5,218.5Q451,250,469.5,288.5Z"
                  fill="url(#pattern)"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          id="ourdao"
          className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-red-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our DAO</h2>
                <p className="text-base text-gray-500">
                  Our DAO makes it easy for potential investors to participate various levels of
                  ownership along with our community or investors. Investor members can find
                  real-time report on daily transactions made via the Dashboard.
                </p>
                <div className="mt-6">
                  <a
                    href="#ourdao"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
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
