import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Login from './Login';
import Home from './Home';
import MainScreen from './../screens/MainScreen';
import SplashScreen from './SplashScreen';
import RegistrationScreen from './RegistrationScreen';
import loginReducer from '../store/reducers/loginReducer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Loader from './Loader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
class Auth extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }
  render() {
    const {loading} = this.state;
    const {user} = this.props;
    if (loading) {
      return <Loader loading={loading} />;
    }
    // if (user) return <Home />;
    // return <Login />;
    return (
      <NavigationContainer>
        {user ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={MyDrawer}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="MainScreen"
              component={MainScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="SplashScreen"
              component={SplashScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps)(Auth);

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={MainScreen} />
//     </Tab.Navigator>
//   );
// }

function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#191414',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff' /* font color for active screen label */,
        activeBackgroundColor: '#1DB954' /* bg color for active screen */,
        inactiveTintColor: 'grey' /* Font color for inactive screens' labels */,
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Your Playlists" component={MainScreen} />
      {/* <Drawer.Screen name="Spotify" component={SplashScreen} /> */}
      {/* <Drawer.Screen name="Registration" component={RegistrationScreen} /> */}
    </Drawer.Navigator>
  );
}
