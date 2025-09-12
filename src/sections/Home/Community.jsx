import Button from '../../components/ui/Button'
import React from 'react'

const Community = () => {

    const data = [
    {
      id: 1,
      articles: "Wonderful Beautiful Flowers in Vase",
      date: "12-10-24",
      img: "/images/last-sec/1.svg",
    },
    {
      id: 2,
      articles: "Tips for Growing a Colorful Garden",
      date: "23-6-25",
      img: "/images/last-sec/2.svg",
    },
    {
      id: 3,
      articles: "Join Our Flower Festivals",
      date: "12-8-25",
      img: "/images/last-sec/3.svg",
    },
  ]

  return (
    <>
        <div className='mb-5'>
            <div className='flex justify-between font-didot items-center' >
                <div>
                    <h2 className='text-3xl lg:text-4xl font-bold mb-4 leading-snug'>Join Our Flower Lover Community</h2>
                </div>
                <div className='hidden lg:block ' >
                    <Button message="join now" style="px-4 py-2 text-md font-semibold" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 font-didot' >
                { data.map((item,index)=>(
                    <div key={index}>
                        <div className='grayscale-25 hover:scale-105 hover:grayscale-0 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl mb-3 rounded-2xl overflow-hidden'>
                            <img src={item.img} alt={item.articles} className='h-60 w-full object-cover'/>
                        </div>
                        <div>
                            <span className='text-gray-500'>
                                {item.date}
                            </span>
                            <p className='text-xl mb-3'>
                                {item.articles}
                            </p>
                            <Button message="Detail" style="px-4 py-2 text-md" />
                        </div>
                    </div> 
                )) }
                
            </div>

            <div className='flex lg:hidden justify-center mt-10 font-didot' >
                <Button message="join now" style="px-4 py-2 text-lg font-semibold" />
            </div>
        </div>
    </>
  )
}

export default Community