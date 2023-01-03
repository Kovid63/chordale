import { ethers } from 'ethers';
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
    <div className={`flex flex-col bg-[url('https://wallpaperaccess.com/full/3197748.jpg')] min-h-screen w-11/12 mr-5 rounded-3xl`}>
      <p className='text-white font-quick ml-10 mt-8 text-4xl'>Account</p>
      <div className='mt-10 ml-10'>
        {
          wallet ?
            <>
              <p className='text-white font-body'>Connected: {wallet}</p>
              <Link href={'/artists/upload'}><p className='text-gray-300 mt-10 text-xl font-body'>Artist? Let's listen your story</p></Link>
            </>
            :
            <>
              <div onClick={() => { connectWallet() }} className='flex cursor-pointer items-center justify-center rounded-md h-14 w-1/5 border-2 border-gray-500'>
                <p className='text-white text-xl font-body'>Connect Wallet</p>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default Account