import Image from 'next/image';
import React, { useState } from 'react'

const SongCard = () => {

    const [pause, setPause] = useState(false)
    const [like, setLike] = useState(false)

    const styles = {
        container: `fixed  flex z-10 h-16 w-full bottom-5`,
        card: `absolute flex items-center justify-between shadow-md bg-gray-800/60 m-auto left-0 right-0 w-2/3 rounded-lg h-full`
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {/* play pause previous next section*/}
                <div className='flex items-center h-full w-1/6'>

                    {/* Previous */}
                    <svg className='h-5 mx-5 active:-translate-x-1' viewBox="0 0 24 24">
                        <path fill='white' d="M2.75 20C2.75 20.5523 3.19772 21 3.75 21C4.30228 21 4.75 20.5523 4.75 20L4.75 4C4.75 3.44772 4.30229 3 3.75 3C3.19772 3 2.75 3.44772 2.75 4V20Z" />
                        <path fill='white' d="M20.75 19.0526C20.75 20.4774 19.1383 21.305 17.9803 20.4748L7.51062 12.9682C6.50574 12.2477 6.54467 10.7407 7.5854 10.073L18.0551 3.35665C19.2198 2.60946 20.75 3.44583 20.75 4.82961L20.75 19.0526Z" />
                    </svg>

                    {/* Play pause button */}

                    <div onClick={() => { pause ? setPause(false) : setPause(true) }} className='flex bg-white items-center justify-center rounded-full h-8 w-8 active:translate-y-1'>
                        {pause ? <svg className='h-5' viewBox="0 0 47.607 47.607">
                            <path fill='black' d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z" />
                            <path fill='black' d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z" />
                        </svg> : <svg className='h-4 ml-1' viewBox="0 0 494.148 494.148">
                            <path fill='black' d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z" />
                        </svg>}
                    </div>

                    {/* Next */}
                    <svg className='h-5 mx-5 active:translate-x-1 transform rotate-180' viewBox="0 0 24 24">
                        <path fill='white' d="M2.75 20C2.75 20.5523 3.19772 21 3.75 21C4.30228 21 4.75 20.5523 4.75 20L4.75 4C4.75 3.44772 4.30229 3 3.75 3C3.19772 3 2.75 3.44772 2.75 4V20Z" />
                        <path fill='white' d="M20.75 19.0526C20.75 20.4774 19.1383 21.305 17.9803 20.4748L7.51062 12.9682C6.50574 12.2477 6.54467 10.7407 7.5854 10.073L18.0551 3.35665C19.2198 2.60946 20.75 3.44583 20.75 4.82961L20.75 19.0526Z" />
                    </svg>
                </div>

                {/* song info section */}
                <div className='flex flex-row h-full w-1/4 items-center'>
                    <div className='relative h-12 w-12'>
                        <Image fill className='object-cover rounded-lg' src={'https://i.pinimg.com/736x/55/8c/7b/558c7ba84531e59a1df4851ed8ac6f18.jpg'} />
                    </div>
                    <div>
                        <p className='font-body mx-2 text-white'>{`I'm good (blue)`}</p>
                        <p className='font-body mx-2 text-[12px] text-gray-300'>{`David Guetta, Bebe Rexha`}</p>
                    </div>
                </div>

                {/* like section */}
                <div onClick={() => { like? setLike(false): setLike(true) }} className='flex bg-green-500 flex-row h-full w-1/12 items-center justify-center'>
                    
                </div>

                {/* progress bar */}
                <div className='flex flex-row bg-cyan-500 h-full w-4/12 items-center'>

                </div>

                {/* shuffle, loop */}
                <div className='flex flex-row bg-violet-500 h-full w-1/5 items-center'>

                </div>

            </div>
        </div>
    )
}

export default SongCard