import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Header = ({ title, placeholder }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {placeholder && (
        <TextInput style={styles.searchBar} placeholder={placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
});

export default Header;
