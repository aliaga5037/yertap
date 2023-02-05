import React, { useState } from 'react';
import Layout from '@components/Layout';
import HoverRating from '@components/HoverRating';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { sampleRestaurantData } from '@utils/sample-data';
import Image from 'next/image';
import Avatar from '@components/Avatar';
import TextRating from '@components/TextRating';
import Tag from '@components/Tag';
import Sponsored from '@components/Sponsored';

const reviews = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'John Doe',
      image: '/images/user.jpg',
    },
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
    date: '2020-01-01',
    claps: 10,
    restaurant: {
      id: 1,
      title: 'Vapiano',
      image: '/images/vapiano.jpg',
      type: 'Italian',
      tags: ['Italian', 'Pizza', 'Pasta'],
      rating: {
        average: 4,
        count: 10,
      },
    },
  },
  {
    id: 2,
    user: {
      id: 1,
      name: 'John Doe',
      image: '',
    },
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
    date: '2020-01-01',
    claps: 5,
    restaurant: {
      id: 2,
      title: 'Starbucks',
      image: '/images/starbucks.jpg',
      type: 'Coffee',
      tags: ['Coffee', 'Cafe'],
      rating: {
        average: 3,
        count: 102,
      },
    },
  },
];

const Reviews = () => {
  const [selected, setSelected] = useState(sampleRestaurantData[0]);
  return (
    <Layout title="Reviews">
      <div className="flex">
        <div className="relative px-11">
          <h1 className="mb-6 text-2xl font-bold leading-5 text-gray-dark2">
            Review
          </h1>

          <div className="mb-12 flex w-[590px] flex-col rounded-xl bg-gray-light0 p-6">
            <div className="mb-6 flex flex-col">
              <Stack spacing={2} sx={{ width: '100%' }}>
                <Autocomplete
                  multiple={false}
                  id="free-solo-demo"
                  freeSolo
                  size="small"
                  options={sampleRestaurantData.map((option) => option.title)}
                  className="mb-2.5 bg-white"
                  onChange={(event, value) => {
                    const selectedRestaurant = sampleRestaurantData.find(
                      (restaurant) => restaurant.title === value
                    );
                    setSelected(selectedRestaurant);
                  }}
                  value={selected?.title || ''}
                  renderInput={(params) => (
                    <TextField {...params} label="Search" />
                  )}
                />
              </Stack>
              {selected && (
                <div className="flex items-center justify-between">
                  <div className="flex w-64 overflow-hidden rounded-lg border border-gray-light3 bg-white">
                    <Image
                      className="mr-3 h-auto w-auto"
                      src={selected?.image}
                      alt={selected?.title}
                      priority={true}
                      width={56}
                      height={56}
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-sm font-semibold leading-2 text-gray-dark3">
                        {selected.title}
                      </span>
                      <span className="text-sm font-normal leading-2 text-gray-dark3">
                        {selected.type}
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSelected(null)}
                      className="ml-3 flex items-center text-sm font-medium leading-1 text-gray-dark2"
                    >
                      <i className="icon icon-close mr-2 flex" /> Clear
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6 flex">
              <span className="text-dark2 mr-1 text-base font-medium leading-3">
                You can give
              </span>
              <HoverRating initialRating={2} />
              <span className="text-dark2 ml-1 text-base font-medium leading-3">
                stars
              </span>
            </div>

            <div className="mb-6">
              <textarea
                name=""
                id=""
                className="h-[216px] w-full resize-none rounded-xl border border-gray-light4 px-5 py-4 text-base font-normal leading-3 text-gray-dark2"
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-base font-medium leading-3 text-gray-dark2">
                20 / 200
              </span>
              <button className="ml-6 flex rounded-lg bg-purple-base px-[14px] py-[9px] text-base font-medium leading-[18px] text-white">
                <i className="icon icon-feather mr-2 flex" /> Post
              </button>
            </div>
          </div>

          {reviews.map((item) => (
            <div
              key={item.id}
              className="mb-4 flex w-[590px] flex-col rounded-xl bg-gray-light0 p-6"
            >
              <div className="mb-6 flex">
                <Avatar user={item.user} className="mr-4 h-12 w-12" />
                <div className="flex flex-col justify-center">
                  <span className="text-base font-semibold leading-2 text-gray-dark3">
                    {item.user.name}
                  </span>
                  <span className="flex items-center text-sm font-normal leading-2 text-gray-base">
                    <i className="icon icon-date mr-2 flex" />
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-base font-normal leading-3 text-gray-dark2">
                  {item.text}
                </span>
              </div>
              <div className="mb-6 flex items-center text-base font-medium leading-3 text-gray-dark2">
                <span className="text-dark2 mr-1 text-base font-medium leading-3">
                  I gave
                </span>
                <TextRating rating={item.rating} />
                <span className="text-dark2 ml-1 text-base font-medium leading-3">
                  stars
                </span>
              </div>

              <div className="mb-6 flex w-full overflow-hidden rounded-lg border border-gray-light3 bg-white">
                <Image
                  className="mr-5 h-auto w-auto"
                  src={item.restaurant?.image}
                  alt={item.restaurant?.title}
                  priority={true}
                  width={128}
                  height={128}
                />
                <div className="flex flex-col justify-center py-4">
                  <span className="text-sm font-semibold leading-2 text-gray-dark3">
                    {item.restaurant?.title}
                  </span>
                  <span className="mb-2 text-sm font-normal leading-2 text-gray-dark3">
                    {item.restaurant?.type}
                  </span>
                  <div className="mb-3 flex">
                    {item.restaurant?.tags.map((tag) => (
                      <Tag key={tag} title={tag} className="mr-1" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <i className="icon icon-star mr-2 flex" />
                    <span className="mr-2 text-sm font-medium leading-1 text-gray-dark3">
                      {item.restaurant.rating.average}
                    </span>
                    <span className="text-sm font-normal leading-1 text-gray-dark3">
                      ({item.restaurant.rating.count.toLocaleString()})
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-around">
                <div className="flex">
                  <i className="icon icon-clap mr-3 flex cursor-pointer" /> 24
                </div>
                <div className="flex">
                  <i className="icon icon-reply mr-3 flex cursor-pointer" /> 10
                </div>
                <div>
                  <i className="icon icon-share flex cursor-pointer " />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Sponsored />
      </div>
    </Layout>
  );
};

export default Reviews;
