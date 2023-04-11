import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Search } from './Icons';

export default function Home() {

    const [state, setState] = useState(null)
    const [more, setMore] = useState(4)

    const navigate = useNavigate()

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${more}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.error(err)
                return null
            })

    }, [setState, more])

    function getPost() {
        setMore(more + 4)
    }


    return (
        <>

            <div className='relative justify-center items-center m-8 md:m-14'>

                <div className={`bg-[url('/desk.jpg')] w-full h-60 md:h-80 bg-cover`} />
                <div className='absolute bg-black/40 inset-0 flex justify-center items-center text-white text-center'>
                    <span className='items-center p-6 md:p-40'>
                        <h3 className='mb-4'>Technology</h3>
                        <p className='leading-relaxed text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </span>
                </div>

            </div>

            <div className='m-8 md:m-14 mt-0 grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-1 flex flex-col items-center md:px-8'>
                    <div className='flex w-full bg-slate-100 mb-8 px-6 py-4'>
                        <input className='bg-slate-100 flex w-full' placeholder='Search...' type="text" name="search" id="search" />
                        <button className='bg-slate-100'><Search className='w-5' /></button>
                    </div>


                    <h2 className='w-full mb-6'>Categories</h2>


                    <div className='relative mb-6 justify-center items-center w-full'>
                        <div className={`bg-[url('/culture.jpg')] w-full h-20 bg-cover`} />
                        <div className='absolute bg-black/40 inset-0 flex justify-center items-center text-white text-center'>
                            <span className='items-center p-6'>
                                <h3 className=''>Culture</h3>
                            </span>
                        </div>
                    </div>

                    <div className='relative mb-6 justify-center items-center w-full'>
                        <div className={`bg-[url('/creativity.jpg')] w-full h-20 bg-cover`} />
                        <div className='absolute bg-black/40 inset-0 flex justify-center items-center text-white text-center'>
                            <span className='items-center p-6'>
                                <h3 className=''>Creativity</h3>
                            </span>
                        </div>
                    </div>

                    <div className='relative mb-6 justify-center items-center w-full'>
                        <div className={`bg-[url('/desk.jpg')] w-full h-20 bg-cover`} />
                        <div className='absolute bg-black/40 inset-0 flex justify-center items-center text-white text-center'>
                            <span className='items-center p-6'>
                                <h3 className=''>Technology</h3>
                            </span>
                        </div>
                    </div>

                    <div className='relative mb-6 justify-center items-center w-full'>
                        <div className={`bg-[url('/humor.jpg')] w-full h-20 bg-cover`} />
                        <div className='absolute bg-black/40 inset-0 flex justify-center items-center text-white text-center'>
                            <span className='items-center p-6'>
                                <h3 className=''>Humor</h3>
                            </span>
                        </div>
                    </div>

                    <div className='relative mb-8 justify-center items-center w-full'>
                        <div className={`bg-[url('/music.jpg')] w-full h-20 bg-cover`} />
                        <div className='absolute bg-black/40 inset-0 flex justify-center items-center text-white text-center'>
                            <span className='items-center p-6'>
                                <h3 className=''>Music</h3>
                            </span>
                        </div>
                    </div>


                    <div className='bg-slate-100 flex flex-col w-full items-center px-7 py-8 mb-8'>
                        <h3 className='mb-6'>Top Post</h3>

                        <div className='mb-4 w-full flex'>
                            <h1 className='pr-6'>1</h1>
                            <span>
                                <b className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
                                <p>{new Date().toDateString()}</p>
                            </span>
                        </div>

                        <div className='mb-4 w-full flex'>
                            <h1 className='pr-6'>2</h1>
                            <span>
                                <b className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
                                <p>{new Date().toDateString()}</p>
                            </span>
                        </div>

                        <div className='mb-4 w-full flex'>
                            <h1 className='pr-6'>3</h1>
                            <span>
                                <b className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
                                <p>{new Date().toDateString()}</p>
                            </span>
                        </div>

                        <div className='mb-4 w-full flex'>
                            <h1 className='pr-6'>4</h1>
                            <span>
                                <b className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
                                <p>{new Date().toDateString()}</p>
                            </span>
                        </div>

                        <div className='mb-4 w-full flex'>
                            <h1 className='pr-6'>5</h1>
                            <span>
                                <b className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
                                <p>{new Date().toDateString()}</p>
                            </span>
                        </div>

                    </div>

                    <h2 className='w-full mb-6'>Instagram</h2>

                    <div className='grid grid-cols-3 gap-1 mb-6'>

                        <img src='/2.jpg' className='h-auto max-w-full' />
                        <img src='/2.jpg' className='h-auto max-w-full' />
                        <img src='/2.jpg' className='h-auto max-w-full' />
                        <img src='/2.jpg' className='h-auto max-w-full' />
                        <img src='/2.jpg' className='h-auto max-w-full' />
                        <img src='/2.jpg' className='h-auto max-w-full' />

                    </div>

                </div>


                <div className='col-span-2 h-min grid grid-cols-2 md:pr-8 gap-4 md:gap-8'>

                    <h2 className='col-span-2 w-full mb-6 md:hidden'>Posts</h2>

                    {state && state.map((x, i) => (

                        <div onClick={() => navigate(`${x.id}`)} key={i} className='bg-slate-100 h-min pointer'>
                            <img className='w-full' src="/1.jpg" />
                            <span className='p-6'>
                                <p className='mb-2'>{new Date().toDateString()}</p>
                                <b className='mb-3'>{x.title}</b>
                                <p>{x.body}</p>
                            </span>
                        </div>

                    ))}

                    <div className='col-span-2 flex justify-center mt-8'>
                        <button onClick={getPost} className='bg-blue-700 text-white px-8 py-3'><b>Load More</b></button>
                    </div>

                </div>


            </div>

        </>
    )
}