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
const Chat = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="CHAT" />
      <View style={styles.top_content}>
        <Text>Chat is here...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
