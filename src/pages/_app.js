import "styles/globals.scss";
import { Provider } from "react-redux";
import store from "redux/store";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-C5T2E022XR"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-C5T2E022XR');
        `}
      </Script>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
