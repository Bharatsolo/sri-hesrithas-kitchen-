export interface Testimonial {
    id: string;
    name: string;
    rating: number;
    text: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Priya Sharma',
        rating: 5,
        text: 'The Bagara Rice with Chicken Curry is absolutely divine! It tastes like a home-cooked meal with restaurant-level flavor. Highly recommend!',
        date: '2 weeks ago',
    },
    {
        id: '2',
        name: 'Ravi Kumar',
        rating: 5,
        text: 'Best cloud kitchen in the city! The Pepper Chicken is out of this world. Quick delivery and the food arrives piping hot every time.',
        date: '1 month ago',
    },
    {
        id: '3',
        name: 'Anitha Reddy',
        rating: 5,
        text: 'I order the Veg Meals Combo almost every week. It\'s like eating at my grandmother\'s house. The dal and curry are simply perfect.',
        date: '3 weeks ago',
    },
    {
        id: '4',
        name: 'Mohammed Faisal',
        rating: 5,
        text: 'The Mutton Gravy is worth every rupee. Tender meat, rich gravy, and authentic Bangalore flavors. My family loves it!',
        date: '1 week ago',
    },
    {
        id: '5',
        name: 'Deepika Nair',
        rating: 5,
        text: 'As a vegetarian, I\'m thrilled with the options here. The Coconut Milk Pulao and Stuffed Brinjal Curry are my favorites!',
        date: '2 months ago',
    },
];
