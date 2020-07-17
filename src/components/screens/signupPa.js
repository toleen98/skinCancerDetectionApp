import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../../theme';

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

  render() {
    const { navigation } = this.props;
    const { user, email, password, phoneNumber,bloodType,height,weight} = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block
          flex
          center
          style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}
        >
          <Text
            muted
            center
            size={theme.SIZES.FONT * 0.875}
            style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}
          >
           Sign Up Form
          </Text>
          
        </Block>

        <Block flex={2} center space="between">
          <Block flex={2}>
            <Input
              rounded
              placeholder="Username"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('user', text)}
            />
            <Input
              rounded
              type="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('email', text)}
            />
            <Input
              rounded
              password
              viewPass
              placeholder="Password"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('password', text)}
            />
            <Input
              rounded
              tel
              placeholder="Phone_number"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('phoneNumber', text)}
            />
            <Input
              rounded
              placeholder="bloodType"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('bloodType', text)}
            />
            <Input
              rounded
              placeholder="height"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('height', text)}
            />
            <Input
              rounded
              placeholder="weight"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('weight', text)}
            />
          </Block>
          <Block flex middle>
            <Button
              round
              color="error"
              onPress={() => Alert.alert(
                'Sign up action',
                `
                Username: ${user}
                Email: ${email}
                Password: ${password}`,
              )}
            >
              Sign up
            </Button>
            <Button color="transparent" shadowless onPress={() => navigation.navigate('Login')}>
              <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                Already have an account? Sign In
              </Text>
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
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Signup;