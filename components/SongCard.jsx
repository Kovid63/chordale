import { Slider } from '@mui/material';
import Image from 'next/image';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { songContext } from '../contexts/songContext';

const SongCard = () => {

    const [pause, setPause] = useState(false)
    const [like, setLike] = useState(false);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0)

    const { card, setCard } = useContext(songContext);

    const player = useRef();

    useEffect(() => {
        const obj = document.getElementById('player');
        if(obj != undefined){
        obj.addEventListener('loadeddata', () => {

            if (obj.readyState >= 2) {
                setDuration(obj.duration)
                obj.play();
            }
        });
    }
        setDuration(player.current.duration);
        setPause(true);
    }, [card])


    useEffect(() => {
        pause ? player.current.play() : player.current.pause();
    }, [pause, position]);


    const updateProgressBar = () => {
        setPosition(player.current.currentTime);
    }

    const seekHandler = (pos) => {
        player.current.currentTime = pos;
        setPosition(pos);
        player.current.play();
    }


    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (minutes < 10) { minutes = minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return minutes + ':' + seconds;
    }



    const styles = {
        container: `${card.show ? '' : 'hidden'} fixed flex z-10 h-16 w-full bottom-5`,
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

                    <div onClick={() => { pause ? setPause(false) : setPause(true) }} className='flex bg-white items-center justify-center rounded-full h-8 w-8 cursor-pointer'>
                        {pause ? <svg className='h-5' viewBox="0 0 47.607 47.607">
                            <path fill='black' d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z" />
                            <path fill='black' d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z" />
                        </svg> : <svg className='h-4' viewBox="0 0 494.148 494.148">
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
                        <Image alt='' fill className='object-cover rounded-lg' src={'https://i.pinimg.com/736x/55/8c/7b/558c7ba84531e59a1df4851ed8ac6f18.jpg'} />
                    </div>
                    <div>
                        <p className='font-body mx-2 text-white'>{`I'm good (blue)`}</p>
                        <p className='font-body mx-2 text-[12px] text-gray-300'>{`David Guetta, Bebe Rexha`}</p>
                    </div>
                </div>

                {/* like section */}
                <div onClick={() => { like ? setLike(false) : setLike(true) }} className='flex flex-row h-full w-1/12 items-center justify-center'>
                    <svg className='h-5' viewBox="-9 0 360 343.422">
                        <path fill={like ? 'white' : 'none'} stroke='white' strokeWidth={20} d="M254.791,33.251c-46.555,0-76.089,51.899-83.079,51.899c-6.111,0-34.438-51.899-83.082-51.899c-47.314,0-85.947,39.021-88.476,86.27c-1.426,26.691,7.177,47.001,19.304,65.402c24.222,36.76,130.137,125.248,152.409,125.248c22.753,0,127.713-88.17,152.095-125.247c12.154-18.483,20.731-38.711,19.304-65.402C340.738,72.272,302.107,33.251,254.791,33.251" />
                    </svg>
                </div>

                {/* progress bar */}
                <div className='flex flex-row h-full w-4/12 justify-between items-center'>
                    <p className='font-body text-white/60 text-[10px]'>{position.toString().toHHMMSS()}</p>
                    <div className='relative mt-1 w-8/12'>
                        <Slider sx={{
                            color: 'rgba(0,0,0,0.87)',
                            height: 4,
                            '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&:before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`,
                                },
                                '&.Mui-active': {
                                    width: 10,
                                    height: 10,
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.28,
                            },
                        }}
                            aria-label="time-indicator" size="small" value={position} min={0} step={1} max={duration} onChange={(_, value) => { seekHandler(value) }} />
                    </div>
                    <p className='font-body text-white/60 text-[10px]'>{duration.toString().toHHMMSS()}</p>
                </div>
                <audio id='player' onTimeUpdate={() => { updateProgressBar() }} ref={player} src={card.url} />
                {/* shuffle, loop */}
                <div className='flex px-10 justify-between flex-row h-full w-1/5 items-center'>
                    <svg onClick={() => { }} className='h-5 ml-1' viewBox="0 0 230.055 230.055">
                        <path fill='white' d="M199.419,124.497c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636h-8.406
                                c-8.177,0-16.151-2.871-22.453-8.083l-32.346-26.751l32.345-26.751c6.303-5.212,14.277-8.083,22.454-8.083h8.406L186.69,92.83
                                c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28
                                c3.515-3.515,3.515-9.213,0-12.728l-28-28c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636
                                h-8.406c-12.354,0-24.403,4.337-33.926,12.211L122,103.348L82.564,70.733c-6.658-5.507-15.084-8.54-23.724-8.54H9
                                c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c4.462,0,8.813,1.566,12.252,4.411l36.786,30.423L71.094,145.45
                                c-3.439,2.844-7.791,4.411-12.253,4.411H9c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c8.64,0,17.065-3.033,23.725-8.54L122,126.707
                                l34.996,28.943c9.521,7.875,21.57,12.211,33.925,12.211h8.406l-12.637,12.636c-3.515,3.515-3.515,9.213,0,12.728
                                c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28c3.515-3.515,3.515-9.213,0-12.728L199.419,124.497z"/>
                    </svg>
                    <svg className='h-5' viewBox="0 0 17 17">
                        <path d="M1 9c0 2.206 1.711 4 3.813 4v1c-2.654 0-4.813-2.243-4.813-5s2.159-5 4.813-5h4.229l-1.646-1.646 0.707-0.707 2.854 2.853-2.853 2.854-0.708-0.708 1.647-1.646h-4.23c-2.102 0-3.813 1.794-3.813 4zM12.187 4v1c2.102 0 3.813 1.794 3.813 4s-1.711 4-3.813 4h-4.23l1.646-1.646-0.707-0.707-2.853 2.853 2.854 2.854 0.707-0.707-1.647-1.647h4.229c2.655 0 4.814-2.243 4.814-5s-2.159-5-4.813-5z" fill="#ffffff" />
                    </svg>
                    <svg className='h-5' viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SongCard