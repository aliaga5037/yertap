import React, { SVGProps } from 'react';

const XIcon = ({ stroke = '#672AC6', ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 1L1 7M1 1L7 7" stroke={stroke} strokeWidth="1.4" />
    </svg>
  );
};

export default XIcon;
