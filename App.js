import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './src/board';
import {AppBar,HStack,IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
     <AppBar style={styles.appbar}
        title="Title"
        subtitle="Lorem ipsum"
        centerTitle={true}
        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
        )}
        trailing={props => (
          <IconButton
            icon={props => <Icon name="dots-vertical" {...props} />}
            {...props}
          />
        )}
      />
      <Text>Welcome to the sudoku app</Text>
      <Board></Board>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: 300,
  },
  appbar:{
    width: 300
  }
});
