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
      columns: props.columns,
      squareMap: props.squareMap,
      selectedCells: [],
    };
  }

  toggleCellSelection(squareNumber, squareCellNumber) {
    // Look it up in the squareMap using the square number to find the index of the map in SquareMap,
    // then using the cell Number to find the object in the map, which will then have a "cell number"
    let puzzleCellNumber =
      this.state.squareMap[squareNumber].get(squareCellNumber).cellNumber;
    let index = this.state.selectedCells.indexOf(puzzleCellNumber);
    if (index > -1) {
      //TODO: uncomment this or replace with a setState
      //this.state.selectedCells.splice(index, 1);
    } else {
      //TODO: uncomment this or replace with a setState
      // this.state.selectedCells.push(puzzleCellNumber);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HStack style={styles.row}>
          <Square
            squareData={this.state.squares[0]}
            squareNumber={1}
            toggleCellSelection={this.toggleCellSelection}
          />
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
