import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function SvgDiagnoseIcon(props) {
  return (
    <Svg
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.012 2.2c-.054.004-5.591.48-8.225-2a.41.41 0 00-.57 0C6.583 2.68 1.05 2.204.992 2.2a.406.406 0 00-.317.108.408.408 0 00-.138.304v3.863c0 12.904 8.813 14.425 8.9 14.438.021.004.046.004.067.004.021 0 .042 0 .063-.005.087-.012 8.9-1.533 8.9-14.437V2.612a.415.415 0 00-.454-.413zm-4.058 9.358c0 .23-.187.417-.417.417h-2.566v2.567c0 .229-.188.416-.417.416H8.446a.418.418 0 01-.417-.416v-2.567H5.462a.418.418 0 01-.416-.417V9.45c0-.23.187-.417.416-.417H8.03V6.467c0-.23.188-.417.417-.417h2.108c.23 0 .417.187.417.417v2.566h2.566c.23 0 .417.188.417.417v2.108z"
        fill="currentColor"
      />
    </Svg>
  );
}
export default SvgDiagnoseIcon;