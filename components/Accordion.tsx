import React, { useState } from 'react';

const Accordion = ({ title, items }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex  cursor-pointer rounded-lg border border-gray-light3 ${
          expanded ? 'bg-gray-dark2' : 'bg-gray-light1'
        } py-3 px-4`}
        onClick={toggleExpand}
      >
        <span
          className={`text-base font-medium leading-3 ${
            expanded ? 'text-gray-light0' : 'text-gray-dark3'
          }`}
        >
          {title}
        </span>
      </div>
      {expanded && (
        <div className="flex flex-col">
          {items.map((item) => (
            <div className="my-2 flex h-[80px] overflow-hidden rounded-lg border border-gray-light3 bg-white">
              <img src={item.image} className="mr-3 h-full w-[88px]" alt="" />
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
      )}
    </div>
  );
};

export default Accordion;
