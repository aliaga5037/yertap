import React, { SyntheticEvent, useState } from 'react';
import Dropdown from '../Dropdown';
import Tag from '../Tag';

const LocationFilter = () => {
  const [city, setCity] = useState('Baku');
  const [district, setDistrict] = useState(['Binəqədi Rayonu']);

  const handleDistrictChange = (value: string) => {
    setDistrict((prevValue) => {
      if (prevValue.includes(value)) {
        return prevValue;
      }
      return [...prevValue, value];
    });
  };

  const handleDistrictRemove = (e: SyntheticEvent, value: string) => {
    e.stopPropagation();
    setDistrict((prevValue) => {
      return prevValue.filter((item) => item !== value);
    });
  };
  return (
    <div>
      <span className="-ml-6 mb-4 flex items-center text-base font-medium leading-[16px] tracking-[0.6px] text-gray-dark3 ">
        <i className="icon icon-pin mr-3 flex" /> Location
      </span>

      <div className="mb-4">
        <div className="mb-2 text-xs font-medium leading-1 tracking-[0.2px] text-gray-base">
          City
        </div>
        <Dropdown title={city} className="mr-1 w-full">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-light3 bg-white">
            <span
              onClick={() => setCity('Baku')}
              className="cursor-pointer py-2 px-6 text-sm font-medium leading-2 text-gray-base hover:bg-gray-light1"
            >
              Baku
            </span>
            <span
              onClick={() => setCity('Ganja')}
              className=" cursor-pointer px-6 py-2 text-sm font-medium leading-2 text-gray-base hover:bg-gray-light1"
            >
              Ganja
            </span>
          </div>
        </Dropdown>
      </div>

      <>
        <div className="mb-2 text-xs font-medium leading-1 tracking-[0.2px] text-gray-base">
          District
        </div>
        <Dropdown
          title={district[0] || 'Select District'}
          className="mr-1 mb-4 w-full"
        >
          <div className="flex flex-col gap-2 rounded-lg border border-gray-light3 bg-white">
            <span
              onClick={() => handleDistrictChange('Binəqədi Rayonu')}
              className="cursor-pointer py-2 px-6 text-sm font-medium leading-2 text-gray-base hover:bg-gray-light1"
            >
              Binəqədi Rayonu
            </span>
            <span
              onClick={() => handleDistrictChange('Xocasen')}
              className=" cursor-pointer px-6 py-2 text-sm font-medium leading-2 text-gray-base hover:bg-gray-light1"
            >
              Xocasen
            </span>
          </div>
        </Dropdown>

        <div className="mt-2 flex flex-wrap gap-2">
          {district.map((item, index) => (
            <Tag
              onRemove={(e) => {
                handleDistrictRemove(e, item);
              }}
              title={item}
              key={index}
              className="mr-1"
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default LocationFilter;
