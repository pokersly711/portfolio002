// eslint-disable-next-line no-unused-vars
import React from 'react'
import SkillsItem from './SkillsItem'
import htmlIcon from '../assets/iconPNG/html.png'
import cssIcon from '../assets/iconPNG/css.png'
import jsIcon from '../assets/iconPNG/js.png'
import phpIcon from '../assets/iconPNG/php.png'
import kotlinIcon from '../assets/iconPNG/kotlin.png'
import mySQLIcon from '../assets/iconPNG/mySQL.png'
import digitalOceanIcon from '../assets/iconPNG/digitalOcean.png'
import dockerIcon from '../assets/iconPNG/docker.png'
import herokuIcon from '../assets/iconPNG/heroku.png'
import kTorIcon from '../assets/iconPNG/kTor.png'
import nodeIcon from '../assets/iconPNG/node.png'
import reactIcon from '../assets/iconPNG/react.png'

const Skills = () => {
  return  (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 py-20 bg-gray-600'>
      <h1 className='text-4xl font-bold text-center text-stone'>Skills</h1>
      <p className='text-center py-8'>Frameworks and languages</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <SkillsItem img={htmlIcon} title='Markup' />
        <SkillsItem img={cssIcon} title='stylesheet' />
        <SkillsItem img={jsIcon} title='interactivity' />
        <SkillsItem img={phpIcon} title='Database Communication' />
        <SkillsItem img={kotlinIcon} title='Newest Cross-platform language' />
        <SkillsItem img={mySQLIcon} title='Database Design' />
      </div>
      <p className='text-center py-8'>Cloud and Tools</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <SkillsItem img={digitalOceanIcon} title='Cloud Service for Deployment' />
        <SkillsItem img={dockerIcon} title='Containers' />
        <SkillsItem img={herokuIcon} title='Cloud services' />
        <SkillsItem img={kTorIcon} title='Server-side and Client-side framework' />
        <SkillsItem img={nodeIcon} title='Javascript Server' />
        <SkillsItem img={reactIcon} title='Component based JavaScript Framework' />
      </div>
    </div>
  )
}

export default Skills