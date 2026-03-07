import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 bg-red-500'>
      <Link className='text-[6vw] lg:mt-6 ' to='/agence'>Agence</Link>
      <Link className='text-[6vw] lg:mt-6 ' to='/projects'>Projects</Link>
      
    </div>
  )
}

export default HomeBottomText
