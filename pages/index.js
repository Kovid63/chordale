import Head from 'next/head'
import SideNavBar from '../components/SideNavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chordale</title>
        <meta name="description" content="Neverstop listening"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <SideNavBar/>
    </>
  )
}
