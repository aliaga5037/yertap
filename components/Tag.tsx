import React, { SyntheticEvent } from 'react';

interface TagProps {
  title: string;
  onRemove?: (e: SyntheticEvent) => void;
  className?: string;
}

const Tag = ({ title, onRemove, className = '' }: TagProps) => {
  return (
    <span
      className={`flex items-center rounded-[4px] bg-purple-light2 px-1 py-1 text-xs font-normal capitalize leading-1 text-purple-dark1 ${className}`}
    >
      {title}{' '}
      {onRemove ? (
        <i
          className="icon icon-close ml-1 rounded-sm flex cursor-pointer p-1 text-[8px] text-purple-base hover:bg-purple-dark1 hover:text-white"
          onClick={onRemove}
        />
      ) : (
        ''
      )}
    </span>
  );
};

export default Tag;
