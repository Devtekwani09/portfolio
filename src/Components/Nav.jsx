import React, { useState } from 'react'
import HighlightedText from './HighlightedText'
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [isOpen, setisOpen] = useState(false);

  return (
    <div className='w-full h-[70px] bg-richblack-700 text-richblack-300'>
        <div className='w-11/12 flex items-center justify-between mx-auto p-3'>
            <div className='flex text-3xl'>
                D  
                <HighlightedText text={"T"} />
            </div>

            <div className={`md:static md:min-h-fit absolute bg-richblack-700 min-h-[30px] top-[9%] left-0 md:w-auto w-full p-3 ${isOpen ? 'block' : 'hidden' } md:block`}>
                <ul className='flex md:flex-row flex-col items-center md:gap-20 gap-4 font-semibold text-xl'>
                    <li className='cursor-pointer hover:text-richblack-50 transition-all duration-200'>
                        Home
                    </li>
                    <li className='cursor-pointer hover:text-richblack-50 transition-all duration-200'>
                        Projects
                    </li>
                    <li className='cursor-pointer hover:text-richblack-50 transition-all duration-200'>
                        Contact
                    </li>
                </ul>               
            </div>
            {}
            <button
            className='text-3xl md:hidden cursor-pointer'
            onClick={() => setisOpen(!isOpen)}
            >
                {isOpen ? <AiOutlineClose /> : <TiThMenu /> }

            </button>
        </div>

    </div>
  )
}

export default Nav