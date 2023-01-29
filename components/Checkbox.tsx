import React, { useId } from 'react';

interface CheckboxProps {
  id?: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
}

const Checkbox: React.FC<CheckboxProps> = ({ id, children }) => {
  const uuid = useId();
  return (
    <label
      className="relative flex cursor-pointer items-center"
      htmlFor={id || uuid}
    >
      <input className="peer hidden" id={id || uuid} type="checkbox" />
      <div className="mr-3.5 h-4 w-4  border-[2px] border-gray-light3 hover:bg-gray-light0 peer-checked:border-purple-base"></div>
      <i className="icon icon-check absolute top-[3px] left-[3px] hidden text-[8px] text-purple-base peer-checked:!visible peer-checked:!block" />
      {children}
    </label>
  );
};

export default Checkbox;
