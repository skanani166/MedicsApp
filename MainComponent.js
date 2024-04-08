// MainComponent.js
import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FavoriteContext } from "./FavoriteContext";

const MainComponent = () => {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Component</Text>
      <TouchableOpacity onPress={toggleFavorite}>
        <Text style={styles.favoriteButton}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  favoriteButton: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default MainComponent;
