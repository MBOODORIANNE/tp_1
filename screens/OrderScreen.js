import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/metal-shopping-basket-with-groceries-isolated-white_392895-269375.jpg")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>
            Order Groceries {"\n"} and Get deliverred {"\n"} in few minutes
          </Text>
        </View>
        <View style={styles.coloredTextContainer}>
          <Text style={styles.coloredText}>Get Started</Text>
        </View>
      </View>
      {/* Autre contenu ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 18,
  },
  image: {
    width: 300,
    height: 200,
    top: 50,
    right: 30,
    margin: 15,
  },
  textContainer: {
    width: 400,
    height: 300,
    backgroundColor: "yellow",
    borderRadius: 18,
    overflow: "hidden",
    top: 100,
    marginBottom: 10,
    marginBottom: 10,
  },
  boldText: {
    whiteSpace: "pre-line", // ou 'normal'
    textAlign: "center",
    fontWeight: "bold", //pour rendre le texte en gras

    top: 50,
  },
  coloredTextContainer: {
    borderWidth: 1, //pour spécifier l'épaisseur de la bordure,
    borderColor: "green", // pour définir la couleur de la bordure,
    right: 10,
    top: -80,
    borderRadius: 5, // pour arrondir les coins de la bordure,
    paddingHorizontal: 10, // pour ajouter de l'espace interne à la View.
    paddingVertical: 5, // pour ajouter de l'espace interne à la View.
  },
  coloredText: {
    color: "green",
  },
});
export default OrderScreen;
