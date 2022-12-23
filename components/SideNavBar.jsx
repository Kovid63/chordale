import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import Link from 'next/link';

const SideNavBar = () => {

    const [activeIcon, setActiveIcon] = useState('home');

    const styles = {
        drawerIcon: `absolute text-white tablet:hidden mt-5 mx-2`,
        menuIcon: `hidden w-5 my-6 tablet:block cursor-pointer`,
    }

    return (
        <div className='flex flex-col w-1/12 min-h-screen items-center'>
            {/*Logo*/}
            <div className='relative mt-5 h-10 w-10'>
                <Image fill className='object-contain' src={require('../assets/logo.svg')} />
            </div>
            {/* Menu Items */}
            <div className='my-auto'>
                {/* Home icon */}
                <Link href={'/home'}>
                <div className={activeIcon === 'home' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} onClick={() => setActiveIcon('home')}>
                    <svg className={styles.menuIcon} viewBox="0 0 28 28">
                        <path fill={activeIcon === 'home' ? 'white' : 'gray'} d="M12.5921,3.49787 C13.4147,2.83801 14.5853,2.83801 15.4079,3.49787 L23.1579,9.71462 C23.6902,10.1417 24,10.7872 24,11.4697 L24,22.75 C24,23.9926 22.9926,25 21.75,25 L19.25,25 C18.0074,25 17,23.9926 17,22.75 L17,16.25 C17,15.8358 16.6642,15.5 16.25,15.5 L11.75,15.5 C11.3358,15.5 11,15.8358 11,16.25 L11,22.75 C11,23.9926 9.99264,25 8.75,25 L6.25,25 C5.00736,25 4,23.9926 4,22.75 L4,11.4697 C4,10.7872 4.30976,10.1417 4.84212,9.71462 L12.5921,3.49787 Z"></path>
                    </svg>
                </div>
                </Link>
                {/* Search Icon */}
                <div className={activeIcon === 'search' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} onClick={() => setActiveIcon('search')} >
                    <svg className={styles.menuIcon} viewBox="0 0 487.95 487.95">
                        <path fill={activeIcon === 'search' ? 'white' : 'gray'} d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z" />
                    </svg>
                </div>
                {/* Profile Icon */}
                <Link href={'/account'}>
                    <div className={activeIcon === 'profile' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} onClick={() => setActiveIcon('profile')}>
                        <svg className={styles.menuIcon} viewBox="0 0 35 35">
                            <path fill={activeIcon === 'profile' ? 'white' : 'gray'} d="M17.5,16.383a8.067,8.067,0,1,1,8.067-8.067A8.076,8.076,0,0,1,17.5,16.383Zm0-13.633a5.567,5.567,0,1,0,5.567,5.566A5.573,5.573,0,0,0,17.5,2.75Z" />
                            <path fill={activeIcon === 'profile' ? 'white' : 'gray'} d="M31.477,34.75a1.25,1.25,0,0,1-1.23-1.037A12.663,12.663,0,0,0,17.5,22.852,12.663,12.663,0,0,0,4.753,33.713a1.25,1.25,0,0,1-2.464-.426A15.1,15.1,0,0,1,17.5,20.352,15.1,15.1,0,0,1,32.711,33.287a1.25,1.25,0,0,1-1.02,1.444A1.2,1.2,0,0,1,31.477,34.75Z" />
                        </svg>
                    </div>
                </Link>
                {/* Like Icon */}
                <div className={`${activeIcon === 'like' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} mt-20`} onClick={() => setActiveIcon('like')}>
                    <svg className={styles.menuIcon} viewBox="0 0 343.422 343.422">

                        <path fill={activeIcon === 'like' ? 'white' : 'gray'} d="M254.791,33.251c-46.555,0-76.089,51.899-83.079,51.899c-6.111,0-34.438-51.899-83.082-51.899
                                            c-47.314,0-85.947,39.021-88.476,86.27c-1.426,26.691,7.177,47.001,19.304,65.402c24.222,36.76,130.137,125.248,152.409,125.248
                                            c22.753,0,127.713-88.17,152.095-125.247c12.154-18.483,20.731-38.711,19.304-65.402
                                            C340.738,72.272,302.107,33.251,254.791,33.251"/>

                    </svg>
                </div>
                <div className={`${activeIcon === 'nft-market' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''}`} onClick={() => setActiveIcon('nft-market')}>
                    <svg className={styles.menuIcon} viewBox="0 0 511 511">
                        <path fill={activeIcon === 'nft-market' ? 'white' : 'gray'} d="M23.498,248H7.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.998c4.142,0,7.5-3.358,7.5-7.5S27.64,248,23.498,248z" />
                        <path fill={activeIcon === 'nft-market' ? 'white' : 'gray'} d="M455.498,248H310.479c-0.305-2.249-0.736-4.459-1.304-6.615l111.798-46.308c3.827-1.585,5.644-5.973,4.059-9.799
                                            c-1.585-3.827-5.973-5.643-9.799-4.059l-111.822,46.318c-1.138-1.943-2.386-3.813-3.745-5.596l136.5-136.5
                                            c2.929-2.929,2.929-7.678,0-10.606c-2.929-2.929-7.678-2.929-10.606,0l-136.5,136.5c-1.783-1.359-3.653-2.607-5.596-3.745
                                            l46.318-111.822c1.585-3.827-0.232-8.214-4.059-9.799c-3.828-1.585-8.214,0.231-9.799,4.059l-46.308,111.798
                                            c-2.156-0.568-4.366-0.999-6.615-1.304V55.502c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v145.019
                                            c-2.25,0.305-4.459,0.736-6.615,1.304L195.077,90.027c-1.585-3.827-5.973-5.644-9.799-4.059c-3.827,1.585-5.644,5.973-4.059,9.799
                                            l46.318,111.822c-1.943,1.138-3.813,2.386-5.596,3.745l-136.5-136.5c-2.929-2.929-7.678-2.929-10.606,0
                                            c-2.929,2.929-2.929,7.678,0,10.606l136.5,136.5c-1.359,1.783-2.607,3.653-3.745,5.596L95.768,181.219
                                            c-3.826-1.584-8.214,0.232-9.799,4.059c-1.585,3.827,0.232,8.214,4.059,9.799l111.797,46.308c-0.567,2.156-0.998,4.366-1.304,6.615
                                            H55.502c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h145.018c0.305,2.249,0.736,4.459,1.304,6.615L90.027,315.923
                                            c-3.827,1.585-5.644,5.973-4.059,9.799c1.196,2.888,3.989,4.632,6.932,4.632c0.957,0,1.929-0.184,2.867-0.573l111.822-46.319
                                            c1.138,1.943,2.386,3.813,3.745,5.596l-136.5,136.5c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197
                                            s3.839-0.732,5.303-2.197l136.5-136.5c1.783,1.359,3.653,2.607,5.596,3.745l-46.318,111.822c-1.585,3.827,0.232,8.214,4.059,9.799
                                            c0.939,0.389,1.911,0.573,2.867,0.573c2.943,0,5.736-1.744,6.932-4.632l46.308-111.798c2.156,0.567,4.365,0.998,6.615,1.304
                                            v145.019c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V310.479c2.25-0.305,4.459-0.736,6.615-1.304l46.308,111.798
                                            c1.196,2.888,3.989,4.632,6.932,4.632c0.957,0,1.929-0.184,2.867-0.573c3.827-1.585,5.644-5.973,4.059-9.799l-46.318-111.822
                                            c1.943-1.138,3.813-2.386,5.596-3.745l136.5,136.5c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197
                                            c2.929-2.929,2.929-7.678,0-10.606l-136.5-136.5c1.358-1.783,2.606-3.653,3.745-5.596l111.822,46.319
                                            c0.938,0.389,1.911,0.573,2.867,0.573c2.943,0,5.736-1.744,6.932-4.632c1.585-3.827-0.232-8.214-4.059-9.799l-111.798-46.308
                                            c0.567-2.156,0.998-4.366,1.304-6.615h145.019c4.142,0,7.5-3.358,7.5-7.5S459.64,248,455.498,248z M255.5,296
                                            c-22.332,0-40.5-18.168-40.5-40.5s18.168-40.5,40.5-40.5s40.5,18.168,40.5,40.5S277.832,296,255.5,296z"/>
                        <path fill={activeIcon === 'nft-market' ? 'white' : 'gray'} d="M503.5,248h-15.997c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H503.5c4.142,0,7.5-3.358,7.5-7.5S507.642,248,503.5,248z
		                                    "/>
                        <path fill={activeIcon === 'nft-market' ? 'white' : 'gray'} d="M255.5,480.003c-4.142,0-7.5,3.358-7.5,7.5V503.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-15.997
		                                    C263,483.361,259.642,480.003,255.5,480.003z"/>
                        <path fill={activeIcon === 'nft-market' ? 'white' : 'gray'} d="M255.5,30.997c4.142,0,7.5-3.358,7.5-7.5V7.5c0-4.142-3.358-7.5-7.5-7.5S248,3.358,248,7.5v15.997
		                                    C248,27.639,251.358,30.997,255.5,30.997z"/>
                    </svg>
                </div>
                <div className={`${activeIcon === 'setting' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} mt-24`} onClick={() => setActiveIcon('setting')}>
                    <svg className={styles.menuIcon} viewBox="0 0 1024 1024">
                        <path fill={activeIcon === 'setting' ? 'white' : 'gray'} d="M600.704 64a32 32 0 0130.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0134.432 15.36L944.32 364.8a32 32 0 01-4.032 37.504l-77.12 85.12a357.12 357.12 0 010 49.024l77.12 85.248a32 32 0 014.032 37.504l-88.704 153.6a32 32 0 01-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 01600.704 960H423.296a32 32 0 01-30.464-22.208L357.696 828.48a351.616 351.616 0 01-42.56-24.64l-112.32 24.256a32 32 0 01-34.432-15.36L79.68 659.2a32 32 0 014.032-37.504l77.12-85.248a357.12 357.12 0 010-48.896l-77.12-85.248A32 32 0 0179.68 364.8l88.704-153.6a32 32 0 0134.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 01423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 00-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 000 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0034.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0034.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 000-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 00-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 110 384 192 192 0 010-384zm0 64a128 128 0 100 256 128 128 0 000-256z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar