export type Category = 'non-veg' | 'veg' | 'combo';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  isVeg: boolean;
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Non-Veg Specials
  {
    id: 'bagara-rice-chicken',
    name: 'Bagara Rice with Chicken Curry',
    price: 249,
    category: 'non-veg',
    description: 'Fragrant bagara rice paired with our signature spicy chicken curry, slow-cooked with aromatic spices.',
    isVeg: false,
    image: '/images/bagara-chicken.jpg',
  },
  {
    id: 'raagi-mudde-chicken',
    name: 'Raagi Mudde with Chicken Curry',
    price: 179,
    category: 'non-veg',
    description: 'Traditional ragi mudde served with rich and flavorful chicken curry — a wholesome comfort meal.',
    isVeg: false,
    image: '/images/raagi-mudde.jpg',
  },
  {
    id: 'pepper-chicken',
    name: 'Pepper Chicken',
    price: 249,
    category: 'non-veg',
    description: 'Tender chicken tossed with cracked black pepper, curry leaves, and a bold spice blend.',
    isVeg: false,
    image: '/images/pepper-chicken.jpg',
  },
  {
    id: 'chilli-chicken',
    name: 'Chilli Chicken',
    price: 249,
    category: 'non-veg',
    description: 'Indo-Chinese style chilli chicken with bell peppers, onions, and fiery sauces.',
    isVeg: false,
    image: '/images/chilli-chicken.jpg',
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop (6 pcs)',
    price: 249,
    category: 'non-veg',
    description: 'Crispy-fried chicken drumettes with a tangy, spicy glaze — perfect party starter.',
    isVeg: false,
    image: '/images/chicken-lollipop.jpg',
  },
  {
    id: 'mutton-gravy',
    name: 'Mutton Gravy',
    price: 369,
    category: 'non-veg',
    description: 'Slow-braised mutton in a rich, aromatic gravy with hand-ground spices and caramelized onions.',
    isVeg: false,
    image: '/images/mutton-gravy.jpg',
  },
  // Veg Delights
  {
    id: 'bagara-rice-paneer',
    name: 'Bagara Rice with Paneer Curry',
    price: 229,
    category: 'veg',
    description: 'Aromatic bagara rice served with creamy paneer curry in a velvety tomato-cashew gravy.',
    isVeg: true,
    image: '/images/bagara-paneer.jpg',
  },
  {
    id: 'coconut-milk-pulao',
    name: 'Coconut Milk Pulao',
    price: 219,
    category: 'veg',
    description: 'Fragrant basmati rice cooked in creamy coconut milk with mild spices and fried cashews.',
    isVeg: true,
    image: '/images/coconut-pulao.jpg',
  },
  {
    id: 'stuffed-brinjal',
    name: 'Stuffed Brinjal Curry',
    price: 169,
    category: 'veg',
    description: 'Baby brinjals stuffed with a peanut-sesame masala and simmered in a tangy tamarind gravy.',
    isVeg: true,
    image: '/images/stuffed-brinjal.jpg',
  },
  {
    id: 'chana-masala',
    name: 'Chana Masala',
    price: 169,
    category: 'veg',
    description: 'Hearty chickpeas simmered in a robust, spiced tomato-onion gravy with fresh coriander.',
    isVeg: true,
    image: '/images/chana-masala.jpg',
  },
  {
    id: 'pulihora-rice',
    name: 'Pulihora Rice',
    price: 99,
    category: 'veg',
    description: 'Traditional tamarind rice with peanuts, curry leaves, and a unique South Indian tang.',
    isVeg: true,
    image: '/images/pulihora.jpg',
  },
  {
    id: 'tomato-rice',
    name: 'Tomato Rice',
    price: 119,
    category: 'veg',
    description: 'Flavourful rice cooked with ripe tomatoes, onions, and aromatic spices.',
    isVeg: true,
    image: '/images/tomato-rice.jpg',
  },
  {
    id: 'veg-biryani',
    name: 'Vegetable Biryani',
    price: 219,
    category: 'veg',
    description: 'Layered basmati rice with seasoned mixed vegetables, fried onions, saffron, and biryani masala.',
    isVeg: true,
    image: '/images/veg-biryani.jpg',
  },
  // Combos
  {
    id: 'standard-combo',
    name: 'Standard Veg Meals Combo',
    price: 199,
    category: 'combo',
    description: 'A complete thali — Rice + Dal + Choice of Curry + Papad + Salad. The perfect wholesome meal.',
    isVeg: true,
    image: '/images/veg-combo.jpg',
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'non-veg', label: 'Non-Veg Specials' },
  { id: 'veg', label: 'Veg Delights' },
  { id: 'combo', label: 'Combos' },
] as const;
