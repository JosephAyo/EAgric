import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={75}
      height={24}
      viewBox="0 0 75 24"
      {...props}>
      <G data-name="Group 33">
        <Path
          data-name="Rectangle 4"
          d="M20 0h35a20 20 0 0120 20v4H0v-4A20 20 0 0120 0z"
          fill="#176b44"
        />
        <Path
          data-name="Icon awesome-angle-down"
          d="M36.877 6.316l-8.439 7.652a1.258 1.258 0 000 1.907l1.4 1.272a1.593 1.593 0 002.1 0l5.981-5.424 5.985 5.424a1.593 1.593 0 002.1 0l1.4-1.272a1.258 1.258 0 000-1.907l-8.43-7.652a1.584 1.584 0 00-2.1 0z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
