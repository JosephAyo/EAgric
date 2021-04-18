import React, {useRef, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  FlatList,
  RefreshControl,
  Text,
  Alert,
  BackHandler,
} from 'react-native';
import Header from '../../components/molecules/Header/Header';
import StoryPreview from '../../components/organisms/Story/StoryPreview';
import styles from './style';

import ErrorToast from '../../components/atoms/Toasts/ErrorToast';
import SuccessToast from '../../components/atoms/Toasts/SuccessToast';
import {showToast} from '../../helpers/toast';

import {useQuery} from 'react-query';
import {fetchNews} from '../../queries/news';
import EmptyFlatlist from '../../components/atoms/Empty/EmptyFlatlist';
const Home = (props) => {
  const isFocused = useIsFocused();

  const {
    data,
    refetch,
    isLoading,
    isFetching,
    isError,
    isLoadingError,
    isRefetchError,
    isSuccess,
    isFetchedAfterMount,
  } = useQuery('news', fetchNews, {
    refetchInterval: 1000 * 600,
  });

  const successToastRef = useRef(null);
  const errorToastRef = useRef(null);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    }
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isFocused]);

  useEffect(() => {
    if (isSuccess || isFetchedAfterMount) {
      showToast(successToastRef, 'news feed fetched');
    }
  }, [isSuccess, isFetching, isFetchedAfterMount]);

  useEffect(() => {
    if (isLoadingError || isRefetchError || isError) {
      showToast(errorToastRef, 'error fetching news feed');
    }
  }, [isLoadingError, isRefetchError, isError]);

  const fullReadHandler = (url) => {
    props.navigation.navigate('NewsStory', {
      url: url,
    });
  };

  const refreshHandler = () => {
    refetch();
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
          data={data?.articles}
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
              refreshing={isLoading || isFetching}
              onRefresh={() => refreshHandler()}
            />
          }
          ListEmptyComponent={
            <EmptyFlatlist title="news feed" heightOffset={0.6} />
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
