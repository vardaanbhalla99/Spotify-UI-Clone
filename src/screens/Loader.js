// import {
//   View,
//   Button,
//   Text,
//   TextInput,
//   Pressable,
//   ActivityIndicator,
// } from 'react-native';
// import * as React from 'react';
// import {connect} from 'react-redux';

// class Loader extends React.Component {
//   render() {
//     const {storeLoading = false} = this.props;
//     if (!storeLoading) return null;
//     return (
//       <View>
//         <ActivityIndicator color="#fff" size="large" />
//       </View>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     storeLoading: state.loaderReducer.loading,
//   };
// };

// export default connect(mapStateToProps, null)(Loader);

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import STYLES from '../utils/styles';

class Loader extends Component {
  render() {
    const {loading = false, storeLoading = false} = this.props;
    if (!loading && !storeLoading) return null;

    return (
      <SafeAreaView style={[STYLES.main, styles.main]}>
        <ActivityIndicator color="#fff" size="large" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    storeLoading: state.loaderReducer.loading,
  };
};

export default connect(mapStateToProps, null)(Loader);

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});
