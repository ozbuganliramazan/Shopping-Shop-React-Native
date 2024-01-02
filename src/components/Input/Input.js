import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <Icon name="account" size={30} />
    </View>
  );
};

export default Input;
