import Image from 'next/image';
import React from 'react';
import ImageSlider from './ImageSlider';
import Tag from './Tag';

import Link from 'next/link';
import Badge from './Badge';

interface CardProps {
  title: string;
  type: string;
  rating: {
    average: number;
    count: number;
  };
  tags: string[];
  marked: boolean;
  image: string;
  className?: string;
  id: number;
  sponsored?: boolean;
  gallery?: string[];
}

const Card = ({
  title,
  type,
  rating,
  tags,
  marked,
  image,
  className,
  id,
  sponsored,
  gallery,
}: CardProps) => {
  return (
    <div className={`relative mb-10 flex flex-col  ${className ?? ''}`}>
      {sponsored && (
        <Badge
          className="absolute top-3 left-3 z-10 mb-3 rounded-lg px-2 py-0"
          text="Sponsored"
          color="gray"
          type="full"
        />
      )}

      <Link href={`/restaurants/${id}`} className={`relative flex flex-col mb-3`}>
        <div className="h-[256px] w-full overflow-hidden rounded-lg">
          {gallery ? (
            <ImageSlider countType="dots" images={gallery} />
          ) : (
            <Image fill src={image} alt={title} priority={false} />
          )}
        </div>
      </Link>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <i className="icon icon-star mr-2 flex text-xl" />
          <span className="mr-2 text-sm font-medium leading-1 text-gray-dark3">
            {rating.average}
          </span>
          <span className="text-sm font-normal leading-1 text-gray-dark3">
            ({rating.count.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center">
          <i className="icon icon-share mr-4 flex cursor-pointer text-2xl" />
          <i
            className={`icon icon-bookmark${
              marked ? '-marked' : ''
            } flex cursor-pointer text-2xl`}
          />
        </div>
      </div>
      <Link href={`/restaurants/${id}`} className="flex flex-col">
        <span className="text-base font-medium leading-2 text-gray-dark3">
          {title}
        </span>
        <span className="mb-3 text-base font-normal leading-2 text-gray-dark3">
          {type}
        </span>
      </Link>

      <div className="flex">
        {tags.map((tag) => (
          <Tag key={tag} title={tag} className="mr-1" />
        ))}
      </div>
    </div>
  );
};

export default Card;
