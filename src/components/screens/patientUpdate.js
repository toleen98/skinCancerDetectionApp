import React from "react";
import axios from "axios";
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
import Header from "../common/header";

const { height, width } = Dimensions.get("window");

class PatientProfile extends React.Component {
  state = {
    phoneNumber: "",
    patientheight: "",
    weight: "",
    blood: "",
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const patient = {
      // profileImage: this.state.profileImage,
      phoneNumber: this.state.phoneNumber,
      patientheight: this.state.patientheight,
      weight: this.state.weight,
      blood: this.state.blood,
    };
    console.log(patient);
    var url = "http://192.168.1.149:8080/api/profile/patient/updatepatient";
    axios.post(url, patient).then((response) => {
      // response.send("account updated");
      console.log("then");
    });
    // .catch((error) => res.send("please try again") , console.log(error));
    //alert to check
    // Alert.alert("patient updated");
  };

  render() {
    const { navigation } = this.props;
    const { phoneNumber, patientheight, weight, blood } = this.state;

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
                placeholder="Height"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.patientheight.length === 0) {
                    alert("should enter your height");
                  }
                }}
                onChangeText={(text) =>
                  this.handleChange("patientheight", text)
                }
              />
              <Input
                rounded
                placeholder="Weight"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onBlur={() => {
                  if (this.state.weight.length === 0) {
                    alert("should enter your weight");
                  }
                }}
                onChangeText={(text) => this.handleChange("weight", text)}
              />
              <Input
                rounded
                placeholder="Blood"
                autoCapitalize="none"
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
                onChangeText={(text) => this.handleChange("blood", text)}
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

export default PatientProfile;
