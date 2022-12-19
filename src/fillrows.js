export default function FillRows(puzzle) {
  const rows = [];

  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    for (let k = 0; k < 9; k++) {
      rows[i].push(puzzle[i * 9 + k]);
    }
  }
  return rows;
}
