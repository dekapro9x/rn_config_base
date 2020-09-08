import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {AppText} from '../../../elements';
import {COLOR, SIZE} from '../../../utils';
export default function TabViewHome() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'menu',
      title: 'Menu Item',
    },
    {
      key: 'review',
      title: 'Review',
    },
  ]);

  //Chuyển tabView :
  const onChangeTabView = (index) => {
    setIndex(index);
  };

  //Các Component:
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'menu':
        return (
          <View
            style={{height: 100, width: '100%', backgroundColor: 'red'}}></View>
        );
        break;
      case 'review':
        return (
          <View
            style={{
              height: 100,
              width: '100%',
              backgroundColor: 'green',
            }}></View>
        );
        break;
      default:
        return (
          <View
            style={{
              height: 100,
              width: '100%',
              backgroundColor: 'yellow',
            }}></View>
        );
    }
  };
  //Hiển thị Tabbar:
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{
        backgroundColor: COLOR.white,
        shadowOffset: {height: 0, width: 0},
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
      }}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            backgroundColor: focused ? COLOR.COLOR_GREEN : COLOR.grey_300,
            width: SIZE.width(46),
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 6,
          }}>
          <AppText>{route.title}</AppText>
        </View>
      )}
      renderIndicator={() => null}
      activeColor={COLOR.white}
      inactiveColor={COLOR.red}
      tabStyle={{padding: 0}}
    />
  );

  return (
    <View style={{flex: 1}}>
      <TabView
        lazy
        swipeEnabled={false}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={onChangeTabView}
        initialLayout={SIZE.width(100)}
        style={{height: 100, width: SIZE.width(100)}}
      />
    </View>
  );
}
