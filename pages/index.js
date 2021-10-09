import Head from "next/head";
import { useSession } from "next-auth/client";
import Jumbotron from "../components/Hero";
import CreatorsList from "../components/CreatorsProfile";
import TuberOne from "../components/TuberOne";
import Dashboard from "./protected";
import Search from "../components/Search";
import finalData from "../components/channelList";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>TuberDome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="TuberDome description here" />
      </Head>
      <div>
        {!session && (
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
              <div className="center-grid grid m-auto grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 relative overflow-scroll scrollbar-hide p-3 -ml-3 w-full sm:w-4/5 md:w-4/5 lg:w-4/5">
                {finalData?.slice(0, 4)?.map((data) => (
                  <div key={data?.name} className="m-auto w-11/12">
                    <div className="pt-5 ">
                      <CreatorsList
                        name={data?.name}
                        image={data?.image}
                        description={data?.description}
                        categories={data?.categories}
                        subscribers={data?.subscribers}
                        total_views={data?.total_views}
                        rate={data?.rate}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <TuberOne />
              <div className="center-grid grid m-auto grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 relative overflow-scroll scrollbar-hide p-3 -ml-3 w-full sm:w-4/5 md:w-4/5 lg:w-4/5">
                {finalData?.slice(5, 17)?.map((data) => (
                  <div key={data?.name} className="m-auto w-11/12">
                    <div className="pt-5 ">
                      <CreatorsList
                        name={data?.name}
                        image={data?.image}
                        description={data?.description}
                        categories={data?.categories}
                        subscribers={data?.subscribers}
                        total_views={data?.total_views}
                        rate={data?.rate}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </>
        )}
        {session && (
          <>
            <Dashboard />
          </>
        )}
      </div>
    </>
  );
}

// export async function getStaticProps(context) {
//   //Base Url

//   const baseUrl = "https://www.tuberdome.com";

//   const initialData = await fetch(`${baseUrl}/api/channels`, {
//     method: "GET",
//     headers: {
//       // update with your user-agent
//       "User-Agent":
//         "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
//       Accept: "application/json; charset=UTF-8",
//     },
//   });

//   const finalData = await initialData.json();
//   console.log(finalData);

//   //Return data
//   return {
//     props: {
//       finalData,
//     },
//   };
// }
