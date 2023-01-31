import React, { useId } from 'react';

interface RadioProps {
  id?: string;
  name: string;
  children?: React.ReactNode;
  className?: string;
  label?: string;
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  children,
  className,
  label,
  disabled,
}) => {
  const uuid = useId();
  return (
    <label
      htmlFor={id || uuid}
      className={`${className} group mb-2 flex cursor-pointer items-center`}
    >
      <input
        disabled={disabled}
        className="peer hidden"
        name={name}
        type="radio"
        id={id || uuid}
      />
      <span
        className={`mr-3.5 flex h-3 w-3 items-center 
        justify-center  rounded-full text-sm ring-2 ring-gray-light4 
        ring-offset-2
       group-hover:bg-gray-light1 group-hover:ring-offset-gray-light1 peer-checked:bg-purple-base  peer-checked:ring-2 
       peer-checked:ring-purple-base peer-checked:ring-offset-2 peer-checked:ring-offset-white group-hover:peer-checked:bg-purple-base
       peer-disabled:bg-gray-light2  peer-disabled:ring-gray-light2 peer-disabled:ring-offset-gray-light2`}
      ></span>
      {label && (
        <span className="text-sm font-normal leading-2 text-gray-dark3">
          {label}
        </span>
      )}
      {children}
    </label>
  );
};

export default Radio;
