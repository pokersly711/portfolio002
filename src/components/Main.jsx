// eslint-disable-next-line no-unused-vars
import React from 'react'
import image0001 from '../assets/images/image011.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={image0001} />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/400'>
      <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='lg:text-8xl text-4xl font-bold text-blue-200'>James Russell</h1>
        <h2 className='flex lg:text-4xl font-bold text-1xl pt-4 text-blue-500'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Graphics Designer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Designer',
        2000,
        'Backend Developer',
        2000,
        'Mobile App Developer',
        3000
      ]}
      wrapper='div'
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
      </h2></div>
    <div className='flex justify-between ml-50 pt-20 max-w-[100%]-full text-blue-700' />
      <FaTwitter className='cursor-pointer' size={30} />
      <a href='https://www.facebook.com/pokersly911'><FaFacebook className='cursor-pointer' size={30} /></a>
      <a href='https://www.instagram.com/pokersly911'><FaInstagram className='cursor-pointer' size={30} /></a>
      <a href='https://www.linkedin.com/in/pokersly'><FaLinkedinIn className='cursor-pointer' size={30} /></a>
    </div>
  </div>


  );
};

export default Main;