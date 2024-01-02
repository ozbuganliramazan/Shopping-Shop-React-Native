import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';

const Login = () => {
  function handelLogin(values) {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handelLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz..."
              value={values.username}
              onChangeText={handleChange('username')}
            />
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
