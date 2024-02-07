import "@/styles/globals.css";
import Header from '@/src/components/Header/Header';

export default function App({ Component, pageProps }) {
  return <>
          <Component {...pageProps} />
          <Header/>
        </>;
};
