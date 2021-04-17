import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={10.721}
      viewBox="0 0 11 10.721"
      {...props}>
      <Path
        data-name="Icon awesome-arrow-right"
        d="M4.677.718l.545-.545a.587.587 0 01.832 0l4.773 4.77a.587.587 0 010 .832l-4.773 4.778a.587.587 0 01-.832 0l-.545-.545a.59.59 0 01.01-.842l2.958-2.823H.589A.588.588 0 010 5.753v-.785a.588.588 0 01.589-.589h7.056L4.687 1.56a.586.586 0 01-.01-.842z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
