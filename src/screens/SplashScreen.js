import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    <>
      <View>
        <Image
          style={styles.main}
          source={require('./../utils/Images/beatles.jpg')}
        />
      </View>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Image
          style={styles.main2}
          source={require('./../utils/Images/spotify.png')}
        />
        <Text style={styles.main4}>Music for Everyone.</Text>
        <Text style={styles.main3}>
          Millions of songs. No credit card needed.
        </Text>
        <Text onPress={() => navigation.navigate('Home')} style={styles.main5}>
          Go to Home
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
  },
  main2: {
    width: 280,
    height: 83,
    alignSelf: 'center',
    marginBottom: 70,
  },
  main3: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  main4: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  main5: {
    marginTop: 30,
    textAlign: 'center',
    color: '#1DB954',
  },
});
