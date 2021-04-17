import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './style';

import Header from '../../components/molecules/Header/Header';
import RightArrowIcon from '../../assets/icons/right_pointing_arrow';
import GuidelineItems from '../../components/atoms/Chat/GuidelineItems';

const guidelines = [
  {
    id: 1,
    title: 'Spam & deceptive practices',
    content:
      "The E-Agric Community is one that's built on trust. Content  that intends to scam, mislead, spam, or defraud other users  isn't allowed on E-Agric. ",
  },
  {
    id: 2,
    title: 'Sensitive content',
    content:
      "We hope to protect viewers, creators, and especially minors. That's why we've got rules around keeping children safe, sex & nudity, and self harm. Learn what's allowed on E-Agric and what to do if you see content that doesn't follow these policies.",
  },
  {
    id: 3,
    title: 'Violent or dangerous content',
    content:
      "Hate speech, predatory behavior, graphic violence, malicious attacks, and content that promotes harmful or dangerous behavior isn't allowed on E-Agric.",
  },
];
const PreChat = (props) => {
  const onPressHandler = () => {
    props.navigation.navigate('ChatRoom');
  };
  return (
    <SafeAreaView style={[styles.container, styles.chat_preamble_container]}>
      <Header screenName="GUIDELINES" navigation={props.navigation} />
      <View>
        <View style={[styles.guideline_item, styles.guidelines_preamble_view]}>
          <Text style={styles.guidelines_preamble_text}>
            When you use E-Agric, you join a community of people from all over
            the world. The guidelines below help keep E-Agric fun and enjoyable
            for everyone. If you see content that you think violates these
            guidelines, use the flagging feature to submit it for review by our
            E-Agric.
          </Text>
        </View>
        <FlatList
          data={guidelines}
          renderItem={(item) => <GuidelineItems data={item} />}
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.contentContainer}
        />
        <View style={styles.goto_chat}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onPressHandler()}>
            <View style={styles.goto_chat_btn}>
              <Text style={styles.goto_chat_btn_text}>Go to chat</Text>
              <RightArrowIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreChat;
