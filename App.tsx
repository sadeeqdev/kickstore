import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import useCachedResources from "./src/hooks/useCachedResources";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const { isLoadingComplete } = useCachedResources();
  if (isLoadingComplete) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <AppNavigator />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    );
  } else {
    return null;
  }
}
