import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 

import SignupDr from "../Dr_screens/signup";
import DrwerDoctor from '../screens/doctorSideMenu';
import LoginContainerDoctor from "../Dr_screens/loginContainerDoctor";
export default class SignUpContainerDoctor extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="SignupDr" component={SignupDr} />
          <Scene key="LoginDr" component={LoginContainerDoctor} nav={this.props} />
        </Stack>
      </Router>
    );
  }
}