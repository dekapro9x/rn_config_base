Sau khi cấu hình react-native-bootsplash

Chạy lệnh:
yarn generate-bootsplash

Run terminal :yarn run v1.22.4\$ /Users/\_coz/Projects/rn_config_base/rn_config_base/node_modules/.bin/generate-bootsplash:
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

Cấu hình ảnh splash cho Android vào :
app/src/main/res : Vào các thư mục mipmap-hdpi .... Để kiểm tra ảnh say khi chạy lệnh yarn generate-bootsplash cho được then ra và add thêm vào không?
Vào trong AndroidManifest.xml chỉnh đường link ảnh từ mipmap/ic_launcher => bootsplash_logo
<application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/bootsplash_logo" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="false" android:theme="@style/AppTheme">
