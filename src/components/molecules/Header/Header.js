import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Menu, Divider} from 'react-native-paper';
import LeafMenu from '../../../assets/icons/leaf_menu';
import styles from './style';
import HarmburgerIcon from '../../../assets/icons/hamburger';
import {BackIcon} from '../../../assets/icons/back';

const Header = (props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => (props.canRefresh ? setVisible(true) : null);

  const closeMenu = () => setVisible(false);
  const drawerHandler = () => {
    const {navigation} = props;
    if (navigation.openDrawer) {
      props.navigation.openDrawer();
    }
  };

  const handleTriggerRefresh = () => {
    setVisible(false);
    props.onTriggerRefresh();
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
        <Menu
          visible={visible}
          onDismiss={() => closeMenu()}
          anchor={
            <TouchableOpacity activeOpacity={0.6} onPress={() => openMenu()}>
              <LeafMenu />
            </TouchableOpacity>
          }>
          <Menu.Item onPress={() => handleTriggerRefresh()} title="Refresh" />
        </Menu>
      </View>
    </View>
  );
};

export default Header;
