import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
const { statusBarHeight } = Constants;
// galio components
import { Block, Text } from "galio-framework";
import theme from "../../theme";
const { width, height } = Dimensions.get("screen");
const AboutUs = (props) => (
  <Block style={styles.background}>
    <Text style={styles.title}>
      Skin Cancer Detiction Application Mission ?
    </Text>
    <Text style={styles.text}>
      Health Care is one of the most important aspects of the technological
      revolution, Skin Cancer Detiction Application uses the latest technologies
      to detect cancer. Our Mission is to save lives from cancer. we aim to
      raise awarness of the importance of the early detection of skin cancer by
      allowing you to become aware of your own skin, find something potentially
      dangerous early on and monitor your skin. Skin Cancer Detection
      Application also has a booking appointment system to help patients in
      finding doctors and allowing the doctor to contact the patient.
    </Text>
  </Block>
);
const styles = StyleSheet.create({
  title: {
    fontSize: theme.SIZES.FONT * 1.5,
    lineHeight: theme.SIZES.FONT * 2.0,
    justifyContent: "center",
    paddingLeft: theme.SIZES.BASE / 2,
    color: "#18DCFF",
    alignItems: "center",
    textAlign: "justify",
    position: "absolute",
    top: 85,
    left: 60,
    right: 43,
    bottom: 0,
    justifyContent: "center",
  },
  text: {
    fontSize: theme.SIZES.FONT * 0.955,
    lineHeight: theme.SIZES.FONT * 1.25,
    color: theme.COLORS.BLACK,
    textAlign: "justify",
    lineHeight: 22,
    position: "absolute",
    top: 190,
    left: 43,
    right: 50,
    bottom: 0,
  },
  background: {
    flex: 2,
    backgroundColor: theme.COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AboutUs;
