// import { DATA } from "../assets/FlatListData/flatListData";
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

export const DATA = [
  {
    id: 1,
    img_url: './../utils/Images/p1.jpg',
    name: 'Daily Mix 1',
    title: 'Arijit Singh, BPraak, Badshah...',
  },
  {
    id: 2,
    name: 'Daily Mix 2',
    title: 'The Beatles, Rolling Stones, Queen...',
    img_url: './../utils/Images/p2.png',
  },
  {
    id: 3,
    name: 'Daily Mix 3',
    title: 'Prateek Kuhad, Anuv Jain, Sneha Khanwalkar...',
    img_url: './../utils/Images/p3.jpg',
  },
  {
    id: 4,
    name: 'Daily Mix 4',
    title: 'AR Rahman, Pritam, Mithoon...',
    img_url: './../utils/Images/p4.jpg',
  },
  {
    id: 5,
    name: 'Daily Mix 5',
    title: 'JS Bach, Mozart, Beethoven...',
    img_url: './../utils/Images/p5.jpg',
  },
  {
    id: 6,
    name: 'Daily Mix 6',
    title: 'JS Bach, Mozart, Beethoven...',
    img_url: './../utils/Images/p5.jpg',
  },
  {
    id: 7,
    name: 'Daily Mix 7',
    title: 'JS Bach, Mozart, Beethoven...',
    img_url: './../utils/Images/p5.jpg',
  },
  {
    id: 8,
    name: 'Daily Mix 8',
    title: 'JS Bach, Mozart, Beethoven...',
    img_url: './../utils/Images/p5.jpg',
  },
  {
    id: 9,
    name: 'Daily Mix 9',
    title: 'JS Bach, Mozart, Beethoven...',
    img_url: './../utils/Images/p5.jpg',
  },
  {
    id: 10,
    name: 'Daily Mix 10',
    title: 'JS Bach, Mozart, Beethoven...',
    img_url: './../utils/Images/p5.jpg',
  },
];

export default function FlatList2() {
  const renderItem = item => {
    const {id, name, title, img_url} = item.item;
    return (
      <TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 80,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                borderRadius: 30,
                width: 60,
                marginLeft: 20,
              }}>
              <Image
                source={require('./../utils/Images/p1.jpg')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 20, color: 'white'}}>{name}</Text>
              <Text style={{color: 'grey', marginTop: 5}}>{title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
      />
    </View>
  );
}
