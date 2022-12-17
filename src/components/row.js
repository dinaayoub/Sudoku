import React, { Component } from "react";
import { HStack } from "@react-native-material/core";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { rowData: props.rowData };
  }

  render() {
    return (
      <HStack style={styles.row}>
        {this.props.rowData[0] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[0] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[0]}</Text>
        )}
        {this.props.rowData[1] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[1] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[1]}</Text>
        )}
        {this.props.rowData[2] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[2] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[2]}</Text>
        )}
        {this.props.rowData[3] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[3] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[3]}</Text>
        )}
        {this.props.rowData[4] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[4] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[4]}</Text>
        )}
        {this.props.rowData[5] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[5] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[5]}</Text>
        )}
        {this.props.rowData[6] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[6] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[6]}</Text>
        )}
        {this.props.rowData[7] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[7] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[7]}</Text>
        )}
        {this.props.rowData[8] != undefined ? (
          <Text style={styles.prefilledcell}>{this.props.rowData[8] + 1}</Text>
        ) : (
          <Text style={styles.cell}>{this.state.rowData[8]}</Text>
        )}
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
  prefilledcell: {
    width: 30,
    height: 30,
    color: "#0000ff",
    borderWidth: 1,
    borderColor: "#000000",
    textAlign: "center",
    paddingVertical: 3,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  correctcell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#00ff40",
    textAlign: "center",
    paddingVertical: 3,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  incorrectcell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#ff0000",
    textAlign: "center",
    paddingVertical: 3,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  row: {
    flexDirection: "row",
  },
});
