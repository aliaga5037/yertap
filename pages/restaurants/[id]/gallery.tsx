import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '@components/Layout';
import Slider from '@components/Slider';
import { sampleRestaurantData } from '@utils/sample-data';

import Link from 'next/link';
import Image from 'next/image';

const Gallery = ({ item }) => {
  const [showSlider, setShowSlider] = useState<boolean>(false);
  const [sliderImage, setSliderImage] = useState<number | null>(null);

  const handleShowSlider = (image: number) => {
    setShowSlider(true);
    setSliderImage(image);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
    setSliderImage(null);
  };

  return (
    <Layout title="Gallery" hideSidebar>
      <div>
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium leading-2 text-gray-base"
          >
            Restaurants
          </Link>
          <i className="icon icon-arrow flex -rotate-90 text-[8px] text-gray-light6 " />
          <Link
            href={`/restaurants/${item.id}`}
            className="text-sm font-medium leading-2 text-gray-light6 underline"
          >
            {item.title}
          </Link>
          <i className="icon icon-arrow flex -rotate-90 text-[8px] text-gray-light6 " />
          <a
            href="#"
            className="text-sm font-medium leading-2 text-gray-light6"
          >
            Gallery
          </a>
        </div>
        <p className="mb-10 text-2xl font-normal leading-5 text-black">
          You can see all the ({item.gallery.length}) photos of this place
          below.
        </p>
        <div className="grid grid-cols-4 gap-5">
          {item.gallery.map((image, i) => (
            <div
              className="cursor-pointer"
              onClick={() => handleShowSlider(i)}
              key={image}
            >
              <Image
                width={285}
                height={240}
                className="h-[240px] w-[285px] object-cover"
                src={image}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>

      {showSlider && (
        <Slider
          images={item.gallery}
          start={sliderImage}
          onClose={handleCloseSlider}
        />
      )}
    </Layout>
  );
};

export default Gallery;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  //   );
  //   const item = await res.json();
  const item = sampleRestaurantData.find(
    (data) => data.id === Number(context.params.id)
  );

  return {
    props: {
      item,
    },
  };
};
