import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={130}
      height={30}
      viewBox="0 0 130 30"
      {...props}>
      <G data-name="Group 29">
        <Path
          data-name="Rectangle 12"
          d="M30 0h100a30 30 0 01-30 30H0A30 30 0 0130 0z"
          fill="#176b44"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
