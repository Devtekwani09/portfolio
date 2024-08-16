import React from 'react'

const Cards = ({data}) => {
  return (
    <div className=' flex items-center mx-auto justify-center'>
        <div className='flex flex-wrap bg-richblack-800 w-[350px] h-[450px] justify-between'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-center mx-auto'>
                    <img src={data.image} alt="" className='h-[150px] rounded-md' />
                </div>

                <div className='p-4 flex flex-col gap-2'>
                    <h1 className='text-richblack-50 text-4xl font-inter font-semibold'>
                        {data.title}
                    </h1>

                    <p className='text-richblack-200'>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards