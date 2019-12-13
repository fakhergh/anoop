import React from "react";
import { View, Button, Text } from "react-native";

const Spacer = ()=> <View style={{ marginTop: 16}}/>

const CommonGroupButtons = ({ navigation: { state: { routeName }, navigate } }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{routeName} Page</Text>
      <Button title={"Go to SubHome"} onPress={() => navigate("homeSub")}/>
      <Spacer/>
      <Button title={"Go to SubAbout"} onPress={() => navigate("aboutSub")}/>
      <Spacer/>
      <Button title={"Go to SubGallery"} onPress={() => navigate("gallerySub")}/>
      <Spacer/>
      <Button title={"Go to SubContact"} onPress={() => navigate("contactSub")}/>
    </View>
  );
};

export default CommonGroupButtons;
