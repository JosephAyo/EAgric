import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, RefreshControl} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import StoryPreview from '../../components/organisms/Story/StoryPreview';

import dummyData from '../../assets/dummy_data/news.json';
const Home = (props) => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const fullReadHandler = (url) => {
    props.navigation.navigate('NewsStory', {
      url: url,
    });
  };

  const refreshHandler = () => {
    setState({...state, isLoading: true});
    setTimeout(() => {
      setState({...state, isLoading: false});
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="NEWS FEED" navigation={props.navigation} />
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
      </View>
    </SafeAreaView>
  );
};

export default Home;
