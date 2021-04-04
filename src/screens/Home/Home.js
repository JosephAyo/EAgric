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
const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="NEWS FEED" />
      <View style={styles.top_content}>
        <Text>Home is here...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
