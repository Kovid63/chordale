import { useEffect, useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import SongCard from '../components/SongCard'
import '../styles/globals.css'
import * as IPFS from 'ipfs-core'
import { ipfsRepoContext } from '../contexts/IpfsRepoContext'

export default function App({ Component, pageProps }) {

  const [ipfs, setIpfs] = useState(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;

    const init = async () => {
      if (ipfs) return;
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
      <ipfsRepoContext.Provider value={{ipfs, setIpfs}}>
        <div className='flex flex-row'>

          <SideNavBar />
          <Component {...pageProps} />

        </div>
        <SongCard />
      </ipfsRepoContext.Provider>
    </>)
}
