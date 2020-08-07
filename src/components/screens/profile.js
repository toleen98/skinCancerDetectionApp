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
import { Actions } from 'react-native-router-flux';


const { height, width } = Dimensions.get("window");

class Profile extends React.Component {
  state = {
    firstName:"",
    lastName:"",
    profileImage:"https://bit.ly/3hxXixM",
    phoneNumber: "",
    height: "",
    userId: "",
    blood:"",
    weight:"",
    email:""
  };
  
  async componentDidMount() {
    const that = this;
    const id = await AsyncStorage.getItem("access_token");
    const url = "http://192.168.127.67:8080/api/profile/user/paitent"
    this.setState({userId: JSON.parse(id)})
    await axios
    .post(url, {id: JSON.parse(id)}) 
    .then( async (res) => {
       await that.setState({
        firstName:res.data.firstName,
        lastName:res.data.lastName,
        email:res.data.email,
        phoneNumber: res.data.phoneNumber ,
        height:res.data.height,
        blood:res.data.blood,
        weight:res.data.weight
       })
       console.log(res.data)
    })
  }

   
  


  render() {
    const { navigation } = this.props;
    const { phoneNumber, clinicLocation, workingFrom, workingTo } = this.state;
    const user= this.state
   
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.BLACK }}>
        <Header drawer={this.props} />
        <Block flex style={styles.profileCard} >
        <Block flex={0.9} middle style={styles.avatarContainer}>
        <Image
            source={{uri:user.profileImage}}        
            style={styles.avatar}

        />
         <Text size={theme.SIZES.FONT * 1.3} color={"#18DCFF"}>{ (user.firstName +" " + user.lastName).toUpperCase()}</Text>
        </Block>
        
        <Block flex={1.3} >
        <Text  size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><AntDesign name="phone" size={20} color={theme.COLORS.GREY} />{" Phone Number: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      "+user.phoneNumber+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><MaterialCommunityIcons name="email-outline" size={20} color={theme.COLORS.GREY} />{" Email: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + user.email+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}> <AntDesign name="clockcircleo" size={19} color={theme.COLORS.GREY} />{" Height: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + user.height+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><EvilIcons name="location" size={24} color={theme.COLORS.GREY} />{"Weight: " }</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + user.weight+'\n'}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={"#18DCFF"}><EvilIcons name="location" size={24} color={theme.COLORS.GREY} />{"Blood Type: " }</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={theme.COLORS.GREY}>{"      " + user.blood+'\n'}</Text>
        <Block middle>
        <Button 
            round
            color={"#18DCFF"}
            style={{ width: 150 }}
            onPress={()=> {Actions.push('DoctorProfile')}}
            > UPDATE</Button>
           
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
    marginTop: -130,
    paddingBottom:-10,
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
