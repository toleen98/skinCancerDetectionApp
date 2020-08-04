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
import { AntDesign, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons'; 

const { height, width } = Dimensions.get("window");

class Profile extends React.Component {
  state = {
    firstName:"",
    lastName:"",
    profileImage:"",
    phoneNumber: "",
    clinicLocation: "",
    workingFrom: "",
    workingTo: "",
    userId: "",
    email:""
  };
  
  async componentDidMount() {
    const that = this;
    const id = await AsyncStorage.getItem("access_token");
    const url = "http://192.168.127.67:8080/api/user/doctor"
    this.setState({userId: JSON.parse(id)})
    await axios
    .post(url, {id: JSON.parse(id)}) 
    .then( async (res) => {
       await that.setState({
        firstName:res.data.firstName,
        lastName:res.data.lastName,
        email:res.data.email,
        profileImage:res.data.profileImage,
        phoneNumber: res.data.phoneNumber ,
        clinicLocation:res.data.clinicLocation,
        workingFrom: res.data.workingFrom,
        workingTo: res.data.workingTo,
       })
       console.log(res.data)
    })
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit =async () => {
    const value = await AsyncStorage.getItem("access_token");
    console.log("the value here");
    console.log(value);
    this.setState({userId: value})
    console.log(this.state.userId);
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
    const dr= this.state
    console.log(dr)
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.BLACK }}>
        <Header drawer={this.props} />
        <Block flex  style={styles.profileCard} >
        <Block flex middle style={styles.avatarContainer}>
        <Image
            source={{uri:dr.profileImage}}        
            style={styles.avatar}

        />
         <Text size={theme.SIZES.FONT * 1.3} color={"#18DCFF"}>{ (dr.firstName +" " + dr.lastName).toUpperCase()}</Text>
        </Block>
        
        <Block flex={1.1}>
        <Text  size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><AntDesign name="phone" size={20} color={theme.COLORS.GREY} />{" Phone Number: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      "+dr.phoneNumber+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><MaterialCommunityIcons name="email-outline" size={20} color={theme.COLORS.GREY} />{" Email: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + dr.email+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}> <AntDesign name="clockcircleo" size={19} color={theme.COLORS.GREY} />{" Working Hours: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + dr.workingFrom +" To "+ dr.workingTo+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><EvilIcons name="location" size={24} color={theme.COLORS.GREY} />{"Clinic Location: " }</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + dr.clinicLocation+'\n'}</Text>
        <Block middle>
        <Button 
            round
            color={"#18DCFF"}
            
            style={{ width: 150 }}> UPDATE</Button>
        </Block>
       
        </Block>
        </Block>
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
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 62,
    borderWidth: 0
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    marginBottom:60,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  }
});

export default Profile;
