const ArrowIcon = ({ strokeColor = '#222838', ...props }) => {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 0.666656L8 7.66666L15 0.666656"
        stroke={strokeColor}
        strokeWidth="1.4"
      />
    </svg>
  );
};

export default ArrowIcon;
