//Library:
import React, {useState} from 'react';
import {View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

//Setup:
import {AppText} from '../../../elements';

//
import {COLOR, SIZE} from '../../../utils';
import MenuHome from './MenuHome';

export default function TabViewHome() {
  //Index: Vị trí tabview đầu tiên được active:
  const [index, setIndex] = useState(0);

  //Routes số lượng tabview:
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
        return <MenuHome></MenuHome>;
      case 'review':
        return <MenuHome></MenuHome>;
      default:
        return <MenuHome></MenuHome>;
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
            backgroundColor: focused ? COLOR.white : COLOR.white,
            borderBottomWidth: SIZE.width(0.8),
            borderBottomColor: focused ? COLOR.red : COLOR.TRANSPARENT,
            width: SIZE.width(46),
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 6,
          }}>
          <AppText
            style={{
              fontWeight: 'bold',
              fontSize: SIZE.H3,
              color: focused ? COLOR.red : COLOR.black,
            }}>
            {route.title}
          </AppText>
        </View>
      )}
      renderIndicator={() => null}
      activeColor={COLOR.white}
      inactiveColor={COLOR.red}
      tabStyle={{padding: 0}}
    />
  );

  return (
    <View style={{flex: 1, marginTop: 20}}>
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
