import React from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  View,
  BackHandler,
  FlatList,
} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
const Weather = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="WEATHER" />
      <View style={styles.top_content}>
        <Text>Weather is here...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Weather;
