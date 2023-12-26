import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Products from "../screens/products/Products";
import HomeScreen from "../screens/home/HomeScreen";

const Tab = createBottomTabNavigator();

const tabConfigs = [
  {
    name: "Home",
    component: HomeScreen,
    icon: require("../../assets/icons/home-icon.png"),
    focuseIcon: require("../../assets/icons/home-focused.png"),
  },
  {
    name: "Products",
    component: Products,
    icon: require("../../assets/icons/heart-icon.png"),
    focuseIcon: require("../../assets/icons/heart-focused.png"),
  },
  {
    name: "Cart",
    component: Products,
    icon: require("../../assets/icons/buy-icon.png"),
    focuseIcon: require("../../assets/icons/buy-focused.png"),
  },
  {
    name: "Account",
    component: Products,
    icon: require("../../assets/icons/account-icon.png"),
    focuseIcon: require("../../assets/icons/account-focused.png"),
  },
];

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70, // Adjust the height as needed
          },
        }}
      >
        {tabConfigs.map((config) => (
          <Tab.Screen
            key={config.name}
            name={config.name}
            component={config.component}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color = "#B7076B", size, focused }) =>
                focused ? (
                  <Image
                    source={config.focuseIcon}
                    style={{
                      tintColor: focused ? "#B7076B" : "#000000",
                    }}
                  />
                ) : (
                  <Image
                    source={config.icon}
                    style={{ tintColor: focused ? "#B7076B" : "#000000" }}
                  />
                ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
