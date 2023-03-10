/* eslint-disable @next/next/no-css-tags */
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Categories from '@components/Categories';
import Link from 'next/link';
import { categories } from '@utils/sample-data';
import { useRouter } from 'next/router';

type Props = {
  children?: ReactNode;
  title?: string;
  hideSidebar?: boolean;
};

const Layout = ({ children, title = 'Yertap', hideSidebar }: Props) => {
  const { pathname: activeUrl } = useRouter();
  const activeClass = 'text-purple-dark1 bg-purple-light1';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="favicon.svg"></link>
        <link rel="stylesheet" href="/icons/icons.css" />
      </Head>
      <Header />

      <main className="flex flex-row lg:px-[120px] md:px-20  py-6">
        {!hideSidebar && (
          <div className="flex flex-col">
            <Link
              href="/reviews"
              className={`grid w-[260px] cursor-pointer grid-cols-[1fr_3fr_1fr] rounded-lg  px-4 py-3 text-sm font-medium leading-2 text-gray-base ${
                activeUrl === '/reviews' && activeClass
              } hover:bg-purple-light1 hover:text-purple-dark1`}
            >
              <i className="icon icon-feather mr-5 flex text-2xl" /> Review
            </Link>
            <Link
              href="/saved"
              className={`group  grid w-[260px] cursor-pointer grid-cols-[1fr_3fr_1fr]  rounded-lg px-4 py-3 text-sm font-medium leading-2 text-gray-base hover:bg-purple-light1 hover:text-purple-dark1 ${
                activeUrl === '/saved' && activeClass
              }`}
            >
              <i className="icon icon-bookmark mr-5 flex text-2xl" />
              Save List
            </Link>
            <hr className="my-5 h-0.5 rounded-lg bg-gray-light2" />
            <Categories activeUrl={activeUrl} categories={categories} />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
