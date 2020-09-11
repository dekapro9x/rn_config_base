react-native-permissions:
Link:https://github.com/react-native-community/react-native-permissions
Kiểm tra quyền của ứng dụng:
yarn add react-native-permissions
cd ios && pod install.
Trong pod :
Thêm đoạn code sau vào dòng 6:

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
