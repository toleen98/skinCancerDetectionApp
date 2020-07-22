import React from 'react';
import {
    Alert,ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity, TouchableNativeFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon,Text, 
} from 'galio-framework';
import theme from '../../theme';
import axios from 'axios';
import MyDatePicker from './bookAppointment.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; // 4.0.0-beta.28


const { width } = Dimensions.get('screen');

export default class Cards extends React.Component {
    state = {
        doctors:[],        
    }

    async componentDidMount() {
        
        var url = 'http://172.16.0.191:8080/api/users/doctors';
        var that = this
        await axios.get(url)
            .then(function (res) {
                console.log(res.data)
              that.setState({doctors: res.data});
            })
            .catch(function (error) {
              console.log(error);
            });
    }

    bookAppont = (id, phoneNumber, email) => {
        Alert.alert("Details",
        "Phone number: " + phoneNumber +"\n" +"email: " + email ,
        [
          {
            text: "Book Apponintment",
            onPress: async () => {
            Actions.push('MyDatePicker')
            },
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],)
    }
  render() {
    const cards = this.state.doctors;
    const { navigation } = this.props;


    return (
     
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE,  marginTop: theme.SIZES.BASE * 3 }}>
       
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between" >
            {cards && cards.map((card) => (
                
              < TouchableNativeFeedback key= {`card-${card._id}`} onPress = {this.bookAppont.bind(this, card._id, card.phoneNumber, card.email)}>
              <Card 
                flex = {5}
                borderless
                shadowColor={theme.COLORS.BLUE}
                titleColor={card.full ? theme.COLORS.BLUE : null}
                style={styles.card}
                title={card.firstName + " " +card.lastName}
                caption={"Working hours: " +card.workingFrom +" To " + card.workingTo+"\n Location: " + card.clinicLocation}
                avatar={`${card.profileImage}?${card._id}`}
                imageStyle={[card.padded ? styles.rounded : null]}
                imageBlockStyle={[
                  card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                  card.full ? null : styles.noRadius,
                ]}
              >
                {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}

              </Card>
              </TouchableNativeFeedback>
              
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.BLUE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});