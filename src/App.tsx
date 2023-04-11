import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import { Close, Insta, Medium, Menu, Search, Twitter } from './components/Icons';
import Post from './components/Post';

function App() {

  const [toggle, setToggle] = useState(false)

  const navigation = useNavigate()

  return (
    <>

      <nav className='flex justify-between items-center p-8'>
        <div className='md:flex hidden'>

          <button className='p-2 hover:text-blue-700'>
            <b>Write</b>
          </button>
          <button className='p-2 hover:text-blue-700'>
            <b>Sign In</b>
          </button>

        </div>

        <h1>DaBBa</h1>

        <button onClick={() => setToggle(!toggle)} className='md:hidden'>
          {toggle ? <Close className='w-8 md:hidden hover:fill-red-700' /> :
            <Menu className='w-8 md:hidden hover:fill-blue-700' />}
        </button>

        <div className='md:flex hidden'>
          <Medium className='w-5 pointer hover:fill-blue-700' />
          <Insta className='w-5 ml-6 pointer hover:fill-blue-700' />
          <Twitter className='w-5 ml-6 pointer hover:fill-blue-700' />
          <Search className='w-5 ml-6 pointer hover:fill-blue-700' />
        </div>

      </nav>

      {toggle &&
        <div className='px-8 pb-8 md:hidden'>
          <span>
            <button className='hover:text-blue-700 mb-4'>
              <b>Write</b>
            </button>
            <button className='hover:text-blue-700 mb-8'>
              <b>Sign In</b>
            </button>
          </span>
          <div className='flex justify-evenly items-center'>
            <Medium className='w-5 pointer hover:fill-blue-700' />
            <Insta className='w-5 ml-6 pointer hover:fill-blue-700' />
            <Twitter className='w-5 ml-6 pointer hover:fill-blue-700' />
            <Search className='w-5 ml-6 pointer hover:fill-blue-700' />
          </div>
        </div>}

      <div className='flex justify-center items-center bg-slate-100 w-full'>

        <button onClick={() => navigation('/')} className='px-4 py-5'>
          <b className='text-blue-700'>Home</b>
        </button>
        <button className='px-2 md:px-4 py-5 hover:text-blue-700'>
          <b>Pages</b>
        </button>
        <button className='px-2 md:px-4 py-5 hover:text-blue-700'>
          <b>Blog</b>
        </button>
        <button className='px-2 md:px-4 py-5 hover:text-blue-700'>
          <b>Categories</b>
        </button>
        <button className='px-2 md:px-4 py-5 hover:text-blue-700'>
          <b>Shop</b>
        </button>
        <button className='px-2 md:px-4 py-5 hover:text-blue-700'>
          <b>Elements</b>
        </button>

      </div>

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/:id' element={<Post />} />
      </Routes>

    </>
  )
}

export default App
