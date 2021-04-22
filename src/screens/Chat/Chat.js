import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  Text,
} from 'react-native';
import styles from './style';
import {Colors} from '../../style/index';

import Header from '../../components/molecules/Header/Header';

import SendIcon from '../../assets/icons/send_message';

import MessageBox from '../../components/atoms/Chat/MessageBox';

import ErrorToast from '../../components/atoms/Toasts/ErrorToast';
import SuccessToast from '../../components/atoms/Toasts/SuccessToast';
import {showToast} from '../../helpers/toast';
import firestore from '@react-native-firebase/firestore';

import {sendMessage} from '../../services/firebase';
import {getUser} from '../../helpers/user';
import EmptyFlatlist from '../../components/atoms/Empty/EmptyFlatlist';

const Chat = ({navigation}) => {
  const [state, setState] = useState({
    text: '',
    height: 0,
  });
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [inputHeight, setInputHeight] = useState(48);
  const [isResolved, setResolve] = useState(false);

  const successToastRef = useRef(null);
  const errorToastRef = useRef(null);

  useEffect(() => {
    async function fetchUser() {
      const foundUser = await getUser();
      if (foundUser) {
        setUser(foundUser);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('chats_thread')
      .orderBy('time_sent', 'desc')
      .onSnapshot((documentSnapshot) => {
        setMessages(documentSnapshot.docs);
        setResolve(true);
      });
    return () => subscriber();
  }, [isResolved]);

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

  const sendMessageHandler = async () => {
    const text = state.text.trim();
    setState({...state, text: ''});
    if (text.length > 0) {
      const sentMessage = await sendMessage(text);
      if (!sentMessage) {
        showToast(errorToastRef, 'failed to send message');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        screenName="CHAT"
        isBack={true}
        navigation={navigation}
        canRefresh={false}
      />
      <View style={styles.top_content}>
        <FlatList
          data={messages}
          renderItem={(item) => (
            <MessageBox
              data={item}
              isSent={item.item.data().user_id === user?._id}
            />
          )}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          removeClippedSubviews={false}
          inverted={true}
          ListEmptyComponent={
            <EmptyFlatlist title="messages" heightOffset={0.2} isInverted />
          }
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
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => sendMessageHandler()}>
                <SendIcon />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <SuccessToast setRef={(toast) => (successToastRef.current = toast)} />
        <ErrorToast setRef={(toast) => (errorToastRef.current = toast)} />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
