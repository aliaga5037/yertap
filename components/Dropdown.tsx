import React, { useEffect, useState, useId } from 'react';

interface DropDownProps {
  title: string | JSX.Element;
  className?: string;
  btnClass?: string;
  fullWidth?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const Dropdown = ({
  title,
  className,
  btnClass,
  children,
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
  }, [id]);

  return (
    <div className={`relative ${className}`} id={id}>
      <button
        className={`flex w-full flex-row items-center 
        justify-between rounded-lg bg-gray-light1 px-4 
        py-2.5 text-sm font-medium text-gray-dark3 hover:bg-gray-50 ${btnClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{title}</span>
        <i
          className={`icon icon-arrow flex text-[8px] transition-all delay-150 ease-linear ${
            isOpen ? '' : '-rotate-90'
          }`}
        />
      </button>
      <div
        className={`absolute z-20 w-full scale-y-0 transition-all delay-150 ease-in-out ${
          isOpen && 'origin-top scale-y-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
