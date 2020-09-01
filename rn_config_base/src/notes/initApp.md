Sau khi init app các thư viện bắt buộc phải cài:
1: react-native navigation : https://reactnavigation.org/ => Điều hướng màn hình.
2: react-native-community/async-storage : https://react-native-community.github.io/async-storage/docs/install=> Lưu trữ data local.
3: react-native-device-info : https://github.com/react-native-community/react-native-device-info => Lấy thông tin thiết bị.
4: react-native-vector-icons : https://github.com/oblador/react-native-vector-icons => Hiển thị các icon có sẵn.
5: react-native-code-push : https://github.com/microsoft/react-native-code-push => Cập nhật JS bundle thông qua AppCenter không cần thông qua Store.
6: react-native-responsive-screen : https://github.com/marudy/react-native-responsive-screen#installation => Lấy tỷ lệ màn hình.

Cấu hình lại file gitignore cho từng App tránh hiện tượng đẩy lên git các file không cần thiết gây nặng Git.
Coppy file react-native.config để cấu hình font và vector icon.
