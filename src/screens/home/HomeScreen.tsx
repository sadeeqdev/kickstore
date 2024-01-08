import React, { useState } from "react";
import { Button, Image } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import InputSearchIcon from "../../../assets/icons/input-search-icon.svg";
import SearchIcon from "../../../assets/icons/search-icon.svg";

const PressableItemList = () => {
  // Hard-coded items
  const [text, setText] = useState("");

  const handleInputChange = (inputText: any) => {
    setText(inputText);
  };

  const handleButtonClick = () => {
    // Handle button click, you can perform actions with the entered text here
    console.log("Entered text:", text);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 32,
            fontWeight: "bold",
            marginLeft: 3,
          }}
        >
          New Arrivals
        </Text>
        <Text style={{ marginTop: 5, color: "#888" }}>
          Custom clothing for the mordern unique man
        </Text>
        <View style={styles.inputContainer}>
          <SearchIcon width={20} height={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={handleInputChange}
            value={text}
            placeholder="Search Items..."
          />
          <InputSearchIcon width={40} height={40} style={styles.icon} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 80,
              backgroundColor: "#FFF",
              borderRadius: 8,
              height: 110,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/tshirt-img.png")}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: 80,
              backgroundColor: "#FFF",
              borderRadius: 8,
              height: 110,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/shirt-img.png")}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: 80,
              backgroundColor: "#FFF",
              borderRadius: 8,
              height: 110,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/pants-img.png")}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: 80,
              backgroundColor: "#FFF",
              borderRadius: 8,
              height: 110,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "gray",
            }}
          >
            <Text
              style={{
                color: "#888",
              }}
            >
              View All
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
    paddingRight: 10, // Adjust padding to accommodate the icon
    marginBottom: 10,
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: "#fff",
  },
  input: {
    height: 45,
    flex: 1,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  icon: {
    marginLeft: 10,
  },
  image: {
    margin: 20,
  },
});

export default PressableItemList;
