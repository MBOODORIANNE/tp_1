import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Proudscreen = () => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View style={style.container}>
        <Image
          style={{
            position: "relative",
            height: 25,
            width: 25,
            borderRadius: 8,
            top: -35,
            left: -170,
          }}
          source={require("../assets/search.png")}
        />
        <Image
          style={{
            position: "relative",
            height: 25,
            width: 25,
            borderRadius: 8,
            top: -64,
            right: -100,
          }}
          source={require("../assets/panier.png")}
        />
        <Image
          style={{
            position: "relative",
            height: 25,
            width: 25,
            borderRadius: 8,
            top: -90,
            right: -135,
          }}
          source={require("../assets/food.png")}
        />

        <View style={style.cont1}>
          <Image
            style={{ height: 170, width: 170, top: 25, left: 90 }}
            source={require("../assets/arbre.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 17, right: -125, top: 10 }}>
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 8,
              borderColor: "white",
              position: "relative",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                position: "relative",
                color: "white",
                top: -57,
              }}
            >
              {" "}
              +{" "}
            </Text>
          </View>
          <Text style={{ fontSize: 30 }}>1</Text>
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 8,
              borderColor: "white",
              position: "relative",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                color: "white",
                position: "relative",
                top: -12,
              }}
            >
              {" "}
              -{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 40,
            width: 100,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "white",
            right: 120,
            top: -75,
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: "red", fontSize: 16, top: 6 }}
          >
            {" "}
            Vegetables{" "}
          </Text>
        </View>
        <Text
          style={{ fontWeight: "bold", fontSize: 20, top: -65, right: 130 }}
        >
          Broccoli
        </Text>
        <Text
          style={{ fontWeight: "bold", fontSize: 14, top: -63, right: 120 }}
        >
          approx 100 gm
        </Text>

        <View
          style={{
            flexDirection: "row",
            top: -25,
            height: 80,
            width: "100%",
            borderWidth: 2,
            borderColor: "white",
            left: 1,
            borderRadius: 14,
            gap: 2,
          }}
        >
          <View
            style={{
              height: 50,
              width: 60,
              backgroundColor: "plum",
              borderRadius: 15,
              left: 10,
              top: 10,
            }}
          >
            <Image
              style={{
                height: 35,
                width: 35,
                marginLeft: "auto",
                marginRight: "auto",
                top: 5,
              }}
              source={require("../assets/blue.jpg")}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ fontWeight: "bold", fontStyle: 17, left: 14, top: 14 }}
            >
              {" "}
              Agrifam Inc
            </Text>
            <Text
              style={{
                position: "relative",
                fontWeight: "100",
                fontStyle: 9,
                left: 14,
                top: 13,
              }}
            >
              F5RJ+FJF,chairtakol
            </Text>
          </View>

          <Image
            style={{ height: 25, width: 25, left: 125, top: 20 }}
            source={require("../assets/blue.jpg")}
          />
          <Text
            style={{ fontWeight: "bold", fontStyle: 17, left: 135, top: 20 }}
          >
            4.9 (89)
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 15, left: -140, top: 20 }}>
          Description
        </Text>
        <Text style={{ fontWeight: "300", fontSize: 12, left: -60, top: 40 }}>
          Broccoli is an edible green plant in the cabbage{"\n"}family whose
          large flowering head,staclk and{"\n"}small associated leaved
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            left: -20,
            top: 22,
            color: "red",
          }}
        >
          Read more
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            top: 40,
            width: "100%",
            height: 80,
          }}
        >
          <View
            style={{
              height: 55,
              width: 55,
              borderWidth: 2,
              borderColor: "red",
              top: 20,
              left: 15,
              borderRadius: 14,
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
                top: 13,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              source={require("../assets/blue.jpg")}
            />
          </View>
          <View
            style={{
              height: 50,
              width: 280,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 12,
              top: 20,
              left: 50,
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                color: "white",
                marginBottom: "auto",
                marginTop: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {" "}
              Add to cart $1.50
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
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
  cont1: {
    height: 230,
    width: 340,
    left: -3,
    top: -80,
    backgroundColor: "white",
    borderRadius: 18,
  },
});

export default Proudscreen;
