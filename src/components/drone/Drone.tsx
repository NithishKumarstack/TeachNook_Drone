import * as React from "react";
import { SVGProps } from "react";
const Drone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1000}
    height={900}
    viewBox="0 0 1329 180"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_387_2)">
      <path
        d="M49 46H1278V748H49V46Z"
        fill="url(#pattern0)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_387_2"
        x={0}
        y={0}
        width={1329}
        height={802}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1} dy={4} />
        <feGaussianBlur stdDeviation={25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.244167 0 0 0 0 0.207627 0 0 0 0 0.172748 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_387_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_387_2"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_387_2"
          transform="matrix(0.000244141 0 0 0.00042742 0 -0.00029509)"
        />
      </pattern>
      <image
        id="image0_387_2"
        width={4096}
        height={2341}
      />
    </defs>
  </svg>
)
export default Drone;