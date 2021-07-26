import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {NavigationContainer} from '@react-navigation/native';

export default function RegistrationScreen({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <View>
        <Image
          style={stylesrs.main1}
          source={require('./../utils/Images/beatles.jpg')}
        />
      </View>

      <View style={stylesrs.main2}>
        <Image
          style={stylesrs.main3}
          source={require('./../utils/Images/spotify.png')}
        />
      </View>

      <View style={stylesrs.main4}>
        <Text style={stylesrs.main5}>Sign Up</Text>
      </View>

      <View style={stylesrs.main18}>
        <TextInput
          style={stylesrs.main6}
          placeholder="Full Name"
          placeholderTextColor="white"></TextInput>
        <TextInput
          style={stylesrs.main7}
          placeholder="Email"
          placeholderTextColor="white"></TextInput>
        <TextInput
          style={stylesrs.main8}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="white"></TextInput>
      </View>

      <View style={stylesrs.main9}>
        <CheckBox
          tintColors={{true: '#1DB954', false: 'white'}}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={stylesrs.main10}>
          Share my registration data with Spotify's content providers for
          marketing purposes.
        </Text>
      </View>

      <View>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={stylesrs.main11}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>

      <View style={stylesrs.main12}>
        <Text style={{color: 'white'}}>Already have an Account? </Text>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={stylesrs.main13}>
          Sign In.
        </Text>
      </View>

      <View style={stylesrs.main14}>
        <Text style={stylesrs.main15}>
          By clicking on Sign up, you agree to Spotify's
        </Text>
        <TouchableOpacity>
          <Text style={stylesrs.main13}>Terms and Conditions of Use</Text>
        </TouchableOpacity>
      </View>

      <View style={stylesrs.main16}>
        <Text style={stylesrs.main17}>
          To learn more about how Spotify collects, uses, shares and protects
          your personal data please read Spotify's
        </Text>
        <TouchableOpacity>
          <Text style={stylesrs.main13}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const stylesrs = StyleSheet.create({
  main1: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  main2: {marginTop: 20},
  main3: {
    width: 280,
    height: 83,
    alignSelf: 'center',
    marginBottom: 20,
  },
  main4: {alignSelf: 'center'},
  main5: {color: 'white', fontSize: 25},
  main6: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'white',
    marginBottom: 20,
  },
  main7: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'white',
    marginBottom: 20,
  },
  main8: {backgroundColor: 'rgba(52, 52, 52, 0.8)', color: 'white'},
  main9: {marginLeft: 30, flexDirection: 'row'},
  main10: {color: 'white', width: 350, marginLeft: 10},
  main11: {
    paddingTop: 10,
    backgroundColor: '#1DB954',
    color: 'white',
    textAlign: 'center',
    height: 40,
    borderRadius: 60,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  main12: {
    flexDirection: 'row',
    paddingLeft: 30,
    marginTop: 10,
    marginBottom: -10,
  },
  main13: {color: '#1DB954'},
  main14: {marginLeft: 30, marginTop: 20},
  main15: {color: 'white'},
  main16: {marginLeft: 30, marginTop: 10},
  main17: {color: 'white', width: 280},
  main18: {padding: 30},
});
