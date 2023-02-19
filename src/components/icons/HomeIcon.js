import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function SvgHomeIcon(props) {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.5 2.042H16.51c-.067-.813-.56-1.256-1.47-1.256H5.962c-.901 0-1.404.443-1.461 1.256zm-1.934 2.67h15.877c-.132-.878-.588-1.377-1.593-1.377H4.16c-1.006 0-1.461.5-1.594 1.377zm1.12 16.61h13.629c1.973 0 3.006-.998 3.006-2.901V9.118c0-1.903-1.033-2.9-3.006-2.9H3.685c-1.982 0-3.006.988-3.006 2.9v9.303c0 1.903 1.024 2.9 3.006 2.9z"
        fill="currentColor"
      />
    </Svg>
  );
}
export default SvgHomeIcon;
