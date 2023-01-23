import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

const BookmarkIcon = ({ strokeColor = '#686E80', ...attribs }: Props) => (
  <svg
    width={16}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attribs}
  >
    <path d="M1 1h14v19l-7-5-7 5V1Z" stroke={strokeColor} strokeWidth={1.6} />
  </svg>
);

export default BookmarkIcon;
