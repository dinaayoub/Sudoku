import React, { Component } from 'react';
import { HStack } from '@react-native-material/core'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Row extends Component {

  constructor(props){
    super(props);
    this.state = { rowData: props.rowData};
  }

  render(){

    return (
      <HStack style={styles.row}>
        {this.props.rowData[0]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[0]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 0)} Text={this.state.rowData[0]}></TextInput>
        }
        {this.props.rowData[1]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[1]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 1)} Text={this.state.rowData[1]}></TextInput>
        }
        {this.props.rowData[2]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[2]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 2)} Text={this.state.rowData[2]}></TextInput>
        }
        {this.props.rowData[3]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[3]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 3)} Text={this.state.rowData[3]}></TextInput>
        }
        {this.props.rowData[4]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[4]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 4)} Text={this.state.rowData[4]}></TextInput>
        }
        {this.props.rowData[5]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[5]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 5)} Text={this.state.rowData[5]}></TextInput>
        }
        {this.props.rowData[6]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[6]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 6)} Text={this.state.rowData[6]}></TextInput>
        }
        {this.props.rowData[7]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[7]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 7)} Text={this.state.rowData[7]}></TextInput>
        }
        {this.props.rowData[8]? 
        <Text style={styles.prefilledcell}> {this.state.rowData[8]} </Text>: 
        <TextInput style={styles.cell} maxLength={1}  keyboardType = 'numeric'  onChangeText = {(text)=> this.onTextChanged(text, 8)} Text={this.state.rowData[8]}></TextInput>
        }
      

      </HStack>
    );
  }
  
  onTextChanged (text, index) {
    let rowData = [...this.state.rowData]; 
    rowData[index] = text.replace(/[^0-9]/g, '');
    this.setState({rowData});
     // this.setState({
     //     mobile: text.replace(/[^0-9]/g, ''),
     // });
   }
}



const styles = StyleSheet.create({
  
  cell: {
    width: 30,
    height: 30,
    backgroundColor: '#fffdff',
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
    paddingVertical: 3,
    textAlignVertical: 'center',
    includeFontPadding: false,
    color: '#000000'
  },
  prefilledcell: {
    width: 30,
    height: 30,
    color: '#0000ff',
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
    paddingVertical: 3,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  correctcell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#00ff40',
    textAlign: 'center',
    paddingVertical: 3,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  incorrectcell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#ff0000',
    textAlign: 'center',
    paddingVertical: 3,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  row: {
    flexDirection: 'row',
  }
});