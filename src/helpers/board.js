import AsyncStorage from '@react-native-async-storage/async-storage';
import keygenerator from 'keygenerator';

const boardApp = async () => {
  try {
    const boardedUser = await checkBoarded();
    if (boardedUser) {
      return boardedUser;
    }
    const user = {
      _id: keygenerator._(),
      username: 'anon' + keygenerator.number({length: 4}),
    };
    await AsyncStorage.setItem('eagric_user', JSON.stringify(user));
  } catch (error) {
    console.log('app boarding error', error);
  }
};

const checkBoarded = async () => {
  try {
    const value = await AsyncStorage.getItem('eagric_user');
    return value;
  } catch (error) {
    console.log('app check boarding error', error);
    return null;
  }
};

export {boardApp, checkBoarded};
