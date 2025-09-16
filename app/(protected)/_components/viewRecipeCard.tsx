'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Clock,
    Users,
    Star,
    Flame,
    ChefHat,
    Heart,
    Share2,
    Bookmark,
    Play,
    CheckCircle,
    Timer,
    MessageSquare,
    ThumbsUp
} from 'lucide-react';
import { DetailedRecipeData } from '../../../components/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';

interface ViewRecipeCardProps {
    recipe: DetailedRecipeData;
}

const ViewRecipeCard: React.FC<ViewRecipeCardProps> = ({ recipe }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleStepCompletion = (stepNumber: number) => {
        setCompletedSteps(prev =>
            prev.includes(stepNumber)
                ? prev.filter(step => step !== stepNumber)
                : [...prev, stepNumber]
        );
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-green-100 text-green-800 border-green-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'hard': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const formatTime = (totalMinutes: number) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                    src={recipe.images[currentImageIndex]}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Image Navigation */}
                {recipe.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {recipe.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsFavorited(!isFavorited)}
                        className={`p-3 rounded-full backdrop-blur-md transition-colors cursor-pointer ${isFavorited ? 'bg-white/20 text-white' : 'bg-white/20 text-white'
                            }`}
                    >
                        <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`p-3 rounded-full backdrop-blur-md transition-colors  cursor-pointer ${isBookmarked ? 'bg-white/20 text-white' : 'bg-white/20 text-white'
                            }`}
                    >
                        <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white"
                    >
                        <Share2 className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {recipe.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} className="bg-white/20 px-3 py-2 backdrop-blur-sm text-white shadow-lg">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
                    <p className="text-lg text-white/90 mb-4">{recipe.subtitle}</p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{formatTime(recipe.time)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{recipe.portions} servings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Flame className="w-4 h-4" />
                            <span>{recipe.calories} cal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span>{recipe.rating}</span>
                        </div>
                        <Badge className={getDifficultyColor(recipe.difficulty)}>
                            {recipe.difficulty}
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ChefHat className="w-6 h-6" />
                                    About This Recipe
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
                            </CardContent>
                        </Card>

                        {/* Chef Info */}
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <Image
                                    src={recipe.chef.avatar}
                                    alt={recipe.chef.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{recipe.chef.name}</h3>
                                    <p className="text-gray-600">{recipe.chef.speciality}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tabs for Instructions and Reviews */}
                        <Tabs defaultValue="instructions" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews ({recipe.reviews.length})</TabsTrigger>
                            </TabsList>

                            <TabsContent value="instructions" className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Play className="w-6 h-6" />
                                            Cooking Instructions
                                        </CardTitle>
                                        <CardDescription>
                                            Follow these steps to create the perfect dish
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {recipe.instructions.map((instruction) => (
                                            <motion.div
                                                key={instruction.step}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: instruction.step * 0.1 }}
                                                className={`flex gap-4 p-4 rounded-lg border transition-all ${completedSteps.includes(instruction.step)
                                                    ? 'bg-green-50 border-green-200'
                                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <button
                                                    onClick={() => toggleStepCompletion(instruction.step)}
                                                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${completedSteps.includes(instruction.step)
                                                        ? 'bg-green-500 border-green-500 text-white'
                                                        : 'border-gray-300 hover:border-green-400'
                                                        }`}
                                                >
                                                    {completedSteps.includes(instruction.step) ? (
                                                        <CheckCircle className="w-4 h-4" />
                                                    ) : (
                                                        <span className="text-sm font-medium">{instruction.step}</span>
                                                    )}
                                                </button>
                                                <div className="flex-1">
                                                    <p className={`${completedSteps.includes(instruction.step)
                                                        ? 'line-through text-gray-500'
                                                        : 'text-gray-900'
                                                        }`}>
                                                        {instruction.instruction}
                                                    </p>
                                                    {instruction.time && (
                                                        <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                                                            <Timer className="w-4 h-4" />
                                                            <span>{instruction.time} minutes</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </CardContent>
                                </Card>

                                {/* Tips Section */}
                                {recipe.tips.length > 0 && (
                                    <Card className="mt-6">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Chef's Tips</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {recipe.tips.map((tip, index) => (
                                                    <li key={index} className="flex items-start gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                                        <p className="text-gray-700">{tip}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                )}
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-6">
                                <div className="space-y-4">
                                    {recipe.reviews.map((review) => (
                                        <Card key={review.id}>
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <Image
                                                        src={review.avatar}
                                                        alt={review.user}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full object-cover"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h4 className="font-semibold">{review.user}</h4>
                                                            <div className="flex gap-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-4 h-4 ${i < review.rating
                                                                            ? 'fill-current text-yellow-400'
                                                                            : 'text-gray-300'
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-gray-500">{review.date}</span>
                                                        </div>
                                                        <p className="text-gray-700 mb-3">{review.comment}</p>
                                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                                            <button className="flex items-center gap-1 hover:text-blue-600">
                                                                <ThumbsUp className="w-4 h-4" />
                                                                <span>Helpful</span>
                                                            </button>
                                                            <button className="flex items-center gap-1 hover:text-blue-600">
                                                                <MessageSquare className="w-4 h-4" />
                                                                <span>Reply</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Ingredients */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Ingredients</CardTitle>
                                <CardDescription>
                                    Everything you need for {recipe.portions} servings
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                            <span className="text-gray-900">{ingredient.name}</span>
                                            <span className="text-gray-600 font-medium">
                                                {ingredient.amount} {ingredient.unit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Nutrition Facts */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Nutrition Facts</CardTitle>
                                <CardDescription>Per serving</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="text-center py-4 bg-gray-50 rounded-lg">
                                        <div className="text-3xl font-bold text-gray-900">{recipe.nutrition.calories}</div>
                                        <div className="text-sm text-gray-600">Calories</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                                            <div className="font-semibold text-blue-900">{recipe.nutrition.protein}g</div>
                                            <div className="text-blue-600">Protein</div>
                                        </div>
                                        <div className="text-center p-3 bg-green-50 rounded-lg">
                                            <div className="font-semibold text-green-900">{recipe.nutrition.carbs}g</div>
                                            <div className="text-green-600">Carbs</div>
                                        </div>
                                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                                            <div className="font-semibold text-yellow-900">{recipe.nutrition.fat}g</div>
                                            <div className="text-yellow-600">Fat</div>
                                        </div>
                                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                                            <div className="font-semibold text-purple-900">{recipe.nutrition.fiber}g</div>
                                            <div className="text-purple-600">Fiber</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-2 border-t">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Sugar</span>
                                            <span className="font-medium">{recipe.nutrition.sugar}g</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Sodium</span>
                                            <span className="font-medium">{recipe.nutrition.sodium}mg</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tags */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recipe Tags</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {recipe.tags.map((tag, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipeCard;