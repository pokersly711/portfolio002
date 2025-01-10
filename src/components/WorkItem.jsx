// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-blue-600'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5  -left-1.5 border-stone-400' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-blue-700 bg-stone-500 rounded-md'>{year}</span>
          <span className='text-lg font-bold text-blue-700'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-black-400'>{duration}</span>
        </p>
        <p className='my-2 text-medium font-normal text-black-500'>{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;