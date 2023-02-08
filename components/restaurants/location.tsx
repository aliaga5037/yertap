import Image from 'next/image';
import React from 'react';

const Location = () => {
  return (
    <div className="flex grow flex-col">
      <h1 className="mb-8 text-2xl font-normal leading-5 text-black">
        You can find us here 👋
      </h1>

      <div className="relative flex">
        <div className="h-[496px] w-[793px]">
          <Image src="/images/map.jpg" alt="map" fill />
        </div>
      </div>
    </div>
  );
};

export default Location;
