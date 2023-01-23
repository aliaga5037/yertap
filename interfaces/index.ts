// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
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
    title: string;
    items: {
      title: string;
      price: string;
      description: string;
      image: string;
    }[];
    type: string;
  }[];
  highlights?: {
    title: string;
    icon: string;
  }[];
};
