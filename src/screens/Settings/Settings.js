import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import CheckIcon from '../../assets/icons/check';
import {getUser, setChatUsername} from '../../helpers/user';
import ErrorToast from '../../components/atoms/Toasts/ErrorToast';
import SuccessToast from '../../components/atoms/Toasts/SuccessToast';
import {showToast} from '../../helpers/toast';
import {Colors} from '../../style';

const Settings = (props) => {
  const [username, setUsername] = useState('');
  const [canEdit, setCanEdit] = useState(false);
  const successToastRef = useRef(null);
  const errorToastRef = useRef(null);
  const textInputRef = useRef(null);
  useEffect(() => {
    const checkCurrentUsername = async () => {
      const foundUser = await getUser();
      if (foundUser) {
        setUsername(foundUser.username);
        setCanEdit(true);
      }
    };
    checkCurrentUsername();
  }, []);
  const textChangeHandler = (text) => {
    setUsername(text);
  };
  const submitHandler = async () => {
    const validUsernameRegex = /^[a-zA-Z0-9_]{2,15}$/;
    const trimmedUsername = username.trim();
    if (validUsernameRegex.test(trimmedUsername)) {
      const isSet = await setChatUsername(trimmedUsername);
      if (isSet) {
        Keyboard.dismiss();
        showToast(successToastRef, 'username changed');
      }
    } else {
      showToast(errorToastRef, 'username should follow the stated guidelines');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="SETTINGS" navigation={props.navigation} />
      <View style={styles.top_content}>
        <View style={styles.form}>
          <View style={styles.input_view}>
            <TextInput
              ref={(ref) => {
                textInputRef.current = ref;
              }}
              placeholder="Your username"
              value={username}
              onChangeText={(text) => {
                textChangeHandler(text);
              }}
              editable={canEdit}
              style={styles.text_input_neutral}
              autoCompleteType="username"
              maxLength={15}
              autoFocus={true}
              underlineColorAndroid={Colors.PRIMARY}
              selectTextOnFocus={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.6} onPress={() => submitHandler()}>
            <View style={styles.btn}>
              <CheckIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.description_view}>
          <Text style={styles.description_text}>
            Your username should have a length between 2 to 15 characters and
            must contain only alphanumeric characters which includes any of the
            following: 0-9, a-z, A-Z or underscores.
          </Text>
        </View>
        <SuccessToast setRef={(toast) => (successToastRef.current = toast)} />
        <ErrorToast setRef={(toast) => (errorToastRef.current = toast)} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
