import React, { Component } from "react";
import { HStack } from "@react-native-material/core";
import { StyleSheet, Text } from "react-native";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareData: props.squareData,
      squareNumber: props.squareNumber,
      localSelectedCells: [],
    };
  }

  toggleLocalCellSelection(cellNumber) {
    let index = this.state.selectedCells.indexOf(cellNumber);
    if (index > -1) {
      //TODO: uncomment this
      this.setState(
        localSelectedCells,
        this.state.localSelectedCells.splice(index, 1)
      );
    } else {
      // TODO: unsure if this is necessary. Can we just do:
      // this.state.localSelectedCells.push(cellNumber);
      //TODO: uncomment this
      const selectedCells = this.state.localSelectedCells;
      selectedCells.push(cellNumber);
      this.setState(localSelectedCells, selectedCells);
    }
  }

  onPress(event, cellNumber) {
    // Do the work to find the cell number in the map, or something!
    this.props.toggleCellSelection(this.state.squareNumber, cellNumber);
    //change the style of the selected cell
    if (this.state.localSelectedCells.indexOf(cellNumber) > -1) {
      // remove the cell number from the local selected cells
      this.toggleLocalCellSelection(cellNumber);
    } else {
      const selectedCells = this.state.localSelectedCells;
      selectedCells.push(cellNumber);
      this.setState(localSelectedCells, selectedCells);
      // this.state.localSelectedCells.push(cellNumber);
    }
    // ignore default
    event.ignoreDefault();
  }

  render() {
    return (
      <HStack style={styles.container}>
        <Text>{this.state.selectedCells}</Text>
        <HStack style={styles.row}>
          <Text
            style={
              this.state.localSelectedCells.indexOf(0) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 0);
            }}
          >
            {this.state.squareData[0]}
          </Text>
          <Text
            style={
              this.state.localSelectedCells.indexOf(1) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 1);
            }}
          >
            {this.state.squareData[1]}
          </Text>
          <Text
            style={
              this.state.localSelectedCells.indexOf(2) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 2);
            }}
          >
            {this.state.squareData[2]}
          </Text>
        </HStack>
        <HStack style={styles.row}>
          <Text
            style={
              this.state.localSelectedCells.indexOf(3) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 3);
            }}
          >
            {this.state.squareData[3]}
          </Text>
          <Text
            style={
              this.state.localSelectedCells.indexOf(4) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 4);
            }}
          >
            {this.state.squareData[4]}
          </Text>
          <Text
            style={
              this.state.localSelectedCells.indexOf(5) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 5);
            }}
          >
            {this.state.squareData[5]}
          </Text>
        </HStack>
        <HStack style={styles.row}>
          <Text
            style={
              this.state.localSelectedCells.indexOf(6) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 6);
            }}
          >
            {this.state.squareData[6]}
          </Text>
          <Text
            style={
              this.state.localSelectedCells.indexOf(7) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 7);
            }}
          >
            {this.state.squareData[7]}
          </Text>
          <Text
            style={
              this.state.localSelectedCells.indexOf(8) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={(event) => {
              this.onPress(event, 8);
            }}
          >
            {this.state.squareData[8]}
          </Text>
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
  selectedCell: {
    width: 30,
    height: 30,
    backgroundColor: "#ee3399",
    borderWidth: 1,
    borderColor: "#000000",
    textAlign: "center",
    paddingVertical: 3,
    textAlignVertical: "center",
    includeFontPadding: false,
    color: "#000000",
  },
});
