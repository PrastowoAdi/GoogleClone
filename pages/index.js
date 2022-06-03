/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline"
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const inputSearchRef = useRef(null);
  function search (event){
    event.preventDefault();
    //Term for not allowed space when search
    const term = inputSearchRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`) 
  }
  async function randomSearch (event){
    event.preventDefault();
    //Term for not allowed space when search
    const randomTerm = await fetch("https://random-word-api.herokuapp.com/word?number=1").then((response) => response.json())
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`) 
  }
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Genarate by Next App"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>

      <form className="flex flex-col items-center mt-40">
        <Image width="300" height="100" src="/img/google-logo.png" objectFit="contain"/>
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 text-gray-500 mr-2"/>
            <input ref={inputSearchRef} type="text" className="flex-grow focus:outline-none"/>
            <MicrophoneIcon className="h-5"/>
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={randomSearch} className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>

      <Footer/>
    </div>
  )
}