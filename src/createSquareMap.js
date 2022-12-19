export default function CreateSquareMap(puzzle) {
  const squares = [];

  const square0Map = new Map();
  square0Map.set(0, { cellNumber: 0, cellValue: puzzle[0] });
  square0Map.set(1, { cellNumber: 1, cellValue: puzzle[1] });
  square0Map.set(2, { cellNumber: 2, cellValue: puzzle[2] });
  square0Map.set(3, { cellNumber: 9, cellValue: puzzle[9] });
  square0Map.set(4, { cellNumber: 10, cellValue: puzzle[10] });
  square0Map.set(5, { cellNumber: 11, cellValue: puzzle[11] });
  square0Map.set(6, { cellNumber: 18, cellValue: puzzle[18] });
  square0Map.set(7, { cellNumber: 19, cellValue: puzzle[19] });
  square0Map.set(8, { cellNumber: 20, cellValue: puzzle[20] });
  squares.push(square0Map);

  const square1Map = new Map();
  square1Map.set(0, { cellNumber: 3, cellValue: puzzle[3] });
  square1Map.set(1, { cellNumber: 4, cellValue: puzzle[4] });
  square1Map.set(2, { cellNumber: 5, cellValue: puzzle[5] });
  square1Map.set(3, { cellNumber: 12, cellValue: puzzle[12] });
  square1Map.set(4, { cellNumber: 13, cellValue: puzzle[13] });
  square1Map.set(5, { cellNumber: 14, cellValue: puzzle[14] });
  square1Map.set(6, { cellNumber: 21, cellValue: puzzle[21] });
  square1Map.set(7, { cellNumber: 22, cellValue: puzzle[22] });
  square1Map.set(8, { cellNumber: 23, cellValue: puzzle[23] });
  squares.push(square1Map);

  const square2Map = new Map();
  square2Map.set(0, { cellNumber: 6, cellValue: puzzle[6] });
  square2Map.set(1, { cellNumber: 7, cellValue: puzzle[7] });
  square2Map.set(2, { cellNumber: 8, cellValue: puzzle[8] });
  square2Map.set(3, { cellNumber: 15, cellValue: puzzle[15] });
  square2Map.set(4, { cellNumber: 16, cellValue: puzzle[16] });
  square2Map.set(5, { cellNumber: 17, cellValue: puzzle[17] });
  square2Map.set(6, { cellNumber: 24, cellValue: puzzle[24] });
  square2Map.set(7, { cellNumber: 25, cellValue: puzzle[25] });
  square2Map.set(8, { cellNumber: 26, cellValue: puzzle[26] });
  squares.push(square2Map);

  const square3Map = new Map();
  square3Map.set(0, { cellNumber: 27, cellValue: puzzle[27] });
  square3Map.set(1, { cellNumber: 28, cellValue: puzzle[28] });
  square3Map.set(2, { cellNumber: 29, cellValue: puzzle[29] });
  square3Map.set(3, { cellNumber: 36, cellValue: puzzle[36] });
  square3Map.set(4, { cellNumber: 37, cellValue: puzzle[37] });
  square3Map.set(5, { cellNumber: 38, cellValue: puzzle[38] });
  square3Map.set(6, { cellNumber: 45, cellValue: puzzle[45] });
  square3Map.set(7, { cellNumber: 46, cellValue: puzzle[46] });
  square3Map.set(8, { cellNumber: 47, cellValue: puzzle[47] });
  squares.push(square3Map);

  const square4Map = new Map();
  square4Map.set(0, { cellNumber: 30, cellValue: puzzle[30] });
  square4Map.set(1, { cellNumber: 31, cellValue: puzzle[31] });
  square4Map.set(2, { cellNumber: 32, cellValue: puzzle[32] });
  square4Map.set(3, { cellNumber: 39, cellValue: puzzle[39] });
  square4Map.set(4, { cellNumber: 40, cellValue: puzzle[40] });
  square4Map.set(5, { cellNumber: 41, cellValue: puzzle[41] });
  square4Map.set(6, { cellNumber: 48, cellValue: puzzle[48] });
  square4Map.set(7, { cellNumber: 49, cellValue: puzzle[49] });
  square4Map.set(8, { cellNumber: 50, cellValue: puzzle[50] });
  squares.push(square4Map);

  const square5Map = new Map();
  square5Map.set(0, { cellNumber: 33, cellValue: puzzle[33] });
  square5Map.set(1, { cellNumber: 34, cellValue: puzzle[34] });
  square5Map.set(2, { cellNumber: 35, cellValue: puzzle[35] });
  square5Map.set(3, { cellNumber: 42, cellValue: puzzle[42] });
  square5Map.set(4, { cellNumber: 43, cellValue: puzzle[43] });
  square5Map.set(5, { cellNumber: 44, cellValue: puzzle[44] });
  square5Map.set(6, { cellNumber: 51, cellValue: puzzle[51] });
  square5Map.set(7, { cellNumber: 52, cellValue: puzzle[52] });
  square5Map.set(8, { cellNumber: 53, cellValue: puzzle[53] });
  squares.push(square5Map);

  const square6Map = new Map();
  square6Map.set(0, { cellNumber: 54, cellValue: puzzle[54] });
  square6Map.set(1, { cellNumber: 55, cellValue: puzzle[55] });
  square6Map.set(2, { cellNumber: 56, cellValue: puzzle[56] });
  square6Map.set(3, { cellNumber: 63, cellValue: puzzle[63] });
  square6Map.set(4, { cellNumber: 64, cellValue: puzzle[64] });
  square6Map.set(5, { cellNumber: 65, cellValue: puzzle[65] });
  square6Map.set(6, { cellNumber: 72, cellValue: puzzle[72] });
  square6Map.set(7, { cellNumber: 73, cellValue: puzzle[73] });
  square6Map.set(8, { cellNumber: 74, cellValue: puzzle[74] });
  squares.push(square6Map);

  const square7Map = new Map();
  square7Map.set(0, { cellNumber: 57, cellValue: puzzle[57] });
  square7Map.set(1, { cellNumber: 58, cellValue: puzzle[58] });
  square7Map.set(2, { cellNumber: 59, cellValue: puzzle[59] });
  square7Map.set(3, { cellNumber: 66, cellValue: puzzle[66] });
  square7Map.set(4, { cellNumber: 67, cellValue: puzzle[67] });
  square7Map.set(5, { cellNumber: 68, cellValue: puzzle[68] });
  square7Map.set(6, { cellNumber: 75, cellValue: puzzle[75] });
  square7Map.set(7, { cellNumber: 76, cellValue: puzzle[76] });
  square7Map.set(8, { cellNumber: 77, cellValue: puzzle[77] });
  squares.push(square7Map);

  const square8Map = new Map();
  square8Map.set(0, { cellNumber: 60, cellValue: puzzle[60] });
  square8Map.set(1, { cellNumber: 61, cellValue: puzzle[61] });
  square8Map.set(2, { cellNumber: 62, cellValue: puzzle[62] });
  square8Map.set(3, { cellNumber: 69, cellValue: puzzle[69] });
  square8Map.set(4, { cellNumber: 70, cellValue: puzzle[70] });
  square8Map.set(5, { cellNumber: 71, cellValue: puzzle[71] });
  square8Map.set(6, { cellNumber: 78, cellValue: puzzle[78] });
  square8Map.set(7, { cellNumber: 79, cellValue: puzzle[79] });
  square8Map.set(8, { cellNumber: 80, cellValue: puzzle[80] });
  squares.push(square8Map);

  return squares;
}
