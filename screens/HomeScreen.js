import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItem";
import DishItem from "../components/DishItem";

const HomeScreen = ({ navigation }) => {
 
  const categories = [
    { id: "1", title: "Breakfast", image: require('../assets/burger.jpg') },
    { id: "2", title: "Lunch", image: require('../assets/pasta.jpg') },
    { id: "3", title: "Dinner", image: require('../assets/pizza.jpg') },
  ];

  const popularItems = [
    { id: "1", name: "Spicy Noodles", rating: 4.8, price: "$12.99" },
    { id: "2", name: "Shrimps Pasta", rating: 4.7, price: "$19.99" },
    { id: "3", name: "CheaseKing Burger", rating: 4.8, price: "$15.99" },
    { id: "4", name: "Bopa tea", rating: 4.5, price: "$5.50" },
  ];

  return (
    <View style={styles.container}>
     
      <Header title="Good Morning, Customer" placeholder="Search for Lunch??" />

     
      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem} onPress={() => alert(`Clicked on ${category.title}`)}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

     
      <FlatList
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DishItem name={item.name} price={item.price} rating={item.rating} />
        )}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Popular</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  categoryItem: {
    alignItems: "center",
    width: "30%",
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;
