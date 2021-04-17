import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ChatHomeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={27.692}
      viewBox="0 0 30 27.692"
      {...props}>
      <G data-name="Icon ionic-md-chatboxes" fill={props.color || '#ddd'}>
        <Path
          data-name="Path 1"
          d="M24.156 0H.675A.677.677 0 000 .574v15.062a.705.705 0 00.675.606h4.036v6.25l6.337-6.25h13.108a.568.568 0 00.524-.606V.574A.538.538 0 0024.156 0z"
        />
        <Path
          data-name="Path 2"
          d="M29.465 5.122h-2.277v11.712c0 1.124-.486 1.858-1.768 1.858H12.71l-2.735 2.742h9.119l6.336 6.258v-6.258h4.035a.58.58 0 00.535-.61V5.762a.608.608 0 00-.535-.64z"
        />
      </G>
    </Svg>
  );
}

function ChatDrawerIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={27.692}
      viewBox="0 0 30 27.692"
      {...props}>
      <G data-name="Icon ionic-md-chatboxes" fill={props.color || '#ddd'}>
        <Path
          data-name="Path 1"
          d="M24.156 0H.675A.677.677 0 000 .574v15.062a.705.705 0 00.675.606h4.036v6.25l6.337-6.25h13.108a.568.568 0 00.524-.606V.574A.538.538 0 0024.156 0z"
        />
        <Path
          data-name="Path 2"
          d="M29.465 5.122h-2.277v11.712c0 1.124-.486 1.858-1.768 1.858H12.71l-2.735 2.742h9.119l6.336 6.258v-6.258h4.035a.58.58 0 00.535-.61V5.762a.608.608 0 00-.535-.64z"
        />
      </G>
    </Svg>
  );
}
export {ChatHomeIcon, ChatDrawerIcon};
