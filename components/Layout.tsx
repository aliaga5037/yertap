import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Categories from '@components/Categories';
import BookmarkIcon from 'Icons/bookmark';
import FeatherIcon from 'Icons/feather.svg';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    title: 'Food',
    slug: 'food',
    icon: '/images/food.svg',
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Travel',
    slug: 'travel',
    icon: '/images/travel.svg',
    isAvailable: false,
  },
];

type Props = {
  children?: ReactNode;
  title?: string;
  hideSidebar?: boolean;
};

const Layout = ({
  children,
  title = 'This is the default title',
  hideSidebar,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />

    <main className="flex flex-row px-[120px] py-6">
      {!hideSidebar && (
        <div className="flex flex-col">
          <Link
            href="/reviews"
            className="flex w-[260px] cursor-pointer flex-row rounded-lg bg-purple-light1 px-4 py-3 text-sm font-medium leading-2 text-purple-dark1"
          >
            <FeatherIcon className="mr-5" /> Review
          </Link>
          <Link
            href="/saved"
            className="group flex w-[260px] cursor-pointer flex-row rounded-lg px-4 py-3 text-sm font-medium leading-2 text-gray-base hover:bg-purple-light1 hover:text-purple-dark1"
          >
            <BookmarkIcon className="mr-5" />
            Save List
          </Link>
          <hr className="my-5 h-0.5 rounded-lg bg-gray-light2" />
          <Categories categories={categories} />
        </div>
      )}
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
