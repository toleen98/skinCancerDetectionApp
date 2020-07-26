import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
// Galio components
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../../theme";
import axios from "axios";
const { width } = Dimensions.get("screen");
class Appointments extends React.Component {
  state = {
    userId: "",
    doctorId: "",
    appoints: [],
    doctorName: [],
  };
  async componentDidMount() {
    var pointer = this;
    try {
      const value = "5f16ac53082a493570770a1d";
      console.log("hi from appoints");
      await pointer.setState({ userId: value });
      console.log(pointer.state);
      await axios
        .post("http://192.168.1.75:8080/patient/appoints", {
          params: {
            value: { id: pointer.state.userId },
          },
        })
        .then(async (res) => {
          console.log("hi");
          console.log(res.data);
          await pointer.setState({ appoints: res.data });
          await pointer.setState({ doctorId: res.data[0].doctorId });
          console.log(JSON.stringify(res.data[0].doctorId));
        })
        .then(async () => {
          await axios
            .post("http://192.168.1.75:8080/patient/appoints", {
              docparams: {
                docvalue: { docId: pointer.state.doctorId },
              },
            })
            .then(async (res) => {
              console.log("hi back with doc");
              console.log(res.data);
              await pointer.setState({ doctorName: res.data });
              // console.log(JSON.stringify(res.data[0].doctorId));
            });
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Appointments"
          left={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          }
          style={
            Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
          }
        />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {this.state.appoints.map((appoint, id) => (
              <Card
                key={id}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                style={styles.card}
                doctor={appoint.doctorId}
                status={appoint.status}
                date={appoint.date}
                time={appoint.time}
              ></Card>
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
export default Appointments;
