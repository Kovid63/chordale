import SideNavBar from '../components/SideNavBar'
import SongCard from '../components/SongCard'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='flex flex-row'>
        <SideNavBar/>
        <Component {...pageProps} />
      </div>
      <SongCard/>
    </>)
}
