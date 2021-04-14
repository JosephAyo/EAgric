import React, {useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './style';
import {WebView} from 'react-native-webview';

import Header from '../../components/molecules/Header/Header';
import Loading from '../../components/atoms/Loading/Loading';
import ErrorToast from '../../components/atoms/Toasts/ErrorToast';

import {showToast} from '../../helpers/toast';

const NewsStory = ({route, navigation}) => {
  const errorToastRef = useRef(null);
  const errorHandler = (event) => {
    const {nativeEvent} = event;
    showToast(errorToastRef, nativeEvent.description);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        screenName="STORY"
        isBack={true}
        navigation={navigation}
        canRefresh={false}
      />
      <View style={styles.top_content}>
        <WebView
          style={styles.main_article_webview}
          originWhitelist={['*']}
          source={{uri: route.params.url}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onError={(event) => errorHandler(event)}
        />
        <ErrorToast setRef={(toast) => (errorToastRef.current = toast)} />
      </View>
    </SafeAreaView>
  );
};

export default NewsStory;
