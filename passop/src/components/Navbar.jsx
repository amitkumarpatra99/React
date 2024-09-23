import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-700 text-white '>

      <div className="mycontainer flex gap-4 py-3 items-center
       px-6 justify-between">

        <div className="logo  font-bold h-10 text-2xl">
          <span className=' text-green-500'>&lt;</span>
          Password
          <span className=' text-green-500'> Mannager </span>
          <span className=' text-green-500'>/&gt; </span>
        </div>



        <a target="_blank" href="https://github.com/">
          <button className='text-white my-1  '>
            <span className='flex gap-1 font-semibold items-center  bg-green-500 rounded-full   mx-2 px-3'> <img className=' p-1 w-10 rounded-full ' src="/icons/Github logo.svg" alt="Github Logo" /> GitHub </span>
          </button>
        </a>

      </div>
    </nav>
  )
}

export default Navbar
