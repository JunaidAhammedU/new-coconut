'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Clock, Users, Star, Flame } from 'lucide-react';
import { FoodCardData } from '../../../components/constants';

interface RecepieCardCardProps extends FoodCardData { }

const getDifficultyColor = (difficulty: FoodCardData['difficulty']) => {
    switch (difficulty) {
        case 'easy':
            return 'text-green-600';
        case 'medium':
            return 'text-yellow-600';
        case 'hard':
            return 'text-red-600';
        default:
            return 'text-gray-600';
    }
};

export const RecepieCardCard: React.FC<RecepieCardCardProps> = ({
    id,
    title,
    subtitle,
    url,
    calories,
    time,
    portions,
    category,
    difficulty,
    rating
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/view/${id}`);
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 overflow-hidden cursor-pointer"
        >
            <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                <Image
                    src={url}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />

                <div className={`absolute top-3 left-3 inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md text-black rounded-full text-sm font-medium border border-white/30 shadow-lg`}>
                    {category}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-3">
                {/* Title and Subtitle */}
                <div className="relative space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-gray-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                        {subtitle}
                    </p>
                    <span className={`absolute top-0 right-0 text-sm font-medium capitalize ${getDifficultyColor(difficulty)} `}>
                        {difficulty}
                    </span>
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-orange-500" />
                        <span className="font-medium">{calories}</span>
                        <span>cal</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="font-medium">{time}</span>
                        <span>min</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-green-500" />
                        <span className="font-medium">{portions}</span>
                        <span>serves</span>
                    </div>
                </div>

                {/* Difficulty Indicator */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* <span className={`text-xs font-medium capitalize ${getDifficultyColor(difficulty)}`}>
                            {difficulty}
                        </span> */}
                    </div>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blbg-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};