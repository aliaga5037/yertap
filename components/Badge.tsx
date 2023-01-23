import React from 'react';

export interface BadgeProps {
  text: string;
  className?: string;
  color?: 'primary' | 'yellow' | 'green' | 'gray' | 'orange' | 'blue' | 'pink';
  type?: 'full' | 'border';
}

const variants = {
  primary: {
    full: 'bg-purple-light1 text-purple-dark1',
    border: 'border-purple-base text-purple-base',
  },
  yellow: {
    full: 'bg-yellow-100 text-yellow-500',
    border: 'border-yellow-400 text-yellow-400',
  },
  green: {
    full: 'bg-green-100 text-green-500',
    border: 'border-green-400 text-green-400',
  },
  gray: {
    full: 'bg-gray-light1 text-gray-dark1',
    border: 'border-gray-base text-gray-base',
  },
  orange: {
    full: 'bg-orange-100 text-orange-500',
    border: 'border-orange-400 text-orange-400',
  },
  blue: {
    full: 'bg-blue-100 text-blue-500',
    border: 'border-blue-400 text-blue-400',
  },
  pink: {
    full: 'bg-pink-100 text-pink-500',
    border: 'border-pink-400 text-pink-400',
  },
};

const Badge = ({ text, color, type, className }: BadgeProps) => {
  return (
    <div
      className={`rounded-[4px] px-2 py-1 text-xs font-normal leading-1 ${variants[color][type]} ${className}`}
    >
      {text}
    </div>
  );
};

export default Badge;
