import { useState } from 'react';
import Dropdown from './Dropdown';

import FilterIcon from 'Icons/filter.svg';
import PinIcon from 'Icons/pin.svg';
import ArrowIcon from 'Icons/arrow';
import CloseIcon from 'Icons/close.svg';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className={`flex cursor-pointer items-center
      rounded-lg bg-gray-light1 
      py-[13px] px-[14px] text-base font-medium
      leading-[18px] text-gray-dark3`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilterIcon className="mr-1.5" />
        Filter
      </div>
      {isOpen && (
        <div className="absolute top-[50px] right-0 z-10 flex w-[377px] flex-col rounded-lg border border-gray-light3 bg-white">
          <div className="px-6 py-3 text-base font-semibold leading-2 text-gray-base">
            Filter
          </div>

          <div className="flex flex-col border-y border-gray-light3 py-9 px-[60px]">
            <div>
              <span className="-ml-6 mb-4 flex items-center text-base font-medium leading-[16px] tracking-[0.6px] text-gray-dark3 ">
                <PinIcon className="mr-3" /> Location
              </span>

              <div className="mb-2 text-xs font-medium leading-1 tracking-[0.2px] text-gray-base">
                City
              </div>
              <Dropdown title={
                <></>
              } fullWidth className="mr-1" />
            </div>
          </div>

          <div className="flex justify-end p-6">
            <button className="flex items-center text-sm font-medium leading-1 tracking-wide text-gray-dark3">
              <CloseIcon className="mr-1.5" /> Clear
            </button>
            <button className="ml-6 flex items-center justify-center rounded-lg bg-gray-light1 px-3 py-2 text-sm font-medium leading-1 tracking-[0.4px] text-gray-dark3">
              Show 234 Results <ArrowIcon className="ml-2 -rotate-90" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
