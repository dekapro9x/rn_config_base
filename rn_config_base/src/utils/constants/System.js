import {Platform, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Dev:
const APP_ID = '';
const URL_DOMAIN = '';
const COMPANY_ID = '';

//Kiểm tra nền tảng và các cấu hình khác:
const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const API_KEY_YOUTUBE = 'AIzaSyDklvH4yPikP9l1m9KgF9S4CJtCtVttf8o';
const DEVICE_ID = DeviceInfo.getUniqueId();
const TYPE_PLAFORM = isIos ? 'IOS' : 'ANDROID';
const PRIVATE_KEY_DEVICE_ID = 'device_id_yoneyama';
const TYPE_USER = 'MOBILE_USER';
const versionApp = isIos ? '1.0.0' : '1.0.0';
const VERSION_PLAFORM = DeviceInfo.getSystemVersion();
const {width, height} = Dimensions.get('window');
const isIphoneX = isIos && height / width > 1.888;
const DEVICE_WIDTH = width <= height ? width : height;
const DEVICE_HEIGHT = width <= height ? height : width;
console.log('APP_ID', APP_ID);
console.log('DEVICE_ID', DEVICE_ID);
export {
  isIos,
  URL_DOMAIN,
  isIphoneX,
  isAndroid,
  APP_ID,
  DEVICE_ID,
  TYPE_PLAFORM,
  COMPANY_ID,
  PRIVATE_KEY_DEVICE_ID,
  TYPE_USER,
  versionApp,
  VERSION_PLAFORM,
  API_KEY_YOUTUBE,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
};
