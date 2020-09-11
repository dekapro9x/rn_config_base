react-native-permissions:
Link:https://github.com/react-native-community/react-native-permissions
Kiểm tra quyền của ứng dụng:
yarn add react-native-permissions
cd ios && pod install.
Trong pod :

Thêm đoạn code sau vào dòng :

# Cấu hình Permission:

permissions_path = '../node_modules/react-native-permissions/ios'
pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications.podspec"
pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways.podspec"
pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse.podspec"
pod 'Permission-Camera', :path => "#{permissions_path}/Camera.podspec"
pod 'XCDYouTubeKit', '~> 2.8'

Nếu dùng use_frameworks! thêm dòng này:

# use_frameworks!

#Cấu hình React native-permission
pre_install do |installer|
installer.pod_targets.each do |pod|
if pod.name.eql?('RNPermissions') || pod.name.start_with?('Permission-')
def pod.build_type;
Pod::BuildType.static_library # >= 1.9
end
end
end
end

Clear DriverData tránh lưu cache và chạy lại:
