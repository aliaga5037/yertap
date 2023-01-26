import React, { useState } from 'react';
import Layout from '@components/Layout';
import HoverRating from '@components/HoverRating';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import FeatherIcon from 'Icons/feather.svg';
import CloseIcon from 'Icons/close.svg';

import { sampleRestaurantData } from '@utils/sample-data';
import Image from 'next/image';
import Avatar from '@components/Avatar';
import TextRating from '@components/TextRating';
import Card from '@components/Card';
import Tag from '@components/Tag';

import ClapIcon from 'Icons/clap.svg';
import ShareIcon from 'Icons/share.svg';
import ReplyIcon from 'Icons/reply.svg';
import DateIcon from 'Icons/date.svg';
import StarIcon from 'Icons/star.svg';

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
      image: '/images/user.jpg',
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
                      <CloseIcon className="mr-2" /> Clear
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6 flex">
              <span>You can give</span>
              <HoverRating initialRating={2} />
              <span>stars</span>
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
                <FeatherIcon className="mr-2" /> Post
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
                    <DateIcon className="mr-2" />
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-base font-normal leading-3 text-gray-dark2">
                  {item.text}
                </span>
              </div>
              <div className="mb-6 flex text-base font-medium leading-3 text-gray-dark2">
                I gave <TextRating rating={item.rating} /> stars
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
                  <div className="flex">
                    <StarIcon className="mr-2" />
                    <span className="mr-2">
                      {item.restaurant.rating.average}
                    </span>
                    <span>
                      ({item.restaurant.rating.count.toLocaleString()})
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-around">
                <div className="flex">
                  <ClapIcon className="mr-3" /> 24
                </div>
                <div className="flex">
                  <ReplyIcon className="mr-3" /> 10
                </div>
                <div>
                  <ShareIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </Layout>
  );
};

export default Reviews;
