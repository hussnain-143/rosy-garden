import React from 'react'
import Button from '../../components/ui/Button'


const FeaturedBouquet = () => {
  return (
    <>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10 font-didot mt-15 mb-15'>
            <div className=" w-full mx-auto grayscale-25 hover:grayscale-0 hover:scale-105 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
                <img 
                    src="/images/sec-3/3.svg" 
                    alt="flower design" 
                    className="h-full w-full object-cover" 
                />
            </div>
            <div>
                <h2 className='text-3xl lg:text-4xl font-bold mb-4 leading-snug'>The Bloom Box Your Source for Stunning Flowers</h2>
                <p className='text-gray-500'>
                    From vibrant arrangements to elegant displays, our Bloom Box collection is designed to brighten your special moments.
                </p>
                <div className='flex justify-center md:block '>
                    <Button message="Learn More" style="px-6 py-2 mt-6 text-md" />
                </div>
                <div className=' flex flex-col md:flex-row gap-10 mt-8'>
                    <div className="h-[320px] w-[320px] mx-auto grayscale-25 hover:grayscale-0 hover:scale-105 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
                        <img 
                            src="/images/sec-3/2.svg" 
                            alt="flower design" 
                            className="h-full w-full object-cover" 
                        />
                    </div>
                    <div className="h-[320px] w-[320px] mx-auto grayscale-25 hover:grayscale-0 hover:scale-105 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
                        <img 
                            src="/images/sec-3/1.svg" 
                            alt="flower design" 
                            className="h-full w-full object-cover" 
                        />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default FeaturedBouquet