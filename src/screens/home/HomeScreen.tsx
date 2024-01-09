import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import SearchIcon from "../../../assets/icons/search-icon.svg";
import InputSearchIcon from "../../../assets/icons/input-search-icon.svg";
import { ItemScreen } from "../Item/ItemScreen";
import { useNavigation } from "@react-navigation/native";

const PressableItemList: React.FC = () => {
  const [text, setText] = useState<string>("");
  const navigation = useNavigation();

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  const handleButtonClick = () => {
    navigation.navigate(ItemScreen);
  };

  const renderItemImage = (imageSource: any) => (
    <Image source={imageSource} style={styles.image} />
  );

  const renderBigItemImage = (imageSource: any) => (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.bigImage} />
    </View>
  );

  const renderItemBox = (imageSource: any, label: string) => (
    <View style={styles.itemBox}>
      {imageSource && renderItemImage(imageSource)}
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "#888", fontSize: 12 }}>{label}</Text>
      </View>
    </View>
  );

  const renderBigItemBox = (imageSource: any, name: string, price: string) => (
    <View style={styles.bigItemBox}>
      {imageSource && renderBigItemImage(imageSource)}
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ color: "#000", fontSize: 12, fontWeight: "bold" }}>
          {name}
        </Text>
        <Text style={{ color: "#000", fontSize: 10 }}>₦{price}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>New Arrivals</Text>
        <Text style={styles.subtitle}>
          Custom clothing for the modern unique man
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
        <View style={styles.itemRow}>
          {renderItemBox(
            require("../../../assets/images/tshirt-img.png"),
            "Pants"
          )}
          {renderItemBox(
            require("../../../assets/images/shirt-img.png"),
            "Shirts"
          )}
          {renderItemBox(
            require("../../../assets/images/pants-img.png"),
            "Pants"
          )}
          <View style={styles.itemBox}>
            <Text style={styles.viewAll}>View All</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.subHeader}>New Arrival</Text>
          <Text style={styles.viewAll}>See All</Text>
        </View>
        <View style={styles.itemRow}>
          {renderBigItemBox(
            require("../../../assets/images/shirt-1.png"),
            "Denim T-shirt",
            "6000"
          )}
          {renderBigItemBox(
            require("../../../assets/images/shirt-2.png"),
            "Denim T-shirt",
            "6000"
          )}
        </View>
        <View style={styles.itemRow}>
          {renderBigItemBox(
            require("../../../assets/images/shirt-3.png"),
            "Denim T-shirt",
            "6000"
          )}
          {renderBigItemBox(
            require("../../../assets/images/shirt-2.png"),
            "Denim T-shirt",
            "6000"
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  title: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 3,
  },
  subHeader: {
    color: "black",
    fontSize: 20,
    fontWeight: "normal",
    marginLeft: 3,
  },
  subtitle: {
    marginTop: 5,
    color: "#888",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
    paddingRight: 10,
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
    width: 30,
    height: 40,
    resizeMode: "stretch",
  },
  itemBox: {
    width: 80,
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#EEEEF0",
    height: 85,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  itemRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  bigItemBox: {
    width: "auto",
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#EEEEF0",
    height: 159,
    paddingHorizontal: 5,
  },
  viewAll: {
    color: "#888",
  },
  bigImage: {
    width: 100,
    height: 110,
    resizeMode: "stretch",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
});

export default PressableItemList;
