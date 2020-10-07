import React, {useState, useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import {AppHeader} from '../../elements/AppHeader';
import {GiftedChat} from 'react-native-gifted-chat';
export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        // image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenk.vn%2Finternet%2Fcau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh-20150731162009022.chn&psig=AOvVaw33bJlcSac2GtCUqDtmqN9z&ust=1602130832082000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCC_8vQoewCFQAAAAAdAAAAABAP",
        // sent:true,
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png',
        },
      },
      {
        _id: 2,
        text: 'Tử hình developer',
        createdAt: new Date(),
        image: 'https://i0.wp.com/lucloi.vn/wp-content/uploads/2019/12/80645903_179056849953610_9846264065687552_n.jpg?fit=372%2C276&ssl=1',
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png',
        },
      },
      {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        image: 'https://facebook.github.io/react/img/logo_og.pn',
        user: {
          _id: 3,
          name: 'React Native',
          avatar:
            'https://i0.wp.com/lucloi.vn/wp-content/uploads/2019/12/80645903_179056849953610_9846264065687552_n.jpg?fit=372%2C276&ssl=1',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppHeader title={'Chat'} leftGoBack={true}></AppHeader>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
