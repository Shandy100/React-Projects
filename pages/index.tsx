import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Shandy</title>
        <link rel="icon" href="/svs-_1_.ico" />
      </Head>
      <h1 className='text-4xl text-red-500 font-bold' >Welcome to the NFT DROP CHALLENGE</h1>
    </div>
  )
}

export default Home