Sau khi cấu hình react-native-bootsplash

Chạy lệnh:
yarn generate-bootsplash
yarn run v1.22.4
\$ /Users/\_coz/Projects/rn_config_base/rn_config_base/node_modules/.bin/generate-bootsplash
✔ The path to the root of your React Native project … ./
✔ The path to your static assets directory … assets
✔ Your original icon file … assets/bootsplash_logo.jpg
✔ The bootsplash background color (in hexadecimal) … #FFFFFF
✔ The desired icon width (in dp - we recommend approximately ~100) … 100
✔ Are you sure? All the existing bootsplash images will be overwritten! … yes

Thay dòng :
[RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView];
Thành :
[RNBootSplash initWithStoryboard:@"LaunchScreen" rootView:rootView];
