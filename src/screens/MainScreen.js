import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {initLogout} from './../store/actions/loginAction';
import FlatList2 from '../components/flatlist2';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
function MainScreen({navigation}) {
  return (
    <View style={stylems.main6}>
      <View style={stylems.main5}>
        <MaterialCommunityIcons
          onPress={() => navigation.navigate('Home')}
          name="window-close"
          color="white"
          size={40}
        />
      </View>
      <View>
        <Text style={stylems.main1}>Your Playlists</Text>
      </View>
      <View style={stylems.main2}>
        <Text style={stylems.main3}>CREATE</Text>
      </View>
      <FlatList2 />
      <View style={stylems.main4}>
        <MaterialCommunityIcons
          onPress={() => navigation.navigate('Home')}
          name="home"
          color="white"
          size={30}
        />
        <MaterialCommunityIcons name="play-circle" color="white" size={30} />
        <MaterialCommunityIcons name="playlist-music" color="white" size={30} />
      </View>
    </View>
  );
}
export default connect(null, {initLogout})(MainScreen);

const stylems = StyleSheet.create({
  main1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  main2: {marginTop: 20},
  main3: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    backgroundColor: '#1DB954',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 50,
    height: 60,
    paddingTop: 12,
  },
  main4: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 8,
    backgroundColor: 'black',
  },
  main5: {marginLeft: 20, marginTop: 10},
  main6: {backgroundColor: '#191414', flex: 1},
});
