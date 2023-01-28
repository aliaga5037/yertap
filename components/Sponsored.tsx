import React from 'react';
import Card from '@components/Card';

const Sponsored = () => {
  return (
    <div className="ml-auto flex flex-col pt-8">
      <Card
        id={1}
        title="Burger King"
        type="Fast Food"
        image="/images/starbucks.jpg"
        rating={{
          average: 4.5,
          count: 340,
        }}
        tags={['baku', '7ci mkr']}
        marked={false}
        className="w-[269px]"
        sponsored
      />
      <Card
        id={2}
        title="Burger King"
        type="Fast Food"
        image="/images/vapiano.jpg"
        rating={{
          average: 4.5,
          count: 340,
        }}
        tags={['Baki', 'bineqedi', '7ci mkr']}
        marked={false}
        className="w-[269px]"
        sponsored
      />
    </div>
  );
};

export default Sponsored;
