import React, {useEffect, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {StatusBar} from 'react-native';
import styles from './style';
import {Colors} from '../../style/index';
import RNBootSplash from 'react-native-bootsplash';
import {boardApp} from '../../helpers/board';

const StartUp = ({navigation}) => {
  const checkBoardedHandler = useCallback(async () => {
    await boardApp();
    navigation.navigate('Drawer');
  }, [navigation]);
  useEffect(() => {
    checkBoardedHandler();
    RNBootSplash.hide({fade: true});
  }, [checkBoardedHandler]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
      <ActivityIndicator size={50} color={Colors.PRIMARY} />
    </View>
  );
};

export default StartUp;
