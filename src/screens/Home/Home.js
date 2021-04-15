import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, View, FlatList, RefreshControl, Text} from 'react-native';
import Header from '../../components/molecules/Header/Header';
import StoryPreview from '../../components/organisms/Story/StoryPreview';
import styles from './style';

import dummyData from '../../assets/dummy_data/news.json';
import ErrorToast from '../../components/atoms/Toasts/ErrorToast';
import SuccessToast from '../../components/atoms/Toasts/SuccessToast';
import {showToast} from '../../helpers/toast';

import {useQuery} from 'react-query';
import {fetchNews} from '../../queries/news';
const Home = (props) => {
  const [state, setState] = useState({
    isLoading: false,
  });

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
            <View>
              <Text>Empty</Text>
            </View>
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
