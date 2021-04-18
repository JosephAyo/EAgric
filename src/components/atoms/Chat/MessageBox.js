import moment from 'moment';
import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const MessageBox = ({data, isSent}) => {
  const {text, time_sent} = data.item.data();
  return (
    <View
      style={[
        styles.container,
        isSent ? styles.container_sent : styles.container_received,
      ]}>
      <View
        style={[
          styles.dialog_box,
          isSent ? styles.dialog_box_sent : styles.dialog_box_received,
        ]}>
        <Text style={styles.dialog_text} selectable={true}>
          {text}
        </Text>
        <View style={styles.time_sent_view}>
          <Text style={styles.time_sent_text}>
            {moment(time_sent).format('ddd, H:mm')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MessageBox;
