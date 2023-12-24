import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <LottieView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      source={require('../../assets/loading.json')}
      autoPlay
    />
  );
}

export default Loading;
