import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={33}
      viewBox="0 0 36 33"
      {...props}>
      <G
        data-name="Icon feather-sunrise"
        fill="none"
        stroke="#636363"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}>
        <Path data-name="Path 3" d="M25.5 25.5a7.5 7.5 0 00-15 0" />
        <Path data-name="Path 4" d="M18 1.5V12" />
        <Path data-name="Path 5" d="M6.33 13.83l2.13 2.13" />
        <Path data-name="Path 6" d="M1.5 25.5h3" />
        <Path data-name="Path 7" d="M31.5 25.5h3" />
        <Path data-name="Path 8" d="M27.54 15.96l2.13-2.13" />
        <Path data-name="Path 9" d="M34.5 31.5h-33" />
        <Path data-name="Path 10" d="M12 7.5l6-6 6 6" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
