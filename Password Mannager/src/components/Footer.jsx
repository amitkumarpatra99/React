import React from 'react'


const Footer = () => {
  return (
    <>

<div className=' flex  bg-slate-700 text-white justify-evenly  fixed bottom-0 w-full'>

        <div>

          <div className="logo  font-bold h-10 text-2xl">
            <span className=' text-green-500'>&lt;</span>
            Password
            <span className=' text-green-500'> Mannager</span>
            <span className=' text-green-500'>/&gt; </span>
          </div>

        </div>

        <div className='flex items-center gap-2  '>
          Created With <img className='w-7 hover:animate-bounce' src="/icons/heart.png" alt="" /> by <p className='font-semibold  hover:font-bold  '>MR PATRA</p>
        </div>


      </div>
    </>
  )
}

export default Footer
