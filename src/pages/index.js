import Head from "next/head";
import styles from "@/styles/Home.module.css";
import About from "@/components/About";
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Oticas Vida</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Header/>
      <section>
        <Cover/>
        <About/>
        <Products/>
      </section>
      <Footer/>
    </>
  );
}
