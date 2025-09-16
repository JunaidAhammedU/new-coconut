"use client"

import { useParams } from 'next/navigation';
import React from 'react';
import { detailedRecipeData } from '../../../../components/constants';
import ViewRecipeCard from '../../_components/viewRecipeCard';
import { notFound } from 'next/navigation';

const ViewRecipe = () => {
    const params = useParams();
    const recipeId = params.id as string;
    const recipe = detailedRecipeData.find(recipe => recipe.id === recipeId);

    if (!recipe) {
        notFound();
    }

    return <ViewRecipeCard recipe={recipe} />;
}

export default ViewRecipe