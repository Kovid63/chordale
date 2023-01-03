import { useEffect, useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import SongCard from '../components/SongCard'
import '../styles/globals.css'
import * as IPFS from 'ipfs-core'
import { songContext } from '../contexts/songContext'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  const [mount, setMount] = useState(false);
  const [card, setCard] = useState({show: false, url: '', artwork: '', title: '', artists: '', duration: 0})


  useEffect(() => {
    if (!mount) setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;

    const init = async () => {
      //if (ipfs) return;
      //const node = await IPFS.create();
      // const nodeId = await node.id();
      // setIpfs(node);
      //const data = await node.add('hello');
      //console.log(data);
    }

    init();
  }, [mount]);


  return (
    <>
      <songContext.Provider value={{ card, setCard}}>
        <div className='flex flex-row'>
          <SideNavBar />
          <Component {...pageProps} />
        </div>
        <SongCard />
      </songContext.Provider>
    </>)
}
