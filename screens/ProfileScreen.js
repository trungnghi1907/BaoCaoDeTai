import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { UserContext } from '../App';

const ProfileScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Quản lý tài khoản</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Đăng xuất" onPress={handleLogout} />
        </>
      ) : (
        <Text style={styles.title}>Vui lòng đăng nhập</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ProfileScreen;
