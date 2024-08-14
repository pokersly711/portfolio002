// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const SkillsItem = ({img, title}) => {
  return  (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black-400 rounded-xl group hover:bg-gradient-to-r from-stone-200 to-[#ea808]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[50%] bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <h3 className='text-xl font-bold text-orange-600 tracking-wider text-center'>
      {title}
    </h3>
    <p className='pb-4 pt-2 text-stone text-center'></p>
   
    <a href="/Contact">
      <p className='text-center p-2 rounded-lg bg-orange-600 text-black-700 font-bold cursor-pointer text-md'>Home</p>
    </a>
    </div>
    </div>
  )
}

export default SkillsItem