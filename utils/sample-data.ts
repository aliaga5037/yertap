import { User, Restaurant } from '@interfaces/index';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sampleRestaurantData: Restaurant[] = [
  {
    id: 1,
    title: 'Vapiano',
    type: 'Restaurant & Cafe',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    gallery: [
      '/images/vapiano.jpg',
      '/images/pizza.jpg',
      '/images/breakfast.jpg',
      '/images/salad.jpg',
      '/images/food.jpg',
      '/images/pasta.jpg',
    ],
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
    menu: [
      {
        type: 'European Cuisine',
        title: 'Pizza',
        items: [
          {
            title: 'Grill Chicken Parmesan',
            description:
              'Garlic Parmesan Sauce, Grilled chicken, ham, tomato, mozzarella cheese, jalapeno',
            price: '15.99 ₼',
            image: '/images/grill_chicken.jpg',
          },
          {
            title: 'American Hot',
            description:
              'Tomato Sauce, Mozzarella, Pepperoni and Jalapeno peppers',
            price: '13.99 ₼',
            image: '/images/american_hot.jpg',
          },
        ],
      },
    ],
    highlights: [
      { title: 'Free Wifi', icon: '' },
      { title: 'Full Service', icon: '' },
      { title: 'Washing-Stand', icon: '' },
      { title: 'Every Hour Cleaning', icon: '' },
    ],
  },
  {
    id: 2,
    title: 'Starbucks',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 3,
    title: 'Starbucks',
    type: 'Coffee',
    marked: true,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 4,
    title: 'Vapiano',
    type: 'Restaurant',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
  },
  {
    id: 5,
    title: 'Starbucks',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 6,
    title: 'Starbucks',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 7,
    title: 'Vapiano',
    type: 'Restaurant',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
  },
  {
    id: 8,
    title: 'Starbucks',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 9,
    title: 'Vapiano',
    type: 'Restaurant',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
  },
  {
    id: 10,
    title: 'Starbucks',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
];
