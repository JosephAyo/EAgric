import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

import ViewMoreIcon from '../../../assets/icons/view_more';
import ClockIcon from '../../../assets/icons/clock';
import moment from 'moment';

const StoryPreview = ({data, onReadPress}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.panel_image}
        source={{
          uri:
            data.item.urlToImage ||
            'https://i.picsum.photos/id/159/200/200.jpg?hmac=yMGKiL5NWrcdgRoltkx_OXTy3PFWYkM6T-cWFmXQULE',
        }}
      />
      <View style={styles.article_title_view}>
        <Text style={styles.article_title}>
          {data.item.title.toUpperCase()}
        </Text>
      </View>
      <View style={styles.article_info}>
        <ClockIcon />
        <Text style={styles.published_at}>
          {moment(data.item.publishedAt).format('DD/MM/YYYY')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onReadPress(data.item.url)}
        activeOpacity={0.6}>
        <ViewMoreIcon />
      </TouchableOpacity>
    </View>
  );
};

export default StoryPreview;
