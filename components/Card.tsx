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
    <Link
      href={`/restaurants/${id}`}
      className={`relative mb-10 flex flex-col ${className ?? ''}`}
    >
      {sponsored && (
        <Badge
          className="absolute top-3 left-3 mb-3 rounded-lg px-2 py-0"
          text="Sponsored"
          color="gray"
          type="full"
        />
      )}

      {gallery ? (
        <div className="mb-3 h-[256px] w-[285px] overflow-hidden rounded-lg">
          <ImageSlider countType="dots" images={gallery} />
        </div>
      ) : (
        <Image
          className="mb-3 rounded-lg"
          width={285}
          height={256}
          src={image}
          alt={title}
          priority={false}
        />
      )}

      <div className="mb-4 flex items-center justify-between">
        <div className="flex">
          <i className="icon icon-star mr-2 flex text-xl" />
          <span className="mr-2">{rating.average}</span>
          <span>({rating.count.toLocaleString()})</span>
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
      <span className="text-base font-medium leading-2 text-gray-dark3">
        {title}
      </span>
      <span className="mb-3 text-base font-normal leading-2 text-gray-dark3">
        {type}
      </span>

      <div className="flex">
        {tags.map((tag) => (
          <Tag key={tag} title={tag} className="mr-1" />
        ))}
      </div>
    </Link>
  );
};

export default Card;
