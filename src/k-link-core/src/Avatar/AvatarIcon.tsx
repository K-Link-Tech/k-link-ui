import React from 'react';

// export function AvatarPlaceholderIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg
//       {...props}
//       width="15"
//       height="15"
//       viewBox="0 0 15 15"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
//         fill="currentColor"
//         fillRule="evenodd"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }
export function AvatarPlaceholderIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      {...props}
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6666 26V23.3333C22.6666 21.9188 22.1047 20.5623 21.1045 19.5621C20.1043 18.5619 18.7477 18 17.3333 18H6.66659C5.2521 18 3.89554 18.5619 2.89535 19.5621C1.89515 20.5623 1.33325 21.9188 1.33325 23.3333V26M17.3333 7.33333C17.3333 10.2789 14.9454 12.6667 11.9999 12.6667C9.0544 12.6667 6.66659 10.2789 6.66659 7.33333C6.66659 4.38781 9.0544 2 11.9999 2C14.9454 2 17.3333 4.38781 17.3333 7.33333Z"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AvatarAddIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
    >
      <g filter="url(#filter0_d_1274_683)">
        <rect width="32" height="32" x="5" y="5" fill="#fff" rx="16" />
        <path
          stroke="#98A2B3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.333"
          d="M21 16.333v9.334M16.333 21h9.334"
        />
        <rect
          width="32"
          height="32"
          x="5"
          y="5"
          stroke="#D0D5DD"
          strokeDasharray="1 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="16"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1274_683"
          width="41"
          height="41"
          x="0.5"
          y="0.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="4"
            result="effect1_dropShadow_1274_683"
          />
          <feOffset />
          <feColorMatrix values="0 0 0 0 0.949765 0 0 0 0 0.955804 0 0 0 0 0.967882 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1274_683" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1274_683" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function ActiveStatusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.25" y="1.25" width="17.5" height="17.5" rx="8.75" fill="#12B76A" />
      <rect
        x="1.25"
        y="1.25"
        width="17.5"
        height="17.5"
        rx="8.75"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
}
