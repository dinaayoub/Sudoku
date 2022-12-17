import React, { Component } from "react";
import { HStack } from "@react-native-material/core";
import { StyleSheet, Text } from "react-native";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { squareData: props.squareData };
  }

  render() {
    return (
      <HStack style={styles.container}>
        <HStack style={styles.row}>
          <Text style={styles.cell}>{this.state.squareData[0]}</Text>
          <Text style={styles.cell}>{this.state.squareData[1]}</Text>
          <Text style={styles.cell}>{this.state.squareData[2]}</Text>
        </HStack>
        <HStack style={styles.row}>
          <Text style={styles.cell}>{this.state.squareData[3]}</Text>
          <Text style={styles.cell}>{this.state.squareData[4]}</Text>
          <Text style={styles.cell}>{this.state.squareData[5]}</Text>
        </HStack>
        <HStack style={styles.row}>
          <Text style={styles.cell}>{this.state.squareData[6]}</Text>
          <Text style={styles.cell}>{this.state.squareData[7]}</Text>
          <Text style={styles.cell}>{this.state.squareData[8]}</Text>
        </HStack>
      </HStack>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    width: 30,
    height: 30,
    backgroundColor: "#fffdff",
    borderWidth: 1,
    borderColor: "#000000",
    textAlign: "center",
    paddingVertical: 3,
    textAlignVertical: "center",
    includeFontPadding: false,
    color: "#000000",
  },
  container: {
    borderWidth: 2,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
});
