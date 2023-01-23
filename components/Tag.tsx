import React from 'react';
import XIcon from '@assets/icons/x';

interface TagProps {
  title: string;
  onRemove?: () => void;
  className?: string;
}

const Tag = ({ title, onRemove, className = '' }: TagProps) => {
  return (
    <span
      className={`flex items-center rounded-[4px] bg-purple-light2 px-1 py-0.5 text-xs font-normal capitalize leading-1 text-purple-dark1 ${className}`}
    >
      {title}{' '}
      {onRemove ? (
        <XIcon
          className="ml-1 cursor-pointer hover:bg-purple-dark1"
          onClick={onRemove}
        />
      ) : (
        ''
      )}
    </span>
  );
};

export default Tag;
