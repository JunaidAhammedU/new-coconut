import React from "react";
import { foodCardData, foorCardData } from "../../../components/constants";
import { ExploreFoodCard } from "../_components/exploreFoodCard";
import { RecepieCardCard } from "../_components/recepieCard";

const Explore = () => {
    return (
        <div className="space-y-8">
            <section className="px-4 pt-8 pb-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-medium border border-gray-200">
                            ✨ Discover Amazing Cuisines 🍗
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Explore World-Class
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600">
                                Culinary Experiences
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            From healthy salads to indulgent desserts, discover recipes that match your taste and dietary preferences.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-4 pt-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                                Explore Cuisines
                            </h1>
                            <p className="mt-1 text-sm text-gray-600">Discover popular dishes and categories.</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {foorCardData.map((item, index) => (
                                <ExploreFoodCard
                                    key={index}
                                    title={item.title}
                                    url={item.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Recipes Sections */}

            <section className="px-4 pb-12">
                <div className="max-w-7xl mx-auto">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {['All', 'Healthy', 'Spicy', 'BBQ', 'Smoothie', 'Comfort'].map((filter) => (
                            <button
                                key={filter}
                                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${filter === 'All'
                                    ? 'bg-black text-white shadow-lg shadow-gray-200'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-black'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                        {
                            foodCardData.length > 0 ?
                                (
                                    foodCardData.map((item) => (
                                        <RecepieCardCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500 col-span-full">No recipes found.</p>
                                )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Explore;
