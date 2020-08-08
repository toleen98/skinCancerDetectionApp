import React from "react";
import { ScrollView, StyleSheet, Dimensions,ImageBackground } from "react-native";
import axios from "axios";
import { Card, Block, Text, Button } from "galio-framework";
import theme from "../../theme";
import AsyncStorage from "@react-native-community/async-storage";
import Header from "../common/header";

const { height, width } = Dimensions.get("window");
const card = {
  id: 1,
  avatar:
    "https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png",
};
class Report extends React.Component {
  state = {
    userId: "",
    report: {},
  };
  async componentDidMount() {
    var pointer = this;
    try {
      const value = await AsyncStorage.getItem("access_token");
      console.log("hi from report");
      console.log(value);
      pointer.setState({ userId: value });
      await axios
        .post("https://skincancerbackend.herokuapp.com/patientReport", {
          params: {
            value: { id: pointer.state.userId },
          },
        })
        .then((res) => {
          console.log("hi");
          console.log(res.data);
          pointer.setState({ report: res.data });
          console.log(pointer.state.report.firstName);
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <ImageBackground 
    source={require('../../../assets/bg.png')}
    style={{width: width, height: height + 200}} 
>  
      <Header drawer={this.props} title={"Reports"}/>
        <Text></Text>
        <ScrollView contentContainerStyle={styles.cards}>
          <Block>
            <Card
              flex
              style={styles.card}
              title={("\n" + "    " + this.state.report.firstName + " " + this.state.report.lastName).toUpperCase()}
              avatar={`${card.avatar}`}
            >
              <Card style={styles.Text1}>
                <Text style={styles.Text1}>
                  Weight : {this.state.report.weight} Kg {"\n"}
                  Height : {this.state.report.height} cm {"\n"}
                  Blood Type : {this.state.report.blood} {"\n"}
                </Text>
              </Card>
            </Card>
        
          </Block>
        </ScrollView>
        </ImageBackground>
      </Block>
    );
  }
}
export default Report;
const styles = StyleSheet.create({
  cards: {
    width,
    alignItems: "center",
    height: 400,
    borderColor: theme.COLORS.PRIMARY,

  },
  card: {
    backgroundColor: "#fff",
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    borderColor: "#fff",
  },
  Text1: {
    marginBottom: 70,
    marginLeft: 15,
    marginRight: 15,
    height: 150,
  },
  Button: {
    backgroundColor: "#18DCFF",
    marginTop: 2,
    alignSelf: "center",
  },
});