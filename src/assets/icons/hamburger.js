import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}>
      <Path data-name="Rectangle 175" fill="none" d="M0 0h16v16H0z" />
      <G data-name="Union 4" fill="rgba(0,0,0,0.8)">
        <Path data-name="Rectangle 172" d="M0 1h16v2H0z" />
        <Path data-name="Rectangle 173" d="M0 7h16v2H0z" />
        <Path data-name="Rectangle 174" d="M0 13h8v2H0z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
