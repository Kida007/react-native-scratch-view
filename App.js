/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
  DatePickerIOS,
  requireNativeComponent,
  Alert,
  Image,
  Animated,
  Easing
} from 'react-native';

import ScratchCardView from './ScratchCardView';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





const App = () => {


  const animatedValue = new Animated.Value(0)


  onScratched = () => {
    Animated.timing(animatedValue, { toValue:1, easing:Easing.inOut, duration:300}).start();
  }

  let scale = animatedValue.interpolate({ inputRange:[0,0.5,1], outputRange:[1,2,1]})

  setTimeout(()=>onScratched(), 4000);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScratchCardView couponImage={require('./assets/drake3.png')}>
          <View style={{ height:300 , width:300, justifyContent:'center', alignItems:'center' }} >
            <Animated.Image source={require('./assets/drake3.png')} resizeMode="contain" style={{ height:300, width:300, transform:[{ scaleX:scale}, {scaleY:scale}] }}/>
          </View>
        </ScratchCardView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
