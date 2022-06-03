/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import React from 'react'
import SearchHeader from '../components/SearchHeader'
import SearchResult from '../components/SearchResult';
import Response from '../Response';

import { useRouter } from 'next/router';
import ImageResults from '../components/ImageResults';

export default function Search({results}) {
  
  const router = useRouter();
  return (
      <>
      <Head>
          <title>{router.query.term} - Search Page</title>
      </Head>
  
      <SearchHeader/>

      {router.query.searchType === "image" ? (
        <ImageResults results={results}/>

      ) : (
        <SearchResult results={results}/>
      )}
      </>
  )
}

export async function getServerSideProps(context){
  const startIndex = context.query.start || "1"
  const mockData = false
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response) => response.json())
  return {
    props: {
      results: data
    }
  }
}
