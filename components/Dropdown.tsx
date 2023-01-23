import React, { useEffect, useState, useId } from 'react';
import ArrowIcon from 'Icons/arrow';

interface DropDownProps {
  title: string | JSX.Element;
  className?: string;
  btnClass?: string;
  fullWidth?: boolean;
}

export const Dropdown = ({
  title,
  className,
  btnClass,
  fullWidth,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  useEffect(() => {
    const closeDropdown = () => {
      if (
        !document.getElementById(id)?.contains(document.activeElement as Node)
      )
        setIsOpen(false);
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className={`relative ${className}`} id={id}>
      <button
        className={`flex flex-row items-center justify-between 
        rounded-lg bg-gray-light1 px-4 py-2.5 
        text-sm font-medium text-gray-dark3 hover:bg-gray-50 ${
          fullWidth ? 'w-full' : ''
        } ${btnClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{title}</span>
        <ArrowIcon alt="arrow" className={`${isOpen ? '' : '-rotate-90'}`} />
      </button>
      {isOpen && (
        <div
          className={`absolute top-10 overflow-hidden right-0 z-10 mt-2 rounded-md bg-white shadow-xl ${
            fullWidth ? 'w-full' : 'w-32'
          }`}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
          >
            English
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
          >
            Russian
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
