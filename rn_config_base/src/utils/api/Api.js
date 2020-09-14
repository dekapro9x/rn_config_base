import {
  APP_ID,
  URL_DOMAIN,
  DEVICE_ID,
  TYPE_PLAFORM,
  COMPANY_ID,
  PRIVATE_KEY_DEVICE_ID,
  isIos,
  versionApp,
} from '../constants/System';
const Api = {
  //API đăng kí ID thiết bị:
  registrationDeviceID: () => {
    return `${URL_DOMAIN}/api/v1/app/${APP_ID}/device/pushDeviceId?companyId=${COMPANY_ID}&deviceId=${DEVICE_ID}&deviceType=${TYPE_PLAFORM}&privateKey=${PRIVATE_KEY_DEVICE_ID}`;
  },
  //Lấy danh sách thông báo thường:
  getListNotificationAll: (size, page) => {
    return `${URL_DOMAIN}/api/v1/app/${APP_ID}/notification/all?page=${page}&size=${size}&deviceId=${DEVICE_ID}&typeScreen=LIST_NOTIFICATION`;
  },
};
export {Api};
