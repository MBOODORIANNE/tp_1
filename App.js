import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import BroccoliScreen from "./screens/BroccoliScreen";
import Proudscreen from "./screens/Proudscreen";
import Tigerscreen from "./screens/Tigerscren";
import Rootscreen from "./screens/Rootscreen";




const Tab = createBottomTabNavigator();
export default function APP() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name=" profile" component={ProfileScreen} />
        <Tab.Screen name=" Order" component={OrderScreen} />
        <Tab.Screen name=" Broccoli" component={BroccoliScreen} />
        <Tab.Screen name=" Proud" component={Proudscreen} />
        <Tab.Screen name=" Tiger" component={Tigerscreen}/>
        <Tab.Screen name=" Root" component={Rootscreen}/>
         </Tab.Navigator>
    </NavigationContainer>
  );
}

