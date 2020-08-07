import React from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground
} from "react-native";
// galio component
import { Block, Button, Input, Text, NavBar } from "galio-framework";
import theme from "../../theme";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import { Entypo, MaterialCommunityIcons, Ionicons, Fontisto,FontAwesome5,Foundation } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

class SignupDr extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    clinicLocation: "",
    workingFrom: "",
    workingTo: "",
    notes: "",
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  submit = () => {
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.phoneNumber === "" ||
      this.state.clinicLocation === "" ||
      this.state.workingFrom === "" ||
      this.state.workingTo === "" ||
      this.state.notes === ""
    ) {
      Alert.alert("Please fill all Data");
    } else {
      var url = "https://skincancerbackend.herokuapp.com/api/user/doctor/signup";

      axios
        .post(url, this.state)
        .then(function (response) {
          Alert.alert("User created sucessfully");
          Actions.push("LoginDr");
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
      <ScrollView>
        <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <ImageBackground 
    source={require('../../../assets/register-bg.png')}
    style={{width: width, height: 800 }} 
>  
          <KeyboardAvoidingView
            style={styles.container}
            behavior="height"
            enabled
          >
            <Block flex center style={{ marginTop: theme.SIZES.BASE }}>
            <Text muted center size={theme.SIZES.FONT * 1} color={theme.COLORS.PRIMARY}>{'\n'} Sign Up </Text>
            </Block>

            <Block flex={9} center space="between">
              <Block flex={2} middel width={width * 0.8} style={{ marginBottom: 15 }}>
                <Input
                  borderless
                  placeholder="First Name"
                  autoCapitalize="none"
                  style={{ width: width * 0.8 }}
                  onBlur={() => {
                    if (this.state.firstName.length === 0) {
                      alert("should enter your name");
                    }
                  }}
                  onChangeText={(text) => this.handleChange("firstName", text)}
                  iconContent={<Entypo name="user" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  placeholder="Last Name"
                  autoCapitalize="none"
                  style={{ width: width * 0.8 }}
                  onBlur={() => {
                    if (this.state.lastName.length === 0) {
                      alert("should enter your name");
                    }
                  }}
                  onChangeText={(text) => this.handleChange("lastName", text)}
                  iconContent={<Entypo name="user" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  type="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  style={{ width: width * 0.8 }}
                  onBlur={() => {
                    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (this.state.email.length === 0) {
                      alert("should enter email");
                    } else if (!reg.test(this.state.email)) {
                      alert("not valid email");
                    }
                  }}
                  onChangeText={(text) => this.handleChange("email", text)}
                  iconContent={<MaterialCommunityIcons name="email" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  password
                  viewPass
                  placeholder="Password"
                  style={{ width: width * 0.8 }}
                  onBlur={() => {
                    if (this.state.password.length === 0) {
                      alert("should enter password");
                    }
                  }}
                  onChangeText={(text) => this.handleChange("password", text)}
                  iconContent={<Ionicons name="ios-lock" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />

                <Input
                  borderless
                  placeholder="Phone_number"
                  textContentType="telephoneNumber"
                  style={{ width: width * 0.8 }}
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
                  onChangeText={(text) =>
                    this.handleChange("phoneNumber", text)
                  }
                  iconContent={<Entypo name="phone" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  placeholder="Clinic Location"
                  style={{ width: width * 0.8 }}
                  onBlur={() => {
                    if (this.state.clinicLocation.length === 0) {
                      alert("should enter location");
                    }
                  }}
                  onChangeText={(text) =>
                    this.handleChange("clinicLocation", text)
                  }
                  iconContent={<Entypo name="location-pin" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  placeholder="Working From"
                  style={{ width: width * 0.8 }}
                  onChangeText={(text) =>
                    this.handleChange("workingFrom", text)
                  }
                  iconContent={<Entypo name="clock" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  placeholder="Working To"
                  style={{ width: width * 0.8 }}
                  onChangeText={(text) => this.handleChange("workingTo", text)}
                  iconContent={<Entypo name="clock" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
                <Input
                  borderless
                  placeholder="Notes"
                  style={{ width: width * 0.8 }}
                  onBlur={() => {
                    if (this.state.clinicLocation.length === 0) {
                      alert("should enter notes");
                    }
                  }}
                  onChangeText={(text) => this.handleChange("notes", text)}
                  iconContent={<Foundation name="clipboard-notes" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
                />
              </Block>
              <Block flex={0.2} middle>
              <Button
              
              color={theme.COLORS.PRIMARY}
              onPress={this.submit.bind(this)}
              style={styles.createButton}
            >
              <Text bold size={14} color={theme.COLORS.WHITE}>Sign Up</Text>
            </Button>
              </Block>
            </Block>
          </KeyboardAvoidingView>
          </ImageBackground>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    marginTop:100,
    margin:20,
    width: width * 0.9,
    height: height * 0.85,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  createButton: {
    width: width * 0.5,
    marginTop:0
  }
});

export default SignupDr;
