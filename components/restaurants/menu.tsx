import React from 'react';
import Accordion from '@components/Accordion';

const Menu = ({ menuItems }) => {
  return (
    <div>
      <h1 className="mb-9 text-2xl font-normal leading-5 text-black">
        What kind of food and drink does this place offer you:
      </h1>
      <div className="mb-12 flex justify-between">
        <div className="flex flex-col">
          <span className="mb-4 text-xl font-bold leading-3 text-gray-dark2">
            Cuisines:
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-plate mr-3 flex text-lg" />
            National
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-plate mr-3 flex text-lg" />
            European
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-plate mr-3 flex text-lg" />
            Asian
          </span>

          <span className="flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-plate mr-3 flex text-lg" />
            Mexican
          </span>
        </div>

        <div className="flex flex-col">
          <span className="mb-4 text-xl font-bold leading-3 text-gray-dark2">
            Food Type:
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-egg mr-3 flex text-xl" />
            Breakfast
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-food mr-3 flex text-xl" />
            Lunch
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <i className="icon icon-plate mr-3 flex text-lg" />
            Diner
          </span>
          <span className="mb-4 flex items-center text-base font-medium leading-3 text-gray-light4">
            <i className="icon icon-food mr-3 flex text-xl" />
            Business Lunch
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          {menuItems.map((menu) => (
            <>
              <span className="mb-4 text-2xl font-normal leading-5 text-black">
                {menu.type}
              </span>
              {menu.foodTypes.map((foodType) => (
                <Accordion
                  key={foodType.id}
                  title={foodType.title}
                  icon={foodType.icon}
                  items={foodType.items}
                  className="mb-2"
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
