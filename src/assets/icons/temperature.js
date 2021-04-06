import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}>
      <Path
        data-name="Icon awesome-temperature-high"
        d="M24.375 0A5.625 5.625 0 1030 5.625 5.634 5.634 0 0024.375 0zm0 7.5a1.875 1.875 0 111.875-1.875A1.873 1.873 0 0124.375 7.5zM15 6.563a6.563 6.563 0 00-13.125 0v9.756a8.422 8.422 0 1015 5.244A8.362 8.362 0 0015 16.318zM8.438 26.25a4.68 4.68 0 01-2.812-8.426V6.563a2.813 2.813 0 015.625 0v11.261a4.68 4.68 0 01-2.813 8.426zm.938-7.33V6.563a.938.938 0 00-1.875 0V18.92a2.813 2.813 0 101.875 0z"
        fill="rgba(0,0,0,0.6)"
      />
    </Svg>
  );
}

export default SvgComponent;
