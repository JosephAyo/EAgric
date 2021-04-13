import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

import LeafMenu from '../../../assets/icons/leaf_menu';
import HarmburgerIcon from '../../../assets/icons/hamburger';
import {BackIcon} from '../../../assets/icons/back';
const Header = (props) => {
  const drawerHandler = () => {
    const {navigation} = props;
    if (navigation.openDrawer) {
      props.navigation.openDrawer();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.side_option_view}>
        {props.isBack ? (
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => drawerHandler()}>
            <HarmburgerIcon />
          </TouchableOpacity>
        )}
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
