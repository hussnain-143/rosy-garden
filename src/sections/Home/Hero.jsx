import React from 'react'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            {/* Images row */}
            <div className="relative mb-8 lg:mb-20 xl:mb-10 ">
                <div className="flex flex-col lg:flex-row gap-[120px]  z-0 ">
                    <div className="self-end grayscale-25 hover:scale-105 hover:grayscale-0 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
                        <img src="/images/hero-s/1-cropped.svg" alt="flower 1" className='h-full w-full object-cover' />
                    </div>
                    <div className="hidden lg:block grayscale-25 hover:scale-105 hover:grayscale-0 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
                        <img src="/images/hero-s/2-cropped.svg" alt="flower 2"  className='h-full w-full object-cover' />
                    </div>
                    <div className="hidden lg:block self-start  grayscale-25 hover:scale-105 hover:grayscale-0 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
                        <img src="/images/hero-s/3-cropped.svg" alt="flower 3" className='h-full w-full object-cover' />
                    </div>
                </div>
                {/* Heading overlay */}
                <div className="absolute top-0 mt-15 lg:mt-10 w-full px-4">
                    <h2 className="text-5xl lg:text-8xl text-black font-didot leading-tight">
                        <span className="block">The Ultimate</span>
                        <span className="block ml-[0%] lg:ml-[40%] text-red-custom">Flower</span>
                        <span className="block ml-[0%] lg:ml-[52%] xl:ml-[60%]">Destination</span>
                    </h2>
                </div>
            </div>

            <div className="flex justify-center font-didot mb-10">
                <Link to='/shop'>
                    <Button message="Shop Now" style="px-9 py-3 text-lg font-bold" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 font-didot">
                <div>
                    <p className="text-gray-500 text-center">
                        The Ultimate Flower Destination is a paradise for flower enthusiasts and nature lovers alike.
                    </p>
                </div>
                <div className="w-full border-l-4 border-r-4 border-red-custom text-center px-4">
                    <h2 className='font-bold text-2xl text-red-custom'>Rosy</h2>
                    <h2 className='font-bold text-2xl text-green-custom'>Garden</h2>
                </div>
                <div>
                    <p className="text-gray-500 text-center">
                        Visitors can wander through winding pathways and secret corners, discovering a kaleidoscope of colors, fragrances.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero