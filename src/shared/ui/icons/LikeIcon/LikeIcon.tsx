import * as React from "react";

const LikeIcon: React.FC<React.SVGProps<SVGElement>> = ({width=22, height=20, fill="#474747"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 20"
  >
    <path
      fill={fill}
      d="M20.938 6.511a2.25 2.25 0 0 0-1.688-.761H14v-1.5A3.75 3.75 0 0 0 10.25.5a.75.75 0 0 0-.671.414L6.037 8H2A1.5 1.5 0 0 0 .5 9.5v8.25a1.5 1.5 0 0 0 1.5 1.5h16.125a2.25 2.25 0 0 0 2.233-1.969l1.125-9a2.25 2.25 0 0 0-.546-1.77M2 9.5h3.75v8.25H2zm17.994-1.406-1.125 9a.75.75 0 0 1-.744.656H7.25V8.927l3.442-6.884A2.25 2.25 0 0 1 12.5 4.25V6.5a.75.75 0 0 0 .75.75h6a.75.75 0 0 1 .744.844"
    ></path>
  </svg>
);

export default LikeIcon;
