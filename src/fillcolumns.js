export default function FillColumns(puzzle) {
  const columns = [];

  for (let i = 0; i < 9; i++) {
    columns[i] = [];
    for (let k = 0; k < 9; k++) {
      columns[i].push(puzzle[i + k * 9]);
    }
  }

  return columns;
}
