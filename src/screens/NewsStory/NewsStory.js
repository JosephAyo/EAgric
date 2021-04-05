import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './style';
import {WebView} from 'react-native-webview';
import Header from '../../components/molecules/Header/Header';
import Loading from '../../components/atoms/Loading/Loading';

const NewsStory = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="STORY" isBack={true} navigation={navigation} />
      <View style={styles.top_content}>
        <WebView
          style={styles.main_article_webview}
          originWhitelist={['*']}
          source={{uri: route.params.url}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewsStory;
