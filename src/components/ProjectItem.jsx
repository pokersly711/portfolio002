// eslint-disable-next-line no-unused-vars
import React from 'react'

const ProjectItem = ({ img, title }) => {
  return  (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black-400 rounded-xl group hover:bg-gradient-to-r from-stone-200 to-[#ea808]'>
      <img src={ img } alt="/" className='rounded-xl group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <h3 className='text-2xl font-bold text-stone-600 tracking-wider text-center text-yellow-600'>
      { title }
    </h3>
    <p className='pb-4 pt-2 text-orange-600 text-center'>Digital Designer & Developer</p>
   
    <a href="../../public/websites/">
      <p className='text-center p-3 rounded-lg bg-yellow-600 text-gray-600 font-bold cursor-pointer text-lg'>More Info</p>
    </a>
    </div>
    </div>
  )
}

export default ProjectItem