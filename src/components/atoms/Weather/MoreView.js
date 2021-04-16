import React from 'react';
import {View, Text} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import styles from './style';
import {Dimensions} from '../../../style/index';

const shadowOpt = {
  width: Dimensions.WIDTH * 0.9,
  height: 160,
  color: '#000',
  border: 6,
  radius: Dimensions.WIDTH * 0.9 * 0.1,
  opacity: 0.2,
  x: 0,
  y: 3,
};

import Humidity from '../../../assets/icons/humidity';
import Temperature from '../../../assets/icons/temperature';
import Wind from '../../../assets/icons/wind';
import Sunrise from '../../../assets/icons/sunrise';
import Sunset from '../../../assets/icons/sunset';
import moment from 'moment';

const MoreItemA = ({icon, parameter, value}) => {
  const Icon = icon;
  return (
    <View style={styles.more_item}>
      <Icon />
      <View style={styles.more_item_description}>
        <Text style={styles.more_value_text}>{value}</Text>
        <Text style={styles.more_description_text}>{parameter}</Text>
      </View>
    </View>
  );
};

const MoreItemB = ({icon, parameter, value}) => {
  const Icon = icon;
  return (
    <View style={[styles.more_item, styles.more_item_b]}>
      <Icon />
      <View style={styles.more_item_description_b}>
        <Text style={styles.more_value_text}>{value}</Text>
        <Text style={styles.more_description_text}>{parameter}</Text>
      </View>
    </View>
  );
};

const MoreView = ({currentMain}) => {
  return (
    <View style={[styles.container, styles.more_container]}>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.more_details_card}>
          <View style={[styles.more_details_view]}>
            <MoreItemA
              icon={Humidity}
              parameter="Humidity"
              value={currentMain.main.humidity + '%'}
            />
            <MoreItemA
              icon={Temperature}
              parameter="Temperature"
              value={currentMain.main.temp + '\u00b0' + 'C'}
            />
            <MoreItemA
              icon={Wind}
              parameter="Wind"
              value={currentMain.wind.speed + 'km/h'}
            />
          </View>
          <View style={[styles.top_border]} />
          <View style={[styles.more_details_view, styles.more_details_view_b]}>
            <MoreItemB
              icon={Sunrise}
              parameter="Sunrise"
              value={
                moment(currentMain.sys.sunrise).isValid()
                  ? moment(currentMain.sys.sunrise).format('h:mm')
                  : '-'
              }
            />
            <MoreItemB
              icon={Sunset}
              parameter="Sunset"
              value={
                moment(currentMain.sys.sunset).isValid()
                  ? moment(currentMain.sys.sunset).format('H:mm')
                  : '-'
              }
            />
          </View>
        </View>
      </BoxShadow>
    </View>
  );
};

export default MoreView;
