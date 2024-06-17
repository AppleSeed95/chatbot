import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  img: string;
}

export const Avatar: React.FC<AvatarProps> = ({ img }) => {
  return <>
    <Image
      src={img}
      alt="avatar"
      width={40}
      height={40}
      className="rounded-full border border-gray object-cover"
    />
    <style jsx>{`
      img {
        border-radius: 100%;
      }
    `}</style>
  </>
};

