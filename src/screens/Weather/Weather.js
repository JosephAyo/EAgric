import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, RefreshControl} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import MainView from '../../components/atoms/Weather/MainView';
import MoreView from '../../components/atoms/Weather/MoreView';
import Preview from '../../components/atoms/Weather/Preview';

import weatherDummyData from '../../assets/dummy_data/weather.json';
const Weather = (props) => {
  const [state, setState] = useState({
    weatherData: weatherDummyData[0],
    isLoading: false,
  });
  const viewCityWeatherHandler = (weather) => {
    setState(weather);
  };
  const refreshHandler = () => {
    setState({...state, isLoading: true});
    setTimeout(() => {
      setState({...state, isLoading: false});
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        screenName="WEATHER"
        navigation={props.navigation}
        canRefresh
        onTriggerRefresh={() => refreshHandler()}
      />
      <View style={styles.top_content}>
        <MainView currentMain={state.weatherData} />
        <MoreView currentMain={state.weatherData} />
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

export default Weather;
