import Head from "next/head";
import { useState } from "react";

import channelList from "../components/channelList";
import CreatorsList from "../components/CreatorsProfile";
import Jumbotron from "../components/Hero";
import Search from "../components/Search";
import TuberOne from "../components/TuberOne";
import supabase from "../utils/supabaseClient";

export default function Home({ finalData, data2 }) {
  const [creators, setCreators] = useState(channelList);
  console.log("DATA: ", data2);

  return (
    <>
      <Head>
        <title>TuberDome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="TuberDome description here" />
      </Head>
      <div>
        <>
          <main className="bg-gradient-to-r from-gray-500 via-gray-200 to-gray-800 ">
            <Jumbotron />
            <div className="pt-5 flex justify-center items-center">
              <div className="space-y-5 text-center px-3 pt-3 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Connect with genius Creators
                </h2>
                <Search />
                <p className="text-xl text-gray-500 flex justify-center items-center">
                  By Name | By Category | By Content
                </p>
              </div>
            </div>
            <div className="center-grid grid m-auto grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative scrollbar-hide p-3 -ml-3 w-full sm:w-4/5 md:w-4/5 lg:w-4/5">
              {finalData?.slice(0, 3)?.map((data) => (
                <div key={data?.name} className="m-auto w-11/12">
                  <div className="pt-5 ">
                    <CreatorsList {...data} />
                  </div>
                </div>
              ))}
            </div>
            <TuberOne />
            <div className="center-grid grid m-auto grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative scrollbar-hide p-3 -ml-3 w-full sm:w-4/5 md:w-4/5 lg:w-4/5">
              {creators?.slice(5, 17)?.map((data) => (
                <div key={data?.id} className="m-auto w-11/12">
                  <div className="pt-5 ">
                    <CreatorsList {...data} />
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  //Base Url
  const baseUrl = "http://localhost:3000"; //"https://www.tuberdome.com"
  const gBaseUrl = "https://www.googleapis.com/youtube/v3";

  const channelID = [`UCNqpN335uVY9Sx_ZK_WuOAA`];

  //  fetching data
  //  const youtubeData = await fetch(
  //    `${gBaseUrl}/channels?id=${channelID[0]}&part=snippet,contentDetails,statistics,contentOwnerDetails&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`,
  //    {
  //      method: "GET",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //    },
  //  );

  const data = await fetch(
    `${gBaseUrl}/videoCategories?part=snippet&regionCode=US&key=${process.env.YOUTUBE_API_KEY}`,
  ).then((res) => res.json());

  const data2 = await fetch(
    `${gBaseUrl}/channels?part=snippet,contentDetails,statistics&id=${channelID}&key=${process.env.YOUTUBE_API_KEY}`,
  ).then((res) => res.json());

  const initialData = await fetch(`${baseUrl}/api/channels`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const finalData = await initialData.json();

  const { data: creators, error } = await supabase.from("creators").select("*");
  if (error) {
    throw new Error(error);
  }

  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (user) {
    return {
      props: {},
      redirect: { destination: "/protected" },
    };
  }

  //Return data
  return {
    props: {
      finalData,
      creators,
      user,
      data,
      data2,
    },
  };
}
