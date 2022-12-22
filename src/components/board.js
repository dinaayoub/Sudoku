import React, { Component } from "react";
import Square from "./square";
import { StyleSheet, View, Text, Switch } from "react-native";
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
      multiSelectIsEnabled: false,
    };
  }

  toggleCellSelection = (squareNumber, squareCellNumber) => {
    let puzzleCellNumber =
      this.state.squareMap[squareNumber].get(squareCellNumber).cellNumber;
    let index = this.state.selectedCells.indexOf(puzzleCellNumber);

    if (this.state.multiSelectIsEnabled) {
      // multiselect is enabled
      if (index > -1) {
        const filteredSelectedCells = this.state.selectedCells.filter(
          (number) => number !== puzzleCellNumber
        );
        this.setState({
          selectedCells: filteredSelectedCells,
        });
      } else {
        const selectedCells = [...this.state.selectedCells];
        selectedCells.push(puzzleCellNumber);
        this.setState({
          selectedCells: selectedCells,
        });
      }
    } else {
      // multiselect is disabled
      if (index > -1) {
        this.setState({ selectedCells: [] });
      } else {
        this.setState({ selectedCells: [puzzleCellNumber] });
      }
    }
  };

  toggleMultiSelect = (value) => {
    this.setState({ multiSelectIsEnabled: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <HStack style={styles.row}>
          <Square
            squareData={this.state.squares[0]}
            squareNumber={0}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
          <Square
            squareData={this.state.squares[1]}
            squareNumber={1}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
          <Square
            squareData={this.state.squares[2]}
            squareNumber={2}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
        </HStack>
        <HStack style={styles.row}>
          <Square
            squareData={this.state.squares[3]}
            squareNumber={3}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
          <Square
            squareData={this.state.squares[4]}
            squareNumber={4}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
          <Square
            squareData={this.state.squares[5]}
            squareNumber={5}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
        </HStack>
        <HStack style={styles.row}>
          <Square
            squareData={this.state.squares[6]}
            squareNumber={6}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
          <Square
            squareData={this.state.squares[7]}
            squareNumber={7}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
          <Square
            squareData={this.state.squares[8]}
            squareNumber={8}
            toggleCellSelection={this.toggleCellSelection}
            multiSelectIsEnabled={this.state.multiSelectIsEnabled}
          />
        </HStack>
        <HStack style={styles.row}>
          <Text>Multiselect </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={this.toggleMultiSelect}
            value={this.state.multiSelectIsEnabled}
          />
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
