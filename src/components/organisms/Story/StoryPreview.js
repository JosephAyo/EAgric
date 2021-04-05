import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

import ViewMore from '../../../assets/icons/view_more';

const StoryPreview = ({data, fullReadHandler}) => {
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
        <Text style={styles.article_title}>{data.item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => fullReadHandler(data.item.url)}
        activeOpacity={0.6}>
        <ViewMore />
      </TouchableOpacity>
    </View>
  );
};

export default StoryPreview;
