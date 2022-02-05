import React, { useState } from "react";

//import Dashboard from "./protected";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login or Sign up</h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">As Creator with:</p>

                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <div>
                      <button
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        onClick={""}>
                        <span className="sr-only">Login / Sign up with Google</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="22px"
                          height="22px">
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          />
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div>
                      <button
                        onClick={""}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Login / Sign up with Twitch</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="22px"
                          height="22px">
                          <path
                            fill="#7e57c2"
                            d="M42,27.676c-3,3.441-6,6.882-9,10.324c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c-1,0-2,0-3,0 c0-2,0-4,0-6c-3.333,0-6.667,0-10,0c0-7.431,0-14.863,0-22.294C7.455,12.804,8.909,9.902,10.364,7C20.909,7,31.455,7,42,7 C42,13.892,42,20.784,42,27.676z"
                          />
                          <path
                            fill="#fafafa"
                            d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6 c-2.667-0.008-5.333-0.016-8-0.024c0-7.326,0-14.651,0-21.976c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z"
                          />
                          <rect width="3" height="10" x="21" y="16" fill="#7e57c2" />
                          <rect width="3" height="10" x="30" y="16" fill="#7e57c2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-6" action="#" method="POST">
                    <div className=" mt-5">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Or via email address associated with your account
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Get login link sent to your email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={""}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white font-bold text-gray-900">
                      Or proceed below as Sponsor
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        placeholder="Get login link sent to your email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={""}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="../images/streamer.jpg"
            alt="streamers"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
