import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {BackHandler, SafeAreaView, View} from 'react-native';
import styles from './style';
import PowerIcon from '../assets/icons/power';
const DrawerContent = (props) => {
  return (
    <SafeAreaView style={styles.drawer_content_container}>
      <DrawerContentScrollView
        {...props}
        style={styles.drawer_content_scroll_view}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label="Exit"
        onPress={() => BackHandler.exitApp()}
        style={styles.exit}
        labelStyle={styles.exit_label}
        icon={({focused, size, color}) => <PowerIcon size={25} />}
      />
    </SafeAreaView>
  );
};

export default DrawerContent;
