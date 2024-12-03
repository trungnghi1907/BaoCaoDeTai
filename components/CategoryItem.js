import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CategoryItem;
