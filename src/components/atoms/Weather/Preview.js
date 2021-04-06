import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const Preview = ({data, onViewPress}) => {
  const {item} = data;
  return (
    <View style={[styles.container, styles.preview_container]}>
      <View style={styles.preview_weather_city}>
        <Text style={styles.preview_weather_city_name}>{item.name}</Text>
      </View>
      <View style={styles.preview_weather_detail}>
        <View style={styles.weather_icon_view}>
          <Image
            style={styles.preview_weather_icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
            }}
          />
        </View>
        <View style={styles.preview_weather_description}>
          <Text style={styles.preview_weather_description_text}>
            {item.weather[0].description}
          </Text>
        </View>
      </View>
      <View style={styles.preview_view}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onViewPress(data.item)}>
          <View style={styles.view_touchable}>
            <Text style={styles.view_touchable_text}>view</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Preview;
