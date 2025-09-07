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

// Legacy export for backward compatibility
export const foorCardData = foodCardData.map(item => ({
    title: item.title,
    url: item.url
}));