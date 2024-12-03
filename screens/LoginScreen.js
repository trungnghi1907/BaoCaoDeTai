import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (username && password) {
      setLoading(true);  // Bắt đầu trạng thái loading khi người dùng nhấn đăng nhập
      try {
        const userData = await AsyncStorage.getItem('user');
        
        if (userData) {
          const parsedData = JSON.parse(userData);
          if (parsedData.username === username && parsedData.password === password) {
            Alert.alert('Đăng nhập thành công', 'Chào mừng bạn quay lại!');
            navigation.navigate('HomeScreen');  // Điều hướng đến HomeScreen khi đăng nhập thành công
          } else {
            Alert.alert('Thông báo', 'Tên đăng nhập hoặc mật khẩu không đúng!');
          }
        } else {
          Alert.alert('Thông báo', 'Bạn chưa đăng ký tài khoản!');
        }
      } catch (error) {
        Alert.alert('Lỗi', 'Đã có lỗi xảy ra khi đăng nhập!');
      } finally {
        setLoading(false);  // Dừng trạng thái loading khi quá trình hoàn tất
      }
    } else {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin!');
    }
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      <Text style={styles.header}>WELCOME!!!</Text>
      
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
      
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />  // Hiển thị loading spinner khi đang xác thực
        ) : (
          <Text style={styles.buttonText}>Đăng nhập</Text>
        )}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.signupLink}>
        <Text style={styles.signupText}>Chưa có tài khoản? Đăng ký ngay</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#4CAF50',  // Màu xanh lá cây cho nút đăng nhập
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
