import React from 'react';
import type { Highlight } from 'types';

interface HighlightProps {
  items: Highlight[];
}

const Highlights: React.FC<HighlightProps> = ({ items }) => {
  return (
    <div>
      <h1 className="mb-9 text-2xl font-normal leading-5 text-black">
        What does this place offer you 🤙
      </h1>

      <div className="flex justify-between">
        <div className="flex flex-col">
          {items.map(
            (item, i) =>
              i % 2 === 0 && (
                <div key={item.title} className="mb-2 flex">
                  <i className={`icon icon-${item.icon} mr-4 text-xl`} />
                  <span className="text-base font-medium leading-3 text-gray-dark2">
                    {item.title}
                  </span>
                </div>
              )
          )}
        </div>
        <div className="flex flex-col">
          {items.map(
            (item, i) =>
              i % 2 !== 0 && (
                <div key={item.title} className="mb-2 flex">
                  <i className={`icon icon-${item.icon} mr-4 text-xl`} />
                  <span className="text-base font-medium leading-3 text-gray-dark2">
                    {item.title}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
