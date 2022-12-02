import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { storage } from "../storage";
import { Provider } from "react-redux";

import LeftSortingBar from "../component/LeftSortingBar/LeftSortingBar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={storage}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          display: "flex",
        }}
      >
        <LeftSortingBar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
