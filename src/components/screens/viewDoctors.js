import React from 'react';
import {
    Alert,ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon,Text, 
} from 'galio-framework';
import theme from '../../theme';
import axios from 'axios';


const { width } = Dimensions.get('screen');

const cards = [
  
  {
        "_id" :1,
        "firstName": "mohamed",
        "lastName": "salahat",
        "email": "mosalah@gmail.com",
        "password": "123568ggikf",
        "phoneNumber": "0796668392",
        "profileImage": "https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1500&h=1900&fit=crop&crop=entropy&q=300",
        "clinicLocation": "tla'a al ali",
        "workingFrom": "8:00 am",
        "workingTo": "6:00 pm",
        "certificate": "",
        "notes": ""
  }
  
];

export default class Cards extends React.Component {
    state = {
        doctors:[],
        status: ""
        
    }

    componentDidMount() {
        
        var url = 'http://192.168.127.36:8080/api/users/doctors';
        var that = this
        axios.get(url)
            .then(function (res) {
                console.log(res.data)
            //   that.setState({doctors: response.data});
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
              console.log(1)
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
    // const card = this.state.doctors;

    return (
     
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE,  marginTop: theme.SIZES.BASE * 7  }}>
       
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between" >
            {cards && cards.map((card) => (
              <TouchableOpacity onPress = {this.bookAppont.bind(this, card._id, card.phoneNumber, card.email)}>
              <Card 
              
                key= {`card-${card.email}`}
                flex
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
              </Card>
              </TouchableOpacity>
              
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