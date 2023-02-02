import { useEffect, useState } from 'react';
import FoodTypeFilter from './filters/foodTypeFilter';
import LocationFilter from './filters/locationFilter';
// import PriceFilter from './filters/priceFilter';
import RatingFilter from './filters/ratingFilter';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.filter')) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative filter">
      <div
        className={`flex cursor-pointer items-center
      rounded-lg bg-gray-light1 
      py-[13px] px-[14px] text-base font-medium
      leading-[18px] text-gray-dark3`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="icon icon-filter mr-1.5 flex" />
        Filter
      </div>
      {isOpen && (
        <div className="absolute top-[50px] right-0 z-10 flex w-[377px] flex-col rounded-lg border border-gray-light3 bg-white">
          <div className="block px-6 py-3 text-base font-semibold leading-2 text-gray-base">
            Filter
          </div>

          <div className="flex flex-col border-y border-gray-light3 py-9 px-[60px]">
            <LocationFilter />
            {/* <span className="mb-8"></span>
            <PriceFilter /> */}
            <span className="mb-8"></span>
            <RatingFilter />
            <span className="mb-8"></span>
            <FoodTypeFilter />
          </div>

          <div className="flex justify-end p-6">
            <button className="flex items-center text-sm font-medium leading-1 tracking-wide text-gray-dark3">
              <i className="icon icon-close mr-1.5 flex" /> Clear
            </button>
            <button className="ml-6 flex items-center justify-center rounded-lg bg-gray-light1 px-3 py-2 text-sm font-medium leading-1 tracking-[0.4px] text-gray-dark3">
              Show 234 Results{' '}
              <i className="icon icon-arrow ml-2 flex -rotate-90 text-[8px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
