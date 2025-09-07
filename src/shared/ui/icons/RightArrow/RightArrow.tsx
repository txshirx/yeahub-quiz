import * as React from "react";

const RightArrow: React.FC<React.SVGProps<SVGElement>> = ({ width=28, height=28, stroke="#6A0BFF" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 28 28"
  >
    <rect width="27" height="27" x="0.5" y="0.5" fill="#fff" rx="13.5"></rect>
    <rect
      width="27"
      height="27"
      x="0.5"
      y="0.5"
      stroke={stroke}
      rx="13.5"
    ></rect>
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.5 19 5-5-5-5"
    ></path>
  </svg>
);

export default RightArrow;
