import {PermissionsAndroid, ToastAndroid} from 'react-native';

const checkPermissions = async () => {
  const granted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (granted) {
    return true;
  }
  return false;
};

const requestPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      ToastAndroid.showWithGravity(
        'Allow location to view weather in your current location',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export {checkPermissions, requestPermissions};
