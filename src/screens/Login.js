import {
  View,
  Button,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as React from 'react';
import {connect} from 'react-redux';
import {initLogin} from './../store/actions/loginAction';
import axios from 'axios';
import Home from './Home';
import {Dimensions} from 'react-native';
class Login extends React.Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    isLoggedIn: false,
    hasError: false,
  };
  render() {
    const {navigation} = this.props;
    const {email, password, isLoggedIn, hasError} = this.state;
    if (isLoggedIn) {
      return (
        <View>
          <Home />
        </View>
      );
    }
    if (hasError) {
      return (
        <View>
          <Text>Error!!!</Text>
        </View>
      );
    }
    return (
      <>
        <View>
          <Image
            style={styleln.main}
            source={require('./../utils/Images/beatles.jpg')}
          />
        </View>
        <View style={styleln.main12}>
          <Image
            style={styleln.main2}
            source={require('./../utils/Images/spotify.png')}
          />
          <TextInput
            style={styleln.main3}
            placeholderTextColor="white"
            value={email}
            onChangeText={value => this.setState({email: value})}
            placeholder="Email"
          />
          <TextInput
            placeholderTextColor="white"
            style={styleln.main4}
            value={password}
            onChangeText={value => {
              this.setState({password: value});
              console.log(this.state);
            }}
            placeholder="Password"
            secureTextEntry
          />
          <Text
            style={styleln.main5}
            onPress={() => this.props.initLogin(this.state)}>
            SIGN IN
          </Text>
          <View style={styleln.main6}>
            <Text style={styleln.main7}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RegistrationScreen')
              }>
              <Text style={styleln.main11}>Sign up.</Text>
            </TouchableOpacity>
          </View>
          <View style={styleln.main8}>
            <Text style={styleln.main9}>Sign In Using Facebook</Text>
            <Text style={styleln.main10}>Sign In Using Phone</Text>
          </View>
        </View>
      </>
    );
  }
}
export default connect(null, {initLogin})(Login);

const styleln = StyleSheet.create({
  main: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  main2: {
    width: 280,
    height: 83,
    alignSelf: 'center',
    marginBottom: 70,
  },
  main3: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingLeft: 20,
    color: 'white',
    borderRadius: 70,
    width: Dimensions.get('window').width / 1.1,
  },
  main4: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    paddingLeft: 20,
    borderRadius: 70,
    width: Dimensions.get('window').width / 1.1,
    marginBottom: 70,
  },
  main5: {
    paddingTop: 10,
    backgroundColor: '#1DB954',
    color: 'white',
    textAlign: 'center',
    height: 40,
    borderRadius: 60,
  },
  main6: {flexDirection: 'row', alignSelf: 'center', marginTop: 20},
  main7: {color: 'white'},
  main8: {marginTop: 50},
  main9: {
    color: 'white',
    backgroundColor: '#1DB954',
    textAlign: 'center',
    height: 40,
    paddingTop: 10,
    borderRadius: 50,
  },
  main10: {
    marginTop: 10,
    color: 'white',
    backgroundColor: 'slategray',
    textAlign: 'center',
    height: 40,
    paddingTop: 10,
    borderRadius: 50,
  },
  main11: {color: '#1DB954'},
  main12: {justifyContent: 'center', flex: 1, alignSelf: 'center'},
});
