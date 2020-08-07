import React from "react";
import axios from "axios";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
// galio component
import { Block, Button, Input, Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import { Entypo,AntDesign,EvilIcons } from '@expo/vector-icons';

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
    var url = "https://skincancerbackend.herokuapp.com/doctor/update";
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
       <ImageBackground 
          source={require('../../../assets/register-bg.png')}
           style={{width: width, height: 1000}} 
          >  
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
            <Text muted center size={theme.SIZES.FONT * 1.5} color={theme.COLORS.PRIMARY}>
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

          <Block flex={5} center space="between">
            <Block flex={2} middle>
              <Input
                borderless
                placeholder="Phone"
                autoCapitalize="none"
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
                onChangeText={(text) => this.handleChange("phoneNumber", text)}
                iconContent={<Entypo name="phone" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
              <Input
                borderless
                placeholder="Location"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onBlur={() => {
                  if (this.state.clinicLocation.length === 0) {
                    alert("should enter clinic location");
                  }
                }}
                onChangeText={(text) =>
                  this.handleChange("clinicLocation", text)
                }
                iconContent={<Entypo name="location-pin" size={24} color={theme.COLORS.PRIMARY} />}
              />
              <Input
                borderless
                placeholder="workingFrom"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onChangeText={(text) => this.handleChange("workingFrom", text)}
                iconContent={<AntDesign name="clockcircle" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
              <Input
                borderless
                placeholder="workingTo"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onChangeText={(text) => this.handleChange("workingTo", text)}
                iconContent={<AntDesign name="clockcircle" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
            
            </Block>
            <Block flex middle>
              <Button
                
                color={theme.COLORS.PRIMARY}
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
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:150,
    margin:20,
    width: width * 0.9,
    height: height * 0.70,
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
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default DoctorProfile;
