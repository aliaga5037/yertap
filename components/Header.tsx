import React from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import NotificationsPopup from './NotificationsPopup';
import Categories from '@components/Categories';

import { categories } from '@utils/sample-data';
import { useRouter } from 'next/router';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const items = [
  {
    id: 1,
    type: 'review',
    user: {
      id: 1,
      name: 'John Doe',
      image: '/images/user.jpg',
    },
    title: 'John clapped your Review!',
    text: `Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favorite places.`,
    viewed: false,
    date: '9 m',
  },
  {
    id: 2,
    type: 'review',
    user: {
      id: 1,
      name: 'John Doe',
      image: '/images/user.jpg',
    },
    title: 'John clapped your Review!',
    text: `Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favorite places.`,
    viewed: true,
    date: '32 m',
  },
];

export const Header: React.FC = () => {
  const { pathname: activeUrl } = useRouter();
  return (
    <header className="border-b border-gray-light1 py-5 px-[120px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-10  flex">
            <i className="icon icon-logo mr-3 flex text-3xl text-purple-base" />
            <span className="text-3xl font-semibold leading-3 text-black">
              Yertap
            </span>
          </Link>
          <Dropdown title="Categories" className="mr-1">
            <div className="mt-2 -ml-14 w-[277px] overflow-hidden rounded-lg border border-gray-light3 bg-white">
              <div className="flex items-center border-b border-b-gray-light3 py-4 px-6">
                <h1 className="text-base font-semibold leading-2 text-gray-base">
                  Categories
                </h1>
              </div>
              <div className="px-2 py-6">
                <Categories activeUrl={activeUrl} categories={categories} />
              </div>
            </div>
          </Dropdown>
          <Dropdown title="City" className="mr-1">
            <div className="mt-2 -ml-14 w-[277px] overflow-hidden rounded-lg border border-gray-light3 bg-white">
              <div className="flex items-center border-b border-b-gray-light3 py-4 px-6">
                <h1 className="text-base font-semibold leading-2 text-gray-base">
                  City
                </h1>
              </div>

              <div className="flex border-b py-4 px-6">
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="py-2 text-base font-medium leading-2 text-gray-base hover:text-purple-base"
                  >
                    Baku
                  </Link>
                  <Link
                    href="/"
                    className="py-2 text-base font-medium leading-2 text-gray-base hover:text-purple-base"
                  >
                    Ganja
                  </Link>
                </div>
              </div>
            </div>
          </Dropdown>

          <Dropdown title="District" className="mr-1">
            <div className="mt-2 -ml-14 w-[277px] overflow-hidden rounded-lg border border-gray-light3 bg-white">
              <div className="flex items-center border-b border-b-gray-light3 py-4 px-6">
                <h1 className="text-base font-semibold leading-2 text-gray-base">
                  District
                </h1>
              </div>

              <div className="flex border-b py-4 px-6">
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="py-2 text-base font-medium leading-2 text-gray-base hover:text-purple-base"
                  >
                    Bineqedi
                  </Link>
                  <Link
                    href="/"
                    className="py-2 text-base font-medium leading-2 text-gray-base hover:text-purple-base"
                  >
                    Xocasen
                  </Link>
                </div>
              </div>
            </div>
          </Dropdown>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              size="small"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </Stack>
        </div>
        <div className="flex">
          <button className="flex flex-row items-center">
            <i className="icon icon-lang mr-2 flex text-xl" /> Az
          </button>
          <span className="group relative ml-8 flex items-center">
            <i className="icon icon-bell flex cursor-pointer text-xl" />
            <i className="icon icon-ellipse absolute top-0.5 left-2.5 flex cursor-pointer text-purple-base" />

            <div className="absolute -right-20 top-11 z-20 scale-0 transition-all delay-300 ease-in-out group-hover:scale-100">
              <NotificationsPopup items={items} />
            </div>
          </span>
          <span className="ml-11 cursor-pointer">
            <Avatar user={{ id: 1, name: 'John Doe', image: '' }} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
