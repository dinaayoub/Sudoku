import React, { Component } from "react";
import { HStack } from "@react-native-material/core";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalSquareData: props.squareData,
      updatedSquareData: props.squareData,
      squareNumber: props.squareNumber,
      multiSelectIsEnabled: props.multiSelectIsEnabled,
      selectedCells: [],
      throwaway: "",
    };
  }

  toggleLocalCellSelection(cellNumber) {
    let index = this.state.selectedCells.indexOf(cellNumber);
    if (index < 0) {
      if (this.props.multiSelectIsEnabled) {
        // the selected cell number is not in the local selected cells, and multiselect is on, add the cell to the SelectedCells
        const selectedCells = [...this.state.selectedCells];
        selectedCells.push(cellNumber);
        this.setState({
          selectedCells: selectedCells,
        });
      } else {
        // otherwise, overwrite the selected cells with just the new cell
        this.setState({ selectedCells: [cellNumber] });
      }
    } else {
      // the selected cell number is already in the local Selected cells, so just de-select it
      const filteredSelectedCells = this.state.selectedCells.filter(
        (number) => number !== cellNumber
      );
      this.setState({
        selectedCells: filteredSelectedCells,
      });
    }
  }

  onPress(cellNumber) {
    if (this.state.originalSquareData[cellNumber] == undefined) {
      this.toggleLocalCellSelection(cellNumber);
      this.props.toggleCellSelection(this.state.squareNumber, cellNumber);
    }
  }

  render() {
    // TODO: convert this to i, then i can just put 9 of the same text component
    // let i = 0;
    return (
      <HStack style={styles.container}>
        <HStack style={styles.row}>
          <Text
            style={
              this.state.selectedCells.indexOf(0) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(0);
            }}
          >
            {this.state.updatedSquareData[0]}
          </Text>

          <Text
            style={
              this.state.selectedCells.indexOf(1) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(1);
            }}
          >
            {this.state.updatedSquareData[1]}
          </Text>
          <Text
            style={
              this.state.selectedCells.indexOf(2) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(2);
            }}
          >
            {this.state.updatedSquareData[2]}
          </Text>
        </HStack>
        <HStack style={styles.row}>
          <Text
            style={
              this.state.selectedCells.indexOf(3) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(3);
            }}
          >
            {this.state.updatedSquareData[3]}
          </Text>
          <Text
            style={
              this.state.selectedCells.indexOf(4) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(4);
            }}
          >
            {this.state.updatedSquareData[4]}
          </Text>
          <Text
            style={
              this.state.selectedCells.indexOf(5) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(5);
            }}
          >
            {this.state.updatedSquareData[5]}
          </Text>
        </HStack>
        <HStack style={styles.row}>
          <Text
            style={
              this.state.selectedCells.indexOf(6) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(6);
            }}
          >
            {this.state.updatedSquareData[6]}
          </Text>
          <Text
            style={
              this.state.selectedCells.indexOf(7) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(7);
            }}
          >
            {this.state.updatedSquareData[7]}
          </Text>
          <Text
            style={
              this.state.selectedCells.indexOf(8) > -1
                ? styles.selectedCell
                : styles.cell
            }
            onPress={() => {
              this.onPress(8);
            }}
          >
            {this.state.updatedSquareData[8]}
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
