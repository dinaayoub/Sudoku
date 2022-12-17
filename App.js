import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Board from "./src/components/board";
import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  var sudoku = require("sudoku");
  const puzzle = sudoku.makepuzzle();
  const solution = sudoku.solvepuzzle(puzzle);

  for (let j = 0; j < 81; j++) {
    if (puzzle[j] != undefined) {
      puzzle[j] = puzzle[j] + 1;
    }
  }

  const rows = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    for (let k = 0; k < 9; k++) {
      rows[i].push(puzzle[i * 9 + k]);
    }
  }
  const squares = [];

  squares[0] = [
    puzzle[0],
    puzzle[1],
    puzzle[2],
    puzzle[9],
    puzzle[10],
    puzzle[11],
    puzzle[18],
    puzzle[19],
    puzzle[20],
  ];
  squares[1] = [
    puzzle[3],
    puzzle[4],
    puzzle[5],
    puzzle[12],
    puzzle[13],
    puzzle[14],
    puzzle[21],
    puzzle[22],
    puzzle[23],
  ];
  squares[2] = [
    puzzle[6],
    puzzle[7],
    puzzle[8],
    puzzle[15],
    puzzle[16],
    puzzle[17],
    puzzle[24],
    puzzle[25],
    puzzle[26],
  ];
  squares[3] = [
    puzzle[27],
    puzzle[28],
    puzzle[29],
    puzzle[36],
    puzzle[37],
    puzzle[38],
    puzzle[45],
    puzzle[46],
    puzzle[47],
  ];
  squares[4] = [
    puzzle[30],
    puzzle[31],
    puzzle[32],
    puzzle[39],
    puzzle[40],
    puzzle[41],
    puzzle[48],
    puzzle[49],
    puzzle[50],
  ];
  squares[5] = [
    puzzle[33],
    puzzle[34],
    puzzle[35],
    puzzle[42],
    puzzle[43],
    puzzle[44],
    puzzle[51],
    puzzle[52],
    puzzle[53],
  ];
  squares[6] = [
    puzzle[54],
    puzzle[55],
    puzzle[56],
    puzzle[63],
    puzzle[64],
    puzzle[65],
    puzzle[72],
    puzzle[73],
    puzzle[74],
  ];
  squares[7] = [
    puzzle[57],
    puzzle[58],
    puzzle[59],
    puzzle[66],
    puzzle[67],
    puzzle[68],
    puzzle[75],
    puzzle[76],
    puzzle[77],
  ];
  squares[8] = [
    puzzle[60],
    puzzle[61],
    puzzle[62],
    puzzle[69],
    puzzle[70],
    puzzle[71],
    puzzle[78],
    puzzle[79],
    puzzle[80],
  ];

  return (
    <View style={styles.container}>
      <AppBar
        style={styles.appbar}
        title="Sudoku"
        subtitle="Lorem ipsum"
        centerTitle={true}
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <IconButton
            icon={(props) => <Icon name="dots-vertical" {...props} />}
            {...props}
          />
        )}
      />
      <Board
        puzzle={puzzle}
        solution={solution}
        squares={squares}
        rows={rows}
      ></Board>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    width: 300,
  },
  appbar: {
    width: 300,
  },
});
