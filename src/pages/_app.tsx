import "@/styles/globals.css";
import "@/styles/templatemo-hexashop.css";
import "@/styles/bootstrap.min.css";
import "@/styles/css/flex-slider.css";
// import '@/styles/css/font-awesome.css'
import "@/styles/css/lightbox.css";
import "@/styles/css/owl-carousel.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
