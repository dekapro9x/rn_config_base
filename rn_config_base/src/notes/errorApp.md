# Android 8 không support http:

Thêm :
android:usesCleartextTraffic="true" vào AndroidManifest.xml

# Chuyển cấu hình quyền trong Android bị crash App:

Trong mainActivity.java thêm :
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(null);
}
