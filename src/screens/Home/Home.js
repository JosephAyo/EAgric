import React, {useState, useRef} from 'react';
import {SafeAreaView, View, FlatList, RefreshControl} from 'react-native';
import Header from '../../components/molecules/Header/Header';
import StoryPreview from '../../components/organisms/Story/StoryPreview';
import styles from './style';

import dummyData from '../../assets/dummy_data/news.json';
import ErrorToast from '../../components/atoms/Toasts/ErrorToast';
import SuccessToast from '../../components/atoms/Toasts/SuccessToast';
import {showToast} from '../../helpers/toast';
const Home = (props) => {
  const [state, setState] = useState({
    isLoading: false,
  });

  const successToastRef = useRef(null);
  const errorToastRef = useRef(null);

  const fullReadHandler = (url) => {
    props.navigation.navigate('NewsStory', {
      url: url,
    });
  };

  const refreshHandler = () => {
    setState({...state, isLoading: true});
    setTimeout(() => {
      setState({...state, isLoading: false});
      showToast(successToastRef, 'news feed refreshed');
      // showToast(errorToastRef, 'failed');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        screenName="NEWS FEED"
        navigation={props.navigation}
        canRefresh
        onTriggerRefresh={() => refreshHandler()}
      />
      <View style={styles.top_content}>
        <FlatList
          data={dummyData.articles}
          renderItem={(item) => (
            <StoryPreview
              data={item}
              onReadPress={(url) => fullReadHandler(url)}
            />
          )}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={state.isLoading}
              onRefresh={() => refreshHandler()}
            />
          }
          contentContainerStyle={styles.contentContainer}
        />
        <SuccessToast setRef={(toast) => (successToastRef.current = toast)} />
        <ErrorToast setRef={(toast) => (errorToastRef.current = toast)} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
