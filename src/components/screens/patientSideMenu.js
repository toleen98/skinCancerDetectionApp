import "react-native-gesture-handler";
import React from "react";
//import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import {
  NavigationContainer,
  createAppContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import HomePatient from "./homePatient";
import PatientUpdate from "./patientUpdate";
import ViewDoctor from "./viewDoctor";
import Logout from "./logOut";
import AboutUs from "./aboutUs";
import Help from "./help";

import Appointments from "./patientApmnt";
const DrwerNavigator = createDrawerNavigator();
const Stack = createStackNavigator();
function Drwer(props) {
  return (
    <NavigationContainer>
      <DrwerNavigator.Navigator>
        <DrwerNavigator.Screen
          name="Home"
          component={HomePatient}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Feather name="home" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Profile"
          component={PatientUpdate}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Feather name="user" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Doctors"
          component={ViewDoctor}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Fontisto name="doctor" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Appointments"
          component={Appointments}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="date-range" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="My Report"
          component={HomePatient}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="report" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Help"
          component={Help}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="help" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="info" size={16} color={tintColor} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Logout"
          component={Logout}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="exit-to-app" size={16} color={tintColor} />
            ),
          }}
        />
      </DrwerNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Drwer;
