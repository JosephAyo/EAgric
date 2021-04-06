import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={26.246}
      viewBox="0 0 30 26.246"
      {...props}>
      <Path
        data-name="Icon awesome-wind"
        d="M9.181 13.122H.937a.94.94 0 00-.937.937v1.875a.94.94 0 00.937.937h8.332a1.957 1.957 0 011.957 1.559 1.878 1.878 0 01-3.633.908.926.926 0 00-.893-.591H4.781a.933.933 0 00-.932 1.078 5.625 5.625 0 0011.1-1.816 5.749 5.749 0 00-5.768-4.887zM.937 11.247h19.687a5.626 5.626 0 10-5.524-6.7.924.924 0 00.926 1.072h1.922a.92.92 0 00.891-.592 1.878 1.878 0 013.633.908 1.952 1.952 0 01-1.953 1.562H.937A.94.94 0 000 8.435v1.875a.94.94 0 00.937.937zm22.5 1.875h-9.158a7.406 7.406 0 012.332 3.75h6.826A2.812 2.812 0 1121 21.067a.97.97 0 00-.85-.445h-1.98a.939.939 0 00-.9 1.236 6.555 6.555 0 106.164-8.736z"
        fill="rgba(0,0,0,0.6)"
      />
    </Svg>
  );
}

export default SvgComponent;
