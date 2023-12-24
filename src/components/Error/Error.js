import React from 'react';
import LottieView from 'lottie-react-native';
function Error() {
  return (
    <LottieView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      source={require('../../assets/error.json')}
      autoPlay
    />
  );
}

export default Error;
