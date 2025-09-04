import * as React from "react";

const SkillsButtonIcon: React.FC<React.SVGProps<SVGElement>> = ({ width=20, height=20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#00BCFF"
      d="M10.023 10.001a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0"
    ></path>
    <path
      fill="#00CF7F"
      d="M3.36 16.666a3.333 3.333 0 0 1 3.333-3.334l1.776-.937 1.557.937v3.334a3.333 3.333 0 1 1-6.667 0"
    ></path>
    <path
      fill="#FF7361"
      d="M10.025 0 8.21 3.151l1.814 3.516h3.286a3.333 3.333 0 1 0 0-6.667z"
    ></path>
    <path
      fill="#FF4D12"
      d="M3.313 3.333a3.333 3.333 0 0 0 3.333 3.334l1.768.683 1.612-.683V0h-3.38a3.333 3.333 0 0 0-3.333 3.333"
    ></path>
    <path
      fill="#B659FF"
      d="M3.36 10.001a3.333 3.333 0 0 0 3.333 3.334h3.333V6.668H6.693a3.333 3.333 0 0 0-3.334 3.333"
    ></path>
  </svg>
);

export default SkillsButtonIcon;
