import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import STYLES from '../utils/styles';
import {initLogout} from './../store/actions/loginAction';
import FlatListt from '../components/flatlistData';
import FlatListtt from '../components/flatListt';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import SoundPlayer from 'react-native-sound-player';

class Home extends Component {
  // playSound = () => {
  //   try {
  //     SoundPlayer.playSoundFile('Oye Laadi', 'mp3');
  //   } catch (e) {
  //     console.log(`cannot play the sound file`, e);
  //   }
  // };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: '#191414', flex: 1}}>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <TouchableOpacity style={{marginLeft: 10}}>
            <MaterialCommunityIcons
              onPress={() => this.props.navigation.openDrawer()}
              name="backburger"
              color="white"
              size={40}
            />
          </TouchableOpacity>
          <Text style={styles1.main}>Browse</Text>
          <View style={styles1.main3}>
            <MaterialCommunityIcons
              onPress={() => this.props.navigation.navigate('SplashScreen')}
              name="spotify"
              color="#1DB954"
              size={40}
            />
          </View>
        </View>
        <FlatListtt />
        {/* <Image
          style={styles1.main1}
          source={require('./../utils/Images/arijit.jpg')}
        />
        // <Text style={styles1.main}>Your Playlists</Text> */}
        {/* <Button title="Logout" onPress={() => this.props.initLogout()} /> */}
        <View style={styles1.main4}>
          <Text
            onPress={() => this.props.navigation.navigate('MainScreen')}
            style={styles1.main}>
            Your Playlists
          </Text>
        </View>
        <FlatListt />
        <View style={styles1.main2}>
          <MaterialCommunityIcons name="magnify" color="white" size={30} />
          <MaterialCommunityIcons name="play-circle" color="white" size={30} />
          <MaterialCommunityIcons
            onPress={() => this.props.initLogout()}
            name="power"
            color="white"
            size={30}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, {initLogout})(Home);

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
  },
});

const styles1 = StyleSheet.create({
  main: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: -4,
  },
  main1: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  main2: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 8,
    backgroundColor: 'black',
  },
  main3: {
    flexGrow: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  main4: {marginTop: 20},
});
