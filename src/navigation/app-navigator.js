import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Weather from '../screens/Weather/Weather';
import Chat from '../screens/Chat/Chat';
import NewsStory from '../screens/NewsStory/NewsStory';
import styles from './style';
import {NewsIcon} from '../assets/icons/news';
import {ChatHomeIcon} from '../assets/icons/chat';
import {WeatherHomeIcon} from '../assets/icons/weather';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTab() {
  return (
    <Tab.Navigator barStyle={styles.barStyle} shifting={true}>
      <Tab.Screen
        name="Home"
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
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => <ChatHomeIcon color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={MyTab} />
      <Stack.Screen name="NewsStory" component={NewsStory} />
    </Stack.Navigator>
  );
}

export default MyStack;
