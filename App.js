

import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

import {
  HomeScreen,
  ProfileScreen,
  AppointmentsScreen,
  ReportScreen,
  AboutUsScreen,
  HelpScreen,
  SettingsScreen,
  LogoutScreen
} from "./src/components/screens";
import HomePatient from './src/components/screens/homePatient'
import Sidebar from './src/components/common/sideBar';
import Header from './src/components/common/header';



const DrawerNavigator = createDrawerNavigator({
  HomeScreen :{
      screen:HomePatient,
      navigationOptions: ({ navigation }) => ({     
        title :'Home',
        drawerIcon :({tintColor}) =><Feather name='home' size={16} color={tintColor}/>
      })
   
      
  },
  ProfileScreen:{
    screen:ProfileScreen,
    navigationOptions : {
      title :'Profile',
      drawerIcon :({tintColor}) =><Feather name='user' size={16} color={tintColor}/>
    }
  },
  AppointmentsScreen :{
    screen:AppointmentsScreen,
    navigationOptions : {
      title :'Appointments',
      drawerIcon :({tintColor}) =><MaterialIcons name="date-range" size={16} color={tintColor} />
    }
  },
  ReportScreen :{
    screen:ReportScreen,
    navigationOptions : {
      title :'My Report',
      drawerIcon :({tintColor}) =><MaterialIcons name="report" size={16} color={tintColor} />
    }
  },
  AboutUsScreen :{
    screen:AboutUsScreen,
    navigationOptions : {
      title :'About Us',
      drawerIcon :({tintColor}) =><MaterialIcons name="info" size={16} color={tintColor} />
    }
  },
  HelpScreen :{
    screen:HelpScreen,
    navigationOptions : {
      title :'Help',
      drawerIcon :({tintColor}) =><MaterialIcons name="help" size={16} color={tintColor} />
    }
  },
  SettingsScreen :{
    screen:SettingsScreen,
    navigationOptions : {
      title :'Settings',
      drawerIcon :({tintColor}) =><MaterialIcons name="settings" size={16} color={tintColor} />
    }
  },
  LogoutScreen :{
      screen:LogoutScreen,
    navigationOptions : {
      title :'Logout',
      drawerIcon :({tintColor}) =><MaterialIcons name="exit-to-app" size={16} color={tintColor} />
    }
  }
},{
  contentComponent: props => <Sidebar {...props}/>
});

export default createAppContainer(DrawerNavigator);
