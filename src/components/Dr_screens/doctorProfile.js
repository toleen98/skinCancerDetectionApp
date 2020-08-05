import React from "react";
import axios from "axios";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
// galio component
import { Block, Button, Input, Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";

const { height, width } = Dimensions.get("window");

class DoctorProfile extends React.Component {
  state = {
    phoneNumber: "",
    clinicLocation: "",
    workingFrom: "",
    workingTo: "",
    userId: "",
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  async componentDidMount() {
    var pointer = this;
    try {
      const value = await AsyncStorage.getItem("access_token");
      console.log("hi from doctor update");
      console.log(value);
      pointer.setState({ userId: value });
      console.log(pointer.state.userId);
    } catch (error) {
      console.log("err");
    }
  }

  handleSubmit = async () => {
    const doctor = {
      // profileImage: this.state.profileImage,
      phoneNumber: this.state.phoneNumber,
      clinicLocation: this.state.clinicLocation,
      workingFrom: this.state.workingFrom,
      workingTo: this.state.workingTo,
    };
    var param = {
      doctor: doctor,
      id: this.state.userId,
    };
    console.log(doctor);
    console.log("params here");
    console.log(param);
    var url = "http://192.168.1.149:8080/doctor/update";
    axios.post(url, param).then((response) => {
      // response.send("account updated");
      console.log("then");
    });
    //   .catch((error) => res.send("please try again"), console.log(error));
    // Alert.alert("doctor updated");
  };

  render() {
    const { navigation } = this.props;
    const { phoneNumber, clinicLocation, workingFrom, workingTo } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <Header drawer={this.props} />
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          enabled
        >
          <Block
            flex
            center
            style={{
              marginTop: theme.SIZES.BASE * 1.875,
              marginBottom: height * 0.1,
            }}
          >
            {/* here logo */}
            <Image source={require("../../../assets/splash.png")} />
            <Text muted center size={theme.SIZES.FONT * 1.5} color={"#18DCFF"}>
              {" "}
              Update Your Profile{" "}
            </Text>
            <Block
              row
              center
              space="between"
              style={{ marginVertical: theme.SIZES.BASE * 1.875 }}
            ></Block>
          </Block>

          <Block flex={4} center space="between">
            <Block flex={2}>
              <Input
                rounded
                placeholder="Phone"
                autoCapitalize="none"
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
                placeholder="Location"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.clinicLocation.length === 0) {
                    alert("should enter clinic location");
                  }
                }}
                onChangeText={(text) =>
                  this.handleChange("clinicLocation", text)
                }
              />
              <Input
                rounded
                placeholder="workingFrom"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.handleChange("workingFrom", text)}
              />
              <Input
                rounded
                placeholder="workingTo"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.handleChange("workingTo", text)}
              />
            </Block>
            <Block flex middle>
              <Button
                round
                color="#18DCFF"
                //                 onPress={() =>
                //                   Alert.alert(
                //                     "Sign up action",
                //                     `
                // Phone Number: ${phone}
                // Height: ${patientheight}
                // Weight: ${weight}
                // Blood Type: ${blood}`
                //                   )
                //                 }
                onPress={this.handleSubmit.bind(this)}
              >
                Save
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
    flex: 4,
    alignItems: "center",
    justifyContent: "space-around",
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

export default DoctorProfile;
