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
const card = {
  id: 1,
  avatar: "http://i.pravatar.cc/100",
};
function Report() {
  // const { navigation } = this.props;
  // blood: '',
  // height: '',
  // weigh : '',

  const state = {
    reports: [],
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
          .then(function () {
              axios
            .get("http://192.168.1.75:8080/patientReport")
            .then((response) => {
              this.setState({ reports: response.data });
              console.log("back")
              console.log(response.data)
            })
            .catch((err) => {
              console.log(err);
            });
          })
          .catch((err) => console.log("err"));
      });
  });

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      {/* <NavBar
      title="Cards"
      left={(
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon 
            name="menu"
            family="feather"
            size={theme.SIZES.BASE}
            color={theme.COLORS.ICON}
          />
        </TouchableOpacity>
      )}
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
    /> */}
      <ScrollView contentContainerStyle={styles.cards}>
        <Block flex space="between">
          {/* {cards && cards.map((card, id) => ( */}
          <Card
            flex
            borderless
            shadowColor={theme.COLORS.BLACK}
            titleColor={card.full ? theme.COLORS.WHITE : null}
            style={styles.card}
            // title={reports.firstName + " " + reports.lastName}
            name
            caption={
              //   "\n" +
              //   "Blood type  " +
              //   reports.blood +
              //   "\n" +
              //   "Height  " +
              //   reports.height +
              //   "\n" +
              //   "Weight  " +
              //   reports.weight
              "Blood : A"
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
          {/* ))} */}
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
