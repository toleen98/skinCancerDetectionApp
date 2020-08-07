import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 

import LoginDr from "../Dr_screens/login";
import DrwerDoctor from './doctorSideMenu'
import Signup from '../Dr_screens/signup'
export default class LoginContainerDoctor extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="LoginDr" component={LoginDr} />
          <Scene key="HomeDr" component={DrwerDoctor} nav={this.props} />
          <Scene key="Signup" component={Signup} />
        </Stack>
      </Router>
    );
  }
}