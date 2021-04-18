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

export {getUser};
