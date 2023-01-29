import React from 'react';
import Badge from './Badge';

interface Category {
  id: number;
  title: string;
  slug: string;
  icon: string;
  isAvailable: boolean;
}

type CategoriesProps = {
  categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="w-auto">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`flex w-full cursor-pointer flex-row 
          items-center rounded-lg px-4 py-3 text-sm font-medium leading-2 
          text-gray-base hover:bg-purple-light1 hover:text-purple-dark1`}
        >
          <i className={`icon icon-${category.icon} text-2xl mr-4 flex`} />
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
