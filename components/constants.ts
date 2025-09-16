export interface FoodCardData {
    id: string;
    title: string;
    subtitle: string;
    url: string;
    calories: number;
    time: number;
    portions: number;
    category: 'healthy' | 'spicy' | 'bbq' | 'smoothie' | 'comfort' | 'traditional';
    difficulty: 'easy' | 'medium' | 'hard';
    rating: number;
}

export interface DetailedRecipeData extends FoodCardData {
    description: string;
    images: string[];
    ingredients: {
        name: string;
        amount: string;
        unit: string;
    }[];
    instructions: {
        step: number;
        instruction: string;
        time?: number;
    }[];
    nutrition: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
        fiber: number;
        sugar: number;
        sodium: number;
    };
    tags: string[];
    chef: {
        name: string;
        avatar: string;
        speciality: string;
    };
    reviews: {
        id: string;
        user: string;
        avatar: string;
        rating: number;
        comment: string;
        date: string;
    }[];
    tips: string[];
}

export const foodCardData: FoodCardData[] = [
    {
        id: "1",
        title: "Fresh and Healthy Salad",
        subtitle: "Crispy vegetables with organic dressing",
        url: "/Images/food1.png",
        calories: 90,
        time: 5,
        portions: 3,
        category: 'healthy',
        difficulty: 'easy',
        rating: 4.8
    },
    {
        id: "2",
        title: "Delicious Spicy Ramen Noodles",
        subtitle: "Authentic Japanese ramen with rich broth",
        url: "/Images/food2.png",
        calories: 150,
        time: 18,
        portions: 2,
        category: 'spicy',
        difficulty: 'medium',
        rating: 4.9
    },
    {
        id: "3",
        title: "Red Hot BBQ Chicken Wings",
        subtitle: "Smoky grilled wings with spicy sauce",
        url: "/Images/food3.png",
        calories: 120,
        time: 45,
        portions: 3,
        category: 'bbq',
        difficulty: 'medium',
        rating: 4.7
    },
    {
        id: "4",
        title: "Healthy Fruit Smoothie Bowl",
        subtitle: "Fresh berries and granola bowl",
        url: "/Images/food4.png",
        calories: 110,
        time: 12,
        portions: 3,
        category: 'smoothie',
        difficulty: 'easy',
        rating: 4.6
    },
    {
        id: "5",
        title: "Red Pepper Chicken Curry",
        subtitle: "Aromatic curry with tender chicken",
        url: "/Images/food5.png",
        calories: 120,
        time: 30,
        portions: 4,
        category: 'spicy',
        difficulty: 'medium',
        rating: 4.8
    },
    {
        id: "6",
        title: "Mediterranean Quinoa Bowl",
        subtitle: "Protein-rich quinoa with fresh herbs",
        url: "/Images/food6.png",
        calories: 85,
        time: 15,
        portions: 2,
        category: 'healthy',
        difficulty: 'easy',
        rating: 4.5
    },
    {
        id: "7",
        title: "Classic Margherita Pizza",
        subtitle: "Wood-fired pizza with fresh basil",
        url: "/Images/food7.png",
        calories: 280,
        time: 25,
        portions: 4,
        category: 'comfort',
        difficulty: 'medium',
        rating: 4.9
    },
    {
        id: "8",
        title: "Grilled Salmon Teriyaki",
        subtitle: "Fresh salmon with sweet teriyaki glaze",
        url: "/Images/food8.png",
        calories: 195,
        time: 20,
        portions: 2,
        category: 'healthy',
        difficulty: 'medium',
        rating: 4.7
    },
    {
        id: "9",
        title: "Avocado Toast Supreme",
        subtitle: "Artisan bread with ripe avocado",
        url: "/Images/food9.png",
        calories: 145,
        time: 8,
        portions: 1,
        category: 'healthy',
        difficulty: 'easy',
        rating: 4.4
    },
    {
        id: "10",
        title: "Chocolate Lava Cake",
        subtitle: "Decadent cake with molten center",
        url: "/Images/food10.png",
        calories: 320,
        time: 35,
        portions: 2,
        category: 'comfort',
        difficulty: 'hard',
        rating: 4.9
    }
];

