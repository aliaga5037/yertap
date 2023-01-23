import React from 'react';
import Image from 'next/image';
import SoonIcon from 'Icons/soon.svg';

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
          className={`flex w-[260px] cursor-pointer flex-row 
          items-center rounded-lg px-4 py-3 text-sm font-medium leading-2 
          text-gray-base hover:bg-purple-light1 hover:text-purple-dark1`}
        >
          <Image
            width={24}
            height={24}
            src={category.icon}
            alt={category.title}
            className="mr-4"
          />
          <span>{category.title}</span>

          {!category.isAvailable && <SoonIcon alt="soon" className="ml-auto" />}
        </div>
      ))}
    </div>
  );
};

export default Categories;
