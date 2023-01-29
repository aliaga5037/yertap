import Image from 'next/image';
import React, { useState } from 'react';

const Accordion = ({ title, items, className, icon }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`flex  cursor-pointer rounded-lg border border-gray-light3 ${
          expanded ? 'bg-gray-dark2' : 'bg-gray-light1'
        } py-3 px-4`}
        onClick={toggleExpand}
      >
        <span
          className={`flex w-full items-center text-base font-medium leading-3 ${
            expanded ? 'text-gray-light0' : 'text-gray-dark3'
          }`}
        >
          <i className={`icon icon-${icon} mr-4 flex text-inherit`} />

          {title}
          <i
            className={`icon icon-arrow ml-auto flex text-[8px] text-inherit ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </span>
      </div>

      <div
        className={`flex flex-col ${
          expanded ? 'opacity-1 h-auto' : 'h-0 opacity-0'
        }`}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="my-2 flex h-[80px] overflow-hidden rounded-lg border border-gray-light3 bg-white"
          >
            <Image
              src={item.image}
              width={88}
              height={80}
              className="mr-3 h-full w-[88px]"
              alt={item.title}
            />
            <div className="flex flex-col pt-2.5">
              <span className="mb-1.5 text-base font-medium leading-3 text-gray-dark3">
                {item.title}
              </span>
              <span className="max-w-[396px] text-xs font-normal leading-[14px] text-gray-base">
                {item.description}
              </span>
            </div>
            <div className="ml-auto pt-2.5 pr-3">
              <span className="text-base font-medium leading-3 text-gray-dark3">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
