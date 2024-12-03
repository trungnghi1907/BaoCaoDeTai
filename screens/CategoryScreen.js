import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const CategoryScreen = ({ route }) => {
  const { title, dishes } = route.params;

  const renderDishItem = ({ item }) => (
    <View style={styles.dishContainer}>
      <Image source={require("../assets/pasta.jpg")} style={styles.dishImage} /> {/* Hình ảnh mẫu */}
      <View style={styles.dishDetails}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.dishPrice}>{item.price}</Text>
        <Text style={styles.dishRating}>⭐ {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>{title}</Text>

      {/* Danh sách món ăn */}
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={renderDishItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  dishContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  dishImage: {
    width: 100,
    height: 100,
  },
  dishDetails: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  dishPrice: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  dishRating: {
    fontSize: 14,
    color: "#666",
  },
});

export default CategoryScreen;
