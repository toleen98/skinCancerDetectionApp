import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
} from "react-native";
import { Block, Button, Input, NavBar, Text } from "galio-framework";

import theme from "../../theme";
import { Image } from "react-native";
import { Scene, Router, Actions, Stack } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
const { height, width } = Dimensions.get("window");

import axios from "axios";
import { useState } from "react";
import { set } from "mongoose";
import { NavigationActions } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import Header from "../common/header";
function Login(props) {
  const state = {
    email: "",
    password: "",
  };
  const handleEmailChange = (e) => {
    state.email = e.nativeEvent.text;
  };

  const [password, setPassword] = React.useState("");

  function handlePasswordChange(e) {
    state.password = e.nativeEvent.text;
  }

  const onSubmit = (e) => {
    const user = {
      email: state.email,
      password: state.password,
    };

    console.log(props);
       alert("Login Successed! ");
          Actions.push("Home");
    // var id;

    // axios
    //   .post("http://192.168.127.36:8080/login", user)
    //   .then((res) => {
    //     console.log(res.data.patient._id);
    //     id = res.data.patient._id;
    //     AsyncStorage.setItem("access_token", JSON.stringify(id));
    //     if (res.data.result === true) {
    //       alert("Login Successed! ");
    //       Actions.push("HomePatient");
    //     } else if (res.data === false) {
    //       alert("Login Failed! Wrong password");
    //     } else if (res.data === "Email not found") {
    //       alert("Email not found");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };
  //   const navigateAction = NavigationActions.navigate({
  // 	routeName: 'MyDatePicker',

  // 	params: {},

  // 	action: NavigationActions.navigate({ routeName: 'MyDatePicker' }),
  //   });
  //   const MapsStack = createStackNavigator({
  //     MyDatePicker: {
  //       screen: MyDatePicker,
  //       navigationOptions: ({ navigation }) => ({
  //         header: <Header navigation={navigation} />,
  //         headerTransparent: true,
  //       }),
  //     },
  //   });

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block flex center style={{ marginTop: theme.SIZES.BASE }}>
          <Text> {"\n"}</Text>
          <Image source={require("../../../assets/splash.png")} />
          <Text muted center size={theme.SIZES.FONT * 2} color={"#18DCFF"}>
            {" "}
            Login{" "}
          </Text>
        </Block>
        <Block flex={2} center space="evenly">
          <Block flex={2}>
            <Text size={theme.SIZES.FONT * 0.875} color={"#18DCFF"}>
              {" "}
              Email{" "}
            </Text>
            <Input
              rounded
              id="email"
              type="email-address"
              placeholder="exmple@gmail.com"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              // onChangeText={text => this.handleChange('email', text)}
              // label='Email'
              onBlur={() => {
                var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (state.email.length === 0) {
                  alert("should enter email");
                } else if (!reg.test(state.email)) {
                  alert("not valid email");
                }
              }}
              // value= {email}
              onChange={handleEmailChange}
            />
            <Text size={theme.SIZES.FONT * 0.875} color={"#18DCFF"}>
              {" "}
              Password{" "}
            </Text>
            <Input
              rounded
              password
              viewPass
              id="password"
              placeholder="Password"
              style={{ width: width * 0.9 }}
              // onChangeText={text => this.handleChange('password', text)}
              // value={password}
              onChange={handlePasswordChange}
            />
            <Button
              round
              color={"#18DCFF"}
              style={{ width: width * 0.9 }}
              //onPress={() => navigation.navigate.push("MyDatePicker")}

              //   onPress={() => props.navigation.navigate('MyDatePicker')}
              onPress={onSubmit}
            >
              Sign in
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
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
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default Login;
