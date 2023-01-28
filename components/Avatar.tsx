import Image from 'next/image';
import React from 'react';
import type { User } from 'types';

const Avatar = ({ user, className }: { user: User; className?: string }) => {
  return (
    <div
      className={`${className} flex h-8 w-8 flex-row items-center justify-center rounded-full bg-purple-base align-middle`}
    >
      {user.image && (
        <Image
          src={user.image}
          width={48}
          height={48}
          alt={user.name}
          className="h-full w-full rounded-full"
        />
      )}
      {!user.image && (
        <span className="capitalize text-white">
          {user.name.split(' ')[0][0]} {user.name.split(' ')[1][0]}
        </span>
      )}
    </div>
  );
};

export default Avatar;
