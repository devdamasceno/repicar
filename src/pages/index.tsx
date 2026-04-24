import Head from "next/head";
import { Header } from "@/src/components/Header";
import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>RepicaR Estamparia</title>
        <meta name="description" content="Estamparia personalizada RepicaR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
    </>
  );
}