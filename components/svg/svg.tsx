import React from 'react';

// Define specific types for the component props
type SvgComponentProps = React.SVGProps<SVGSVGElement>

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
  // Destructure children and svg-specific props to prevent spreading them into the <path> element
  const { ...svgProps } = props;

  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps} // Spread only SVG-specific props
    >
      <path
        d="M8.68439 10.6578L15.3124 7.34378M15.3156 16.6578L8.69379 13.3469M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        stroke="#000000"
        strokeWidth="1.5"
        // Remove props spreading for path to avoid conflicts
      ></path>
    </svg>
  );
};

export default SvgComponent;
