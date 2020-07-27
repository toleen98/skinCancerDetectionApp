import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");
const Help = (props) => {
  return (
    <ScrollView>
      <Header drawer={props} />
      
      <Text muted center size={theme.SIZES.FONT * 2} color="black">
        {"\n"} Step 1
      </Text>
      <Text muted center size={theme.SIZES.FONT + 2} color="#18DCFF">
         Scan Skin {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={"black"}>
        {"\n"} Scan a part of your skin, focus a camera on your skin for a
        higher resolution to get an accurate prediction. {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT * 2} color="black">
        Step 2
      </Text>
      <Text muted center size={theme.SIZES.FONT + 2} color="#18DCFF">
       View Doctors List {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={"black"}>
        {"\n"} After prediction result if result was high risk view doctor list
        to show doctors name and information to book appointment. {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT * 2} color="black">
         Step 3
      </Text>
      <Text muted center size={theme.SIZES.FONT + 2} color="#18DCFF">
        Book Appointment {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={"black"}>
        {"\n"} Book appointment by clicking in book button, your appointment
        will confirmed or rejected by the doctor after a while. {"\n"}
      </Text>
    
      
    </ScrollView>
  );
}
export default Help;

