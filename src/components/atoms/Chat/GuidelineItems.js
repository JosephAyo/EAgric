import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ViewMoreIcon from '../../../assets/icons/view_more_guidline';
import ViewLessIcon from '../../../assets/icons/view_less_guidline';
import styles from '../../../screens/Chat/style';

const GuidelineItems = ({data}) => {
  const {title, content} = data.item;
  const [state, setState] = useState({
    isOpened: false,
  });
  return (
    <View style={[styles.guideline_item, styles.guidelines_preamble_view]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setState({...state, isOpened: !state.isOpened})}>
        <View style={styles.guideline_point}>
          {state.isOpened ? <ViewLessIcon /> : <ViewMoreIcon />}
          <View style={styles.guideline_point_text_container}>
            <Text style={styles.guideline_point_text}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {state.isOpened && (
        <Text style={styles.guidelines_preamble_text}>{content}</Text>
      )}
    </View>
  );
};

export default GuidelineItems;
