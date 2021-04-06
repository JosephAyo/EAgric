import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import StoryPreview from '../../components/organisms/Story/StoryPreview';

import dummyData from '../../assets/dummy_data/news.json';
const Home = (props) => {
  const fullReadHandler = (url) => {
    props.navigation.navigate('NewsStory', {
      url: url,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="NEWS FEED" />
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
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
