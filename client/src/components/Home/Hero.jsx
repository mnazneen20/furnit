import React from 'react'
import desk from './hero.png'

const Hero = () => {
    return (
        <div className='px-16 py-20 flex bg-pink items-center'>
            <div className='w-[55%] px-10'>
                <p>Interior Needs</p>
                <h1 className='py-4 text-4xl font-semibold pr-5 leading-snug'>Various new collections of furniture to decorate the corner of your house.</h1>
                <button className='bg-dark-ash text-pink font-semibold text-lg px-10 py-2'>Shop Now</button>
            </div>
            <div className='w-[45%]'>
                <img src={desk} alt="desk" />
            </div>
        </div>
    )
}

export default Hero