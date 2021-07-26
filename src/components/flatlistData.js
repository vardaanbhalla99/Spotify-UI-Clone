// import { DATA } from "../assets/FlatListData/flatListData";

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
];

export default function FlatListt(props) {
  const renderItem = item => {
    const {id, name, title, img_url} = item.item;
    return (
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View
          style={{
            height: 200,
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
            }}>
            <TouchableOpacity>
              <Image
                source={require('./../utils/Images/p1.jpg')}
                style={{height: 120, width: 120}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20, color: 'white'}}>{name}</Text>
          <Text style={{color: 'grey', textAlign: 'center', marginTop: 5}}>
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
