import React, { useState } from 'react';
import Image from 'next/image';

const Slider = ({ images, start, onClose }) => {
  const [current, setCurrent] = useState(start);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-popup">
      <i
        className="icon icon-arrow flex rotate-90 cursor-pointer text-2xl text-white"
        onClick={prevSlide}
      />
      <div className="mx-[205px] h-[560px] w-[639px]">
        <div className="flex justify-between rounded-t-lg bg-white px-6 py-[18px] text-base font-semibold leading-2 text-gray-base">
          <span>
            {current + 1} / {images.length}
          </span>
          <span
            className="flex cursor-pointer items-center text-base font-medium leading-2 text-gray-dark1"
            onClick={onClose}
          >
            <i className="icon icon-close mr-2 flex text-xs" /> Close
          </span>
        </div>

        <div className="slider__wrapper">
          {images.map((image, index) => (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <Image
                  width={100}
                  height={100}
                  src={image}
                  alt="restaurant"
                  className="h-[504px] w-full rounded-b-lg object-fill"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <i
        className="icon icon-arrow flex -rotate-90 cursor-pointer text-2xl text-white"
        onClick={nextSlide}
      />
    </section>
  );
};

export default Slider;
