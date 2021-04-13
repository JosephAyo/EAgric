import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';

const PreChat = (props) => {
  const onPressHandler = () => {
    props.navigation.navigate('ChatRoom');
  };
  return (
    <SafeAreaView style={[styles.container, styles.chat_preamble_container]}>
      <Header screenName="CHAT" navigation={props.navigation} />
      <View>
        <View style={styles.chat_preamble}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onPressHandler()}>
            <Text>Click to enter chats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreChat;
