import React from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,Checkbox
} from 'galio-framework';
import theme from '../../theme';
import axios from 'axios';
import { Entypo, MaterialCommunityIcons, Ionicons, Fontisto,FontAwesome5 } from '@expo/vector-icons';
import {  Actions} from 'react-native-router-flux'; // 4.0.0-beta.28
import Login from './login'

const { height, width } = Dimensions.get("window");

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber:"",
    bloodType:"",
    heightP:"",
    weight:""
  }

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
  var url = `https://skincancerbackend.herokuapp.com/api/user/patient/signup`;
  axios
    .post(url, this.state)
    .then(function (response) {
      Alert.alert("User created sucessfully")
      Actions.push('LoginPatient');
    })
    .catch(function (error) {
      Alert.alert("Email already exists");
      console.log(error);
    });
    
  }}

  render() {
    const { navigation } = this.props;
    const { firstName, lastName, email, password, phoneNumber,bloodType,heightP,weight} = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
       <ImageBackground 
    source={require('../../../assets/register-bg.png')}
    style={{width: width, height: height}} 
>  
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled >
          
          <Text muted center size={theme.SIZES.FONT * 1} color={theme.COLORS.PRIMARY}>{'\n'} Sign Up </Text>

        <Block flex={3} center space="between">
          <Block flex={2} middel width={width * 0.8} style={{ marginBottom: 15 }}>
            <Input
              borderless
              placeholder="First Name"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('firstName', text)}
              onBlur={() => {
                  if (this.state.firstName.length === 0) {
                    alert("should enter your name");
                  }
                }}
              iconContent={<Entypo name="user" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
         
            />
            <Input
              borderless
              placeholder="Last Name"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('lastName', text)}
              onBlur={() => {
                  if (this.state.lastName.length === 0) {
                    alert("should enter your name");
                  }
                }}
              iconContent={<Entypo name="user" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}

            />
            <Input
              borderless
              type="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('email', text)}
              onBlur={() => {
                  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (this.state.email.length === 0) {
                    alert("should enter email");
                  } else if (!reg.test(this.state.email)) {
                    alert("not valid email");
                  }
                }}
              iconContent={<MaterialCommunityIcons name="email" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              password
              viewPass
              placeholder="Password"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('password', text)}
              onBlur={() => {
                  if (this.state.password.length === 0) {
                    alert("should enter password");
                  }}}
              iconContent={<Ionicons name="ios-lock" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              placeholder= "Phone_number"
              textContentType = "telephoneNumber"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('phoneNumber', text)}
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
              iconContent={<Entypo name="phone" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}

            />
            <Input
              borderless
              placeholder="Blood Type"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('bloodType', text)}
              onBlur={() => {
                  var regB = /^(A|B|AB|O)[-+]$/;
                  if (this.state.bloodType.length === 0) {
                    alert("should enter blood type");
                  } else if (!regB.test(this.state.bloodType)) {
                    console.log(typeof this.state.bloodType);
                    alert("not valid blood type, example : A+ / O-");
                  }
                }}
              iconContent={<Fontisto name="blood-drop" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              placeholder="Height"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('heightP', text)}
              onBlur={() => {
                  if (this.state.height.length === 0) {
                    alert("should enter your height");
                  }
                }}
              iconContent={<MaterialCommunityIcons name="human-male-height" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              placeholder="Weight"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('weight', text)}
              onBlur={() => {
                  if (this.state.weight.length === 0) {
                    alert("should enter your weight");
                  }
                }}
              iconContent={<FontAwesome5 name="weight" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />

<Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={theme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: theme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>

                    <Block flex = {0.5} middle>
            <Text>{'\n'}</Text>
            <Button
              
              color={theme.COLORS.PRIMARY}
              onPress={this.submit.bind(this)}
              style={styles.createButton}
            >
              <Text bold size={14} color={theme.COLORS.WHITE}>Sign Up</Text>
            </Button>
            
          </Block>
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
    marginTop:100,
    margin:20,
    width: width * 0.9,
    height: height * 0.83,
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
  inputIcons: {
    marginRight: 12
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
 
  
});

export default Signup;
