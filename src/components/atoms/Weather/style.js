import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.WIDTH * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  city_name_view: {
    // backgroundColor: Colors.ALERT,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
  city_name_view_bg: {
    position: 'absolute',
    top: -20,
    left: Dimensions.WIDTH * 0.275,
    right: 0,
    bottom: 0,
  },
  city_name_text: {
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  details_view: {
    flexDirection: 'row',
    backgroundColor: Colors.DARK_BACKGROUND,
    borderRadius: Dimensions.WIDTH * 0.9 * 0.1,
    height: 140,
    paddingHorizontal: 10,
  },
  weather_icon_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_icon: {
    width: 100,
    height: 100,
  },
  weather_description_view: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.SHADED_TEXT,
  },
  temperature_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  min_max_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.SHADED_TEXT,
  },
  values_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  more_container: {},
  more_details_card: {
    height: 160,
    borderRadius: Dimensions.WIDTH * 0.9 * 0.1,
    paddingHorizontal: 10,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  more_details_view: {
    flexDirection: 'row',
  },
  more_details_view_b: {
    width: '80%',
  },
  more_item: {
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  more_item_b: {
    width: '50%',
    flexDirection: 'row',
  },
  more_item_description: {width: '100%'},
  more_item_description_b: {
    width: '50%',
  },
  more_value_text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
  more_description_text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.SHADED_TEXT,
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
  preview_container: {
    flexDirection: 'row',
    marginVertical: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#acacac',
    paddingHorizontal: 2,
  },
  preview_weather_city: {flex: 2},
  preview_weather_city_name: {},
  preview_weather_detail: {
    flex: 5,
    flexDirection: 'row',
  },
  preview_weather_icon: {
    width: 60,
    height: 60,
  },
  preview_weather_description: {flex: 3, justifyContent: 'center'},
  preview_weather_description_text: {color: Colors.SHADED_TEXT, fontSize: 14},
  preview_view: {flex: 2},
  view_touchable: {
    backgroundColor: Colors.PRIMARY,
    width: 60,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  view_touchable_text: {
    color: Colors.WHITE,
    fontSize: 14,
  },
  top_border: {
    borderTopWidth: 2,
    borderTopColor: Colors.BORDER_TWO,
    marginVertical: 10,
    width: '95%',
  },
});

export default styles;
