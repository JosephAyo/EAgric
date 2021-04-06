import React from 'react';
import {View, Text} from 'react-native';
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
import Humidity from '../../../assets/icons/humidity';
import Temperature from '../../../assets/icons/temperature';
import Wind from '../../../assets/icons/wind';

const MoreItem = ({icon, parameter, value}) => {
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

const MoreView = ({currentMain}) => {
  return (
    <View style={[styles.container, styles.more_container]}>
      <BoxShadow setting={shadowOpt}>
        <View style={[styles.details_view, styles.more_details_view]}>
          <MoreItem
            icon={Humidity}
            parameter="Humidity"
            value={currentMain.main.humidity + '%'}
          />
          <MoreItem
            icon={Temperature}
            parameter="Temperature"
            value={currentMain.main.temp + '\u00b0' + 'C'}
          />
          <MoreItem
            icon={Wind}
            parameter="Wind"
            value={currentMain.wind.speed + 'km/h'}
          />
        </View>
      </BoxShadow>
    </View>
  );
};

export default MoreView;
