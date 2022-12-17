import React, { Component } from "react";
import Square from "./square";
import { StyleSheet, View, Text } from "react-native";
import { HStack } from "@react-native-material/core";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: props.puzzle,
      solution: props.solution,
      squares: props.squares,
      rows: props.rows,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <HStack style={styles.row}>
          <Square squareData={this.state.squares[0]} />
          <Square squareData={this.state.squares[1]} />
          <Square squareData={this.state.squares[2]} />
        </HStack>
        <HStack style={styles.row}>
          <Square squareData={this.state.squares[3]} />
          <Square squareData={this.state.squares[4]} />
          <Square squareData={this.state.squares[5]} />
        </HStack>
        <HStack style={styles.row}>
          <Square squareData={this.state.squares[6]} />
          <Square squareData={this.state.squares[7]} />
          <Square squareData={this.state.squares[8]} />
        </HStack>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  redBackground: {
    backgroundColor: "red",
  },
});
