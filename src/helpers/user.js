import AsyncStorage from '@react-native-async-storage/async-storage';

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('eagric_user');
    return JSON.parse(user);
  } catch (error) {
    console.log('app boarding error', error);
    return null;
  }
};

const setChatUsername = async (username) => {
  try {
    const user = await AsyncStorage.getItem('eagric_user');
    let modifiedUser = JSON.parse(user);
    modifiedUser.username = username;
    await AsyncStorage.setItem('eagric_user', JSON.stringify(modifiedUser));
    return true;
  } catch (error) {
    console.log('app boarding error', error);
    return null;
  }
};
export {getUser, setChatUsername};
