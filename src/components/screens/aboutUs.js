import React from "react";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import Constants from "expo-constants";
const { statusBarHeight } = Constants;
// galio components
import { Block, Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import { block } from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");
const AboutUs = (props) => (
  <Block>
  <ImageBackground 
    source={require('../../../assets/register-bg.png')}
    style={{width: width, height: height}} 
>  
    <Block safe flex style={styles.container}>
    <Text style={styles.title}>
      Skin Cancer Detection Application Mission ?
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
    </ImageBackground>
  </Block>
);
const styles = StyleSheet.create({
  container: {
    marginTop:100,
    margin:20,
    width: width * 0.9,
    height: height * 0.80,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginBottom:100,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  title: {
    fontSize: theme.SIZES.FONT * 1.2,
    lineHeight: theme.SIZES.FONT * 2.0,
    justifyContent: "center",
    paddingLeft: theme.SIZES.BASE / 2,
    color: theme.COLORS.PRIMARY,
    alignItems: "center",
    textAlign: "center",
    paddingTop:5,
    marginTop:20
   
  
  },
  text: {
    fontSize: theme.SIZES.FONT * 1,
    justifyContent: "center",
    color: '#716b75',
    textAlign: "center",
    lineHeight: 35,
    alignItems: "center",
    marginTop:35
  
  },
  background: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AboutUs;
