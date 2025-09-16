import React from 'react';
import Link from 'next/link';
import { ChefHat, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ChefHat className="w-10 h-10 text-gray-400" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Recipe Not Found</h1>
                    <p className="text-gray-600 text-lg">
                        Sorry, we couldn't find the recipe you're looking for. It might have been removed or the link is incorrect.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Explore
                    </Link>

                    <div className="text-sm text-gray-500">
                        Or <Link href="/" className="text-blue-600 hover:underline">go to homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;