import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 

import Login from './login';
import HomePatient from './homePatient'
import Drwer from './patientSideMenu';
export default class LoginContainerPatient extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="Login" component={Login} />
          <Scene key="Home" component={Drwer} nav={this.props} />
        </Stack>
      </Router>
    );
  }
}