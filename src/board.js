import React, { Component } from 'react';
import Row from './components/row';
import { StyleSheet, View } from 'react-native';


export default class Board extends Component {

  render(){
    var sudoku = require('sudoku');
    const puzzle = sudoku.makepuzzle();
    const rows = [];
    for (let i = 0; i < 9; i++){
      rows[i] = [];
      for (let k = 0; k < 9; k++) {
        rows[i].push(puzzle[i*9 + k]);
      }
    }

    // const solution = sudoku.solvepuzzle();
    return (
        <View style={styles.container}>
          <Row rowData={rows[0]}></Row>
          <Row rowData={rows[1]}></Row>
          <Row rowData={rows[2]}></Row>
          <Row rowData={rows[3]}></Row>
          <Row rowData={rows[4]}></Row>
          <Row rowData={rows[5]}></Row>
          <Row rowData={rows[6]}></Row>
          <Row rowData={rows[7]}></Row>
          <Row rowData={rows[8]}></Row>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
