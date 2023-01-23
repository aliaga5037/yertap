import Image from 'next/image';
import React from 'react';
import Tag from './Tag';

import StarIcon from 'Icons/star.svg';
import ShareIcon from 'Icons/share.svg';
import BookmarkIcon from 'Icons/bookmark';
import Link from 'next/link';

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
}: CardProps) => {
  return (
    <Link
      href={`/restaurants/${id}`}
      className={`mb-10 flex flex-col ${className ?? ''}`}
    >
      <Image
        className="mb-3 rounded-lg"
        width={285}
        height={256}
        src={image}
        alt={title}
        priority={false}
      />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex">
          <StarIcon className="mr-2" />
          <span className="mr-2">{rating.average}</span>
          <span>({rating.count.toLocaleString()})</span>
        </div>
        <div className="flex items-center">
          <ShareIcon className="mr-4 cursor-pointer" />
          <BookmarkIcon
            className="cursor-pointer"
            fill={`${marked ? 'black' : 'transparent'}`}
            strokeColor="black"
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
