import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import styles from './style';
import {Colors} from '../../style/index';

import Header from '../../components/molecules/Header/Header';

import Preview from '../../components/atoms/Weather/Preview';
import SendIcon from '../../assets/icons/send_message';

import weatherDummyData from '../../assets/dummy_data/weather.json';
const Chat = ({navigation}) => {
  const [state, setState] = useState({
    text: '',
    height: 0,
  });
  const [inputHeight, setInputHeight] = useState(48);

  const textChangeHandler = (text) => {
    setState({
      ...state,
      text: text,
    });
  };
  const contentSizeChangeHandler = (event) => {
    const {height} = event.nativeEvent.contentSize;
    if (height > 39 && height < 107) {
      setInputHeight(event.nativeEvent.contentSize.height);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="CHAT" isBack={true} navigation={navigation} />
      <View style={styles.top_content}>
        <FlatList
          data={weatherDummyData}
          renderItem={(item) => <Preview data={item} />}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
        <KeyboardAvoidingView>
          <View style={[styles.interact_view]}>
            <View style={styles.text_input_view}>
              <TextInput
                placeholder="Say something..."
                value={state.text}
                style={[styles.text_input, {height: inputHeight}]}
                placeholderTextColor={Colors.SHADED_TEXT}
                onChangeText={(text) => {
                  textChangeHandler(text);
                }}
                onContentSizeChange={(event) => contentSizeChangeHandler(event)}
                multiline={true}
                numberOfLines={5}
              />
            </View>
            <View style={styles.send_icon_view}>
              <TouchableOpacity activeOpacity={0.6}>
                <SendIcon />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
