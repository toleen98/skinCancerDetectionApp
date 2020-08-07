import React from 'react';
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
const { height, width } = Dimensions.get('window');

class Signup extends React.Component {
  state = {
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    phoneNumber:"",
    bloodType:"",
    heightP:"",
    weight:""
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value }); 
  }

  submit = () => {
    var url = `http://192.168.127.67:8080/api/user/patient/signup`;
    axios.post(url,this.state)
    .then(function (response) {
      Alert.alert("User created sucessfully")
    })
    .catch(function (error) {
      Alert.alert("Email already exists")
      console.log(error);
    });
    
  }

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
              iconContent={<Entypo name="user" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
         
            />
            <Input
              borderless
              placeholder="Last Name"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('lastName', text)}
              iconContent={<Entypo name="user" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}

            />
            <Input
              borderless
              type="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('email', text)}
              iconContent={<MaterialCommunityIcons name="email" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              password
              viewPass
              placeholder="Password"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('password', text)}
              iconContent={<Ionicons name="ios-lock" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              placeholder= "Phone_number"
              textContentType = "telephoneNumber"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('phoneNumber', text)}
              iconContent={<Entypo name="phone" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}

            />
            <Input
              borderless
              placeholder="Blood Type"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('bloodType', text)}
              iconContent={<Fontisto name="blood-drop" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              placeholder="Height"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('heightP', text)}
              iconContent={<MaterialCommunityIcons name="human-male-height" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
            />
            <Input
              borderless
              placeholder="Weight"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('weight', text)}
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