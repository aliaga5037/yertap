import React from 'react';
import Badge from './Badge';

interface Category {
  id: number;
  title: string;
  slug: string;
  icon: string;
  isAvailable: boolean;
}

interface CategoriesProps {
  categories: Category[];
  activeUrl: string;
}

const Categories = ({ categories, activeUrl }: CategoriesProps) => {
  const activeClass = 'text-purple-dark1 bg-purple-light1';
  return (
    <div className="w-auto">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`grid w-full  cursor-pointer grid-cols-[1fr_3fr_1fr]
          items-center rounded-lg px-4 py-3 text-sm font-medium leading-2 
          text-gray-base hover:bg-purple-light1 hover:text-purple-dark1 ${
            activeUrl === `${category.slug}` && activeClass
          }`}
        >
          <i className={`icon icon-${category.icon} mr-4 flex text-2xl`} />
          <span>{category.title}</span>

          {!category.isAvailable && (
            <Badge className="ml-auto !py-0" text="Soon" type="border" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
