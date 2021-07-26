import React, {Component} from 'react';
import Login from './src/screens/Login';
import {Provider} from 'react-redux';
import store from './src/store';
import Loader from './src/screens/Loader';
import Auth from './src/screens/Auth';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ListPage from './src/screens/ListPage';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <RegistrationScreen /> */}
        {/* <MainScreen /> */}
        {/* <SplashScreen /> */}
        {/* <ListPage /> */}
        <Auth />
        <Loader />
      </Provider>
    );
  }
}

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import Login from './src/screens/Login';
// import Home from './src/screens/Home';
// import Loader from './src/screens/Loader';

// class App extends Component {
//   state = {
//     loading: true,
//   };

//   componentDidMount() {
//     AsyncStorage.getItem('userData')
//       .then(data => {
//         this.setState({loading: false});
//         if (data) {
//           this.props.setUserData(JSON.parse(data));
//         }
//       })
//       .catch(() => {
//         this.setState({loading: false});
//       });
//   }

//   render() {
//     const {loading} = this.state;
//     const {success} = this.props;

//     if (loading) {
//       return <Loader loading={loading} />;
//     }
//     if (success) return <Home />;
//     return <Login />;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     success: state.loginReducer.success,
//   };
// };

// export default connect(mapStateToProps, null)(App);
