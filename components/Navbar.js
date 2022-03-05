import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import supabase from "../utils/supabaseClient";

export default function Navbar({ authenticated }) {
  const [userAuthenticated, setUserAuthenticated] = useState(authenticated);

  const router = useRouter();

  useEffect(() => {
    fetchDashboard();
  }, [userAuthenticated]);

  async function fetchDashboard() {
    const profileData = await supabase.auth.user();
    !profileData ? null : setUserAuthenticated(profileData);
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  //  console.log("user is:", userAuthenticated.aud);

  return (
    <Popover className="fixed z-10 w-full bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a
              href={userAuthenticated.role === "authenticated" ? "/protected" : "/"}
              className="flex">
              <span className="sr-only">Sp nsors</span>
              <Image
                className="h-8 w-auto sm:h-10 object-contain"
                src="/images/logo.png"
                width={132}
                height={45}
                alt="logo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden text-base text-center font-medium md:text-sm md:flex-1 text-gray-500 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <a href="/sponsors">
                <span className="text-base md:text-sm font-medium text-gray-500 hover:text-gray-900">
                  Sponsors
                </span>
              </a>
              <a
                href="/creators"
                className="text-base text-center md:text-sm font-medium text-gray-500 hover:text-gray-900">
                Creators
              </a>
              <a
                href="/invest"
                className="text-base md:text-sm text-center font-medium text-gray-500 hover:text-gray-900">
                Investment Opportunities
              </a>
              <a
                href="/contact"
                className="text-base md:text-sm text-center font-medium text-gray-500 hover:text-gray-900">
                Contact Us
              </a>
            </Popover.Group>
            <div className="flex items-center w-32 bg-red-400 rounded-md h-8  md:ml-12">
              {userAuthenticated.aud !== "authenticated" ? (
                <Link
                  href={"/login"}
                  className="ml-8 inline-flex md:text-sm text-center items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700">
                  <a className="text-white text-center m-auto">Sign In | Sign Up</a>
                </Link>
              ) : (
                <button onClick={() => signOut()}>Sign Out</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/images/berdome.png" alt="TuberDome" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="/sponsors"
                      className="rounded-md text-center md:text-sm text-base font-medium text-gray-900 hover:text-gray-700">
                      Sponsors
                    </a>

                    <a
                      href="/creators"
                      className="rounded-md text-center md:text-sm text-base font-medium text-gray-900 hover:text-gray-700">
                      Creators
                    </a>
                    <a
                      href="/invest"
                      className="md:text-sm text-center text-base font-medium text-gray-500 hover:text-gray-900">
                      Investment Opportunities
                    </a>
                    <a
                      href="/contact"
                      className="rounded-md text-center md:text-sm text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact Us
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                {userAuthenticated.aud !== "authenticated" ? (
                  <Link
                    href={"/login"}
                    className="ml-8 md:text-sm text-center text-base inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-gray-600 hover:bg-gray-700">
                    <a>Sign In | Sign Up</a>
                  </Link>
                ) : (
                  <button onClick={() => signOut()}>Sign Out</button>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
