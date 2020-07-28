import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { Card, Block } from "galio-framework";
import theme from "../../theme";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");
export default class PendingAp extends React.Component {
  state = {
    docId: "",
    pending: [],
    patName: [],
  };
  //await AsyncStorage.setItem("Dr_id", jsonValue);
  async componentDidMount() {
    var pointer = this;
    try {
      //const value = "5f16ac53082a493570770a1d";
      const value = await AsyncStorage.getItem("Dr_id");
      await pointer.setState({ docId: JSON.parse(value) });
      await axios
        .post("http://192.168.1.75:8080/pendingap", {
          params: {
            value: { id: pointer.state.docId },
          },
        })
        .then(async (res) => {
          await pointer.setState({ pending: res.data });
        })
        .then(async () => {
          await pointer.state.pending.map(async (element) => {
            await axios
              .post("http://192.168.1.75:8080/patient/pending", {
                patid: element.patientId[0],
              })
              .then(async (res) => {
                let array = [];
                array.push(res.data.firstName + " " + res.data.lastName);
                await pointer.setState({ patName: array });
              });
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const cards = this.state.pending;
    const { navigation } = this.props;
    const patient = this.state.patName;
    console.log("render here", patient);
    return (
      <Block>
        <Block
          safe
          style={{
            backgroundColor: theme.COLORS.WHITE,
            marginTop: theme.SIZES.BASE * 1,
          }}
        >
          <ScrollView contentContainerStyle={styles.cards}>
            <Block flex space="between">
              {cards &&
                cards.map((card, i) => (
                  <Card
                    key={i}
                    flex={5}
                    borderless
                    shadowColor={theme.COLORS.TWITTER}
                    titleColor={theme.COLORS.WHITE}
                    style={styles.card}
                    title={patient[0]}
                    caption={
                      "Date: " +
                      card.date.slice(0, 11) +
                      "\n" +
                      "Time: " +
                      card.time
                    }
                    captionColor={theme.COLORS.WHITE}
                    imageStyle={[card.padded ? styles.rounded : null]}
                    imageBlockStyle={[
                      card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                      card.full ? null : styles.noRadius,
                    ]}
                  >
                    {card.full ? (
                      <LinearGradient
                        colors={["transparent", "rgba(0,0,0, 0.8)"]}
                        style={styles.gradient}
                      />
                    ) : null}
                    <AntDesign name="checkcircle" size={22} color="black" />
                    <AntDesign name="closecircle" size={22} color="black" />
                  </Card>
                ))}
            </Block>
          </ScrollView>
        </Block>
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
    backgroundColor: theme.COLORS.BLUE,
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
