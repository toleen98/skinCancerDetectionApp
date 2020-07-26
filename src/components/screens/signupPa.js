import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../../theme';
import axios from 'axios';


const { height, width } = Dimensions.get('window');

class Signup extends React.Component {
  state = {
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    phoneNumber:"",
    bloodType:"",
    height:"",
    weight:""
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value }); 
  }

  submit = () => {
    var url = `http://172.16.0.147:8080/api/user/patient/signup`;
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
    const { firstName, lastName, email, password, phoneNumber,bloodType,height,weight} = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <Block>
          
          
        </Block>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block
          flex
          center
          style={{ marginTop: theme.SIZES.BASE   }}
        >
          <Text> {"\n"}</Text> 
           <Image source={require('../../../assets/splash.png')} />
           <Text muted center size={theme.SIZES.FONT * 2} color={"#18DCFF"}> Sign Up </Text>
          
        </Block>

        <Block flex={3} center space="between">
          <Block flex={2}  >
            <Input
              rounded
              placeholder="First Name"
              autoCapitalize="none"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('firstName', text)}
            />
            <Input
              rounded
              placeholder="Last Name"
              autoCapitalize="none"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('lastName', text)}
            />
            <Input
              rounded
              type="Email-address"
              placeholder="Email"
              placeholderTextColor="#18DCFF" 
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('email', text)}
            />
            <Input
              rounded
              password
              viewPass
              placeholder="Password"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('password', text)}
            />
            <Input
              rounded
              placeholder= "Phone_number"
              placeholderTextColor="#18DCFF" 
              textContentType = "telephoneNumber"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('phoneNumber', text)}
            />
            <Input
              rounded
              placeholder="Blood Type"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('bloodType', text)}
            />
            <Input
              rounded
              placeholder="Height"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('height', text)}
            />
            <Input
              rounded
              placeholder="Weight"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('weight', text)}
            />
          </Block>
          <Block flex = {0.5} middle>
            <Text>{'\n'}</Text>
            <Button
              round
              color="#18DCFF"
              onPress={this.submit.bind(this)}
            >
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
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  
});

export default Signup;