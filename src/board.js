import React, { Component } from "react";
import Row from "./components/row";
import { StyleSheet, View, Text } from "react-native";

export default class Board extends Component {
  constructor(props) {
    super(props);
    var sudoku = require("sudoku");
    const puzzle = sudoku.makepuzzle();
    const rows = [];
    for (let i = 0; i < 9; i++) {
      rows[i] = [];
      for (let k = 0; k < 9; k++) {
        rows[i].push(puzzle[i * 9 + k]);
      }
    }
    const solution = sudoku.solvepuzzle();
    this.state = { puzzle: puzzle, rows: rows, solution: solution };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Puzzle = {this.state.puzzle}</Text>
        <Text>0 = {this.state.puzzle[0]}</Text>
        <Text>1 = {this.state.puzzle[1]}</Text>
        <Text>2 = {this.state.puzzle[2]}</Text>
        <Text>3 = {this.state.puzzle[3]}</Text>
        <Text>4 = {this.state.puzzle[4]}</Text>
        <Text>5 = {this.state.puzzle[5]}</Text>
        <Text>6 = {this.state.puzzle[6]}</Text>
        <Text>7 = {this.state.puzzle[7]}</Text>
        <Text>8 = {this.state.puzzle[8]}</Text>

        <Text> {this.state.rows[0]}</Text>
        <Text> {this.state.rows[1]}</Text>
        <Text> {this.state.rows[2]}</Text>
        <Text> {this.state.rows[3]}</Text>
        <Text> {this.state.rows[4]}</Text>
        <Text> {this.state.rows[5]}</Text>
        <Text> {this.state.rows[6]}</Text>
        <Text> {this.state.rows[7]}</Text>
        <Text> {this.state.rows[8]}</Text>

        <Row rowData={this.state.rows[0]}></Row>
        <Row rowData={this.state.rows[1]}></Row>
        <Row rowData={this.state.rows[2]}></Row>
        <Row rowData={this.state.rows[3]}></Row>
        <Row rowData={this.state.rows[4]}></Row>
        <Row rowData={this.state.rows[5]}></Row>
        <Row rowData={this.state.rows[6]}></Row>
        <Row rowData={this.state.rows[7]}></Row>
        <Row rowData={this.state.rows[8]}></Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
