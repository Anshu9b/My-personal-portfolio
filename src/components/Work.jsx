import React from 'react';
import TrainReservation from '../assets/projects/TrainReservation.png';
import mosaic from '../assets/projects/mosaic.png';
import pathfinder from '../assets/projects/pathfinder.png';

const Work = () => {
  return (
    <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                 Work</p>
            <p className='py-6'> 
            //Check out some of my recent work
          </p>
        </div>
      {/*Container */} 
       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/*Grid Item */}
           <div  
           style= {{background : `url(${mosaic })`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              
              {/*Hover Effects */}
              
                <div className= 'opacity-0 group-hover:opacity-100'>
                <span classNmae='text-2xl font-bold text-white tracking-wider'>
                  Mosaic- Music based recommendation WebApplication
                </span>
                <div className ='pt-8 text-center'>
                <a href ="/ ">  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                 </a> 
                 <a href ="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                 </a>
                
                </div>
            
            </div>
        </div>
        
        <div  
           style= {{background : `url(${pathfinder})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              
              {/*Hover Effects */}
              
                <div className= 'opacity-0 group-hover:opacity-100'>
                <span classNmae='text-2xl font-bold text-white tracking-wider'>
                  Pathfinding Visualizer
                </span>
                <div className ='pt-8 text-center'>
                <a href ="/ ">  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                 </a> 
                 <a href ="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                 </a>
                
                </div>
            
            </div>
        </div>
        <div  
           style= {{background : `url(${TrainReservation})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              
              {/*Hover Effects */}
              
                <div className= 'opacity-0 group-hover:opacity-100'>
                <span classNmae='text-2xl font-bold text-white tracking-wider'>
                  Train Reservation System
                </span>
                <div className ='pt-8 text-center'>
                <a href ="/ ">  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                 </a> 
                 <a href ="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                 </a>
                
                </div>
            
            </div>
        </div>

       </div>
    </div>

</div>
  )
}

export default Work