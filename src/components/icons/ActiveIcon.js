import * as React from 'react';
import Svg, {Path, Mask} from 'react-native-svg';
function SvgActiveIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
        fill="#fff"
        stroke="#28AF6E"
        strokeWidth={8}
      />
      <Mask
        id="activeIcon_svg__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={-1}
        y={-1}
        width={26}
        height={26}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
          fill="#fff"
          stroke="#fff"
        />
      </Mask>
    </Svg>
  );
}
export default SvgActiveIcon;
