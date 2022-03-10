import { FilterIcon } from "@heroicons/react/outline";
import { SortAscendingIcon, UsersIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useEffect, useState } from "react";

import channelList from "../components/channelList";
import CreatorsList from "../components/CreatorsProfile";
import Jumbotron from "../components/Hero";
import TuberOne from "../components/TuberOne";
import supabase from "../utils/supabaseClient";

export default function Home({ channelID, response }) {
  const [creators, setCreators] = useState(channelID);
  const [ethRate, setEthRate] = useState(response.data[1].quote.USD.price);
  const [search, setSearch] = useState("");

  const creatorsList = creators.map((creator) => {
    return creator[0];
  });

  useEffect(() => {
    setEthRate(ethRate);
  }, [ethRate]);

  const searchDataKeys = ["name", "description", "category"];

  //  const creatorSearch = (data) => {
  //    return data.filter((creator) => searchDataKeys.some((key) => creator[key].toLowerCase().includes(search.toLowerCase())));
  //  };

  //  creatorsSearch();

  return (
    <>
      <Head>
        <title>Sp nsors</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Sp nsors description here"></meta>
      </Head>
      <div>
        <>
          <main className="bg-gradient-to-r from-gray-500 via-gray-200 to-gray-800 ">
            <Jumbotron />
            <TuberOne />

            {/*Search Creators*/}
            <div className="pt-5 flex justify-center items-center">
              <div className="space-y-5 text-center px-3 pt-3 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Connect with genius Creators
                </h2>
                <div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Search Creators
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          onChange={(e) => setSearch(e.target.value)}
                          value={search}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <button
                        type="button"
                        className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Sort</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-500 flex justify-center items-center">
                  By Name | By Category | By Content
                </p>
              </div>
            </div>

            {/*Creators listings*/}
            <div className="center-grid grid m-auto grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative scrollbar-hide p-3 -ml-3 w-full sm:w-4/5 md:w-4/5 lg:w-4/5">
              {creatorsList
                ?.slice(0, 18)
                .filter((data) => {
                  const { title } = data.snippet;
                  return <>{title.toLowerCase().includes(search.toLowerCase())}</>;
                })
                .map((data) => {
                  const { title } = data.snippet;
                  const { description } = data.snippet;
                  const { high } = data.snippet.thumbnails;
                  const { subscriberCount } = data.statistics;
                  const { viewCount } = data.statistics;

                  return (
                    <div key={data?.id} className="m-auto w-11/12">
                      <div className="pt-5 ">
                        <CreatorsList
                          title={title}
                          description={description}
                          image={high.url}
                          subscribers={subscriberCount}
                          viewCount={viewCount}
                          ETH={ethRate}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </main>
        </>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  //Base Url
  const gBaseUrl = "https://www.googleapis.com/youtube/v3";
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  //  Youtube related
  const channelID = [];

  for (const channel of channelList) {
    const channelData = await fetch(
      `${gBaseUrl}/channels?part=snippet,contentDetails,statistics&id=${channel.channelID}&key=${process.env.YOUTUBE_API_KEY}`,
    ).then((res) => res.json());
    channelID.push(channelData.items);
  }

  const categoryData = await fetch(
    `${gBaseUrl}/videoCategories?part=snippet&regionCode=US&key=${process.env.YOUTUBE_API_KEY}`,
  ).then((res) => res.json());

  const { data: creators, error } = await supabase.from("creators").select("*");
  if (error) {
    throw new Error(error);
  }

  //Supabase Related
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (user) {
    return {
      props: {},
      redirect: { destination: "/protected" },
    };
  }

  // CoinMarketCap Related

  const response = await fetch(url, {
    headers: {
      "X-CMC_PRO_API_KEY": `${process.env.CMC_PRO_API_KEY}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  await supabase
    .from("creators")
    .select("*")
    .then((res) => channelID.push(res.data));

  //Return data
  return {
    props: {
      creators,
      user,
      categoryData,
      channelID,
      response,
    },
  };
}
