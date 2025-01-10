// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectItem from './ProjectItem'
import app001 from '../assets/images/carHome.jpg'
import logo002 from '../assets/images/image002.jpg'
import hyperLogo from '../assets/images/image003.jpg'
import logo001 from '../assets/images/logo001.jpg'
import noDirt002 from '../assets/images/noDirt002.jpg'
import outPet from '../assets/images/outdoorPet.jpg'
const Projects = () => {
  return  (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16 bg-gray-200 text-blue-600'>
      <h1 className='text-4xl font-bold text-center text-blue-600'>Projects</h1>
      <p className='text-center py-8'>Here are some of my recent projects that I have worked on in the past year. Each example has a hover effect that gives a brief description and a link to the finished project.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={app001} title='Web-App design' />
        <ProjectItem img={logo002} title='Branding' />
        <ProjectItem img={hyperLogo} title='Budget friendly for Start-ups' />
        <ProjectItem img={logo001} title='Budget friendly for Start-ups' />
        <ProjectItem img={noDirt002} title='Budget friendly for Start-ups' />
        <ProjectItem img={outPet} title='Budget friendly for Start-ups' />
        
      </div>
    </div>
  )
}

export default Projects