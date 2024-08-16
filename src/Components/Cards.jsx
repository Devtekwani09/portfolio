import React from 'react'
import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Cards = ({data}) => {
  return (
    <div className= 'rounded-md flex items-center mx-auto justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-100 shadow-[12px_12px] shadow-richblack-300'>
        <div className='flex flex-wrap bg-richblack-800 w-[350px] h-[470px] justify-between'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-center mx-auto'>
                    <img src={data.image} alt="" className='h-[150px] rounded-md' />
                </div>

                <div className='p-4 flex flex-col gap-2'>
                    <h1 className='text-richblack-50 text-3xl font-inter font-semibold'>
                        {data.title}
                    </h1>

                    <p className='text-richblack-200'>
                        {data.description}
                    </p>
                </div>

                <div className='flex flex-row gap-2 text-richblack-50 ml-4 text-3xl'>
                    <a href={data.githubLink}>
                        <FaGithub />
                    </a>
                    <a href={data.projectLink}>
                        <IoMdOpen />
                    </a>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards