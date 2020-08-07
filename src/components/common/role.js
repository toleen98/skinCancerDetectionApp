import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
  Image,
  ImageBackground ,
} from "react-native";
import { Block, Button, Input, NavBar, Text } from "galio-framework";
import theme from "../../theme";
import { Scene, Router, Actions, Stack } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
const { height, width } = Dimensions.get("window");
console.log(height)
function Role(props) {
  const state = {
    email: "",
    password: "",
  };
  const loginRole = () => {
    Alert.alert(
      "Login as ",
      " ",
      [
        {
          text: "Patient",
          onPress: () => {
            Actions.push("LoginPatient");
          },
          style: "Camera",
        },
        {
          text: "Doctor",
          onPress: () => {
            Actions.push("LoginDoctor");
          },
        },
      ],
      { cancelable: true }
    );
  };
  const signupRole = () => {
    Alert.alert(
      "SignUp as: ",
      " ",
      [
        {
          text: "Patient",
          onPress: () => {
            Actions.push("SignupPatient");
          },
          style: "Camera",
        },
        {
          text: "Doctor",
          onPress: () => {
            Actions.push("SignupDoctor");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Block safe flex style={{ background: theme.COLORS.PINK }}>
    <ImageBackground 
    source={require('../../../assets/bg.png')}
    style={{width: width, height: height}} 
>  
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block flex center style={{ marginTop: 100 }}>
          <Text> {"\n"}</Text>
          <Image source={require("../../../assets/splash.png")} />
        </Block>
        
        <Block flex={2} center space="evenly">
        
          <Block flex={2} center>
            <Text style={styles.textWelcome}>
              {" "}
              Welcome to Skin Cancer Detection Application Together we Care !
            </Text>
            <Button
              round
              color={"#fff"}
              style={{ width: width * 0.5, fontStyle:"#000" }}
              onPress={loginRole}
            ><Text 
            style={{
              color: '#000',fontSize: 16,
              fontWeight: "bold",
              textAlign: "center"}}>
              Login
              </Text> 
              
            </Button>
            <Button
              round
              color={"#fff"}
              style={{ width: width * 0.5 }}
              onPress={signupRole}
            >
            <Text 
            style={{
              color: '#000',fontSize: 16,
              fontWeight: "bold",
              textAlign: "center"}}>
              SignUp
              </Text>
              
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    // backgroundColor: "#18DCFF",
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    
  },
  textWelcome: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 40,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
});

export default Role;
