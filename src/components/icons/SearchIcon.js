import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function SvgSearchIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.258 14.075l-2.833-2.825a6.6 6.6 0 001.408-4.083 6.667 6.667 0 10-6.666 6.666 6.6 6.6 0 004.083-1.408l2.825 2.833a.833.833 0 001.183 0 .833.833 0 000-1.183zM2.167 7.167a5 5 0 1110 0 5 5 0 01-10 0z"
        fill="#ABABAB"
      />
    </Svg>
  );
}
export default SvgSearchIcon;
