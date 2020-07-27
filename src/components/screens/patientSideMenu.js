import "react-native-gesture-handler";
import React from "react";
//import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { NavigationContainer,createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from "@react-native-community/async-storage";

import HomePatient from "./homePatient";
import PatientUpdate from "./patientUpdate";
import ViewDoctor from "./viewDoctor"
import Logout from "./logOut";
import AboutUs from "./aboutUs";
import Help from "./help";

const DrwerNavigator = createDrawerNavigator()
const Stack = createStackNavigator();
function Drwer (props) {
  return(
    <NavigationContainer>
     <DrwerNavigator.Navigator>

       <DrwerNavigator.Screen  name="Home" component={HomePatient}/>
       <DrwerNavigator.Screen  name="Profile" component={PatientUpdate}/>
       <DrwerNavigator.Screen  name="Doctors" component={ViewDoctor}/>
       <DrwerNavigator.Screen  name="Appointments" component={HomePatient}/>
       <DrwerNavigator.Screen  name="My Report" component={HomePatient}/>
       <DrwerNavigator.Screen  name="Help" component={Help}/>
       <DrwerNavigator.Screen  name="AboutUs" component={AboutUs}/>
       <DrwerNavigator.Screen  name="Logout" component={Logout}/>
     </DrwerNavigator.Navigator>
   </NavigationContainer>
  )

}


export default Drwer;