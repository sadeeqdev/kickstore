import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";

import Products from "../screens/products/Products";
import HomeScreen from "../screens/home/HomeScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  const renderMenuButton = () => (
    <TouchableOpacity onPress={() => alert("Menu button pressed")}>
      <Image
        source={require("../../assets/icons/menu-icon.png")}
        style={{ marginHorizontal: 16, marginTop: 6 }}
      />
    </TouchableOpacity>
  );

  const renderCustomButton = () => (
    <TouchableOpacity onPress={() => alert("Custom button pressed")}>
      <Image
        source={require("../../assets/icons/notification-icon.png")}
        style={{ marginHorizontal: 16, marginTop: 6 }}
      />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70, // Adjust the height as needed
          },
          headerStyle: {
            backgroundColor: "white", // Customize the background color of the header
          },
          headerTitleStyle: {
            color: "#000", // Customize the text color of the header title
          },
          headerTitleAlign: "center", // Align the header title to the center
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
              headerShown: true, // Show the header for this tab
              headerTitle: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/icons/location-icon.png")}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: 12,
                      marginLeft: 3,
                    }}
                  >
                    Lagos, Nigeria
                  </Text>
                </View>
              ),
              headerLeft: renderMenuButton, // Render the menu button on the left
              headerRight: renderCustomButton, // Render the custom button on the right
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
