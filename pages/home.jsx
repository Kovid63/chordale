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




  const [bannerImageIndex, setBannerImageIndex] = useState(0)


  useEffect(() => {
    const run = setInterval(() => {
      bannerImageIndex < num.length - 1 ? setBannerImageIndex(bannerImageIndex + 1) : setBannerImageIndex(0);
    }, 3000);
    return () => clearInterval(run);
  }, [bannerImageIndex])

  const songHandler = async(url) => {
   setCard({...card, url: url, show: true});
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
      <p onClick={() => { songHandler('https://ipfs.io/ipfs/QmbfZUyYENs7mdyiSahCvLCXkYQPjBXo1VRY7tYSQyhRMV') }} className='font-body text-xl mt-5 ml-10'>Trending Right Now</p>
    </div>
  )
}

export default Home