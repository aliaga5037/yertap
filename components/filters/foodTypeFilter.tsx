import React from 'react';
import Radio from '@components/Radio';

const FoodTypeFilter = () => {
  return (
    <div className="flex flex-col">
      <h3 className="-ml-6 mb-4 flex items-center text-base font-medium leading-[16px] tracking-[0.6px] text-gray-dark3 ">
        <i className="icon icon-fork_spoon mr-3 flex" /> Food Type
      </h3>
      <div className="mt-2 flex flex-col">
        <Radio name="food-type" label="Breakfast" />
        <Radio name="food-type" label="Lunch" />
        <Radio name="food-type" label="Business Lunch" />
        <Radio name="food-type" label="Dinner" />
      </div>
    </div>
  );
};

export default FoodTypeFilter;
