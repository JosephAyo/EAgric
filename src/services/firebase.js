import firestore from '@react-native-firebase/firestore';
import {parseMessage} from '../helpers/message';

const getMessage = async (text) => {
  try {
    let data;
    const subscriber = firestore()
      .collection('chats_thread')
      .orderBy('time_sent', 'desc')
      .onSnapshot((documentSnapshot) => {
        console.log('User data: ', documentSnapshot.data());
        data = documentSnapshot.data();
      });
    return {subscriber, data};
  } catch (error) {
    console.log('message not sent', error);
    return null;
  }
};

const sendMessage = async (text) => {
  try {
    const parsedMessage = await parseMessage(text);
    const message = await firestore()
      .collection('chats_thread')
      .add(parsedMessage);
    if (message) {
      return true;
    }
    return null;
  } catch (error) {
    console.log('message not sent', error);
    return null;
  }
};

export {getMessage, sendMessage};
