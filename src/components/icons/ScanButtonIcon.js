import * as React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function SvgScanButtonIcon(props) {
  return (
    <Svg
      width={74}
      height={64}
      viewBox="0 0 74 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#scanButtonIcon_svg__filter0_i_3_7281)">
        <Circle
          cx={36}
          cy={32}
          r={32}
          fill="url(#scanButtonIcon_svg__paint0_linear_3_7281)"
        />
      </G>
      <Circle
        cx={36}
        cy={32}
        r={30}
        stroke="#fff"
        strokeOpacity={0.24}
        strokeWidth={4}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.788 21.786c.446 0 .809.365.809.815 0 .45-.362.815-.81.815h-1.73a2.623 2.623 0 00-2.607 2.629v2.029c0 .45-.364.815-.81.815a.813.813 0 01-.809-.815v-2.03c0-2.345 1.895-4.255 4.224-4.257l1.732-.001zm7.624 0h1.693c2.335 0 4.234 1.911 4.234 4.262v2.026c0 .45-.362.815-.81.815a.813.813 0 01-.808-.815v-2.026a2.628 2.628 0 00-2.616-2.633h-1.693a.811.811 0 01-.809-.814c0-.45.362-.815.809-.815zm-.89 4.084H33.65a2.445 2.445 0 00-2.412 2.473v1.359c.003.158.13.288.287.293h10.119a.301.301 0 00.29-.293v-1.359a2.508 2.508 0 00-.703-1.75 2.383 2.383 0 00-1.71-.723zm-13.82 5.782h21.766c.447 0 .81.365.81.816 0 .449-.363.813-.81.813H46.34v3.884c0 2.352-1.899 4.264-4.233 4.264h-1.693a.813.813 0 01-.81-.816c0-.45.362-.814.81-.814h1.693a2.627 2.627 0 002.616-2.634v-3.884h-2.788v1.082a2.445 2.445 0 01-2.413 2.473h-5.872a2.445 2.445 0 01-2.412-2.473V33.28H28.45v3.889a2.624 2.624 0 002.609 2.628h1.73c.447 0 .81.366.81.815a.813.813 0 01-.81.816l-1.732-.002c-2.33-.002-4.226-1.912-4.226-4.257v-3.89h-1.127a.812.812 0 01-.81-.813c0-.45.363-.815.81-.815z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="scanButtonIcon_svg__paint0_linear_3_7281"
          x1={36}
          y1={0}
          x2={68}
          y2={64}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#28AF6E" />
          <Stop offset={1} stopColor="#2CCC80" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
export default SvgScanButtonIcon;
