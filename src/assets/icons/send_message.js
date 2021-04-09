import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      {...props}>
      <Path
        data-name="Path 3"
        d="M24 0A24 24 0 110 24 24 24 0 0124 0z"
        fill="#176b44"
      />
      <Path
        data-name="Icon ionic-ios-send"
        d="M34.306 13.049l-21.034 9.168a.482.482 0 00.017.877l5.69 3.214a.917.917 0 001.049-.1l11.218-9.675c.074-.063.252-.183.321-.115s-.04.246-.1.321l-9.709 10.932a.914.914 0 00-.092 1.094l3.719 5.965a.484.484 0 00.871-.011l8.7-21.034a.482.482 0 00-.65-.636z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
