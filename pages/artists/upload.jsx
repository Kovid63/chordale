import React, { useEffect, useState } from 'react';
import * as IPFS from 'ipfs-core'

const upload = () => {

    const [songData, setSongData] = useState({title: '', artists: ''})
    const [poster, setPoster] = useState(null);
    const [audio, setAudio] = useState(null);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        if (!mount) setMount(true);
    }, []);

    useEffect(() => {
        if (!mount) return;

        const init = async () => {
            //if (ipfs) return;
            //const node = await IPFS.create();
            //const nodeId = await node.id();
            // setIpfs(node);
            //const data = await node.add('hello');
            //console.log(nodeId);
        }

        init();
    }, [mount]);


    const publishHandler = async() => {
        let p_cid;
        let a_cid;

        if(poster == null || audio == null || songData.title.length == 0 || songData.artists.length == 0) return;

        const node = await IPFS.create();

        await (async () => {
            
            const { cid } = await node.add(poster);
            p_cid = cid.toString();
            console.log(p_cid);
        })();

        await (async () => {

            const { cid } = await node.add(audio);
            a_cid = cid.toString();
            console.log(a_cid);
        })();

        const res = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: songData.title,
                artists: songData.artists,
                artwork_cid: p_cid,
                cid: a_cid,
            })
        });

        console.log(res.status);

    }

    return (
        <div className={`flex flex-col min-h-screen w-11/12 mr-5 rounded-3xl bg-gray-900`}>
            <div className='mt-5 ml-10'>
                <p className='text-3xl font-body text-white'>Hey Artist, </p>
                <p className='text-2xl font-body text-gray-400'>Go ahead and make your story heard.</p>
            </div>
            <div className='ml-10'>
                <div>
                    <label for="small-input" className="block mt-8 text-xl mb-2 font-medium text-gray-900 dark:text-white font-body">Title</label>
                    <input onChange={(e) => setSongData({...songData, title: e.target.value})} type="text" id="small-input" spellCheck={false} className="block outline-none w-3/5 p-1 font-body text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label for="small-input" className="block mt-5 text-xl mb-2 font-medium text-gray-900 dark:text-white font-body">Artists</label>
                    <input onChange={(e) => setSongData({...songData, artists: e.target.value})} type="text" id="small-input" spellCheck={false} className="block outline-none w-3/5 p-1 h-12 font-body text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <p className='text-white text-lg font-body mt-10'>Poster</p>
                <input type="file" className='w-3/5 mt-2 bg-gray-600 text-white rounded-md font-body' onChange={(e) => setPoster(e.target.files[0])} />
                <p className='text-white text-lg font-body mt-10'>Music file</p>
                <input type="file" className='w-3/5 mt-2 bg-gray-600 text-white rounded-md font-body' onChange={(e) => setAudio(e.target.files[0])} />
            </div>
            <button onClick={() => { publishHandler() }} type="button" class="text-white text-lg w-2/12 ml-10 mt-10 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl active:translate-y-1 font-body rounded-lg px-5 text-center mr-2 mb-2">Publish</button>
        </div>
    )
}

export default upload