export const foorCardData = foodCardData.map(item => ({
    title: item.title,
    url: item.url
}));

export const detailedRecipeData: DetailedRecipeData[] = [
    {
        ...foodCardData[0],
        description: "A refreshing and nutritious salad perfect for a light meal. This vibrant dish combines crispy mixed greens with fresh vegetables and a zesty organic dressing that will awaken your taste buds.",
        images: ["/Images/food1.png", "/Images/food2.png", "/Images/food3.png"],
        ingredients: [
            { name: "Mixed greens", amount: "4", unit: "cups" },
            { name: "Cherry tomatoes", amount: "1", unit: "cup" },
            { name: "Cucumber", amount: "1", unit: "medium" },
            { name: "Red onion", amount: "1/4", unit: "cup" },
            { name: "Organic olive oil", amount: "2", unit: "tbsp" },
            { name: "Lemon juice", amount: "1", unit: "tbsp" },
            { name: "Salt", amount: "1/2", unit: "tsp" },
            { name: "Black pepper", amount: "1/4", unit: "tsp" }
        ],
        instructions: [
            { step: 1, instruction: "Wash and dry all the mixed greens thoroughly", time: 2 },
            { step: 2, instruction: "Chop cherry tomatoes in half and slice cucumber", time: 2 },
            { step: 3, instruction: "Thinly slice the red onion", time: 1 },
            { step: 4, instruction: "Combine olive oil, lemon juice, salt, and pepper for dressing" },
            { step: 5, instruction: "Toss all ingredients together and serve immediately" }
        ],
        nutrition: {
            calories: 90,
            protein: 3,
            carbs: 8,
            fat: 6,
            fiber: 4,
            sugar: 5,
            sodium: 180
        },
        tags: ["Vegetarian", "Vegan", "Gluten-free", "Low-calorie", "Fresh"],
        chef: {
            name: "Chef Maria",
            avatar: "/Images/food4.png",
            speciality: "Healthy Mediterranean Cuisine"
        },
        reviews: [
            {
                id: "1",
                user: "Sarah Johnson",
                avatar: "/Images/food5.png",
                rating: 5,
                comment: "Absolutely delicious! The dressing is perfect and the vegetables are so fresh.",
                date: "2024-03-15"
            },
            {
                id: "2",
                user: "Mike Chen",
                avatar: "/Images/food6.png",
                rating: 4,
                comment: "Great healthy option. Will definitely make this again!",
                date: "2024-03-10"
            }
        ],
        tips: [
            "Use organic vegetables for the best flavor",
            "Chill the salad bowl before serving for extra freshness",
            "Add avocado for extra creaminess and healthy fats"
        ]
    },
    {
        ...foodCardData[1],
        description: "Authentic Japanese ramen with a rich, flavorful broth that has been simmered for hours. This spicy version features tender noodles, perfectly soft-boiled eggs, and aromatic spices.",
        images: ["/Images/food2.png", "/Images/food1.png", "/Images/food4.png"],
        ingredients: [
            { name: "Ramen noodles", amount: "2", unit: "packs" },
            { name: "Chicken broth", amount: "4", unit: "cups" },
            { name: "Miso paste", amount: "2", unit: "tbsp" },
            { name: "Soy sauce", amount: "2", unit: "tbsp" },
            { name: "Sesame oil", amount: "1", unit: "tbsp" },
            { name: "Garlic", amount: "3", unit: "cloves" },
            { name: "Ginger", amount: "1", unit: "inch" },
            { name: "Green onions", amount: "2", unit: "stalks" },
            { name: "Soft-boiled eggs", amount: "2", unit: "pieces" },
            { name: "Chili oil", amount: "1", unit: "tsp" }
        ],
        instructions: [
            { step: 1, instruction: "Prepare soft-boiled eggs and set aside", time: 8 },
            { step: 2, instruction: "Mince garlic and ginger", time: 2 },
            { step: 3, instruction: "Heat sesame oil and sauté garlic and ginger", time: 2 },
            { step: 4, instruction: "Add chicken broth, miso paste, and soy sauce", time: 3 },
            { step: 5, instruction: "Cook ramen noodles according to package instructions", time: 3 },
            { step: 6, instruction: "Assemble bowls with noodles, broth, eggs, and toppings" }
        ],
        nutrition: {
            calories: 150,
            protein: 12,
            carbs: 20,
            fat: 8,
            fiber: 2,
            sugar: 3,
            sodium: 920
        },
        tags: ["Spicy", "Comfort food", "Japanese", "Soup", "Warming"],
        chef: {
            name: "Chef Tanaka",
            avatar: "/Images/food7.png",
            speciality: "Traditional Japanese Cuisine"
        },
        reviews: [
            {
                id: "3",
                user: "Emma Wilson",
                avatar: "/Images/food8.png",
                rating: 5,
                comment: "Best ramen I've ever made at home! The broth is incredible.",
                date: "2024-03-12"
            }
        ],
        tips: [
            "Don't overcook the noodles - they should be slightly firm",
            "Let the broth simmer longer for deeper flavor",
            "Top with nori and sesame seeds for extra authenticity"
        ]
    },
    {
        ...foodCardData[2],
        description: "Smoky, tender chicken wings with a perfect balance of sweet and spicy BBQ sauce. These wings are grilled to perfection with a crispy exterior and juicy interior.",
        images: ["/Images/food3.png", "/Images/food5.png", "/Images/food7.png"],
        ingredients: [
            { name: "Chicken wings", amount: "2", unit: "lbs" },
            { name: "BBQ sauce", amount: "1/2", unit: "cup" },
            { name: "Brown sugar", amount: "2", unit: "tbsp" },
            { name: "Paprika", amount: "1", unit: "tbsp" },
            { name: "Garlic powder", amount: "1", unit: "tsp" },
            { name: "Onion powder", amount: "1", unit: "tsp" },
            { name: "Cayenne pepper", amount: "1/2", unit: "tsp" },
            { name: "Salt", amount: "1", unit: "tsp" },
            { name: "Black pepper", amount: "1/2", unit: "tsp" }
        ],
        instructions: [
            { step: 1, instruction: "Pat wings dry and season with spice rub", time: 5 },
            { step: 2, instruction: "Let wings marinate for at least 30 minutes", time: 30 },
            { step: 3, instruction: "Preheat grill to medium-high heat", time: 5 },
            { step: 4, instruction: "Grill wings for 20-25 minutes, turning occasionally", time: 25 },
            { step: 5, instruction: "Brush with BBQ sauce in last 5 minutes", time: 5 },
            { step: 6, instruction: "Let rest for 5 minutes before serving", time: 5 }
        ],
        nutrition: {
            calories: 120,
            protein: 18,
            carbs: 6,
            fat: 4,
            fiber: 0,
            sugar: 5,
            sodium: 450
        },
        tags: ["BBQ", "Grilled", "Spicy", "Protein-rich", "Party food"],
        chef: {
            name: "Chef Rodriguez",
            avatar: "/Images/food9.png",
            speciality: "BBQ & Grilled Specialties"
        },
        reviews: [
            {
                id: "4",
                user: "Jake Thompson",
                avatar: "/Images/food10.png",
                rating: 5,
                comment: "These wings are amazing! Perfect for game day.",
                date: "2024-03-08"
            }
        ],
        tips: [
            "For extra crispy wings, pat them completely dry before seasoning",
            "Use a meat thermometer to ensure internal temperature reaches 165°F",
            "Serve with ranch or blue cheese dressing"
        ]
    }
];