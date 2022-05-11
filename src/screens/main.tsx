import * as React from "react";
import { View, Text, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text>this homepage screen ?.</Text>
      <Button title="About us" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

export default MainScreen;
