import React from 'react'
import { foorCardData } from '../../../components/constants'
import { ExploreFoodCard } from '../_components/exploreFoodCard'

const Explore = () => {
    return (
        <div>
            <div className='w-full h-[350px] flex flex-col items-center justify-center overflow-hidden border-b border-gray-300'>
                <div className="grid lg:grid-cols-5 gap-3 p-3 w-full">
                    {foorCardData.map((item, index) => (
                        <ExploreFoodCard key={index} title={item.title} url={item.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Explore