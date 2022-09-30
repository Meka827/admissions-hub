import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { AppWrapper } from "../src/components/GlobalContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <Head>
        <title>BLUE OCEAN || ADMISSION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  );
}
export default MyApp;