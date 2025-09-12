import React from 'react'
import Button from '../../Components/ui/Button'


const FeaturedBouquet = () => {
  return (
    <>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 font-didot mt-10'>
            <div>

            </div>
            <div>
                <h2 className='text-3xl lg:text-4xl font-bold mb-4 leading-snug'>The Bloom Box Your Source for Stunning Flowers</h2>
                <p className='text-gray-500'>
                    From vibrant arrangements to elegant displays, our Bloom Box collection is designed to brighten your special moments.
                </p>
                <div>
                     <Button message="Learn More" style="px-6 py-2 mt-6 text-md" />
                </div>
                <div>

                </div>

            </div>
        </div>
    </>
  )
}

export default FeaturedBouquet