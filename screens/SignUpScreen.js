import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem('user', JSON.stringify({ username, password }));
        Alert.alert('Đăng ký thành công', 'Bạn có thể đăng nhập ngay bây giờ!');
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Lỗi', 'Đã có lỗi xảy ra khi lưu thông tin đăng ký!');
      }
    } else {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin!');
    }
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      <Text style={styles.header}>Đăng ký</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng ký" onPress={handleSignup} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
  },
});

export default SignupScreen;
