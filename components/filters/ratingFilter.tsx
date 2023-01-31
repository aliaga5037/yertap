import Checkbox from '@components/Checkbox';
import React from 'react';

const RatingFilter = () => {
  return (
    <div>
      <h3 className="-ml-6 mb-4 flex items-center text-base font-medium leading-[16px] tracking-[0.6px] text-gray-dark3 ">
        <i className="icon icon-crown mr-3 flex" />
        Rating
      </h3>

      <div className="flex flex-col">
        <div className="mb-5 flex items-center">
          <div className="mr-3.5">
            <Checkbox>
              <i className="icon icon-star mr-1.5 flex"></i>
              <i className="icon icon-star mr-1.5 flex"></i>
              <i className="icon icon-star mr-1.5 flex"></i>
              <i className="icon icon-star mr-1.5 flex"></i>
              <i className="icon icon-star mr-1.5 flex text-gray-light3"></i>
            </Checkbox>
          </div>
        </div>
        <div className="flex items-center">
          <Checkbox>
            <i className="icon icon-star mr-1.5 flex"></i>
            <i className="icon icon-star mr-1.5 flex"></i>
            <i className="icon icon-star mr-1.5 flex"></i>
            <i className="icon icon-star mr-1.5 flex text-gray-light3"></i>
            <i className="icon icon-star mr-1.5 flex text-gray-light3"></i>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;
