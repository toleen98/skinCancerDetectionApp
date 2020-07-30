import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 


import Drwer from './patientSideMenu';
import Signup from "./signupPa";

export default class SignUpContainerPatient extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="Signup" component={Signup} />
          <Scene key="Home" component={Drwer} nav={this.props} />
        </Stack>
      </Router>
    );
  }
}