import React from 'react';
import {View, Text, Image} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import styles from './style';
import {Dimensions} from '../../../style/index';

const shadowOpt = {
  width: Dimensions.WIDTH * 0.9,
  height: 140,
  color: '#000',
  border: 6,
  radius: Dimensions.WIDTH * 0.9 * 0.1,
  opacity: 0.2,
  x: 0,
  y: 3,
};
import CityNameLeaf from '../../../assets/icons/city_name_leaf';
const MainView = ({currentMain}) => {
  return (
    <View style={styles.container}>
      <View style={styles.city_name_view}>
        <CityNameLeaf height={60} style={styles.city_name_view_bg} />
        <Text style={styles.city_name_text}>
          {currentMain.name.toUpperCase()}
        </Text>
      </View>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.details_view}>
          <View style={styles.weather_icon_view}>
            <Image
              style={styles.weather_icon}
              source={{
                uri: `http://openweathermap.org/img/wn/${currentMain.weather[0].icon}@4x.png`,
              }}
            />
          </View>
          <View style={styles.weather_description_view}>
            <Text style={styles.description_text}>
              {currentMain.weather[0].description}
            </Text>
            <View style={styles.temperature_view}>
              <Text style={styles.min_max_text}>min: </Text>
              <Text style={styles.values_text}>
                {currentMain.main.temp_min}
                {'\u00b0'}C
              </Text>
            </View>
            <View style={styles.temperature_view}>
              <Text style={styles.min_max_text}>max: </Text>
              <Text style={styles.values_text}>
                {currentMain.main.temp_max}
                {'\u00b0'}C
              </Text>
            </View>
          </View>
        </View>
      </BoxShadow>
    </View>
  );
};

export default MainView;
