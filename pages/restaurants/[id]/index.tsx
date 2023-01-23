import { GetServerSideProps } from 'next';
import Layout from '@components/Layout';
import { sampleRestaurantData } from '../../../utils/sample-data';
import Badge from '@components/Badge';
import Tabs from '@components/restaurants/Tabs';

import ArrowIcon from 'Icons/arrow';
import StartIcon from 'Icons/star.svg';
import PhotoIcon from 'Icons/photo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Details = ({ item }) => {
  return (
    <Layout title="Details" hideSidebar>
      <div className="w-full">
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium leading-2 text-gray-base"
          >
            Restaurants
          </Link>
          <ArrowIcon className="-rotate-90 " />
          <Link
            href={`/restaurants/${item.id}`}
            className="text-sm font-medium leading-2 text-gray-light6 underline"
          >
            {item.title}
          </Link>
        </div>
        <h1 className="mb-3 text-2xl font-bold leading-5 text-black">
          {item.title}
        </h1>
        <div className="mb-3 flex items-center">
          <StartIcon className="mr-3" />
          <span>
            {item.rating.average} ({item.rating.count})
          </span>
          <span className="ml-3 mr-2 h-[4px] w-[4px] rounded-full bg-black"></span>
          <span className="text-base font-normal leading-3 text-black">
            {item.type}
          </span>
          <span className="ml-3 mr-2 h-[4px] w-[4px] rounded-full bg-black"></span>
          <Badge text="pasta" color="green" type="full" className="mr-2" />
          <Badge text="pizza" color="orange" type="full" className="mr-2" />
          <Badge text="drink" color="blue" type="full" />
        </div>
        <div className="mb-4 flex w-full justify-between">
          <div className="flex items-center">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                text={tag}
                color="gray"
                type="full"
                className="mr-2"
              />
            ))}
          </div>
          <Link
            href={`/restaurants/${item.id}/gallery`}
            className="flex items-center justify-between gap-1.5 rounded-lg bg-gray-light1 px-3 py-2 text-sm font-medium leading-1"
          >
            <PhotoIcon />
            Show All (32) Photos
          </Link>
        </div>
        <div className="flex h-[416px] gap-2 overflow-hidden rounded-lg">
          <div className="flex">
            <Image src={item.gallery[0]} alt="" className="h-full w-[636px]" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image src={item.gallery[1]} alt="" className="h-full" />
              <Image src={item.gallery[2]} alt="" className="h-full" />
            </div>
            <div className="flex gap-2">
              <Image src={item.gallery[3]} alt="" className="h-full" />
              <Image src={item.gallery[4]} alt="" className="h-full" />
              <Image src={item.gallery[5]} alt="" className="h-full" />
            </div>
          </div>
        </div>
        <div>
          <Tabs item={item} />
        </div>
      </div>
    </Layout>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  //   );
  //   const item = await res.json();
  const item = sampleRestaurantData.find(
    (data) => data.id === Number(context.params.id)
  );
  console.log(item);
  return {
    props: {
      item,
    },
  };
};
