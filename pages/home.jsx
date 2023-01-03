import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { songContext } from '../contexts/songContext'
import { ethers } from 'ethers'
import Head from 'next/head'


const Home = () => {

  const topArtist = [
    {
      name: 'Bad bunny',
      poster: 'https://i.pinimg.com/736x/22/7d/06/227d06c23246e8fd2593806848ec145f.jpg',
      plays: '18.5B',
      followers: '12M',
    },
    {
      name: 'Taylor Swift',
      poster: 'https://i.pinimg.com/originals/2a/68/54/2a6854b1ae2adeba73fcad76b773e3f5.jpg',
      plays: '13.7B',
      followers: '8M',
    },
    {
      name: 'Drake',
      poster: 'https://i.pinimg.com/originals/88/5f/c8/885fc86cd13afd6544fce447ec09f50a.jpg',
      plays: '12.4B',
      followers: '10M',
    },
  ]

  const fav = [
    {
      name: 'Hip-Hop',
      poster: 'https://i.pinimg.com/originals/e0/b4/38/e0b4389f83caa53997f27a282ceb2a94.jpg',
    },
    {
      name: 'Pop',
      poster: 'https://i.pinimg.com/736x/f3/05/df/f305dfb0a29154d4912c60e5ccadf377.jpg',
    }
  ]

  const num = [
    'https://i.pinimg.com/originals/a7/5d/b4/a75db43f7f6d051378c17d562463574b.jpg',
    'https://i.ytimg.com/vi/HQjT9CEZBPM/maxresdefault.jpg',
    'https://i.pinimg.com/originals/33/77/b9/3377b9aba38987d95b0547aa073e9f6c.jpg',
  ]

  const { card, setCard } = useContext(songContext);

  const [mount, setMount] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!mount) setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;

    const init = async () => {
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

  const songHandler = async (url, title, artists, artwork) => {
    setCard({ ...card, url: url, show: true, title: title, artists: artists, artwork: artwork });
  }




  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className='flex flex-row bg-white min-h-screen w-11/12 mr-5 rounded-3xl'>
      <div className='min-h-screen w-2/3'>
        <p className='font-body ml-10 mt-8 text-4xl'>Home</p>
        <div className='relative ml-10 mt-5 h-72 w-11/12'>
          <Image alt='' sizes='' fill quality={100} className='object-cover rounded-3xl' src={num[bannerImageIndex]} />
          <div className='absolute right-4 top-1/2'>
            {num.map((num, index) => (
              <div key={index} className={`bg-white ${bannerImageIndex == index ? 'h-2' : 'h-1'} w-1 rounded-full my-1`}>
              </div>
            ))}
          </div>
        </div>
        <p className='font-body text-xl mt-10 ml-10'>Trending Right Now</p>
        <div className='ml-10 mt-5 font-body'>
          {
            data.map((song, index) => (
              <div onClick={() => { songHandler('https://cloudflare-ipfs.com/ipfs/' + song.cid, song.title, song.artists, 'https://cloudflare-ipfs.com/ipfs/' + song.artwork_cid) }} className='flex items-center mt-5' key={index}>
                <p className='text-gray-600'>{index < 11 ? '0' + (index + 1) : index + 1}</p>
                <div className='relative h-10 w-10 ml-2'>
                  <Image fill alt='' className='object-cover rounded-lg' src={'https://cloudflare-ipfs.com/ipfs/' + song.artwork_cid} />
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
      <div className='flex flex-col w-1/3'>
        <p className='font-body text-2xl mt-10 ml-10'>Top Artists</p>
        <div className='mt-10 ml-10'>
          {
            topArtist.map((artist, index) => (
              <div className='flex mt-5 items-center' key={index}>
                <div className='relative h-10 w-10'>
                  <Image alt='' fill className='object-cover rounded-md' src={artist.poster} />
                </div>
                <div>
                  <p className='font-body text-md text-black ml-2'>{artist.name}</p>
                  <p className='font-body text-[12px] text-gray-500 ml-2'>{artist.plays} • {artist.followers}</p>
                </div>
              </div>
            ))
          }
        </div>
        <p className='font-body text-2xl mt-10 ml-10'>Recent Favourites</p>
        <div className='grid ml-10 grid-cols-2'>
          {
            fav.map((favourite, index) => (
              <div className='flex flex-col mt-5' key={index}>
                <div className='relative h-36 w-36'>
                  <Image alt='' fill className='object-cover rounded-md' src={favourite.poster} />
                </div>
                <p className='font-body mt-2 font-semibold text-sm text-black ml-2'>{favourite.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Home