import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.241}
      height={30}
      viewBox="0 0 23.241 30"
      {...props}>
      <Path
        data-name="Icon weather-humidity"
        d="M0 18.395a12.487 12.487 0 011.128-4.747 26.679 26.679 0 012.918-5.2 57.092 57.092 0 016.367-7.324l1.176-1.129a10.039 10.039 0 001.3 1.129c.643.659 1.631 1.741 2.948 3.278s2.462 2.9 3.4 4.156a27.865 27.865 0 012.838 5.1 12.431 12.431 0 011.16 4.752 11.244 11.244 0 01-.91 4.485 11.655 11.655 0 01-10.742 7.1 11.506 11.506 0 01-4.485-.894 11.331 11.331 0 01-3.7-2.431 11.682 11.682 0 01-3.4-8.28zM3.544 13.8a5.328 5.328 0 00.815 3.121 2.866 2.866 0 002.493 1.16 2.924 2.924 0 002.525-1.16 5.376 5.376 0 00.847-3.121 5.465 5.465 0 00-.847-3.136 2.905 2.905 0 00-2.525-1.16 2.866 2.866 0 00-2.493 1.16 5.348 5.348 0 00-.815 3.136zm2.462 0v-.552c0-.125.016-.3.031-.518a1.761 1.761 0 01.078-.5c.047-.11.078-.251.141-.376a.616.616 0 01.235-.282.687.687 0 01.361-.094.7.7 0 01.518.188 1.111 1.111 0 01.267.6c.047.282.078.5.094.706s.016.47.016.815c0 .361 0 .627-.016.815s-.047.423-.094.706a1.111 1.111 0 01-.267.6.7.7 0 01-.518.188.687.687 0 01-.361-.094.526.526 0 01-.235-.282 2.256 2.256 0 01-.141-.376 3.083 3.083 0 01-.078-.5c-.016-.22-.031-.392-.031-.5V13.8zm.922 12.154h2.07l7.83-16.843H14.71zm6.743-4.689a5.466 5.466 0 00.863 3.136 2.9 2.9 0 002.509 1.16 2.876 2.876 0 002.509-1.16 5.43 5.43 0 00.831-3.136 5.377 5.377 0 00-.831-3.121 2.876 2.876 0 00-2.509-1.16 2.9 2.9 0 00-2.509 1.16 5.263 5.263 0 00-.859 3.121zm2.462 0c0-.361 0-.627.016-.815s.047-.423.094-.706a1.057 1.057 0 01.267-.6.7.7 0 01.518-.188.745.745 0 01.376.094.6.6 0 01.251.3c.063.141.11.267.157.376a1.761 1.761 0 01.078.5l.016.5v1.082l-.016.5-.078.5-.157.376-.251.3-.376.094a.7.7 0 01-.518-.188 1.111 1.111 0 01-.267-.6q-.071-.423-.094-.706c-.012-.176-.012-.458-.012-.819z"
        fill="rgba(0,0,0,0.6)"
      />
    </Svg>
  );
}

export default SvgComponent;