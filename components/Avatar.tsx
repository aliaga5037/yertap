import Image from 'next/image';
import React from 'react';
import type { User } from 'types';

const Avatar = ({ user, className }: { user: User; className?: string }) => {
  return (
    <div
      className={`flex h-8 w-8 flex-row items-center justify-center rounded-full bg-purple-base align-middle ${className}`}
    >
      {user.image && (
        <Image src={user.image} width={48} height={48} alt={user.name} />
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
