// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
  image: string;
};

export type Review = {
  average: number;
  count: number;
  stars: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  items: {
    id: number;
    user: User;
    rating: number;
    text: string;
    date: string;
    claps: number;
  }[];
};

export type Highlight = {
  title: string;
  icon: string;
};

export type Restaurant = {
  id: number;
  title: string;
  type: string;
  marked: boolean;
  rating: {
    average: number;
    count: number;
  };
  image: string;
  tags: string[];
  gallery?: string[];
  menu?: {
    foodTypes: {
      id: number;
      title: string;
      icon: string;
      items: {
        title: string;
        price: string;
        description: string;
        image: string;
      }[];
    }[];
    type: string;
  }[];
  highlights?: Highlight[];
  review?: Review;
};
