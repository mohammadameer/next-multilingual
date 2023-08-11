import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useActualLocale } from "next-multilingual";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useActualLocale();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
