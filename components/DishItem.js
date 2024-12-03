import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const DishItem = ({ name, price, rating, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>{price}</Text>
      <Text style={styles.rating}>{rating} ⭐</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  rating: {
    fontSize: 12,
    color: "#999",
  },
});

export default DishItem;
