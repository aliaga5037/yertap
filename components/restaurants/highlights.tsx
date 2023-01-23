import React from 'react';

const Highlights = ({ items }) => {
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
                <span
                  className="text-base font-medium leading-3 text-gray-dark2"
                  key={item.title}
                >
                  {item.title}
                </span>
              )
          )}
        </div>
        <div className="flex flex-col">
          {items.map(
            (item, i) =>
              i % 2 !== 0 && (
                <span
                  className="text-base font-medium leading-3 text-gray-dark2"
                  key={item.title}
                >
                  {item.title}
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
