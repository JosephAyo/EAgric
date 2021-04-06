import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import MainView from '../../components/atoms/Weather/MainView';
import MoreView from '../../components/atoms/Weather/MoreView';
import Preview from '../../components/atoms/Weather/Preview';

import weatherDummyData from '../../assets/dummy_data/weather.json';
const Weather = (props) => {
  const [state, setState] = useState(weatherDummyData[0]);
  const viewCityWeatherHandler = (weather) => {
    setState(weather);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="WEATHER" />
      <View style={styles.top_content}>
        <MainView currentMain={state} />
        <MoreView currentMain={state} />
        <FlatList
          data={weatherDummyData}
          renderItem={(item) => (
            <Preview
              data={item}
              onViewPress={(weather) => viewCityWeatherHandler(weather)}
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

export default Weather;
