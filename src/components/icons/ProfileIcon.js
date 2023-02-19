import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function SvgProfileIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.952 9.772c2.384 0 4.456-2.002 4.456-4.61A4.456 4.456 0 009.952.68c-2.384 0-4.456 1.95-4.456 4.505 0 2.586 2.06 4.588 4.456 4.588zm-7.475 9.657h14.94c1.191 0 1.904-.522 1.904-1.387 0-2.69-3.598-6.403-9.38-6.403-5.771 0-9.37 3.712-9.37 6.403 0 .865.714 1.387 1.906 1.387z"
        fill="currentColor"
      />
    </Svg>
  );
}
export default SvgProfileIcon;
