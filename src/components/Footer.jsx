import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import {Github, LinkedIn, ProfileName} from "../config.js";
import {FaLinkedin} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto items-end flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>
                {ProfileName}
            </h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href={Github}
                   target={'_blank'}
                ><FaGithubSquare /></a>
                <a href={LinkedIn}
                     target={'_blank'}
                ><FaLinkedin /></a>
            </div>

        </div>

        <p className='text-gray-400'>
            @{new Date().getFullYear()} &nbsp;
            {ProfileName}</p>
    </div>
  )
}

export default Footer