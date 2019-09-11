/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
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





class App extends React.Component {


  constructor(props){
    super(props)
    this.animatedValue = new Animated.Value(0);
  }


  onScratched = e => {
    setTimeout(()=>Animated.spring(this.animatedValue, { toValue:1, easing:Easing.inOut,  useNativeDriver:true}).start(), 300)
    }

  render(){

    const scale = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1,1.6,1],
    });

    return (
      <SafeAreaView style={{ flex:1}}>
        <StatusBar barStyle="dark-content" />
          <View style={{ flex:1, justifyContent:'center', alignItems:'center'  }}>
            <ScratchCardView couponImage={require('./assets/drake3.png')} onScratched={this.onScratched}>
              <Animated.View style={{ transform:[{scaleX:scale}, {scaleY:scale}],height:300 , width:300, justifyContent:'center', alignItems:'center', backgroundColor:'#D8DADB', borderRadius:8}} >
                <Animated.Text style={{fontSize:20 }}>{"You Have Won \n A 10x Gift \n \n \n - RN Scratch View"}</Animated.Text>
              </Animated.View>
            </ScratchCardView>
          </View>
      </SafeAreaView>
    );
  }
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
