// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const SkillsItem = ({img, title}) => {
  return  (
    <div className='relative flex items-center justify-center h-full w-full  rounded-xl group hover:bg-gradient-to-r from-stone-200 to-[#ea808]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[30%] bottom-[30%] left-[30%] translate-x-[-30%] translate-y-[-30%]'>
    <h3 className='text-xl font-bold text-blue-600 wider text-center'>
      {title}
    </h3>
    <p className='pb-4 pt-2 text-stone text-center'></p>
   
    <a href="/Contact">
      <p className='text-center p-2 rounded-lg bg-blue-600 text-black-700 font-bold cursor-pointer text-md'>Home</p>
    </a>
    </div>
    </div>
  );
}

export default SkillsItem