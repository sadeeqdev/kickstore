import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const PressableItemList = () => {
  // Hard-coded items
  const items = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    title: `Item ${index + 1}`,
  }));

  // Function to handle item press
  const handleItemPress = (itemId: any) => {
    alert(`Item ${itemId + 1} pressed`);
    // Add your custom logic for item press here
  };

  return (
    <ScrollView style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleItemPress(item.id)}
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});

export default PressableItemList;
