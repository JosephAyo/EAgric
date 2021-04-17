import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.149}
      height={10.429}
      viewBox="0 0 16.149 10.429"
      {...props}>
      <Path
        data-name="Icon awesome-angle-down"
        d="M7.222 10.074L.356 3.208a1.207 1.207 0 010-1.711L1.497.36a1.207 1.207 0 011.711 0l4.866 4.866L12.941.36a1.207 1.207 0 011.711 0l1.141 1.141a1.207 1.207 0 010 1.711l-6.865 6.862a1.2 1.2 0 01-1.706 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
