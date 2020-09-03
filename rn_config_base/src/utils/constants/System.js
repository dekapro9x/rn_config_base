import {Platform, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Dev:
const APP_ID = '123456789';
const URL_DOMAIN = 'https://appdemo.com.vn';
const COMPANY_ID = '987654321';

//Kiểm tra nền tảng và các cấu hình khác:
const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const versionApp = isIos ? '1.0.0' : '1.0.0';
const {width, height} = Dimensions.get('window');
const isIphoneX = isIos && height / width > 1.888;
const DEVICE_WIDTH = width <= height ? width : height;
const DEVICE_HEIGHT = width <= height ? height : width;
const DEVICE_ID = DeviceInfo.getUniqueId();
const VERSION_PLAFORM = DeviceInfo.getSystemVersion();

const checkApiLevelPlatform = () => {
  let response = new Promise((resolve, reject) => {
    resolve(DeviceInfo.getApiLevel());
  });
  return response;
};

const getInfoDevices = {
  getInfoDevicesApiLevelPlatform: checkApiLevelPlatform(),
};

console.log('APP_ID', APP_ID);
console.log('DEVICE_ID', DEVICE_ID);
console.log('Version Plaform:', VERSION_PLAFORM);

export {
  isIos,
  URL_DOMAIN,
  isIphoneX,
  isAndroid,
  APP_ID,
  DEVICE_ID,
  COMPANY_ID,
  versionApp,
  VERSION_PLAFORM,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  getInfoDevices,
};
