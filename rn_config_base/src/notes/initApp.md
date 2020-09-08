Sau khi init app các thư viện bắt buộc phải cài:
1: react-native navigation : https://reactnavigation.org/ => Điều hướng màn hình (Cài đầy đủ cả bộ thư viện)
2: react-native-community/async-storage : https://react-native-community.github.io/async-storage/docs/install=> Lưu trữ data local.
3: react-native-device-info : https://github.com/react-native-community/react-native-device-info => Lấy thông tin thiết bị.
4: react-native-vector-icons : https://github.com/oblador/react-native-vector-icons => Hiển thị các icon có sẵn.
5: react-native-code-push : https://github.com/microsoft/react-native-code-push => Cập nhập JS bundle thông qua AppCenter không cần thông qua Store.
6: react-native-responsive-screen : https://github.com/marudy/react-native-responsive-screen#installation => Lấy tỷ lệ màn hình.
7: react-native-fast-image :https://github.com/DylanVann/react-native-fast-image :Tăng tốc độ load ảnh và cache ảnh.
8: react-native-render-html: https://github.com/archriss/react-native-render-html : Hiển thị data dạng HTML.
9:react-native-webview : https://github.com/react-native-community/react-native-webview : Mở Webview.
10:react-native-animatable : https://github.com/oblador/react-native-animatable: Tạo các hiệu ứng động cho App.
11: hex-to-rgba :https://www.npmjs.com/package/hex-to-rgba : Lấy mã màu # chuyển sang rgba để tính % độ mờ so với màu gốc.

Cấu hình lại file gitignore cho từng App tránh hiện tượng đẩy lên git các file không cần thiết gây nặng Git.
Coppy file react-native.config để cấu hình font và vector icon.

Đổi tên app:
Android : string.xml
<string name="app_name">rn_base</string>
IOS: Đổi trong Xcode.
