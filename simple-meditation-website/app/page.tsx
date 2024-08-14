import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "@/pages/LandingPage";
import Head  from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S1mH/PIp42bmbP7l5y6tnXKHiiqWASHWRsWoh6gwt6r5"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-B4gt1jrGC7Jh4AgJQnlgNwhXGIH9PSjjmSMI1x6Vp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <LandingPage></LandingPage>
    </>
  );
}
