import React from "react";
import { Fragment } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

const features = [
  {
    name: "Why sponsor here?",
    href: "/whysponsor",
    description: "See why sponsoring a YouTuber on tuberDome is a smart choice",
    icon: ChartBarIcon,
  },
  {
    name: "Create an Account",
    href: "/signIn",
    description: "Set up a free account and launch a campaign today.",
    icon: ChartBarIcon,
  },
  {
    name: "Features & Tools",
    href: "#",
    description:
      "Make use of available features and reporting tools to help manage your campaigns",
    icon: CursorClickIcon,
  },
];
const callsToAction = [
  { name: "Become a Sponsor", href: "/signIn", icon: PlayIcon },
  { name: "Contact Sales", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const [session, loading] = useSession();
  const user = session?.user;
  console.log(session);
  console.log(user);

  return (
    <div className="sticky top-0 z-50">
      <Popover className="relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                <Link href={user ? "/dashboard" : "/"}>
                  <div className="flex cursor-pointer ">
                    <>
                      <span className="sr-only">TuberDome</span>

                      <a>
                        <svg
                          className="logosvg h-20 w-20 text-red-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>

                        <p className="logo mb-4">Dome</p>
                      </a>
                    </>
                  </div>
                </Link>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-white" : "text-gray-500",
                            "group rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          )}
                        >
                          <span>For Sponsors</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-white"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {features.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-green-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-700">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-700">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-500 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a
                    href="/creators"
                    className="text-base font-medium text-gray-500 hover:text-white"
                  >
                    For Creators
                  </a>

                  <a
                    href="/contact"
                    className="text-base font-medium text-gray-500 hover:text-white"
                  >
                    Contact Us
                  </a>
                </Popover.Group>
                {}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  {/* <span className="text-white">{userLoggedIn()}</span> */}
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Link href={user ? "/dashboard" : "/"}>
                          <div className="flex cursor-pointer ">
                            <>
                              <span className="sr-only">TuberDome</span>

                              <a>
                                <svg
                                  className="logosvg h-20 w-20 text-red-500"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  {" "}
                                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                </svg>

                                <p className="logo mb-4">Dome</p>
                              </a>
                            </>
                          </div>
                        </Link>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-green-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-700">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div>
                      <p className="">
                        {!session && (
                          <>
                            <span className="">You are not signed in</span>
                            <bu
                              href={`/api/auth/signin`}
                              className=""
                              onClick={(e) => {
                                e.preventDefault();
                                signIn();
                              }}
                            >
                              Sign in
                            </bu>
                          </>
                        )}
                        {session && (
                          <>
                            {session.user.image && (
                              <span
                                style={{
                                  backgroundImage: `url(${session.user.image})`,
                                }}
                                className=""
                              />
                            )}
                            <span className="">
                              <small>Signed in as</small>
                              <br />
                              <strong>
                                {session.user.email || session.user.name}
                              </strong>
                            </span>
                            <a
                              href={`/api/auth/signout`}
                              className=""
                              onClick={(e) => {
                                e.preventDefault();
                                signOut();
                              }}
                            >
                              Sign out
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default Nav;
