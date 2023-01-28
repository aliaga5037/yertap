import Link from 'next/link';
import React from 'react';
import Avatar from './Avatar';

const NotificationsPopup = ({ items }) => {
  return (
    <div className="relative w-[472px] rounded-lg border border-gray-light3 bg-white">
      <div className="absolute -top-[13px] right-[76px] -z-1 border-l-[14px] border-b-[16px] border-r-[14px] border-l-transparent border-b-gray-light3 border-r-transparent"></div>
      <div className="absolute -top-[11px] right-[78px] border-l-[12px] border-b-[14px] border-r-[12px] border-l-transparent border-b-white border-r-transparent"></div>
      <div className="flex items-center justify-between px-6 py-[18px]">
        <span className="text-base font-semibold leading-2 text-gray-base">
          Notifications
        </span>
        <Link
          href="/notifications"
          className="text-base font-medium leading-2 text-purple-base"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col border-t border-t-gray-light3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${
              item.viewed ? 'bg-white' : 'bg-purple-light1'
            } mb-7 cursor-text border-b border-b-gray-light2 pl-8 pr-12 first:pt-6 last:border-none`}
          >
            <div className="flex">
              <div className="w-12">
                <Avatar user={item.user} className="!h-12 !w-12" />
              </div>
              <div className="ml-5 flex flex-col">
                <span className="mb-2 text-base font-medium leading-3 text-gray-dark4">
                  {item.title}
                </span>
                <span className="mb-4 text-base font-normal leading-3 text-gray-base">
                  {item.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPopup;
