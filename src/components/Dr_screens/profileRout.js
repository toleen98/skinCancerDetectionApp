import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 

import Profile from './profile';
import DoctorProfile from './doctorProfile'


export default class ProfileRout extends Component {
  render() {
    return (
      <Router >
        <Stack hideNavBar={true}>
          <Scene key="Profile" component={Profile} nav={this.props} hideNavBar={true}/>
          <Scene key="DoctorProfile" component={DoctorProfile} />
        </Stack>
      </Router>
    );
  }
}