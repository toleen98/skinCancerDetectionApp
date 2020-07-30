import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 


import Role from "./role";
import LoginContainerPatient from "../screens/loginContainerPatient";
import LoginContainerDoctor from "../screens/loginContainerDoctor";
import SignUpContainerDoctor from "../screens/signUpContainerDoctor";
import SignUpContainerPatient from "../screens/signUpContainerPatient";
export default class RoleContainer extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="Role" component={Role} />
          <Scene key="LoginPatient" component={LoginContainerPatient} nav={this.props} />
          <Scene key="LoginDoctor" component={LoginContainerDoctor} nav={this.props} />
          <Scene key="SignupPatient" component={SignUpContainerPatient} nav={this.props} />
          <Scene key="SignupDoctor" component={SignUpContainerDoctor} nav={this.props} />
        </Stack>
      </Router>
    );
  }
}