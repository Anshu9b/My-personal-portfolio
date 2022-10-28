import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
 const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#0a192f]'> 
    
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600'> Hello World,my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Anshu Bajpai</h1>
      <h2 className='text-2xl sm:text-5xl  text-[#8892b0]'> I'm a computer science undergraduate. [2020-2024] </h2>
      <p className='text-[#8892b0] py-4 max-wd-[700px]'> I love solving complex dsa problems. Mostly I code in (C,C++) and I'm a competitive programmer
        .Plus occasionally I am a MERN stack based developer and a Machine learning enthusiast.</p>
     <div>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> Checkout More 
     <span className='group-hover:rotate-90 duration-300'>
       <HiArrowNarrowRight className='ml-3'/>
     </span>
     </button>
     </div>
    </div>
    </div>
  )
}

export default Home