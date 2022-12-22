import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Board from "./src/components/board";
import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import FillSquares from "./src/fillsquares";
import FillRows from "./src/fillrows";
import FillColumns from "./src/fillcolumns";
import CreateSquareMap from "./src/createSquareMap";

export default function App() {
  var sudoku = require("sudoku");
  const puzzle = sudoku.makepuzzle();
  const solution = sudoku.solvepuzzle(puzzle);

  for (let j = 0; j < 81; j++) {
    if (puzzle[j] != undefined) {
      puzzle[j] = puzzle[j] + 1;
    }
  }
  const rows = FillRows(puzzle);
  const columns = FillColumns(puzzle);
  const squares = FillSquares(puzzle);
  const squareMap = CreateSquareMap(puzzle);

  return (
    <View style={styles.container}>
      <AppBar
        style={styles.appbar}
        title="Sudoku"
        //subtitle="Lorem ipsum"
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
        columns={columns}
        squareMap={squareMap}
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
    flex: 1,
  },
  appbar: {
    width: "100%",
  },
});
