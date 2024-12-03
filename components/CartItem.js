import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CartItem = ({ name, quantity, price }) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>
        {quantity} x {price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
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
  },
});

export default CartItem;
