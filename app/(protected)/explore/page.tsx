import React from "react";
import { foorCardData } from "../../../components/constants";
import { ExploreFoodCard } from "../_components/exploreFoodCard";

const Explore = () => {
    return (
        <div className="space-y-8">
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

            <section className="px-4">
                <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold">More from Explore</h2>
                    <p className="mt-2 text-gray-600">This area can be used for filters, featured lists, or additional content.</p>
                </div>
            </section>
        </div>
    );
};

export default Explore;