import Image from 'next/image'
import React from 'react'

interface ExploreFoodCardProps {
    title: string;
    url: string;
}

const ExploreFoodCard = ({ title, url }: ExploreFoodCardProps) => {

    return (
        <div>
            <Image
                src={url}
                alt="Food Image"
                width={50}
                height={50}
                className="rounded-lg shadow-md"
            />
            <h2 className="text-xs font-semibold mt-2">{title}</h2>
        </div>
    )
}

export default ExploreFoodCard