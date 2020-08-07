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
import { AntDesign, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';


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
    const url = "https://skincancerbackend.herokuapp.com/api/user/doctor"
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

   
  


  render() {
    const { navigation } = this.props;
    const { phoneNumber, clinicLocation, workingFrom, workingTo } = this.state;
    const dr= this.state
    console.log(dr)
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.BLACK }}>
      <ImageBackground 
    source={require('../../../assets/bg.png')}
    style={{width: width, height: height}} 
>  
        <Header drawer={this.props} title={"Profile"} />
        <Block flex  style={styles.profileCard} >
        <Block flex middle style={styles.avatarContainer}>
        <Image
            source={{uri:dr.profileImage}}        
            style={styles.avatar}

        />
         <Text size={theme.SIZES.FONT * 1.3} color={theme.COLORS.PRIMARY}>{ (dr.firstName +" " + dr.lastName).toUpperCase()}</Text>
        </Block>
        
        <Block flex={1.1}>
        <Text  size={theme.SIZES.FONT * 1.2} color={theme.COLORS.PRIMARY}><AntDesign name="phone" size={20} color={'#000'} />{" Phone Number: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.PLACEHOLDER}>{"      "+dr.phoneNumber+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={theme.COLORS.PRIMARY}><MaterialCommunityIcons name="email-outline" size={20} color={'#000'} />{" Email: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.PLACEHOLDER}>{"      " + dr.email+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={theme.COLORS.PRIMARY}> <AntDesign name="clockcircleo" size={19} color={'#000'} />{" Working Hours: "}</Text>
        <Text  size={theme.SIZES.FONT * 1.1} color={theme.COLORS.PLACEHOLDER}>{"      " + dr.workingFrom +" To "+ dr.workingTo+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.2} color={theme.COLORS.PRIMARY}><EvilIcons name="location" size={24} color={'#000'} />{"Clinic Location: " }</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={theme.COLORS.PLACEHOLDER}>{"      " + dr.clinicLocation+'\n'}</Text>
        <Block middle>
        <Button 
            
            color={theme.COLORS.PRIMARY}
            style={{ width: 150 }}
            onPress={()=> {Actions.push('DoctorProfile')}}
            > UPDATE</Button>
           
        </Block>
       
        </Block>
        </Block>
        </ImageBackground>
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
    marginTop: -150,
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
