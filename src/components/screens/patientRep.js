import React from "react";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
// Galio components
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../../theme";
import AsyncStorage from "@react-native-community/async-storage";
const { width } = Dimensions.get("screen");

const card= {
  id: 1,
  avatar: "http://i.pravatar.cc/100",
};

var report = {
  "firstName" : "yaso",
  "lastName" : "",
}
function Report() {
  

  const state = {
    userId: "",
  };
    
  
useEffect(() => {
    AsyncStorage.getItem("access_token")
      .then(function (data) {
        console.log("hi from apmn");
        console.log(data);
        state.userId = data;
      })
      .then(function () {
        axios
          .post("http://192.168.1.75:8080/patientReport", {
            params: {
              data: { id: state.userId },
            },
          })
          .then((res) => {
            console.log("hi")
            console.log(res.data)
             //card.report.push(res.data)
            // console.log(card.report[0])
              report["firstName"] = res.data.firstName
              report["lastName"] = res.data.lastName
              console.log(report.firstName)

          })
          .catch((err) => console.log("err"));
      });
  });

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <ScrollView contentContainerStyle={styles.cards}>
        <Block flex space="between">
          {/* {cards && cards.map((card, id) => ( */}
          <Card
            flex 
            borderless
            shadowColor={theme.COLORS.BLACK}
            style={styles.card}
            //title={card.report[0].firstName + " " + card.report[0].lastName}
            title = {JSON.stringify(report.firstName)}
            caption={
                // "\n" +    
                // "Blood type  " +
                // state.report[0].blood +
                // "\n" +
                // "Height  " +
                // state.report[0].height +
                // "\n" +
                // "Weight  " +
                // rstate.report[0].weight
                "blood"
            }
            avatar={`${card.avatar}`}
            footerStyle={card.full ? styles.full : null}
          >
            {card.full ? (
              <LinearGradient
                colors={["transparent", "rgba(0,0,0, 0.8)"]}
                style={styles.gradient}
              />
            ) : null}
          </Card>
         {/* ))}   */}
        </Block>
      </ScrollView>
    </Block>
  );
}   
const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "#18DCFF",
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
export default Report;
