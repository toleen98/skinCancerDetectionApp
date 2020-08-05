import React from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
// galio component
import { Block, Button, Input, Text, NavBar } from "galio-framework";
import theme from "../../theme";
import axios from "axios";

const { height, width } = Dimensions.get("window");

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    bloodType: "",
    height: "",
    weight: "",
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  submit = () => {
    if (
      this.state.bloodType === "" ||
      this.state.height === "" ||
      this.state.weight === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.phoneNumber === "" ||
      this.state.firstName === "" ||
      this.state.lastName === ""
    ) {
      Alert.alert("Please fill all Data");
    } else {
      var url = `http://192.168.1.149:8080/api/user/patient/signup`;
      axios
        .post(url, this.state)
        .then(function (response) {
          Alert.alert("User created sucessfully");
        })
        .catch(function (error) {
          Alert.alert("Email already exists");
          console.log(error);
        });
    }
  };

  render() {
    const { navigation } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      bloodType,
      height,
      weight,
    } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <Block></Block>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          enabled
        >
          <Block flex center style={{ marginTop: theme.SIZES.BASE }}>
            <Text> {"\n"}</Text>
            <Image source={require("../../../assets/splash.png")} />
            <Text muted center size={theme.SIZES.FONT * 2} color={"#18DCFF"}>
              {" "}
              Sign Up{" "}
            </Text>
          </Block>

          <Block flex={3} center space="between">
            <Block flex={2}>
              <Input
                rounded
                placeholder="First Name"
                autoCapitalize="none"
                placeholderTextColor="#18DCFF"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.firstName.length === 0) {
                    alert("should enter your name");
                  }
                }}
                onChangeText={(text) => this.handleChange("firstName", text)}
              />
              <Input
                rounded
                placeholder="Last Name"
                autoCapitalize="none"
                placeholderTextColor="#18DCFF"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.lastName.length === 0) {
                    alert("should enter your name");
                  }
                }}
                onChangeText={(text) => this.handleChange("lastName", text)}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                placeholderTextColor="#18DCFF"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (this.state.email.length === 0) {
                    alert("should enter email");
                  } else if (!reg.test(this.state.email)) {
                    alert("not valid email");
                  }
                }}
                onChangeText={(text) => this.handleChange("email", text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                placeholderTextColor="#18DCFF"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.password.length === 0) {
                    alert("should enter password");
                  }
                }}
                onChangeText={(text) => this.handleChange("password", text)}
              />
              <Input
                rounded
                placeholder="Phone_number"
                placeholderTextColor="#18DCFF"
                textContentType="telephoneNumber"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  var regPh = /^(1|2|3|4|5|6|7|8|9|0)/;
                  if (this.state.phoneNumber.length === 0) {
                    alert("should enter phone number");
                  } else if (!regPh.test(this.state.phoneNumber)) {
                    alert("not valid phone number");
                  } else if (this.state.phoneNumber.length > 10) {
                    alert("max number allowed 10");
                  }
                }}
                onChangeText={(text) => this.handleChange("phoneNumber", text)}
              />
              <Input
                rounded
                placeholder="Blood Type"
                placeholderTextColor="#18DCFF"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  var regB = /^(A|B|AB|O)[-+]$/;
                  if (this.state.bloodType.length === 0) {
                    alert("should enter blood type");
                  } else if (!regB.test(this.state.bloodType)) {
                    console.log(typeof this.state.bloodType);
                    alert("not valid blood type, example : A+ / O-");
                  }
                }}
                onChangeText={(text) => this.handleChange("bloodType", text)}
              />
              <Input
                rounded
                placeholder="Height"
                placeholderTextColor="#18DCFF"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.height.length === 0) {
                    alert("should enter your height");
                  }
                }}
                onChangeText={(text) => this.handleChange("height", text)}
              />
              <Input
                rounded
                placeholder="Weight"
                placeholderTextColor="#18DCFF"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.weight.length === 0) {
                    alert("should enter your weight");
                  }
                }}
                onChangeText={(text) => this.handleChange("weight", text)}
              />
            </Block>
            <Block flex={0.5} middle>
              <Text>{"\n"}</Text>
              <Button round color="#18DCFF" onPress={this.submit.bind(this)}>
                Sign up
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
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
});

export default Signup;
