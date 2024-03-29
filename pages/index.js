import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.replace('/home')
  }, [])
  

  return (
    <>
      <Head>
        <title>Chordale</title>
        <meta name="description" content="Neverstop listening" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
