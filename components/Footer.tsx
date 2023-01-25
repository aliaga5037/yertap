import React from 'react';
import Image from 'next/image';

const links = [
  { title: 'About Yertap', url: '' },
  { title: 'Company', url: '' },
  { title: 'News', url: '' },
  { title: 'Blogs', url: '' },
  { title: 'Careers', url: '' },
];

const socials = [
  { title: 'Follow Us on SM', url: '' },
  { title: 'Instagram', url: '' },
  { title: 'Facebook', url: '' },
  { title: 'Twitter', url: '' },
  { title: 'Tiktok', url: '' },
];

const contacts = [
  { title: 'Send Your Feedback', url: '' },
  { title: 'Support: +994 (50) 964 3432', url: '' },
  { title: 'Business: +994 (50) 964 3432 ', url: '' },
  { title: 'Support: help@yertap.com', url: '' },
  { title: 'Business: hello@yertap.com', url: '' },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-light3">
      <div className="flex justify-between px-[120px] pt-[88px] pb-14">
        <div className="flex flex-col">
          <Image
            className="mb-6 h-auto w-auto"
            src="/images/brand.png"
            alt="Yertap"
            width={163}
            height={56}
          />
          <span className="w-[203px] break-words text-sm font-normal leading-2 text-black">
            We work to give people information about the places they want to
            visit.
          </span>
        </div>

        <div className="flex flex-col">
          {links.map((item, i) => (
            <a
              key={item.title}
              href={item.url}
              className={`mb-3 text-base ${
                i === 0 ? 'font-bold' : 'font-medium'
              } leading-2 text-black`}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col">
          {socials.map((item, i) => (
            <a
              key={item.title}
              href={item.url}
              className={`mb-3 text-base ${
                i === 0 ? 'font-bold' : 'font-medium'
              } leading-2 text-black`}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col">
          {contacts.map((item, i) => (
            <a
              key={item.title}
              href={item.url}
              className={`mb-3 text-base ${
                i === 0 ? 'font-bold' : 'font-medium'
              } leading-2 text-black`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="flex h-20 items-center justify-between bg-gray-dark2 px-[120px] text-xs font-medium leading-1 text-white">
        <span>
          © 2022 Yertap.az, MMC. All Rights Reserved. Do not use or sell our
          personal information.
        </span>

        <span>
          <a href="#">Privacy Policy </a>|<a href="#"> Terms and Conditions</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
