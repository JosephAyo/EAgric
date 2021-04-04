import * as React from 'react';
import Svg, {Defs, G, Path, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={51}
      viewBox="0 0 45 51"
      {...props}>
      <Defs></Defs>
      <G data-name="Group 32">
        <G filter="url(#prefix__a)">
          <Path
            data-name="Rectangle 3"
            d="M29 4h12v18a15 15 0 01-15 15H14V19A15 15 0 0129 4z"
            fill="#176b44"
          />
        </G>
        <G data-name="Group 1">
          <G data-name="Union 1" fill="#fff" transform="translate(26 13)">
            <Circle data-name="Ellipse 3" cx={1.5} cy={1.5} r={1.5} />
            <Circle
              data-name="Ellipse 4"
              cx={1.5}
              cy={1.5}
              r={1.5}
              transform="translate(0 6)"
            />
            <Circle
              data-name="Ellipse 5"
              cx={1.5}
              cy={1.5}
              r={1.5}
              transform="translate(0 12)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
