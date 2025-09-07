'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'

interface ExploreFoodCardProps {
    title: string;
    url: string;
}

export const ExploreFoodCard: React.FC<ExploreFoodCardProps> = ({ title, url }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
            }}
            className='flex flex-col justify-center items-center p-2 cursor-pointer'>
            <Image
                src={url}
                alt="Food Image"
                width={100}
                height={100}
                className="rounded-lg shadow-md"
            />
            <h2 className="text-xs font-semibold mt-2">{title}</h2>
        </motion.div>
    )
}