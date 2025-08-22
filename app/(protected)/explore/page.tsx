import React from 'react'
import ExploreFoodCard from '../_components/exploreFoodCard'
import { foorCardData } from '../../../components/constants'

const Explore = () => {
    return (
        <div>
            <div className='w-full h-[300px] bg-red-600 p-3'>
                <h1 className="text-xl font-bold mb-4">What's On Your Mind</h1>
                <div className='flex justify-center items-center bg-yellow-600 w-full'>
                    <div className="grid lg:grid-cols-5 gap-3 bg-green-600 p-3 w-full">
                        {foorCardData.map((item, index) => (
                            <ExploreFoodCard key={index} title={item.title} url={item.url} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore