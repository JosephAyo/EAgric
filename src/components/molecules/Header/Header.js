import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

import LeafMenu from '../../../assets/icons/leaf_menu';
import Harmburger from '../../../assets/icons/hamburger';
const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.side_option_view}>
        <TouchableOpacity>
          <Harmburger />
        </TouchableOpacity>
      </View>
      <View style={styles.screen_name_view}>
        <Text style={styles.screen_name_text}>{props.screenName}</Text>
      </View>
      <View style={styles.side_option_view}>
        <TouchableOpacity>
          <LeafMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
