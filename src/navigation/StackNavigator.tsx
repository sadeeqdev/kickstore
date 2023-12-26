import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types";
import Products from "../screens/products/Products";
import HomeScreen from "../screens/home/HomeScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
