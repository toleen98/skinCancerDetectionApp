import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../common/header";
import {
  Card, Block
} from 'galio-framework';
import theme from '../../theme';
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
const { width } = Dimensions.get('screen');
export default class DoctorAppointments extends React.Component {
    state = {
        userId: "",
        appointment: [],
        patientName: [],
        patientLastName : [],
      };
    async componentDidMount() {
        var pointer = this;
        try {
          //AsyncStorage.setItem("access_token", JSON.stringify("5f15cd72286d1c6d109639e7"));
          const value = await AsyncStorage.getItem("access_token");
          // console.log("hi from appointment");
          // console.log(value);
          pointer.setState({ userId: value });
          // console.log(".......")
          // console.log(pointer.state.userId);
          await axios
            .post("https://skincancerbackend.herokuapp.com/getAppointments", {
              params: {
                value: { id: pointer.state.userId },
              },
            })
            .then((res) => {
              //console.log("hi axios 1");
              //console.log(res.data);
              pointer.setState({ appointment: res.data });
              //console.log(pointer.state.appointment[0].time);
           })
            .then (async () => {
              pointer.state.appointment.map(async(element) => {
                await axios
                .post("https://skincancerbackend.herokuapp.com/getPatientsName", {
                params: {
                    value: { pId: element.patientId[0]},
                },
                })
                .then((res) => {
                //console.log("hi axios 2");
                //console.log(res.data.firstName);
                pointer.state.patientName.push(res.data.firstName)
                pointer.state.patientLastName.push(res.data.lastName)
                pointer.setState({ 
                  patientName: pointer.state.patientName,
                  patientLastName: pointer.state.patientLastName
                 });
                
               
                })
              })
            })
        } 
        catch (error) {
          console.log(error);
        }
      }
  render() {
   
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Header drawer={this.props} />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {this.state.appointment.map((card, id) => (
              <Card
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={ theme.COLORS.WHITE }
                key = {id}
                style={styles.card}
                title={(this.state.patientName[id] + " "+ this.state.patientLastName[id]).toUpperCase() }
                captionColor={ theme.COLORS.WHITE}
                caption ={"Date : " + (card.date).slice(0,10) + "\n" + "Time : " + card.time  +" pm"}
                avatar="https://icons.iconarchive.com/icons/icons-land/medical/256/People-Patient-Male-icon.png"
                imageStyle={[card.padded ? styles.rounded : null]}
                imageBlockStyle={[
                  card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                  card.full ? null : styles.noRadius,
                ]}
              >
                {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
              </Card>
            ))}
          </Block>
        </ScrollView>
      </Block>
    )
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
    backgroundColor: "#18DCFF",
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


