import Image from 'next/image';
import React, { SyntheticEvent, useState } from 'react';

interface ImageSliderProps {
  images: string[];
  countType: 'numbers' | 'dots';
  buttonGap?: number;
}

const ImageSlider = ({
  images,
  countType,
  buttonGap = 8,
}: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }

    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    }

    if (currentImage < 0) {
      setCurrentImage(images.length - 1);
    }
  };

  const handlePrev = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }

    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    }

    if (currentImage < 0) {
      setCurrentImage(images.length - 1);
    }

    if (currentImage > images.length - 1) {
      setCurrentImage(0);
    }
  };

  const getDotContainer = () => {
    return (
      <div className="absolute bottom-2 z-10 flex w-full justify-center gap-2 text-base font-semibold leading-3 text-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-2 w-2 cursor-pointer rounded-full bg-white ${
              index === currentImage ? 'bg-opacity-100' : 'bg-opacity-40'
            }`}
            onClick={(e) => handleDotClick(e, index)}
          />
        ))}
      </div>
    );
  };

  const handleDotClick = (e: SyntheticEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();

    setCurrentImage(index);
  };

  const getCountType = () => {
    if (countType === 'numbers') {
      return (
        <div className="absolute bottom-2 z-10 flex w-full justify-center gap-2 text-base font-semibold leading-3 text-white">
          <span>{currentImage + 1}</span>
          <span>/</span>
          <span>{images.length}</span>
        </div>
      );
    } else if (countType === 'dots') {
      return getDotContainer();
    }
  };

  return (
    <div className="relative h-full w-full">
      <button
        className={`absolute left-[calc(8%-20px)] top-[calc(50%-20px)] z-10 flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-white bg-opacity-80`}
        onClick={handlePrev}
      >
        <i className="icon icon-arrow flex justify-center" />
      </button>
      <Image src={images[currentImage]} alt="restaurant" fill={true} />

      {getCountType()}

      <button
        className={`absolute right-[calc(8%-20px)] top-[calc(50%-20px)] z-10 flex h-10 w-10 -rotate-90 items-center justify-center rounded-full bg-white bg-opacity-80`}
        onClick={handleNext}
      >
        <i className="icon icon-arrow flex justify-center" />
      </button>
    </div>
  );
};

export default ImageSlider;
