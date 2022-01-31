import "./styles.css";

import { SessionProvider } from "next-auth/react";

import Layout from "../components/layout";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
