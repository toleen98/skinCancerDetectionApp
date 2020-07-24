import React, { Component } from "react";
import { Text, StyleSheet, Button } from "react-native";
import { Scene, Router, Actions, Stack } from "react-native-router-flux";

import MyDatePicker from "./bookAppointment";
import Cards from "./viewDoctorsCards";
import Header from "../common/header";

export default class ViewDoctor extends Component {
  render() {
    return (
      <Router>
        <Stack hideNavBar={true}>
          <Scene key="Cards" component={Cards}/>
          <Scene key="MyDatePicker" component={MyDatePicker}  />
        </Stack>
      </Router>
    );
  }
}
