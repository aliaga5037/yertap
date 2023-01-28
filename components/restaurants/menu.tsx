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
          <span className="text-base font-medium leading-3 text-gray-dark2">
            National
          </span>
          <span className="text-base font-medium leading-3 text-gray-dark2">
            European
          </span>
          <span className="text-base font-medium leading-3 text-gray-dark2">
            Asian
          </span>
          <span className="text-base font-medium leading-3 text-gray-dark2">
            Mexican
          </span>
        </div>

        <div className="flex flex-col">
          <span className="mb-4 text-xl font-bold leading-3 text-gray-dark2">
            Food Type:
          </span>
          <span className="text-base font-medium leading-3 text-gray-dark2">
            Breakfast
          </span>
          <span className="text-base font-medium leading-3 text-gray-dark2">
            Lunch
          </span>
          <span className="text-base font-medium leading-3 text-gray-dark2">
            Diner
          </span>
          <span className="text-base font-medium leading-3 text-gray-light4">
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
