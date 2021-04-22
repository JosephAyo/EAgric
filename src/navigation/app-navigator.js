import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Weather from '../screens/Weather/Weather';
import Chat from '../screens/Chat/Chat';
import PreChat from '../screens/Chat/PreChat';
import NewsStory from '../screens/NewsStory/NewsStory';
import DrawerContent from './DrawerContent';
import styles from './style';
import {NewsIcon} from '../assets/icons/news';
import {ChatDrawerIcon, ChatHomeIcon} from '../assets/icons/chat';
import {WeatherHomeIcon} from '../assets/icons/weather';
import HomeIcon from '../assets/icons/home';
import {Colors} from '../style/index';
import StartUp from '../screens/StartUp/StartUp';
import SettingsIcon from '../assets/icons/settings';
import Settings from '../screens/Settings/Settings';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyTab() {
  return (
    <Tab.Navigator barStyle={styles.barStyle} shifting={true}>
      <Tab.Screen
        name="News"
        component={Home}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color}) => <NewsIcon color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarLabel: 'Weather',
          tabBarIcon: ({color}) => <WeatherHomeIcon color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Guidelines"
        component={PreChat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => <ChatHomeIcon color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="E-Agric"
      drawerContent={(props) => DrawerContent(props)}
      drawerContentOptions={{
        activeTintColor: Colors.PRIMARY,
        activeBackgroundColor: Colors.WHITE,
        itemStyle: styles.drawer_item,
      }}
      backBehavior={'history'}
      drawerStyle={styles.drawer}>
      <Drawer.Screen
        name="E-Agric"
        component={MyTab}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <View style={styles.drawer_icon_container}>
              <View style={focused ? styles.focused_drawer_item : null} />
              <HomeIcon color={color} size={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <View style={styles.drawer_icon_container}>
              <View style={focused ? styles.focused_drawer_item : null} />
              <ChatDrawerIcon color={color} width={25} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <View style={styles.drawer_icon_container}>
              <View style={focused ? styles.focused_drawer_item : null} />
              <SettingsIcon color={color} size={25} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
      <Stack.Screen name="NewsStory" component={NewsStory} />
    </Stack.Navigator>
  );
}
export default MyStack;
