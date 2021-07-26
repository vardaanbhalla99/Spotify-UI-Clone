// import { DATA } from "../assets/FlatListData/flatListData";
import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

export const DATA = [
  {
    id: 1,
    img_url: './../utils/Images/p1.jpg',
    name: 'Arijit Singh Live',
    title: 'Listen to the magic of Arijit Singh',
  },
  {
    id: 2,
    name: 'Bollywood Masala',
    title: 'Listen to the latest hit bollywood tracks',
    img_url: './../utils/Images/p2.png',
  },
  {
    id: 3,
    name: 'Indie Pop',
    title: 'Listen to whats new in Indie',
    img_url: './../utils/Images/p3.jpg',
  },
  {
    id: 4,
    name: 'New Music Friday',
    title: 'Listen to your favourite artists latest releases',
    img_url: './../utils/Images/p4.jpg',
  },
  {
    id: 5,
    name: 'Dance Mix',
    title: 'Chartbusters Dance Tracks just for you',
    img_url: './../utils/Images/p5.jpg',
  },
];

export default function FlatListtt() {
  const renderItem = item => {
    const {id, name, title, img_url} = item.item;
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: 180,
            width: 180,
            alignItems: 'center',
            paddingTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              borderRadius: 30,
              width: 60,
              marginBottom: 10,
              marginRight: 60,
              marginTop: 70,
            }}>
            <TouchableOpacity>
              <Image
                source={require('./../utils/Images/arijit.jpg')}
                style={{height: 150, width: 150}}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              marginTop: 60,
              marginLeft: 20,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              marginTop: 70,
              marginLeft: 20,
            }}>
            {title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={true}
        // keyExtractor={item => item.id}
      />
    </View>
  );
}
