import { User, Restaurant } from 'types/index';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice', image: '/images/user.jpg' },
  { id: 102, name: 'Bob', image: '/images/user.jpg' },
  { id: 103, name: 'Caroline', image: '/images/user.jpg' },
  { id: 104, name: 'Dave', image: '/images/user.jpg' },
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
        foodTypes: [
          {
            id: 1,
            title: 'Pizza',
            icon: 'pizza',
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
          {
            id: 1,
            title: 'Pasta',
            icon: 'plate',
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
      },
    ],
    highlights: [
      { title: 'Free Wifi', icon: 'hanger' },
      { title: 'Full Service', icon: 'wc' },
      { title: 'Washing-Stand', icon: 'tap' },
      { title: 'Every Hour Cleaning', icon: 'nursery' },
    ],
    review: {
      average: 4.5,
      count: 2759,
      stars: {
        5: 1350,
        4: 890,
        3: 500,
        2: 60,
        1: 18,
      },
      items: [
        {
          id: 1,
          user: {
            id: 1,
            name: 'John Doe',
            image: '/images/user.jpg',
          },
          rating: 4.5,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
          date: '2020-01-01',
          claps: 10,
        },
        {
          id: 2,
          user: {
            id: 1,
            name: 'John Doe',
            image: '/images/user.jpg',
          },
          rating: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
          date: '2020-01-01',
          claps: 5,
        },
      ],
    },
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
    title: 'Gloria Jeans',
    type: 'Coffee',
    marked: true,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 4,
    title: 'Burger King',
    type: 'Restaurant',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
  },
  {
    id: 5,
    title: 'Fuzzy',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 6,
    title: 'United Coffee',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 7,
    title: 'Oz Sut',
    type: 'Restaurant',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
  },
  {
    id: 8,
    title: 'Coffee House',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
  {
    id: 9,
    title: 'Taco Bell',
    type: 'Restaurant',
    marked: true,
    rating: { average: 4.5, count: 2759 },
    image: '/images/vapiano.jpg',
    tags: ['Bakı', 'Binəqədi R.', '7-ci mikrorayon'],
  },
  {
    id: 10,
    title: 'Coffee Go',
    type: 'Coffee',
    marked: false,
    rating: { average: 4.1, count: 259 },
    image: '/images/starbucks.jpg',
    tags: ['Coffee', 'Tea', 'Cakes'],
  },
];

export const categories = [
  {
    id: 1,
    title: 'Restaurant',
    slug: '/',
    icon: 'food',
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Travel',
    slug: '/travel',
    icon: 'travel',
    isAvailable: false,
  },
  {
    id: 3,
    title: 'Shopping',
    slug: 'shopping',
    icon: 'shop',
    isAvailable: false,
  },
  {
    id: 4,
    title: 'Home Service',
    slug: 'home-service',
    icon: 'home',
    isAvailable: false,
  },
  {
    id: 5,
    title: 'Auto Service',
    slug: 'auto-service',
    icon: 'car',
    isAvailable: false,
  },
  {
    id: 6,
    title: 'Fitness',
    slug: 'fitness',
    icon: 'ball',
    isAvailable: false,
  },
  {
    id: 7,
    title: 'Education',
    slug: 'education',
    icon: 'book',
    isAvailable: false,
  },
  {
    id: 8,
    title: 'Health',
    slug: 'health',
    icon: 'health',
    isAvailable: false,
  },
  {
    id: 9,
    title: 'Personal Care',
    slug: 'personal-care',
    icon: 'care',
    isAvailable: false,
  },
  {
    id: 10,
    title: 'Pets',
    slug: 'pets',
    icon: 'pet',
    isAvailable: false,
  },
];

export const tags = [
  { id: 1, title: 'all', icon: 'all' },
  { id: 2, title: 'breakfast', icon: 'egg' },
  { id: 3, title: 'pizza', icon: 'pizza' },
  { id: 6, title: 'burger', icon: 'burger' },
  { id: 7, title: 'steak', icon: 'steak' },
];

export const reviews = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'John Doe',
      image: '/images/user.jpg',
    },
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
    date: '2020-01-01',
    claps: 10,
    details: {
      itemType: 'Restaurant',
      id: 1,
      title: 'Vapiano',
      image: '/images/vapiano.jpg',
      type: 'Italian',
      tags: ['Italian', 'Pizza', 'Pasta'],
      rating: {
        average: 4,
        count: 10,
      },
    },
  },
  {
    id: 2,
    user: {
      id: 1,
      name: 'John Doe',
      image: '',
    },
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
    date: '2020-01-01',
    claps: 5,
    details: {
      itemType: 'Shopping',
      id: 2,
      title: 'Starbucks',
      image: '/images/starbucks.jpg',
      type: 'Coffee',
      tags: ['Coffee', 'Cafe'],
      rating: {
        average: 3,
        count: 102,
      },
    },
  },
];
