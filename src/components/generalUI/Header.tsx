import Image from 'next/image'
import React from 'react'
import { Globe } from 'react-feather'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-5'>
        <div className='my-3'>
            <Image src="/barracalogoComplete.png" alt="barraca Logo" width={150} height={150} />
        </div>
        <div className='flex justify-between align-center gap-2'>
            <Globe />
            <p>ING</p>
            <p>/</p>
            <p>ESP</p>
        </div>
    </div>
  )
}

export default Header