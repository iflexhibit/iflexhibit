import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>iFLEXHIBIT</title>
        <meta
          name="description"
          content="iFLEXHIBIT is a content-sharing platform for iACADEMY students."
        />
      </Head>
      <Navbar />
    </>
  );
}
