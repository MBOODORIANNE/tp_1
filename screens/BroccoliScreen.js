import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const BroccoliScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.textContainer}>
          <Image source={require("../assets/arbre.jpg")} style={styles.image} />
        </View>
        {/* Autre contenu ici */}
        <View style={styles.coloredTextContainer}>
          <Text style={styles.coloredText}>vegetables</Text>
        </View>
        <Text style={styles.Text}>Broccoli</Text>
        <Text style={styles.Text}>approx 100 gm</Text>
        <Text style={{ fontSize: 30, left: 100 }}>1</Text>
        <View style={styles.MoinTextContainer}>
          <Image
            source={require("../assets/OIP (2).jpeg")}
            style={styles.imagemoins}
          />
        </View>
        <View style={styles.PlusTextContainer}>
          <Image
            source={require("../assets/plus-icon-isolated-sign-symbol-vector-22437050.jpg")}
            style={styles.imageplus}
          />
        </View>
        <View style={styles.AgrifarmContainer}>
          <View style={styles.carotteTextContainer}>
            <Image
              source={require("../assets/banane.png")}
              style={styles.image1}
            />
          </View>
          <Image
            source={require("../assets/boutique.png")}
            style={styles.image2}
          />
        </View>
        <Text style={styles.Desp}> Description</Text>
        <Text style={styles.text}>
          {"\n"} {/* Utilisez '\n' pour insérer une nouvelle ligne */}
          Broccoli is an edible green plant in the cabbage {"\n"}family whose
          large flowering head ,stalk and {"\n"}small associated leaves are
          <Text style={styles.text1}> Read more</Text>
        </Text>

        <View style={styles.Addst}>
          <Text style={styles.AddText}>Add to cart $ 1.50 </Text>
        </View>
        <View style={styles.logo}>
          <Image
            source={require("../assets/panier.png")}
            style={styles.imagelogo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "green",
    borderRadius: 18,
  },
  image: {
    width: 150,
    height: 150,
    top: 20,

    left: 50,
    margin: 15,
  },
  textContainer: {
    width: 370,
    height: 200,
    backgroundColor: "#FFC0CB",

    borderRadius: 0,
    overflow: "hidden", //pour que l'image ne dépasse pas les limites de la View.
    top: 20,
    margin: 30,
    padding: 30,
    paddingHorizontal: 10, // pour ajouter de l'espace interne à la View.
    paddingVertical: 10, // pour ajouter de l'espace interne à la View.
  },

  coloredTextContainer: {
    borderWidth: 1, //pour spécifier l'épaisseur de la bordure,
    borderColor: "red", // pour définir la couleur de la bordure,
    right: 150,

    top: 20,
    borderRadius: 3, // pour arrondir les coins de la bordure,
    paddingHorizontal: 3, // pour ajouter de l'espace interne à la View.
    paddingVertical: 3, // pour ajouter de l'espace interne à la View.
  },
  coloredText: {
    color: "white",
  },
  Text: {
    fontWeight: "bold", //pour rendre le texte en gras
    top: 16,
    right: 150,
  },
  MoinTextContainer: {
    borderWidth: 1, //pour spécifier l'épaisseur de la bordure,

    top: -40,
    left: 150,
    borderColor: "green", // pour définir la couleur de la bordure,
    borderRadius: 5, // pour arrondir les coins de la bordure,
    paddingHorizontal: 6, // pour ajouter de l'espace interne à la View.
    paddingVertical: 10, // pour ajouter de l'espace interne à la View.
  },
  imagemoins: {
    width: 40,
    height: 20,
  },
  PlusTextContainer: {
    borderWidth: 1, //pour spécifier l'épaisseur de la bordure,
    borderColor: "green", // pour définir la couleur de la bordure,
    top: -83,
    left: 70,
    right: 100,
    borderRadius: 10, // pour arrondir les coins de la bordure,
    paddingHorizontal: 30, // pour ajouter de l'espace interne à la View.
    paddingVertical: 10, // pour ajouter de l'espace interne à la View.
  },
  imageplus: {
    width: 30,
    height: 20,
  },
  AgrifarmContainer: {
    flex: 0.5,
    width: 390,
    height: 190,
    margin: 30,
    padding: 40,

    backgroundColor: "white",

    borderRadius: 10,
    overflow: "hidden", //pour que l'image ne dépasse pas les limites de la View.
    top: -66,
  },

  image2: {
    width: 50,
    height: 50,
    top: -70,
    left: 250,
  },
  carotteTextContainer: {
    width: 90,
    height: 50,
    margin: 10,
    padding: 10,
    right: 20,

    backgroundColor: "red",

    borderRadius: 5,
    overflow: "hidden", //pour que l'image ne dépasse pas les limites de la View.
    top: -16,
  },
  image1: {
    width: 50,
    height: 40,
    left: 9,
    top: -14,
  },
  text: {
    whiteSpace: "pre-line", // ou 'normal'
    textAlign: "center",
    top: -60,
    right: 40,
  },
  text1: {
    color: "yellow",
  },
  Desp: {
    top: -50,
    right: 150,
  },
  Addst: {
    borderWidth: 1, //pour spécifier l'épaisseur de la bordure,
    borderColor: "red", // pour définir la couleur de la bordure,
    top: -20,
    left: 30,

    borderRadius: 5, // pour arrondir les coins de la bordure,
    paddingHorizontal: 50, // pour ajouter de l'espace interne à la View.
    paddingVertical: 10, // pour ajouter de l'espace interne à la View.
  },
  AddText: {
    color: "red",
  },
  logo: {
    height: 55,
    width: 55,
    borderWidth: 2,
    borderColor: "red",
    top: -50,
    right: 150,
    borderRadius: 14,
  },
  imagelogo: {
    width: 20,
    height: 30,
    left: 14,
    top: 14,
  },
});
export default BroccoliScreen;
