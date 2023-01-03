import { ethers } from 'ethers';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Account = () => {

  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setWallet(await signer.getAddress());
  }

  return (
    <>
    <Head>
    <title>Account</title>
    </Head>
    <div className={`flex bg-[url('https://wallpaperaccess.com/full/3197748.jpg')] min-h-screen w-11/12 mr-5 rounded-3xl`}>
      <div className='flex flex-col w-1/2'>
      <p className='text-white font-body ml-10 mt-8 text-4xl'>Connect To Wallet</p>
      <div className='mt-10 ml-10'>
        {
          wallet ?
            <>
              <p className='text-gray-400 text-xl font-body'>Wallet connected</p>
              <p className='text-violet-600 font-body'>Address: {wallet}</p>
              <p className='text-gray-300 mt-10 text-xl font-body'>Are you an artist?</p>
              <Link href={'/artists/upload'}><p className='text-violet-600 font-body'>Click here</p> </Link>
            </>
            :
            <>
            <p className='text-gray-400 text-xl font-body'>Please connect your wallet by clicking below</p>
              <div onClick={() => { connectWallet() }} className='flex mt-10 cursor-pointer items-center justify-center rounded-full h-10 w-1/3 border-2 border-violet-800'>
                <p className='text-white text-xl font-body'>Connect Wallet</p>
              </div>
            </>
        }
      </div>
      </div>
      <div className='flex w-1/2 justify-center'>
        <div id='herro' className='relative h-full w-full'>
          <Image fill src={require('../assets/herro.svg')}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Account