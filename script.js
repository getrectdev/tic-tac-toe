let gameBoard = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  move(n, v) {
    if (this.board[n] != 0) {
      console.log("spot already taken");
      return;
    } else {
      this.board[n] = v;
      console.log(this.board);
    }
  },
};

const cellButtons = document.querySelectorAll(".board-cell");
const tokens = ["X", "O"];
let currentPlayer = 0;

cellButtons.forEach((element) => {
  element.addEventListener(
    "click",
    () => {
      const numId = Number(element.id.replace("cell", ""));
      gameBoard.move(numId, 1);
      element.textContent = tokens[currentPlayer];
      currentPlayer += 1;
      currentPlayer %= 2;
    },
    { once: true },
  );
});
