import { SVGProps } from "react";

interface IconHeartProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

export const IconHeart = ({
  strokeColor = "white",
  ...props
}: IconHeartProps) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9117 2.67167C11.619 2.378 11.2713 2.145 10.8884 1.98601C10.5055 1.82702 10.095 1.74518 9.68041 1.74518C9.26582 1.74518 8.85532 1.82702 8.47243 1.98601C8.08954 2.145 7.7418 2.378 7.44916 2.67167L6.99999 3.12667L6.55082 2.67167C6.25818 2.378 5.91044 2.145 5.52755 1.98601C5.14466 1.82702 4.73416 1.74518 4.31957 1.74518C3.90499 1.74518 3.49448 1.82702 3.11159 1.98601C2.72871 2.145 2.38097 2.378 2.08832 2.67167C0.851656 3.90833 0.775823 5.99667 2.33332 7.58333L6.99999 12.25L11.6667 7.58333C13.2242 5.99667 13.1483 3.90833 11.9117 2.67167Z"
      stroke={strokeColor}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
