import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import Products from "../screens/products/Products";
import HomeScreen from "../screens/home/HomeScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeIcon from "../../assets/icons/home-icon.svg";
import BuyIcon from "../../assets/icons/buy-icon.svg";
import AccountIcon from "../../assets/icons/account-icon.svg";
import HeartIcon from "../../assets/icons/heart-icon.svg";
import HomeFocusedIcon from "../../assets/icons/home-focused-icon.svg";
import BuyFocusedIcon from "../../assets/icons/buy-focused-icon.svg";
import HeartFocusedIcon from "../../assets/icons/heart-focused-icon.svg";
import AccountFocusedIcon from "../../assets/icons/account-focused-icon.svg";
import LocationIcon from "../../assets/icons/location-icon.svg";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";

const Tab = createBottomTabNavigator();

const tabConfigs = [
  {
    name: "Home",
    component: HomeScreen,
    icon: <HomeIcon width={20} height={20} />,
    focuseIcon: <HomeFocusedIcon width={20} height={20} />,
  },
  {
    name: "Products",
    component: Products,
    icon: <HeartIcon width={20} height={20} />,
    focuseIcon: <HeartFocusedIcon width={20} height={20} />,
  },
  {
    name: "Cart",
    component: Products,
    icon: <BuyIcon width={20} height={20} />,
    focuseIcon: <BuyFocusedIcon width={20} height={20} />,
  },
  {
    name: "Account",
    component: Products,
    icon: <AccountIcon width={20} height={20} />,
    focuseIcon: <AccountFocusedIcon width={20} height={20} />,
  },
];

const AppNavigator: React.FC = () => {
  const renderMenuButton = () => (
    <TouchableOpacity onPress={() => alert("Menu button pressed")}>
      <MenuIcon width={30} height={30} style={{ marginLeft: 20 }} />
    </TouchableOpacity>
  );

  const renderCustomButton = () => (
    <TouchableOpacity onPress={() => alert("Custom button pressed")}>
      <NotificationIcon width={22} height={22} style={{ marginRight: 20 }} />
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
                focused ? config.focuseIcon : config.icon,
              headerShown: true, // Show the header for this tab
              headerTitle: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <LocationIcon
                    width={12}
                    height={12}
                    style={{ marginTop: 2 }}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
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
