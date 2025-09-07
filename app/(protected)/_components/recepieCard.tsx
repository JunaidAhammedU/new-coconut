'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Clock, Users, Star, Flame } from 'lucide-react';
import { FoodCardData } from '../../../components/constants';

interface RecepieCardCardProps extends FoodCardData { }

const getCategoryColor = (category: FoodCardData['category']) => {
    switch (category) {
        case 'healthy':
            return 'bg-green-50 border-green-200 text-green-700';
        case 'spicy':
            return 'bg-red-50 border-red-200 text-red-700';
        case 'bbq':
            return 'bg-orange-50 border-orange-200 text-orange-700';
        case 'smoothie':
            return 'bg-purple-50 border-purple-200 text-purple-700';
        case 'comfort':
            return 'bg-yellow-50 border-yellow-200 text-yellow-700';
        case 'traditional':
            return 'bg-gray-50 border-gray-200 text-gray-700';
        default:
            return 'bg-gray-50 border-gray-200 text-gray-700';
    }
};

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
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
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

                <div className={`absolute top-3 left-3 z-20 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(category)}`}>
                    {category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">{rating}</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-3">
                {/* Title and Subtitle */}
                <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-gray-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                        {subtitle}
                    </p>
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
                        <div className="flex gap-1">
                            {[1, 2, 3].map((level) => (
                                <div
                                    key={level}
                                    className={`w-1.5 h-1.5 rounded-full ${level <= (difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3)
                                        ? getDifficultyColor(difficulty).replace('text-', 'bg-')
                                        : 'bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className={`text-xs font-medium capitalize ${getDifficultyColor(difficulty)}`}>
                            {difficulty}
                        </span>
                    </div>

                    {/* Quick Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs hover:bg-gray-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                        +
                    </motion.button>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blbg-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};