import TextContainer from '@components/TextContainer';
import React from 'react';

const About = () => {
  return (
    <>
      <p className="mb-9 text-2xl font-normal leading-5 text-black">
        What you need to know about this place:
      </p>
      <div className="mb-9 flex justify-between">
        <div className="flex flex-col">
          <span className="mb-4 text-xl font-bold leading-4 text-black">
            Contact:
          </span>
          <span className="flex items-center text-base font-medium leading-3 text-black mb-3">
            <i className="icon icon-more mr-3 flex text-xl" />
            vapiano.com
          </span>
          <span className="flex items-center text-base font-medium leading-3 text-black">
            <i className="icon icon-more mr-3 flex text-xl" />
            support@vapiano.com
          </span>
        </div>
        <div className="flex flex-col">
          <span className="mb-4 text-xl font-bold leading-4 text-black">
            Times:
          </span>
          <span className="text-base font-medium leading-3 text-black">
            Weekends: 08:00 am - 00:00 am
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="mb-5 text-xl font-bold leading-6 text-black">
          About This Place:
        </h1>
        <TextContainer
          limit={100}
          text="Very lovely place with diverse number of dishes, also has a dietician
          versions of different desserts and main dishes. I come to different
          branches of VAPIANO quite often and never had experienced anything
          bad, always good vibes only, very lovely place with diverse number of
          dishes. Also has a dietician versions of different desserts and main
          dishes. I come to different branches of VAPIANO quite often and never
          had experienced anything bad, always good vibes only"
        />
      </div>
    </>
  );
};

export default About;
