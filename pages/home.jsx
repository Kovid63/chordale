import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { songContext } from '../contexts/songContext'


const Home = () => {


  const num = [
    'https://i.pinimg.com/originals/a9/b3/90/a9b3905125df666bc381e002f4ff0178.jpg',
    'https://i.pinimg.com/736x/42/a5/74/42a5744c4691af02777bce7cfd6da311.jpg',
    'https://i.pinimg.com/736x/d1/7e/f9/d17ef9201845ed7aa70b000af122f64e.jpg',
  ]

  const { card, setCard } = useContext(songContext);

  const [mount, setMount] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
      if (!mount) setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;

    const init = async() => {
      const res = await fetch('/api/getSongs');
      const result = await res.json();
      setData(result.body)
    }
   
    init();
}, [mount]);


  const [bannerImageIndex, setBannerImageIndex] = useState(0)


  useEffect(() => {
    const run = setInterval(() => {
      bannerImageIndex < num.length - 1 ? setBannerImageIndex(bannerImageIndex + 1) : setBannerImageIndex(0);
    }, 3000);
    return () => clearInterval(run);
  }, [bannerImageIndex])

  const songHandler = async(url, title, artists, artwork) => {
   setCard({...card, url: url, show: true, title: title, artists: artists, artwork: artwork});
  }

  


  return (
    <div className='flex flex-col bg-white min-h-screen w-11/12 mr-5 rounded-3xl'>
      <p className='font-body ml-10 mt-8 text-4xl'>Home</p>
      <div className='relative ml-10 mt-5 h-1/3 w-1/3'>
        <Image alt='' sizes='' fill quality={100} className='object-cover rounded-3xl' src={num[bannerImageIndex]} />
        <div className='absolute right-4 top-1/2'>
          {num.map((num, index) => (
            <div key={index} className={`bg-white ${bannerImageIndex == index ? 'h-2' : 'h-1'} w-1 rounded-full my-1`}>
            </div>
          ))}
        </div>
      </div>
      <p className='font-body text-xl mt-5 ml-10'>Trending Right Now</p>
      <div className='ml-10 mt-5 font-body'>
        {
          data.map((song, index) => (
            <div onClick={() => { songHandler('https://ipfs.io/ipfs/'+ song.cid, song.title, song.artists, 'https://ipfs.io/ipfs/'+song.artwork_cid) }} className='flex items-center' key={index}>
              <p className='text-gray-600'>{index < 11 ? '0'+(index+1) : index+1}</p>
              <div className='relative h-10 w-10 ml-2'>
                <Image fill alt='' className='object-cover rounded-lg' src={'https://ipfs.io/ipfs/'+song.artwork_cid}/>
              </div>
              <div>
                <p className='ml-5'>{song.title}</p>
                <p className='text-gray-600 ml-5 font-body text-sm'>{song.artists}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home