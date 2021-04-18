import React, {useState, useRef, useEffect, useCallback} from 'react';
import {SafeAreaView, View, FlatList, RefreshControl, Text} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import MainView from '../../components/atoms/Weather/MainView';
import MoreView from '../../components/atoms/Weather/MoreView';
import Preview from '../../components/atoms/Weather/Preview';

import ErrorToast from '../../components/atoms/Toasts/ErrorToast';
import SuccessToast from '../../components/atoms/Toasts/SuccessToast';
import {showToast} from '../../helpers/toast';
import {useQuery} from 'react-query';
import {fetchAllWeather} from '../../queries/weather';
const Weather = (props) => {
  const [state, setState] = useState({
    weatherData: {
      coord: {
        lon: 5.1931,
        lat: 7.2526,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      base: 'stations',
      main: {
        temp: '-',
        feels_like: '-',
        temp_min: '-',
        temp_max: '-',
        pressure: '-',
        humidity: '-',
        sea_level: '-',
        grnd_level: '-',
      },
      visibility: '-',
      wind: {
        speed: '-',
        deg: '-',
        gust: '-',
      },
      clouds: {
        all: '-',
      },
      dt: '-',
      sys: {
        country: 'NG',
        sunrise: '-',
        sunset: '-',
      },
      timezone: '-',
      id: '-',
      name: '-',
      cod: '-',
    },
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
  } = useQuery('weather', fetchAllWeather, {
    refetchInterval: 1000 * 600,
  });
  const successToastRef = useRef(null);
  const errorToastRef = useRef(null);

  useEffect(() => {
    const checkBoardedHandler = () => {
      setState({weatherData: data[0]});
    };
    if ((isSuccess || isFetchedAfterMount) && data) {
      showToast(successToastRef, 'weather fetched');
      checkBoardedHandler();
    }
  }, [isSuccess, isFetching, isFetchedAfterMount, data]);

  useEffect(() => {
    if (isLoadingError || isRefetchError || isError) {
      showToast(errorToastRef, 'error fetching weather');
    }
  }, [isLoadingError, isRefetchError, isError]);

  const viewCityWeatherHandler = (weather) => {
    setState({...state, weatherData: weather});
  };

  const refreshHandler = () => {
    refetch();
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
          data={data}
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

export default Weather;
