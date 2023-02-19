import * as React from 'react';
import Svg, {Path, Mask} from 'react-native-svg';
function SvgİnactiveIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
        fill="#fff"
        fillOpacity={0.08}
      />
      <Mask
        id="inactiveIcon_svg__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  );
}
export default SvgİnactiveIcon;
