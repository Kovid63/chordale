import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';

const SideNavBar = () => {

    const [activeIcon, setActiveIcon] = useState('home');

    const styles = {
        wrapper: `relative`,
        container: `before:content-[''] before:absolute before:top-0 before:left-0 before:bg-transparent before:right-0 before:bottom-0 before:opacity-40 before:blur`,
        drawerIcon: `absolute text-white tablet:hidden mt-5 mx-2`,
        menuIcon: `hidden w-6 my-5 tablet:block`,
    }

    console.log(activeIcon);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className='relative'>
                    <MoreVertIcon className={styles.drawerIcon} />
                    <div className='flex flex-col w-1/12 min-h-screen items-center'>
                        <div className='relative mt-5 h-10 w-10'>
                            <Image fill className='object-contain' src={require('../assets/logo.svg')} />
                        </div>
                        <div className='my-auto'>
                            <div className={activeIcon === 'home' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} onClick={() => setActiveIcon('home')}>
                                <svg className={styles.menuIcon} viewBox="0 0 28 28">
                                    <path stroke='white' fill={activeIcon === 'home' ? 'white' : 'none'} d="M12.5921,3.49787 C13.4147,2.83801 14.5853,2.83801 15.4079,3.49787 L23.1579,9.71462 C23.6902,10.1417 24,10.7872 24,11.4697 L24,22.75 C24,23.9926 22.9926,25 21.75,25 L19.25,25 C18.0074,25 17,23.9926 17,22.75 L17,16.25 C17,15.8358 16.6642,15.5 16.25,15.5 L11.75,15.5 C11.3358,15.5 11,15.8358 11,16.25 L11,22.75 C11,23.9926 9.99264,25 8.75,25 L6.25,25 C5.00736,25 4,23.9926 4,22.75 L4,11.4697 C4,10.7872 4.30976,10.1417 4.84212,9.71462 L12.5921,3.49787 Z"></path>
                                </svg>
                            </div>
                            <div className={activeIcon === 'search' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} onClick={() => setActiveIcon('search')} >
                                {activeIcon === 'search' ? <svg className={styles.menuIcon} viewBox="0 0 487.95 487.95">
                                    <path fill='white' d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z" />
                                </svg> : <svg className={styles.menuIcon} viewBox="0 0 52.966 52.966">
                                    <path fill='white' d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19S32.459,40,21.983,40z" />
                                </svg>}
                            </div>
                            <div className={activeIcon === 'profile' ? 'drop-shadow-[0_0px_8px_rgba(255,255,255,1)]' : ''} onClick={() => setActiveIcon('profile')}>
                                <svg className={styles.menuIcon} viewBox="0 0 24 24">
                                    <path fill='none' stroke='white' strokeWidth={activeIcon === 'profile' ? '2px' : '1px'} d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" />
                                    <path fill='none' stroke='white' strokeWidth={activeIcon === 'profile' ? '2px' : '1px'} d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar